/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace account {
export enum IntelligentPhoneCheckCode {
	NOTHIND = 0,
	NOPAWD = 1,
	UNREG = 2,
	INVALID = 3,
	PAWD = 4,
}
export enum DeviceType {
	WIN = 0,
	IOS = 1,
	ANDROID = 2,
	WEB = 3,
	MAC = 4,
	SIMULATOR = 5,
}
export enum SexValue {
	UNKNOWN = 0,
	BOY = 1,
	GIRL = 2,
}
export enum AccountType {
	UNKNOW = 0,
	PHONE = 1,
	EMAIL = 2,
	VISITOR = 3,
	USERCODE = 4,
	TAOBAO = 10,
	ZH360 = 11,
	YIDONG = 12,
	AIYOUXI = 13,
	HUAWEI = 14,
	OPPO = 15,
	FACEBOOK = 16,
	QEMAIL = 17,
	WEIXIN = 18,
	QQ = 19,
	WEIBO = 20,
	WXMP = 21,
}
export enum AccountLvEm {
	LV_VISITOR = 0,
	LV_USERCODE = 1,
	LV_RealVerify = 2,
	LV_Unknow = 4,
}
export enum SmsType {
	OTHER = 0,
	REGISTER = 1,
	PWDCHG = 2,
	LOGIN = 3,
	BIND = 4,
	UNBID = 5,
	CHANGEBING = 6,
}
export enum BindType {
	GETPHONE = 1,
	GETEMAIL = 2,
}
export enum ThirdBindType {
	FaceBook = 1,
	WeChat = 2,
}
@Type.d("Type_bgo_account_common_account_proto_LockInfo") 
export class LockInfo extends Message<LockInfo> { 
	constructor(param?: Properties<LockInfo>) {  
		super(); 
		if (param) { 
			this.Appid = param.Appid!
			this.End = param.End!
			} 
		} 
		@Field.d(1, "uint32", "optional")
		Appid:number = 0;
		@Field.d(2, "int64", "optional")
		End:number = 0;
} 
@Type.d("Type_bgo_account_common_account_proto_UserInfo") 
export class UserInfo extends Message<UserInfo> { 
	constructor(param?: Properties<UserInfo>) {  
		super(); 
		if (param) { 
			this.sex = param.sex!
			this.name = param.name!
			this.avatar = param.avatar!
			this.extend = param.extend!
			this.UID = param.UID!
			this.bigpic = param.bigpic!
			this.modTime = param.modTime!
			this.isRobot = param.isRobot!
			this.realName = param.realName!
			this.socialSex = param.socialSex!
			this.socialLocation = param.socialLocation!
			this.socialBirthday = param.socialBirthday!
			this.realBirthday = param.realBirthday!
			this.Ext = param.Ext!
			} 
		} 
		@Field.d(1, SexValue, "optional")
		sex:SexValue = 0;
		@Field.d(2, "string", "optional")
		name:string = "";
		@Field.d(3, "string", "optional")
		avatar:string = "";
		@Field.d(4, "string", "optional")
		extend:string = "";
		@Field.d(5, "int64", "optional")
		UID:number = 0;
		@Field.d(7, "string", "optional")
		bigpic:string = "";
		@Field.d(9, "int64", "optional")
		modTime:number = 0;
		@Field.d(11, "bool", "optional")
		isRobot:boolean = false;
		@Field.d(12, "string", "optional")
		realName:string = "";
		@Field.d(13, SexValue, "optional")
		socialSex:SexValue = 0;
		@Field.d(14, "int32", "optional")
		socialLocation:number = 0;
		@Field.d(15, "string", "optional")
		socialBirthday:string = "";
		@Field.d(16, "string", "optional")
		realBirthday:string = "";
		@Field.d(17, "string", "optional")
		Ext:string = "";
} 
@Type.d("Type_bgo_account_common_account_proto_RegExtInfo") 
export class RegExtInfo extends Message<RegExtInfo> { 
	constructor(param?: Properties<RegExtInfo>) {  
		super(); 
		if (param) { 
			this.os = param.os!
			this.channel = param.channel!
			} 
		} 
		@Field.d(1, "string", "optional")
		os:string = "";
		@Field.d(2, "string", "optional")
		channel:string = "";
} 
@Type.d("Type_bgo_account_common_account_proto_BindRecommendRegRequest") 
export class BindRecommendRegRequest extends Message<BindRecommendRegRequest> { 
	constructor(param?: Properties<BindRecommendRegRequest>) {  
		super(); 
		if (param) { 
			this.uidRec = param.uidRec!
			this.uidBeRec = param.uidBeRec!
			} 
		} 
		@Field.d(1, "int64", "required")
		uidRec:number = 0;
		@Field.d(2, "int64", "required")
		uidBeRec:number = 0;
} 
@Type.d("Type_bgo_account_common_account_proto_BindRecommendRegResponse") 
export class BindRecommendRegResponse extends Message<BindRecommendRegResponse> { 
	constructor(param?: Properties<BindRecommendRegResponse>) {  
		super(); 
		if (param) { 
			this.result = param.result!
			} 
		} 
		@Field.d(1, "int32", "required")
		result:number = 0;
} 
@Type.d("Type_bgo_account_common_account_proto_RecommendRegItem") 
export class RecommendRegItem extends Message<RecommendRegItem> { 
	constructor(param?: Properties<RecommendRegItem>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.time = param.time!
			} 
		} 
		@Field.d(1, "int64", "required")
		uid:number = 0;
		@Field.d(2, "int64", "required")
		time:number = 0;
} 
@Type.d("Type_bgo_account_common_account_proto_GetRecommendRegListRequest") 
export class GetRecommendRegListRequest extends Message<GetRecommendRegListRequest> { 
	constructor(param?: Properties<GetRecommendRegListRequest>) {  
		super(); 
		if (param) { 
			this.uidRec = param.uidRec!
			} 
		} 
		@Field.d(1, "int64", "required")
		uidRec:number = 0;
} 
@Type.d("Type_bgo_account_common_account_proto_GetRecommendRegListResponse") 
export class GetRecommendRegListResponse extends Message<GetRecommendRegListResponse> { 
	constructor(param?: Properties<GetRecommendRegListResponse>) {  
		super(); 
		if (param) { 
			this.result = param.result!
			this.list = param.list!
			} 
		} 
		@Field.d(1, "int32", "required")
		result:number = 0;
		@Field.d(2, RecommendRegItem, "repeated")
		list:RecommendRegItem[] = [];
} 
}
