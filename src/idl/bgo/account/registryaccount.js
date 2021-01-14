import { __decorate } from "tslib";
/* eslint-disable */
import { rpcPlugin as byRpc, ApiSendConfig } from 'xj-core';
import { Message, Type, Field } from 'protobufjs/light';
import { account as account_common_account } from '@/idl/bgo/account/common_account';
export var registryaccount;
(function (registryaccount) {
    let MsgBytes = class MsgBytes extends Message {
        constructor(param) {
            super();
            this.bytes = new Uint8Array();
            if (param) {
                this.bytes = new Uint8Array(param.bytes);
            }
        }
    };
    __decorate([
        Field.d(1, "bytes", "optional")
    ], MsgBytes.prototype, "bytes", void 0);
    MsgBytes = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_MsgBytes")
    ], MsgBytes);
    registryaccount.MsgBytes = MsgBytes;
    let RegisterRequest = class RegisterRequest extends Message {
        constructor(param) {
            super();
            this.AccountType = 0;
            this.Account = "";
            this.Password = "";
            this.UserInfo = new account_common_account.UserInfo();
            this.SmsCode = 0;
            this.ZoneID = 0;
            this.PlatUid = "";
            this.ThirdToken = "";
            this.Phone = "";
            this.Email = "";
            if (param) {
                this.AccountType = param.AccountType;
                this.Account = param.Account;
                this.Password = param.Password;
                this.UserInfo = new account_common_account.UserInfo(param.UserInfo);
                this.SmsCode = param.SmsCode;
                this.ZoneID = param.ZoneID;
                this.PlatUid = param.PlatUid;
                this.ThirdToken = param.ThirdToken;
                this.Phone = param.Phone;
                this.Email = param.Email;
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.AccountType, "optional")
    ], RegisterRequest.prototype, "AccountType", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], RegisterRequest.prototype, "Account", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], RegisterRequest.prototype, "Password", void 0);
    __decorate([
        Field.d(4, account_common_account.UserInfo, "optional")
    ], RegisterRequest.prototype, "UserInfo", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], RegisterRequest.prototype, "SmsCode", void 0);
    __decorate([
        Field.d(6, "int32", "optional")
    ], RegisterRequest.prototype, "ZoneID", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], RegisterRequest.prototype, "PlatUid", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], RegisterRequest.prototype, "ThirdToken", void 0);
    __decorate([
        Field.d(9, "string", "optional")
    ], RegisterRequest.prototype, "Phone", void 0);
    __decorate([
        Field.d(10, "string", "optional")
    ], RegisterRequest.prototype, "Email", void 0);
    RegisterRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_RegisterRequest")
    ], RegisterRequest);
    registryaccount.RegisterRequest = RegisterRequest;
    let RegisterResponse = class RegisterResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.UID = 0;
            this.ExpiredTime = 0;
            if (param) {
                this.code = param.code;
                this.UID = param.UID;
                this.ExpiredTime = param.ExpiredTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], RegisterResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], RegisterResponse.prototype, "UID", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], RegisterResponse.prototype, "ExpiredTime", void 0);
    RegisterResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_RegisterResponse")
    ], RegisterResponse);
    registryaccount.RegisterResponse = RegisterResponse;
    let ChangePasswordRequest = class ChangePasswordRequest extends Message {
        constructor(param) {
            super();
            this.AccountType = 0;
            this.Account = "";
            this.UID = 0;
            this.OldPassword = "";
            this.NewPassword = "";
            this.SmsCode = 0;
            if (param) {
                this.AccountType = param.AccountType;
                this.Account = param.Account;
                this.UID = param.UID;
                this.OldPassword = param.OldPassword;
                this.NewPassword = param.NewPassword;
                this.SmsCode = param.SmsCode;
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.AccountType, "optional")
    ], ChangePasswordRequest.prototype, "AccountType", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], ChangePasswordRequest.prototype, "Account", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], ChangePasswordRequest.prototype, "UID", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], ChangePasswordRequest.prototype, "OldPassword", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], ChangePasswordRequest.prototype, "NewPassword", void 0);
    __decorate([
        Field.d(6, "int32", "optional")
    ], ChangePasswordRequest.prototype, "SmsCode", void 0);
    ChangePasswordRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ChangePasswordRequest")
    ], ChangePasswordRequest);
    registryaccount.ChangePasswordRequest = ChangePasswordRequest;
    let ChangePasswordResponse = class ChangePasswordResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.UID = 0;
            this.ExpiredTime = 0;
            if (param) {
                this.code = param.code;
                this.UID = param.UID;
                this.ExpiredTime = param.ExpiredTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ChangePasswordResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], ChangePasswordResponse.prototype, "UID", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], ChangePasswordResponse.prototype, "ExpiredTime", void 0);
    ChangePasswordResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ChangePasswordResponse")
    ], ChangePasswordResponse);
    registryaccount.ChangePasswordResponse = ChangePasswordResponse;
    let GetSmsCodeRequest = class GetSmsCodeRequest extends Message {
        constructor(param) {
            super();
            this.Phone = "";
            this.ZoneID = 0;
            this.SmsType = 0;
            if (param) {
                this.Phone = param.Phone;
                this.ZoneID = param.ZoneID;
                this.SmsType = param.SmsType;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetSmsCodeRequest.prototype, "Phone", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], GetSmsCodeRequest.prototype, "ZoneID", void 0);
    __decorate([
        Field.d(3, account_common_account.SmsType, "optional")
    ], GetSmsCodeRequest.prototype, "SmsType", void 0);
    GetSmsCodeRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_GetSmsCodeRequest")
    ], GetSmsCodeRequest);
    registryaccount.GetSmsCodeRequest = GetSmsCodeRequest;
    let GetSmsCodeResponse = class GetSmsCodeResponse extends Message {
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
    ], GetSmsCodeResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], GetSmsCodeResponse.prototype, "ExpireTime", void 0);
    GetSmsCodeResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_GetSmsCodeResponse")
    ], GetSmsCodeResponse);
    registryaccount.GetSmsCodeResponse = GetSmsCodeResponse;
    let PreCheckCSmsCodeRequest = class PreCheckCSmsCodeRequest extends Message {
        constructor(param) {
            super();
            this.Phone = "";
            this.ZoneID = 0;
            this.SmsType = 0;
            this.SmsCode = 0;
            if (param) {
                this.Phone = param.Phone;
                this.ZoneID = param.ZoneID;
                this.SmsType = param.SmsType;
                this.SmsCode = param.SmsCode;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], PreCheckCSmsCodeRequest.prototype, "Phone", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], PreCheckCSmsCodeRequest.prototype, "ZoneID", void 0);
    __decorate([
        Field.d(3, account_common_account.SmsType, "optional")
    ], PreCheckCSmsCodeRequest.prototype, "SmsType", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], PreCheckCSmsCodeRequest.prototype, "SmsCode", void 0);
    PreCheckCSmsCodeRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_PreCheckCSmsCodeRequest")
    ], PreCheckCSmsCodeRequest);
    registryaccount.PreCheckCSmsCodeRequest = PreCheckCSmsCodeRequest;
    let PreCheckCSmsCodeResponse = class PreCheckCSmsCodeResponse extends Message {
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
    ], PreCheckCSmsCodeResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], PreCheckCSmsCodeResponse.prototype, "ExpireTime", void 0);
    PreCheckCSmsCodeResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_PreCheckCSmsCodeResponse")
    ], PreCheckCSmsCodeResponse);
    registryaccount.PreCheckCSmsCodeResponse = PreCheckCSmsCodeResponse;
    let ResetPasswordRequest = class ResetPasswordRequest extends Message {
        constructor(param) {
            super();
            this.AccountType = 0;
            this.Account = "";
            this.Password = "";
            this.SmsCode = 0;
            this.ZoneID = 0;
            if (param) {
                this.AccountType = param.AccountType;
                this.Account = param.Account;
                this.Password = param.Password;
                this.SmsCode = param.SmsCode;
                this.ZoneID = param.ZoneID;
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.AccountType, "optional")
    ], ResetPasswordRequest.prototype, "AccountType", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], ResetPasswordRequest.prototype, "Account", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], ResetPasswordRequest.prototype, "Password", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], ResetPasswordRequest.prototype, "SmsCode", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], ResetPasswordRequest.prototype, "ZoneID", void 0);
    ResetPasswordRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ResetPasswordRequest")
    ], ResetPasswordRequest);
    registryaccount.ResetPasswordRequest = ResetPasswordRequest;
    let ResetPasswordResponse = class ResetPasswordResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.UID = 0;
            this.ExpiredTime = 0;
            if (param) {
                this.code = param.code;
                this.UID = param.UID;
                this.ExpiredTime = param.ExpiredTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ResetPasswordResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], ResetPasswordResponse.prototype, "UID", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], ResetPasswordResponse.prototype, "ExpiredTime", void 0);
    ResetPasswordResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ResetPasswordResponse")
    ], ResetPasswordResponse);
    registryaccount.ResetPasswordResponse = ResetPasswordResponse;
    let BindThirdPlatRequest = class BindThirdPlatRequest extends Message {
        constructor(param) {
            super();
            this.AccountType = 0;
            this.PlatUid = "";
            this.ThirdToken = "";
            this.Ext = "";
            if (param) {
                this.AccountType = param.AccountType;
                this.PlatUid = param.PlatUid;
                this.ThirdToken = param.ThirdToken;
                this.Ext = param.Ext;
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.AccountType, "optional")
    ], BindThirdPlatRequest.prototype, "AccountType", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], BindThirdPlatRequest.prototype, "PlatUid", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], BindThirdPlatRequest.prototype, "ThirdToken", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], BindThirdPlatRequest.prototype, "Ext", void 0);
    BindThirdPlatRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_BindThirdPlatRequest")
    ], BindThirdPlatRequest);
    registryaccount.BindThirdPlatRequest = BindThirdPlatRequest;
    let BindThirdPlatResponse = class BindThirdPlatResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], BindThirdPlatResponse.prototype, "code", void 0);
    BindThirdPlatResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_BindThirdPlatResponse")
    ], BindThirdPlatResponse);
    registryaccount.BindThirdPlatResponse = BindThirdPlatResponse;
    let GetMailCodeRequest = class GetMailCodeRequest extends Message {
        constructor(param) {
            super();
            this.Email = "";
            this.SmsType = 0;
            if (param) {
                this.Email = param.Email;
                this.SmsType = param.SmsType;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetMailCodeRequest.prototype, "Email", void 0);
    __decorate([
        Field.d(2, account_common_account.SmsType, "optional")
    ], GetMailCodeRequest.prototype, "SmsType", void 0);
    GetMailCodeRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_GetMailCodeRequest")
    ], GetMailCodeRequest);
    registryaccount.GetMailCodeRequest = GetMailCodeRequest;
    let GetMailCodeResponse = class GetMailCodeResponse extends Message {
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
    ], GetMailCodeResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], GetMailCodeResponse.prototype, "ExpireTime", void 0);
    GetMailCodeResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_GetMailCodeResponse")
    ], GetMailCodeResponse);
    registryaccount.GetMailCodeResponse = GetMailCodeResponse;
    let PreCheckCMailCodeRequest = class PreCheckCMailCodeRequest extends Message {
        constructor(param) {
            super();
            this.Email = "";
            this.SmsType = 0;
            this.MailCode = 0;
            if (param) {
                this.Email = param.Email;
                this.SmsType = param.SmsType;
                this.MailCode = param.MailCode;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], PreCheckCMailCodeRequest.prototype, "Email", void 0);
    __decorate([
        Field.d(2, account_common_account.SmsType, "optional")
    ], PreCheckCMailCodeRequest.prototype, "SmsType", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], PreCheckCMailCodeRequest.prototype, "MailCode", void 0);
    PreCheckCMailCodeRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_PreCheckCMailCodeRequest")
    ], PreCheckCMailCodeRequest);
    registryaccount.PreCheckCMailCodeRequest = PreCheckCMailCodeRequest;
    let PreCheckCMailCodeResponse = class PreCheckCMailCodeResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], PreCheckCMailCodeResponse.prototype, "code", void 0);
    PreCheckCMailCodeResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_PreCheckCMailCodeResponse")
    ], PreCheckCMailCodeResponse);
    registryaccount.PreCheckCMailCodeResponse = PreCheckCMailCodeResponse;
    let BindPhoneRequest = class BindPhoneRequest extends Message {
        constructor(param) {
            super();
            this.Phone = "";
            this.SmsCode = 0;
            this.ZoneID = 0;
            this.Pwd = "";
            if (param) {
                this.Phone = param.Phone;
                this.SmsCode = param.SmsCode;
                this.ZoneID = param.ZoneID;
                this.Pwd = param.Pwd;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], BindPhoneRequest.prototype, "Phone", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], BindPhoneRequest.prototype, "SmsCode", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], BindPhoneRequest.prototype, "ZoneID", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], BindPhoneRequest.prototype, "Pwd", void 0);
    BindPhoneRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_BindPhoneRequest")
    ], BindPhoneRequest);
    registryaccount.BindPhoneRequest = BindPhoneRequest;
    let BindPhoneResponse = class BindPhoneResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.ExpiredTime = 0;
            if (param) {
                this.code = param.code;
                this.ExpiredTime = param.ExpiredTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], BindPhoneResponse.prototype, "code", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], BindPhoneResponse.prototype, "ExpiredTime", void 0);
    BindPhoneResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_BindPhoneResponse")
    ], BindPhoneResponse);
    registryaccount.BindPhoneResponse = BindPhoneResponse;
    let BindEmailRequest = class BindEmailRequest extends Message {
        constructor(param) {
            super();
            this.Email = "";
            this.Code = 0;
            this.Pwd = "";
            if (param) {
                this.Email = param.Email;
                this.Code = param.Code;
                this.Pwd = param.Pwd;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], BindEmailRequest.prototype, "Email", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], BindEmailRequest.prototype, "Code", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], BindEmailRequest.prototype, "Pwd", void 0);
    BindEmailRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_BindEmailRequest")
    ], BindEmailRequest);
    registryaccount.BindEmailRequest = BindEmailRequest;
    let BindEmailResponse = class BindEmailResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], BindEmailResponse.prototype, "code", void 0);
    BindEmailResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_BindEmailResponse")
    ], BindEmailResponse);
    registryaccount.BindEmailResponse = BindEmailResponse;
    let BindDetailsRequest = class BindDetailsRequest extends Message {
        constructor(param) {
            super();
            this.ThirdType = 0;
            this.SetPwd = false;
            this.IsBindWhat = 0;
            if (param) {
                this.ThirdType = param.ThirdType;
                this.SetPwd = param.SetPwd;
                this.IsBindWhat = param.IsBindWhat;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], BindDetailsRequest.prototype, "ThirdType", void 0);
    __decorate([
        Field.d(2, "bool", "optional")
    ], BindDetailsRequest.prototype, "SetPwd", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], BindDetailsRequest.prototype, "IsBindWhat", void 0);
    BindDetailsRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_BindDetailsRequest")
    ], BindDetailsRequest);
    registryaccount.BindDetailsRequest = BindDetailsRequest;
    let ThirdRegisterRequest = class ThirdRegisterRequest extends Message {
        constructor(param) {
            super();
            this.AccountType = 0;
            this.userInfo = new account_common_account.UserInfo();
            this.ZoneID = 0;
            this.PlatUid = "";
            this.ThirdToken = "";
            this.Email = "";
            this.Phone = "";
            if (param) {
                this.AccountType = param.AccountType;
                this.userInfo = new account_common_account.UserInfo(param.userInfo);
                this.ZoneID = param.ZoneID;
                this.PlatUid = param.PlatUid;
                this.ThirdToken = param.ThirdToken;
                this.Email = param.Email;
                this.Phone = param.Phone;
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.AccountType, "optional")
    ], ThirdRegisterRequest.prototype, "AccountType", void 0);
    __decorate([
        Field.d(2, account_common_account.UserInfo, "optional")
    ], ThirdRegisterRequest.prototype, "userInfo", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], ThirdRegisterRequest.prototype, "ZoneID", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], ThirdRegisterRequest.prototype, "PlatUid", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], ThirdRegisterRequest.prototype, "ThirdToken", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], ThirdRegisterRequest.prototype, "Email", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], ThirdRegisterRequest.prototype, "Phone", void 0);
    ThirdRegisterRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ThirdRegisterRequest")
    ], ThirdRegisterRequest);
    registryaccount.ThirdRegisterRequest = ThirdRegisterRequest;
    let IsBindEmailRequest = class IsBindEmailRequest extends Message {
        constructor(param) {
            super();
            this.AccountType = 0;
            this.Account = "";
            if (param) {
                this.AccountType = param.AccountType;
                this.Account = param.Account;
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.AccountType, "optional")
    ], IsBindEmailRequest.prototype, "AccountType", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], IsBindEmailRequest.prototype, "Account", void 0);
    IsBindEmailRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_IsBindEmailRequest")
    ], IsBindEmailRequest);
    registryaccount.IsBindEmailRequest = IsBindEmailRequest;
    let IsBindEmailResponse = class IsBindEmailResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.Email = "";
            if (param) {
                this.code = param.code;
                this.Email = param.Email;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], IsBindEmailResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], IsBindEmailResponse.prototype, "Email", void 0);
    IsBindEmailResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_IsBindEmailResponse")
    ], IsBindEmailResponse);
    registryaccount.IsBindEmailResponse = IsBindEmailResponse;
    let IsBindPhoneRequest = class IsBindPhoneRequest extends Message {
        constructor(param) {
            super();
            this.AccountType = 0;
            this.Account = "";
            if (param) {
                this.AccountType = param.AccountType;
                this.Account = param.Account;
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.AccountType, "optional")
    ], IsBindPhoneRequest.prototype, "AccountType", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], IsBindPhoneRequest.prototype, "Account", void 0);
    IsBindPhoneRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_IsBindPhoneRequest")
    ], IsBindPhoneRequest);
    registryaccount.IsBindPhoneRequest = IsBindPhoneRequest;
    let IsBindPhoneResponse = class IsBindPhoneResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.Phone = "";
            this.ZoneID = 0;
            if (param) {
                this.code = param.code;
                this.Phone = param.Phone;
                this.ZoneID = param.ZoneID;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], IsBindPhoneResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], IsBindPhoneResponse.prototype, "Phone", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], IsBindPhoneResponse.prototype, "ZoneID", void 0);
    IsBindPhoneResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_IsBindPhoneResponse")
    ], IsBindPhoneResponse);
    registryaccount.IsBindPhoneResponse = IsBindPhoneResponse;
    let IsBindThirdResponse = class IsBindThirdResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.BindThirdType = 0;
            if (param) {
                this.code = param.code;
                this.BindThirdType = param.BindThirdType;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], IsBindThirdResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], IsBindThirdResponse.prototype, "BindThirdType", void 0);
    IsBindThirdResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_IsBindThirdResponse")
    ], IsBindThirdResponse);
    registryaccount.IsBindThirdResponse = IsBindThirdResponse;
    let BindDetailsResponse = class BindDetailsResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.SetPwd = false;
            this.Emailret = new IsBindEmailResponse();
            this.Phoneret = new IsBindPhoneResponse();
            this.ThirdRet = new IsBindThirdResponse();
            if (param) {
                this.code = param.code;
                this.SetPwd = param.SetPwd;
                this.Emailret = new IsBindEmailResponse(param.Emailret);
                this.Phoneret = new IsBindPhoneResponse(param.Phoneret);
                this.ThirdRet = new IsBindThirdResponse(param.ThirdRet);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], BindDetailsResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "bool", "optional")
    ], BindDetailsResponse.prototype, "SetPwd", void 0);
    __decorate([
        Field.d(3, IsBindEmailResponse, "optional")
    ], BindDetailsResponse.prototype, "Emailret", void 0);
    __decorate([
        Field.d(4, IsBindPhoneResponse, "optional")
    ], BindDetailsResponse.prototype, "Phoneret", void 0);
    __decorate([
        Field.d(5, IsBindThirdResponse, "optional")
    ], BindDetailsResponse.prototype, "ThirdRet", void 0);
    BindDetailsResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_BindDetailsResponse")
    ], BindDetailsResponse);
    registryaccount.BindDetailsResponse = BindDetailsResponse;
    let ReleasePhoneRequest = class ReleasePhoneRequest extends Message {
        constructor(param) {
            super();
            this.ZoneID = 0;
            this.Phone = "";
            this.SmsCode = 0;
            if (param) {
                this.ZoneID = param.ZoneID;
                this.Phone = param.Phone;
                this.SmsCode = param.SmsCode;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ReleasePhoneRequest.prototype, "ZoneID", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], ReleasePhoneRequest.prototype, "Phone", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], ReleasePhoneRequest.prototype, "SmsCode", void 0);
    ReleasePhoneRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ReleasePhoneRequest")
    ], ReleasePhoneRequest);
    registryaccount.ReleasePhoneRequest = ReleasePhoneRequest;
    let ReleasePhoneResponse = class ReleasePhoneResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.ExpiredTime = 0;
            if (param) {
                this.code = param.code;
                this.ExpiredTime = param.ExpiredTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ReleasePhoneResponse.prototype, "code", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], ReleasePhoneResponse.prototype, "ExpiredTime", void 0);
    ReleasePhoneResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ReleasePhoneResponse")
    ], ReleasePhoneResponse);
    registryaccount.ReleasePhoneResponse = ReleasePhoneResponse;
    let ReleaseEmailRequest = class ReleaseEmailRequest extends Message {
        constructor(param) {
            super();
            this.Email = "";
            this.Code = 0;
            if (param) {
                this.Email = param.Email;
                this.Code = param.Code;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], ReleaseEmailRequest.prototype, "Email", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ReleaseEmailRequest.prototype, "Code", void 0);
    ReleaseEmailRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ReleaseEmailRequest")
    ], ReleaseEmailRequest);
    registryaccount.ReleaseEmailRequest = ReleaseEmailRequest;
    let ReleaseEmailResponse = class ReleaseEmailResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ReleaseEmailResponse.prototype, "code", void 0);
    ReleaseEmailResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ReleaseEmailResponse")
    ], ReleaseEmailResponse);
    registryaccount.ReleaseEmailResponse = ReleaseEmailResponse;
    let ChangeBindPhoneRequest = class ChangeBindPhoneRequest extends Message {
        constructor(param) {
            super();
            this.UnBindZoneID = 0;
            this.UnBindPhone = "";
            this.UnBindSmsCode = 0;
            this.BindZoneID = 0;
            this.BindPhone = "";
            this.BindSmsCode = 0;
            if (param) {
                this.UnBindZoneID = param.UnBindZoneID;
                this.UnBindPhone = param.UnBindPhone;
                this.UnBindSmsCode = param.UnBindSmsCode;
                this.BindZoneID = param.BindZoneID;
                this.BindPhone = param.BindPhone;
                this.BindSmsCode = param.BindSmsCode;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ChangeBindPhoneRequest.prototype, "UnBindZoneID", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], ChangeBindPhoneRequest.prototype, "UnBindPhone", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], ChangeBindPhoneRequest.prototype, "UnBindSmsCode", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], ChangeBindPhoneRequest.prototype, "BindZoneID", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], ChangeBindPhoneRequest.prototype, "BindPhone", void 0);
    __decorate([
        Field.d(6, "int32", "optional")
    ], ChangeBindPhoneRequest.prototype, "BindSmsCode", void 0);
    ChangeBindPhoneRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ChangeBindPhoneRequest")
    ], ChangeBindPhoneRequest);
    registryaccount.ChangeBindPhoneRequest = ChangeBindPhoneRequest;
    let ChangeBindPhoneResponse = class ChangeBindPhoneResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.Phone = "";
            this.ExpiredTime = 0;
            if (param) {
                this.code = param.code;
                this.Phone = param.Phone;
                this.ExpiredTime = param.ExpiredTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ChangeBindPhoneResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], ChangeBindPhoneResponse.prototype, "Phone", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], ChangeBindPhoneResponse.prototype, "ExpiredTime", void 0);
    ChangeBindPhoneResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ChangeBindPhoneResponse")
    ], ChangeBindPhoneResponse);
    registryaccount.ChangeBindPhoneResponse = ChangeBindPhoneResponse;
    let ChangeBindEmailRequest = class ChangeBindEmailRequest extends Message {
        constructor(param) {
            super();
            this.UnBindEmail = "";
            this.UnBindCode = 0;
            this.BindEmail = "";
            this.BindCode = 0;
            if (param) {
                this.UnBindEmail = param.UnBindEmail;
                this.UnBindCode = param.UnBindCode;
                this.BindEmail = param.BindEmail;
                this.BindCode = param.BindCode;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], ChangeBindEmailRequest.prototype, "UnBindEmail", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ChangeBindEmailRequest.prototype, "UnBindCode", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], ChangeBindEmailRequest.prototype, "BindEmail", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], ChangeBindEmailRequest.prototype, "BindCode", void 0);
    ChangeBindEmailRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ChangeBindEmailRequest")
    ], ChangeBindEmailRequest);
    registryaccount.ChangeBindEmailRequest = ChangeBindEmailRequest;
    let ChangeBindEmailResponse = class ChangeBindEmailResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ChangeBindEmailResponse.prototype, "code", void 0);
    ChangeBindEmailResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_ChangeBindEmailResponse")
    ], ChangeBindEmailResponse);
    registryaccount.ChangeBindEmailResponse = ChangeBindEmailResponse;
    let GetAccountNameRequest = class GetAccountNameRequest extends Message {
        constructor(param) {
            super();
            if (param) {
            }
        }
    };
    GetAccountNameRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_GetAccountNameRequest")
    ], GetAccountNameRequest);
    registryaccount.GetAccountNameRequest = GetAccountNameRequest;
    let GetAccountNameResponse = class GetAccountNameResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.AccountName = "";
            if (param) {
                this.code = param.code;
                this.AccountName = param.AccountName;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], GetAccountNameResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], GetAccountNameResponse.prototype, "AccountName", void 0);
    GetAccountNameResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_GetAccountNameResponse")
    ], GetAccountNameResponse);
    registryaccount.GetAccountNameResponse = GetAccountNameResponse;
    let HttpRegistryRequest = class HttpRegistryRequest extends Message {
        constructor(param) {
            super();
            this.AccountType = 0;
            this.Account = "";
            this.PassWord = "";
            this.Phone = "";
            this.Email = "";
            this.Name = "";
            this.Sex = 0;
            this.IsRobot = false;
            this.Avatar = "";
            if (param) {
                this.AccountType = param.AccountType;
                this.Account = param.Account;
                this.PassWord = param.PassWord;
                this.Phone = param.Phone;
                this.Email = param.Email;
                this.Name = param.Name;
                this.Sex = param.Sex;
                this.IsRobot = param.IsRobot;
                this.Avatar = param.Avatar;
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.AccountType, "optional")
    ], HttpRegistryRequest.prototype, "AccountType", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], HttpRegistryRequest.prototype, "Account", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], HttpRegistryRequest.prototype, "PassWord", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], HttpRegistryRequest.prototype, "Phone", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], HttpRegistryRequest.prototype, "Email", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], HttpRegistryRequest.prototype, "Name", void 0);
    __decorate([
        Field.d(7, account_common_account.SexValue, "optional")
    ], HttpRegistryRequest.prototype, "Sex", void 0);
    __decorate([
        Field.d(8, "bool", "optional")
    ], HttpRegistryRequest.prototype, "IsRobot", void 0);
    __decorate([
        Field.d(9, "string", "optional")
    ], HttpRegistryRequest.prototype, "Avatar", void 0);
    HttpRegistryRequest = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_HttpRegistryRequest")
    ], HttpRegistryRequest);
    registryaccount.HttpRegistryRequest = HttpRegistryRequest;
    let HttpRegistryResponse = class HttpRegistryResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.UID = 0;
            this.ErrDes = "";
            if (param) {
                this.code = param.code;
                this.UID = param.UID;
                this.ErrDes = param.ErrDes;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], HttpRegistryResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], HttpRegistryResponse.prototype, "UID", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], HttpRegistryResponse.prototype, "ErrDes", void 0);
    HttpRegistryResponse = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_HttpRegistryResponse")
    ], HttpRegistryResponse);
    registryaccount.HttpRegistryResponse = HttpRegistryResponse;
    let SetPswReq = class SetPswReq extends Message {
        constructor(param) {
            super();
            this.password = "";
            if (param) {
                this.password = param.password;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], SetPswReq.prototype, "password", void 0);
    SetPswReq = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_SetPswReq")
    ], SetPswReq);
    registryaccount.SetPswReq = SetPswReq;
    let SetPswResp = class SetPswResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], SetPswResp.prototype, "code", void 0);
    SetPswResp = __decorate([
        Type.d("Type_bgo_account_registryaccount_proto_SetPswResp")
    ], SetPswResp);
    registryaccount.SetPswResp = SetPswResp;
    registryaccount.RegistryAccountServer = {
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
        async registry(param) {
            const buffer = RegisterRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 1, "Registry", buffer, this.config);
            return rsp.code === 0 ? RegisterResponse.decode(rsp.data) : null;
        },
        async getSmsCode(param) {
            const buffer = GetSmsCodeRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 2, "GetSmsCode", buffer, this.config);
            return rsp.code === 0 ? GetSmsCodeResponse.decode(rsp.data) : null;
        },
        async preCheckCode(param) {
            const buffer = PreCheckCSmsCodeRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 3, "PreCheckCode", buffer, this.config);
            return rsp.code === 0 ? PreCheckCSmsCodeResponse.decode(rsp.data) : null;
        },
        async changePwd(param) {
            const buffer = ChangePasswordRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 4, "ChangePwd", buffer, this.config);
            return rsp.code === 0 ? ChangePasswordResponse.decode(rsp.data) : null;
        },
        async resetPwd(param) {
            const buffer = ResetPasswordRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 5, "ResetPwd", buffer, this.config);
            return rsp.code === 0 ? ResetPasswordResponse.decode(rsp.data) : null;
        },
        async thirdRegistry(param) {
            const buffer = ThirdRegisterRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 6, "ThirdRegistry", buffer, this.config);
            return rsp.code === 0 ? RegisterResponse.decode(rsp.data) : null;
        },
        async bindThirdPlat(param) {
            const buffer = BindThirdPlatRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 7, "BindThirdPlat", buffer, this.config);
            return rsp.code === 0 ? BindThirdPlatResponse.decode(rsp.data) : null;
        },
        async getMailCode(param) {
            const buffer = GetMailCodeRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 8, "GetMailCode", buffer, this.config);
            return rsp.code === 0 ? GetMailCodeResponse.decode(rsp.data) : null;
        },
        async preCheckMailCode(param) {
            const buffer = PreCheckCMailCodeRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 9, "PreCheckMailCode", buffer, this.config);
            return rsp.code === 0 ? PreCheckCMailCodeResponse.decode(rsp.data) : null;
        },
        async bindPhone(param) {
            const buffer = BindPhoneRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 10, "BindPhone", buffer, this.config);
            return rsp.code === 0 ? BindPhoneResponse.decode(rsp.data) : null;
        },
        async bindEmail(param) {
            const buffer = BindEmailRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 11, "BindEmail", buffer, this.config);
            return rsp.code === 0 ? BindEmailResponse.decode(rsp.data) : null;
        },
        async bindDetails(param) {
            const buffer = BindDetailsRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 12, "BindDetails", buffer, this.config);
            return rsp.code === 0 ? BindDetailsResponse.decode(rsp.data) : null;
        },
        async unBindPhone(param) {
            const buffer = ReleasePhoneRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 13, "UnBindPhone", buffer, this.config);
            return rsp.code === 0 ? ReleasePhoneResponse.decode(rsp.data) : null;
        },
        async unBindEmail(param) {
            const buffer = ReleaseEmailRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 14, "UnBindEmail", buffer, this.config);
            return rsp.code === 0 ? ReleaseEmailResponse.decode(rsp.data) : null;
        },
        async changeBindPhone(param) {
            const buffer = ChangeBindPhoneRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 15, "ChangeBindPhone", buffer, this.config);
            return rsp.code === 0 ? ChangeBindPhoneResponse.decode(rsp.data) : null;
        },
        async changeBindEmail(param) {
            const buffer = ChangeBindEmailRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 16, "ChangeBindEmail", buffer, this.config);
            return rsp.code === 0 ? ChangeBindEmailResponse.decode(rsp.data) : null;
        },
        async getAccountName(param) {
            const buffer = GetAccountNameRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 17, "GetAccountName", buffer, this.config);
            return rsp.code === 0 ? GetAccountNameResponse.decode(rsp.data) : null;
        },
        async registryByHttp(param) {
            const buffer = HttpRegistryRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 18, "RegistryByHttp", buffer, this.config);
            return rsp.code === 0 ? HttpRegistryResponse.decode(rsp.data) : null;
        },
        async registryThirdConfByHttp(param) {
            const buffer = MsgBytes.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 10002, "RegistryThirdConfByHttp", buffer, this.config);
            return rsp.code === 0 ? MsgBytes.decode(rsp.data) : null;
        },
        async bindRecommendReg(param) {
            const buffer = account_common_account.BindRecommendRegRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 19, "BindRecommendReg", buffer, this.config);
            return rsp.code === 0 ? account_common_account.BindRecommendRegResponse.decode(rsp.data) : null;
        },
        async getRecommendRegList(param) {
            const buffer = account_common_account.GetRecommendRegListRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 20, "GetRecommendRegList", buffer, this.config);
            return rsp.code === 0 ? account_common_account.GetRecommendRegListResponse.decode(rsp.data) : null;
        },
        async setPsw(param) {
            const buffer = SetPswReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.registryaccount", 21, "SetPsw", buffer, this.config);
            return rsp.code === 0 ? SetPswResp.decode(rsp.data) : null;
        },
    };
})(registryaccount || (registryaccount = {}));
//# sourceMappingURL=registryaccount.js.map