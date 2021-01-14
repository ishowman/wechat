import { __decorate } from "tslib";
/* eslint-disable */
import { rpcPlugin as byRpc, ApiSendConfig } from 'xj-core';
import { Message, Type, Field } from 'protobufjs/light';
export var wechatmp;
(function (wechatmp) {
    let Code;
    (function (Code) {
        Code[Code["SmsCodeNotMatch"] = 20001] = "SmsCodeNotMatch";
        Code[Code["SmsCodeExpire"] = 20002] = "SmsCodeExpire";
        Code[Code["SmsCodeRetryLimit"] = 20003] = "SmsCodeRetryLimit";
    })(Code = wechatmp.Code || (wechatmp.Code = {}));
    let WxAppType;
    (function (WxAppType) {
        WxAppType[WxAppType["OfficialAccount"] = 0] = "OfficialAccount";
        WxAppType[WxAppType["MiniProgram"] = 1] = "MiniProgram";
    })(WxAppType = wechatmp.WxAppType || (wechatmp.WxAppType = {}));
    let GetWeChatOpenIdReq = class GetWeChatOpenIdReq extends Message {
        constructor(param) {
            super();
            this.appType = 0;
            this.wxCode = "";
            if (param) {
                this.appType = param.appType;
                this.wxCode = param.wxCode;
            }
        }
    };
    __decorate([
        Field.d(1, WxAppType, "optional")
    ], GetWeChatOpenIdReq.prototype, "appType", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], GetWeChatOpenIdReq.prototype, "wxCode", void 0);
    GetWeChatOpenIdReq = __decorate([
        Type.d("Type_bgo_component_wechatmp_proto_GetWeChatOpenIdReq")
    ], GetWeChatOpenIdReq);
    wechatmp.GetWeChatOpenIdReq = GetWeChatOpenIdReq;
    let GetWeChatOpenIdResp = class GetWeChatOpenIdResp extends Message {
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
    ], GetWeChatOpenIdResp.prototype, "openId", void 0);
    GetWeChatOpenIdResp = __decorate([
        Type.d("Type_bgo_component_wechatmp_proto_GetWeChatOpenIdResp")
    ], GetWeChatOpenIdResp);
    wechatmp.GetWeChatOpenIdResp = GetWeChatOpenIdResp;
    let BindWechatOpenIdReq = class BindWechatOpenIdReq extends Message {
        constructor(param) {
            super();
            this.appType = 0;
            this.wxCode = "";
            if (param) {
                this.appType = param.appType;
                this.wxCode = param.wxCode;
            }
        }
    };
    __decorate([
        Field.d(1, WxAppType, "optional")
    ], BindWechatOpenIdReq.prototype, "appType", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], BindWechatOpenIdReq.prototype, "wxCode", void 0);
    BindWechatOpenIdReq = __decorate([
        Type.d("Type_bgo_component_wechatmp_proto_BindWechatOpenIdReq")
    ], BindWechatOpenIdReq);
    wechatmp.BindWechatOpenIdReq = BindWechatOpenIdReq;
    let BindWechatOpenIdResp = class BindWechatOpenIdResp extends Message {
        constructor(param) {
            super();
            this.openId = "";
            if (param) {
                this.openId = param.openId;
            }
        }
    };
    __decorate([
        Field.d(2, "string", "optional")
    ], BindWechatOpenIdResp.prototype, "openId", void 0);
    BindWechatOpenIdResp = __decorate([
        Type.d("Type_bgo_component_wechatmp_proto_BindWechatOpenIdResp")
    ], BindWechatOpenIdResp);
    wechatmp.BindWechatOpenIdResp = BindWechatOpenIdResp;
    let TemplateText = class TemplateText extends Message {
        constructor(param) {
            super();
            this.value = "";
            this.color = "";
            if (param) {
                this.value = param.value;
                this.color = param.color;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], TemplateText.prototype, "value", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], TemplateText.prototype, "color", void 0);
    TemplateText = __decorate([
        Type.d("Type_bgo_component_wechatmp_proto_TemplateText")
    ], TemplateText);
    wechatmp.TemplateText = TemplateText;
    let TemplateData = class TemplateData extends Message {
        constructor(param) {
            super();
            this.first = new TemplateText();
            this.remark = new TemplateText();
            this.keyword1 = new TemplateText();
            this.keyword2 = new TemplateText();
            this.keyword3 = new TemplateText();
            this.keyword4 = new TemplateText();
            this.keyword5 = new TemplateText();
            if (param) {
                this.first = new TemplateText(param.first);
                this.remark = new TemplateText(param.remark);
                this.keyword1 = new TemplateText(param.keyword1);
                this.keyword2 = new TemplateText(param.keyword2);
                this.keyword3 = new TemplateText(param.keyword3);
                this.keyword4 = new TemplateText(param.keyword4);
                this.keyword5 = new TemplateText(param.keyword5);
            }
        }
    };
    __decorate([
        Field.d(1, TemplateText, "optional")
    ], TemplateData.prototype, "first", void 0);
    __decorate([
        Field.d(2, TemplateText, "optional")
    ], TemplateData.prototype, "remark", void 0);
    __decorate([
        Field.d(3, TemplateText, "optional")
    ], TemplateData.prototype, "keyword1", void 0);
    __decorate([
        Field.d(4, TemplateText, "optional")
    ], TemplateData.prototype, "keyword2", void 0);
    __decorate([
        Field.d(5, TemplateText, "optional")
    ], TemplateData.prototype, "keyword3", void 0);
    __decorate([
        Field.d(6, TemplateText, "optional")
    ], TemplateData.prototype, "keyword4", void 0);
    __decorate([
        Field.d(7, TemplateText, "optional")
    ], TemplateData.prototype, "keyword5", void 0);
    TemplateData = __decorate([
        Type.d("Type_bgo_component_wechatmp_proto_TemplateData")
    ], TemplateData);
    wechatmp.TemplateData = TemplateData;
    let TemplateMP = class TemplateMP extends Message {
        constructor(param) {
            super();
            this.appid = "";
            this.pagepath = "";
            if (param) {
                this.appid = param.appid;
                this.pagepath = param.pagepath;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], TemplateMP.prototype, "appid", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], TemplateMP.prototype, "pagepath", void 0);
    TemplateMP = __decorate([
        Type.d("Type_bgo_component_wechatmp_proto_TemplateMP")
    ], TemplateMP);
    wechatmp.TemplateMP = TemplateMP;
    let TemplateMessage = class TemplateMessage extends Message {
        constructor(param) {
            super();
            this.templateId = "";
            this.url = "";
            this.miniprogram = new TemplateMP();
            this.color = "";
            this.data = new TemplateData();
            if (param) {
                this.templateId = param.templateId;
                this.url = param.url;
                this.miniprogram = new TemplateMP(param.miniprogram);
                this.color = param.color;
                this.data = new TemplateData(param.data);
            }
        }
    };
    __decorate([
        Field.d(2, "string", "required")
    ], TemplateMessage.prototype, "templateId", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], TemplateMessage.prototype, "url", void 0);
    __decorate([
        Field.d(4, TemplateMP, "optional")
    ], TemplateMessage.prototype, "miniprogram", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], TemplateMessage.prototype, "color", void 0);
    __decorate([
        Field.d(6, TemplateData, "required")
    ], TemplateMessage.prototype, "data", void 0);
    TemplateMessage = __decorate([
        Type.d("Type_bgo_component_wechatmp_proto_TemplateMessage")
    ], TemplateMessage);
    wechatmp.TemplateMessage = TemplateMessage;
    let SendTemplateMsgReq = class SendTemplateMsgReq extends Message {
        constructor(param) {
            super();
            this.uids = [];
            this.msg = new TemplateMessage();
            this.sendToAll = false;
            if (param) {
                this.uids = param.uids;
                this.msg = new TemplateMessage(param.msg);
                this.sendToAll = param.sendToAll;
            }
        }
    };
    __decorate([
        Field.d(2, "int64", "repeated")
    ], SendTemplateMsgReq.prototype, "uids", void 0);
    __decorate([
        Field.d(3, TemplateMessage, "required")
    ], SendTemplateMsgReq.prototype, "msg", void 0);
    __decorate([
        Field.d(4, "bool", "optional")
    ], SendTemplateMsgReq.prototype, "sendToAll", void 0);
    SendTemplateMsgReq = __decorate([
        Type.d("Type_bgo_component_wechatmp_proto_SendTemplateMsgReq")
    ], SendTemplateMsgReq);
    wechatmp.SendTemplateMsgReq = SendTemplateMsgReq;
    let SendTemplateMsgResp = class SendTemplateMsgResp extends Message {
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
    ], SendTemplateMsgResp.prototype, "code", void 0);
    SendTemplateMsgResp = __decorate([
        Type.d("Type_bgo_component_wechatmp_proto_SendTemplateMsgResp")
    ], SendTemplateMsgResp);
    wechatmp.SendTemplateMsgResp = SendTemplateMsgResp;
    let GetJsTicketReq = class GetJsTicketReq extends Message {
        constructor(param) {
            super();
            if (param) {
            }
        }
    };
    GetJsTicketReq = __decorate([
        Type.d("Type_bgo_component_wechatmp_proto_GetJsTicketReq")
    ], GetJsTicketReq);
    wechatmp.GetJsTicketReq = GetJsTicketReq;
    let GetJsTicketResp = class GetJsTicketResp extends Message {
        constructor(param) {
            super();
            this.jsTicket = "";
            if (param) {
                this.jsTicket = param.jsTicket;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetJsTicketResp.prototype, "jsTicket", void 0);
    GetJsTicketResp = __decorate([
        Type.d("Type_bgo_component_wechatmp_proto_GetJsTicketResp")
    ], GetJsTicketResp);
    wechatmp.GetJsTicketResp = GetJsTicketResp;
    wechatmp.WechatmpServer = {
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
        async getWeChatOpenId(param) {
            const buffer = GetWeChatOpenIdReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.component.wechatmp", 1, "GetWeChatOpenId", buffer, this.config);
            return rsp.code === 0 ? GetWeChatOpenIdResp.decode(rsp.data) : null;
        },
        async bindWechatOpenId(param) {
            const buffer = BindWechatOpenIdReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.component.wechatmp", 2, "BindWechatOpenId", buffer, this.config);
            return rsp.code === 0 ? BindWechatOpenIdResp.decode(rsp.data) : null;
        },
        async getJsTicket(param) {
            const buffer = GetJsTicketReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.component.wechatmp", 3, "GetJsTicket", buffer, this.config);
            return rsp.code === 0 ? GetJsTicketResp.decode(rsp.data) : null;
        },
        async sendTemplateMsg(param) {
            const buffer = SendTemplateMsgReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.component.wechatmp", 10001, "SendTemplateMsg", buffer, this.config);
            return rsp.code === 0 ? SendTemplateMsgResp.decode(rsp.data) : null;
        },
    };
})(wechatmp || (wechatmp = {}));
//# sourceMappingURL=wechatmp.js.map