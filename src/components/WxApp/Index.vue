<template>
  <div class="wx-app">
    <div v-if="openFail" class="mask">
      <img src="./imgs/arrow.png" alt="" class="arrow" />
      <div class="message">
        <p>1. 点击右上角选择</p>
        <p>2. 选择浏览器打开</p>
      </div>
      <!-- <img src="./imgs/logo.png" alt="" class="logo" /> -->
    </div>
    <!-- 尝试用定位 + z-index 控制样式 -->
    <wx-open-launch-app id="btn" :appid="appid266" :extinfo="extinfo" class="btn-open-app" 
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
    <div @click="openApp($event)" class="btn-open-app" >
      <slot />
    </div>
  </div>

</template>

<script lang='ts'>
import Vue from 'vue'
import sha1 from 'js-sha1'
import { wechatmp } from '@/idl/bgo/component/wechatmp'

export default Vue.extend({
  props: {
    extinfo: {
      type: String,
      required: true
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
    this.wxInited()
  },
  methods: {
    async wxInited() {
      const timestamp = new Date().getTime()
      const result = await wechatmp.WechatmpServer.getJsTicket(new wechatmp.GetJsTicketReq())
      console.log('tic', result)
      if (result) {
        this.ticket = result.jsTicket
      }
      window.localStorage.setItem('jsapi_ticket', JSON.stringify(this.ticket))
      const nonceStr = 'boyaa.com'
      const unSign = `jsapi_ticket=${this.ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${location.href}`
      const signature = sha1(unSign)
      // eslint-disable-next-line
      wx.config({
        // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
        appId: this.wxPublicAppid, // 必填，公众号的唯一标识
        timestamp, // 必填，生成签名的时间戳
        nonceStr, // 必填，生成签名的随机串
        signature, // 必填，签名
        jsApiList: ['onMenuShareAppMessage'], // 必填，需要使用的JS接口列表
        openTagList: this.openTagList // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
      })

      // eslint-disable-next-line
      wx.ready(() => {

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
          })
        }
      })
    },
    openApp (event: EventTarget) {
      this.$emit('onClick', event)
      console.log('yxdt266://' + location.search);
      window.location.href = 'yxdt266://' + location.search
      this.noApp()
    },
    noApp () {
      this.timer = setTimeout(() => {
        console.log('noApp')
        if(this.timer) clearTimeout(this.timer)
        !(document as any).webkitHidden && !document.hidden && (location.href = 'https://www.266.com')
      }, 2500)
    },

  }
})

</script>


<style scoped>
.wx-app {
  position: relative;
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
