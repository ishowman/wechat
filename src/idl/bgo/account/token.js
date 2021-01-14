import { __decorate } from "tslib";
/* eslint-disable */
import { rpcPlugin as byRpc, ApiSendConfig } from 'xj-core';
import { Message, Type, Field } from 'protobufjs/light';
import { base as base } from '@/idl/base/base';
export var token;
(function (token) {
    let AccessTokenType;
    (function (AccessTokenType) {
        AccessTokenType[AccessTokenType["OPENTID"] = 0] = "OPENTID";
        AccessTokenType[AccessTokenType["AuthToken"] = 1] = "AuthToken";
    })(AccessTokenType = token.AccessTokenType || (token.AccessTokenType = {}));
    let WxAppType;
    (function (WxAppType) {
        WxAppType[WxAppType["OfficialAccount"] = 0] = "OfficialAccount";
        WxAppType[WxAppType["MiniProgram"] = 1] = "MiniProgram";
    })(WxAppType = token.WxAppType || (token.WxAppType = {}));
    let GetAccessTokenReq = class GetAccessTokenReq extends Message {
        constructor(param) {
            super();
            this.appId = "";
            this.type = 0;
            this.ipaddr = "";
            if (param) {
                this.appId = param.appId;
                this.type = param.type;
                this.ipaddr = param.ipaddr;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], GetAccessTokenReq.prototype, "appId", void 0);
    __decorate([
        Field.d(2, AccessTokenType, "optional")
    ], GetAccessTokenReq.prototype, "type", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], GetAccessTokenReq.prototype, "ipaddr", void 0);
    GetAccessTokenReq = __decorate([
        Type.d("Type_bgo_account_token_proto_GetAccessTokenReq")
    ], GetAccessTokenReq);
    token.GetAccessTokenReq = GetAccessTokenReq;
    let GetAccessTokenResp = class GetAccessTokenResp extends Message {
        constructor(param) {
            super();
            this.accessToken = "";
            this.openId = "";
            this.expireTime = 0;
            if (param) {
                this.accessToken = param.accessToken;
                this.openId = param.openId;
                this.expireTime = param.expireTime;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetAccessTokenResp.prototype, "accessToken", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], GetAccessTokenResp.prototype, "openId", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], GetAccessTokenResp.prototype, "expireTime", void 0);
    GetAccessTokenResp = __decorate([
        Type.d("Type_bgo_account_token_proto_GetAccessTokenResp")
    ], GetAccessTokenResp);
    token.GetAccessTokenResp = GetAccessTokenResp;
    let AuthAccessTokenReq = class AuthAccessTokenReq extends Message {
        constructor(param) {
            super();
            this.accessToken = "";
            this.ipaddr = "";
            if (param) {
                this.accessToken = param.accessToken;
                this.ipaddr = param.ipaddr;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], AuthAccessTokenReq.prototype, "accessToken", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], AuthAccessTokenReq.prototype, "ipaddr", void 0);
    AuthAccessTokenReq = __decorate([
        Type.d("Type_bgo_account_token_proto_AuthAccessTokenReq")
    ], AuthAccessTokenReq);
    token.AuthAccessTokenReq = AuthAccessTokenReq;
    let AuthAccessTokenResp = class AuthAccessTokenResp extends Message {
        constructor(param) {
            super();
            this.openId = "";
            this.uid = 0;
            this.appId = "";
            this.expireTime = 0;
            this.ctxAppId = 0;
            if (param) {
                this.openId = param.openId;
                this.uid = param.uid;
                this.appId = param.appId;
                this.expireTime = param.expireTime;
                this.ctxAppId = param.ctxAppId;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], AuthAccessTokenResp.prototype, "openId", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], AuthAccessTokenResp.prototype, "uid", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], AuthAccessTokenResp.prototype, "appId", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], AuthAccessTokenResp.prototype, "expireTime", void 0);
    __decorate([
        Field.d(5, "uint32", "optional")
    ], AuthAccessTokenResp.prototype, "ctxAppId", void 0);
    AuthAccessTokenResp = __decorate([
        Type.d("Type_bgo_account_token_proto_AuthAccessTokenResp")
    ], AuthAccessTokenResp);
    token.AuthAccessTokenResp = AuthAccessTokenResp;
    let GetUidByOpenIdReq = class GetUidByOpenIdReq extends Message {
        constructor(param) {
            super();
            this.openId = "";
            if (param) {
                this.openId = param.openId;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetUidByOpenIdReq.prototype, "openId", void 0);
    GetUidByOpenIdReq = __decorate([
        Type.d("Type_bgo_account_token_proto_GetUidByOpenIdReq")
    ], GetUidByOpenIdReq);
    token.GetUidByOpenIdReq = GetUidByOpenIdReq;
    let GetUidByOpenIdResp = class GetUidByOpenIdResp extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.appId = "";
            if (param) {
                this.uid = param.uid;
                this.appId = param.appId;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], GetUidByOpenIdResp.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], GetUidByOpenIdResp.prototype, "appId", void 0);
    GetUidByOpenIdResp = __decorate([
        Type.d("Type_bgo_account_token_proto_GetUidByOpenIdResp")
    ], GetUidByOpenIdResp);
    token.GetUidByOpenIdResp = GetUidByOpenIdResp;
    let DelAccessTokenReq = class DelAccessTokenReq extends Message {
        constructor(param) {
            super();
            this.accessToken = "";
            if (param) {
                this.accessToken = param.accessToken;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], DelAccessTokenReq.prototype, "accessToken", void 0);
    DelAccessTokenReq = __decorate([
        Type.d("Type_bgo_account_token_proto_DelAccessTokenReq")
    ], DelAccessTokenReq);
    token.DelAccessTokenReq = DelAccessTokenReq;
    let GetLastAuthInfoByUidReq = class GetLastAuthInfoByUidReq extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            if (param) {
                this.uid = param.uid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], GetLastAuthInfoByUidReq.prototype, "uid", void 0);
    GetLastAuthInfoByUidReq = __decorate([
        Type.d("Type_bgo_account_token_proto_GetLastAuthInfoByUidReq")
    ], GetLastAuthInfoByUidReq);
    token.GetLastAuthInfoByUidReq = GetLastAuthInfoByUidReq;
    let AuthInfo = class AuthInfo extends Message {
        constructor(param) {
            super();
            this.accessToken = "";
            this.appid = "";
            this.ipaddr = "";
            this.updateTime = 0;
            if (param) {
                this.accessToken = param.accessToken;
                this.appid = param.appid;
                this.ipaddr = param.ipaddr;
                this.updateTime = param.updateTime;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], AuthInfo.prototype, "accessToken", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], AuthInfo.prototype, "appid", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], AuthInfo.prototype, "ipaddr", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], AuthInfo.prototype, "updateTime", void 0);
    AuthInfo = __decorate([
        Type.d("Type_bgo_account_token_proto_AuthInfo")
    ], AuthInfo);
    token.AuthInfo = AuthInfo;
    let GetLastAuthInfoByUidResp = class GetLastAuthInfoByUidResp extends Message {
        constructor(param) {
            super();
            this.info = new AuthInfo();
            if (param) {
                this.info = new AuthInfo(param.info);
            }
        }
    };
    __decorate([
        Field.d(1, AuthInfo, "optional")
    ], GetLastAuthInfoByUidResp.prototype, "info", void 0);
    GetLastAuthInfoByUidResp = __decorate([
        Type.d("Type_bgo_account_token_proto_GetLastAuthInfoByUidResp")
    ], GetLastAuthInfoByUidResp);
    token.GetLastAuthInfoByUidResp = GetLastAuthInfoByUidResp;
    let GetWeChatOpenIdReq = class GetWeChatOpenIdReq extends Message {
        constructor(param) {
            super();
            this.appType = 0;
            this.wxAppId = "";
            this.code = "";
            if (param) {
                this.appType = param.appType;
                this.wxAppId = param.wxAppId;
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, WxAppType, "optional")
    ], GetWeChatOpenIdReq.prototype, "appType", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], GetWeChatOpenIdReq.prototype, "wxAppId", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], GetWeChatOpenIdReq.prototype, "code", void 0);
    GetWeChatOpenIdReq = __decorate([
        Type.d("Type_bgo_account_token_proto_GetWeChatOpenIdReq")
    ], GetWeChatOpenIdReq);
    token.GetWeChatOpenIdReq = GetWeChatOpenIdReq;
    let GetWeChatOpenIdResp = class GetWeChatOpenIdResp extends Message {
        constructor(param) {
            super();
            this.wxOpenId = "";
            if (param) {
                this.wxOpenId = param.wxOpenId;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetWeChatOpenIdResp.prototype, "wxOpenId", void 0);
    GetWeChatOpenIdResp = __decorate([
        Type.d("Type_bgo_account_token_proto_GetWeChatOpenIdResp")
    ], GetWeChatOpenIdResp);
    token.GetWeChatOpenIdResp = GetWeChatOpenIdResp;
    token.TokenServer = {
        config: new ApiSendConfig(),
        response: { code: 0 },
        resetConfig() {
            this.config = new ApiSendConfig();
        },
        env(baseEnv) {
            baseEnv ? this.config.baseEnv = baseEnv : '';
            return this;
        },
        label(label) {
            label ? this.config.label = label : {};
            return this;
        },
        space(space) {
            space ? this.config.space = space : '';
            return this;
        },
        sen(sen) {
            sen ? this.config.sen = sen : '';
            return this;
        },
        appID(appID) {
            appID ? this.config.appID = appID : 0;
            return this;
        },
        async getAccessToken(param) {
            const buffer = GetAccessTokenReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.token", 1, "GetAccessToken", buffer, this.config);
            return rsp.code === 0 ? GetAccessTokenResp.decode(rsp.data) : null;
        },
        async authAccessToken(param) {
            const buffer = AuthAccessTokenReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.token", 10001, "AuthAccessToken", buffer, this.config);
            return rsp.code === 0 ? AuthAccessTokenResp.decode(rsp.data) : null;
        },
        async getUidByOpenId(param) {
            const buffer = GetUidByOpenIdReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.token", 10002, "GetUidByOpenId", buffer, this.config);
            return rsp.code === 0 ? GetUidByOpenIdResp.decode(rsp.data) : null;
        },
        async delAccessToken(param) {
            const buffer = DelAccessTokenReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.token", 10003, "DelAccessToken", buffer, this.config);
            return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
        },
        async getLastAuthInfoByUid(param) {
            const buffer = GetLastAuthInfoByUidReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.token", 10004, "GetLastAuthInfoByUid", buffer, this.config);
            return rsp.code === 0 ? GetLastAuthInfoByUidResp.decode(rsp.data) : null;
        },
        async getWeChatOpenId(param) {
            const buffer = GetWeChatOpenIdReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.token", 2, "GetWeChatOpenId", buffer, this.config);
            return rsp.code === 0 ? GetWeChatOpenIdResp.decode(rsp.data) : null;
        },
    };
})(token || (token = {}));
//# sourceMappingURL=token.js.map