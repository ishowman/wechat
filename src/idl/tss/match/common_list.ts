/* eslint-disable */ 
import { rpcPlugin as byRpc ,ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace match {
export enum SubMatchTyp {
	UnKnownMatch = 0,
	SingleMatch = 1,
	SeriesMatch = 2,
	CycleMatch = 3,
	InviteMatch = 4,
	FastMatch = 5,
	BeginnerMatch = 6,
	BreakthroughMatch = 7,
	BettingMatch = 8,
	StandingMatch = 9,
}
export enum ListTagType {
	ListTagTypeNew = 0,
	ListTagTypeRevival = 1,
	ListTagTypeSeries = 2,
	ListTagTypeRound = 3,
	ListTagTypeLargePrizeRing = 4,
	ListTagTypeHighReward = 5,
	ListTagTypeDelayEntry = 6,
	ListTagTypeVIP = 7,
}
export enum ListRevivalType {
	VIPRevival = 0,
	PropRevival = 1,
	BothRevival = 2,
}
export enum UserState {
	NotSigned = 0,
	HasSigned = 1,
	NotReady = 2,
	HasReady = 3,
	CantSignUp = 4,
	DelayEntry = 5,
}
export enum CardStyleType {
	SmallCard = 0,
	LargeCard = 1,
}
export enum SignUpLimitState {
	SignUpLimitStateNone = 0,
	SignUpLimitStateFree = 1,
	SignUpLimitStateInLimit = 2,
	SignUpLimitStateBan = 3,
	SignUpLimitStatePay = 4,
	SignUpLimitStateCantPay = 5,
}
export enum VIPPrizeMode {
	VIPPrizeModeDefault = 0,
	VIPPrizeModeCustom = 1,
}
export enum VIPPrizeType {
	VIPPrizeTypeFixed = 0,
	VIPPrizeTypeRatio = 1,
}
export enum SignUpTyp {
	SignUpTypUnknow = 0,
	SignUpTypFree = 1,
	SignUpTypProp = 2,
	SignUpTypVIP = 4,
	SignUpTypDiamond = 8,
	SignUpTypMung = 16,
}
export enum PageType {
	ChosenPage = 0,
	RegularPage = 1,
	CyclePage = 2,
	GamePage = 3,
	ScenePage = 4,
	HistoricalPage = 5,
}
export enum CardType {
	UnknownCard = 0,
	MatchCard = 1,
	ImgCard = 2,
	OnlookerCard = 3,
}
export enum RecommendedMode {
	AccordingStartTime = 0,
	AccordingInterest = 1,
}
export enum QueryMode {
	AccordingGame = 0,
	AccordingMatch = 1,
	AccordingTime = 2,
	AccordingReward = 3,
}
export enum GameType {
	All = 0,
	Chess = 1,
	Poker = 2,
	Mahjong = 3,
}
export enum TimeSpanType {
	AllDayLong = 0,
	Morning = 1,
	NoonDay = 2,
	Afternoon = 3,
	Night = 4,
}
@Type.d("Type_tss_match_common_list_proto_PrizeDetailInfo") 
export class PrizeDetailInfo extends Message<PrizeDetailInfo> { 
	constructor(param?: Properties<PrizeDetailInfo>) {  
		super(); 
		if (param) { 
			this.prizeID = param.prizeID!
			this.prizeNum = param.prizeNum!
			this.prizeName = param.prizeName!
			this.requiredNum = param.requiredNum!
			this.exchangeablePrizeName = param.exchangeablePrizeName!
			this.exchangeablePrizeImg = param.exchangeablePrizeImg!
			this.exchangeablePrizeTypes = param.exchangeablePrizeTypes!
			this.rewardMode = param.rewardMode!
			this.mungNum = param.mungNum!
			this.type = param.type!
			this.price = param.price!
			} 
		} 
		@Field.d(1, "int32", "optional")
		prizeID:number = 0;
		@Field.d(2, "int32", "optional")
		prizeNum:number = 0;
		@Field.d(3, "string", "optional")
		prizeName:string = "";
		@Field.d(4, "int32", "optional")
		requiredNum:number = 0;
		@Field.d(5, "string", "optional")
		exchangeablePrizeName:string = "";
		@Field.d(6, "string", "optional")
		exchangeablePrizeImg:string = "";
		@Field.d(7, "int32", "repeated")
		exchangeablePrizeTypes:number[] = [];
		@Field.d(8, "int32", "optional")
		rewardMode:number = 0;
		@Field.d(9, "int32", "optional")
		mungNum:number = 0;
		@Field.d(10, "int32", "optional")
		type:number = 0;
		@Field.d(11, "int32", "optional")
		price:number = 0;
} 
@Type.d("Type_tss_match_common_list_proto_VIPExtraPrizeInfo") 
export class VIPExtraPrizeInfo extends Message<VIPExtraPrizeInfo> { 
	constructor(param?: Properties<VIPExtraPrizeInfo>) {  
		super(); 
		if (param) { 
			this.levelBegin = param.levelBegin!
			this.levelEnd = param.levelEnd!
			this.ratio = param.ratio!
			this.prizes = param.prizes!
			} 
		} 
		@Field.d(1, "int32", "optional")
		levelBegin:number = 0;
		@Field.d(2, "int32", "optional")
		levelEnd:number = 0;
		@Field.d(3, "int32", "optional")
		ratio:number = 0;
		@Field.d(5, PrizeDetailInfo, "repeated")
		prizes:PrizeDetailInfo[] = [];
} 
@Type.d("Type_tss_match_common_list_proto_RankPrizeInfo") 
export class RankPrizeInfo extends Message<RankPrizeInfo> { 
	constructor(param?: Properties<RankPrizeInfo>) {  
		super(); 
		if (param) { 
			this.start = param.start!
			this.end = param.end!
			this.prizes = param.prizes!
			this.vipPrizes = param.vipPrizes!
			} 
		} 
		@Field.d(1, "int32", "optional")
		start:number = 0;
		@Field.d(2, "int32", "optional")
		end:number = 0;
		@Field.d(3, PrizeDetailInfo, "repeated")
		prizes:PrizeDetailInfo[] = [];
		@Field.d(4, VIPExtraPrizeInfo, "repeated")
		vipPrizes:VIPExtraPrizeInfo[] = [];
} 
@Type.d("Type_tss_match_common_list_proto_AssetCheckConf") 
export class AssetCheckConf extends Message<AssetCheckConf> { 
	constructor(param?: Properties<AssetCheckConf>) {  
		super(); 
		if (param) { 
			this.enabled = param.enabled!
			this.checkPropId = param.checkPropId!
			this.checkPropNum = param.checkPropNum!
			this.signUpType = param.signUpType!
			this.signUpPropId = param.signUpPropId!
			this.signUpPropNum = param.signUpPropNum!
			this.signUpDiamondNum = param.signUpDiamondNum!
			this.signUpPropName = param.signUpPropName!
			this.signUpPropIcon = param.signUpPropIcon!
			} 
		} 
		@Field.d(1, "bool", "optional")
		enabled:boolean = false;
		@Field.d(2, "int32", "optional")
		checkPropId:number = 0;
		@Field.d(3, "int32", "optional")
		checkPropNum:number = 0;
		@Field.d(4, SignUpTyp, "optional")
		signUpType:SignUpTyp = 0;
		@Field.d(5, "int32", "optional")
		signUpPropId:number = 0;
		@Field.d(6, "int32", "optional")
		signUpPropNum:number = 0;
		@Field.d(7, "int32", "optional")
		signUpDiamondNum:number = 0;
		@Field.d(8, "string", "optional")
		signUpPropName:string = "";
		@Field.d(9, "string", "optional")
		signUpPropIcon:string = "";
} 
@Type.d("Type_tss_match_common_list_proto_SignUpInfo") 
export class SignUpInfo extends Message<SignUpInfo> { 
	constructor(param?: Properties<SignUpInfo>) {  
		super(); 
		if (param) { 
			this.signUpType = param.signUpType!
			this.EXPLevel = param.EXPLevel!
			this.VIPLevel = param.VIPLevel!
			this.propID = param.propID!
			this.propNum = param.propNum!
			this.diamondNum = param.diamondNum!
			this.deadlineSec = param.deadlineSec!
			this.propName = param.propName!
			this.propIcon = param.propIcon!
			this.mungNum = param.mungNum!
			this.assetCheck = new AssetCheckConf(param.assetCheck!)
			this.propType = param.propType!
			this.propPrice = param.propPrice!
			} 
		} 
		@Field.d(1, SignUpTyp, "optional")
		signUpType:SignUpTyp = 0;
		@Field.d(2, "int32", "optional")
		EXPLevel:number = 0;
		@Field.d(3, "int32", "optional")
		VIPLevel:number = 0;
		@Field.d(4, "int32", "optional")
		propID:number = 0;
		@Field.d(5, "int32", "optional")
		propNum:number = 0;
		@Field.d(6, "int32", "optional")
		diamondNum:number = 0;
		@Field.d(7, "int64", "optional")
		deadlineSec:number = 0;
		@Field.d(8, "string", "optional")
		propName:string = "";
		@Field.d(9, "string", "optional")
		propIcon:string = "";
		@Field.d(10, "int32", "optional")
		mungNum:number = 0;
		@Field.d(11, AssetCheckConf, "optional")
		assetCheck:AssetCheckConf =  new AssetCheckConf();
		@Field.d(12, "int32", "optional")
		propType:number = 0;
		@Field.d(13, "int32", "optional")
		propPrice:number = 0;
} 
@Type.d("Type_tss_match_common_list_proto_SeriesInfo") 
export class SeriesInfo extends Message<SeriesInfo> { 
	constructor(param?: Properties<SeriesInfo>) {  
		super(); 
		if (param) { 
			this.seriesKey = param.seriesKey!
			this.seriesScheduleName = param.seriesScheduleName!
			this.nextScheduleStartTime = param.nextScheduleStartTime!
			} 
		} 
		@Field.d(1, "string", "optional")
		seriesKey:string = "";
		@Field.d(2, "string", "optional")
		seriesScheduleName:string = "";
		@Field.d(3, "int64", "optional")
		nextScheduleStartTime:number = 0;
} 
@Type.d("Type_tss_match_common_list_proto_FastMatchSignUpLimit") 
export class FastMatchSignUpLimit extends Message<FastMatchSignUpLimit> { 
	constructor(param?: Properties<FastMatchSignUpLimit>) {  
		super(); 
		if (param) { 
			this.signUpLimitState = param.signUpLimitState!
			this.limitNum = param.limitNum!
			} 
		} 
		@Field.d(1, SignUpLimitState, "optional")
		signUpLimitState:SignUpLimitState = 0;
		@Field.d(2, "int64", "optional")
		limitNum:number = 0;
} 
@Type.d("Type_tss_match_common_list_proto_DelayEntryInfo") 
export class DelayEntryInfo extends Message<DelayEntryInfo> { 
	constructor(param?: Properties<DelayEntryInfo>) {  
		super(); 
		if (param) { 
			this.isEnabled = param.isEnabled!
			this.delaySec = param.delaySec!
			this.isOnlyFirstStageEnabled = param.isOnlyFirstStageEnabled!
			} 
		} 
		@Field.d(1, "bool", "optional")
		isEnabled:boolean = false;
		@Field.d(2, "int32", "optional")
		delaySec:number = 0;
		@Field.d(3, "bool", "optional")
		isOnlyFirstStageEnabled:boolean = false;
} 
@Type.d("Type_tss_match_common_list_proto_MatchInfo") 
export class MatchInfo extends Message<MatchInfo> { 
	constructor(param?: Properties<MatchInfo>) {  
		super(); 
		if (param) { 
			this.preMatchKey = param.preMatchKey!
			this.gameID = param.gameID!
			this.displayURL = param.displayURL!
			this.startTime = param.startTime!
			this.signedNum = param.signedNum!
			this.matchName = param.matchName!
			this.leftSec = param.leftSec!
			this.matchKitVer = param.matchKitVer!
			this.matchID = param.matchID!
			this.hasWhitelist = param.hasWhitelist!
			this.isRevival = param.isRevival!
			this.fixedStartTimeDesc = param.fixedStartTimeDesc!
			this.matchState = param.matchState!
			this.creatorUID = param.creatorUID!
			this.matchMinNum = param.matchMinNum!
			this.revivalType = param.revivalType!
			this.signedUsers = param.signedUsers!
			this.gameName = param.gameName!
			this.gameIcon = param.gameIcon!
			this.tabs = param.tabs!
			this.joinedUsers = param.joinedUsers!
			this.prizeRing = param.prizeRing!
			this.hasObserve = param.hasObserve!
			this.readySec = param.readySec!
			this.signedFriends = param.signedFriends!
			this.signedFriendNum = param.signedFriendNum!
			this.joinNum = param.joinNum!
			this.srvName = param.srvName!
			this.srvID = param.srvID!
			this.matchType = param.matchType!
			this.endTime = param.endTime!
			this.matchKey = param.matchKey!
			this.estimatedTime = param.estimatedTime!
			this.entranceBorderImg = param.entranceBorderImg!
			this.expcMatchingSec = param.expcMatchingSec!
			this.subMatchType = param.subMatchType!
			this.gameType = param.gameType!
			this.userState = param.userState!
			this.listTags = param.listTags!
			this.extraPrizeMode = param.extraPrizeMode!
			this.extraPrizeType = param.extraPrizeType!
			this.cardStyleType = param.cardStyleType!
			this.rankPrizes = param.rankPrizes!
			this.signUpInfo = new SignUpInfo(param.signUpInfo!)
			this.seriesInfo = new SeriesInfo(param.seriesInfo!)
			this.fastMatchSignUpLimit = new FastMatchSignUpLimit(param.fastMatchSignUpLimit!)
			this.matchCfgTag = param.matchCfgTag!
			this.roundNum = param.roundNum!
			this.userGroupType = param.userGroupType!
			this.rewardPoolMungNum = param.rewardPoolMungNum!
			this.canSignUp = param.canSignUp!
			this.miniDisplayURL = param.miniDisplayURL!
			this.prizeMode = param.prizeMode!
			this.immediatelyMungNum = param.immediatelyMungNum!
			this.delayEntryInfo = new DelayEntryInfo(param.delayEntryInfo!)
			this.seq = param.seq!
			} 
		} 
		@Field.d(1, "string", "optional")
		preMatchKey:string = "";
		@Field.d(2, "string", "optional")
		gameID:string = "";
		@Field.d(3, "string", "optional")
		displayURL:string = "";
		@Field.d(4, "int64", "optional")
		startTime:number = 0;
		@Field.d(5, "int32", "optional")
		signedNum:number = 0;
		@Field.d(6, "string", "optional")
		matchName:string = "";
		@Field.d(7, "int64", "optional")
		leftSec:number = 0;
		@Field.d(8, "string", "optional")
		matchKitVer:string = "";
		@Field.d(9, "int64", "optional")
		matchID:number = 0;
		@Field.d(10, "bool", "optional")
		hasWhitelist:boolean = false;
		@Field.d(11, "bool", "optional")
		isRevival:boolean = false;
		@Field.d(12, "string", "optional")
		fixedStartTimeDesc:string = "";
		@Field.d(13, "int32", "optional")
		matchState:number = 0;
		@Field.d(14, "int64", "optional")
		creatorUID:number = 0;
		@Field.d(15, "int32", "optional")
		matchMinNum:number = 0;
		@Field.d(16, "int32", "optional")
		revivalType:number = 0;
		@Field.d(17, "int64", "repeated")
		signedUsers:number[] = [];
		@Field.d(18, "string", "optional")
		gameName:string = "";
		@Field.d(19, "string", "optional")
		gameIcon:string = "";
		@Field.d(20, "string", "repeated")
		tabs:string[] = [];
		@Field.d(21, "int64", "repeated")
		joinedUsers:number[] = [];
		@Field.d(22, "int32", "optional")
		prizeRing:number = 0;
		@Field.d(23, "bool", "optional")
		hasObserve:boolean = false;
		@Field.d(24, "int32", "optional")
		readySec:number = 0;
		@Field.d(25, "int64", "repeated")
		signedFriends:number[] = [];
		@Field.d(26, "int32", "optional")
		signedFriendNum:number = 0;
		@Field.d(27, "int32", "optional")
		joinNum:number = 0;
		@Field.d(28, "string", "optional")
		srvName:string = "";
		@Field.d(29, "uint32", "optional")
		srvID:number = 0;
		@Field.d(30, "int32", "optional")
		matchType:number = 0;
		@Field.d(31, "int64", "optional")
		endTime:number = 0;
		@Field.d(32, "string", "optional")
		matchKey:string = "";
		@Field.d(33, "string", "optional")
		estimatedTime:string = "";
		@Field.d(34, "string", "optional")
		entranceBorderImg:string = "";
		@Field.d(35, "int32", "optional")
		expcMatchingSec:number = 0;
		@Field.d(36, SubMatchTyp, "optional")
		subMatchType:SubMatchTyp = 0;
		@Field.d(37, GameType, "optional")
		gameType:GameType = 0;
		@Field.d(38, UserState, "optional")
		userState:UserState = 0;
		@Field.d(39, ListTagType, "repeated")
		listTags:ListTagType[] = [];
		@Field.d(40, VIPPrizeMode, "optional")
		extraPrizeMode:VIPPrizeMode = 0;
		@Field.d(41, VIPPrizeType, "optional")
		extraPrizeType:VIPPrizeType = 0;
		@Field.d(45, CardStyleType, "optional")
		cardStyleType:CardStyleType = 0;
		@Field.d(42, RankPrizeInfo, "repeated")
		rankPrizes:RankPrizeInfo[] = [];
		@Field.d(43, SignUpInfo, "optional")
		signUpInfo:SignUpInfo =  new SignUpInfo();
		@Field.d(44, SeriesInfo, "optional")
		seriesInfo:SeriesInfo =  new SeriesInfo();
		@Field.d(46, FastMatchSignUpLimit, "optional")
		fastMatchSignUpLimit:FastMatchSignUpLimit =  new FastMatchSignUpLimit();
		@Field.d(47, "string", "repeated")
		matchCfgTag:string[] = [];
		@Field.d(48, "int32", "optional")
		roundNum:number = 0;
		@Field.d(49, "int32", "optional")
		userGroupType:number = 0;
		@Field.d(50, "int32", "optional")
		rewardPoolMungNum:number = 0;
		@Field.d(51, "bool", "optional")
		canSignUp:boolean = false;
		@Field.d(52, "string", "optional")
		miniDisplayURL:string = "";
		@Field.d(53, "int32", "optional")
		prizeMode:number = 0;
		@Field.d(54, "int32", "optional")
		immediatelyMungNum:number = 0;
		@Field.d(55, DelayEntryInfo, "optional")
		delayEntryInfo:DelayEntryInfo =  new DelayEntryInfo();
		@Field.d(56, "int32", "optional")
		seq:number = 0;
} 
@Type.d("Type_tss_match_common_list_proto_TabColor") 
export class TabColor extends Message<TabColor> { 
	constructor(param?: Properties<TabColor>) {  
		super(); 
		if (param) { 
			this.gameID = param.gameID!
			this.themeColor = param.themeColor!
			this.fontColor = param.fontColor!
			} 
		} 
		@Field.d(1, "string", "optional")
		gameID:string = "";
		@Field.d(2, "string", "optional")
		themeColor:string = "";
		@Field.d(3, "string", "optional")
		fontColor:string = "";
} 
@Type.d("Type_tss_match_common_list_proto_BaseConfig") 
export class BaseConfig extends Message<BaseConfig> { 
	constructor(param?: Properties<BaseConfig>) {  
		super(); 
		if (param) { 
			this.switchableDeadline = param.switchableDeadline!
			this.tabColors = param.tabColors!
			} 
		} 
		@Field.d(1, "int32", "optional")
		switchableDeadline:number = 0;
		@Field.d(2, TabColor, "repeated")
		tabColors:TabColor[] = [];
} 
@Type.d("Type_tss_match_common_list_proto_OptionalConfig") 
export class OptionalConfig extends Message<OptionalConfig> { 
	constructor(param?: Properties<OptionalConfig>) {  
		super(); 
		if (param) { 
			this.maxRecentMatchNum = param.maxRecentMatchNum!
			this.maxMoreMatchNum = param.maxMoreMatchNum!
			this.seriesCarouselSec = param.seriesCarouselSec!
			this.isFilterCycleMatch = param.isFilterCycleMatch!
			} 
		} 
		@Field.d(1, "int32", "optional")
		maxRecentMatchNum:number = 0;
		@Field.d(3, "int32", "optional")
		maxMoreMatchNum:number = 0;
		@Field.d(5, "int32", "optional")
		seriesCarouselSec:number = 0;
		@Field.d(6, "bool", "optional")
		isFilterCycleMatch:boolean = false;
} 
@Type.d("Type_tss_match_common_list_proto_ListConfig") 
export class ListConfig extends Message<ListConfig> { 
	constructor(param?: Properties<ListConfig>) {  
		super(); 
		if (param) { 
			this.pageType = param.pageType!
			this.baseConfig = new BaseConfig(param.baseConfig!)
			this.optionalConfig = new OptionalConfig(param.optionalConfig!)
			} 
		} 
		@Field.d(1, "int32", "required")
		pageType:number = 0;
		@Field.d(2, BaseConfig, "optional")
		baseConfig:BaseConfig =  new BaseConfig();
		@Field.d(3, OptionalConfig, "optional")
		optionalConfig:OptionalConfig =  new OptionalConfig();
} 
@Type.d("Type_tss_match_common_list_proto_MatchFrequency") 
export class MatchFrequency extends Message<MatchFrequency> { 
	constructor(param?: Properties<MatchFrequency>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.gameID = param.gameID!
			this.frequency = param.frequency!
			this.lastAt = param.lastAt!
			this.lastRegularAt = param.lastRegularAt!
			this.lastRegularMatchKey = param.lastRegularMatchKey!
			this.lastMatchingAt = param.lastMatchingAt!
			this.lastMatchingMatchKey = param.lastMatchingMatchKey!
			} 
		} 
		@Field.d(1, "int64", "optional")
		uid:number = 0;
		@Field.d(2, "string", "optional")
		gameID:string = "";
		@Field.d(3, "int32", "optional")
		frequency:number = 0;
		@Field.d(4, "int64", "optional")
		lastAt:number = 0;
		@Field.d(5, "int64", "optional")
		lastRegularAt:number = 0;
		@Field.d(6, "string", "optional")
		lastRegularMatchKey:string = "";
		@Field.d(7, "int64", "optional")
		lastMatchingAt:number = 0;
		@Field.d(8, "string", "optional")
		lastMatchingMatchKey:string = "";
} 
@Type.d("Type_tss_match_common_list_proto_Template") 
export class Template extends Message<Template> { 
	constructor(param?: Properties<Template>) {  
		super(); 
		if (param) { 
			this.templateID = param.templateID!
			this.templateURL = param.templateURL!
			this.children = param.children!
			} 
		} 
		@Field.d(1, "int64", "optional")
		templateID:number = 0;
		@Field.d(2, "string", "optional")
		templateURL:string = "";
		@Field.d(3, Template, "repeated")
		children:Template[] = [];
} 
roots.decorated.lookupType("Type_tss_match_common_list_proto_Template")!.fields["children"].type = "Type_tss_match_common_list_proto_Template" 
@Type.d("Type_tss_match_common_list_proto_DisplayCard") 
export class DisplayCard extends Message<DisplayCard> { 
	constructor(param?: Properties<DisplayCard>) {  
		super(); 
		if (param) { 
			this.cardType = param.cardType!
			this.linkURL = param.linkURL!
			this.cardImg = param.cardImg!
			this.cardDesc = param.cardDesc!
			this.match = new Uint8Array(param.match!)
			} 
		} 
		@Field.d(1, CardType, "optional")
		cardType:CardType = 0;
		@Field.d(2, "string", "optional")
		linkURL:string = "";
		@Field.d(3, "string", "optional")
		cardImg:string = "";
		@Field.d(4, "string", "optional")
		cardDesc:string = "";
		@Field.d(5, "bytes", "optional")
		match:Uint8Array =  new Uint8Array();
} 
@Type.d("Type_tss_match_common_list_proto_DisplayArea") 
export class DisplayArea extends Message<DisplayArea> { 
	constructor(param?: Properties<DisplayArea>) {  
		super(); 
		if (param) { 
			this.areaName = param.areaName!
			this.carouselSec = param.carouselSec!
			this.defaultImg = param.defaultImg!
			this.defaultDesc = param.defaultDesc!
			this.areaSeq = param.areaSeq!
			this.cards = param.cards!
			this.template = new Template(param.template!)
			} 
		} 
		@Field.d(1, "string", "optional")
		areaName:string = "";
		@Field.d(2, "int32", "optional")
		carouselSec:number = 0;
		@Field.d(3, "string", "optional")
		defaultImg:string = "";
		@Field.d(4, "string", "optional")
		defaultDesc:string = "";
		@Field.d(7, "int32", "optional")
		areaSeq:number = 0;
		@Field.d(5, DisplayCard, "repeated")
		cards:DisplayCard[] = [];
		@Field.d(6, Template, "optional")
		template:Template =  new Template();
} 
@Type.d("Type_tss_match_common_list_proto_ScreenItem") 
export class ScreenItem extends Message<ScreenItem> { 
	constructor(param?: Properties<ScreenItem>) {  
		super(); 
		if (param) { 
			this.name = param.name!
			this.id = param.id!
			} 
		} 
		@Field.d(1, "string", "optional")
		name:string = "";
		@Field.d(2, "int32", "optional")
		id:number = 0;
} 
@Type.d("Type_tss_match_common_list_proto_ScreenItemGroup") 
export class ScreenItemGroup extends Message<ScreenItemGroup> { 
	constructor(param?: Properties<ScreenItemGroup>) {  
		super(); 
		if (param) { 
			this.items = param.items!
			} 
		} 
		@Field.d(1, ScreenItem, "repeated")
		items:ScreenItem[] = [];
} 
@Type.d("Type_tss_match_common_list_proto_Tab") 
export class Tab extends Message<Tab> { 
	constructor(param?: Properties<Tab>) {  
		super(); 
		if (param) { 
			this.tabName = param.tabName!
			this.tabID = param.tabID!
			this.backgroundColor = param.backgroundColor!
			this.backgroundImage = param.backgroundImage!
			this.notCheckedFontColor = param.notCheckedFontColor!
			this.checkedFontColor = param.checkedFontColor!
			this.includedMode = param.includedMode!
			this.matchIDs = param.matchIDs!
			this.classifiedModes = param.classifiedModes!
			this.seq = param.seq!
			this.tabTitleImage = param.tabTitleImage!
			this.gameIDs = param.gameIDs!
			this.groups = param.groups!
			} 
		} 
		@Field.d(1, "string", "optional")
		tabName:string = "";
		@Field.d(2, "int64", "optional")
		tabID:number = 0;
		@Field.d(3, "string", "optional")
		backgroundColor:string = "";
		@Field.d(4, "string", "optional")
		backgroundImage:string = "";
		@Field.d(5, "string", "optional")
		notCheckedFontColor:string = "";
		@Field.d(6, "string", "optional")
		checkedFontColor:string = "";
		@Field.d(7, "int32", "optional")
		includedMode:number = 0;
		@Field.d(9, "int64", "repeated")
		matchIDs:number[] = [];
		@Field.d(10, "int32", "repeated")
		classifiedModes:number[] = [];
		@Field.d(11, "int32", "optional")
		seq:number = 0;
		@Field.d(12, "string", "optional")
		tabTitleImage:string = "";
		@Field.d(13, "string", "repeated")
		gameIDs:string[] = [];
		@Field.d(14, ScreenItemGroup, "repeated")
		groups:ScreenItemGroup[] = [];
} 
@Type.d("Type_tss_match_common_list_proto_PrizeType") 
export class PrizeType extends Message<PrizeType> { 
	constructor(param?: Properties<PrizeType>) {  
		super(); 
		if (param) { 
			this.typeID = param.typeID!
			this.typeName = param.typeName!
			} 
		} 
		@Field.d(1, "int32", "optional")
		typeID:number = 0;
		@Field.d(2, "string", "optional")
		typeName:string = "";
} 
@Type.d("Type_tss_match_common_list_proto_QueryRule") 
export class QueryRule extends Message<QueryRule> { 
	constructor(param?: Properties<QueryRule>) {  
		super(); 
		if (param) { 
			this.mode = param.mode!
			this.types = param.types!
			this.prizeTypes = param.prizeTypes!
			} 
		} 
		@Field.d(1, QueryMode, "optional")
		mode:QueryMode = 0;
		@Field.d(2, "int32", "repeated")
		types:number[] = [];
		@Field.d(3, PrizeType, "repeated")
		prizeTypes:PrizeType[] = [];
} 
}
