/* eslint-disable */ 
import { rpcPlugin as byRpc ,ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
import { match as match_common_config} from '@/idl/tss/match/common_config';
import { base as base} from '@/idl/base/base';
import { match as match_common_list} from '@/idl/tss/match/common_list';
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace prematchdetail {
export enum MatchState {
	MatchState_PreMatch = 0,
	MatchState_InGame = 1,
	MatchState_MatchOver = 2,
}
export enum SignUpStatus {
	SignUpStatusNotSignUp = 0,
	SignUpStatusIsSigned = 1,
	SignUpStatusIsNotSignedTime = 2,
	SignUpStatusNotQualify = 3,
	SignUpStatusDelayEntry = 4,
}
export enum RewardType {
	RewardType_Prize = 0,
	RewardType_Topic = 1,
}
@Type.d("Type_tss_match_prematchdetail_v1_proto_GetPreMatchDetailReq") 
export class GetPreMatchDetailReq extends Message<GetPreMatchDetailReq> { 
	constructor(param?: Properties<GetPreMatchDetailReq>) {  
		super(); 
		if (param) { 
			this.preMatchKey = param.preMatchKey!
			this.seriesKey = param.seriesKey!
			} 
		} 
		@Field.d(1, "string", "optional")
		preMatchKey:string = "";
		@Field.d(2, "string", "optional")
		seriesKey:string = "";
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_StageInfo") 
export class StageInfo extends Message<StageInfo> { 
	constructor(param?: Properties<StageInfo>) {  
		super(); 
		if (param) { 
			this.stageMode = param.stageMode!
			this.roundSeq = param.roundSeq!
			this.promotionNum = param.promotionNum!
			this.stageName = param.stageName!
			this.startNum = param.startNum!
			this.outRule = param.outRule!
			this.canRevive = param.canRevive!
			this.revivalTypes = param.revivalTypes!
			} 
		} 
		@Field.d(1, match_common_config.StageMode, "required")
		stageMode:match_common_config.StageMode = 0;
		@Field.d(2, "int32", "optional")
		roundSeq:number = 0;
		@Field.d(3, "int32", "optional")
		promotionNum:number = 0;
		@Field.d(4, "string", "optional")
		stageName:string = "";
		@Field.d(5, "int32", "optional")
		startNum:number = 0;
		@Field.d(6, match_common_config.OutRuleMode, "optional")
		outRule:match_common_config.OutRuleMode = 0;
		@Field.d(7, "bool", "optional")
		canRevive:boolean = false;
		@Field.d(8, match_common_config.RevivalType, "repeated")
		revivalTypes:match_common_config.RevivalType[] = [];
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_ChatRoomInfo") 
export class ChatRoomInfo extends Message<ChatRoomInfo> { 
	constructor(param?: Properties<ChatRoomInfo>) {  
		super(); 
		if (param) { 
			this.isOpened = param.isOpened!
			this.openSec = param.openSec!
			this.closedSec = param.closedSec!
			this.chatBackground = param.chatBackground!
			this.chatID = param.chatID!
			this.canChat = param.canChat!
			this.onceEntered = param.onceEntered!
			} 
		} 
		@Field.d(1, "bool", "optional")
		isOpened:boolean = false;
		@Field.d(2, "int64", "optional")
		openSec:number = 0;
		@Field.d(3, "int64", "optional")
		closedSec:number = 0;
		@Field.d(4, "string", "optional")
		chatBackground:string = "";
		@Field.d(5, "string", "required")
		chatID:string = "";
		@Field.d(6, "bool", "optional")
		canChat:boolean = false;
		@Field.d(7, "bool", "optional")
		onceEntered:boolean = false;
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_GameBriefInfo") 
export class GameBriefInfo extends Message<GameBriefInfo> { 
	constructor(param?: Properties<GameBriefInfo>) {  
		super(); 
		if (param) { 
			this.gameName = param.gameName!
			this.icon = param.icon!
			this.gameID = param.gameID!
			this.slogan = param.slogan!
			} 
		} 
		@Field.d(1, "string", "optional")
		gameName:string = "";
		@Field.d(2, "string", "optional")
		icon:string = "";
		@Field.d(3, "string", "required")
		gameID:string = "";
		@Field.d(4, "string", "optional")
		slogan:string = "";
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_SignedUserState") 
export class SignedUserState extends Message<SignedUserState> { 
	constructor(param?: Properties<SignedUserState>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.isJoined = param.isJoined!
			} 
		} 
		@Field.d(1, "int64", "required")
		uid:number = 0;
		@Field.d(2, "bool", "optional")
		isJoined:boolean = false;
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_RewardDisplayInfo") 
export class RewardDisplayInfo extends Message<RewardDisplayInfo> { 
	constructor(param?: Properties<RewardDisplayInfo>) {  
		super(); 
		if (param) { 
			this.rewardName = param.rewardName!
			this.rewardID = param.rewardID!
			this.rewardImg = param.rewardImg!
			this.rewardType = param.rewardType!
			this.rewardIcon = param.rewardIcon!
			} 
		} 
		@Field.d(1, "string", "optional")
		rewardName:string = "";
		@Field.d(2, "int32", "optional")
		rewardID:number = 0;
		@Field.d(3, "string", "optional")
		rewardImg:string = "";
		@Field.d(4, "int32", "optional")
		rewardType:number = 0;
		@Field.d(5, "string", "optional")
		rewardIcon:string = "";
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_ScheduleStageInfo") 
export class ScheduleStageInfo extends Message<ScheduleStageInfo> { 
	constructor(param?: Properties<ScheduleStageInfo>) {  
		super(); 
		if (param) { 
			this.seriesSchedule = new match_common_config.SeriesScheduleConfig(param.seriesSchedule!)
			this.stages = param.stages!
			this.rewards = new match_common_config.PrizeConfig(param.rewards!)
			this.hasPromotedList = param.hasPromotedList!
			this.matchKey = param.matchKey!
			} 
		} 
		@Field.d(1, match_common_config.SeriesScheduleConfig, "optional")
		seriesSchedule:match_common_config.SeriesScheduleConfig =  new match_common_config.SeriesScheduleConfig();
		@Field.d(2, StageInfo, "repeated")
		stages:StageInfo[] = [];
		@Field.d(4, match_common_config.PrizeConfig, "optional")
		rewards:match_common_config.PrizeConfig =  new match_common_config.PrizeConfig();
		@Field.d(3, "bool", "optional")
		hasPromotedList:boolean = false;
		@Field.d(6, "string", "optional")
		matchKey:string = "";
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_SeriesInfo") 
export class SeriesInfo extends Message<SeriesInfo> { 
	constructor(param?: Properties<SeriesInfo>) {  
		super(); 
		if (param) { 
			this.curScheduleSeq = param.curScheduleSeq!
			this.isAllOver = param.isAllOver!
			this.scheduleStages = param.scheduleStages!
			} 
		} 
		@Field.d(1, "int32", "optional")
		curScheduleSeq:number = 0;
		@Field.d(2, "bool", "optional")
		isAllOver:boolean = false;
		@Field.d(3, ScheduleStageInfo, "repeated")
		scheduleStages:ScheduleStageInfo[] = [];
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_GetPreMatchDetailResp") 
export class GetPreMatchDetailResp extends Message<GetPreMatchDetailResp> { 
	constructor(param?: Properties<GetPreMatchDetailResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.preMatchKey = param.preMatchKey!
			this.matchName = param.matchName!
			this.startTime = param.startTime!
			this.readyTime = param.readyTime!
			this.curTime = param.curTime!
			this.signedNum = param.signedNum!
			this.joinNum = param.joinNum!
			this.minNum = param.minNum!
			this.schemeID = param.schemeID!
			this.detailURL = param.detailURL!
			this.displayURL = param.displayURL!
			this.estimatedTime = param.estimatedTime!
			this.matchKitVer = param.matchKitVer!
			this.isJoined = param.isJoined!
			this.matchState = param.matchState!
			this.matchSrvName = param.matchSrvName!
			this.matchSrvID = param.matchSrvID!
			this.matchKey = param.matchKey!
			this.matchType = param.matchType!
			this.seriesKey = param.seriesKey!
			this.signedStatus = param.signedStatus!
			this.expcMatchingSec = param.expcMatchingSec!
			this.matchHotLevel = param.matchHotLevel!
			this.curRoundSeq = param.curRoundSeq!
			this.rewardPoolMungNum = param.rewardPoolMungNum!
			this.totalRoundNum = param.totalRoundNum!
			this.type = param.type!
			this.stages = param.stages!
			this.chatRoom = new ChatRoomInfo(param.chatRoom!)
			this.game = new GameBriefInfo(param.game!)
			this.newestSignedUsers = param.newestSignedUsers!
			this.rewardDisplayInfo = new RewardDisplayInfo(param.rewardDisplayInfo!)
			this.rewards = new match_common_config.PrizeConfig(param.rewards!)
			this.signUpInfo = new match_common_config.SignUpConfig(param.signUpInfo!)
			this.seriesInfo = new SeriesInfo(param.seriesInfo!)
			this.creatorUID = param.creatorUID!
			this.preventCheatCfg = new match_common_config.PreventCheatConfig(param.preventCheatCfg!)
			this.roundPrizes = param.roundPrizes!
			this.isLimitSignUp = param.isLimitSignUp!
			this.records = param.records!
			this.startSpan = new match_common_config.StartTimeSpan(param.startSpan!)
			this.phaseSeq = param.phaseSeq!
			this.ruleDesc = param.ruleDesc!
			this.joinMatchNeedPropNum = param.joinMatchNeedPropNum!
			this.ownPropNum = param.ownPropNum!
			this.delayEntryConfig = new match_common_config.DelayEntryConfig(param.delayEntryConfig!)
			this.listTags = param.listTags!
			this.prizeRing = param.prizeRing!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "string", "optional")
		preMatchKey:string = "";
		@Field.d(3, "string", "optional")
		matchName:string = "";
		@Field.d(4, "int64", "optional")
		startTime:number = 0;
		@Field.d(5, "int64", "optional")
		readyTime:number = 0;
		@Field.d(6, "int64", "optional")
		curTime:number = 0;
		@Field.d(7, "int32", "optional")
		signedNum:number = 0;
		@Field.d(8, "int32", "optional")
		joinNum:number = 0;
		@Field.d(9, "int32", "optional")
		minNum:number = 0;
		@Field.d(10, "int64", "optional")
		schemeID:number = 0;
		@Field.d(12, "string", "optional")
		detailURL:string = "";
		@Field.d(13, "string", "optional")
		displayURL:string = "";
		@Field.d(14, "string", "optional")
		estimatedTime:string = "";
		@Field.d(15, "string", "optional")
		matchKitVer:string = "";
		@Field.d(16, "bool", "optional")
		isJoined:boolean = false;
		@Field.d(17, "int32", "optional")
		matchState:number = 0;
		@Field.d(18, "string", "optional")
		matchSrvName:string = "";
		@Field.d(19, "uint32", "optional")
		matchSrvID:number = 0;
		@Field.d(20, "string", "optional")
		matchKey:string = "";
		@Field.d(21, "int32", "optional")
		matchType:number = 0;
		@Field.d(22, "string", "optional")
		seriesKey:string = "";
		@Field.d(23, "int32", "optional")
		signedStatus:number = 0;
		@Field.d(24, "int32", "optional")
		expcMatchingSec:number = 0;
		@Field.d(25, "int64", "optional")
		matchHotLevel:number = 0;
		@Field.d(26, "int32", "optional")
		curRoundSeq:number = 0;
		@Field.d(27, "int32", "optional")
		rewardPoolMungNum:number = 0;
		@Field.d(28, "int32", "optional")
		totalRoundNum:number = 0;
		@Field.d(29, match_common_config.MatchType, "optional")
		type:match_common_config.MatchType = 0;
		@Field.d(30, StageInfo, "repeated")
		stages:StageInfo[] = [];
		@Field.d(31, ChatRoomInfo, "optional")
		chatRoom:ChatRoomInfo =  new ChatRoomInfo();
		@Field.d(32, GameBriefInfo, "optional")
		game:GameBriefInfo =  new GameBriefInfo();
		@Field.d(33, SignedUserState, "repeated")
		newestSignedUsers:SignedUserState[] = [];
		@Field.d(34, RewardDisplayInfo, "optional")
		rewardDisplayInfo:RewardDisplayInfo =  new RewardDisplayInfo();
		@Field.d(35, match_common_config.PrizeConfig, "optional")
		rewards:match_common_config.PrizeConfig =  new match_common_config.PrizeConfig();
		@Field.d(36, match_common_config.SignUpConfig, "optional")
		signUpInfo:match_common_config.SignUpConfig =  new match_common_config.SignUpConfig();
		@Field.d(37, SeriesInfo, "optional")
		seriesInfo:SeriesInfo =  new SeriesInfo();
		@Field.d(38, "int64", "optional")
		creatorUID:number = 0;
		@Field.d(39, match_common_config.PreventCheatConfig, "optional")
		preventCheatCfg:match_common_config.PreventCheatConfig =  new match_common_config.PreventCheatConfig();
		@Field.d(40, match_common_config.PrizeDetailConfig, "repeated")
		roundPrizes:match_common_config.PrizeDetailConfig[] = [];
		@Field.d(41, "bool", "optional")
		isLimitSignUp:boolean = false;
		@Field.d(42, match_common_config.BreakthroughRecord, "repeated")
		records:match_common_config.BreakthroughRecord[] = [];
		@Field.d(43, match_common_config.StartTimeSpan, "optional")
		startSpan:match_common_config.StartTimeSpan =  new match_common_config.StartTimeSpan();
		@Field.d(44, "int32", "optional")
		phaseSeq:number = 0;
		@Field.d(45, "string", "optional")
		ruleDesc:string = "";
		@Field.d(46, "int32", "optional")
		joinMatchNeedPropNum:number = 0;
		@Field.d(47, "int32", "optional")
		ownPropNum:number = 0;
		@Field.d(48, match_common_config.DelayEntryConfig, "optional")
		delayEntryConfig:match_common_config.DelayEntryConfig =  new match_common_config.DelayEntryConfig();
		@Field.d(49, match_common_list.ListTagType, "repeated")
		listTags:match_common_list.ListTagType[] = [];
		@Field.d(50, "int32", "optional")
		prizeRing:number = 0;
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_User") 
export class User extends Message<User> { 
	constructor(param?: Properties<User>) {  
		super(); 
		if (param) { 
			this.UID = param.UID!
			this.signTime = param.signTime!
			this.isReady = param.isReady!
			this.preMatchKey = param.preMatchKey!
			} 
		} 
		@Field.d(1, "int64", "optional")
		UID:number = 0;
		@Field.d(2, "int64", "optional")
		signTime:number = 0;
		@Field.d(4, "bool", "optional")
		isReady:boolean = false;
		@Field.d(3, "string", "optional")
		preMatchKey:string = "";
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_PreMatchEntity") 
export class PreMatchEntity extends Message<PreMatchEntity> { 
	constructor(param?: Properties<PreMatchEntity>) {  
		super(); 
		if (param) { 
			this.preMatchKey = param.preMatchKey!
			this.MatchConfigInfo = new match_common_config.MatchConfigInfo(param.MatchConfigInfo!)
			} 
		} 
		@Field.d(1, "string", "optional")
		preMatchKey:string = "";
		@Field.d(2, match_common_config.MatchConfigInfo, "optional")
		MatchConfigInfo:match_common_config.MatchConfigInfo =  new match_common_config.MatchConfigInfo();
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_CanJoinMatchReq") 
export class CanJoinMatchReq extends Message<CanJoinMatchReq> { 
	constructor(param?: Properties<CanJoinMatchReq>) {  
		super(); 
		if (param) { 
			this.preMatchKey = param.preMatchKey!
			} 
		} 
		@Field.d(1, "string", "optional")
		preMatchKey:string = "";
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_CanJoinMatchResp") 
export class CanJoinMatchResp extends Message<CanJoinMatchResp> { 
	constructor(param?: Properties<CanJoinMatchResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.canJoin = param.canJoin!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "bool", "optional")
		canJoin:boolean = false;
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_GetMatchStateReq") 
export class GetMatchStateReq extends Message<GetMatchStateReq> { 
	constructor(param?: Properties<GetMatchStateReq>) {  
		super(); 
		if (param) { 
			this.preMatchKey = param.preMatchKey!
			} 
		} 
		@Field.d(1, "string", "optional")
		preMatchKey:string = "";
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_GetMatchStateResp") 
export class GetMatchStateResp extends Message<GetMatchStateResp> { 
	constructor(param?: Properties<GetMatchStateResp>) {  
		super(); 
		if (param) { 
			this.matchState = param.matchState!
			} 
		} 
		@Field.d(1, "int32", "optional")
		matchState:number = 0;
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_GetVipPrizeListReq") 
export class GetVipPrizeListReq extends Message<GetVipPrizeListReq> { 
	constructor(param?: Properties<GetVipPrizeListReq>) {  
		super(); 
		if (param) { 
			this.preMatchKey = param.preMatchKey!
			} 
		} 
		@Field.d(1, "string", "required")
		preMatchKey:string = "";
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_PrizeDetail") 
export class PrizeDetail extends Message<PrizeDetail> { 
	constructor(param?: Properties<PrizeDetail>) {  
		super(); 
		if (param) { 
			this.prizeID = param.prizeID!
			this.prizeNum = param.prizeNum!
			this.prizeName = param.prizeName!
			this.prizeImg = param.prizeImg!
			this.rewardMode = param.rewardMode!
			this.mungNum = param.mungNum!
			this.prizeIcon = param.prizeIcon!
			this.prizeType = param.prizeType!
			this.desc = param.desc!
			} 
		} 
		@Field.d(1, "int32", "optional")
		prizeID:number = 0;
		@Field.d(2, "int32", "optional")
		prizeNum:number = 0;
		@Field.d(3, "string", "optional")
		prizeName:string = "";
		@Field.d(4, "string", "optional")
		prizeImg:string = "";
		@Field.d(6, match_common_config.RewardMode, "optional")
		rewardMode:match_common_config.RewardMode = 0;
		@Field.d(7, "int32", "optional")
		mungNum:number = 0;
		@Field.d(8, "string", "optional")
		prizeIcon:string = "";
		@Field.d(9, "int32", "optional")
		prizeType:number = 0;
		@Field.d(10, "string", "optional")
		desc:string = "";
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_VipRankPrize") 
export class VipRankPrize extends Message<VipRankPrize> { 
	constructor(param?: Properties<VipRankPrize>) {  
		super(); 
		if (param) { 
			this.rankStart = param.rankStart!
			this.rankEnd = param.rankEnd!
			this.prizeDetail = param.prizeDetail!
			this.extraPrizeType = param.extraPrizeType!
			this.ratio = param.ratio!
			} 
		} 
		@Field.d(1, "int32", "optional")
		rankStart:number = 0;
		@Field.d(2, "int32", "optional")
		rankEnd:number = 0;
		@Field.d(3, PrizeDetail, "repeated")
		prizeDetail:PrizeDetail[] = [];
		@Field.d(4, match_common_config.ExtraPrizeType, "optional")
		extraPrizeType:match_common_config.ExtraPrizeType = 0;
		@Field.d(5, "int32", "optional")
		ratio:number = 0;
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_VipPrize") 
export class VipPrize extends Message<VipPrize> { 
	constructor(param?: Properties<VipPrize>) {  
		super(); 
		if (param) { 
			this.levelBegin = param.levelBegin!
			this.levelEnd = param.levelEnd!
			this.vipRankPrize = param.vipRankPrize!
			} 
		} 
		@Field.d(1, "int32", "optional")
		levelBegin:number = 0;
		@Field.d(2, "int32", "optional")
		levelEnd:number = 0;
		@Field.d(3, VipRankPrize, "repeated")
		vipRankPrize:VipRankPrize[] = [];
} 
@Type.d("Type_tss_match_prematchdetail_v1_proto_GetVipPrizeListResp") 
export class GetVipPrizeListResp extends Message<GetVipPrizeListResp> { 
	constructor(param?: Properties<GetVipPrizeListResp>) {  
		super(); 
		if (param) { 
			this.vipPrizes = param.vipPrizes!
			this.code = param.code!
			} 
		} 
		@Field.d(1, VipPrize, "repeated")
		vipPrizes:VipPrize[] = [];
		@Field.d(2, "int32", "optional")
		code:number = 0;
} 
export const PreMatchDetailServer = {
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
	async getPreMatchDetail(param:GetPreMatchDetailReq):Promise<GetPreMatchDetailResp|null> {
		const buffer = GetPreMatchDetailReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.match.prematchdetail.v1", 1, "GetPreMatchDetail", buffer, this.config);
		return rsp.code === 0 ? GetPreMatchDetailResp.decode(rsp.data) : null;
	},
	async canJoinMatch(param:CanJoinMatchReq):Promise<CanJoinMatchResp|null> {
		const buffer = CanJoinMatchReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.match.prematchdetail.v1", 2, "CanJoinMatch", buffer, this.config);
		return rsp.code === 0 ? CanJoinMatchResp.decode(rsp.data) : null;
	},
	async getMatchState(param:GetMatchStateReq):Promise<GetMatchStateResp|null> {
		const buffer = GetMatchStateReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.match.prematchdetail.v1", 3, "GetMatchState", buffer, this.config);
		return rsp.code === 0 ? GetMatchStateResp.decode(rsp.data) : null;
	},
	async getVipPrizeList(param:GetVipPrizeListReq):Promise<GetVipPrizeListResp|null> {
		const buffer = GetVipPrizeListReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.match.prematchdetail.v1", 4, "GetVipPrizeList", buffer, this.config);
		return rsp.code === 0 ? GetVipPrizeListResp.decode(rsp.data) : null;
	},
	async getPreMatchDetailForWeb(param:GetPreMatchDetailReq):Promise<GetPreMatchDetailResp|null> {
		const buffer = GetPreMatchDetailReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.match.prematchdetail.v1", 5, "GetPreMatchDetailForWeb", buffer, this.config);
		return rsp.code === 0 ? GetPreMatchDetailResp.decode(rsp.data) : null;
	},
}
}
