/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
import { account as account_common_account} from '@/idl/bgo/account/common_account';
import { component as component_common_msg} from '@/idl/bgo/component/common_msg';
import { base as base} from '@/idl/base/base';
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace userinfo {
export enum VIPStatus {
	UnknownStatus = 0,
	NotVIP = 1,
	Opening = 2,
	Expired = 3,
}
@Type.d("Type_bgo_account_userinfo_v1_proto_DelGuidOnlineInfoByUidReq") 
export class DelGuidOnlineInfoByUidReq extends Message<DelGuidOnlineInfoByUidReq> { 
	constructor(param?: Properties<DelGuidOnlineInfoByUidReq>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			} 
		} 
		@Field.d(1, "int64", "optional")
		uid:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_NotifyGuestTrialEndResp") 
export class NotifyGuestTrialEndResp extends Message<NotifyGuestTrialEndResp> { 
	constructor(param?: Properties<NotifyGuestTrialEndResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetGuidTrialStatusReq") 
export class GetGuidTrialStatusReq extends Message<GetGuidTrialStatusReq> { 
	constructor(param?: Properties<GetGuidTrialStatusReq>) {  
		super(); 
		if (param) { 
			this.guid = param.guid!
			} 
		} 
		@Field.d(1, "string", "optional")
		guid:string = "";
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetGuidTrialStatusResp") 
export class GetGuidTrialStatusResp extends Message<GetGuidTrialStatusResp> { 
	constructor(param?: Properties<GetGuidTrialStatusResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.isEnd = param.isEnd!
			this.trialTimeLeft = param.trialTimeLeft!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "bool", "optional")
		isEnd:boolean = false;
		@Field.d(3, "int64", "optional")
		trialTimeLeft:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_RecordGuidOnlineReq") 
export class RecordGuidOnlineReq extends Message<RecordGuidOnlineReq> { 
	constructor(param?: Properties<RecordGuidOnlineReq>) {  
		super(); 
		if (param) { 
			this.guid = param.guid!
			this.uid = param.uid!
			this.accountLv = param.accountLv!
			} 
		} 
		@Field.d(1, "string", "optional")
		guid:string = "";
		@Field.d(2, "int64", "optional")
		uid:number = 0;
		@Field.d(3, account_common_account.AccountLvEm, "optional")
		accountLv:account_common_account.AccountLvEm = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_IncrGuidOnlineTimeReq") 
export class IncrGuidOnlineTimeReq extends Message<IncrGuidOnlineTimeReq> { 
	constructor(param?: Properties<IncrGuidOnlineTimeReq>) {  
		super(); 
		if (param) { 
			this.guid = param.guid!
			this.incrTimeDuration = param.incrTimeDuration!
			} 
		} 
		@Field.d(1, "string", "repeated")
		guid:string[] = [];
		@Field.d(2, "int64", "optional")
		incrTimeDuration:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GuidOnlineIdReq") 
export class GuidOnlineIdReq extends Message<GuidOnlineIdReq> { 
	constructor(param?: Properties<GuidOnlineIdReq>) {  
		super(); 
		if (param) { 
			this.guid = param.guid!
			} 
		} 
		@Field.d(1, "string", "optional")
		guid:string = "";
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetGuidOnlineInfoResp") 
export class GetGuidOnlineInfoResp extends Message<GetGuidOnlineInfoResp> { 
	constructor(param?: Properties<GetGuidOnlineInfoResp>) {  
		super(); 
		if (param) { 
			this.guid = param.guid!
			this.uid = param.uid!
			this.onlineTimeSec = param.onlineTimeSec!
			this.trialStartTimeUinx = param.trialStartTimeUinx!
			this.guestUid = param.guestUid!
			} 
		} 
		@Field.d(1, "string", "optional")
		guid:string = "";
		@Field.d(2, "int64", "optional")
		uid:number = 0;
		@Field.d(3, "int64", "optional")
		onlineTimeSec:number = 0;
		@Field.d(4, "int64", "optional")
		trialStartTimeUinx:number = 0;
		@Field.d(5, "int64", "optional")
		guestUid:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_UploadAvatarRequest") 
export class UploadAvatarRequest extends Message<UploadAvatarRequest> { 
	constructor(param?: Properties<UploadAvatarRequest>) {  
		super(); 
		if (param) { 
			this.Path = param.Path!
			this.Pic = param.Pic!
			this.Thumb = param.Thumb!
			} 
		} 
		@Field.d(1, "string", "optional")
		Path:string = "";
		@Field.d(2, "string", "optional")
		Pic:string = "";
		@Field.d(3, "string", "optional")
		Thumb:string = "";
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_UploadAvatarResponse") 
export class UploadAvatarResponse extends Message<UploadAvatarResponse> { 
	constructor(param?: Properties<UploadAvatarResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetCDNAddrRequest") 
export class GetCDNAddrRequest extends Message<GetCDNAddrRequest> { 
	constructor(param?: Properties<GetCDNAddrRequest>) {  
		super(); 
		if (param) { 
			} 
		} 
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetCDNAddrResponse") 
export class GetCDNAddrResponse extends Message<GetCDNAddrResponse> { 
	constructor(param?: Properties<GetCDNAddrResponse>) {  
		super(); 
		if (param) { 
			this.Addr = param.Addr!
			this.UpLoadAddr = param.UpLoadAddr!
			this.Pre = param.Pre!
			this.CmsPre = param.CmsPre!
			this.FileUpAddr = param.FileUpAddr!
			} 
		} 
		@Field.d(1, "string", "optional")
		Addr:string = "";
		@Field.d(2, "string", "optional")
		UpLoadAddr:string = "";
		@Field.d(3, "string", "optional")
		Pre:string = "";
		@Field.d(4, "string", "optional")
		CmsPre:string = "";
		@Field.d(5, "string", "optional")
		FileUpAddr:string = "";
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_CheckNameRequest") 
export class CheckNameRequest extends Message<CheckNameRequest> { 
	constructor(param?: Properties<CheckNameRequest>) {  
		super(); 
		if (param) { 
			this.Name = param.Name!
			} 
		} 
		@Field.d(1, "string", "optional")
		Name:string = "";
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_CheckNameResponse") 
export class CheckNameResponse extends Message<CheckNameResponse> { 
	constructor(param?: Properties<CheckNameResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_FurtherUserInfoRequest") 
export class FurtherUserInfoRequest extends Message<FurtherUserInfoRequest> { 
	constructor(param?: Properties<FurtherUserInfoRequest>) {  
		super(); 
		if (param) { 
			this.Name = param.Name!
			this.Sex = param.Sex!
			this.ZoneID = param.ZoneID!
			} 
		} 
		@Field.d(1, "string", "optional")
		Name:string = "";
		@Field.d(2, account_common_account.SexValue, "optional")
		Sex:account_common_account.SexValue = 0;
		@Field.d(3, "string", "optional")
		ZoneID:string = "";
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_FurtherUserInfoResponse") 
export class FurtherUserInfoResponse extends Message<FurtherUserInfoResponse> { 
	constructor(param?: Properties<FurtherUserInfoResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetUserInfoRequest") 
export class GetUserInfoRequest extends Message<GetUserInfoRequest> { 
	constructor(param?: Properties<GetUserInfoRequest>) {  
		super(); 
		if (param) { 
			this.Uid = param.Uid!
			} 
		} 
		@Field.d(1, "int64", "optional")
		Uid:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetUserInfoResponse") 
export class GetUserInfoResponse extends Message<GetUserInfoResponse> { 
	constructor(param?: Properties<GetUserInfoResponse>) {  
		super(); 
		if (param) { 
			this.Data = new account_common_account.UserInfo(param.Data!)
			} 
		} 
		@Field.d(1, account_common_account.UserInfo, "optional")
		Data:account_common_account.UserInfo =  new account_common_account.UserInfo();
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetMulitUserInfoRequest") 
export class GetMulitUserInfoRequest extends Message<GetMulitUserInfoRequest> { 
	constructor(param?: Properties<GetMulitUserInfoRequest>) {  
		super(); 
		if (param) { 
			this.Uids = param.Uids!
			} 
		} 
		@Field.d(1, "int64", "repeated")
		Uids:number[] = [];
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetMulitUserInfoResponse") 
export class GetMulitUserInfoResponse extends Message<GetMulitUserInfoResponse> { 
	constructor(param?: Properties<GetMulitUserInfoResponse>) {  
		super(); 
		if (param) { 
			this.data = param.data!
			} 
		} 
		@Field.d(1, account_common_account.UserInfo, "repeated")
		data:account_common_account.UserInfo[] = [];
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_SetOnceUserNameRequest") 
export class SetOnceUserNameRequest extends Message<SetOnceUserNameRequest> { 
	constructor(param?: Properties<SetOnceUserNameRequest>) {  
		super(); 
		if (param) { 
			this.Name = param.Name!
			} 
		} 
		@Field.d(1, "string", "optional")
		Name:string = "";
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_SetOnceUserNameResponse") 
export class SetOnceUserNameResponse extends Message<SetOnceUserNameResponse> { 
	constructor(param?: Properties<SetOnceUserNameResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_SetOnceUserSexRequest") 
export class SetOnceUserSexRequest extends Message<SetOnceUserSexRequest> { 
	constructor(param?: Properties<SetOnceUserSexRequest>) {  
		super(); 
		if (param) { 
			this.sex = param.sex!
			} 
		} 
		@Field.d(1, account_common_account.SexValue, "optional")
		sex:account_common_account.SexValue = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_SetOnceUserSexResponse") 
export class SetOnceUserSexResponse extends Message<SetOnceUserSexResponse> { 
	constructor(param?: Properties<SetOnceUserSexResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_OnceUserNamedRequest") 
export class OnceUserNamedRequest extends Message<OnceUserNamedRequest> { 
	constructor(param?: Properties<OnceUserNamedRequest>) {  
		super(); 
		if (param) { 
			} 
		} 
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_OnceUserNamedResponse") 
export class OnceUserNamedResponse extends Message<OnceUserNamedResponse> { 
	constructor(param?: Properties<OnceUserNamedResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetUserInfoDetailedRequest") 
export class GetUserInfoDetailedRequest extends Message<GetUserInfoDetailedRequest> { 
	constructor(param?: Properties<GetUserInfoDetailedRequest>) {  
		super(); 
		if (param) { 
			this.Uid = param.Uid!
			} 
		} 
		@Field.d(1, "int64", "optional")
		Uid:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_OnlineInfo") 
export class OnlineInfo extends Message<OnlineInfo> { 
	constructor(param?: Properties<OnlineInfo>) {  
		super(); 
		if (param) { 
			this.Appids = param.Appids!
			} 
		} 
		@Field.d(1, "uint32", "repeated")
		Appids:number[] = [];
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_LoginInfo") 
export class LoginInfo extends Message<LoginInfo> { 
	constructor(param?: Properties<LoginInfo>) {  
		super(); 
		if (param) { 
			this.OnlineInfo = new OnlineInfo(param.OnlineInfo!)
			this.DType = param.DType!
			this.LastLoginTime = param.LastLoginTime!
			this.RemoteIp = param.RemoteIp!
			this.PhoneModel = param.PhoneModel!
			this.Version = param.Version!
			this.IsOnLine = param.IsOnLine!
			this.Latitude = param.Latitude!
			this.Longitude = param.Longitude!
			this.Language = param.Language!
			this.DeviceGuid = param.DeviceGuid!
			} 
		} 
		@Field.d(1, OnlineInfo, "optional")
		OnlineInfo:OnlineInfo =  new OnlineInfo();
		@Field.d(2, account_common_account.DeviceType, "optional")
		DType:account_common_account.DeviceType = 0;
		@Field.d(3, "int64", "optional")
		LastLoginTime:number = 0;
		@Field.d(4, "string", "optional")
		RemoteIp:string = "";
		@Field.d(5, "string", "optional")
		PhoneModel:string = "";
		@Field.d(6, "string", "optional")
		Version:string = "";
		@Field.d(7, "bool", "optional")
		IsOnLine:boolean = false;
		@Field.d(8, "float", "optional")
		Latitude:number = 0;
		@Field.d(9, "float", "optional")
		Longitude:number = 0;
		@Field.d(10, "string", "optional")
		Language:string = "";
		@Field.d(11, "string", "optional")
		DeviceGuid:string = "";
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetUserInfoDetailedResponse") 
export class GetUserInfoDetailedResponse extends Message<GetUserInfoDetailedResponse> { 
	constructor(param?: Properties<GetUserInfoDetailedResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.UInfo = new account_common_account.UserInfo(param.UInfo!)
			this.RegTime = param.RegTime!
			this.ZoneID = param.ZoneID!
			this.LInfo = new LoginInfo(param.LInfo!)
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, account_common_account.UserInfo, "optional")
		UInfo:account_common_account.UserInfo =  new account_common_account.UserInfo();
		@Field.d(3, "int64", "optional")
		RegTime:number = 0;
		@Field.d(4, "int32", "optional")
		ZoneID:number = 0;
		@Field.d(5, LoginInfo, "optional")
		LInfo:LoginInfo =  new LoginInfo();
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_IsRobotReq") 
export class IsRobotReq extends Message<IsRobotReq> { 
	constructor(param?: Properties<IsRobotReq>) {  
		super(); 
		if (param) { 
			this.Uid = param.Uid!
			} 
		} 
		@Field.d(1, "int64", "optional")
		Uid:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_IsRobotResponse") 
export class IsRobotResponse extends Message<IsRobotResponse> { 
	constructor(param?: Properties<IsRobotResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.IsRobot = param.IsRobot!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "bool", "optional")
		IsRobot:boolean = false;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_IDCardReq") 
export class IDCardReq extends Message<IDCardReq> { 
	constructor(param?: Properties<IDCardReq>) {  
		super(); 
		if (param) { 
			this.Uid = param.Uid!
			this.Name = param.Name!
			this.IDCard = param.IDCard!
			} 
		} 
		@Field.d(1, "int64", "optional")
		Uid:number = 0;
		@Field.d(2, "string", "optional")
		Name:string = "";
		@Field.d(3, "string", "optional")
		IDCard:string = "";
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_IDCardResp") 
export class IDCardResp extends Message<IDCardResp> { 
	constructor(param?: Properties<IDCardResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.retryLeft = param.retryLeft!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int32", "optional")
		retryLeft:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_Void") 
export class Void extends Message<Void> { 
	constructor(param?: Properties<Void>) {  
		super(); 
		if (param) { 
			} 
		} 
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetAccountInfoRequest") 
export class GetAccountInfoRequest extends Message<GetAccountInfoRequest> { 
	constructor(param?: Properties<GetAccountInfoRequest>) {  
		super(); 
		if (param) { 
			this.Uid = param.Uid!
			} 
		} 
		@Field.d(1, "int64", "optional")
		Uid:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetAccountInfoResponse") 
export class GetAccountInfoResponse extends Message<GetAccountInfoResponse> { 
	constructor(param?: Properties<GetAccountInfoResponse>) {  
		super(); 
		if (param) { 
			this.Type = param.Type!
			this.UserName = param.UserName!
			this.code = param.code!
			this.CreatTime = param.CreatTime!
			this.PlatUid = param.PlatUid!
			this.ZoneID = param.ZoneID!
			this.Phone = param.Phone!
			this.Email = param.Email!
			this.AccountLv = param.AccountLv!
			this.Name = param.Name!
			this.IDCard = param.IDCard!
			this.UID = param.UID!
			} 
		} 
		@Field.d(1, "uint32", "optional")
		Type:number = 0;
		@Field.d(2, "string", "optional")
		UserName:string = "";
		@Field.d(4, "int32", "required")
		code:number = 0;
		@Field.d(5, "int64", "optional")
		CreatTime:number = 0;
		@Field.d(6, "string", "optional")
		PlatUid:string = "";
		@Field.d(8, "int32", "optional")
		ZoneID:number = 0;
		@Field.d(9, "string", "optional")
		Phone:string = "";
		@Field.d(10, "string", "optional")
		Email:string = "";
		@Field.d(11, account_common_account.AccountLvEm, "optional")
		AccountLv:account_common_account.AccountLvEm = 0;
		@Field.d(12, "string", "optional")
		Name:string = "";
		@Field.d(13, "string", "optional")
		IDCard:string = "";
		@Field.d(14, "int64", "optional")
		UID:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetLockoutInfoReq") 
export class GetLockoutInfoReq extends Message<GetLockoutInfoReq> { 
	constructor(param?: Properties<GetLockoutInfoReq>) {  
		super(); 
		if (param) { 
			this.Uid = param.Uid!
			} 
		} 
		@Field.d(1, "int64", "optional")
		Uid:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetLockoutInfoResp") 
export class GetLockoutInfoResp extends Message<GetLockoutInfoResp> { 
	constructor(param?: Properties<GetLockoutInfoResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.Uid = param.Uid!
			this.Reason = param.Reason!
			this.StartTime = param.StartTime!
			this.EndTime = param.EndTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int64", "optional")
		Uid:number = 0;
		@Field.d(3, "string", "optional")
		Reason:string = "";
		@Field.d(4, "int64", "optional")
		StartTime:number = 0;
		@Field.d(5, "int64", "optional")
		EndTime:number = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetGuestConfigReq") 
export class GetGuestConfigReq extends Message<GetGuestConfigReq> { 
	constructor(param?: Properties<GetGuestConfigReq>) {  
		super(); 
		if (param) { 
			this.guid = param.guid!
			this.deviceType = param.deviceType!
			} 
		} 
		@Field.d(1, "string", "optional")
		guid:string = "";
		@Field.d(2, account_common_account.DeviceType, "optional")
		deviceType:account_common_account.DeviceType = 0;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_GetGuestConfigResp") 
export class GetGuestConfigResp extends Message<GetGuestConfigResp> { 
	constructor(param?: Properties<GetGuestConfigResp>) {  
		super(); 
		if (param) { 
			this.enable = param.enable!
			this.trialEnd = param.trialEnd!
			} 
		} 
		@Field.d(1, "bool", "optional")
		enable:boolean = false;
		@Field.d(2, "bool", "optional")
		trialEnd:boolean = false;
} 
@Type.d("Type_bgo_account_userinfo_v1_proto_ResetVerifyIdcardRetryLimitReq") 
export class ResetVerifyIdcardRetryLimitReq extends Message<ResetVerifyIdcardRetryLimitReq> { 
	constructor(param?: Properties<ResetVerifyIdcardRetryLimitReq>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			} 
		} 
		@Field.d(1, "int64", "optional")
		uid:number = 0;
} 
export const UserinfoServer = {
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
	async getCDNAddr(param:GetCDNAddrRequest):Promise<GetCDNAddrResponse|null> {
		const buffer = GetCDNAddrRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 1, "GetCDNAddr", buffer, this.config);
		return rsp.code === 0 ? GetCDNAddrResponse.decode(rsp.data) : null;
	},
	async uploadAvatar(param:UploadAvatarRequest):Promise<UploadAvatarResponse|null> {
		const buffer = UploadAvatarRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 2, "UploadAvatar", buffer, this.config);
		return rsp.code === 0 ? UploadAvatarResponse.decode(rsp.data) : null;
	},
	async userNameCheck(param:CheckNameRequest):Promise<CheckNameResponse|null> {
		const buffer = CheckNameRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 3, "UserNameCheck", buffer, this.config);
		return rsp.code === 0 ? CheckNameResponse.decode(rsp.data) : null;
	},
	async furtherUserInfo(param:FurtherUserInfoRequest):Promise<FurtherUserInfoResponse|null> {
		const buffer = FurtherUserInfoRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 4, "FurtherUserInfo", buffer, this.config);
		return rsp.code === 0 ? FurtherUserInfoResponse.decode(rsp.data) : null;
	},
	async getUserInfo(param:GetUserInfoRequest):Promise<GetUserInfoResponse|null> {
		const buffer = GetUserInfoRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 5, "GetUserInfo", buffer, this.config);
		return rsp.code === 0 ? GetUserInfoResponse.decode(rsp.data) : null;
	},
	async getMulitUserInfo(param:GetMulitUserInfoRequest):Promise<GetMulitUserInfoResponse|null> {
		const buffer = GetMulitUserInfoRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 6, "GetMulitUserInfo", buffer, this.config);
		return rsp.code === 0 ? GetMulitUserInfoResponse.decode(rsp.data) : null;
	},
	async setOnceUserName(param:SetOnceUserNameRequest):Promise<SetOnceUserNameResponse|null> {
		const buffer = SetOnceUserNameRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 7, "SetOnceUserName", buffer, this.config);
		return rsp.code === 0 ? SetOnceUserNameResponse.decode(rsp.data) : null;
	},
	async setOnceUserSex(param:SetOnceUserSexRequest):Promise<SetOnceUserSexResponse|null> {
		const buffer = SetOnceUserSexRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 8, "SetOnceUserSex", buffer, this.config);
		return rsp.code === 0 ? SetOnceUserSexResponse.decode(rsp.data) : null;
	},
	async onceUserNamed(param:OnceUserNamedRequest):Promise<OnceUserNamedResponse|null> {
		const buffer = OnceUserNamedRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 9, "OnceUserNamed", buffer, this.config);
		return rsp.code === 0 ? OnceUserNamedResponse.decode(rsp.data) : null;
	},
	async getUserInfoDetailed(param:GetUserInfoDetailedRequest):Promise<GetUserInfoDetailedResponse|null> {
		const buffer = GetUserInfoDetailedRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 10, "GetUserInfoDetailed", buffer, this.config);
		return rsp.code === 0 ? GetUserInfoDetailedResponse.decode(rsp.data) : null;
	},
	async isRobot(param:IsRobotReq):Promise<IsRobotResponse|null> {
		const buffer = IsRobotReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 10001, "IsRobot", buffer, this.config);
		return rsp.code === 0 ? IsRobotResponse.decode(rsp.data) : null;
	},
	async verifyIDCard(param:IDCardReq):Promise<IDCardResp|null> {
		const buffer = IDCardReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 11, "VerifyIDCard", buffer, this.config);
		return rsp.code === 0 ? IDCardResp.decode(rsp.data) : null;
	},
	async getMyUserInfo(param:Void):Promise<account_common_account.UserInfo|null> {
		const buffer = Void.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 12, "GetMyUserInfo", buffer, this.config);
		return rsp.code === 0 ? account_common_account.UserInfo.decode(rsp.data) : null;
	},
	async getAccountInfo(param:GetAccountInfoRequest):Promise<GetAccountInfoResponse|null> {
		const buffer = GetAccountInfoRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 13, "GetAccountInfo", buffer, this.config);
		return rsp.code === 0 ? GetAccountInfoResponse.decode(rsp.data) : null;
	},
	async getLockoutInfo(param:GetLockoutInfoReq):Promise<GetLockoutInfoResp|null> {
		const buffer = GetLockoutInfoReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 14, "GetLockoutInfo", buffer, this.config);
		return rsp.code === 0 ? GetLockoutInfoResp.decode(rsp.data) : null;
	},
	async getGuestConfig(param:GetGuestConfigReq):Promise<GetGuestConfigResp|null> {
		const buffer = GetGuestConfigReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 15, "GetGuestConfig", buffer, this.config);
		return rsp.code === 0 ? GetGuestConfigResp.decode(rsp.data) : null;
	},
	async recordGuidOnline(param:RecordGuidOnlineReq):Promise<base.Void|null> {
		const buffer = RecordGuidOnlineReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 10022, "RecordGuidOnline", buffer, this.config);
		return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
	},
	async delGuidOnlineInfo(param:GuidOnlineIdReq):Promise<base.Void|null> {
		const buffer = GuidOnlineIdReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 10024, "DelGuidOnlineInfo", buffer, this.config);
		return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
	},
	async getGuidOnlineInfo(param:GuidOnlineIdReq):Promise<GetGuidOnlineInfoResp|null> {
		const buffer = GuidOnlineIdReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 10025, "GetGuidOnlineInfo", buffer, this.config);
		return rsp.code === 0 ? GetGuidOnlineInfoResp.decode(rsp.data) : null;
	},
	async getGuidTrialStatus(param:GetGuidTrialStatusReq):Promise<GetGuidTrialStatusResp|null> {
		const buffer = GetGuidTrialStatusReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 10026, "GetGuidTrialStatus", buffer, this.config);
		return rsp.code === 0 ? GetGuidTrialStatusResp.decode(rsp.data) : null;
	},
	async offlineCallback(param:component_common_msg.UesrOffLine):Promise<base.Void|null> {
		const buffer = component_common_msg.UesrOffLine.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 10027, "OfflineCallback", buffer, this.config);
		return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
	},
	async notifyGuestTrialEnd(param:base.Void):Promise<NotifyGuestTrialEndResp|null> {
		const buffer = base.Void.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 1001, "NotifyGuestTrialEnd", buffer, this.config);
		return rsp.code === 0 ? NotifyGuestTrialEndResp.decode(rsp.data) : null;
	},
	async delGuidOnlineInfoByUid(param:DelGuidOnlineInfoByUidReq):Promise<base.Void|null> {
		const buffer = DelGuidOnlineInfoByUidReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 10028, "DelGuidOnlineInfoByUid", buffer, this.config);
		return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
	},
	async resetVerifyIdcardRetryLimit(param:ResetVerifyIdcardRetryLimitReq):Promise<base.Void|null> {
		const buffer = ResetVerifyIdcardRetryLimitReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 10029, "ResetVerifyIdcardRetryLimit", buffer, this.config);
		return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
	},
	async delGuidOnlineGuestInfo(param:GuidOnlineIdReq):Promise<base.Void|null> {
		const buffer = GuidOnlineIdReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 10030, "DelGuidOnlineGuestInfo", buffer, this.config);
		return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
	},
	async delGuidOnlineGuestInfoByUid(param:DelGuidOnlineInfoByUidReq):Promise<base.Void|null> {
		const buffer = DelGuidOnlineInfoByUidReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.userinfo.v1", 10031, "DelGuidOnlineGuestInfoByUid", buffer, this.config);
		return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
	},
}
}
