import { __decorate } from "tslib";
import { Message, Type, Field } from 'protobufjs/light';
export var account;
(function (account) {
    let IntelligentPhoneCheckCode;
    (function (IntelligentPhoneCheckCode) {
        IntelligentPhoneCheckCode[IntelligentPhoneCheckCode["NOTHIND"] = 0] = "NOTHIND";
        IntelligentPhoneCheckCode[IntelligentPhoneCheckCode["NOPAWD"] = 1] = "NOPAWD";
        IntelligentPhoneCheckCode[IntelligentPhoneCheckCode["UNREG"] = 2] = "UNREG";
        IntelligentPhoneCheckCode[IntelligentPhoneCheckCode["INVALID"] = 3] = "INVALID";
        IntelligentPhoneCheckCode[IntelligentPhoneCheckCode["PAWD"] = 4] = "PAWD";
    })(IntelligentPhoneCheckCode = account.IntelligentPhoneCheckCode || (account.IntelligentPhoneCheckCode = {}));
    let DeviceType;
    (function (DeviceType) {
        DeviceType[DeviceType["WIN"] = 0] = "WIN";
        DeviceType[DeviceType["IOS"] = 1] = "IOS";
        DeviceType[DeviceType["ANDROID"] = 2] = "ANDROID";
        DeviceType[DeviceType["WEB"] = 3] = "WEB";
        DeviceType[DeviceType["MAC"] = 4] = "MAC";
        DeviceType[DeviceType["SIMULATOR"] = 5] = "SIMULATOR";
    })(DeviceType = account.DeviceType || (account.DeviceType = {}));
    let SexValue;
    (function (SexValue) {
        SexValue[SexValue["UNKNOWN"] = 0] = "UNKNOWN";
        SexValue[SexValue["BOY"] = 1] = "BOY";
        SexValue[SexValue["GIRL"] = 2] = "GIRL";
    })(SexValue = account.SexValue || (account.SexValue = {}));
    let AccountType;
    (function (AccountType) {
        AccountType[AccountType["UNKNOW"] = 0] = "UNKNOW";
        AccountType[AccountType["PHONE"] = 1] = "PHONE";
        AccountType[AccountType["EMAIL"] = 2] = "EMAIL";
        AccountType[AccountType["VISITOR"] = 3] = "VISITOR";
        AccountType[AccountType["USERCODE"] = 4] = "USERCODE";
        AccountType[AccountType["TAOBAO"] = 10] = "TAOBAO";
        AccountType[AccountType["ZH360"] = 11] = "ZH360";
        AccountType[AccountType["YIDONG"] = 12] = "YIDONG";
        AccountType[AccountType["AIYOUXI"] = 13] = "AIYOUXI";
        AccountType[AccountType["HUAWEI"] = 14] = "HUAWEI";
        AccountType[AccountType["OPPO"] = 15] = "OPPO";
        AccountType[AccountType["FACEBOOK"] = 16] = "FACEBOOK";
        AccountType[AccountType["QEMAIL"] = 17] = "QEMAIL";
        AccountType[AccountType["WEIXIN"] = 18] = "WEIXIN";
        AccountType[AccountType["QQ"] = 19] = "QQ";
        AccountType[AccountType["WEIBO"] = 20] = "WEIBO";
        AccountType[AccountType["WXMP"] = 21] = "WXMP";
    })(AccountType = account.AccountType || (account.AccountType = {}));
    let AccountLvEm;
    (function (AccountLvEm) {
        AccountLvEm[AccountLvEm["LV_VISITOR"] = 0] = "LV_VISITOR";
        AccountLvEm[AccountLvEm["LV_USERCODE"] = 1] = "LV_USERCODE";
        AccountLvEm[AccountLvEm["LV_RealVerify"] = 2] = "LV_RealVerify";
        AccountLvEm[AccountLvEm["LV_Unknow"] = 4] = "LV_Unknow";
    })(AccountLvEm = account.AccountLvEm || (account.AccountLvEm = {}));
    let SmsType;
    (function (SmsType) {
        SmsType[SmsType["OTHER"] = 0] = "OTHER";
        SmsType[SmsType["REGISTER"] = 1] = "REGISTER";
        SmsType[SmsType["PWDCHG"] = 2] = "PWDCHG";
        SmsType[SmsType["LOGIN"] = 3] = "LOGIN";
        SmsType[SmsType["BIND"] = 4] = "BIND";
        SmsType[SmsType["UNBID"] = 5] = "UNBID";
        SmsType[SmsType["CHANGEBING"] = 6] = "CHANGEBING";
    })(SmsType = account.SmsType || (account.SmsType = {}));
    let BindType;
    (function (BindType) {
        BindType[BindType["GETPHONE"] = 1] = "GETPHONE";
        BindType[BindType["GETEMAIL"] = 2] = "GETEMAIL";
    })(BindType = account.BindType || (account.BindType = {}));
    let ThirdBindType;
    (function (ThirdBindType) {
        ThirdBindType[ThirdBindType["FaceBook"] = 1] = "FaceBook";
        ThirdBindType[ThirdBindType["WeChat"] = 2] = "WeChat";
    })(ThirdBindType = account.ThirdBindType || (account.ThirdBindType = {}));
    let LockInfo = class LockInfo extends Message {
        constructor(param) {
            super();
            this.Appid = 0;
            this.End = 0;
            if (param) {
                this.Appid = param.Appid;
                this.End = param.End;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "optional")
    ], LockInfo.prototype, "Appid", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], LockInfo.prototype, "End", void 0);
    LockInfo = __decorate([
        Type.d("Type_bgo_account_common_account_proto_LockInfo")
    ], LockInfo);
    account.LockInfo = LockInfo;
    let UserInfo = class UserInfo extends Message {
        constructor(param) {
            super();
            this.sex = 0;
            this.name = "";
            this.avatar = "";
            this.extend = "";
            this.UID = 0;
            this.bigpic = "";
            this.modTime = 0;
            this.isRobot = false;
            this.realName = "";
            this.socialSex = 0;
            this.socialLocation = 0;
            this.socialBirthday = "";
            this.realBirthday = "";
            this.Ext = "";
            if (param) {
                this.sex = param.sex;
                this.name = param.name;
                this.avatar = param.avatar;
                this.extend = param.extend;
                this.UID = param.UID;
                this.bigpic = param.bigpic;
                this.modTime = param.modTime;
                this.isRobot = param.isRobot;
                this.realName = param.realName;
                this.socialSex = param.socialSex;
                this.socialLocation = param.socialLocation;
                this.socialBirthday = param.socialBirthday;
                this.realBirthday = param.realBirthday;
                this.Ext = param.Ext;
            }
        }
    };
    __decorate([
        Field.d(1, SexValue, "optional")
    ], UserInfo.prototype, "sex", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], UserInfo.prototype, "name", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], UserInfo.prototype, "avatar", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], UserInfo.prototype, "extend", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], UserInfo.prototype, "UID", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], UserInfo.prototype, "bigpic", void 0);
    __decorate([
        Field.d(9, "int64", "optional")
    ], UserInfo.prototype, "modTime", void 0);
    __decorate([
        Field.d(11, "bool", "optional")
    ], UserInfo.prototype, "isRobot", void 0);
    __decorate([
        Field.d(12, "string", "optional")
    ], UserInfo.prototype, "realName", void 0);
    __decorate([
        Field.d(13, SexValue, "optional")
    ], UserInfo.prototype, "socialSex", void 0);
    __decorate([
        Field.d(14, "int32", "optional")
    ], UserInfo.prototype, "socialLocation", void 0);
    __decorate([
        Field.d(15, "string", "optional")
    ], UserInfo.prototype, "socialBirthday", void 0);
    __decorate([
        Field.d(16, "string", "optional")
    ], UserInfo.prototype, "realBirthday", void 0);
    __decorate([
        Field.d(17, "string", "optional")
    ], UserInfo.prototype, "Ext", void 0);
    UserInfo = __decorate([
        Type.d("Type_bgo_account_common_account_proto_UserInfo")
    ], UserInfo);
    account.UserInfo = UserInfo;
    let RegExtInfo = class RegExtInfo extends Message {
        constructor(param) {
            super();
            this.os = "";
            this.channel = "";
            if (param) {
                this.os = param.os;
                this.channel = param.channel;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], RegExtInfo.prototype, "os", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], RegExtInfo.prototype, "channel", void 0);
    RegExtInfo = __decorate([
        Type.d("Type_bgo_account_common_account_proto_RegExtInfo")
    ], RegExtInfo);
    account.RegExtInfo = RegExtInfo;
    let BindRecommendRegRequest = class BindRecommendRegRequest extends Message {
        constructor(param) {
            super();
            this.uidRec = 0;
            this.uidBeRec = 0;
            if (param) {
                this.uidRec = param.uidRec;
                this.uidBeRec = param.uidBeRec;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], BindRecommendRegRequest.prototype, "uidRec", void 0);
    __decorate([
        Field.d(2, "int64", "required")
    ], BindRecommendRegRequest.prototype, "uidBeRec", void 0);
    BindRecommendRegRequest = __decorate([
        Type.d("Type_bgo_account_common_account_proto_BindRecommendRegRequest")
    ], BindRecommendRegRequest);
    account.BindRecommendRegRequest = BindRecommendRegRequest;
    let BindRecommendRegResponse = class BindRecommendRegResponse extends Message {
        constructor(param) {
            super();
            this.result = 0;
            if (param) {
                this.result = param.result;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], BindRecommendRegResponse.prototype, "result", void 0);
    BindRecommendRegResponse = __decorate([
        Type.d("Type_bgo_account_common_account_proto_BindRecommendRegResponse")
    ], BindRecommendRegResponse);
    account.BindRecommendRegResponse = BindRecommendRegResponse;
    let RecommendRegItem = class RecommendRegItem extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.time = 0;
            if (param) {
                this.uid = param.uid;
                this.time = param.time;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], RecommendRegItem.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "int64", "required")
    ], RecommendRegItem.prototype, "time", void 0);
    RecommendRegItem = __decorate([
        Type.d("Type_bgo_account_common_account_proto_RecommendRegItem")
    ], RecommendRegItem);
    account.RecommendRegItem = RecommendRegItem;
    let GetRecommendRegListRequest = class GetRecommendRegListRequest extends Message {
        constructor(param) {
            super();
            this.uidRec = 0;
            if (param) {
                this.uidRec = param.uidRec;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], GetRecommendRegListRequest.prototype, "uidRec", void 0);
    GetRecommendRegListRequest = __decorate([
        Type.d("Type_bgo_account_common_account_proto_GetRecommendRegListRequest")
    ], GetRecommendRegListRequest);
    account.GetRecommendRegListRequest = GetRecommendRegListRequest;
    let GetRecommendRegListResponse = class GetRecommendRegListResponse extends Message {
        constructor(param) {
            super();
            this.result = 0;
            this.list = [];
            if (param) {
                this.result = param.result;
                this.list = param.list;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetRecommendRegListResponse.prototype, "result", void 0);
    __decorate([
        Field.d(2, RecommendRegItem, "repeated")
    ], GetRecommendRegListResponse.prototype, "list", void 0);
    GetRecommendRegListResponse = __decorate([
        Type.d("Type_bgo_account_common_account_proto_GetRecommendRegListResponse")
    ], GetRecommendRegListResponse);
    account.GetRecommendRegListResponse = GetRecommendRegListResponse;
})(account || (account = {}));
//# sourceMappingURL=common_account.js.map