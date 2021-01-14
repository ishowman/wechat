/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
import { base as base} from '@/idl/base/base';
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace common {
export enum State {
	StateUnknown = 0,
	StateOnline = 1,
	StateOffline = 2,
	StatePending = 3,
}
export enum OS {
	OSUnknown = 0,
	OSiOS = 1,
	OSAndroid = 2,
}
export enum SysModules {
	SysModules_Unknown = 0,
	SysModules_Prop = 1,
	SysModules_VIP = 2,
}
export enum ExpireType {
	ExpireTypeUnknown = 0,
	ExpireTypeDuration = 1,
	ExpireTypeTime = 2,
}
export enum ItemType {
	ItemTypeUnknown = 0,
	ItemTypeProp = 1,
	ItemTypeMung = 2,
}
export enum Way {
	WayNone = 0,
	WayIncMatch = 1,
	WayIncCMS = 2,
	WayIncMall = 3,
	WayIncSYS = 4,
	WayIncActivity = 5,
	WayIncVipWeal = 6,
	WayIncVipPoint = 7,
	WayIncCDK = 8,
	WayIncGiftBag = 9,
	WayIncTask = 10,
	WayIncExchange = 11,
	WayIncBeginner = 12,
	WayIncThirdPartRefund = 13,
	WayIncMatchingRank = 14,
	WayIncMatchingStreakWin = 15,
	WayIncPrizeComment = 16,
	WayIncUse = 17,
	WayIncActivityDailyTask = 18,
	WayIncActivityWeeklySign = 19,
	WayIncActivityNewUserTask = 20,
	WayIncTicketExchangeMung = 31,
	WayIncActivityInviterRebate = 32,
	WayIncActivityProfitInvite = 33,
	WayIncWeiChatFollowGift = 34,
	WayIncWeiChatWealGift = 35,
	WayIncRegularMatch = 21,
	WayIncFastMatch = 22,
	WayIncBreakthroughMatch = 23,
	WayIncBettingMatch = 24,
	WayIncOtherMatch = 25,
	WayDecUse = 100,
	WayDecCMS = 101,
	WayDecExpire = 102,
	WayDecThirdPart = 103,
	WayDecExchange = 104,
	WayDecRegularMatch = 111,
	WayDecFastMatch = 112,
	WayDecBreakthroughMatch = 113,
	WayDecBettingMatch = 114,
	WayDecMatchingMatch = 115,
	WayDecOtherMatch = 120,
	WayDecTicketExchangeMung = 131,
	WayIncVIPRecharge = 132,
	WayIncQuestionnaire = 133,
}
export enum AwardAcceptType {
	AwardAcceptTypeUnknown = 0,
	AwardAcceptTypeManualAccept = 1,
	AwardAcceptTypeAutoAccept = 2,
}
export enum AwardAcceptDest {
	AwardAcceptDestUnknown = 0,
	AwardAcceptDestSysMail = 1,
	AwardAcceptDestUserBag = 2,
}
export enum AwardType {
	AwardTypeUnknown = 0,
	AwardTypeFixed = 1,
	AwardTypeRandom = 2,
}
export enum VIPRewardType {
	VIPRewardTypeUnknown = 0,
	VIPRewardTypeClose = 1,
	VIPRewardTypeDouble = 2,
	VIPRewardTypeLevel = 3,
}
export enum UserGroupType {
	UserGroupTypeUnknown = 0,
	UserGroupTypeNormal = 1,
	UserGroupTypeBlock = 2,
}
@Type.d("Type_tss_common_common_define_proto_Range") 
export class Range extends Message<Range> { 
	constructor(param?: Properties<Range>) {  
		super(); 
		if (param) { 
			this.start = param.start!
			this.end = param.end!
			} 
		} 
		@Field.d(1, "int64", "optional")
		start:number = 0;
		@Field.d(2, "int64", "optional")
		end:number = 0;
} 
@Type.d("Type_tss_common_common_define_proto_Metadata") 
export class Metadata extends Message<Metadata> { 
	constructor(param?: Properties<Metadata>) {  
		super(); 
		if (param) { 
			this.key = param.key!
			this.value = param.value!
			this.desc = param.desc!
			} 
		} 
		@Field.d(1, "string", "optional")
		key:string = "";
		@Field.d(2, "string", "optional")
		value:string = "";
		@Field.d(3, "string", "optional")
		desc:string = "";
} 
@Type.d("Type_tss_common_common_define_proto_ExpireData") 
export class ExpireData extends Message<ExpireData> { 
	constructor(param?: Properties<ExpireData>) {  
		super(); 
		if (param) { 
			this.type = param.type!
			this.value = param.value!
			} 
		} 
		@Field.d(1, ExpireType, "optional")
		type:ExpireType = 0;
		@Field.d(2, "int64", "optional")
		value:number = 0;
} 
@Type.d("Type_tss_common_common_define_proto_PropItem") 
export class PropItem extends Message<PropItem> { 
	constructor(param?: Properties<PropItem>) {  
		super(); 
		if (param) { 
			this.propID = param.propID!
			this.name = param.name!
			this.img = param.img!
			this.num = param.num!
			this.typeID = param.typeID!
			this.expire = new ExpireData(param.expire!)
			this.desc = param.desc!
			this.itemType = param.itemType!
			this.icon = param.icon!
			} 
		} 
		@Field.d(1, "int64", "optional")
		propID:number = 0;
		@Field.d(2, "string", "optional")
		name:string = "";
		@Field.d(3, "string", "optional")
		img:string = "";
		@Field.d(4, "int32", "optional")
		num:number = 0;
		@Field.d(5, "int64", "optional")
		typeID:number = 0;
		@Field.d(6, ExpireData, "optional")
		expire:ExpireData =  new ExpireData();
		@Field.d(7, "string", "optional")
		desc:string = "";
		@Field.d(8, ItemType, "optional")
		itemType:ItemType = 0;
		@Field.d(9, "string", "optional")
		icon:string = "";
} 
@Type.d("Type_tss_common_common_define_proto_VIPLevelReward") 
export class VIPLevelReward extends Message<VIPLevelReward> { 
	constructor(param?: Properties<VIPLevelReward>) {  
		super(); 
		if (param) { 
			this.level = param.level!
			this.multiple = param.multiple!
			this.name = param.name!
			} 
		} 
		@Field.d(1, "int32", "optional")
		level:number = 0;
		@Field.d(2, "int32", "optional")
		multiple:number = 0;
		@Field.d(3, "string", "optional")
		name:string = "";
} 
@Type.d("Type_tss_common_common_define_proto_SysMailBody") 
export class SysMailBody extends Message<SysMailBody> { 
	constructor(param?: Properties<SysMailBody>) {  
		super(); 
		if (param) { 
			this.title = param.title!
			this.content = param.content!
			this.expire = new ExpireData(param.expire!)
			this.reason = param.reason!
			this.templateType = param.templateType!
			} 
		} 
		@Field.d(1, "string", "optional")
		title:string = "";
		@Field.d(2, "string", "optional")
		content:string = "";
		@Field.d(3, ExpireData, "optional")
		expire:ExpireData =  new ExpireData();
		@Field.d(4, "string", "optional")
		reason:string = "";
		@Field.d(5, "int32", "optional")
		templateType:number = 0;
} 
@Type.d("Type_tss_common_common_define_proto_AwardAcceptConf") 
export class AwardAcceptConf extends Message<AwardAcceptConf> { 
	constructor(param?: Properties<AwardAcceptConf>) {  
		super(); 
		if (param) { 
			this.awardAcceptType = param.awardAcceptType!
			this.awardAcceptDest = param.awardAcceptDest!
			this.sysMailBody = new SysMailBody(param.sysMailBody!)
			} 
		} 
		@Field.d(1, AwardAcceptType, "optional")
		awardAcceptType:AwardAcceptType = 0;
		@Field.d(2, AwardAcceptDest, "optional")
		awardAcceptDest:AwardAcceptDest = 0;
		@Field.d(5, SysMailBody, "optional")
		sysMailBody:SysMailBody =  new SysMailBody();
} 
}
