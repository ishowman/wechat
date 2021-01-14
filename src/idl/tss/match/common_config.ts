/* eslint-disable */ 
import { rpcPlugin as byRpc ,ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace match {
export enum RuleStatus {
	RuleStatusUnknown = 0,
	RuleStatusDisable = 1,
	RuleStatusEnable = 2,
}
export enum RuleSituation {
	RuleSituationFree = 0,
	RuleSituationRunning = 1,
	RuleSituationTimeout = 2,
}
export enum OverState {
	OverStateNone = 0,
	OverStateEnd = 1,
	OverStateOut = 2,
}
export enum SchemeStatus {
	SchemeStatusUnknown = 0,
	SchemeStatusStop = 1,
	SchemeStatusPause = 2,
	SchemeStatusRunning = 3,
}
export enum MatchType {
	MatchTypeMatching = 0,
	MatchTypeRegular = 1,
	MatchTypeFast = 2,
	MatchTypeBreakthrough = 3,
	MatchTypeBettingMatch = 4,
	MatchTypeStandingMatch = 5,
}
export enum SubMatchType {
	SubMatchTypeUnknown = 0,
	SubMatchTypeSingle = 1,
	SubMatchTypeCycle = 4,
	SubMatchTypeSeries = 5,
	SubMatchTypeInvite = 9,
	SubMatchTypeFast = 16,
	SubMatchTypeBeginner = 17,
	SubMatchTypeBreakthrough = 18,
	SubMatchTypeBettingMatch = 19,
	SubMatchTypeStandingMatch = 20,
}
export enum IntervalCycleType {
	IntervalCycleTypeUnknown = 0,
	IntervalCycleTypeSingle = 1,
	IntervalCycleTypeMulti = 2,
}
export enum Weekday {
	WeekdaySunday = 0,
	WeekdayMonday = 1,
	WeekdayTuesday = 2,
	WeekdayWednesday = 3,
	WeekdayThursday = 4,
	WeekdayFriday = 5,
	WeekdaySaturday = 6,
}
export enum UserGroupType {
	UserGroupTypeUnknown = 0,
	UserGroupTypeAll = 1,
	UserGroupTypeBeginner = 2,
	UserGroupTypeBlock = 3,
}
export enum SignUpType {
	SignUpType_Unknow = 0,
	SignUpType_Free = 1,
	SignUpType_Prop = 2,
	SignUpType_VIP = 4,
	SignUpType_Diamond = 8,
	SignUpType_Mung = 16,
}
export enum PunishmentType {
	PunishmentTypeSeverity = 0,
	PunishmentTypeNormal = 1,
}
export enum ListCardStyleType {
	SmallCardStyle = 0,
	LargeCardStyle = 1,
}
export enum PrizeMode {
	PrizeModeUnKnow = 0,
	PrizeModeFixed = 1,
	PrizeModeRatio = 2,
	PrizeModeDynamicPool = 3,
	PrizeModeImmediately = 4,
}
export enum ExtraPrizeMode {
	ExtraPrizeModeDefault = 0,
	ExtraPrizeModeCustom = 1,
}
export enum ExtraPrizeType {
	ExtraPrizeTypeFixed = 0,
	ExtraPrizeTypeRatio = 1,
}
export enum RewardMode {
	PropReward = 0,
	MungReward = 1,
}
export enum ExpireType {
	ExpireTypeDefault = 0,
	ExpireTypeDays = 1,
	ExpireTypeDate = 2,
}
export enum DisplayType {
	PrizeDisplayTypeTopic = 0,
	PrizeDisplayTypePrize = 1,
}
export enum StageMode {
	StageModeUnknown = 0,
	StageModeStrike = 1,
	StageModeFinality = 2,
	StageModeFast = 3,
	StageModeBreakthrough = 4,
	StageModeStanding = 5,
}
export enum ScoreHoldMode {
	ScoreHoldModeRatio = 0,
	ScoreHoldModeRadical = 1,
	ScoreHoldModeStair = 2,
}
export enum OutScoreMode {
	OutScoreModeRatio = 0,
	OutScoreModeFixed = 1,
	OutScoreModeConst = 2,
}
export enum RatioScoreSettlementMode {
	RatioScoreSettlementModeUnknow = 0,
	RatioScoreSettlementModeConst = 1,
	RatioScoreSettlementModeRise = 2,
}
export enum ScoreSettlementMode {
	ScoreSettlementModeRatio = 0,
	ScoreSettlementModeFixed = 1,
}
export enum StrikeEndType {
	StrikeEndTypeUnknow = 0,
	StrikeEndTypeUserNum = 1,
	StrikeEndTypeTime = 2,
}
export enum RevivalType {
	RevivalTypeUnknown = 0,
	RevivalTypeProp = 1,
	RevivalTypeVip = 2,
}
export enum AllocMode {
	AllocModeRandom = 0,
	AllocModeSwiss = 1,
	AllocModeSnake = 2,
	AllocModeOnce = 3,
	AllocModeWeight = 4,
	AllocModeTeammate = 5,
	AllocModeTryOnce = 6,
}
export enum OutRuleMode {
	OutRuleModeRank = 0,
	OutRuleModeTable = 1,
	OutRuleModeResult = 2,
}
export enum ElectMode {
	ElectModeClock = 0,
	ElectModeRandom = 1,
}
export enum AddRobotMode {
	AddRobotModeNum = 0,
	AddRobotModeAuto = 1,
	AddRobotMinJoinUserNum = 2,
}
export enum SeriesStatus {
	SeriesStatusUnknown = 0,
	SeriesStatusStop = 1,
	SeriesStatusPause = 2,
	SeriesStatusRunning = 3,
}
export enum ObserveType {
	ObserveTypeTimely = 0,
	ObserveTypeDelayed = 1,
}
export enum IncludedMode {
	IncludedModeUnknown = 0,
	IncludedModeMatchType = 1,
	IncludedModeMatchID = 2,
}
export enum ClassifiedMode {
	UnknownClassifiedMode = 0,
	SingleMatchMode = 1,
	CycleMatchMode = 2,
	SeriesMatchMode = 3,
	FastMatchMode = 4,
	FreeMatchMode = 5,
	VIPMatchMode = 6,
	BreakthroughMatchMode = 7,
	BettingMatchMode = 8,
	StandingMatchMode = 9,
}
export enum SkipTabMode {
	UnknownTabSkipMode = 0,
	GotoFastMatchTab = 1,
	GotoRegularMatchTab = 2,
	GotoRecommendTab = 3,
	GotoBreakthroughTab = 4,
	GotoBettingMatchTab = 5,
	GotoStandingMatchTab = 6,
}
@Type.d("Type_tss_match_common_config_proto_DateSpan") 
export class DateSpan extends Message<DateSpan> { 
	constructor(param?: Properties<DateSpan>) {  
		super(); 
		if (param) { 
			this.start = param.start!
			this.end = param.end!
			} 
		} 
		@Field.d(1, "string", "optional")
		start:string = "";
		@Field.d(2, "string", "optional")
		end:string = "";
} 
@Type.d("Type_tss_match_common_config_proto_TimeSpan") 
export class TimeSpan extends Message<TimeSpan> { 
	constructor(param?: Properties<TimeSpan>) {  
		super(); 
		if (param) { 
			this.start = param.start!
			this.end = param.end!
			this.displayTime = param.displayTime!
			this.cyclicInterval = param.cyclicInterval!
			} 
		} 
		@Field.d(1, "string", "optional")
		start:string = "";
		@Field.d(2, "string", "optional")
		end:string = "";
		@Field.d(3, "string", "optional")
		displayTime:string = "";
		@Field.d(4, "int64", "optional")
		cyclicInterval:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_ScheduleConfig") 
export class ScheduleConfig extends Message<ScheduleConfig> { 
	constructor(param?: Properties<ScheduleConfig>) {  
		super(); 
		if (param) { 
			this.dateSpan = new DateSpan(param.dateSpan!)
			this.timeSpan = param.timeSpan!
			this.weekdays = param.weekdays!
			this.intervalDay = param.intervalDay!
			this.firstDisplayTime = param.firstDisplayTime!
			this.isCyclicDisplay = param.isCyclicDisplay!
			this.cycleType = param.cycleType!
			} 
		} 
		@Field.d(1, DateSpan, "optional")
		dateSpan:DateSpan =  new DateSpan();
		@Field.d(2, TimeSpan, "repeated")
		timeSpan:TimeSpan[] = [];
		@Field.d(3, Weekday, "repeated")
		weekdays:Weekday[] = [];
		@Field.d(4, "int32", "optional")
		intervalDay:number = 0;
		@Field.d(5, "string", "optional")
		firstDisplayTime:string = "";
		@Field.d(6, "bool", "optional")
		isCyclicDisplay:boolean = false;
		@Field.d(7, IntervalCycleType, "optional")
		cycleType:IntervalCycleType = 0;
} 
@Type.d("Type_tss_match_common_config_proto_AssetCheckConfig") 
export class AssetCheckConfig extends Message<AssetCheckConfig> { 
	constructor(param?: Properties<AssetCheckConfig>) {  
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
		@Field.d(4, SignUpType, "optional")
		signUpType:SignUpType = 0;
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
@Type.d("Type_tss_match_common_config_proto_SignUpConfig") 
export class SignUpConfig extends Message<SignUpConfig> { 
	constructor(param?: Properties<SignUpConfig>) {  
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
			this.assetCheck = new AssetCheckConfig(param.assetCheck!)
			this.propType = param.propType!
			this.propPrice = param.propPrice!
			} 
		} 
		@Field.d(1, SignUpType, "optional")
		signUpType:SignUpType = 0;
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
		@Field.d(11, AssetCheckConfig, "optional")
		assetCheck:AssetCheckConfig =  new AssetCheckConfig();
		@Field.d(12, "int32", "optional")
		propType:number = 0;
		@Field.d(13, "int32", "optional")
		propPrice:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_MatchConfig") 
export class MatchConfig extends Message<MatchConfig> { 
	constructor(param?: Properties<MatchConfig>) {  
		super(); 
		if (param) { 
			this.startTime = param.startTime!
			this.readySec = param.readySec!
			this.minNum = param.minNum!
			this.maxNum = param.maxNum!
			this.ruleDesc = param.ruleDesc!
			this.listDisplayURL = param.listDisplayURL!
			this.detailDisplayURL = param.detailDisplayURL!
			this.hasMultiField = param.hasMultiField!
			this.userNumPerField = param.userNumPerField!
			this.maxFieldNum = param.maxFieldNum!
			this.expectSec = param.expectSec!
			this.topPriority = param.topPriority!
			this.hasWhitelist = param.hasWhitelist!
			this.startTimeDesc = param.startTimeDesc!
			this.hasPunishment = param.hasPunishment!
			this.hasDynamicRule = param.hasDynamicRule!
			this.seriesKey = param.seriesKey!
			this.punishmentType = param.punishmentType!
			this.matchTags = param.matchTags!
			this.matchTabs = param.matchTabs!
			this.entranceBorderImg = param.entranceBorderImg!
			this.matchingSec = param.matchingSec!
			this.endTime = param.endTime!
			this.cardStyleType = param.cardStyleType!
			this.userGroupType = param.userGroupType!
			this.miniDisplayURL = param.miniDisplayURL!
			} 
		} 
		@Field.d(3, "int64", "optional")
		startTime:number = 0;
		@Field.d(4, "int32", "optional")
		readySec:number = 0;
		@Field.d(5, "int32", "optional")
		minNum:number = 0;
		@Field.d(6, "int32", "optional")
		maxNum:number = 0;
		@Field.d(7, "string", "optional")
		ruleDesc:string = "";
		@Field.d(8, "string", "optional")
		listDisplayURL:string = "";
		@Field.d(9, "string", "optional")
		detailDisplayURL:string = "";
		@Field.d(10, "bool", "optional")
		hasMultiField:boolean = false;
		@Field.d(11, "int32", "optional")
		userNumPerField:number = 0;
		@Field.d(12, "int32", "optional")
		maxFieldNum:number = 0;
		@Field.d(13, "int32", "optional")
		expectSec:number = 0;
		@Field.d(14, "int32", "optional")
		topPriority:number = 0;
		@Field.d(15, "bool", "optional")
		hasWhitelist:boolean = false;
		@Field.d(16, "string", "optional")
		startTimeDesc:string = "";
		@Field.d(17, "bool", "optional")
		hasPunishment:boolean = false;
		@Field.d(18, "bool", "optional")
		hasDynamicRule:boolean = false;
		@Field.d(19, "string", "optional")
		seriesKey:string = "";
		@Field.d(20, PunishmentType, "optional")
		punishmentType:PunishmentType = 0;
		@Field.d(21, "int64", "repeated")
		matchTags:number[] = [];
		@Field.d(22, "string", "repeated")
		matchTabs:string[] = [];
		@Field.d(23, "string", "optional")
		entranceBorderImg:string = "";
		@Field.d(24, "int64", "optional")
		matchingSec:number = 0;
		@Field.d(25, "int64", "optional")
		endTime:number = 0;
		@Field.d(26, ListCardStyleType, "optional")
		cardStyleType:ListCardStyleType = 0;
		@Field.d(27, UserGroupType, "optional")
		userGroupType:UserGroupType = 0;
		@Field.d(28, "string", "optional")
		miniDisplayURL:string = "";
} 
@Type.d("Type_tss_match_common_config_proto_ExchangeRule") 
export class ExchangeRule extends Message<ExchangeRule> { 
	constructor(param?: Properties<ExchangeRule>) {  
		super(); 
		if (param) { 
			this.propNum = param.propNum!
			this.exchangePrizeID = param.exchangePrizeID!
			this.exchangePrizeName = param.exchangePrizeName!
			} 
		} 
		@Field.d(1, "int32", "required")
		propNum:number = 0;
		@Field.d(2, "int32", "required")
		exchangePrizeID:number = 0;
		@Field.d(3, "string", "required")
		exchangePrizeName:string = "";
} 
@Type.d("Type_tss_match_common_config_proto_PrizeDetailConfig") 
export class PrizeDetailConfig extends Message<PrizeDetailConfig> { 
	constructor(param?: Properties<PrizeDetailConfig>) {  
		super(); 
		if (param) { 
			this.prizeID = param.prizeID!
			this.prizeNum = param.prizeNum!
			this.prizeName = param.prizeName!
			this.prizeImg = param.prizeImg!
			this.expireType = param.expireType!
			this.expireTime = param.expireTime!
			this.exChangePrizeName = param.exChangePrizeName!
			this.exChangePrizeImg = param.exChangePrizeImg!
			this.exchangePrizeTypes = param.exchangePrizeTypes!
			this.exchangeRules = param.exchangeRules!
			this.rewardMode = param.rewardMode!
			this.mungNum = param.mungNum!
			this.prizeIcon = param.prizeIcon!
			this.prizeType = param.prizeType!
			this.desc = param.desc!
			this.prizeTypeID = param.prizeTypeID!
			this.price = param.price!
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
		@Field.d(5, ExpireType, "optional")
		expireType:ExpireType = 0;
		@Field.d(6, "int64", "optional")
		expireTime:number = 0;
		@Field.d(7, "string", "optional")
		exChangePrizeName:string = "";
		@Field.d(8, "string", "optional")
		exChangePrizeImg:string = "";
		@Field.d(10, "int32", "repeated")
		exchangePrizeTypes:number[] = [];
		@Field.d(9, ExchangeRule, "repeated")
		exchangeRules:ExchangeRule[] = [];
		@Field.d(11, RewardMode, "optional")
		rewardMode:RewardMode = 0;
		@Field.d(12, "int32", "optional")
		mungNum:number = 0;
		@Field.d(13, "string", "optional")
		prizeIcon:string = "";
		@Field.d(14, "int32", "optional")
		prizeType:number = 0;
		@Field.d(15, "string", "optional")
		desc:string = "";
		@Field.d(16, "int32", "optional")
		prizeTypeID:number = 0;
		@Field.d(17, "int32", "optional")
		price:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_VIPExtraPrizeConfig") 
export class VIPExtraPrizeConfig extends Message<VIPExtraPrizeConfig> { 
	constructor(param?: Properties<VIPExtraPrizeConfig>) {  
		super(); 
		if (param) { 
			this.levelBegin = param.levelBegin!
			this.levelEnd = param.levelEnd!
			this.prizes = param.prizes!
			this.ratio = param.ratio!
			} 
		} 
		@Field.d(1, "int32", "optional")
		levelBegin:number = 0;
		@Field.d(2, "int32", "optional")
		levelEnd:number = 0;
		@Field.d(3, PrizeDetailConfig, "repeated")
		prizes:PrizeDetailConfig[] = [];
		@Field.d(5, "int32", "optional")
		ratio:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_RankPrizeConfig") 
export class RankPrizeConfig extends Message<RankPrizeConfig> { 
	constructor(param?: Properties<RankPrizeConfig>) {  
		super(); 
		if (param) { 
			this.start = param.start!
			this.end = param.end!
			this.prizeGroupName = param.prizeGroupName!
			this.prizeGroupURL = param.prizeGroupURL!
			this.prizes = param.prizes!
			this.extraPrizes = param.extraPrizes!
			} 
		} 
		@Field.d(1, "int32", "optional")
		start:number = 0;
		@Field.d(2, "int32", "optional")
		end:number = 0;
		@Field.d(3, "string", "optional")
		prizeGroupName:string = "";
		@Field.d(4, "string", "optional")
		prizeGroupURL:string = "";
		@Field.d(5, PrizeDetailConfig, "repeated")
		prizes:PrizeDetailConfig[] = [];
		@Field.d(6, VIPExtraPrizeConfig, "repeated")
		extraPrizes:VIPExtraPrizeConfig[] = [];
} 
@Type.d("Type_tss_match_common_config_proto_PrizeDisplayConfig") 
export class PrizeDisplayConfig extends Message<PrizeDisplayConfig> { 
	constructor(param?: Properties<PrizeDisplayConfig>) {  
		super(); 
		if (param) { 
			this.prizeID = param.prizeID!
			this.displayType = param.displayType!
			} 
		} 
		@Field.d(1, "int32", "optional")
		prizeID:number = 0;
		@Field.d(2, DisplayType, "optional")
		displayType:DisplayType = 0;
} 
@Type.d("Type_tss_match_common_config_proto_GuaranteePrizeConfig") 
export class GuaranteePrizeConfig extends Message<GuaranteePrizeConfig> { 
	constructor(param?: Properties<GuaranteePrizeConfig>) {  
		super(); 
		if (param) { 
			this.creatorUserPrizes = param.creatorUserPrizes!
			this.othersUserPrizes = param.othersUserPrizes!
			} 
		} 
		@Field.d(1, PrizeDetailConfig, "repeated")
		creatorUserPrizes:PrizeDetailConfig[] = [];
		@Field.d(2, PrizeDetailConfig, "repeated")
		othersUserPrizes:PrizeDetailConfig[] = [];
} 
@Type.d("Type_tss_match_common_config_proto_PrizePoolConfig") 
export class PrizePoolConfig extends Message<PrizePoolConfig> { 
	constructor(param?: Properties<PrizePoolConfig>) {  
		super(); 
		if (param) { 
			this.prizes = param.prizes!
			} 
		} 
		@Field.d(1, PrizeDetailConfig, "repeated")
		prizes:PrizeDetailConfig[] = [];
} 
@Type.d("Type_tss_match_common_config_proto_ScoreRatioPrizeConfig") 
export class ScoreRatioPrizeConfig extends Message<ScoreRatioPrizeConfig> { 
	constructor(param?: Properties<ScoreRatioPrizeConfig>) {  
		super(); 
		if (param) { 
			this.guaranteePrizeConfig = new GuaranteePrizeConfig(param.guaranteePrizeConfig!)
			this.prizePoolConfig = new PrizePoolConfig(param.prizePoolConfig!)
			} 
		} 
		@Field.d(1, GuaranteePrizeConfig, "optional")
		guaranteePrizeConfig:GuaranteePrizeConfig =  new GuaranteePrizeConfig();
		@Field.d(2, PrizePoolConfig, "optional")
		prizePoolConfig:PrizePoolConfig =  new PrizePoolConfig();
} 
@Type.d("Type_tss_match_common_config_proto_DynamicRewardPool") 
export class DynamicRewardPool extends Message<DynamicRewardPool> { 
	constructor(param?: Properties<DynamicRewardPool>) {  
		super(); 
		if (param) { 
			this.baseMungNum = param.baseMungNum!
			this.incrMungNum = param.incrMungNum!
			this.recycleRatio = param.recycleRatio!
			} 
		} 
		@Field.d(1, "int32", "optional")
		baseMungNum:number = 0;
		@Field.d(2, "int32", "optional")
		incrMungNum:number = 0;
		@Field.d(3, "int32", "optional")
		recycleRatio:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_PrizeConfig") 
export class PrizeConfig extends Message<PrizeConfig> { 
	constructor(param?: Properties<PrizeConfig>) {  
		super(); 
		if (param) { 
			this.rankPrizes = param.rankPrizes!
			this.prizeDisplayConfig = new PrizeDisplayConfig(param.prizeDisplayConfig!)
			this.mode = param.mode!
			this.scoreRatioPrizeConfig = new ScoreRatioPrizeConfig(param.scoreRatioPrizeConfig!)
			this.extraPrizeMode = param.extraPrizeMode!
			this.extraPrizeType = param.extraPrizeType!
			this.rewardPool = new DynamicRewardPool(param.rewardPool!)
			this.immediatelyMungNum = param.immediatelyMungNum!
			} 
		} 
		@Field.d(1, RankPrizeConfig, "repeated")
		rankPrizes:RankPrizeConfig[] = [];
		@Field.d(2, PrizeDisplayConfig, "optional")
		prizeDisplayConfig:PrizeDisplayConfig =  new PrizeDisplayConfig();
		@Field.d(3, PrizeMode, "optional")
		mode:PrizeMode = 0;
		@Field.d(4, ScoreRatioPrizeConfig, "optional")
		scoreRatioPrizeConfig:ScoreRatioPrizeConfig =  new ScoreRatioPrizeConfig();
		@Field.d(5, ExtraPrizeMode, "optional")
		extraPrizeMode:ExtraPrizeMode = 0;
		@Field.d(6, ExtraPrizeType, "optional")
		extraPrizeType:ExtraPrizeType = 0;
		@Field.d(12, DynamicRewardPool, "optional")
		rewardPool:DynamicRewardPool =  new DynamicRewardPool();
		@Field.d(13, "int32", "optional")
		immediatelyMungNum:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_RevivalRoundConfig") 
export class RevivalRoundConfig extends Message<RevivalRoundConfig> { 
	constructor(param?: Properties<RevivalRoundConfig>) {  
		super(); 
		if (param) { 
			this.propID = param.propID!
			this.propNum = param.propNum!
			this.revivalType = param.revivalType!
			} 
		} 
		@Field.d(1, "int32", "optional")
		propID:number = 0;
		@Field.d(2, "int32", "optional")
		propNum:number = 0;
		@Field.d(3, RevivalType, "repeated")
		revivalType:RevivalType[] = [];
} 
@Type.d("Type_tss_match_common_config_proto_RevivalConfig") 
export class RevivalConfig extends Message<RevivalConfig> { 
	constructor(param?: Properties<RevivalConfig>) {  
		super(); 
		if (param) { 
			this.isEnabled = param.isEnabled!
			this.endUserNum = param.endUserNum!
			this.totalCnt = param.totalCnt!
			this.cntPerUser = param.cntPerUser!
			this.totalUserNum = param.totalUserNum!
			this.waitSec = param.waitSec!
			this.scoreFactor = param.scoreFactor!
			this.rounds = param.rounds!
			} 
		} 
		@Field.d(1, "bool", "optional")
		isEnabled:boolean = false;
		@Field.d(2, "int32", "optional")
		endUserNum:number = 0;
		@Field.d(3, "int32", "optional")
		totalCnt:number = 0;
		@Field.d(4, "int32", "optional")
		cntPerUser:number = 0;
		@Field.d(5, "int32", "optional")
		totalUserNum:number = 0;
		@Field.d(6, "int32", "optional")
		waitSec:number = 0;
		@Field.d(7, "int32", "optional")
		scoreFactor:number = 0;
		@Field.d(8, RevivalRoundConfig, "repeated")
		rounds:RevivalRoundConfig[] = [];
} 
@Type.d("Type_tss_match_common_config_proto_FixedOutScoreConfig") 
export class FixedOutScoreConfig extends Message<FixedOutScoreConfig> { 
	constructor(param?: Properties<FixedOutScoreConfig>) {  
		super(); 
		if (param) { 
			this.initOutScore = param.initOutScore!
			this.incrOutScoreSec = param.incrOutScoreSec!
			this.incrOutScore = param.incrOutScore!
			} 
		} 
		@Field.d(1, "int32", "optional")
		initOutScore:number = 0;
		@Field.d(2, "int64", "optional")
		incrOutScoreSec:number = 0;
		@Field.d(3, "int32", "optional")
		incrOutScore:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_RatioOutScoreConfig") 
export class RatioOutScoreConfig extends Message<RatioOutScoreConfig> { 
	constructor(param?: Properties<RatioOutScoreConfig>) {  
		super(); 
		if (param) { 
			this.anteRate = param.anteRate!
			} 
		} 
		@Field.d(1, "float", "optional")
		anteRate:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_OutScoreConfig") 
export class OutScoreConfig extends Message<OutScoreConfig> { 
	constructor(param?: Properties<OutScoreConfig>) {  
		super(); 
		if (param) { 
			this.mode = param.mode!
			this.fixedMode = new FixedOutScoreConfig(param.fixedMode!)
			this.ratioMode = new RatioOutScoreConfig(param.ratioMode!)
			this.isOut = param.isOut!
			} 
		} 
		@Field.d(1, OutScoreMode, "optional")
		mode:OutScoreMode = 0;
		@Field.d(2, FixedOutScoreConfig, "optional")
		fixedMode:FixedOutScoreConfig =  new FixedOutScoreConfig();
		@Field.d(3, RatioOutScoreConfig, "optional")
		ratioMode:RatioOutScoreConfig =  new RatioOutScoreConfig();
		@Field.d(4, "bool", "optional")
		isOut:boolean = false;
} 
@Type.d("Type_tss_match_common_config_proto_FixedScoreSettlementConfig") 
export class FixedScoreSettlementConfig extends Message<FixedScoreSettlementConfig> { 
	constructor(param?: Properties<FixedScoreSettlementConfig>) {  
		super(); 
		if (param) { 
			this.winScore = param.winScore!
			this.loseScore = param.loseScore!
			this.drawScore = param.drawScore!
			} 
		} 
		@Field.d(1, "int32", "optional")
		winScore:number = 0;
		@Field.d(2, "int32", "optional")
		loseScore:number = 0;
		@Field.d(3, "int32", "optional")
		drawScore:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_RatioScoreSettlementRiseConfig") 
export class RatioScoreSettlementRiseConfig extends Message<RatioScoreSettlementRiseConfig> { 
	constructor(param?: Properties<RatioScoreSettlementRiseConfig>) {  
		super(); 
		if (param) { 
			this.incrAnteSec = param.incrAnteSec!
			this.incrAnteRate = param.incrAnteRate!
			} 
		} 
		@Field.d(1, "int32", "optional")
		incrAnteSec:number = 0;
		@Field.d(2, "float", "optional")
		incrAnteRate:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_RatioScoreSettlementConfig") 
export class RatioScoreSettlementConfig extends Message<RatioScoreSettlementConfig> { 
	constructor(param?: Properties<RatioScoreSettlementConfig>) {  
		super(); 
		if (param) { 
			this.mode = param.mode!
			this.initAnte = param.initAnte!
			this.riseConfig = new RatioScoreSettlementRiseConfig(param.riseConfig!)
			} 
		} 
		@Field.d(1, RatioScoreSettlementMode, "optional")
		mode:RatioScoreSettlementMode = 0;
		@Field.d(2, "int32", "optional")
		initAnte:number = 0;
		@Field.d(3, RatioScoreSettlementRiseConfig, "optional")
		riseConfig:RatioScoreSettlementRiseConfig =  new RatioScoreSettlementRiseConfig();
} 
@Type.d("Type_tss_match_common_config_proto_ScoreSettlementConfig") 
export class ScoreSettlementConfig extends Message<ScoreSettlementConfig> { 
	constructor(param?: Properties<ScoreSettlementConfig>) {  
		super(); 
		if (param) { 
			this.mode = param.mode!
			this.fixedMode = new FixedScoreSettlementConfig(param.fixedMode!)
			this.ratioMode = new RatioScoreSettlementConfig(param.ratioMode!)
			} 
		} 
		@Field.d(1, ScoreSettlementMode, "optional")
		mode:ScoreSettlementMode = 0;
		@Field.d(2, FixedScoreSettlementConfig, "optional")
		fixedMode:FixedScoreSettlementConfig =  new FixedScoreSettlementConfig();
		@Field.d(3, RatioScoreSettlementConfig, "optional")
		ratioMode:RatioScoreSettlementConfig =  new RatioScoreSettlementConfig();
} 
@Type.d("Type_tss_match_common_config_proto_ScoreHoldRatioConfig") 
export class ScoreHoldRatioConfig extends Message<ScoreHoldRatioConfig> { 
	constructor(param?: Properties<ScoreHoldRatioConfig>) {  
		super(); 
		if (param) { 
			this.ratioRate = param.ratioRate!
			} 
		} 
		@Field.d(1, "int32", "optional")
		ratioRate:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_ScoreHoldRadicalConfig") 
export class ScoreHoldRadicalConfig extends Message<ScoreHoldRadicalConfig> { 
	constructor(param?: Properties<ScoreHoldRadicalConfig>) {  
		super(); 
		if (param) { 
			this.radicalRate = param.radicalRate!
			} 
		} 
		@Field.d(1, "float", "optional")
		radicalRate:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_ScoreHoldStairConfig") 
export class ScoreHoldStairConfig extends Message<ScoreHoldStairConfig> { 
	constructor(param?: Properties<ScoreHoldStairConfig>) {  
		super(); 
		if (param) { 
			this.baseScore = param.baseScore!
			this.ratioRate = param.ratioRate!
			} 
		} 
		@Field.d(1, "int32", "optional")
		baseScore:number = 0;
		@Field.d(2, "int32", "repeated")
		ratioRate:number[] = [];
} 
@Type.d("Type_tss_match_common_config_proto_PromotionConfig") 
export class PromotionConfig extends Message<PromotionConfig> { 
	constructor(param?: Properties<PromotionConfig>) {  
		super(); 
		if (param) { 
			this.mode = param.mode!
			this.ratioMode = new ScoreHoldRatioConfig(param.ratioMode!)
			this.radicalMode = new ScoreHoldRadicalConfig(param.radicalMode!)
			this.promotionNum = param.promotionNum!
			this.maxTakeScore = param.maxTakeScore!
			this.isPromotion = param.isPromotion!
			this.stairMode = new ScoreHoldStairConfig(param.stairMode!)
			} 
		} 
		@Field.d(1, ScoreHoldMode, "optional")
		mode:ScoreHoldMode = 0;
		@Field.d(2, ScoreHoldRatioConfig, "optional")
		ratioMode:ScoreHoldRatioConfig =  new ScoreHoldRatioConfig();
		@Field.d(3, ScoreHoldRadicalConfig, "optional")
		radicalMode:ScoreHoldRadicalConfig =  new ScoreHoldRadicalConfig();
		@Field.d(4, "int32", "optional")
		promotionNum:number = 0;
		@Field.d(5, "int32", "optional")
		maxTakeScore:number = 0;
		@Field.d(6, "bool", "optional")
		isPromotion:boolean = false;
		@Field.d(7, ScoreHoldStairConfig, "optional")
		stairMode:ScoreHoldStairConfig =  new ScoreHoldStairConfig();
} 
@Type.d("Type_tss_match_common_config_proto_StrikeStageConfig") 
export class StrikeStageConfig extends Message<StrikeStageConfig> { 
	constructor(param?: Properties<StrikeStageConfig>) {  
		super(); 
		if (param) { 
			this.strikeEndType = param.strikeEndType!
			this.endSec = param.endSec!
			this.endUserNum = param.endUserNum!
			this.allocMode = param.allocMode!
			this.revival = new RevivalConfig(param.revival!)
			this.outScore = new OutScoreConfig(param.outScore!)
			this.scoreSettlement = new ScoreSettlementConfig(param.scoreSettlement!)
			this.stageName = param.stageName!
			this.promotionConfig = new PromotionConfig(param.promotionConfig!)
			} 
		} 
		@Field.d(1, StrikeEndType, "optional")
		strikeEndType:StrikeEndType = 0;
		@Field.d(2, "int64", "optional")
		endSec:number = 0;
		@Field.d(3, "int32", "optional")
		endUserNum:number = 0;
		@Field.d(4, AllocMode, "optional")
		allocMode:AllocMode = 0;
		@Field.d(5, RevivalConfig, "optional")
		revival:RevivalConfig =  new RevivalConfig();
		@Field.d(6, OutScoreConfig, "optional")
		outScore:OutScoreConfig =  new OutScoreConfig();
		@Field.d(7, ScoreSettlementConfig, "optional")
		scoreSettlement:ScoreSettlementConfig =  new ScoreSettlementConfig();
		@Field.d(8, "string", "optional")
		stageName:string = "";
		@Field.d(9, PromotionConfig, "optional")
		promotionConfig:PromotionConfig =  new PromotionConfig();
} 
@Type.d("Type_tss_match_common_config_proto_RoundConfig") 
export class RoundConfig extends Message<RoundConfig> { 
	constructor(param?: Properties<RoundConfig>) {  
		super(); 
		if (param) { 
			this.gameNum = param.gameNum!
			this.initScore = param.initScore!
			this.scoreSettlement = new ScoreSettlementConfig(param.scoreSettlement!)
			this.promotion = new PromotionConfig(param.promotion!)
			} 
		} 
		@Field.d(1, "int32", "optional")
		gameNum:number = 0;
		@Field.d(2, "int32", "optional")
		initScore:number = 0;
		@Field.d(3, ScoreSettlementConfig, "optional")
		scoreSettlement:ScoreSettlementConfig =  new ScoreSettlementConfig();
		@Field.d(4, PromotionConfig, "optional")
		promotion:PromotionConfig =  new PromotionConfig();
} 
@Type.d("Type_tss_match_common_config_proto_FinalityStageConfig") 
export class FinalityStageConfig extends Message<FinalityStageConfig> { 
	constructor(param?: Properties<FinalityStageConfig>) {  
		super(); 
		if (param) { 
			this.allocMode = param.allocMode!
			this.electMode = param.electMode!
			this.outRuleMode = param.outRuleMode!
			this.isSwapSeat = param.isSwapSeat!
			this.rounds = param.rounds!
			this.isExtraGame = param.isExtraGame!
			this.stageName = param.stageName!
			} 
		} 
		@Field.d(1, AllocMode, "optional")
		allocMode:AllocMode = 0;
		@Field.d(2, ElectMode, "optional")
		electMode:ElectMode = 0;
		@Field.d(3, OutRuleMode, "optional")
		outRuleMode:OutRuleMode = 0;
		@Field.d(4, "bool", "optional")
		isSwapSeat:boolean = false;
		@Field.d(5, RoundConfig, "repeated")
		rounds:RoundConfig[] = [];
		@Field.d(6, "bool", "optional")
		isExtraGame:boolean = false;
		@Field.d(7, "string", "optional")
		stageName:string = "";
} 
@Type.d("Type_tss_match_common_config_proto_FastRoundPrize") 
export class FastRoundPrize extends Message<FastRoundPrize> { 
	constructor(param?: Properties<FastRoundPrize>) {  
		super(); 
		if (param) { 
			this.prizes = new PrizeDetailConfig(param.prizes!)
			this.seq = param.seq!
			} 
		} 
		@Field.d(1, PrizeDetailConfig, "optional")
		prizes:PrizeDetailConfig =  new PrizeDetailConfig();
		@Field.d(2, "int32", "optional")
		seq:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_MatchDifficulty") 
export class MatchDifficulty extends Message<MatchDifficulty> { 
	constructor(param?: Properties<MatchDifficulty>) {  
		super(); 
		if (param) { 
			this.base = param.base!
			this.min = param.min!
			this.max = param.max!
			} 
		} 
		@Field.d(1, "int32", "optional")
		base:number = 0;
		@Field.d(2, "int32", "optional")
		min:number = 0;
		@Field.d(3, "int32", "optional")
		max:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_FastStageConfig") 
export class FastStageConfig extends Message<FastStageConfig> { 
	constructor(param?: Properties<FastStageConfig>) {  
		super(); 
		if (param) { 
			this.outRuleMode = param.outRuleMode!
			this.rounds = param.rounds!
			this.isOpenLevel = param.isOpenLevel!
			this.levels = param.levels!
			this.isOpenPrize = param.isOpenPrize!
			this.roundPrize = param.roundPrize!
			this.isOpenRevival = param.isOpenRevival!
			this.revival = new RevivalConfig(param.revival!)
			this.difficulties = param.difficulties!
			} 
		} 
		@Field.d(1, OutRuleMode, "optional")
		outRuleMode:OutRuleMode = 0;
		@Field.d(2, RoundConfig, "repeated")
		rounds:RoundConfig[] = [];
		@Field.d(3, "bool", "optional")
		isOpenLevel:boolean = false;
		@Field.d(4, "int32", "repeated")
		levels:number[] = [];
		@Field.d(5, "bool", "optional")
		isOpenPrize:boolean = false;
		@Field.d(6, FastRoundPrize, "repeated")
		roundPrize:FastRoundPrize[] = [];
		@Field.d(7, "bool", "optional")
		isOpenRevival:boolean = false;
		@Field.d(8, RevivalConfig, "optional")
		revival:RevivalConfig =  new RevivalConfig();
		@Field.d(9, MatchDifficulty, "repeated")
		difficulties:MatchDifficulty[] = [];
} 
@Type.d("Type_tss_match_common_config_proto_BreakthroughStage") 
export class BreakthroughStage extends Message<BreakthroughStage> { 
	constructor(param?: Properties<BreakthroughStage>) {  
		super(); 
		if (param) { 
			this.outRuleMode = param.outRuleMode!
			this.isOpenReward = param.isOpenReward!
			this.roundNum = param.roundNum!
			this.roundRewards = param.roundRewards!
			this.revival = new RevivalConfig(param.revival!)
			} 
		} 
		@Field.d(1, OutRuleMode, "optional")
		outRuleMode:OutRuleMode = 0;
		@Field.d(2, "bool", "optional")
		isOpenReward:boolean = false;
		@Field.d(3, "int32", "optional")
		roundNum:number = 0;
		@Field.d(4, FastRoundPrize, "repeated")
		roundRewards:FastRoundPrize[] = [];
		@Field.d(5, RevivalConfig, "optional")
		revival:RevivalConfig =  new RevivalConfig();
} 
@Type.d("Type_tss_match_common_config_proto_StageConfig") 
export class StageConfig extends Message<StageConfig> { 
	constructor(param?: Properties<StageConfig>) {  
		super(); 
		if (param) { 
			this.stageMode = param.stageMode!
			this.strikeStage = new StrikeStageConfig(param.strikeStage!)
			this.finalityStage = new FinalityStageConfig(param.finalityStage!)
			this.fastStage = new FastStageConfig(param.fastStage!)
			this.breakthroughStage = new BreakthroughStage(param.breakthroughStage!)
			} 
		} 
		@Field.d(1, StageMode, "optional")
		stageMode:StageMode = 0;
		@Field.d(2, StrikeStageConfig, "optional")
		strikeStage:StrikeStageConfig =  new StrikeStageConfig();
		@Field.d(3, FinalityStageConfig, "optional")
		finalityStage:FinalityStageConfig =  new FinalityStageConfig();
		@Field.d(4, FastStageConfig, "optional")
		fastStage:FastStageConfig =  new FastStageConfig();
		@Field.d(5, BreakthroughStage, "optional")
		breakthroughStage:BreakthroughStage =  new BreakthroughStage();
} 
@Type.d("Type_tss_match_common_config_proto_RuleConfig") 
export class RuleConfig extends Message<RuleConfig> { 
	constructor(param?: Properties<RuleConfig>) {  
		super(); 
		if (param) { 
			this.gameID = param.gameID!
			this.ruleID = param.ruleID!
			this.ruleName = param.ruleName!
			this.matchKitVer = param.matchKitVer!
			this.ruleStatus = param.ruleStatus!
			this.updateTime = param.updateTime!
			this.tags = param.tags!
			this.updateOwner = param.updateOwner!
			this.initScore = param.initScore!
			this.stages = param.stages!
			} 
		} 
		@Field.d(1, "string", "optional")
		gameID:string = "";
		@Field.d(2, "int64", "optional")
		ruleID:number = 0;
		@Field.d(3, "string", "optional")
		ruleName:string = "";
		@Field.d(4, "string", "optional")
		matchKitVer:string = "";
		@Field.d(5, "int32", "optional")
		ruleStatus:number = 0;
		@Field.d(6, "int64", "optional")
		updateTime:number = 0;
		@Field.d(7, "string", "repeated")
		tags:string[] = [];
		@Field.d(8, "string", "optional")
		updateOwner:string = "";
		@Field.d(9, "int32", "optional")
		initScore:number = 0;
		@Field.d(10, StageConfig, "repeated")
		stages:StageConfig[] = [];
} 
@Type.d("Type_tss_match_common_config_proto_RobotConfig") 
export class RobotConfig extends Message<RobotConfig> { 
	constructor(param?: Properties<RobotConfig>) {  
		super(); 
		if (param) { 
			this.isEnabled = param.isEnabled!
			this.addRobotMode = param.addRobotMode!
			this.addNum = param.addNum!
			this.minJoinUserNum = param.minJoinUserNum!
			} 
		} 
		@Field.d(1, "bool", "optional")
		isEnabled:boolean = false;
		@Field.d(2, AddRobotMode, "optional")
		addRobotMode:AddRobotMode = 0;
		@Field.d(3, "int32", "optional")
		addNum:number = 0;
		@Field.d(4, "int32", "optional")
		minJoinUserNum:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_ChatRoomConfig") 
export class ChatRoomConfig extends Message<ChatRoomConfig> { 
	constructor(param?: Properties<ChatRoomConfig>) {  
		super(); 
		if (param) { 
			this.isEnabled = param.isEnabled!
			this.openSec = param.openSec!
			this.closedSec = param.closedSec!
			this.background = param.background!
			this.chatID = param.chatID!
			} 
		} 
		@Field.d(1, "bool", "optional")
		isEnabled:boolean = false;
		@Field.d(2, "int64", "optional")
		openSec:number = 0;
		@Field.d(3, "int64", "optional")
		closedSec:number = 0;
		@Field.d(4, "string", "optional")
		background:string = "";
		@Field.d(5, "string", "optional")
		chatID:string = "";
} 
@Type.d("Type_tss_match_common_config_proto_ObserveConfig") 
export class ObserveConfig extends Message<ObserveConfig> { 
	constructor(param?: Properties<ObserveConfig>) {  
		super(); 
		if (param) { 
			this.hasObserve = param.hasObserve!
			this.observeType = param.observeType!
			this.delayedSec = param.delayedSec!
			this.hasVisible = param.hasVisible!
			} 
		} 
		@Field.d(1, "bool", "optional")
		hasObserve:boolean = false;
		@Field.d(2, ObserveType, "optional")
		observeType:ObserveType = 0;
		@Field.d(3, "int32", "optional")
		delayedSec:number = 0;
		@Field.d(4, "bool", "optional")
		hasVisible:boolean = false;
} 
@Type.d("Type_tss_match_common_config_proto_PreventCheatConfig") 
export class PreventCheatConfig extends Message<PreventCheatConfig> { 
	constructor(param?: Properties<PreventCheatConfig>) {  
		super(); 
		if (param) { 
			this.isPreventCheat = param.isPreventCheat!
			this.isHideUserInfo = param.isHideUserInfo!
			this.isCheckIPLocation = param.isCheckIPLocation!
			this.isCheckLBSLocation = param.isCheckLBSLocation!
			this.LBSCheckDistance = param.LBSCheckDistance!
			this.isAllowProp = param.isAllowProp!
			this.isEnabledMinMatchingUser = param.isEnabledMinMatchingUser!
			this.minMatchingUserNum = param.minMatchingUserNum!
			} 
		} 
		@Field.d(1, "bool", "optional")
		isPreventCheat:boolean = false;
		@Field.d(2, "bool", "optional")
		isHideUserInfo:boolean = false;
		@Field.d(3, "bool", "optional")
		isCheckIPLocation:boolean = false;
		@Field.d(4, "bool", "optional")
		isCheckLBSLocation:boolean = false;
		@Field.d(5, "int32", "optional")
		LBSCheckDistance:number = 0;
		@Field.d(6, "bool", "optional")
		isAllowProp:boolean = false;
		@Field.d(7, "bool", "optional")
		isEnabledMinMatchingUser:boolean = false;
		@Field.d(8, "int32", "optional")
		minMatchingUserNum:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_DelayEntryConfig") 
export class DelayEntryConfig extends Message<DelayEntryConfig> { 
	constructor(param?: Properties<DelayEntryConfig>) {  
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
@Type.d("Type_tss_match_common_config_proto_SchemeConfig") 
export class SchemeConfig extends Message<SchemeConfig> { 
	constructor(param?: Properties<SchemeConfig>) {  
		super(); 
		if (param) { 
			this.gameID = param.gameID!
			this.ruleID = param.ruleID!
			this.schemeID = param.schemeID!
			this.schemeName = param.schemeName!
			this.schemeStatus = param.schemeStatus!
			this.updateTime = param.updateTime!
			this.updateOwner = param.updateOwner!
			this.subMatchType = param.subMatchType!
			this.isForBeginner = param.isForBeginner!
			this.scheduleConfig = new ScheduleConfig(param.scheduleConfig!)
			this.signUpConfig = new SignUpConfig(param.signUpConfig!)
			this.matchConfig = new MatchConfig(param.matchConfig!)
			this.prizeConfig = new PrizeConfig(param.prizeConfig!)
			this.robotConfig = new RobotConfig(param.robotConfig!)
			this.chatRoomConfig = new ChatRoomConfig(param.chatRoomConfig!)
			this.tags = param.tags!
			this.seriesID = param.seriesID!
			this.seriesName = param.seriesName!
			this.observeConfig = new ObserveConfig(param.observeConfig!)
			this.preventCheatConfig = new PreventCheatConfig(param.preventCheatConfig!)
			this.matchCfgTag = param.matchCfgTag!
			this.delayEntryConfig = new DelayEntryConfig(param.delayEntryConfig!)
			} 
		} 
		@Field.d(1, "string", "optional")
		gameID:string = "";
		@Field.d(2, "int64", "optional")
		ruleID:number = 0;
		@Field.d(3, "int64", "optional")
		schemeID:number = 0;
		@Field.d(4, "string", "optional")
		schemeName:string = "";
		@Field.d(5, SchemeStatus, "optional")
		schemeStatus:SchemeStatus = 0;
		@Field.d(7, "int64", "optional")
		updateTime:number = 0;
		@Field.d(8, "string", "optional")
		updateOwner:string = "";
		@Field.d(9, SubMatchType, "optional")
		subMatchType:SubMatchType = 0;
		@Field.d(10, "bool", "optional")
		isForBeginner:boolean = false;
		@Field.d(15, ScheduleConfig, "optional")
		scheduleConfig:ScheduleConfig =  new ScheduleConfig();
		@Field.d(16, SignUpConfig, "optional")
		signUpConfig:SignUpConfig =  new SignUpConfig();
		@Field.d(17, MatchConfig, "optional")
		matchConfig:MatchConfig =  new MatchConfig();
		@Field.d(18, PrizeConfig, "optional")
		prizeConfig:PrizeConfig =  new PrizeConfig();
		@Field.d(19, RobotConfig, "optional")
		robotConfig:RobotConfig =  new RobotConfig();
		@Field.d(20, ChatRoomConfig, "optional")
		chatRoomConfig:ChatRoomConfig =  new ChatRoomConfig();
		@Field.d(21, "string", "repeated")
		tags:string[] = [];
		@Field.d(22, "int64", "optional")
		seriesID:number = 0;
		@Field.d(25, "string", "optional")
		seriesName:string = "";
		@Field.d(23, ObserveConfig, "optional")
		observeConfig:ObserveConfig =  new ObserveConfig();
		@Field.d(24, PreventCheatConfig, "optional")
		preventCheatConfig:PreventCheatConfig =  new PreventCheatConfig();
		@Field.d(26, "string", "repeated")
		matchCfgTag:string[] = [];
		@Field.d(27, DelayEntryConfig, "optional")
		delayEntryConfig:DelayEntryConfig =  new DelayEntryConfig();
} 
@Type.d("Type_tss_match_common_config_proto_WhiteListUser") 
export class WhiteListUser extends Message<WhiteListUser> { 
	constructor(param?: Properties<WhiteListUser>) {  
		super(); 
		if (param) { 
			this.userName = param.userName!
			this.uids = param.uids!
			} 
		} 
		@Field.d(1, "string", "optional")
		userName:string = "";
		@Field.d(2, "int64", "repeated")
		uids:number[] = [];
} 
@Type.d("Type_tss_match_common_config_proto_SeriesScheduleConfig") 
export class SeriesScheduleConfig extends Message<SeriesScheduleConfig> { 
	constructor(param?: Properties<SeriesScheduleConfig>) {  
		super(); 
		if (param) { 
			this.seriesScheduleSeq = param.seriesScheduleSeq!
			this.seriesScheduleName = param.seriesScheduleName!
			this.schemeID = param.schemeID!
			this.schemeName = param.schemeName!
			this.startTime = param.startTime!
			this.ruleID = param.ruleID!
			this.promotionNum = param.promotionNum!
			} 
		} 
		@Field.d(1, "int32", "optional")
		seriesScheduleSeq:number = 0;
		@Field.d(2, "string", "optional")
		seriesScheduleName:string = "";
		@Field.d(3, "int64", "optional")
		schemeID:number = 0;
		@Field.d(4, "string", "optional")
		schemeName:string = "";
		@Field.d(5, "int64", "optional")
		startTime:number = 0;
		@Field.d(6, "int64", "optional")
		ruleID:number = 0;
		@Field.d(7, "int32", "optional")
		promotionNum:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_SeriesConfig") 
export class SeriesConfig extends Message<SeriesConfig> { 
	constructor(param?: Properties<SeriesConfig>) {  
		super(); 
		if (param) { 
			this.seriesID = param.seriesID!
			this.gameID = param.gameID!
			this.scheduleNum = param.scheduleNum!
			this.updateTime = param.updateTime!
			this.updateOwner = param.updateOwner!
			this.seriesSchedules = param.seriesSchedules!
			this.seriesStatus = param.seriesStatus!
			this.hasWhitelist = param.hasWhitelist!
			this.signUpConfig = new SignUpConfig(param.signUpConfig!)
			this.chatRoomConfig = new ChatRoomConfig(param.chatRoomConfig!)
			this.seriesName = param.seriesName!
			this.users = param.users!
			} 
		} 
		@Field.d(1, "int64", "optional")
		seriesID:number = 0;
		@Field.d(2, "string", "optional")
		gameID:string = "";
		@Field.d(3, "int32", "optional")
		scheduleNum:number = 0;
		@Field.d(4, "int64", "optional")
		updateTime:number = 0;
		@Field.d(5, "string", "optional")
		updateOwner:string = "";
		@Field.d(6, SeriesScheduleConfig, "repeated")
		seriesSchedules:SeriesScheduleConfig[] = [];
		@Field.d(7, SeriesStatus, "optional")
		seriesStatus:SeriesStatus = 0;
		@Field.d(8, "bool", "optional")
		hasWhitelist:boolean = false;
		@Field.d(9, SignUpConfig, "optional")
		signUpConfig:SignUpConfig =  new SignUpConfig();
		@Field.d(10, ChatRoomConfig, "optional")
		chatRoomConfig:ChatRoomConfig =  new ChatRoomConfig();
		@Field.d(11, "string", "optional")
		seriesName:string = "";
		@Field.d(12, "int64", "repeated")
		users:number[] = [];
} 
@Type.d("Type_tss_match_common_config_proto_GameConfig") 
export class GameConfig extends Message<GameConfig> { 
	constructor(param?: Properties<GameConfig>) {  
		super(); 
		if (param) { 
			this.gameID = param.gameID!
			this.seatCnt = param.seatCnt!
			this.gameDeadline = param.gameDeadline!
			this.healthCheckTime = param.healthCheckTime!
			this.punishNorm = param.punishNorm!
			this.gameName = param.gameName!
			this.icon = param.icon!
			this.slogan = param.slogan!
			this.gameType = param.gameType!
			} 
		} 
		@Field.d(1, "string", "optional")
		gameID:string = "";
		@Field.d(2, "int32", "optional")
		seatCnt:number = 0;
		@Field.d(3, "int32", "optional")
		gameDeadline:number = 0;
		@Field.d(4, "int32", "optional")
		healthCheckTime:number = 0;
		@Field.d(5, "int32", "optional")
		punishNorm:number = 0;
		@Field.d(6, "string", "optional")
		gameName:string = "";
		@Field.d(7, "string", "optional")
		icon:string = "";
		@Field.d(8, "string", "optional")
		slogan:string = "";
		@Field.d(9, "int32", "optional")
		gameType:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_SeriesScheduleInfo") 
export class SeriesScheduleInfo extends Message<SeriesScheduleInfo> { 
	constructor(param?: Properties<SeriesScheduleInfo>) {  
		super(); 
		if (param) { 
			this.seriesScheduleSeq = param.seriesScheduleSeq!
			this.seriesScheduleName = param.seriesScheduleName!
			this.nextScheduleName = param.nextScheduleName!
			this.promotionNum = param.promotionNum!
			} 
		} 
		@Field.d(1, "int32", "optional")
		seriesScheduleSeq:number = 0;
		@Field.d(2, "string", "optional")
		seriesScheduleName:string = "";
		@Field.d(3, "string", "optional")
		nextScheduleName:string = "";
		@Field.d(4, "int32", "optional")
		promotionNum:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_StartTimeSpan") 
export class StartTimeSpan extends Message<StartTimeSpan> { 
	constructor(param?: Properties<StartTimeSpan>) {  
		super(); 
		if (param) { 
			this.start = param.start!
			this.end = param.end!
			this.startTime = param.startTime!
			this.endTime = param.endTime!
			this.isLastSpan = param.isLastSpan!
			} 
		} 
		@Field.d(1, "string", "optional")
		start:string = "";
		@Field.d(2, "string", "optional")
		end:string = "";
		@Field.d(3, "int64", "optional")
		startTime:number = 0;
		@Field.d(4, "int64", "optional")
		endTime:number = 0;
		@Field.d(5, "bool", "optional")
		isLastSpan:boolean = false;
} 
@Type.d("Type_tss_match_common_config_proto_MatchConfigInfo") 
export class MatchConfigInfo extends Message<MatchConfigInfo> { 
	constructor(param?: Properties<MatchConfigInfo>) {  
		super(); 
		if (param) { 
			this.matchKey = param.matchKey!
			this.matchID = param.matchID!
			this.matchName = param.matchName!
			this.matchKitVer = param.matchKitVer!
			this.matchState = param.matchState!
			this.matchEndTime = param.matchEndTime!
			this.matchSrvName = param.matchSrvName!
			this.matchSrvID = param.matchSrvID!
			this.ruleID = param.ruleID!
			this.schemeStatus = param.schemeStatus!
			this.initScore = param.initScore!
			this.subMatchType = param.subMatchType!
			this.matchType = param.matchType!
			this.phaseSeq = param.phaseSeq!
			this.canSignUp = param.canSignUp!
			this.totalRoundNum = param.totalRoundNum!
			this.listTags = param.listTags!
			this.matchDetail = new MatchConfig(param.matchDetail!)
			this.signUpConfig = new SignUpConfig(param.signUpConfig!)
			this.robotConfig = new RobotConfig(param.robotConfig!)
			this.chatRoomConfig = new ChatRoomConfig(param.chatRoomConfig!)
			this.prizeConfig = new PrizeConfig(param.prizeConfig!)
			this.stages = param.stages!
			this.gameConfig = new GameConfig(param.gameConfig!)
			this.seriesID = param.seriesID!
			this.seriesSchedule = new SeriesScheduleInfo(param.seriesSchedule!)
			this.observeConfig = new ObserveConfig(param.observeConfig!)
			this.creatorUID = param.creatorUID!
			this.preventCheatConfig = new PreventCheatConfig(param.preventCheatConfig!)
			this.roundPrizes = param.roundPrizes!
			this.matchCfgTag = param.matchCfgTag!
			this.startSpan = new StartTimeSpan(param.startSpan!)
			this.joinMatchNeedPropNum = param.joinMatchNeedPropNum!
			this.rewardPoolMungNum = param.rewardPoolMungNum!
			this.delayEntryConfig = new DelayEntryConfig(param.delayEntryConfig!)
			this.prizeRing = param.prizeRing!
			} 
		} 
		@Field.d(1, "string", "repeated")
		matchKey:string[] = [];
		@Field.d(2, "string", "optional")
		matchID:string = "";
		@Field.d(3, "string", "optional")
		matchName:string = "";
		@Field.d(4, "string", "optional")
		matchKitVer:string = "";
		@Field.d(5, "int32", "optional")
		matchState:number = 0;
		@Field.d(6, "int64", "optional")
		matchEndTime:number = 0;
		@Field.d(7, "string", "repeated")
		matchSrvName:string[] = [];
		@Field.d(8, "uint32", "repeated")
		matchSrvID:number[] = [];
		@Field.d(10, "string", "optional")
		ruleID:string = "";
		@Field.d(11, SchemeStatus, "optional")
		schemeStatus:SchemeStatus = 0;
		@Field.d(12, "int32", "optional")
		initScore:number = 0;
		@Field.d(15, "int32", "optional")
		subMatchType:number = 0;
		@Field.d(16, "int32", "optional")
		matchType:number = 0;
		@Field.d(17, "int32", "optional")
		phaseSeq:number = 0;
		@Field.d(18, "bool", "optional")
		canSignUp:boolean = false;
		@Field.d(19, "int32", "optional")
		totalRoundNum:number = 0;
		@Field.d(20, "int32", "repeated")
		listTags:number[] = [];
		@Field.d(21, MatchConfig, "optional")
		matchDetail:MatchConfig =  new MatchConfig();
		@Field.d(22, SignUpConfig, "optional")
		signUpConfig:SignUpConfig =  new SignUpConfig();
		@Field.d(23, RobotConfig, "optional")
		robotConfig:RobotConfig =  new RobotConfig();
		@Field.d(24, ChatRoomConfig, "optional")
		chatRoomConfig:ChatRoomConfig =  new ChatRoomConfig();
		@Field.d(25, PrizeConfig, "optional")
		prizeConfig:PrizeConfig =  new PrizeConfig();
		@Field.d(26, StageConfig, "repeated")
		stages:StageConfig[] = [];
		@Field.d(27, GameConfig, "optional")
		gameConfig:GameConfig =  new GameConfig();
		@Field.d(28, "int64", "optional")
		seriesID:number = 0;
		@Field.d(29, SeriesScheduleInfo, "optional")
		seriesSchedule:SeriesScheduleInfo =  new SeriesScheduleInfo();
		@Field.d(30, ObserveConfig, "optional")
		observeConfig:ObserveConfig =  new ObserveConfig();
		@Field.d(32, "int64", "optional")
		creatorUID:number = 0;
		@Field.d(33, PreventCheatConfig, "optional")
		preventCheatConfig:PreventCheatConfig =  new PreventCheatConfig();
		@Field.d(34, PrizeDetailConfig, "repeated")
		roundPrizes:PrizeDetailConfig[] = [];
		@Field.d(35, "string", "repeated")
		matchCfgTag:string[] = [];
		@Field.d(36, StartTimeSpan, "optional")
		startSpan:StartTimeSpan =  new StartTimeSpan();
		@Field.d(37, "int32", "optional")
		joinMatchNeedPropNum:number = 0;
		@Field.d(38, "int32", "optional")
		rewardPoolMungNum:number = 0;
		@Field.d(39, DelayEntryConfig, "optional")
		delayEntryConfig:DelayEntryConfig =  new DelayEntryConfig();
		@Field.d(40, "int32", "optional")
		prizeRing:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_IncludedMatch") 
export class IncludedMatch extends Message<IncludedMatch> { 
	constructor(param?: Properties<IncludedMatch>) {  
		super(); 
		if (param) { 
			this.includedMode = param.includedMode!
			this.matchIDs = param.matchIDs!
			this.classifiedModes = param.classifiedModes!
			} 
		} 
		@Field.d(1, IncludedMode, "optional")
		includedMode:IncludedMode = 0;
		@Field.d(3, "int64", "repeated")
		matchIDs:number[] = [];
		@Field.d(4, ClassifiedMode, "repeated")
		classifiedModes:ClassifiedMode[] = [];
} 
@Type.d("Type_tss_match_common_config_proto_MatchTab") 
export class MatchTab extends Message<MatchTab> { 
	constructor(param?: Properties<MatchTab>) {  
		super(); 
		if (param) { 
			this.tabID = param.tabID!
			this.tabName = param.tabName!
			this.isDisplayed = param.isDisplayed!
			this.operator = param.operator!
			this.operationTime = param.operationTime!
			this.backgroundColor = param.backgroundColor!
			this.backgroundImage = param.backgroundImage!
			this.notCheckedFontColor = param.notCheckedFontColor!
			this.checkedFontColor = param.checkedFontColor!
			this.seq = param.seq!
			this.tabTitleImage = param.tabTitleImage!
			this.includedMatches = new IncludedMatch(param.includedMatches!)
			} 
		} 
		@Field.d(1, "int64", "optional")
		tabID:number = 0;
		@Field.d(2, "string", "optional")
		tabName:string = "";
		@Field.d(3, "bool", "optional")
		isDisplayed:boolean = false;
		@Field.d(4, "string", "optional")
		operator:string = "";
		@Field.d(5, "int64", "optional")
		operationTime:number = 0;
		@Field.d(6, "string", "optional")
		backgroundColor:string = "";
		@Field.d(7, "string", "optional")
		backgroundImage:string = "";
		@Field.d(8, "string", "optional")
		notCheckedFontColor:string = "";
		@Field.d(9, "string", "optional")
		checkedFontColor:string = "";
		@Field.d(10, "int32", "optional")
		seq:number = 0;
		@Field.d(11, "string", "optional")
		tabTitleImage:string = "";
		@Field.d(12, IncludedMatch, "optional")
		includedMatches:IncludedMatch =  new IncludedMatch();
} 
@Type.d("Type_tss_match_common_config_proto_SkipTabRule") 
export class SkipTabRule extends Message<SkipTabRule> { 
	constructor(param?: Properties<SkipTabRule>) {  
		super(); 
		if (param) { 
			this.mode = param.mode!
			this.tabID = param.tabID!
			} 
		} 
		@Field.d(1, SkipTabMode, "optional")
		mode:SkipTabMode = 0;
		@Field.d(2, "int64", "optional")
		tabID:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_BreakthroughRecord") 
export class BreakthroughRecord extends Message<BreakthroughRecord> { 
	constructor(param?: Properties<BreakthroughRecord>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.successNum = param.successNum!
			this.mungNum = param.mungNum!
			this.phaseSeq = param.phaseSeq!
			} 
		} 
		@Field.d(1, "int64", "optional")
		uid:number = 0;
		@Field.d(2, "int32", "optional")
		successNum:number = 0;
		@Field.d(3, "int32", "optional")
		mungNum:number = 0;
		@Field.d(4, "int32", "optional")
		phaseSeq:number = 0;
} 
@Type.d("Type_tss_match_common_config_proto_GetMatchReconnectInfoRsp") 
export class GetMatchReconnectInfoRsp extends Message<GetMatchReconnectInfoRsp> { 
	constructor(param?: Properties<GetMatchReconnectInfoRsp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.reconnectInfo = new Uint8Array(param.reconnectInfo!)
			this.matchType = param.matchType!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(3, "bytes", "optional")
		reconnectInfo:Uint8Array =  new Uint8Array();
		@Field.d(2, MatchType, "optional")
		matchType:MatchType = 0;
} 
}
