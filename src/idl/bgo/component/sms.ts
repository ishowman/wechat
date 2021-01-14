/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
import { base as base} from '@/idl/base/base';
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace sms {
export enum Code {
	ERR_PHONENUM_FORMAT = 196630,
	ERR_SMSCODE_VERIFY = 196631,
	ERR_SMSCODE_TOOFAST = 196632,
	ERR_SMSCODE_EXPIRE = 196640,
	ERR_SMSCODE_OUTTIME = 196641,
	ERR_SMSCODE_UNEXPIRE = 196643,
	ERR_SMSCODE_SENDFAIL = 196683,
	ERR_PARAMS = 90001,
	ERR_TOKEN = 90002,
	ERR_BLACKLIST = 90003,
	ERR_TOO_SOON = 90004,
	ERR_NO_TEMPLATE = 90005,
	ERR_WRONG_TEMPLATE = 90006,
	ERR_BLOCK_WORD = 90007,
	ERR_OUT_SIZE = 90008,
	ERR_NO_SUPPLIER = 90009,
	ERR_NO_SUPPLIER1 = 90010,
	ERR_SEND_FAILD = 90011,
	ERR_ID_GEN_FAIL = 90012,
	ERR_SEN_ONCE_MAX = 90013,
}
export enum TemplateId {
	Defualt = 0,
	UrlTemplate = 91,
	NotifyTemplate = 103,
}
export enum SmsCodeType {
	Other = 0,
	Registry = 1,
	PwdReset = 2,
	Login = 3,
	Bind = 4,
	Unbind = 5,
	ChangeBind = 6,
}
@Type.d("Type_bgo_component_sms_proto_SendSmsReq") 
export class SendSmsReq extends Message<SendSmsReq> { 
	constructor(param?: Properties<SendSmsReq>) {  
		super(); 
		if (param) { 
			this.phone = param.phone!
			this.zoneId = param.zoneId!
			this.msgContent = param.msgContent!
			this.templateId = param.templateId!
			} 
		} 
		@Field.d(1, "string", "required")
		phone:string = "";
		@Field.d(2, "int32", "optional")
		zoneId:number = 0;
		@Field.d(3, "string", "optional")
		msgContent:string = "";
		@Field.d(4, "int64", "optional")
		templateId:number = 0;
} 
@Type.d("Type_bgo_component_sms_proto_SendSmsResp") 
export class SendSmsResp extends Message<SendSmsResp> { 
	constructor(param?: Properties<SendSmsResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.errMsg = param.errMsg!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "string", "optional")
		errMsg:string = "";
} 
@Type.d("Type_bgo_component_sms_proto_SendSmsCodeReq") 
export class SendSmsCodeReq extends Message<SendSmsCodeReq> { 
	constructor(param?: Properties<SendSmsCodeReq>) {  
		super(); 
		if (param) { 
			this.phone = param.phone!
			this.zoneId = param.zoneId!
			this.smsCodeType = param.smsCodeType!
			} 
		} 
		@Field.d(1, "string", "required")
		phone:string = "";
		@Field.d(2, "int32", "required")
		zoneId:number = 0;
		@Field.d(3, SmsCodeType, "required")
		smsCodeType:SmsCodeType = 0;
} 
@Type.d("Type_bgo_component_sms_proto_SendSmsCodeResp") 
export class SendSmsCodeResp extends Message<SendSmsCodeResp> { 
	constructor(param?: Properties<SendSmsCodeResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.errMsg = param.errMsg!
			this.expiredTime = param.expiredTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "string", "optional")
		errMsg:string = "";
		@Field.d(3, "int64", "optional")
		expiredTime:number = 0;
} 
@Type.d("Type_bgo_component_sms_proto_VerifySmsCodeReq") 
export class VerifySmsCodeReq extends Message<VerifySmsCodeReq> { 
	constructor(param?: Properties<VerifySmsCodeReq>) {  
		super(); 
		if (param) { 
			this.phone = param.phone!
			this.zoneId = param.zoneId!
			this.smsCodeType = param.smsCodeType!
			this.smsCode = param.smsCode!
			this.preCheck = param.preCheck!
			} 
		} 
		@Field.d(1, "string", "required")
		phone:string = "";
		@Field.d(2, "int32", "required")
		zoneId:number = 0;
		@Field.d(3, SmsCodeType, "required")
		smsCodeType:SmsCodeType = 0;
		@Field.d(4, "int32", "required")
		smsCode:number = 0;
		@Field.d(5, "bool", "optional")
		preCheck:boolean = false;
} 
@Type.d("Type_bgo_component_sms_proto_VerifySmsCodeResp") 
export class VerifySmsCodeResp extends Message<VerifySmsCodeResp> { 
	constructor(param?: Properties<VerifySmsCodeResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.errMsg = param.errMsg!
			this.expiredTime = param.expiredTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "string", "optional")
		errMsg:string = "";
		@Field.d(3, "int64", "optional")
		expiredTime:number = 0;
} 
export const SmsServer = {
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
	async sendSms(param:SendSmsReq):Promise<SendSmsResp|null> {
		const buffer = SendSmsReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.component.sms", 10001, "SendSms", buffer, this.config);
		return rsp.code === 0 ? SendSmsResp.decode(rsp.data) : null;
	},
	async sendSmsCode(param:SendSmsCodeReq):Promise<SendSmsCodeResp|null> {
		const buffer = SendSmsCodeReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.component.sms", 1, "SendSmsCode", buffer, this.config);
		return rsp.code === 0 ? SendSmsCodeResp.decode(rsp.data) : null;
	},
	async verifySmsCode(param:VerifySmsCodeReq):Promise<VerifySmsCodeResp|null> {
		const buffer = VerifySmsCodeReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.component.sms", 2, "VerifySmsCode", buffer, this.config);
		return rsp.code === 0 ? VerifySmsCodeResp.decode(rsp.data) : null;
	},
}
}
