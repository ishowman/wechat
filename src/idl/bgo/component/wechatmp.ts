/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
import { base as base} from '@/idl/base/base';
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace wechatmp {
export enum Code {
	SmsCodeNotMatch = 20001,
	SmsCodeExpire = 20002,
	SmsCodeRetryLimit = 20003,
}
export enum WxAppType {
	OfficialAccount = 0,
	MiniProgram = 1,
}
@Type.d("Type_bgo_component_wechatmp_proto_GetWeChatOpenIdReq") 
export class GetWeChatOpenIdReq extends Message<GetWeChatOpenIdReq> { 
	constructor(param?: Properties<GetWeChatOpenIdReq>) {  
		super(); 
		if (param) { 
			this.appType = param.appType!
			this.wxCode = param.wxCode!
			} 
		} 
		@Field.d(1, WxAppType, "optional")
		appType:WxAppType = 0;
		@Field.d(3, "string", "optional")
		wxCode:string = "";
} 
@Type.d("Type_bgo_component_wechatmp_proto_GetWeChatOpenIdResp") 
export class GetWeChatOpenIdResp extends Message<GetWeChatOpenIdResp> { 
	constructor(param?: Properties<GetWeChatOpenIdResp>) {  
		super(); 
		if (param) { 
			this.openId = param.openId!
			} 
		} 
		@Field.d(1, "string", "optional")
		openId:string = "";
} 
@Type.d("Type_bgo_component_wechatmp_proto_BindWechatOpenIdReq") 
export class BindWechatOpenIdReq extends Message<BindWechatOpenIdReq> { 
	constructor(param?: Properties<BindWechatOpenIdReq>) {  
		super(); 
		if (param) { 
			this.appType = param.appType!
			this.wxCode = param.wxCode!
			} 
		} 
		@Field.d(1, WxAppType, "optional")
		appType:WxAppType = 0;
		@Field.d(3, "string", "optional")
		wxCode:string = "";
} 
@Type.d("Type_bgo_component_wechatmp_proto_BindWechatOpenIdResp") 
export class BindWechatOpenIdResp extends Message<BindWechatOpenIdResp> { 
	constructor(param?: Properties<BindWechatOpenIdResp>) {  
		super(); 
		if (param) { 
			this.openId = param.openId!
			} 
		} 
		@Field.d(2, "string", "optional")
		openId:string = "";
} 
@Type.d("Type_bgo_component_wechatmp_proto_TemplateText") 
export class TemplateText extends Message<TemplateText> { 
	constructor(param?: Properties<TemplateText>) {  
		super(); 
		if (param) { 
			this.value = param.value!
			this.color = param.color!
			} 
		} 
		@Field.d(1, "string", "optional")
		value:string = "";
		@Field.d(2, "string", "optional")
		color:string = "";
} 
@Type.d("Type_bgo_component_wechatmp_proto_TemplateData") 
export class TemplateData extends Message<TemplateData> { 
	constructor(param?: Properties<TemplateData>) {  
		super(); 
		if (param) { 
			this.first = new TemplateText(param.first!)
			this.remark = new TemplateText(param.remark!)
			this.keyword1 = new TemplateText(param.keyword1!)
			this.keyword2 = new TemplateText(param.keyword2!)
			this.keyword3 = new TemplateText(param.keyword3!)
			this.keyword4 = new TemplateText(param.keyword4!)
			this.keyword5 = new TemplateText(param.keyword5!)
			} 
		} 
		@Field.d(1, TemplateText, "optional")
		first:TemplateText =  new TemplateText();
		@Field.d(2, TemplateText, "optional")
		remark:TemplateText =  new TemplateText();
		@Field.d(3, TemplateText, "optional")
		keyword1:TemplateText =  new TemplateText();
		@Field.d(4, TemplateText, "optional")
		keyword2:TemplateText =  new TemplateText();
		@Field.d(5, TemplateText, "optional")
		keyword3:TemplateText =  new TemplateText();
		@Field.d(6, TemplateText, "optional")
		keyword4:TemplateText =  new TemplateText();
		@Field.d(7, TemplateText, "optional")
		keyword5:TemplateText =  new TemplateText();
} 
@Type.d("Type_bgo_component_wechatmp_proto_TemplateMP") 
export class TemplateMP extends Message<TemplateMP> { 
	constructor(param?: Properties<TemplateMP>) {  
		super(); 
		if (param) { 
			this.appid = param.appid!
			this.pagepath = param.pagepath!
			} 
		} 
		@Field.d(1, "string", "optional")
		appid:string = "";
		@Field.d(2, "string", "optional")
		pagepath:string = "";
} 
@Type.d("Type_bgo_component_wechatmp_proto_TemplateMessage") 
export class TemplateMessage extends Message<TemplateMessage> { 
	constructor(param?: Properties<TemplateMessage>) {  
		super(); 
		if (param) { 
			this.templateId = param.templateId!
			this.url = param.url!
			this.miniprogram = new TemplateMP(param.miniprogram!)
			this.color = param.color!
			this.data = new TemplateData(param.data!)
			} 
		} 
		@Field.d(2, "string", "required")
		templateId:string = "";
		@Field.d(3, "string", "optional")
		url:string = "";
		@Field.d(4, TemplateMP, "optional")
		miniprogram:TemplateMP =  new TemplateMP();
		@Field.d(5, "string", "optional")
		color:string = "";
		@Field.d(6, TemplateData, "required")
		data:TemplateData =  new TemplateData();
} 
@Type.d("Type_bgo_component_wechatmp_proto_SendTemplateMsgReq") 
export class SendTemplateMsgReq extends Message<SendTemplateMsgReq> { 
	constructor(param?: Properties<SendTemplateMsgReq>) {  
		super(); 
		if (param) { 
			this.uids = param.uids!
			this.msg = new TemplateMessage(param.msg!)
			this.sendToAll = param.sendToAll!
			} 
		} 
		@Field.d(2, "int64", "repeated")
		uids:number[] = [];
		@Field.d(3, TemplateMessage, "required")
		msg:TemplateMessage =  new TemplateMessage();
		@Field.d(4, "bool", "optional")
		sendToAll:boolean = false;
} 
@Type.d("Type_bgo_component_wechatmp_proto_SendTemplateMsgResp") 
export class SendTemplateMsgResp extends Message<SendTemplateMsgResp> { 
	constructor(param?: Properties<SendTemplateMsgResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_component_wechatmp_proto_GetJsTicketReq") 
export class GetJsTicketReq extends Message<GetJsTicketReq> { 
	constructor(param?: Properties<GetJsTicketReq>) {  
		super(); 
		if (param) { 
			} 
		} 
} 
@Type.d("Type_bgo_component_wechatmp_proto_GetJsTicketResp") 
export class GetJsTicketResp extends Message<GetJsTicketResp> { 
	constructor(param?: Properties<GetJsTicketResp>) {  
		super(); 
		if (param) { 
			this.jsTicket = param.jsTicket!
			} 
		} 
		@Field.d(1, "string", "optional")
		jsTicket:string = "";
} 
export const WechatmpServer = {
	config: new ApiSendConfig(),
	response:{ code:0 },
	resetConfig() {
		this.config = new ApiSendConfig();
	},
	env(baseEnv:CMSEnv) {
		baseEnv ? this.config.baseEnv = baseEnv : '';
		return this
	},
	label(label:{}) {
		label ? this.config.label = label : {};
		return this
	},
	space(space:string) {
		space ? this.config.space = space : '';
		return this
	},
	sen(sen:string) {
		sen ? this.config.sen = sen : '';
		return this
	},
	appID(appID:number) {
		appID ? this.config.appID = appID : 0;
		return this
	},
	async getWeChatOpenId(param:GetWeChatOpenIdReq):Promise<GetWeChatOpenIdResp|null> {
		const buffer = GetWeChatOpenIdReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.component.wechatmp", 1, "GetWeChatOpenId", buffer, this.config);
		return rsp.code === 0 ? GetWeChatOpenIdResp.decode(rsp.data) : null;
	},
	async bindWechatOpenId(param:BindWechatOpenIdReq):Promise<BindWechatOpenIdResp|null> {
		const buffer = BindWechatOpenIdReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.component.wechatmp", 2, "BindWechatOpenId", buffer, this.config);
		return rsp.code === 0 ? BindWechatOpenIdResp.decode(rsp.data) : null;
	},
	async getJsTicket(param:GetJsTicketReq):Promise<GetJsTicketResp|null> {
		const buffer = GetJsTicketReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.component.wechatmp", 3, "GetJsTicket", buffer, this.config);
		return rsp.code === 0 ? GetJsTicketResp.decode(rsp.data) : null;
	},
	async sendTemplateMsg(param:SendTemplateMsgReq):Promise<SendTemplateMsgResp|null> {
		const buffer = SendTemplateMsgReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.component.wechatmp", 10001, "SendTemplateMsg", buffer, this.config);
		return rsp.code === 0 ? SendTemplateMsgResp.decode(rsp.data) : null;
	},
}
}
