import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { api } from '@/idl/tss/user/api'
import { login } from '@/idl/bgo/account/login'
import { userinfo as userinfoWeb } from '@/idl/bgo/account/userinfo_v1'
import { getStoreLocal, setStoreLocal } from 'xj-core/src/util'

@Module
export default class AppStore extends VuexModule {
  UID = getStoreLocal('UID') ? Number(getStoreLocal('UID')) : 0

  userInfo: api.UserInfo = new api.UserInfo();
  token = getStoreLocal('token') || '';
  CDNInfo = new userinfoWeb.GetCDNAddrResponse({
    Addr: '',
    UpLoadAddr: '',
    Pre: '',
    CmsPre: 'http://266-resources.oa.com/',
    FileUpAddr: ''
  });

  get userBaseInfo () {
    return this.userInfo.base
  }

  get cdn () {
    return this.CDNInfo
  }

  get upLoadUrl () {
    return this.CDNInfo.UpLoadAddr
  }

  get avatar () {
    const tempArr = this.userInfo.base.avatar.split('/')
    tempArr[tempArr.length - 1] = 'thumb_' + tempArr[tempArr.length - 1]

    return this.CDNInfo.Addr + tempArr.join('/')
  }

  get uid () {
    return Number(this.UID)
  }

  get vipInfo () {
    return this.userInfo.vip
  }

  get imgUrlPrefix () {
    return this.CDNInfo.CmsPre ? this.CDNInfo.CmsPre : 'http://266-resources.oa.com/'
  }

  get vipMap () {
    switch (this.userInfo.vip.level) {
      case 1: {
        return { url: '/pic/app_1/202010/6hgXKJq8Zq_1602227592.png', name: '黑铁' }
      }
      case 2: {
        return { url: '/pic/app_1/202010/HkvoWNKKsT_1602227592.png', name: '青铜' }
      }
      case 3: {
        return { url: '/pic/app_1/202010/1CCWBwmLlZ_1602227592.png', name: '白银' }
      }
      case 4: {
        return { url: '/pic/app_1/202010/pP3bVOTKuk_1602227592.png', name: '黄金' }
      }
      case 5: {
        return { url: '/pic/app_1/202010/DxxaCqxuig_1602227592.png', name: '铂金' }
      }
      case 6: {
        return { url: '/pic/app_1/202010/sC5M0gUKYq_1602227592.png', name: '钻石' }
      }
      case 101: {
        return { url: '/pic/app_1/202010/JZYiPzLPmA_1602227592.png', name: '至尊' }
      }
      default: {
        return { url: '/pic/app_1/202010/6hgXKJq8Zq_1602227592.png', name: '黑铁' }
      }
    }
  }

  @Mutation
  setUserInfo (userInfo: api.UserInfo) {
    this.userInfo = userInfo || new api.UserInfo()
  }

  @Mutation
  setToken (token: string) {
    this.token = token
    setStoreLocal('token', token)
  }

  @Mutation
  setLoginInfo (info: login.LoginResponse) {
    this.UID = info.UID
    setStoreLocal('UID', info.UID + '')
  }

  @Mutation
  setCDNInfo (CDNInfo: userinfoWeb.GetCDNAddrResponse) {
    this.CDNInfo = CDNInfo || new userinfoWeb.GetCDNAddrResponse()
  }

  @Action({ commit: 'setCDNInfo' })
  async getCDNAdde () {
    const result = await userinfoWeb.UserinfoServer.getCDNAddr(new userinfoWeb.GetCDNAddrRequest())
    return result
  }

  @Action({ commit: 'setUserInfo' })
  async getUserInfo () {
    const result = await api.ApiServer.getUserInfo(new api.GetUserInfoReq({ uids: [this.uid] }))
    console.log(result)
    if (result) { return result.infos[0] }
  }
}
