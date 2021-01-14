/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
import { account as account_common_account} from '@/idl/bgo/account/common_account';
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace login {
@Type.d("Type_bgo_account_login_proto_LoginExtend") 
export class LoginExtend extends Message<LoginExtend> { 
	constructor(param?: Properties<LoginExtend>) {  
		super(); 
		if (param) { 
			this.DeviceGUid = param.DeviceGUid!
			this.DeviceType = param.DeviceType!
			this.ClientTime = param.ClientTime!
			this.Latitude = param.Latitude!
			this.Longitude = param.Longitude!
			this.Language = param.Language!
			} 
		} 
		@Field.d(1, "string", "optional")
		DeviceGUid:string = "";
		@Field.d(2, account_common_account.DeviceType, "optional")
		DeviceType:account_common_account.DeviceType = 0;
		@Field.d(3, "uint64", "optional")
		ClientTime:number = 0;
		@Field.d(4, "float", "optional")
		Latitude:number = 0;
		@Field.d(5, "float", "optional")
		Longitude:number = 0;
		@Field.d(6, "string", "optional")
		Language:string = "";
} 
@Type.d("Type_bgo_account_login_proto_LoginRequest") 
export class LoginRequest extends Message<LoginRequest> { 
	constructor(param?: Properties<LoginRequest>) {  
		super(); 
		if (param) { 
			this.AccountType = param.AccountType!
			this.Account = param.Account!
			this.Password = param.Password!
			this.Ext = new LoginExtend(param.Ext!)
			} 
		} 
		@Field.d(1, account_common_account.AccountType, "optional")
		AccountType:account_common_account.AccountType = 0;
		@Field.d(2, "string", "optional")
		Account:string = "";
		@Field.d(3, "string", "optional")
		Password:string = "";
		@Field.d(4, LoginExtend, "optional")
		Ext:LoginExtend =  new LoginExtend();
} 
@Type.d("Type_bgo_account_login_proto_ThirdLoginRequest") 
export class ThirdLoginRequest extends Message<ThirdLoginRequest> { 
	constructor(param?: Properties<ThirdLoginRequest>) {  
		super(); 
		if (param) { 
			this.AccountType = param.AccountType!
			this.PlatUid = param.PlatUid!
			this.ThirdToken = param.ThirdToken!
			this.Extend = param.Extend!
			this.Ext = new LoginExtend(param.Ext!)
			} 
		} 
		@Field.d(1, account_common_account.AccountType, "optional")
		AccountType:account_common_account.AccountType = 0;
		@Field.d(2, "string", "optional")
		PlatUid:string = "";
		@Field.d(3, "string", "optional")
		ThirdToken:string = "";
		@Field.d(4, "string", "optional")
		Extend:string = "";
		@Field.d(5, LoginExtend, "optional")
		Ext:LoginExtend =  new LoginExtend();
} 
@Type.d("Type_bgo_account_login_proto_RetryLoginRequest") 
export class RetryLoginRequest extends Message<RetryLoginRequest> { 
	constructor(param?: Properties<RetryLoginRequest>) {  
		super(); 
		if (param) { 
			this.UID = param.UID!
			this.Session = new Uint8Array(param.Session!)
			this.Ext = new LoginExtend(param.Ext!)
			} 
		} 
		@Field.d(1, "int64", "optional")
		UID:number = 0;
		@Field.d(2, "bytes", "optional")
		Session:Uint8Array =  new Uint8Array();
		@Field.d(3, LoginExtend, "optional")
		Ext:LoginExtend =  new LoginExtend();
} 
@Type.d("Type_bgo_account_login_proto_LoginResponse") 
export class LoginResponse extends Message<LoginResponse> { 
	constructor(param?: Properties<LoginResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.Session = new Uint8Array(param.Session!)
			this.SessionTimeout = param.SessionTimeout!
			this.PlatUid = param.PlatUid!
			this.PlatToken = param.PlatToken!
			this.UID = param.UID!
			this.SmsCodeExpiredTime = param.SmsCodeExpiredTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "bytes", "optional")
		Session:Uint8Array =  new Uint8Array();
		@Field.d(4, "int64", "optional")
		SessionTimeout:number = 0;
		@Field.d(5, "string", "optional")
		PlatUid:string = "";
		@Field.d(6, "string", "optional")
		PlatToken:string = "";
		@Field.d(8, "int64", "required")
		UID:number = 0;
		@Field.d(9, "int64", "optional")
		SmsCodeExpiredTime:number = 0;
} 
@Type.d("Type_bgo_account_login_proto_CheckSessionRequest") 
export class CheckSessionRequest extends Message<CheckSessionRequest> { 
	constructor(param?: Properties<CheckSessionRequest>) {  
		super(); 
		if (param) { 
			this.UID = param.UID!
			this.Session = new Uint8Array(param.Session!)
			this.DeviceGUid = param.DeviceGUid!
			} 
		} 
		@Field.d(1, "int64", "optional")
		UID:number = 0;
		@Field.d(2, "bytes", "optional")
		Session:Uint8Array =  new Uint8Array();
		@Field.d(3, "string", "optional")
		DeviceGUid:string = "";
} 
@Type.d("Type_bgo_account_login_proto_CheckSessionResponse") 
export class CheckSessionResponse extends Message<CheckSessionResponse> { 
	constructor(param?: Properties<CheckSessionResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.UID = param.UID!
			this.SessionTimeout = param.SessionTimeout!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int64", "optional")
		UID:number = 0;
		@Field.d(4, "int64", "optional")
		SessionTimeout:number = 0;
} 
@Type.d("Type_bgo_account_login_proto_GetLoginSmsCodeRequest") 
export class GetLoginSmsCodeRequest extends Message<GetLoginSmsCodeRequest> { 
	constructor(param?: Properties<GetLoginSmsCodeRequest>) {  
		super(); 
		if (param) { 
			this.Phone = param.Phone!
			this.ZoneID = param.ZoneID!
			} 
		} 
		@Field.d(1, "string", "optional")
		Phone:string = "";
		@Field.d(2, "int32", "optional")
		ZoneID:number = 0;
} 
@Type.d("Type_bgo_account_login_proto_GetLoginSmsCodeResponse") 
export class GetLoginSmsCodeResponse extends Message<GetLoginSmsCodeResponse> { 
	constructor(param?: Properties<GetLoginSmsCodeResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.ExpireTime = param.ExpireTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int64", "optional")
		ExpireTime:number = 0;
} 
@Type.d("Type_bgo_account_login_proto_LoginBySmsCodeRequest") 
export class LoginBySmsCodeRequest extends Message<LoginBySmsCodeRequest> { 
	constructor(param?: Properties<LoginBySmsCodeRequest>) {  
		super(); 
		if (param) { 
			this.Phone = param.Phone!
			this.ZoneID = param.ZoneID!
			this.SmsCode = param.SmsCode!
			this.Ext = new LoginExtend(param.Ext!)
			} 
		} 
		@Field.d(1, "string", "optional")
		Phone:string = "";
		@Field.d(2, "int32", "optional")
		ZoneID:number = 0;
		@Field.d(3, "int32", "optional")
		SmsCode:number = 0;
		@Field.d(4, LoginExtend, "optional")
		Ext:LoginExtend =  new LoginExtend();
} 
@Type.d("Type_bgo_account_login_proto_LoginGuestRequest") 
export class LoginGuestRequest extends Message<LoginGuestRequest> { 
	constructor(param?: Properties<LoginGuestRequest>) {  
		super(); 
		if (param) { 
			this.Uid = param.Uid!
			this.Ext = new LoginExtend(param.Ext!)
			} 
		} 
		@Field.d(1, "int64", "optional")
		Uid:number = 0;
		@Field.d(2, LoginExtend, "optional")
		Ext:LoginExtend =  new LoginExtend();
} 
@Type.d("Type_bgo_account_login_proto_PhoneCheckRequest") 
export class PhoneCheckRequest extends Message<PhoneCheckRequest> { 
	constructor(param?: Properties<PhoneCheckRequest>) {  
		super(); 
		if (param) { 
			this.Phone = param.Phone!
			this.ZoneID = param.ZoneID!
			} 
		} 
		@Field.d(1, "string", "optional")
		Phone:string = "";
		@Field.d(2, "int32", "optional")
		ZoneID:number = 0;
} 
@Type.d("Type_bgo_account_login_proto_PhoneCheckResponse") 
export class PhoneCheckResponse extends Message<PhoneCheckResponse> { 
	constructor(param?: Properties<PhoneCheckResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.CheckCode = param.CheckCode!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, account_common_account.IntelligentPhoneCheckCode, "optional")
		CheckCode:account_common_account.IntelligentPhoneCheckCode = 0;
} 
@Type.d("Type_bgo_account_login_proto_AutoRegistyRequest") 
export class AutoRegistyRequest extends Message<AutoRegistyRequest> { 
	constructor(param?: Properties<AutoRegistyRequest>) {  
		super(); 
		if (param) { 
			this.Phone = param.Phone!
			this.ZoneID = param.ZoneID!
			this.SmsCode = param.SmsCode!
			this.Ext = new LoginExtend(param.Ext!)
			this.RegExt = param.RegExt!
			} 
		} 
		@Field.d(1, "string", "optional")
		Phone:string = "";
		@Field.d(2, "int32", "optional")
		ZoneID:number = 0;
		@Field.d(3, "int32", "optional")
		SmsCode:number = 0;
		@Field.d(4, LoginExtend, "optional")
		Ext:LoginExtend =  new LoginExtend();
		@Field.d(5, "string", "optional")
		RegExt:string = "";
} 
@Type.d("Type_bgo_account_login_proto_VerifyCaptchaReq") 
export class VerifyCaptchaReq extends Message<VerifyCaptchaReq> { 
	constructor(param?: Properties<VerifyCaptchaReq>) {  
		super(); 
		if (param) { 
			this.captchaId = param.captchaId!
			this.input = param.input!
			} 
		} 
		@Field.d(1, "string", "optional")
		captchaId:string = "";
		@Field.d(2, "string", "optional")
		input:string = "";
} 
@Type.d("Type_bgo_account_login_proto_VerifyCaptchaResp") 
export class VerifyCaptchaResp extends Message<VerifyCaptchaResp> { 
	constructor(param?: Properties<VerifyCaptchaResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.retryTimes = param.retryTimes!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int32", "optional")
		retryTimes:number = 0;
} 
@Type.d("Type_bgo_account_login_proto_BindPhoneWxMpReq") 
export class BindPhoneWxMpReq extends Message<BindPhoneWxMpReq> { 
	constructor(param?: Properties<BindPhoneWxMpReq>) {  
		super(); 
		if (param) { 
			this.SessionKey = param.SessionKey!
			this.openid = param.openid!
			this.Iv = param.Iv!
			this.EncryptedData = param.EncryptedData!
			} 
		} 
		@Field.d(1, "string", "optional")
		SessionKey:string = "";
		@Field.d(2, "string", "optional")
		openid:string = "";
		@Field.d(3, "string", "optional")
		Iv:string = "";
		@Field.d(4, "string", "optional")
		EncryptedData:string = "";
} 
export const LoginServer = {
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
	async login(param:LoginRequest):Promise<LoginResponse|null> {
		const buffer = LoginRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.login", 1, "Login", buffer, this.config);
		return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
	},
	async loginThird(param:ThirdLoginRequest):Promise<LoginResponse|null> {
		const buffer = ThirdLoginRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.login", 2, "LoginThird", buffer, this.config);
		return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
	},
	async loginSession(param:RetryLoginRequest):Promise<LoginResponse|null> {
		const buffer = RetryLoginRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.login", 3, "LoginSession", buffer, this.config);
		return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
	},
	async checkSession(param:CheckSessionRequest):Promise<CheckSessionResponse|null> {
		const buffer = CheckSessionRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.login", 4, "CheckSession", buffer, this.config);
		return rsp.code === 0 ? CheckSessionResponse.decode(rsp.data) : null;
	},
	async getLoginSmsCode(param:GetLoginSmsCodeRequest):Promise<GetLoginSmsCodeResponse|null> {
		const buffer = GetLoginSmsCodeRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.login", 5, "GetLoginSmsCode", buffer, this.config);
		return rsp.code === 0 ? GetLoginSmsCodeResponse.decode(rsp.data) : null;
	},
	async loginBySmsCode(param:LoginBySmsCodeRequest):Promise<LoginResponse|null> {
		const buffer = LoginBySmsCodeRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.login", 6, "LoginBySmsCode", buffer, this.config);
		return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
	},
	async loginGuest(param:LoginGuestRequest):Promise<LoginResponse|null> {
		const buffer = LoginGuestRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.login", 7, "LoginGuest", buffer, this.config);
		return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
	},
	async intelligentPhoneCheck(param:PhoneCheckRequest):Promise<PhoneCheckResponse|null> {
		const buffer = PhoneCheckRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.login", 8, "IntelligentPhoneCheck", buffer, this.config);
		return rsp.code === 0 ? PhoneCheckResponse.decode(rsp.data) : null;
	},
	async loginAndAutoRegisty(param:AutoRegistyRequest):Promise<LoginResponse|null> {
		const buffer = AutoRegistyRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.login", 9, "LoginAndAutoRegisty", buffer, this.config);
		return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
	},
	async verifyCaptcha(param:VerifyCaptchaReq):Promise<VerifyCaptchaResp|null> {
		const buffer = VerifyCaptchaReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.login", 10, "VerifyCaptcha", buffer, this.config);
		return rsp.code === 0 ? VerifyCaptchaResp.decode(rsp.data) : null;
	},
	async bindPhoneWxMp(param:BindPhoneWxMpReq):Promise<LoginResponse|null> {
		const buffer = BindPhoneWxMpReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.login", 11, "BindPhoneWxMp", buffer, this.config);
		return rsp.code === 0 ? LoginResponse.decode(rsp.data) : null;
	},
}
}
