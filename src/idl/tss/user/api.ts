/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
import { account as account_common_account} from '@/idl/bgo/account/common_account';
import { user as user_common_user} from '@/idl/tss/user/common_user';
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace api {
export enum LineState {
	None = 0,
	Online = 1,
	Offline = 2,
	Matching = 3,
	Prematch = 4,
	Playing = 5,
	Observer = 6,
}
export enum UserAttrType {
	UserAttrType_Int64 = 1,
	UserAttrType_String = 2,
	UserAttrType_Int32 = 3,
	UserAttrType_Float64 = 4,
	UserAttrType_Json = 5,
	UserAttrType_Bool = 6,
	UserAttrType_None = 7,
}
export enum EnumSetFlag {
	Flag_Set_User_Name = 1,
	Flag_Set_User_Sex = 2,
	Flag_Set_User_Avatar = 4,
	Flag_Set_User_BigPic = 8,
	Flag_Set_User_Birthday = 16,
	Flag_Set_User_Zone = 32,
}
@Type.d("Type_tss_user_api_proto_ListPhotoFrameReq") 
export class ListPhotoFrameReq extends Message<ListPhotoFrameReq> { 
	constructor(param?: Properties<ListPhotoFrameReq>) {  
		super(); 
		if (param) { 
			this.page = param.page!
			this.pageSize = param.pageSize!
			} 
		} 
		@Field.d(1, "int32", "optional")
		page:number = 0;
		@Field.d(2, "int32", "optional")
		pageSize:number = 0;
} 
@Type.d("Type_tss_user_api_proto_ListPhotoFrameResp") 
export class ListPhotoFrameResp extends Message<ListPhotoFrameResp> { 
	constructor(param?: Properties<ListPhotoFrameResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.photos = param.photos!
			this.totalSize = param.totalSize!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, user_common_user.PhotoFrame, "repeated")
		photos:user_common_user.PhotoFrame[] = [];
		@Field.d(3, "int32", "optional")
		totalSize:number = 0;
} 
@Type.d("Type_tss_user_api_proto_ListNicknameColorReq") 
export class ListNicknameColorReq extends Message<ListNicknameColorReq> { 
	constructor(param?: Properties<ListNicknameColorReq>) {  
		super(); 
		if (param) { 
			this.page = param.page!
			this.pageSize = param.pageSize!
			} 
		} 
		@Field.d(1, "int32", "optional")
		page:number = 0;
		@Field.d(2, "int32", "optional")
		pageSize:number = 0;
} 
@Type.d("Type_tss_user_api_proto_ListNicknameColorResp") 
export class ListNicknameColorResp extends Message<ListNicknameColorResp> { 
	constructor(param?: Properties<ListNicknameColorResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.colors = param.colors!
			this.totalSize = param.totalSize!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, user_common_user.NicknameColor, "repeated")
		colors:user_common_user.NicknameColor[] = [];
		@Field.d(3, "int32", "optional")
		totalSize:number = 0;
} 
@Type.d("Type_tss_user_api_proto_CompleteTaskAwardReq") 
export class CompleteTaskAwardReq extends Message<CompleteTaskAwardReq> { 
	constructor(param?: Properties<CompleteTaskAwardReq>) {  
		super(); 
		if (param) { 
			} 
		} 
} 
@Type.d("Type_tss_user_api_proto_CompleteTaskAwardResp") 
export class CompleteTaskAwardResp extends Message<CompleteTaskAwardResp> { 
	constructor(param?: Properties<CompleteTaskAwardResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.awardName = param.awardName!
			this.awardNum = param.awardNum!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "string", "optional")
		awardName:string = "";
		@Field.d(3, "int32", "optional")
		awardNum:number = 0;
} 
@Type.d("Type_tss_user_api_proto_UploadAvatar") 
export class UploadAvatar extends Message<UploadAvatar> { 
	constructor(param?: Properties<UploadAvatar>) {  
		super(); 
		if (param) { 
			this.path = param.path!
			this.pic = param.pic!
			this.thumb = param.thumb!
			} 
		} 
		@Field.d(1, "string", "optional")
		path:string = "";
		@Field.d(2, "string", "optional")
		pic:string = "";
		@Field.d(3, "string", "optional")
		thumb:string = "";
} 
@Type.d("Type_tss_user_api_proto_PicInfo") 
export class PicInfo extends Message<PicInfo> { 
	constructor(param?: Properties<PicInfo>) {  
		super(); 
		if (param) { 
			this.path = param.path!
			this.pic = param.pic!
			this.thumbNail = param.thumbNail!
			} 
		} 
		@Field.d(1, "string", "optional")
		path:string = "";
		@Field.d(2, "string", "optional")
		pic:string = "";
		@Field.d(3, "string", "optional")
		thumbNail:string = "";
} 
@Type.d("Type_tss_user_api_proto_SetUserAccountReq") 
export class SetUserAccountReq extends Message<SetUserAccountReq> { 
	constructor(param?: Properties<SetUserAccountReq>) {  
		super(); 
		if (param) { 
			this.setFlag = param.setFlag!
			this.name = param.name!
			this.socialSex = param.socialSex!
			this.avatar = new UploadAvatar(param.avatar!)
			this.bigPic = new PicInfo(param.bigPic!)
			this.socialAddr = param.socialAddr!
			this.socialBirthday = param.socialBirthday!
			} 
		} 
		@Field.d(1, EnumSetFlag, "required")
		setFlag:EnumSetFlag = 0;
		@Field.d(2, "string", "optional")
		name:string = "";
		@Field.d(3, account_common_account.SexValue, "optional")
		socialSex:account_common_account.SexValue = 0;
		@Field.d(4, UploadAvatar, "optional")
		avatar:UploadAvatar =  new UploadAvatar();
		@Field.d(5, PicInfo, "optional")
		bigPic:PicInfo =  new PicInfo();
		@Field.d(6, "int32", "optional")
		socialAddr:number = 0;
		@Field.d(7, "string", "optional")
		socialBirthday:string = "";
} 
@Type.d("Type_tss_user_api_proto_SetUserAccountResp") 
export class SetUserAccountResp extends Message<SetUserAccountResp> { 
	constructor(param?: Properties<SetUserAccountResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.task = new user_common_user.UserInfoCompleteTask(param.task!)
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, user_common_user.UserInfoCompleteTask, "optional")
		task:user_common_user.UserInfoCompleteTask =  new user_common_user.UserInfoCompleteTask();
} 
@Type.d("Type_tss_user_api_proto_GetUserInfoReq") 
export class GetUserInfoReq extends Message<GetUserInfoReq> { 
	constructor(param?: Properties<GetUserInfoReq>) {  
		super(); 
		if (param) { 
			this.uids = param.uids!
			} 
		} 
		@Field.d(1, "int64", "repeated")
		uids:number[] = [];
} 
@Type.d("Type_tss_user_api_proto_BaseInfo") 
export class BaseInfo extends Message<BaseInfo> { 
	constructor(param?: Properties<BaseInfo>) {  
		super(); 
		if (param) { 
			this.sex = param.sex!
			this.name = param.name!
			this.avatar = param.avatar!
			this.bigpic = param.bigpic!
			this.modTime = param.modTime!
			this.socialAddr = param.socialAddr!
			this.birthday = param.birthday!
			} 
		} 
		@Field.d(1, "int64", "required")
		sex:number = 0;
		@Field.d(2, "string", "required")
		name:string = "";
		@Field.d(3, "string", "required")
		avatar:string = "";
		@Field.d(4, "string", "optional")
		bigpic:string = "";
		@Field.d(8, "int64", "optional")
		modTime:number = 0;
		@Field.d(9, "int32", "optional")
		socialAddr:number = 0;
		@Field.d(10, "string", "optional")
		birthday:string = "";
} 
@Type.d("Type_tss_user_api_proto_VipInfo") 
export class VipInfo extends Message<VipInfo> { 
	constructor(param?: Properties<VipInfo>) {  
		super(); 
		if (param) { 
			this.status = param.status!
			this.expirationAt = param.expirationAt!
			this.level = param.level!
			} 
		} 
		@Field.d(1, "int64", "optional")
		status:number = 0;
		@Field.d(2, "int64", "optional")
		expirationAt:number = 0;
		@Field.d(3, "int32", "optional")
		level:number = 0;
} 
@Type.d("Type_tss_user_api_proto_TagInfo") 
export class TagInfo extends Message<TagInfo> { 
	constructor(param?: Properties<TagInfo>) {  
		super(); 
		if (param) { 
			this.tagName = param.tagName!
			this.tagTitle = param.tagTitle!
			} 
		} 
		@Field.d(1, "string", "required")
		tagName:string = "";
		@Field.d(2, "string", "required")
		tagTitle:string = "";
} 
@Type.d("Type_tss_user_api_proto_UserInfo") 
export class UserInfo extends Message<UserInfo> { 
	constructor(param?: Properties<UserInfo>) {  
		super(); 
		if (param) { 
			this.uID = param.uID!
			this.base = new BaseInfo(param.base!)
			this.vip = new VipInfo(param.vip!)
			this.fansNum = param.fansNum!
			this.followNum = param.followNum!
			this.friendNum = param.friendNum!
			this.tag = new TagInfo(param.tag!)
			this.commonFriendNum = param.commonFriendNum!
			this.photoFrameImage = param.photoFrameImage!
			this.nicknameColorValue = param.nicknameColorValue!
			this.task = new user_common_user.UserInfoCompleteTask(param.task!)
			} 
		} 
		@Field.d(1, "int64", "required")
		uID:number = 0;
		@Field.d(2, BaseInfo, "required")
		base:BaseInfo =  new BaseInfo();
		@Field.d(3, VipInfo, "optional")
		vip:VipInfo =  new VipInfo();
		@Field.d(4, "int32", "optional")
		fansNum:number = 0;
		@Field.d(5, "int32", "optional")
		followNum:number = 0;
		@Field.d(6, "int32", "optional")
		friendNum:number = 0;
		@Field.d(8, TagInfo, "optional")
		tag:TagInfo =  new TagInfo();
		@Field.d(9, "int32", "optional")
		commonFriendNum:number = 0;
		@Field.d(10, "string", "optional")
		photoFrameImage:string = "";
		@Field.d(11, "string", "optional")
		nicknameColorValue:string = "";
		@Field.d(12, user_common_user.UserInfoCompleteTask, "optional")
		task:user_common_user.UserInfoCompleteTask =  new user_common_user.UserInfoCompleteTask();
} 
@Type.d("Type_tss_user_api_proto_GetUserInfoResp") 
export class GetUserInfoResp extends Message<GetUserInfoResp> { 
	constructor(param?: Properties<GetUserInfoResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.infos = param.infos!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, UserInfo, "repeated")
		infos:UserInfo[] = [];
} 
@Type.d("Type_tss_user_api_proto_UsertagInfo") 
export class UsertagInfo extends Message<UsertagInfo> { 
	constructor(param?: Properties<UsertagInfo>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.tags = param.tags!
			} 
		} 
		@Field.d(1, "int64", "required")
		uid:number = 0;
		@Field.d(2, TagInfo, "repeated")
		tags:TagInfo[] = [];
} 
@Type.d("Type_tss_user_api_proto_GetUserLineStateReq") 
export class GetUserLineStateReq extends Message<GetUserLineStateReq> { 
	constructor(param?: Properties<GetUserLineStateReq>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			} 
		} 
		@Field.d(1, "int64", "required")
		uid:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetUserLineStateResp") 
export class GetUserLineStateResp extends Message<GetUserLineStateResp> { 
	constructor(param?: Properties<GetUserLineStateResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.state = param.state!
			this.gameID = param.gameID!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, "int32", "required")
		state:number = 0;
		@Field.d(3, "string", "optional")
		gameID:string = "";
} 
@Type.d("Type_tss_user_api_proto_FollowUserReq") 
export class FollowUserReq extends Message<FollowUserReq> { 
	constructor(param?: Properties<FollowUserReq>) {  
		super(); 
		if (param) { 
			this.fuid = param.fuid!
			this.tuid = param.tuid!
			} 
		} 
		@Field.d(1, "int64", "required")
		fuid:number = 0;
		@Field.d(2, "int64", "required")
		tuid:number = 0;
} 
@Type.d("Type_tss_user_api_proto_FollowUserResp") 
export class FollowUserResp extends Message<FollowUserResp> { 
	constructor(param?: Properties<FollowUserResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
} 
@Type.d("Type_tss_user_api_proto_CancelFollowUserReq") 
export class CancelFollowUserReq extends Message<CancelFollowUserReq> { 
	constructor(param?: Properties<CancelFollowUserReq>) {  
		super(); 
		if (param) { 
			this.fuid = param.fuid!
			this.tuid = param.tuid!
			} 
		} 
		@Field.d(1, "int64", "required")
		fuid:number = 0;
		@Field.d(2, "int64", "required")
		tuid:number = 0;
} 
@Type.d("Type_tss_user_api_proto_CancelFollowUserResp") 
export class CancelFollowUserResp extends Message<CancelFollowUserResp> { 
	constructor(param?: Properties<CancelFollowUserResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetAllRelationDetailReq") 
export class GetAllRelationDetailReq extends Message<GetAllRelationDetailReq> { 
	constructor(param?: Properties<GetAllRelationDetailReq>) {  
		super(); 
		if (param) { 
			this.fuid = param.fuid!
			this.tuid = param.tuid!
			} 
		} 
		@Field.d(1, "int64", "required")
		fuid:number = 0;
		@Field.d(2, "int64", "required")
		tuid:number = 0;
} 
@Type.d("Type_tss_user_api_proto_RelationDetailInfo") 
export class RelationDetailInfo extends Message<RelationDetailInfo> { 
	constructor(param?: Properties<RelationDetailInfo>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.isFriend = param.isFriend!
			this.isBlack = param.isBlack!
			this.isFollow = param.isFollow!
			this.isFans = param.isFans!
			this.isBlock = param.isBlock!
			this.isFeedBlock = param.isFeedBlock!
			this.followNum = param.followNum!
			this.fansNum = param.fansNum!
			} 
		} 
		@Field.d(1, "int64", "optional")
		uid:number = 0;
		@Field.d(2, "bool", "optional")
		isFriend:boolean = false;
		@Field.d(3, "bool", "optional")
		isBlack:boolean = false;
		@Field.d(4, "bool", "optional")
		isFollow:boolean = false;
		@Field.d(5, "bool", "optional")
		isFans:boolean = false;
		@Field.d(6, "bool", "optional")
		isBlock:boolean = false;
		@Field.d(7, "bool", "optional")
		isFeedBlock:boolean = false;
		@Field.d(8, "int32", "optional")
		followNum:number = 0;
		@Field.d(9, "int32", "optional")
		fansNum:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetAllRelationDetailResp") 
export class GetAllRelationDetailResp extends Message<GetAllRelationDetailResp> { 
	constructor(param?: Properties<GetAllRelationDetailResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.ret = new RelationDetailInfo(param.ret!)
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, RelationDetailInfo, "required")
		ret:RelationDetailInfo =  new RelationDetailInfo();
} 
@Type.d("Type_tss_user_api_proto_GetFansListReq") 
export class GetFansListReq extends Message<GetFansListReq> { 
	constructor(param?: Properties<GetFansListReq>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.pg = param.pg!
			this.pgSize = param.pgSize!
			this.fuid = param.fuid!
			} 
		} 
		@Field.d(1, "int64", "required")
		uid:number = 0;
		@Field.d(2, "int32", "required")
		pg:number = 0;
		@Field.d(3, "int32", "required")
		pgSize:number = 0;
		@Field.d(4, "int64", "required")
		fuid:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetFansListResp") 
export class GetFansListResp extends Message<GetFansListResp> { 
	constructor(param?: Properties<GetFansListResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.userInfos = param.userInfos!
			this.cnt = param.cnt!
			this.relationInfos = param.relationInfos!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, UserInfo, "repeated")
		userInfos:UserInfo[] = [];
		@Field.d(3, "int32", "required")
		cnt:number = 0;
		@Field.d(4, RelationDetailInfo, "repeated")
		relationInfos:RelationDetailInfo[] = [];
} 
@Type.d("Type_tss_user_api_proto_GetFollowListReq") 
export class GetFollowListReq extends Message<GetFollowListReq> { 
	constructor(param?: Properties<GetFollowListReq>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.pg = param.pg!
			this.pgSize = param.pgSize!
			this.fuid = param.fuid!
			} 
		} 
		@Field.d(1, "int64", "required")
		uid:number = 0;
		@Field.d(2, "int32", "required")
		pg:number = 0;
		@Field.d(3, "int32", "required")
		pgSize:number = 0;
		@Field.d(4, "int64", "required")
		fuid:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetFollowListResp") 
export class GetFollowListResp extends Message<GetFollowListResp> { 
	constructor(param?: Properties<GetFollowListResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.userInfos = param.userInfos!
			this.cnt = param.cnt!
			this.relationInfos = param.relationInfos!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, UserInfo, "repeated")
		userInfos:UserInfo[] = [];
		@Field.d(3, "int32", "required")
		cnt:number = 0;
		@Field.d(4, RelationDetailInfo, "repeated")
		relationInfos:RelationDetailInfo[] = [];
} 
@Type.d("Type_tss_user_api_proto_GetCommonFriendReq") 
export class GetCommonFriendReq extends Message<GetCommonFriendReq> { 
	constructor(param?: Properties<GetCommonFriendReq>) {  
		super(); 
		if (param) { 
			this.fuid = param.fuid!
			this.tuid = param.tuid!
			this.offset = param.offset!
			this.limit = param.limit!
			} 
		} 
		@Field.d(1, "int64", "required")
		fuid:number = 0;
		@Field.d(2, "int64", "required")
		tuid:number = 0;
		@Field.d(3, "int32", "required")
		offset:number = 0;
		@Field.d(4, "int32", "required")
		limit:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetCommonFriendResp") 
export class GetCommonFriendResp extends Message<GetCommonFriendResp> { 
	constructor(param?: Properties<GetCommonFriendResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.userInfos = param.userInfos!
			this.cnt = param.cnt!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, UserInfo, "repeated")
		userInfos:UserInfo[] = [];
		@Field.d(3, "int32", "required")
		cnt:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetUidsAllRelationDetailReq") 
export class GetUidsAllRelationDetailReq extends Message<GetUidsAllRelationDetailReq> { 
	constructor(param?: Properties<GetUidsAllRelationDetailReq>) {  
		super(); 
		if (param) { 
			this.fuid = param.fuid!
			this.tuids = param.tuids!
			} 
		} 
		@Field.d(1, "int64", "required")
		fuid:number = 0;
		@Field.d(2, "int64", "repeated")
		tuids:number[] = [];
} 
@Type.d("Type_tss_user_api_proto_GetUidsAllRelationDetailResp") 
export class GetUidsAllRelationDetailResp extends Message<GetUidsAllRelationDetailResp> { 
	constructor(param?: Properties<GetUidsAllRelationDetailResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.infos = param.infos!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, RelationDetailInfo, "repeated")
		infos:RelationDetailInfo[] = [];
} 
@Type.d("Type_tss_user_api_proto_GetCommonFollowReq") 
export class GetCommonFollowReq extends Message<GetCommonFollowReq> { 
	constructor(param?: Properties<GetCommonFollowReq>) {  
		super(); 
		if (param) { 
			this.fuid = param.fuid!
			this.tuid = param.tuid!
			this.offset = param.offset!
			this.limit = param.limit!
			} 
		} 
		@Field.d(1, "int64", "required")
		fuid:number = 0;
		@Field.d(2, "int64", "required")
		tuid:number = 0;
		@Field.d(3, "int32", "required")
		offset:number = 0;
		@Field.d(4, "int32", "required")
		limit:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetCommonFollowResp") 
export class GetCommonFollowResp extends Message<GetCommonFollowResp> { 
	constructor(param?: Properties<GetCommonFollowResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.userInfos = param.userInfos!
			this.cnt = param.cnt!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, UserInfo, "repeated")
		userInfos:UserInfo[] = [];
		@Field.d(3, "int32", "required")
		cnt:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetFriendListReq") 
export class GetFriendListReq extends Message<GetFriendListReq> { 
	constructor(param?: Properties<GetFriendListReq>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.pg = param.pg!
			this.pgSize = param.pgSize!
			} 
		} 
		@Field.d(1, "int64", "required")
		uid:number = 0;
		@Field.d(2, "int32", "required")
		pg:number = 0;
		@Field.d(3, "int32", "required")
		pgSize:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetFriendListResp") 
export class GetFriendListResp extends Message<GetFriendListResp> { 
	constructor(param?: Properties<GetFriendListResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.userInfos = param.userInfos!
			this.cnt = param.cnt!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, UserInfo, "repeated")
		userInfos:UserInfo[] = [];
		@Field.d(3, "int32", "required")
		cnt:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetMutualFollowListReq") 
export class GetMutualFollowListReq extends Message<GetMutualFollowListReq> { 
	constructor(param?: Properties<GetMutualFollowListReq>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.offset = param.offset!
			this.limit = param.limit!
			} 
		} 
		@Field.d(1, "int64", "required")
		uid:number = 0;
		@Field.d(2, "int32", "required")
		offset:number = 0;
		@Field.d(3, "int32", "required")
		limit:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetMutualFollowListResp") 
export class GetMutualFollowListResp extends Message<GetMutualFollowListResp> { 
	constructor(param?: Properties<GetMutualFollowListResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.userInfos = param.userInfos!
			this.cnt = param.cnt!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, UserInfo, "repeated")
		userInfos:UserInfo[] = [];
		@Field.d(3, "int32", "required")
		cnt:number = 0;
} 
@Type.d("Type_tss_user_api_proto_SearchUserReq") 
export class SearchUserReq extends Message<SearchUserReq> { 
	constructor(param?: Properties<SearchUserReq>) {  
		super(); 
		if (param) { 
			this.keyword = param.keyword!
			} 
		} 
		@Field.d(1, "string", "required")
		keyword:string = "";
} 
@Type.d("Type_tss_user_api_proto_SearchUserResp") 
export class SearchUserResp extends Message<SearchUserResp> { 
	constructor(param?: Properties<SearchUserResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.uid = param.uid!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, "int64", "optional")
		uid:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetRecommendedUserReq") 
export class GetRecommendedUserReq extends Message<GetRecommendedUserReq> { 
	constructor(param?: Properties<GetRecommendedUserReq>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.page = param.page!
			this.pageSize = param.pageSize!
			} 
		} 
		@Field.d(1, "int64", "required")
		uid:number = 0;
		@Field.d(2, "int32", "required")
		page:number = 0;
		@Field.d(3, "int32", "required")
		pageSize:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetRecommendedUserResp") 
export class GetRecommendedUserResp extends Message<GetRecommendedUserResp> { 
	constructor(param?: Properties<GetRecommendedUserResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.infos = param.infos!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, UserInfo, "repeated")
		infos:UserInfo[] = [];
} 
@Type.d("Type_tss_user_api_proto_UserLineInfo") 
export class UserLineInfo extends Message<UserLineInfo> { 
	constructor(param?: Properties<UserLineInfo>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.state = param.state!
			this.gameID = param.gameID!
			} 
		} 
		@Field.d(1, "int64", "required")
		uid:number = 0;
		@Field.d(2, "int32", "required")
		state:number = 0;
		@Field.d(3, "string", "required")
		gameID:string = "";
} 
@Type.d("Type_tss_user_api_proto_GetBatchUserLineStateReq") 
export class GetBatchUserLineStateReq extends Message<GetBatchUserLineStateReq> { 
	constructor(param?: Properties<GetBatchUserLineStateReq>) {  
		super(); 
		if (param) { 
			this.uids = param.uids!
			} 
		} 
		@Field.d(1, "int64", "repeated")
		uids:number[] = [];
} 
@Type.d("Type_tss_user_api_proto_GetBatchUserLineStateResp") 
export class GetBatchUserLineStateResp extends Message<GetBatchUserLineStateResp> { 
	constructor(param?: Properties<GetBatchUserLineStateResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.infos = param.infos!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, UserLineInfo, "repeated")
		infos:UserLineInfo[] = [];
} 
@Type.d("Type_tss_user_api_proto_ShippingAddr") 
export class ShippingAddr extends Message<ShippingAddr> { 
	constructor(param?: Properties<ShippingAddr>) {  
		super(); 
		if (param) { 
			this.ID = param.ID!
			this.UID = param.UID!
			this.receiver = param.receiver!
			this.contactNumber = param.contactNumber!
			this.province = param.province!
			this.city = param.city!
			this.region = param.region!
			this.addr = param.addr!
			this.default = param.default!
			} 
		} 
		@Field.d(1, "string", "required")
		ID:string = "";
		@Field.d(2, "int64", "required")
		UID:number = 0;
		@Field.d(3, "string", "required")
		receiver:string = "";
		@Field.d(4, "string", "required")
		contactNumber:string = "";
		@Field.d(5, "string", "required")
		province:string = "";
		@Field.d(6, "string", "required")
		city:string = "";
		@Field.d(7, "string", "required")
		region:string = "";
		@Field.d(8, "string", "required")
		addr:string = "";
		@Field.d(9, "int32", "required")
		default:number = 0;
} 
@Type.d("Type_tss_user_api_proto_FieldMask") 
export class FieldMask extends Message<FieldMask> { 
	constructor(param?: Properties<FieldMask>) {  
		super(); 
		if (param) { 
			this.paths = param.paths!
			} 
		} 
		@Field.d(1, "string", "repeated")
		paths:string[] = [];
} 
@Type.d("Type_tss_user_api_proto_GetShippingAddrReq") 
export class GetShippingAddrReq extends Message<GetShippingAddrReq> { 
	constructor(param?: Properties<GetShippingAddrReq>) {  
		super(); 
		if (param) { 
			this.ID = param.ID!
			} 
		} 
		@Field.d(1, "string", "required")
		ID:string = "";
} 
@Type.d("Type_tss_user_api_proto_GetShippingAddrResp") 
export class GetShippingAddrResp extends Message<GetShippingAddrResp> { 
	constructor(param?: Properties<GetShippingAddrResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.info = new ShippingAddr(param.info!)
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, ShippingAddr, "required")
		info:ShippingAddr =  new ShippingAddr();
} 
@Type.d("Type_tss_user_api_proto_ListShippingAddrReq") 
export class ListShippingAddrReq extends Message<ListShippingAddrReq> { 
	constructor(param?: Properties<ListShippingAddrReq>) {  
		super(); 
		if (param) { 
			this.page = param.page!
			this.pageSize = param.pageSize!
			} 
		} 
		@Field.d(2, "int32", "required")
		page:number = 0;
		@Field.d(3, "int32", "required")
		pageSize:number = 0;
} 
@Type.d("Type_tss_user_api_proto_ListShippingAddrResp") 
export class ListShippingAddrResp extends Message<ListShippingAddrResp> { 
	constructor(param?: Properties<ListShippingAddrResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.infos = param.infos!
			this.total = param.total!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, ShippingAddr, "repeated")
		infos:ShippingAddr[] = [];
		@Field.d(3, "int32", "required")
		total:number = 0;
} 
@Type.d("Type_tss_user_api_proto_CreateShippingAddrReq") 
export class CreateShippingAddrReq extends Message<CreateShippingAddrReq> { 
	constructor(param?: Properties<CreateShippingAddrReq>) {  
		super(); 
		if (param) { 
			this.info = new ShippingAddr(param.info!)
			} 
		} 
		@Field.d(1, ShippingAddr, "required")
		info:ShippingAddr =  new ShippingAddr();
} 
@Type.d("Type_tss_user_api_proto_CreateShippingAddrResp") 
export class CreateShippingAddrResp extends Message<CreateShippingAddrResp> { 
	constructor(param?: Properties<CreateShippingAddrResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.info = new ShippingAddr(param.info!)
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, ShippingAddr, "required")
		info:ShippingAddr =  new ShippingAddr();
} 
@Type.d("Type_tss_user_api_proto_UpdateShippingAddrReq") 
export class UpdateShippingAddrReq extends Message<UpdateShippingAddrReq> { 
	constructor(param?: Properties<UpdateShippingAddrReq>) {  
		super(); 
		if (param) { 
			this.info = new ShippingAddr(param.info!)
			this.updateMask = new FieldMask(param.updateMask!)
			} 
		} 
		@Field.d(1, ShippingAddr, "required")
		info:ShippingAddr =  new ShippingAddr();
		@Field.d(2, FieldMask, "required")
		updateMask:FieldMask =  new FieldMask();
} 
@Type.d("Type_tss_user_api_proto_UpdateShippingAddrResp") 
export class UpdateShippingAddrResp extends Message<UpdateShippingAddrResp> { 
	constructor(param?: Properties<UpdateShippingAddrResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.info = new ShippingAddr(param.info!)
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, ShippingAddr, "required")
		info:ShippingAddr =  new ShippingAddr();
} 
@Type.d("Type_tss_user_api_proto_DeleteShippingAddrReq") 
export class DeleteShippingAddrReq extends Message<DeleteShippingAddrReq> { 
	constructor(param?: Properties<DeleteShippingAddrReq>) {  
		super(); 
		if (param) { 
			this.ID = param.ID!
			} 
		} 
		@Field.d(1, "string", "required")
		ID:string = "";
} 
@Type.d("Type_tss_user_api_proto_DeleteShippingAddrResp") 
export class DeleteShippingAddrResp extends Message<DeleteShippingAddrResp> { 
	constructor(param?: Properties<DeleteShippingAddrResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
} 
@Type.d("Type_tss_user_api_proto_BatchGetUserGameTagReq") 
export class BatchGetUserGameTagReq extends Message<BatchGetUserGameTagReq> { 
	constructor(param?: Properties<BatchGetUserGameTagReq>) {  
		super(); 
		if (param) { 
			this.gameID = param.gameID!
			this.uIDs = param.uIDs!
			} 
		} 
		@Field.d(1, "string", "required")
		gameID:string = "";
		@Field.d(2, "int64", "repeated")
		uIDs:number[] = [];
} 
@Type.d("Type_tss_user_api_proto_BatchGetUserGameTagResp") 
export class BatchGetUserGameTagResp extends Message<BatchGetUserGameTagResp> { 
	constructor(param?: Properties<BatchGetUserGameTagResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.infos = param.infos!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, UsertagInfo, "repeated")
		infos:UsertagInfo[] = [];
} 
@Type.d("Type_tss_user_api_proto_ListNearStrangerReq") 
export class ListNearStrangerReq extends Message<ListNearStrangerReq> { 
	constructor(param?: Properties<ListNearStrangerReq>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.Latitude = param.Latitude!
			this.Longitude = param.Longitude!
			this.distance = param.distance!
			this.page = param.page!
			this.pageSize = param.pageSize!
			} 
		} 
		@Field.d(1, "int64", "required")
		uid:number = 0;
		@Field.d(2, "float", "required")
		Latitude:number = 0;
		@Field.d(3, "float", "required")
		Longitude:number = 0;
		@Field.d(4, "int32", "required")
		distance:number = 0;
		@Field.d(5, "int32", "required")
		page:number = 0;
		@Field.d(6, "int32", "required")
		pageSize:number = 0;
} 
@Type.d("Type_tss_user_api_proto_UserLocInfo") 
export class UserLocInfo extends Message<UserLocInfo> { 
	constructor(param?: Properties<UserLocInfo>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.Latitude = param.Latitude!
			this.Longitude = param.Longitude!
			this.distance = param.distance!
			} 
		} 
		@Field.d(1, "int64", "required")
		uid:number = 0;
		@Field.d(2, "float", "required")
		Latitude:number = 0;
		@Field.d(3, "float", "required")
		Longitude:number = 0;
		@Field.d(4, "int32", "optional")
		distance:number = 0;
} 
@Type.d("Type_tss_user_api_proto_ListNearStrangerResp") 
export class ListNearStrangerResp extends Message<ListNearStrangerResp> { 
	constructor(param?: Properties<ListNearStrangerResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.infos = param.infos!
			this.total = param.total!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, UserLocInfo, "repeated")
		infos:UserLocInfo[] = [];
		@Field.d(3, "int32", "required")
		total:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetUserTagCmmFriendCntReq") 
export class GetUserTagCmmFriendCntReq extends Message<GetUserTagCmmFriendCntReq> { 
	constructor(param?: Properties<GetUserTagCmmFriendCntReq>) {  
		super(); 
		if (param) { 
			this.UIDs = param.UIDs!
			} 
		} 
		@Field.d(1, "int64", "repeated")
		UIDs:number[] = [];
} 
@Type.d("Type_tss_user_api_proto_GetUserTagCmmFriendCntResp") 
export class GetUserTagCmmFriendCntResp extends Message<GetUserTagCmmFriendCntResp> { 
	constructor(param?: Properties<GetUserTagCmmFriendCntResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.userInfos = param.userInfos!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, UserInfo, "repeated")
		userInfos:UserInfo[] = [];
} 
@Type.d("Type_tss_user_api_proto_GetBeFriendTimeReq") 
export class GetBeFriendTimeReq extends Message<GetBeFriendTimeReq> { 
	constructor(param?: Properties<GetBeFriendTimeReq>) {  
		super(); 
		if (param) { 
			this.UidA = param.UidA!
			this.UidB = param.UidB!
			} 
		} 
		@Field.d(1, "int64", "required")
		UidA:number = 0;
		@Field.d(2, "int64", "required")
		UidB:number = 0;
} 
@Type.d("Type_tss_user_api_proto_GetBeFriendTimeResp") 
export class GetBeFriendTimeResp extends Message<GetBeFriendTimeResp> { 
	constructor(param?: Properties<GetBeFriendTimeResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.time = param.time!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
		@Field.d(2, "int64", "required")
		time:number = 0;
} 
@Type.d("Type_tss_user_api_proto_SetUserChatWallPaperReq") 
export class SetUserChatWallPaperReq extends Message<SetUserChatWallPaperReq> { 
	constructor(param?: Properties<SetUserChatWallPaperReq>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			} 
		} 
		@Field.d(1, "int64", "optional")
		id:number = 0;
} 
@Type.d("Type_tss_user_api_proto_SetUserChatWallPaperResp") 
export class SetUserChatWallPaperResp extends Message<SetUserChatWallPaperResp> { 
	constructor(param?: Properties<SetUserChatWallPaperResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.wallPaper = new user_common_user.UserWallPaperCfg(param.wallPaper!)
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, user_common_user.UserWallPaperCfg, "optional")
		wallPaper:user_common_user.UserWallPaperCfg =  new user_common_user.UserWallPaperCfg();
} 
@Type.d("Type_tss_user_api_proto_GetUsersChatWallPaperReq") 
export class GetUsersChatWallPaperReq extends Message<GetUsersChatWallPaperReq> { 
	constructor(param?: Properties<GetUsersChatWallPaperReq>) {  
		super(); 
		if (param) { 
			this.uids = param.uids!
			} 
		} 
		@Field.d(1, "int64", "repeated")
		uids:number[] = [];
} 
@Type.d("Type_tss_user_api_proto_GetUsersChatWallPaperResp") 
export class GetUsersChatWallPaperResp extends Message<GetUsersChatWallPaperResp> { 
	constructor(param?: Properties<GetUsersChatWallPaperResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.wallPapers = param.wallPapers!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, user_common_user.UserWallPaperCfg, "repeated")
		wallPapers:user_common_user.UserWallPaperCfg[] = [];
} 
@Type.d("Type_tss_user_api_proto_SetUserChatBubbleReq") 
export class SetUserChatBubbleReq extends Message<SetUserChatBubbleReq> { 
	constructor(param?: Properties<SetUserChatBubbleReq>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			} 
		} 
		@Field.d(1, "int64", "optional")
		id:number = 0;
} 
@Type.d("Type_tss_user_api_proto_SetUserChatBubbleResp") 
export class SetUserChatBubbleResp extends Message<SetUserChatBubbleResp> { 
	constructor(param?: Properties<SetUserChatBubbleResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.bubble = new user_common_user.UserBubbleCfg(param.bubble!)
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, user_common_user.UserBubbleCfg, "optional")
		bubble:user_common_user.UserBubbleCfg =  new user_common_user.UserBubbleCfg();
} 
@Type.d("Type_tss_user_api_proto_GetUsersChatBubbleReq") 
export class GetUsersChatBubbleReq extends Message<GetUsersChatBubbleReq> { 
	constructor(param?: Properties<GetUsersChatBubbleReq>) {  
		super(); 
		if (param) { 
			this.uids = param.uids!
			} 
		} 
		@Field.d(1, "int64", "repeated")
		uids:number[] = [];
} 
@Type.d("Type_tss_user_api_proto_GetUsersChatBubbleResp") 
export class GetUsersChatBubbleResp extends Message<GetUsersChatBubbleResp> { 
	constructor(param?: Properties<GetUsersChatBubbleResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.bubbles = param.bubbles!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, user_common_user.UserBubbleCfg, "repeated")
		bubbles:user_common_user.UserBubbleCfg[] = [];
} 
@Type.d("Type_tss_user_api_proto_ListChatWallPaperReq") 
export class ListChatWallPaperReq extends Message<ListChatWallPaperReq> { 
	constructor(param?: Properties<ListChatWallPaperReq>) {  
		super(); 
		if (param) { 
			this.page = param.page!
			this.pageSize = param.pageSize!
			} 
		} 
		@Field.d(1, "int32", "optional")
		page:number = 0;
		@Field.d(2, "int32", "optional")
		pageSize:number = 0;
} 
@Type.d("Type_tss_user_api_proto_ListChatWallPaperResp") 
export class ListChatWallPaperResp extends Message<ListChatWallPaperResp> { 
	constructor(param?: Properties<ListChatWallPaperResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.wallPapers = param.wallPapers!
			this.totalSize = param.totalSize!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, user_common_user.ChatWallPaper, "repeated")
		wallPapers:user_common_user.ChatWallPaper[] = [];
		@Field.d(3, "int32", "optional")
		totalSize:number = 0;
} 
@Type.d("Type_tss_user_api_proto_ListChatBubbleReq") 
export class ListChatBubbleReq extends Message<ListChatBubbleReq> { 
	constructor(param?: Properties<ListChatBubbleReq>) {  
		super(); 
		if (param) { 
			this.page = param.page!
			this.pageSize = param.pageSize!
			} 
		} 
		@Field.d(1, "int32", "optional")
		page:number = 0;
		@Field.d(2, "int32", "optional")
		pageSize:number = 0;
} 
@Type.d("Type_tss_user_api_proto_ListChatBubbleResp") 
export class ListChatBubbleResp extends Message<ListChatBubbleResp> { 
	constructor(param?: Properties<ListChatBubbleResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.bubbles = param.bubbles!
			this.totalSize = param.totalSize!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, user_common_user.ChatBubble, "repeated")
		bubbles:user_common_user.ChatBubble[] = [];
		@Field.d(3, "int32", "optional")
		totalSize:number = 0;
} 
export const ApiServer = {
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
	async setUserAccount(param:SetUserAccountReq):Promise<SetUserAccountResp|null> {
		const buffer = SetUserAccountReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 1, "SetUserAccount", buffer, this.config);
		return rsp.code === 0 ? SetUserAccountResp.decode(rsp.data) : null;
	},
	async getUserInfo(param:GetUserInfoReq):Promise<GetUserInfoResp|null> {
		const buffer = GetUserInfoReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 2, "GetUserInfo", buffer, this.config);
		return rsp.code === 0 ? GetUserInfoResp.decode(rsp.data) : null;
	},
	async followUser(param:FollowUserReq):Promise<FollowUserResp|null> {
		const buffer = FollowUserReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 3, "FollowUser", buffer, this.config);
		return rsp.code === 0 ? FollowUserResp.decode(rsp.data) : null;
	},
	async cancelFollowUser(param:CancelFollowUserReq):Promise<CancelFollowUserResp|null> {
		const buffer = CancelFollowUserReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 4, "CancelFollowUser", buffer, this.config);
		return rsp.code === 0 ? CancelFollowUserResp.decode(rsp.data) : null;
	},
	async getAllRelationDetail(param:GetAllRelationDetailReq):Promise<GetAllRelationDetailResp|null> {
		const buffer = GetAllRelationDetailReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 5, "GetAllRelationDetail", buffer, this.config);
		return rsp.code === 0 ? GetAllRelationDetailResp.decode(rsp.data) : null;
	},
	async getFansList(param:GetFansListReq):Promise<GetFansListResp|null> {
		const buffer = GetFansListReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 6, "GetFansList", buffer, this.config);
		return rsp.code === 0 ? GetFansListResp.decode(rsp.data) : null;
	},
	async getFollowList(param:GetFollowListReq):Promise<GetFollowListResp|null> {
		const buffer = GetFollowListReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 7, "GetFollowList", buffer, this.config);
		return rsp.code === 0 ? GetFollowListResp.decode(rsp.data) : null;
	},
	async getCommonFriend(param:GetCommonFriendReq):Promise<GetCommonFriendResp|null> {
		const buffer = GetCommonFriendReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 8, "GetCommonFriend", buffer, this.config);
		return rsp.code === 0 ? GetCommonFriendResp.decode(rsp.data) : null;
	},
	async getUidsAllRelationDetail(param:GetUidsAllRelationDetailReq):Promise<GetUidsAllRelationDetailResp|null> {
		const buffer = GetUidsAllRelationDetailReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 9, "GetUidsAllRelationDetail", buffer, this.config);
		return rsp.code === 0 ? GetUidsAllRelationDetailResp.decode(rsp.data) : null;
	},
	async getCommonFollow(param:GetCommonFollowReq):Promise<GetCommonFollowResp|null> {
		const buffer = GetCommonFollowReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 10, "GetCommonFollow", buffer, this.config);
		return rsp.code === 0 ? GetCommonFollowResp.decode(rsp.data) : null;
	},
	async getFriendList(param:GetFriendListReq):Promise<GetFriendListResp|null> {
		const buffer = GetFriendListReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 11, "GetFriendList", buffer, this.config);
		return rsp.code === 0 ? GetFriendListResp.decode(rsp.data) : null;
	},
	async getMutualFollowList(param:GetMutualFollowListReq):Promise<GetMutualFollowListResp|null> {
		const buffer = GetMutualFollowListReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 12, "GetMutualFollowList", buffer, this.config);
		return rsp.code === 0 ? GetMutualFollowListResp.decode(rsp.data) : null;
	},
	async searchUser(param:SearchUserReq):Promise<SearchUserResp|null> {
		const buffer = SearchUserReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 13, "SearchUser", buffer, this.config);
		return rsp.code === 0 ? SearchUserResp.decode(rsp.data) : null;
	},
	async getRecommendedUser(param:GetRecommendedUserReq):Promise<GetRecommendedUserResp|null> {
		const buffer = GetRecommendedUserReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 14, "GetRecommendedUser", buffer, this.config);
		return rsp.code === 0 ? GetRecommendedUserResp.decode(rsp.data) : null;
	},
	async getUserLineState(param:GetUserLineStateReq):Promise<GetUserLineStateResp|null> {
		const buffer = GetUserLineStateReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 15, "GetUserLineState", buffer, this.config);
		return rsp.code === 0 ? GetUserLineStateResp.decode(rsp.data) : null;
	},
	async getBatchUserLineState(param:GetBatchUserLineStateReq):Promise<GetBatchUserLineStateResp|null> {
		const buffer = GetBatchUserLineStateReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 16, "GetBatchUserLineState", buffer, this.config);
		return rsp.code === 0 ? GetBatchUserLineStateResp.decode(rsp.data) : null;
	},
	async getShippingAddr(param:GetShippingAddrReq):Promise<GetShippingAddrResp|null> {
		const buffer = GetShippingAddrReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 17, "GetShippingAddr", buffer, this.config);
		return rsp.code === 0 ? GetShippingAddrResp.decode(rsp.data) : null;
	},
	async listShippingAddr(param:ListShippingAddrReq):Promise<ListShippingAddrResp|null> {
		const buffer = ListShippingAddrReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 18, "ListShippingAddr", buffer, this.config);
		return rsp.code === 0 ? ListShippingAddrResp.decode(rsp.data) : null;
	},
	async createShippingAddr(param:CreateShippingAddrReq):Promise<CreateShippingAddrResp|null> {
		const buffer = CreateShippingAddrReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 19, "CreateShippingAddr", buffer, this.config);
		return rsp.code === 0 ? CreateShippingAddrResp.decode(rsp.data) : null;
	},
	async updateShippingAddr(param:UpdateShippingAddrReq):Promise<UpdateShippingAddrResp|null> {
		const buffer = UpdateShippingAddrReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 20, "UpdateShippingAddr", buffer, this.config);
		return rsp.code === 0 ? UpdateShippingAddrResp.decode(rsp.data) : null;
	},
	async deleteShippingAddr(param:DeleteShippingAddrReq):Promise<DeleteShippingAddrResp|null> {
		const buffer = DeleteShippingAddrReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 21, "DeleteShippingAddr", buffer, this.config);
		return rsp.code === 0 ? DeleteShippingAddrResp.decode(rsp.data) : null;
	},
	async batchGetUserGameTag(param:BatchGetUserGameTagReq):Promise<BatchGetUserGameTagResp|null> {
		const buffer = BatchGetUserGameTagReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 22, "BatchGetUserGameTag", buffer, this.config);
		return rsp.code === 0 ? BatchGetUserGameTagResp.decode(rsp.data) : null;
	},
	async listNearStranger(param:ListNearStrangerReq):Promise<ListNearStrangerResp|null> {
		const buffer = ListNearStrangerReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 23, "ListNearStranger", buffer, this.config);
		return rsp.code === 0 ? ListNearStrangerResp.decode(rsp.data) : null;
	},
	async getUserTagCmmFriendCnt(param:GetUserTagCmmFriendCntReq):Promise<GetUserTagCmmFriendCntResp|null> {
		const buffer = GetUserTagCmmFriendCntReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 24, "GetUserTagCmmFriendCnt", buffer, this.config);
		return rsp.code === 0 ? GetUserTagCmmFriendCntResp.decode(rsp.data) : null;
	},
	async getBeFriendTime(param:GetBeFriendTimeReq):Promise<GetBeFriendTimeResp|null> {
		const buffer = GetBeFriendTimeReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 25, "GetBeFriendTime", buffer, this.config);
		return rsp.code === 0 ? GetBeFriendTimeResp.decode(rsp.data) : null;
	},
	async setUserChatWallPaper(param:SetUserChatWallPaperReq):Promise<SetUserChatWallPaperResp|null> {
		const buffer = SetUserChatWallPaperReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 31, "SetUserChatWallPaper", buffer, this.config);
		return rsp.code === 0 ? SetUserChatWallPaperResp.decode(rsp.data) : null;
	},
	async getUsersChatWallPaper(param:GetUsersChatWallPaperReq):Promise<GetUsersChatWallPaperResp|null> {
		const buffer = GetUsersChatWallPaperReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 32, "GetUsersChatWallPaper", buffer, this.config);
		return rsp.code === 0 ? GetUsersChatWallPaperResp.decode(rsp.data) : null;
	},
	async setUserChatBubble(param:SetUserChatBubbleReq):Promise<SetUserChatBubbleResp|null> {
		const buffer = SetUserChatBubbleReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 33, "SetUserChatBubble", buffer, this.config);
		return rsp.code === 0 ? SetUserChatBubbleResp.decode(rsp.data) : null;
	},
	async getUsersChatBubble(param:GetUsersChatBubbleReq):Promise<GetUsersChatBubbleResp|null> {
		const buffer = GetUsersChatBubbleReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 34, "GetUsersChatBubble", buffer, this.config);
		return rsp.code === 0 ? GetUsersChatBubbleResp.decode(rsp.data) : null;
	},
	async listChatWallPaper(param:ListChatWallPaperReq):Promise<ListChatWallPaperResp|null> {
		const buffer = ListChatWallPaperReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 35, "ListChatWallPaper", buffer, this.config);
		return rsp.code === 0 ? ListChatWallPaperResp.decode(rsp.data) : null;
	},
	async listChatBubble(param:ListChatBubbleReq):Promise<ListChatBubbleResp|null> {
		const buffer = ListChatBubbleReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 36, "ListChatBubble", buffer, this.config);
		return rsp.code === 0 ? ListChatBubbleResp.decode(rsp.data) : null;
	},
	async listPhotoFrame(param:ListPhotoFrameReq):Promise<ListPhotoFrameResp|null> {
		const buffer = ListPhotoFrameReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 37, "ListPhotoFrame", buffer, this.config);
		return rsp.code === 0 ? ListPhotoFrameResp.decode(rsp.data) : null;
	},
	async listNicknameColor(param:ListNicknameColorReq):Promise<ListNicknameColorResp|null> {
		const buffer = ListNicknameColorReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 38, "ListNicknameColor", buffer, this.config);
		return rsp.code === 0 ? ListNicknameColorResp.decode(rsp.data) : null;
	},
	async completeTaskAward(param:CompleteTaskAwardReq):Promise<CompleteTaskAwardResp|null> {
		const buffer = CompleteTaskAwardReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.user.api", 39, "CompleteTaskAward", buffer, this.config);
		return rsp.code === 0 ? CompleteTaskAwardResp.decode(rsp.data) : null;
	},
}
}
