import { __decorate } from "tslib";
/* eslint-disable */
import { rpcPlugin as byRpc, ApiSendConfig } from 'xj-core';
import { Message, Type, Field } from 'protobufjs/light';
import { account as account_common_account } from '@/idl/bgo/account/common_account';
export var login;
(function (login) {
    let LoginExtend = class LoginExtend extends Message {
        constructor(param) {
            super();
            this.DeviceGUid = "";
            this.DeviceType = 0;
            this.ClientTime = 0;
            this.Latitude = 0;
            this.Longitude = 0;
            this.Language = "";
            if (param) {
                this.DeviceGUid = param.DeviceGUid;
                this.DeviceType = param.DeviceType;
                this.ClientTime = param.ClientTime;
                this.Latitude = param.Latitude;
                this.Longitude = param.Longitude;
                this.Language = param.Language;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], LoginExtend.prototype, "DeviceGUid", void 0);
    __decorate([
        Field.d(2, account_common_account.DeviceType, "optional")
    ], LoginExtend.prototype, "DeviceType", void 0);
    __decorate([
        Field.d(3, "uint64", "optional")
    ], LoginExtend.prototype, "ClientTime", void 0);
    __decorate([
        Field.d(4, "float", "optional")
    ], LoginExtend.prototype, "Latitude", void 0);
    __decorate([
        Field.d(5, "float", "optional")
    ], LoginExtend.prototype, "Longitude", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], LoginExtend.prototype, "Language", void 0);
    LoginExtend = __decorate([
        Type.d("Type_bgo_account_login_proto_LoginExtend")
    ], LoginExtend);
    login.LoginExtend = LoginExtend;
    let LoginRequest = class LoginRequest extends Message {
        constructor(param) {
            super();
            this.AccountType = 0;
            this.Account = "";
            this.Password = "";
            this.Ext = new LoginExtend();
            if (param) {
                this.AccountType = param.AccountType;
                this.Account = param.Account;
                this.Password = param.Password;
                this.Ext = new LoginExtend(param.Ext);
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.AccountType, "optional")
    ], LoginRequest.prototype, "AccountType", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], LoginRequest.prototype, "Account", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], LoginRequest.prototype, "Password", void 0);
    __decorate([
        Field.d(4, LoginExtend, "optional")
    ], LoginRequest.prototype, "Ext", void 0);
    LoginRequest = __decorate([
        Type.d("Type_bgo_account_login_proto_LoginRequest")
    ], LoginRequest);
    login.LoginRequest = LoginRequest;
    let ThirdLoginRequest = class ThirdLoginRequest extends Message {
        constructor(param) {
            super();
            this.AccountType = 0;
            this.PlatUid = "";
            this.ThirdToken = "";
            this.Extend = "";
            this.Ext = new LoginExtend();
            if (param) {
                this.AccountType = param.AccountType;
                this.PlatUid = param.PlatUid;
                this.ThirdToken = param.ThirdToken;
                this.Extend = param.Extend;
                this.Ext = new LoginExtend(param.Ext);
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.AccountType, "optional")
    ], ThirdLoginRequest.prototype, "AccountType", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], ThirdLoginRequest.prototype, "PlatUid", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], ThirdLoginRequest.prototype, "ThirdToken", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], ThirdLoginRequest.prototype, "Extend", void 0);
    __decorate([
        Field.d(5, LoginExtend, "optional")
    ], ThirdLoginRequest.prototype, "Ext", void 0);
    ThirdLoginRequest = __decorate([
        Type.d("Type_bgo_account_login_proto_ThirdLoginRequest")
    ], ThirdLoginRequest);
    login.ThirdLoginRequest = ThirdLoginRequest;
    let RetryLoginRequest = class RetryLoginRequest extends Message {
        constructor(param) {
            super();
            this.UID = 0;
            this.Session = new Uint8Array();
            this.Ext = new LoginExtend();
            if (param) {
                this.UID = param.UID;
                this.Session = new Uint8Array(param.Session);
                this.Ext = new LoginExtend(param.Ext);
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], RetryLoginRequest.prototype, "UID", void 0);
    __decorate([
        Field.d(2, "bytes", "optional")
    ], RetryLoginRequest.prototype, "Session", void 0);
    __decorate([
        Field.d(3, LoginExtend, "optional")
    ], RetryLoginRequest.prototype, "Ext", void 0);
    RetryLoginRequest = __decorate([
        Type.d("Type_bgo_account_login_proto_RetryLoginRequest")
    ], RetryLoginRequest);
    login.RetryLoginRequest = RetryLoginRequest;
    let LoginResponse = class LoginResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.Session = new Uint8Array();
            this.SessionTimeout = 0;
            this.PlatUid = "";
            this.PlatToken = "";
            this.UID = 0;
            this.SmsCodeExpiredTime = 0;
            if (param) {
                this.code = param.code;
                this.Session = new Uint8Array(param.Session);
                this.SessionTimeout = param.SessionTimeout;
                this.PlatUid = param.PlatUid;
                this.PlatToken = param.PlatToken;
                this.UID = param.UID;
                this.SmsCodeExpiredTime = param.SmsCodeExpiredTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], LoginResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "bytes", "optional")
    ], LoginResponse.prototype, "Session", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], LoginResponse.prototype, "SessionTimeout", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], LoginResponse.prototype, "PlatUid", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], LoginResponse.prototype, "PlatToken", void 0);
    __decorate([
        Field.d(8, "int64", "required")
    ], LoginResponse.prototype, "UID", void 0);
    __decorate([
        Field.d(9, "int64", "optional")
    ], LoginResponse.prototype, "SmsCodeExpiredTime", void 0);
    LoginResponse = __decorate([
        Type.d("Type_bgo_account_login_proto_LoginResponse")
    ], LoginResponse);
    login.LoginResponse = LoginResponse;
    let CheckSessionRequest = class CheckSessionRequest extends Message {
        constructor(param) {
            super();
            this.UID = 0;
            this.Session = new Uint8Array();
            this.DeviceGUid = "";
            if (param) {
                this.UID = param.UID;
                this.Session = new Uint8Array(param.Session);
                this.DeviceGUid = param.DeviceGUid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], CheckSessionRequest.prototype, "UID", void 0);
    __decorate([
        Field.d(2, "bytes", "optional")
    ], CheckSessionRequest.prototype, "Session", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], CheckSessionRequest.prototype, "DeviceGUid", void 0);
    CheckSessionRequest = __decorate([
        Type.d("Type_bgo_account_login_proto_CheckSessionRequest")
    ], CheckSessionRequest);
    login.CheckSessionRequest = CheckSessionRequest;
    let CheckSessionResponse = class CheckSessionResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.UID = 0;
            this.SessionTimeout = 0;
            if (param) {
                this.code = param.code;
                this.UID = param.UID;
                this.SessionTimeout = param.SessionTimeout;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], CheckSessionResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], CheckSessionResponse.prototype, "UID", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], CheckSessionResponse.prototype, "SessionTimeout", void 0);
    CheckSessionResponse = __decorate([
        Type.d("Type_bgo_account_login_proto_CheckSessionResponse")
    ], CheckSessionResponse);
    login.CheckSessionResponse = CheckSessionResponse;
    let GetLoginSmsCodeRequest = class GetLoginSmsCodeRequest extends Message {
        constructor(param) {
            super();
            this.Phone = "";
            this.ZoneID = 0;
            if (param) {
                this.Phone = param.Phone;
                this.ZoneID = param.ZoneID;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetLoginSmsCodeRequest.prototype, "Phone", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], GetLoginSmsCodeRequest.prototype, "ZoneID", void 0);
    GetLoginSmsCodeRequest = __decorate([
        Type.d("Type_bgo_account_login_proto_GetLoginSmsCodeRequest")
    ], GetLoginSmsCodeRequest);
    login.GetLoginSmsCodeRequest = GetLoginSmsCodeRequest;
    let GetLoginSmsCodeResponse = class GetLoginSmsCodeResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.ExpireTime = 0;
            if (param) {
                this.code = param.code;
                this.ExpireTime = param.ExpireTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], GetLoginSmsCodeResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], GetLoginSmsCodeResponse.prototype, "ExpireTime", void 0);
    GetLoginSmsCodeResponse = __decorate([
        Type.d("Type_bgo_account_login_proto_GetLoginSmsCodeResponse")
    ], GetLoginSmsCodeResponse);
    login.GetLoginSmsCodeResponse = GetLoginSmsCodeResponse;
    let LoginBySmsCodeRequest = class LoginBySmsCodeRequest extends Message {
        constructor(param) {
            super();
            this.Phone = "";
            this.ZoneID = 0;
            this.SmsCode = 0;
            this.Ext = new LoginExtend();
            if (param) {
                this.Phone = param.Phone;
                this.ZoneID = param.ZoneID;
                this.SmsCode = param.SmsCode;
                this.Ext = new LoginExtend(param.Ext);
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], LoginBySmsCodeRequest.prototype, "Phone", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], LoginBySmsCodeRequest.prototype, "ZoneID", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], LoginBySmsCodeRequest.prototype, "SmsCode", void 0);
    __decorate([
        Field.d(4, LoginExtend, "optional")
    ], LoginBySmsCodeRequest.prototype, "Ext", void 0);
    LoginBySmsCodeRequest = __decorate([
        Type.d("Type_bgo_account_login_proto_LoginBySmsCodeRequest")
    ], LoginBySmsCodeRequest);
    login.LoginBySmsCodeRequest = LoginBySmsCodeRequest;
    let LoginGuestRequest = class LoginGuestRequest extends Message {
        constructor(param) {
            super();
            this.Uid = 0;
            this.Ext = new LoginExtend();
            if (param) {
                this.Uid = param.Uid;
                this.Ext = new LoginExtend(param.Ext);
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], LoginGuestRequest.prototype, "Uid", void 0);
    __decorate([
        Field.d(2, LoginExtend, "optional")
    ], LoginGuestRequest.prototype, "Ext", void 0);
    LoginGuestRequest = __decorate([
        Type.d("Type_bgo_account_login_proto_LoginGuestRequest")
    ], LoginGuestRequest);
    login.LoginGuestRequest = LoginGuestRequest;
    let PhoneCheckRequest = class PhoneCheckRequest extends Message {
        constructor(param) {
            super();
            this.Phone = "";
            this.ZoneID = 0;
            if (param) {
                this.Phone = param.Phone;
                this.ZoneID = param.ZoneID;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], PhoneCheckRequest.prototype, "Phone", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], PhoneCheckRequest.prototype, "ZoneID", void 0);
    PhoneCheckRequest = __decorate([
        Type.d("Type_bgo_account_login_proto_PhoneCheckRequest")
    ], PhoneCheckRequest);
    login.PhoneCheckRequest = PhoneCheckRequest;
    let PhoneCheckResponse = class PhoneCheckResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.CheckCode = 0;
            if (param) {
                this.code = param.code;
                this.CheckCode = param.CheckCode;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], PhoneCheckResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, account_common_account.IntelligentPhoneCheckCode, "optional")
    ], PhoneCheckResponse.prototype, "CheckCode", void 0);
    PhoneCheckResponse = __decorate([
        Type.d("Type_bgo_account_login_proto_PhoneCheckResponse")
    ], PhoneCheckResponse);
    login.PhoneCheckResponse = PhoneCheckResponse;
    let AutoRegistyRequest = class AutoRegistyRequest extends Message {
        constructor(param) {
            super();
            this.Phone = "";
            this.ZoneID = 0;
            this.SmsCode = 0;
            this.Ext = new LoginExtend();
            this.RegExt = "";
            if (param) {
                this.Phone = param.Phone;
                this.ZoneID = param.ZoneID;
                this.SmsCode = param.SmsCode;
                this.Ext = new LoginExtend(param.Ext);
                this.RegExt = param.RegExt;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], AutoRegistyRequest.prototype, "Phone", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], AutoRegistyRequest.prototype, "ZoneID", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], AutoRegistyRequest.prototype, "SmsCode", void 0);
    __decorate([
        Field.d(4, LoginExtend, "optional")
    ], AutoRegistyRequest.prototype, "Ext", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], AutoRegistyRequest.prototype, "RegExt", void 0);
    AutoRegistyRequest = __decorate([
        Type.d("Type_bgo_account_login_proto_AutoRegistyRequest")
    ], AutoRegistyRequest);
    login.AutoRegistyRequest = AutoRegistyRequest;
    let VerifyCaptchaReq = class VerifyCaptchaReq extends Message {
        constructor(param) {
            super();
            this.captchaId = "";
            this.input = "";
            if (param) {
                this.captchaId = param.captchaId;
                this.input = param.input;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], VerifyCaptchaReq.prototype, "captchaId", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], VerifyCaptchaReq.prototype, "input", void 0);
    VerifyCaptchaReq = __decorate([
        Type.d("Type_bgo_account_login_proto_VerifyCaptchaReq")
    ], VerifyCaptchaReq);
    login.VerifyCaptchaReq = VerifyCaptchaReq;
    let VerifyCaptchaResp = class VerifyCaptchaResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.retryTimes = 0;
            if (param) {
                this.code = param.code;
                this.retryTimes = param.retryTimes;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], VerifyCaptchaResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], VerifyCaptchaResp.prototype, "retryTimes", void 0);
    VerifyCaptchaResp = __decorate([
        Type.d("Type_bgo_account_login_proto_VerifyCaptchaResp")
    ], VerifyCaptchaResp);
    login.VerifyCaptchaResp = VerifyCaptchaResp;
    let BindPhoneWxMpReq = class BindPhoneWxMpReq extends Message {
        constructor(param) {
            super();
            this.SessionKey = "";
            this.openid = "";
            this.Iv = "";
            this.EncryptedData = "";
            if (param) {
                this.SessionKey = param.SessionKey;
                this.openid = param.openid;
                this.Iv = param.Iv;
                this.EncryptedData = param.EncryptedData;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], BindPhoneWxMpReq.prototype, "SessionKey", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], BindPhoneWxMpReq.prototype, "openid", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], BindPhoneWxMpReq.prototype, "Iv", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], BindPhoneWxMpReq.prototype, "EncryptedData", void 0);
    BindPhoneWxMpReq = __decorate([
        Type.d("Type_bgo_account_login_proto_BindPhoneWxMpReq")
    ], BindPhoneWxMpReq);
    login.BindPhoneWxMpReq = BindPhoneWxMpReq;
    login.LoginServer = {
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
        async login(param) {
            const buffer = LoginRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.login", 1, "Login", buffer, this.config);
            return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
        },
        async loginThird(param) {
            const buffer = ThirdLoginRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.login", 2, "LoginThird", buffer, this.config);
            return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
        },
        async loginSession(param) {
            const buffer = RetryLoginRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.login", 3, "LoginSession", buffer, this.config);
            return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
        },
        async checkSession(param) {
            const buffer = CheckSessionRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.login", 4, "CheckSession", buffer, this.config);
            return rsp.code === 0 ? CheckSessionResponse.decode(rsp.data) : null;
        },
        async getLoginSmsCode(param) {
            const buffer = GetLoginSmsCodeRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.login", 5, "GetLoginSmsCode", buffer, this.config);
            return rsp.code === 0 ? GetLoginSmsCodeResponse.decode(rsp.data) : null;
        },
        async loginBySmsCode(param) {
            const buffer = LoginBySmsCodeRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.login", 6, "LoginBySmsCode", buffer, this.config);
            return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
        },
        async loginGuest(param) {
            const buffer = LoginGuestRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.login", 7, "LoginGuest", buffer, this.config);
            return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
        },
        async intelligentPhoneCheck(param) {
            const buffer = PhoneCheckRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.login", 8, "IntelligentPhoneCheck", buffer, this.config);
            return rsp.code === 0 ? PhoneCheckResponse.decode(rsp.data) : null;
        },
        async loginAndAutoRegisty(param) {
            const buffer = AutoRegistyRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.login", 9, "LoginAndAutoRegisty", buffer, this.config);
            return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
        },
        async verifyCaptcha(param) {
            const buffer = VerifyCaptchaReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.login", 10, "VerifyCaptcha", buffer, this.config);
            return rsp.code === 0 ? VerifyCaptchaResp.decode(rsp.data) : null;
        },
        async bindPhoneWxMp(param) {
            const buffer = BindPhoneWxMpReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.login", 11, "BindPhoneWxMp", buffer, this.config);
            return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
        },
    };
})(login || (login = {}));
//# sourceMappingURL=login.js.map