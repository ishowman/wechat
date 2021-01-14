import { __decorate } from "tslib";
/* eslint-disable */
import { rpcPlugin as byRpc, ApiSendConfig } from 'xj-core';
import { Message, Type, Field } from 'protobufjs/light';
export var sms;
(function (sms) {
    let Code;
    (function (Code) {
        Code[Code["ERR_PHONENUM_FORMAT"] = 196630] = "ERR_PHONENUM_FORMAT";
        Code[Code["ERR_SMSCODE_VERIFY"] = 196631] = "ERR_SMSCODE_VERIFY";
        Code[Code["ERR_SMSCODE_TOOFAST"] = 196632] = "ERR_SMSCODE_TOOFAST";
        Code[Code["ERR_SMSCODE_EXPIRE"] = 196640] = "ERR_SMSCODE_EXPIRE";
        Code[Code["ERR_SMSCODE_OUTTIME"] = 196641] = "ERR_SMSCODE_OUTTIME";
        Code[Code["ERR_SMSCODE_UNEXPIRE"] = 196643] = "ERR_SMSCODE_UNEXPIRE";
        Code[Code["ERR_SMSCODE_SENDFAIL"] = 196683] = "ERR_SMSCODE_SENDFAIL";
        Code[Code["ERR_PARAMS"] = 90001] = "ERR_PARAMS";
        Code[Code["ERR_TOKEN"] = 90002] = "ERR_TOKEN";
        Code[Code["ERR_BLACKLIST"] = 90003] = "ERR_BLACKLIST";
        Code[Code["ERR_TOO_SOON"] = 90004] = "ERR_TOO_SOON";
        Code[Code["ERR_NO_TEMPLATE"] = 90005] = "ERR_NO_TEMPLATE";
        Code[Code["ERR_WRONG_TEMPLATE"] = 90006] = "ERR_WRONG_TEMPLATE";
        Code[Code["ERR_BLOCK_WORD"] = 90007] = "ERR_BLOCK_WORD";
        Code[Code["ERR_OUT_SIZE"] = 90008] = "ERR_OUT_SIZE";
        Code[Code["ERR_NO_SUPPLIER"] = 90009] = "ERR_NO_SUPPLIER";
        Code[Code["ERR_NO_SUPPLIER1"] = 90010] = "ERR_NO_SUPPLIER1";
        Code[Code["ERR_SEND_FAILD"] = 90011] = "ERR_SEND_FAILD";
        Code[Code["ERR_ID_GEN_FAIL"] = 90012] = "ERR_ID_GEN_FAIL";
        Code[Code["ERR_SEN_ONCE_MAX"] = 90013] = "ERR_SEN_ONCE_MAX";
    })(Code = sms.Code || (sms.Code = {}));
    let TemplateId;
    (function (TemplateId) {
        TemplateId[TemplateId["Defualt"] = 0] = "Defualt";
        TemplateId[TemplateId["UrlTemplate"] = 91] = "UrlTemplate";
        TemplateId[TemplateId["NotifyTemplate"] = 103] = "NotifyTemplate";
    })(TemplateId = sms.TemplateId || (sms.TemplateId = {}));
    let SmsCodeType;
    (function (SmsCodeType) {
        SmsCodeType[SmsCodeType["Other"] = 0] = "Other";
        SmsCodeType[SmsCodeType["Registry"] = 1] = "Registry";
        SmsCodeType[SmsCodeType["PwdReset"] = 2] = "PwdReset";
        SmsCodeType[SmsCodeType["Login"] = 3] = "Login";
        SmsCodeType[SmsCodeType["Bind"] = 4] = "Bind";
        SmsCodeType[SmsCodeType["Unbind"] = 5] = "Unbind";
        SmsCodeType[SmsCodeType["ChangeBind"] = 6] = "ChangeBind";
    })(SmsCodeType = sms.SmsCodeType || (sms.SmsCodeType = {}));
    let SendSmsReq = class SendSmsReq extends Message {
        constructor(param) {
            super();
            this.phone = "";
            this.zoneId = 0;
            this.msgContent = "";
            this.templateId = 0;
            if (param) {
                this.phone = param.phone;
                this.zoneId = param.zoneId;
                this.msgContent = param.msgContent;
                this.templateId = param.templateId;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], SendSmsReq.prototype, "phone", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], SendSmsReq.prototype, "zoneId", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], SendSmsReq.prototype, "msgContent", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], SendSmsReq.prototype, "templateId", void 0);
    SendSmsReq = __decorate([
        Type.d("Type_bgo_component_sms_proto_SendSmsReq")
    ], SendSmsReq);
    sms.SendSmsReq = SendSmsReq;
    let SendSmsResp = class SendSmsResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.errMsg = "";
            if (param) {
                this.code = param.code;
                this.errMsg = param.errMsg;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], SendSmsResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], SendSmsResp.prototype, "errMsg", void 0);
    SendSmsResp = __decorate([
        Type.d("Type_bgo_component_sms_proto_SendSmsResp")
    ], SendSmsResp);
    sms.SendSmsResp = SendSmsResp;
    let SendSmsCodeReq = class SendSmsCodeReq extends Message {
        constructor(param) {
            super();
            this.phone = "";
            this.zoneId = 0;
            this.smsCodeType = 0;
            if (param) {
                this.phone = param.phone;
                this.zoneId = param.zoneId;
                this.smsCodeType = param.smsCodeType;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], SendSmsCodeReq.prototype, "phone", void 0);
    __decorate([
        Field.d(2, "int32", "required")
    ], SendSmsCodeReq.prototype, "zoneId", void 0);
    __decorate([
        Field.d(3, SmsCodeType, "required")
    ], SendSmsCodeReq.prototype, "smsCodeType", void 0);
    SendSmsCodeReq = __decorate([
        Type.d("Type_bgo_component_sms_proto_SendSmsCodeReq")
    ], SendSmsCodeReq);
    sms.SendSmsCodeReq = SendSmsCodeReq;
    let SendSmsCodeResp = class SendSmsCodeResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.errMsg = "";
            this.expiredTime = 0;
            if (param) {
                this.code = param.code;
                this.errMsg = param.errMsg;
                this.expiredTime = param.expiredTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], SendSmsCodeResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], SendSmsCodeResp.prototype, "errMsg", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], SendSmsCodeResp.prototype, "expiredTime", void 0);
    SendSmsCodeResp = __decorate([
        Type.d("Type_bgo_component_sms_proto_SendSmsCodeResp")
    ], SendSmsCodeResp);
    sms.SendSmsCodeResp = SendSmsCodeResp;
    let VerifySmsCodeReq = class VerifySmsCodeReq extends Message {
        constructor(param) {
            super();
            this.phone = "";
            this.zoneId = 0;
            this.smsCodeType = 0;
            this.smsCode = 0;
            this.preCheck = false;
            if (param) {
                this.phone = param.phone;
                this.zoneId = param.zoneId;
                this.smsCodeType = param.smsCodeType;
                this.smsCode = param.smsCode;
                this.preCheck = param.preCheck;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], VerifySmsCodeReq.prototype, "phone", void 0);
    __decorate([
        Field.d(2, "int32", "required")
    ], VerifySmsCodeReq.prototype, "zoneId", void 0);
    __decorate([
        Field.d(3, SmsCodeType, "required")
    ], VerifySmsCodeReq.prototype, "smsCodeType", void 0);
    __decorate([
        Field.d(4, "int32", "required")
    ], VerifySmsCodeReq.prototype, "smsCode", void 0);
    __decorate([
        Field.d(5, "bool", "optional")
    ], VerifySmsCodeReq.prototype, "preCheck", void 0);
    VerifySmsCodeReq = __decorate([
        Type.d("Type_bgo_component_sms_proto_VerifySmsCodeReq")
    ], VerifySmsCodeReq);
    sms.VerifySmsCodeReq = VerifySmsCodeReq;
    let VerifySmsCodeResp = class VerifySmsCodeResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.errMsg = "";
            this.expiredTime = 0;
            if (param) {
                this.code = param.code;
                this.errMsg = param.errMsg;
                this.expiredTime = param.expiredTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], VerifySmsCodeResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], VerifySmsCodeResp.prototype, "errMsg", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], VerifySmsCodeResp.prototype, "expiredTime", void 0);
    VerifySmsCodeResp = __decorate([
        Type.d("Type_bgo_component_sms_proto_VerifySmsCodeResp")
    ], VerifySmsCodeResp);
    sms.VerifySmsCodeResp = VerifySmsCodeResp;
    sms.SmsServer = {
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
        async sendSms(param) {
            const buffer = SendSmsReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.component.sms", 10001, "SendSms", buffer, this.config);
            return rsp.code === 0 ? SendSmsResp.decode(rsp.data) : null;
        },
        async sendSmsCode(param) {
            const buffer = SendSmsCodeReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.component.sms", 1, "SendSmsCode", buffer, this.config);
            return rsp.code === 0 ? SendSmsCodeResp.decode(rsp.data) : null;
        },
        async verifySmsCode(param) {
            const buffer = VerifySmsCodeReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.component.sms", 2, "VerifySmsCode", buffer, this.config);
            return rsp.code === 0 ? VerifySmsCodeResp.decode(rsp.data) : null;
        },
    };
})(sms || (sms = {}));
//# sourceMappingURL=sms.js.map