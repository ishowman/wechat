<template>
  <div class="wx-app">
    <!-- 尝试用定位 + z-index 控制样式 -->
    <wx-open-launch-app id="btn" :appid="appid266" :extinfo="`?extend=${extinfo}`" class="btn-open-app wx-btn" 
      v-show="isWexin"
      style="z-index: 9;"
      @click="$emit('onClick', $event)"
    >
      <script type="text/wxtag-template">
        <style>
            .btn{
              display: block;
              width: 100%;
              height: 100%;
            }
        </style>
        <div class="btn">&emsp;</div>
        <div class="btn">&emsp;</div>
        <div class="btn">&emsp;</div>
      </script>
    </wx-open-launch-app>
    <div @click="openApp($event)" class="btn-open-app grid-center" >
      <slot />
    </div>
  </div>

</template>

<script lang='ts'>
import Vue from 'vue'
import sha1 from 'js-sha1'
import { wechatmp } from '@/idl/bgo/component/wechatmp'
function isAndroid () {
  const ua = navigator.userAgent.toLowerCase().toString()
  console.log('isAndroid',(ua.includes("android") || ua.includes("adr")))
  return (ua.includes("android") || ua.includes("adr"))
}
export default Vue.extend({
  props: {
    extinfo: {
      type: String,
      // default: location.search
    },
    failCb: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      appid266: 'wx0cae775a4e151e2f',
      secret: 'e00ec194d1f7905935b98dff20fdfaf9',
      wxPublicAppid: 'wx660b78248c66e79f',
      ticket: '',
      timer: 0,
      openTagList: ['wx-open-launch-app'],
      isWexin: navigator.userAgent.toLowerCase().includes('micromessenger'),
      openFail: false,
    }
  },
  mounted () {
    console.log(101010)
    this.wxInited()
  },
  methods: {
    async wxInited() {
      const wx = window['jWeixin'] || require('weixin-js-sdk') // 修复运行时提示 .config of undefind 的报错

      const timestamp = new Date().getTime()
      const result = await wechatmp.WechatmpServer.getJsTicket(new wechatmp.GetJsTicketReq())
      console.log('tic', result)
      if(!result) return
      // if (result) {
        this.ticket = result.jsTicket
      // }
      window.localStorage.setItem('jsapi_ticket', JSON.stringify(this.ticket))
      const nonceStr = 'boyaa.com'
      const isAnd= isAndroid()
      const url = isAnd? location.href : location.origin+location.pathname
      console.log('url', url )

      const unSign = `jsapi_ticket=${this.ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`
      const signature = sha1(unSign)
      // eslint-disable-next-line
      wx.config({
        debug: window.DEBUG, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
        appId: this.wxPublicAppid, // 必填，公众号的唯一标识
        timestamp, // 必填，生成签名的时间戳
        nonceStr, // 必填，生成签名的随机串
        signature, // 必填，签名
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
        openTagList: this.openTagList // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
      })

      // eslint-disable-next-line
      wx.ready(() => {
        console.log('wx-ready')

        const btn = document.getElementById('btn')
        console.log('ready?', this.openTagList, btn)

        if (btn) {
          btn.addEventListener('ready', function (e) {
            console.log('btn ready')
          })
          btn.addEventListener('launch', function (e) {
            console.log('launch')
          })
          btn.addEventListener('error', (e: any) => {
            console.log('error', e.detail)
            this.openFail = true
            this.$emit('open-failed', e)
            if(!this.failCb) this.noApp()
          })
        }

        this.$emit('wx-ready')
      })
    },
    openApp (event: EventTarget) {
      this.$emit('onClick', event)
      const base = ({
        'test': 'yxdt266test',
        'pre':'yxdt266pre',
        'prod': 'yxdt266'
      } as any)[process.env.VUE_APP_CLIENT_ENV]
      console.log(`${base}://?extend=` + this.extinfo);
      window.location.href = `${base}://?extend=` + this.extinfo
      this.noApp()
    },
    noApp () {
      this.timer = setTimeout(() => {
        console.log('noApp')
        if(this.timer) clearTimeout(this.timer)
        this.$emit('open-failed')
        if(!this.failCb) !(document as any).webkitHidden && !document.hidden && (location.href = 'https://www.266.com')
      }, 2000)
    },

  }
})

</script>


<style scoped>
.wx-app {
  position: relative;
  width: 100%;
  height: 100%;
}
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0, .7);
}
.btn-open-app {
  /* display: block;
  height: 100%;
  width: 100%; */
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.arrow {
  width: 94px;
  height: 226px;
  position: absolute;
  top: 34px;
  right: 52px;
}
.logo {
  width: 226px;
  height: 65px;
  position: absolute;
  bottom: 213px;
  left: 50%;
  transform: translateX(-50%);
}
.message {
  font-size: 29px;
  font-weight: 500;
  color: #ffffff;
  width: 505px;
  height: 212px;
  background: url(./imgs/desc.png) no-repeat;
  background-size: contain;
  position: absolute;
  top: 225px;
  right: 88px;
  padding: 36px 0 0 190px;
  box-sizing: border-box;
}
.message p {
  text-align: left;
  margin: 14px 0;
  line-height: 50px;
  height: 28px;
}
</style>
