/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
import { base as base} from '@/idl/base/base';
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace token {
export enum AccessTokenType {
	OPENTID = 0,
	AuthToken = 1,
}
export enum WxAppType {
	OfficialAccount = 0,
	MiniProgram = 1,
}
@Type.d("Type_bgo_account_token_proto_GetAccessTokenReq") 
export class GetAccessTokenReq extends Message<GetAccessTokenReq> { 
	constructor(param?: Properties<GetAccessTokenReq>) {  
		super(); 
		if (param) { 
			this.appId = param.appId!
			this.type = param.type!
			this.ipaddr = param.ipaddr!
			} 
		} 
		@Field.d(1, "string", "required")
		appId:string = "";
		@Field.d(2, AccessTokenType, "optional")
		type:AccessTokenType = 0;
		@Field.d(3, "string", "optional")
		ipaddr:string = "";
} 
@Type.d("Type_bgo_account_token_proto_GetAccessTokenResp") 
export class GetAccessTokenResp extends Message<GetAccessTokenResp> { 
	constructor(param?: Properties<GetAccessTokenResp>) {  
		super(); 
		if (param) { 
			this.accessToken = param.accessToken!
			this.openId = param.openId!
			this.expireTime = param.expireTime!
			} 
		} 
		@Field.d(1, "string", "optional")
		accessToken:string = "";
		@Field.d(2, "string", "optional")
		openId:string = "";
		@Field.d(3, "int64", "optional")
		expireTime:number = 0;
} 
@Type.d("Type_bgo_account_token_proto_AuthAccessTokenReq") 
export class AuthAccessTokenReq extends Message<AuthAccessTokenReq> { 
	constructor(param?: Properties<AuthAccessTokenReq>) {  
		super(); 
		if (param) { 
			this.accessToken = param.accessToken!
			this.ipaddr = param.ipaddr!
			} 
		} 
		@Field.d(1, "string", "optional")
		accessToken:string = "";
		@Field.d(2, "string", "optional")
		ipaddr:string = "";
} 
@Type.d("Type_bgo_account_token_proto_AuthAccessTokenResp") 
export class AuthAccessTokenResp extends Message<AuthAccessTokenResp> { 
	constructor(param?: Properties<AuthAccessTokenResp>) {  
		super(); 
		if (param) { 
			this.openId = param.openId!
			this.uid = param.uid!
			this.appId = param.appId!
			this.expireTime = param.expireTime!
			this.ctxAppId = param.ctxAppId!
			} 
		} 
		@Field.d(1, "string", "optional")
		openId:string = "";
		@Field.d(2, "int64", "optional")
		uid:number = 0;
		@Field.d(3, "string", "optional")
		appId:string = "";
		@Field.d(4, "int64", "optional")
		expireTime:number = 0;
		@Field.d(5, "uint32", "optional")
		ctxAppId:number = 0;
} 
@Type.d("Type_bgo_account_token_proto_GetUidByOpenIdReq") 
export class GetUidByOpenIdReq extends Message<GetUidByOpenIdReq> { 
	constructor(param?: Properties<GetUidByOpenIdReq>) {  
		super(); 
		if (param) { 
			this.openId = param.openId!
			} 
		} 
		@Field.d(1, "string", "optional")
		openId:string = "";
} 
@Type.d("Type_bgo_account_token_proto_GetUidByOpenIdResp") 
export class GetUidByOpenIdResp extends Message<GetUidByOpenIdResp> { 
	constructor(param?: Properties<GetUidByOpenIdResp>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.appId = param.appId!
			} 
		} 
		@Field.d(1, "int64", "optional")
		uid:number = 0;
		@Field.d(2, "string", "optional")
		appId:string = "";
} 
@Type.d("Type_bgo_account_token_proto_DelAccessTokenReq") 
export class DelAccessTokenReq extends Message<DelAccessTokenReq> { 
	constructor(param?: Properties<DelAccessTokenReq>) {  
		super(); 
		if (param) { 
			this.accessToken = param.accessToken!
			} 
		} 
		@Field.d(1, "string", "optional")
		accessToken:string = "";
} 
@Type.d("Type_bgo_account_token_proto_GetLastAuthInfoByUidReq") 
export class GetLastAuthInfoByUidReq extends Message<GetLastAuthInfoByUidReq> { 
	constructor(param?: Properties<GetLastAuthInfoByUidReq>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			} 
		} 
		@Field.d(1, "int64", "optional")
		uid:number = 0;
} 
@Type.d("Type_bgo_account_token_proto_AuthInfo") 
export class AuthInfo extends Message<AuthInfo> { 
	constructor(param?: Properties<AuthInfo>) {  
		super(); 
		if (param) { 
			this.accessToken = param.accessToken!
			this.appid = param.appid!
			this.ipaddr = param.ipaddr!
			this.updateTime = param.updateTime!
			} 
		} 
		@Field.d(1, "string", "optional")
		accessToken:string = "";
		@Field.d(2, "string", "optional")
		appid:string = "";
		@Field.d(3, "string", "optional")
		ipaddr:string = "";
		@Field.d(4, "int64", "optional")
		updateTime:number = 0;
} 
@Type.d("Type_bgo_account_token_proto_GetLastAuthInfoByUidResp") 
export class GetLastAuthInfoByUidResp extends Message<GetLastAuthInfoByUidResp> { 
	constructor(param?: Properties<GetLastAuthInfoByUidResp>) {  
		super(); 
		if (param) { 
			this.info = new AuthInfo(param.info!)
			} 
		} 
		@Field.d(1, AuthInfo, "optional")
		info:AuthInfo =  new AuthInfo();
} 
@Type.d("Type_bgo_account_token_proto_GetWeChatOpenIdReq") 
export class GetWeChatOpenIdReq extends Message<GetWeChatOpenIdReq> { 
	constructor(param?: Properties<GetWeChatOpenIdReq>) {  
		super(); 
		if (param) { 
			this.appType = param.appType!
			this.wxAppId = param.wxAppId!
			this.code = param.code!
			} 
		} 
		@Field.d(1, WxAppType, "optional")
		appType:WxAppType = 0;
		@Field.d(2, "string", "optional")
		wxAppId:string = "";
		@Field.d(3, "string", "optional")
		code:string = "";
} 
@Type.d("Type_bgo_account_token_proto_GetWeChatOpenIdResp") 
export class GetWeChatOpenIdResp extends Message<GetWeChatOpenIdResp> { 
	constructor(param?: Properties<GetWeChatOpenIdResp>) {  
		super(); 
		if (param) { 
			this.wxOpenId = param.wxOpenId!
			} 
		} 
		@Field.d(1, "string", "optional")
		wxOpenId:string = "";
} 
export const TokenServer = {
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
	async getAccessToken(param:GetAccessTokenReq):Promise<GetAccessTokenResp|null> {
		const buffer = GetAccessTokenReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.token", 1, "GetAccessToken", buffer, this.config);
		return rsp.code === 0 ? GetAccessTokenResp.decode(rsp.data) : null;
	},
	async authAccessToken(param:AuthAccessTokenReq):Promise<AuthAccessTokenResp|null> {
		const buffer = AuthAccessTokenReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.token", 10001, "AuthAccessToken", buffer, this.config);
		return rsp.code === 0 ? AuthAccessTokenResp.decode(rsp.data) : null;
	},
	async getUidByOpenId(param:GetUidByOpenIdReq):Promise<GetUidByOpenIdResp|null> {
		const buffer = GetUidByOpenIdReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.token", 10002, "GetUidByOpenId", buffer, this.config);
		return rsp.code === 0 ? GetUidByOpenIdResp.decode(rsp.data) : null;
	},
	async delAccessToken(param:DelAccessTokenReq):Promise<base.Void|null> {
		const buffer = DelAccessTokenReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.token", 10003, "DelAccessToken", buffer, this.config);
		return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
	},
	async getLastAuthInfoByUid(param:GetLastAuthInfoByUidReq):Promise<GetLastAuthInfoByUidResp|null> {
		const buffer = GetLastAuthInfoByUidReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.token", 10004, "GetLastAuthInfoByUid", buffer, this.config);
		return rsp.code === 0 ? GetLastAuthInfoByUidResp.decode(rsp.data) : null;
	},
	async getWeChatOpenId(param:GetWeChatOpenIdReq):Promise<GetWeChatOpenIdResp|null> {
		const buffer = GetWeChatOpenIdReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.token", 2, "GetWeChatOpenId", buffer, this.config);
		return rsp.code === 0 ? GetWeChatOpenIdResp.decode(rsp.data) : null;
	},
}
}
