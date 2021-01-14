import { __decorate } from "tslib";
import { Message, Type, Field } from 'protobufjs/light';
export var match;
(function (match) {
    let RuleStatus;
    (function (RuleStatus) {
        RuleStatus[RuleStatus["RuleStatusUnknown"] = 0] = "RuleStatusUnknown";
        RuleStatus[RuleStatus["RuleStatusDisable"] = 1] = "RuleStatusDisable";
        RuleStatus[RuleStatus["RuleStatusEnable"] = 2] = "RuleStatusEnable";
    })(RuleStatus = match.RuleStatus || (match.RuleStatus = {}));
    let RuleSituation;
    (function (RuleSituation) {
        RuleSituation[RuleSituation["RuleSituationFree"] = 0] = "RuleSituationFree";
        RuleSituation[RuleSituation["RuleSituationRunning"] = 1] = "RuleSituationRunning";
        RuleSituation[RuleSituation["RuleSituationTimeout"] = 2] = "RuleSituationTimeout";
    })(RuleSituation = match.RuleSituation || (match.RuleSituation = {}));
    let OverState;
    (function (OverState) {
        OverState[OverState["OverStateNone"] = 0] = "OverStateNone";
        OverState[OverState["OverStateEnd"] = 1] = "OverStateEnd";
        OverState[OverState["OverStateOut"] = 2] = "OverStateOut";
    })(OverState = match.OverState || (match.OverState = {}));
    let SchemeStatus;
    (function (SchemeStatus) {
        SchemeStatus[SchemeStatus["SchemeStatusUnknown"] = 0] = "SchemeStatusUnknown";
        SchemeStatus[SchemeStatus["SchemeStatusStop"] = 1] = "SchemeStatusStop";
        SchemeStatus[SchemeStatus["SchemeStatusPause"] = 2] = "SchemeStatusPause";
        SchemeStatus[SchemeStatus["SchemeStatusRunning"] = 3] = "SchemeStatusRunning";
    })(SchemeStatus = match.SchemeStatus || (match.SchemeStatus = {}));
    let MatchType;
    (function (MatchType) {
        MatchType[MatchType["MatchTypeMatching"] = 0] = "MatchTypeMatching";
        MatchType[MatchType["MatchTypeRegular"] = 1] = "MatchTypeRegular";
        MatchType[MatchType["MatchTypeFast"] = 2] = "MatchTypeFast";
        MatchType[MatchType["MatchTypeBreakthrough"] = 3] = "MatchTypeBreakthrough";
        MatchType[MatchType["MatchTypeBettingMatch"] = 4] = "MatchTypeBettingMatch";
        MatchType[MatchType["MatchTypeStandingMatch"] = 5] = "MatchTypeStandingMatch";
    })(MatchType = match.MatchType || (match.MatchType = {}));
    let SubMatchType;
    (function (SubMatchType) {
        SubMatchType[SubMatchType["SubMatchTypeUnknown"] = 0] = "SubMatchTypeUnknown";
        SubMatchType[SubMatchType["SubMatchTypeSingle"] = 1] = "SubMatchTypeSingle";
        SubMatchType[SubMatchType["SubMatchTypeCycle"] = 4] = "SubMatchTypeCycle";
        SubMatchType[SubMatchType["SubMatchTypeSeries"] = 5] = "SubMatchTypeSeries";
        SubMatchType[SubMatchType["SubMatchTypeInvite"] = 9] = "SubMatchTypeInvite";
        SubMatchType[SubMatchType["SubMatchTypeFast"] = 16] = "SubMatchTypeFast";
        SubMatchType[SubMatchType["SubMatchTypeBeginner"] = 17] = "SubMatchTypeBeginner";
        SubMatchType[SubMatchType["SubMatchTypeBreakthrough"] = 18] = "SubMatchTypeBreakthrough";
        SubMatchType[SubMatchType["SubMatchTypeBettingMatch"] = 19] = "SubMatchTypeBettingMatch";
        SubMatchType[SubMatchType["SubMatchTypeStandingMatch"] = 20] = "SubMatchTypeStandingMatch";
    })(SubMatchType = match.SubMatchType || (match.SubMatchType = {}));
    let IntervalCycleType;
    (function (IntervalCycleType) {
        IntervalCycleType[IntervalCycleType["IntervalCycleTypeUnknown"] = 0] = "IntervalCycleTypeUnknown";
        IntervalCycleType[IntervalCycleType["IntervalCycleTypeSingle"] = 1] = "IntervalCycleTypeSingle";
        IntervalCycleType[IntervalCycleType["IntervalCycleTypeMulti"] = 2] = "IntervalCycleTypeMulti";
    })(IntervalCycleType = match.IntervalCycleType || (match.IntervalCycleType = {}));
    let Weekday;
    (function (Weekday) {
        Weekday[Weekday["WeekdaySunday"] = 0] = "WeekdaySunday";
        Weekday[Weekday["WeekdayMonday"] = 1] = "WeekdayMonday";
        Weekday[Weekday["WeekdayTuesday"] = 2] = "WeekdayTuesday";
        Weekday[Weekday["WeekdayWednesday"] = 3] = "WeekdayWednesday";
        Weekday[Weekday["WeekdayThursday"] = 4] = "WeekdayThursday";
        Weekday[Weekday["WeekdayFriday"] = 5] = "WeekdayFriday";
        Weekday[Weekday["WeekdaySaturday"] = 6] = "WeekdaySaturday";
    })(Weekday = match.Weekday || (match.Weekday = {}));
    let UserGroupType;
    (function (UserGroupType) {
        UserGroupType[UserGroupType["UserGroupTypeUnknown"] = 0] = "UserGroupTypeUnknown";
        UserGroupType[UserGroupType["UserGroupTypeAll"] = 1] = "UserGroupTypeAll";
        UserGroupType[UserGroupType["UserGroupTypeBeginner"] = 2] = "UserGroupTypeBeginner";
        UserGroupType[UserGroupType["UserGroupTypeBlock"] = 3] = "UserGroupTypeBlock";
    })(UserGroupType = match.UserGroupType || (match.UserGroupType = {}));
    let SignUpType;
    (function (SignUpType) {
        SignUpType[SignUpType["SignUpType_Unknow"] = 0] = "SignUpType_Unknow";
        SignUpType[SignUpType["SignUpType_Free"] = 1] = "SignUpType_Free";
        SignUpType[SignUpType["SignUpType_Prop"] = 2] = "SignUpType_Prop";
        SignUpType[SignUpType["SignUpType_VIP"] = 4] = "SignUpType_VIP";
        SignUpType[SignUpType["SignUpType_Diamond"] = 8] = "SignUpType_Diamond";
        SignUpType[SignUpType["SignUpType_Mung"] = 16] = "SignUpType_Mung";
    })(SignUpType = match.SignUpType || (match.SignUpType = {}));
    let PunishmentType;
    (function (PunishmentType) {
        PunishmentType[PunishmentType["PunishmentTypeSeverity"] = 0] = "PunishmentTypeSeverity";
        PunishmentType[PunishmentType["PunishmentTypeNormal"] = 1] = "PunishmentTypeNormal";
    })(PunishmentType = match.PunishmentType || (match.PunishmentType = {}));
    let ListCardStyleType;
    (function (ListCardStyleType) {
        ListCardStyleType[ListCardStyleType["SmallCardStyle"] = 0] = "SmallCardStyle";
        ListCardStyleType[ListCardStyleType["LargeCardStyle"] = 1] = "LargeCardStyle";
    })(ListCardStyleType = match.ListCardStyleType || (match.ListCardStyleType = {}));
    let PrizeMode;
    (function (PrizeMode) {
        PrizeMode[PrizeMode["PrizeModeUnKnow"] = 0] = "PrizeModeUnKnow";
        PrizeMode[PrizeMode["PrizeModeFixed"] = 1] = "PrizeModeFixed";
        PrizeMode[PrizeMode["PrizeModeRatio"] = 2] = "PrizeModeRatio";
        PrizeMode[PrizeMode["PrizeModeDynamicPool"] = 3] = "PrizeModeDynamicPool";
        PrizeMode[PrizeMode["PrizeModeImmediately"] = 4] = "PrizeModeImmediately";
    })(PrizeMode = match.PrizeMode || (match.PrizeMode = {}));
    let ExtraPrizeMode;
    (function (ExtraPrizeMode) {
        ExtraPrizeMode[ExtraPrizeMode["ExtraPrizeModeDefault"] = 0] = "ExtraPrizeModeDefault";
        ExtraPrizeMode[ExtraPrizeMode["ExtraPrizeModeCustom"] = 1] = "ExtraPrizeModeCustom";
    })(ExtraPrizeMode = match.ExtraPrizeMode || (match.ExtraPrizeMode = {}));
    let ExtraPrizeType;
    (function (ExtraPrizeType) {
        ExtraPrizeType[ExtraPrizeType["ExtraPrizeTypeFixed"] = 0] = "ExtraPrizeTypeFixed";
        ExtraPrizeType[ExtraPrizeType["ExtraPrizeTypeRatio"] = 1] = "ExtraPrizeTypeRatio";
    })(ExtraPrizeType = match.ExtraPrizeType || (match.ExtraPrizeType = {}));
    let RewardMode;
    (function (RewardMode) {
        RewardMode[RewardMode["PropReward"] = 0] = "PropReward";
        RewardMode[RewardMode["MungReward"] = 1] = "MungReward";
    })(RewardMode = match.RewardMode || (match.RewardMode = {}));
    let ExpireType;
    (function (ExpireType) {
        ExpireType[ExpireType["ExpireTypeDefault"] = 0] = "ExpireTypeDefault";
        ExpireType[ExpireType["ExpireTypeDays"] = 1] = "ExpireTypeDays";
        ExpireType[ExpireType["ExpireTypeDate"] = 2] = "ExpireTypeDate";
    })(ExpireType = match.ExpireType || (match.ExpireType = {}));
    let DisplayType;
    (function (DisplayType) {
        DisplayType[DisplayType["PrizeDisplayTypeTopic"] = 0] = "PrizeDisplayTypeTopic";
        DisplayType[DisplayType["PrizeDisplayTypePrize"] = 1] = "PrizeDisplayTypePrize";
    })(DisplayType = match.DisplayType || (match.DisplayType = {}));
    let StageMode;
    (function (StageMode) {
        StageMode[StageMode["StageModeUnknown"] = 0] = "StageModeUnknown";
        StageMode[StageMode["StageModeStrike"] = 1] = "StageModeStrike";
        StageMode[StageMode["StageModeFinality"] = 2] = "StageModeFinality";
        StageMode[StageMode["StageModeFast"] = 3] = "StageModeFast";
        StageMode[StageMode["StageModeBreakthrough"] = 4] = "StageModeBreakthrough";
        StageMode[StageMode["StageModeStanding"] = 5] = "StageModeStanding";
    })(StageMode = match.StageMode || (match.StageMode = {}));
    let ScoreHoldMode;
    (function (ScoreHoldMode) {
        ScoreHoldMode[ScoreHoldMode["ScoreHoldModeRatio"] = 0] = "ScoreHoldModeRatio";
        ScoreHoldMode[ScoreHoldMode["ScoreHoldModeRadical"] = 1] = "ScoreHoldModeRadical";
        ScoreHoldMode[ScoreHoldMode["ScoreHoldModeStair"] = 2] = "ScoreHoldModeStair";
    })(ScoreHoldMode = match.ScoreHoldMode || (match.ScoreHoldMode = {}));
    let OutScoreMode;
    (function (OutScoreMode) {
        OutScoreMode[OutScoreMode["OutScoreModeRatio"] = 0] = "OutScoreModeRatio";
        OutScoreMode[OutScoreMode["OutScoreModeFixed"] = 1] = "OutScoreModeFixed";
        OutScoreMode[OutScoreMode["OutScoreModeConst"] = 2] = "OutScoreModeConst";
    })(OutScoreMode = match.OutScoreMode || (match.OutScoreMode = {}));
    let RatioScoreSettlementMode;
    (function (RatioScoreSettlementMode) {
        RatioScoreSettlementMode[RatioScoreSettlementMode["RatioScoreSettlementModeUnknow"] = 0] = "RatioScoreSettlementModeUnknow";
        RatioScoreSettlementMode[RatioScoreSettlementMode["RatioScoreSettlementModeConst"] = 1] = "RatioScoreSettlementModeConst";
        RatioScoreSettlementMode[RatioScoreSettlementMode["RatioScoreSettlementModeRise"] = 2] = "RatioScoreSettlementModeRise";
    })(RatioScoreSettlementMode = match.RatioScoreSettlementMode || (match.RatioScoreSettlementMode = {}));
    let ScoreSettlementMode;
    (function (ScoreSettlementMode) {
        ScoreSettlementMode[ScoreSettlementMode["ScoreSettlementModeRatio"] = 0] = "ScoreSettlementModeRatio";
        ScoreSettlementMode[ScoreSettlementMode["ScoreSettlementModeFixed"] = 1] = "ScoreSettlementModeFixed";
    })(ScoreSettlementMode = match.ScoreSettlementMode || (match.ScoreSettlementMode = {}));
    let StrikeEndType;
    (function (StrikeEndType) {
        StrikeEndType[StrikeEndType["StrikeEndTypeUnknow"] = 0] = "StrikeEndTypeUnknow";
        StrikeEndType[StrikeEndType["StrikeEndTypeUserNum"] = 1] = "StrikeEndTypeUserNum";
        StrikeEndType[StrikeEndType["StrikeEndTypeTime"] = 2] = "StrikeEndTypeTime";
    })(StrikeEndType = match.StrikeEndType || (match.StrikeEndType = {}));
    let RevivalType;
    (function (RevivalType) {
        RevivalType[RevivalType["RevivalTypeUnknown"] = 0] = "RevivalTypeUnknown";
        RevivalType[RevivalType["RevivalTypeProp"] = 1] = "RevivalTypeProp";
        RevivalType[RevivalType["RevivalTypeVip"] = 2] = "RevivalTypeVip";
    })(RevivalType = match.RevivalType || (match.RevivalType = {}));
    let AllocMode;
    (function (AllocMode) {
        AllocMode[AllocMode["AllocModeRandom"] = 0] = "AllocModeRandom";
        AllocMode[AllocMode["AllocModeSwiss"] = 1] = "AllocModeSwiss";
        AllocMode[AllocMode["AllocModeSnake"] = 2] = "AllocModeSnake";
        AllocMode[AllocMode["AllocModeOnce"] = 3] = "AllocModeOnce";
        AllocMode[AllocMode["AllocModeWeight"] = 4] = "AllocModeWeight";
        AllocMode[AllocMode["AllocModeTeammate"] = 5] = "AllocModeTeammate";
        AllocMode[AllocMode["AllocModeTryOnce"] = 6] = "AllocModeTryOnce";
    })(AllocMode = match.AllocMode || (match.AllocMode = {}));
    let OutRuleMode;
    (function (OutRuleMode) {
        OutRuleMode[OutRuleMode["OutRuleModeRank"] = 0] = "OutRuleModeRank";
        OutRuleMode[OutRuleMode["OutRuleModeTable"] = 1] = "OutRuleModeTable";
        OutRuleMode[OutRuleMode["OutRuleModeResult"] = 2] = "OutRuleModeResult";
    })(OutRuleMode = match.OutRuleMode || (match.OutRuleMode = {}));
    let ElectMode;
    (function (ElectMode) {
        ElectMode[ElectMode["ElectModeClock"] = 0] = "ElectModeClock";
        ElectMode[ElectMode["ElectModeRandom"] = 1] = "ElectModeRandom";
    })(ElectMode = match.ElectMode || (match.ElectMode = {}));
    let AddRobotMode;
    (function (AddRobotMode) {
        AddRobotMode[AddRobotMode["AddRobotModeNum"] = 0] = "AddRobotModeNum";
        AddRobotMode[AddRobotMode["AddRobotModeAuto"] = 1] = "AddRobotModeAuto";
        AddRobotMode[AddRobotMode["AddRobotMinJoinUserNum"] = 2] = "AddRobotMinJoinUserNum";
    })(AddRobotMode = match.AddRobotMode || (match.AddRobotMode = {}));
    let SeriesStatus;
    (function (SeriesStatus) {
        SeriesStatus[SeriesStatus["SeriesStatusUnknown"] = 0] = "SeriesStatusUnknown";
        SeriesStatus[SeriesStatus["SeriesStatusStop"] = 1] = "SeriesStatusStop";
        SeriesStatus[SeriesStatus["SeriesStatusPause"] = 2] = "SeriesStatusPause";
        SeriesStatus[SeriesStatus["SeriesStatusRunning"] = 3] = "SeriesStatusRunning";
    })(SeriesStatus = match.SeriesStatus || (match.SeriesStatus = {}));
    let ObserveType;
    (function (ObserveType) {
        ObserveType[ObserveType["ObserveTypeTimely"] = 0] = "ObserveTypeTimely";
        ObserveType[ObserveType["ObserveTypeDelayed"] = 1] = "ObserveTypeDelayed";
    })(ObserveType = match.ObserveType || (match.ObserveType = {}));
    let IncludedMode;
    (function (IncludedMode) {
        IncludedMode[IncludedMode["IncludedModeUnknown"] = 0] = "IncludedModeUnknown";
        IncludedMode[IncludedMode["IncludedModeMatchType"] = 1] = "IncludedModeMatchType";
        IncludedMode[IncludedMode["IncludedModeMatchID"] = 2] = "IncludedModeMatchID";
    })(IncludedMode = match.IncludedMode || (match.IncludedMode = {}));
    let ClassifiedMode;
    (function (ClassifiedMode) {
        ClassifiedMode[ClassifiedMode["UnknownClassifiedMode"] = 0] = "UnknownClassifiedMode";
        ClassifiedMode[ClassifiedMode["SingleMatchMode"] = 1] = "SingleMatchMode";
        ClassifiedMode[ClassifiedMode["CycleMatchMode"] = 2] = "CycleMatchMode";
        ClassifiedMode[ClassifiedMode["SeriesMatchMode"] = 3] = "SeriesMatchMode";
        ClassifiedMode[ClassifiedMode["FastMatchMode"] = 4] = "FastMatchMode";
        ClassifiedMode[ClassifiedMode["FreeMatchMode"] = 5] = "FreeMatchMode";
        ClassifiedMode[ClassifiedMode["VIPMatchMode"] = 6] = "VIPMatchMode";
        ClassifiedMode[ClassifiedMode["BreakthroughMatchMode"] = 7] = "BreakthroughMatchMode";
        ClassifiedMode[ClassifiedMode["BettingMatchMode"] = 8] = "BettingMatchMode";
        ClassifiedMode[ClassifiedMode["StandingMatchMode"] = 9] = "StandingMatchMode";
    })(ClassifiedMode = match.ClassifiedMode || (match.ClassifiedMode = {}));
    let SkipTabMode;
    (function (SkipTabMode) {
        SkipTabMode[SkipTabMode["UnknownTabSkipMode"] = 0] = "UnknownTabSkipMode";
        SkipTabMode[SkipTabMode["GotoFastMatchTab"] = 1] = "GotoFastMatchTab";
        SkipTabMode[SkipTabMode["GotoRegularMatchTab"] = 2] = "GotoRegularMatchTab";
        SkipTabMode[SkipTabMode["GotoRecommendTab"] = 3] = "GotoRecommendTab";
        SkipTabMode[SkipTabMode["GotoBreakthroughTab"] = 4] = "GotoBreakthroughTab";
        SkipTabMode[SkipTabMode["GotoBettingMatchTab"] = 5] = "GotoBettingMatchTab";
        SkipTabMode[SkipTabMode["GotoStandingMatchTab"] = 6] = "GotoStandingMatchTab";
    })(SkipTabMode = match.SkipTabMode || (match.SkipTabMode = {}));
    let DateSpan = class DateSpan extends Message {
        constructor(param) {
            super();
            this.start = "";
            this.end = "";
            if (param) {
                this.start = param.start;
                this.end = param.end;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], DateSpan.prototype, "start", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], DateSpan.prototype, "end", void 0);
    DateSpan = __decorate([
        Type.d("Type_tss_match_common_config_proto_DateSpan")
    ], DateSpan);
    match.DateSpan = DateSpan;
    let TimeSpan = class TimeSpan extends Message {
        constructor(param) {
            super();
            this.start = "";
            this.end = "";
            this.displayTime = "";
            this.cyclicInterval = 0;
            if (param) {
                this.start = param.start;
                this.end = param.end;
                this.displayTime = param.displayTime;
                this.cyclicInterval = param.cyclicInterval;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], TimeSpan.prototype, "start", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], TimeSpan.prototype, "end", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], TimeSpan.prototype, "displayTime", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], TimeSpan.prototype, "cyclicInterval", void 0);
    TimeSpan = __decorate([
        Type.d("Type_tss_match_common_config_proto_TimeSpan")
    ], TimeSpan);
    match.TimeSpan = TimeSpan;
    let ScheduleConfig = class ScheduleConfig extends Message {
        constructor(param) {
            super();
            this.dateSpan = new DateSpan();
            this.timeSpan = [];
            this.weekdays = [];
            this.intervalDay = 0;
            this.firstDisplayTime = "";
            this.isCyclicDisplay = false;
            this.cycleType = 0;
            if (param) {
                this.dateSpan = new DateSpan(param.dateSpan);
                this.timeSpan = param.timeSpan;
                this.weekdays = param.weekdays;
                this.intervalDay = param.intervalDay;
                this.firstDisplayTime = param.firstDisplayTime;
                this.isCyclicDisplay = param.isCyclicDisplay;
                this.cycleType = param.cycleType;
            }
        }
    };
    __decorate([
        Field.d(1, DateSpan, "optional")
    ], ScheduleConfig.prototype, "dateSpan", void 0);
    __decorate([
        Field.d(2, TimeSpan, "repeated")
    ], ScheduleConfig.prototype, "timeSpan", void 0);
    __decorate([
        Field.d(3, Weekday, "repeated")
    ], ScheduleConfig.prototype, "weekdays", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], ScheduleConfig.prototype, "intervalDay", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], ScheduleConfig.prototype, "firstDisplayTime", void 0);
    __decorate([
        Field.d(6, "bool", "optional")
    ], ScheduleConfig.prototype, "isCyclicDisplay", void 0);
    __decorate([
        Field.d(7, IntervalCycleType, "optional")
    ], ScheduleConfig.prototype, "cycleType", void 0);
    ScheduleConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_ScheduleConfig")
    ], ScheduleConfig);
    match.ScheduleConfig = ScheduleConfig;
    let AssetCheckConfig = class AssetCheckConfig extends Message {
        constructor(param) {
            super();
            this.enabled = false;
            this.checkPropId = 0;
            this.checkPropNum = 0;
            this.signUpType = 0;
            this.signUpPropId = 0;
            this.signUpPropNum = 0;
            this.signUpDiamondNum = 0;
            this.signUpPropName = "";
            this.signUpPropIcon = "";
            if (param) {
                this.enabled = param.enabled;
                this.checkPropId = param.checkPropId;
                this.checkPropNum = param.checkPropNum;
                this.signUpType = param.signUpType;
                this.signUpPropId = param.signUpPropId;
                this.signUpPropNum = param.signUpPropNum;
                this.signUpDiamondNum = param.signUpDiamondNum;
                this.signUpPropName = param.signUpPropName;
                this.signUpPropIcon = param.signUpPropIcon;
            }
        }
    };
    __decorate([
        Field.d(1, "bool", "optional")
    ], AssetCheckConfig.prototype, "enabled", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], AssetCheckConfig.prototype, "checkPropId", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], AssetCheckConfig.prototype, "checkPropNum", void 0);
    __decorate([
        Field.d(4, SignUpType, "optional")
    ], AssetCheckConfig.prototype, "signUpType", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], AssetCheckConfig.prototype, "signUpPropId", void 0);
    __decorate([
        Field.d(6, "int32", "optional")
    ], AssetCheckConfig.prototype, "signUpPropNum", void 0);
    __decorate([
        Field.d(7, "int32", "optional")
    ], AssetCheckConfig.prototype, "signUpDiamondNum", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], AssetCheckConfig.prototype, "signUpPropName", void 0);
    __decorate([
        Field.d(9, "string", "optional")
    ], AssetCheckConfig.prototype, "signUpPropIcon", void 0);
    AssetCheckConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_AssetCheckConfig")
    ], AssetCheckConfig);
    match.AssetCheckConfig = AssetCheckConfig;
    let SignUpConfig = class SignUpConfig extends Message {
        constructor(param) {
            super();
            this.signUpType = 0;
            this.EXPLevel = 0;
            this.VIPLevel = 0;
            this.propID = 0;
            this.propNum = 0;
            this.diamondNum = 0;
            this.deadlineSec = 0;
            this.propName = "";
            this.propIcon = "";
            this.mungNum = 0;
            this.assetCheck = new AssetCheckConfig();
            this.propType = 0;
            this.propPrice = 0;
            if (param) {
                this.signUpType = param.signUpType;
                this.EXPLevel = param.EXPLevel;
                this.VIPLevel = param.VIPLevel;
                this.propID = param.propID;
                this.propNum = param.propNum;
                this.diamondNum = param.diamondNum;
                this.deadlineSec = param.deadlineSec;
                this.propName = param.propName;
                this.propIcon = param.propIcon;
                this.mungNum = param.mungNum;
                this.assetCheck = new AssetCheckConfig(param.assetCheck);
                this.propType = param.propType;
                this.propPrice = param.propPrice;
            }
        }
    };
    __decorate([
        Field.d(1, SignUpType, "optional")
    ], SignUpConfig.prototype, "signUpType", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], SignUpConfig.prototype, "EXPLevel", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], SignUpConfig.prototype, "VIPLevel", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], SignUpConfig.prototype, "propID", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], SignUpConfig.prototype, "propNum", void 0);
    __decorate([
        Field.d(6, "int32", "optional")
    ], SignUpConfig.prototype, "diamondNum", void 0);
    __decorate([
        Field.d(7, "int64", "optional")
    ], SignUpConfig.prototype, "deadlineSec", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], SignUpConfig.prototype, "propName", void 0);
    __decorate([
        Field.d(9, "string", "optional")
    ], SignUpConfig.prototype, "propIcon", void 0);
    __decorate([
        Field.d(10, "int32", "optional")
    ], SignUpConfig.prototype, "mungNum", void 0);
    __decorate([
        Field.d(11, AssetCheckConfig, "optional")
    ], SignUpConfig.prototype, "assetCheck", void 0);
    __decorate([
        Field.d(12, "int32", "optional")
    ], SignUpConfig.prototype, "propType", void 0);
    __decorate([
        Field.d(13, "int32", "optional")
    ], SignUpConfig.prototype, "propPrice", void 0);
    SignUpConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_SignUpConfig")
    ], SignUpConfig);
    match.SignUpConfig = SignUpConfig;
    let MatchConfig = class MatchConfig extends Message {
        constructor(param) {
            super();
            this.startTime = 0;
            this.readySec = 0;
            this.minNum = 0;
            this.maxNum = 0;
            this.ruleDesc = "";
            this.listDisplayURL = "";
            this.detailDisplayURL = "";
            this.hasMultiField = false;
            this.userNumPerField = 0;
            this.maxFieldNum = 0;
            this.expectSec = 0;
            this.topPriority = 0;
            this.hasWhitelist = false;
            this.startTimeDesc = "";
            this.hasPunishment = false;
            this.hasDynamicRule = false;
            this.seriesKey = "";
            this.punishmentType = 0;
            this.matchTags = [];
            this.matchTabs = [];
            this.entranceBorderImg = "";
            this.matchingSec = 0;
            this.endTime = 0;
            this.cardStyleType = 0;
            this.userGroupType = 0;
            this.miniDisplayURL = "";
            if (param) {
                this.startTime = param.startTime;
                this.readySec = param.readySec;
                this.minNum = param.minNum;
                this.maxNum = param.maxNum;
                this.ruleDesc = param.ruleDesc;
                this.listDisplayURL = param.listDisplayURL;
                this.detailDisplayURL = param.detailDisplayURL;
                this.hasMultiField = param.hasMultiField;
                this.userNumPerField = param.userNumPerField;
                this.maxFieldNum = param.maxFieldNum;
                this.expectSec = param.expectSec;
                this.topPriority = param.topPriority;
                this.hasWhitelist = param.hasWhitelist;
                this.startTimeDesc = param.startTimeDesc;
                this.hasPunishment = param.hasPunishment;
                this.hasDynamicRule = param.hasDynamicRule;
                this.seriesKey = param.seriesKey;
                this.punishmentType = param.punishmentType;
                this.matchTags = param.matchTags;
                this.matchTabs = param.matchTabs;
                this.entranceBorderImg = param.entranceBorderImg;
                this.matchingSec = param.matchingSec;
                this.endTime = param.endTime;
                this.cardStyleType = param.cardStyleType;
                this.userGroupType = param.userGroupType;
                this.miniDisplayURL = param.miniDisplayURL;
            }
        }
    };
    __decorate([
        Field.d(3, "int64", "optional")
    ], MatchConfig.prototype, "startTime", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], MatchConfig.prototype, "readySec", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], MatchConfig.prototype, "minNum", void 0);
    __decorate([
        Field.d(6, "int32", "optional")
    ], MatchConfig.prototype, "maxNum", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], MatchConfig.prototype, "ruleDesc", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], MatchConfig.prototype, "listDisplayURL", void 0);
    __decorate([
        Field.d(9, "string", "optional")
    ], MatchConfig.prototype, "detailDisplayURL", void 0);
    __decorate([
        Field.d(10, "bool", "optional")
    ], MatchConfig.prototype, "hasMultiField", void 0);
    __decorate([
        Field.d(11, "int32", "optional")
    ], MatchConfig.prototype, "userNumPerField", void 0);
    __decorate([
        Field.d(12, "int32", "optional")
    ], MatchConfig.prototype, "maxFieldNum", void 0);
    __decorate([
        Field.d(13, "int32", "optional")
    ], MatchConfig.prototype, "expectSec", void 0);
    __decorate([
        Field.d(14, "int32", "optional")
    ], MatchConfig.prototype, "topPriority", void 0);
    __decorate([
        Field.d(15, "bool", "optional")
    ], MatchConfig.prototype, "hasWhitelist", void 0);
    __decorate([
        Field.d(16, "string", "optional")
    ], MatchConfig.prototype, "startTimeDesc", void 0);
    __decorate([
        Field.d(17, "bool", "optional")
    ], MatchConfig.prototype, "hasPunishment", void 0);
    __decorate([
        Field.d(18, "bool", "optional")
    ], MatchConfig.prototype, "hasDynamicRule", void 0);
    __decorate([
        Field.d(19, "string", "optional")
    ], MatchConfig.prototype, "seriesKey", void 0);
    __decorate([
        Field.d(20, PunishmentType, "optional")
    ], MatchConfig.prototype, "punishmentType", void 0);
    __decorate([
        Field.d(21, "int64", "repeated")
    ], MatchConfig.prototype, "matchTags", void 0);
    __decorate([
        Field.d(22, "string", "repeated")
    ], MatchConfig.prototype, "matchTabs", void 0);
    __decorate([
        Field.d(23, "string", "optional")
    ], MatchConfig.prototype, "entranceBorderImg", void 0);
    __decorate([
        Field.d(24, "int64", "optional")
    ], MatchConfig.prototype, "matchingSec", void 0);
    __decorate([
        Field.d(25, "int64", "optional")
    ], MatchConfig.prototype, "endTime", void 0);
    __decorate([
        Field.d(26, ListCardStyleType, "optional")
    ], MatchConfig.prototype, "cardStyleType", void 0);
    __decorate([
        Field.d(27, UserGroupType, "optional")
    ], MatchConfig.prototype, "userGroupType", void 0);
    __decorate([
        Field.d(28, "string", "optional")
    ], MatchConfig.prototype, "miniDisplayURL", void 0);
    MatchConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_MatchConfig")
    ], MatchConfig);
    match.MatchConfig = MatchConfig;
    let ExchangeRule = class ExchangeRule extends Message {
        constructor(param) {
            super();
            this.propNum = 0;
            this.exchangePrizeID = 0;
            this.exchangePrizeName = "";
            if (param) {
                this.propNum = param.propNum;
                this.exchangePrizeID = param.exchangePrizeID;
                this.exchangePrizeName = param.exchangePrizeName;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], ExchangeRule.prototype, "propNum", void 0);
    __decorate([
        Field.d(2, "int32", "required")
    ], ExchangeRule.prototype, "exchangePrizeID", void 0);
    __decorate([
        Field.d(3, "string", "required")
    ], ExchangeRule.prototype, "exchangePrizeName", void 0);
    ExchangeRule = __decorate([
        Type.d("Type_tss_match_common_config_proto_ExchangeRule")
    ], ExchangeRule);
    match.ExchangeRule = ExchangeRule;
    let PrizeDetailConfig = class PrizeDetailConfig extends Message {
        constructor(param) {
            super();
            this.prizeID = 0;
            this.prizeNum = 0;
            this.prizeName = "";
            this.prizeImg = "";
            this.expireType = 0;
            this.expireTime = 0;
            this.exChangePrizeName = "";
            this.exChangePrizeImg = "";
            this.exchangePrizeTypes = [];
            this.exchangeRules = [];
            this.rewardMode = 0;
            this.mungNum = 0;
            this.prizeIcon = "";
            this.prizeType = 0;
            this.desc = "";
            this.prizeTypeID = 0;
            this.price = 0;
            if (param) {
                this.prizeID = param.prizeID;
                this.prizeNum = param.prizeNum;
                this.prizeName = param.prizeName;
                this.prizeImg = param.prizeImg;
                this.expireType = param.expireType;
                this.expireTime = param.expireTime;
                this.exChangePrizeName = param.exChangePrizeName;
                this.exChangePrizeImg = param.exChangePrizeImg;
                this.exchangePrizeTypes = param.exchangePrizeTypes;
                this.exchangeRules = param.exchangeRules;
                this.rewardMode = param.rewardMode;
                this.mungNum = param.mungNum;
                this.prizeIcon = param.prizeIcon;
                this.prizeType = param.prizeType;
                this.desc = param.desc;
                this.prizeTypeID = param.prizeTypeID;
                this.price = param.price;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], PrizeDetailConfig.prototype, "prizeID", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], PrizeDetailConfig.prototype, "prizeNum", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], PrizeDetailConfig.prototype, "prizeName", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], PrizeDetailConfig.prototype, "prizeImg", void 0);
    __decorate([
        Field.d(5, ExpireType, "optional")
    ], PrizeDetailConfig.prototype, "expireType", void 0);
    __decorate([
        Field.d(6, "int64", "optional")
    ], PrizeDetailConfig.prototype, "expireTime", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], PrizeDetailConfig.prototype, "exChangePrizeName", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], PrizeDetailConfig.prototype, "exChangePrizeImg", void 0);
    __decorate([
        Field.d(10, "int32", "repeated")
    ], PrizeDetailConfig.prototype, "exchangePrizeTypes", void 0);
    __decorate([
        Field.d(9, ExchangeRule, "repeated")
    ], PrizeDetailConfig.prototype, "exchangeRules", void 0);
    __decorate([
        Field.d(11, RewardMode, "optional")
    ], PrizeDetailConfig.prototype, "rewardMode", void 0);
    __decorate([
        Field.d(12, "int32", "optional")
    ], PrizeDetailConfig.prototype, "mungNum", void 0);
    __decorate([
        Field.d(13, "string", "optional")
    ], PrizeDetailConfig.prototype, "prizeIcon", void 0);
    __decorate([
        Field.d(14, "int32", "optional")
    ], PrizeDetailConfig.prototype, "prizeType", void 0);
    __decorate([
        Field.d(15, "string", "optional")
    ], PrizeDetailConfig.prototype, "desc", void 0);
    __decorate([
        Field.d(16, "int32", "optional")
    ], PrizeDetailConfig.prototype, "prizeTypeID", void 0);
    __decorate([
        Field.d(17, "int32", "optional")
    ], PrizeDetailConfig.prototype, "price", void 0);
    PrizeDetailConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_PrizeDetailConfig")
    ], PrizeDetailConfig);
    match.PrizeDetailConfig = PrizeDetailConfig;
    let VIPExtraPrizeConfig = class VIPExtraPrizeConfig extends Message {
        constructor(param) {
            super();
            this.levelBegin = 0;
            this.levelEnd = 0;
            this.prizes = [];
            this.ratio = 0;
            if (param) {
                this.levelBegin = param.levelBegin;
                this.levelEnd = param.levelEnd;
                this.prizes = param.prizes;
                this.ratio = param.ratio;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], VIPExtraPrizeConfig.prototype, "levelBegin", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], VIPExtraPrizeConfig.prototype, "levelEnd", void 0);
    __decorate([
        Field.d(3, PrizeDetailConfig, "repeated")
    ], VIPExtraPrizeConfig.prototype, "prizes", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], VIPExtraPrizeConfig.prototype, "ratio", void 0);
    VIPExtraPrizeConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_VIPExtraPrizeConfig")
    ], VIPExtraPrizeConfig);
    match.VIPExtraPrizeConfig = VIPExtraPrizeConfig;
    let RankPrizeConfig = class RankPrizeConfig extends Message {
        constructor(param) {
            super();
            this.start = 0;
            this.end = 0;
            this.prizeGroupName = "";
            this.prizeGroupURL = "";
            this.prizes = [];
            this.extraPrizes = [];
            if (param) {
                this.start = param.start;
                this.end = param.end;
                this.prizeGroupName = param.prizeGroupName;
                this.prizeGroupURL = param.prizeGroupURL;
                this.prizes = param.prizes;
                this.extraPrizes = param.extraPrizes;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], RankPrizeConfig.prototype, "start", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], RankPrizeConfig.prototype, "end", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], RankPrizeConfig.prototype, "prizeGroupName", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], RankPrizeConfig.prototype, "prizeGroupURL", void 0);
    __decorate([
        Field.d(5, PrizeDetailConfig, "repeated")
    ], RankPrizeConfig.prototype, "prizes", void 0);
    __decorate([
        Field.d(6, VIPExtraPrizeConfig, "repeated")
    ], RankPrizeConfig.prototype, "extraPrizes", void 0);
    RankPrizeConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_RankPrizeConfig")
    ], RankPrizeConfig);
    match.RankPrizeConfig = RankPrizeConfig;
    let PrizeDisplayConfig = class PrizeDisplayConfig extends Message {
        constructor(param) {
            super();
            this.prizeID = 0;
            this.displayType = 0;
            if (param) {
                this.prizeID = param.prizeID;
                this.displayType = param.displayType;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], PrizeDisplayConfig.prototype, "prizeID", void 0);
    __decorate([
        Field.d(2, DisplayType, "optional")
    ], PrizeDisplayConfig.prototype, "displayType", void 0);
    PrizeDisplayConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_PrizeDisplayConfig")
    ], PrizeDisplayConfig);
    match.PrizeDisplayConfig = PrizeDisplayConfig;
    let GuaranteePrizeConfig = class GuaranteePrizeConfig extends Message {
        constructor(param) {
            super();
            this.creatorUserPrizes = [];
            this.othersUserPrizes = [];
            if (param) {
                this.creatorUserPrizes = param.creatorUserPrizes;
                this.othersUserPrizes = param.othersUserPrizes;
            }
        }
    };
    __decorate([
        Field.d(1, PrizeDetailConfig, "repeated")
    ], GuaranteePrizeConfig.prototype, "creatorUserPrizes", void 0);
    __decorate([
        Field.d(2, PrizeDetailConfig, "repeated")
    ], GuaranteePrizeConfig.prototype, "othersUserPrizes", void 0);
    GuaranteePrizeConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_GuaranteePrizeConfig")
    ], GuaranteePrizeConfig);
    match.GuaranteePrizeConfig = GuaranteePrizeConfig;
    let PrizePoolConfig = class PrizePoolConfig extends Message {
        constructor(param) {
            super();
            this.prizes = [];
            if (param) {
                this.prizes = param.prizes;
            }
        }
    };
    __decorate([
        Field.d(1, PrizeDetailConfig, "repeated")
    ], PrizePoolConfig.prototype, "prizes", void 0);
    PrizePoolConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_PrizePoolConfig")
    ], PrizePoolConfig);
    match.PrizePoolConfig = PrizePoolConfig;
    let ScoreRatioPrizeConfig = class ScoreRatioPrizeConfig extends Message {
        constructor(param) {
            super();
            this.guaranteePrizeConfig = new GuaranteePrizeConfig();
            this.prizePoolConfig = new PrizePoolConfig();
            if (param) {
                this.guaranteePrizeConfig = new GuaranteePrizeConfig(param.guaranteePrizeConfig);
                this.prizePoolConfig = new PrizePoolConfig(param.prizePoolConfig);
            }
        }
    };
    __decorate([
        Field.d(1, GuaranteePrizeConfig, "optional")
    ], ScoreRatioPrizeConfig.prototype, "guaranteePrizeConfig", void 0);
    __decorate([
        Field.d(2, PrizePoolConfig, "optional")
    ], ScoreRatioPrizeConfig.prototype, "prizePoolConfig", void 0);
    ScoreRatioPrizeConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_ScoreRatioPrizeConfig")
    ], ScoreRatioPrizeConfig);
    match.ScoreRatioPrizeConfig = ScoreRatioPrizeConfig;
    let DynamicRewardPool = class DynamicRewardPool extends Message {
        constructor(param) {
            super();
            this.baseMungNum = 0;
            this.incrMungNum = 0;
            this.recycleRatio = 0;
            if (param) {
                this.baseMungNum = param.baseMungNum;
                this.incrMungNum = param.incrMungNum;
                this.recycleRatio = param.recycleRatio;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], DynamicRewardPool.prototype, "baseMungNum", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], DynamicRewardPool.prototype, "incrMungNum", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], DynamicRewardPool.prototype, "recycleRatio", void 0);
    DynamicRewardPool = __decorate([
        Type.d("Type_tss_match_common_config_proto_DynamicRewardPool")
    ], DynamicRewardPool);
    match.DynamicRewardPool = DynamicRewardPool;
    let PrizeConfig = class PrizeConfig extends Message {
        constructor(param) {
            super();
            this.rankPrizes = [];
            this.prizeDisplayConfig = new PrizeDisplayConfig();
            this.mode = 0;
            this.scoreRatioPrizeConfig = new ScoreRatioPrizeConfig();
            this.extraPrizeMode = 0;
            this.extraPrizeType = 0;
            this.rewardPool = new DynamicRewardPool();
            this.immediatelyMungNum = 0;
            if (param) {
                this.rankPrizes = param.rankPrizes;
                this.prizeDisplayConfig = new PrizeDisplayConfig(param.prizeDisplayConfig);
                this.mode = param.mode;
                this.scoreRatioPrizeConfig = new ScoreRatioPrizeConfig(param.scoreRatioPrizeConfig);
                this.extraPrizeMode = param.extraPrizeMode;
                this.extraPrizeType = param.extraPrizeType;
                this.rewardPool = new DynamicRewardPool(param.rewardPool);
                this.immediatelyMungNum = param.immediatelyMungNum;
            }
        }
    };
    __decorate([
        Field.d(1, RankPrizeConfig, "repeated")
    ], PrizeConfig.prototype, "rankPrizes", void 0);
    __decorate([
        Field.d(2, PrizeDisplayConfig, "optional")
    ], PrizeConfig.prototype, "prizeDisplayConfig", void 0);
    __decorate([
        Field.d(3, PrizeMode, "optional")
    ], PrizeConfig.prototype, "mode", void 0);
    __decorate([
        Field.d(4, ScoreRatioPrizeConfig, "optional")
    ], PrizeConfig.prototype, "scoreRatioPrizeConfig", void 0);
    __decorate([
        Field.d(5, ExtraPrizeMode, "optional")
    ], PrizeConfig.prototype, "extraPrizeMode", void 0);
    __decorate([
        Field.d(6, ExtraPrizeType, "optional")
    ], PrizeConfig.prototype, "extraPrizeType", void 0);
    __decorate([
        Field.d(12, DynamicRewardPool, "optional")
    ], PrizeConfig.prototype, "rewardPool", void 0);
    __decorate([
        Field.d(13, "int32", "optional")
    ], PrizeConfig.prototype, "immediatelyMungNum", void 0);
    PrizeConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_PrizeConfig")
    ], PrizeConfig);
    match.PrizeConfig = PrizeConfig;
    let RevivalRoundConfig = class RevivalRoundConfig extends Message {
        constructor(param) {
            super();
            this.propID = 0;
            this.propNum = 0;
            this.revivalType = [];
            if (param) {
                this.propID = param.propID;
                this.propNum = param.propNum;
                this.revivalType = param.revivalType;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], RevivalRoundConfig.prototype, "propID", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], RevivalRoundConfig.prototype, "propNum", void 0);
    __decorate([
        Field.d(3, RevivalType, "repeated")
    ], RevivalRoundConfig.prototype, "revivalType", void 0);
    RevivalRoundConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_RevivalRoundConfig")
    ], RevivalRoundConfig);
    match.RevivalRoundConfig = RevivalRoundConfig;
    let RevivalConfig = class RevivalConfig extends Message {
        constructor(param) {
            super();
            this.isEnabled = false;
            this.endUserNum = 0;
            this.totalCnt = 0;
            this.cntPerUser = 0;
            this.totalUserNum = 0;
            this.waitSec = 0;
            this.scoreFactor = 0;
            this.rounds = [];
            if (param) {
                this.isEnabled = param.isEnabled;
                this.endUserNum = param.endUserNum;
                this.totalCnt = param.totalCnt;
                this.cntPerUser = param.cntPerUser;
                this.totalUserNum = param.totalUserNum;
                this.waitSec = param.waitSec;
                this.scoreFactor = param.scoreFactor;
                this.rounds = param.rounds;
            }
        }
    };
    __decorate([
        Field.d(1, "bool", "optional")
    ], RevivalConfig.prototype, "isEnabled", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], RevivalConfig.prototype, "endUserNum", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], RevivalConfig.prototype, "totalCnt", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], RevivalConfig.prototype, "cntPerUser", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], RevivalConfig.prototype, "totalUserNum", void 0);
    __decorate([
        Field.d(6, "int32", "optional")
    ], RevivalConfig.prototype, "waitSec", void 0);
    __decorate([
        Field.d(7, "int32", "optional")
    ], RevivalConfig.prototype, "scoreFactor", void 0);
    __decorate([
        Field.d(8, RevivalRoundConfig, "repeated")
    ], RevivalConfig.prototype, "rounds", void 0);
    RevivalConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_RevivalConfig")
    ], RevivalConfig);
    match.RevivalConfig = RevivalConfig;
    let FixedOutScoreConfig = class FixedOutScoreConfig extends Message {
        constructor(param) {
            super();
            this.initOutScore = 0;
            this.incrOutScoreSec = 0;
            this.incrOutScore = 0;
            if (param) {
                this.initOutScore = param.initOutScore;
                this.incrOutScoreSec = param.incrOutScoreSec;
                this.incrOutScore = param.incrOutScore;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], FixedOutScoreConfig.prototype, "initOutScore", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], FixedOutScoreConfig.prototype, "incrOutScoreSec", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], FixedOutScoreConfig.prototype, "incrOutScore", void 0);
    FixedOutScoreConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_FixedOutScoreConfig")
    ], FixedOutScoreConfig);
    match.FixedOutScoreConfig = FixedOutScoreConfig;
    let RatioOutScoreConfig = class RatioOutScoreConfig extends Message {
        constructor(param) {
            super();
            this.anteRate = 0;
            if (param) {
                this.anteRate = param.anteRate;
            }
        }
    };
    __decorate([
        Field.d(1, "float", "optional")
    ], RatioOutScoreConfig.prototype, "anteRate", void 0);
    RatioOutScoreConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_RatioOutScoreConfig")
    ], RatioOutScoreConfig);
    match.RatioOutScoreConfig = RatioOutScoreConfig;
    let OutScoreConfig = class OutScoreConfig extends Message {
        constructor(param) {
            super();
            this.mode = 0;
            this.fixedMode = new FixedOutScoreConfig();
            this.ratioMode = new RatioOutScoreConfig();
            this.isOut = false;
            if (param) {
                this.mode = param.mode;
                this.fixedMode = new FixedOutScoreConfig(param.fixedMode);
                this.ratioMode = new RatioOutScoreConfig(param.ratioMode);
                this.isOut = param.isOut;
            }
        }
    };
    __decorate([
        Field.d(1, OutScoreMode, "optional")
    ], OutScoreConfig.prototype, "mode", void 0);
    __decorate([
        Field.d(2, FixedOutScoreConfig, "optional")
    ], OutScoreConfig.prototype, "fixedMode", void 0);
    __decorate([
        Field.d(3, RatioOutScoreConfig, "optional")
    ], OutScoreConfig.prototype, "ratioMode", void 0);
    __decorate([
        Field.d(4, "bool", "optional")
    ], OutScoreConfig.prototype, "isOut", void 0);
    OutScoreConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_OutScoreConfig")
    ], OutScoreConfig);
    match.OutScoreConfig = OutScoreConfig;
    let FixedScoreSettlementConfig = class FixedScoreSettlementConfig extends Message {
        constructor(param) {
            super();
            this.winScore = 0;
            this.loseScore = 0;
            this.drawScore = 0;
            if (param) {
                this.winScore = param.winScore;
                this.loseScore = param.loseScore;
                this.drawScore = param.drawScore;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], FixedScoreSettlementConfig.prototype, "winScore", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], FixedScoreSettlementConfig.prototype, "loseScore", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], FixedScoreSettlementConfig.prototype, "drawScore", void 0);
    FixedScoreSettlementConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_FixedScoreSettlementConfig")
    ], FixedScoreSettlementConfig);
    match.FixedScoreSettlementConfig = FixedScoreSettlementConfig;
    let RatioScoreSettlementRiseConfig = class RatioScoreSettlementRiseConfig extends Message {
        constructor(param) {
            super();
            this.incrAnteSec = 0;
            this.incrAnteRate = 0;
            if (param) {
                this.incrAnteSec = param.incrAnteSec;
                this.incrAnteRate = param.incrAnteRate;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], RatioScoreSettlementRiseConfig.prototype, "incrAnteSec", void 0);
    __decorate([
        Field.d(2, "float", "optional")
    ], RatioScoreSettlementRiseConfig.prototype, "incrAnteRate", void 0);
    RatioScoreSettlementRiseConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_RatioScoreSettlementRiseConfig")
    ], RatioScoreSettlementRiseConfig);
    match.RatioScoreSettlementRiseConfig = RatioScoreSettlementRiseConfig;
    let RatioScoreSettlementConfig = class RatioScoreSettlementConfig extends Message {
        constructor(param) {
            super();
            this.mode = 0;
            this.initAnte = 0;
            this.riseConfig = new RatioScoreSettlementRiseConfig();
            if (param) {
                this.mode = param.mode;
                this.initAnte = param.initAnte;
                this.riseConfig = new RatioScoreSettlementRiseConfig(param.riseConfig);
            }
        }
    };
    __decorate([
        Field.d(1, RatioScoreSettlementMode, "optional")
    ], RatioScoreSettlementConfig.prototype, "mode", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], RatioScoreSettlementConfig.prototype, "initAnte", void 0);
    __decorate([
        Field.d(3, RatioScoreSettlementRiseConfig, "optional")
    ], RatioScoreSettlementConfig.prototype, "riseConfig", void 0);
    RatioScoreSettlementConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_RatioScoreSettlementConfig")
    ], RatioScoreSettlementConfig);
    match.RatioScoreSettlementConfig = RatioScoreSettlementConfig;
    let ScoreSettlementConfig = class ScoreSettlementConfig extends Message {
        constructor(param) {
            super();
            this.mode = 0;
            this.fixedMode = new FixedScoreSettlementConfig();
            this.ratioMode = new RatioScoreSettlementConfig();
            if (param) {
                this.mode = param.mode;
                this.fixedMode = new FixedScoreSettlementConfig(param.fixedMode);
                this.ratioMode = new RatioScoreSettlementConfig(param.ratioMode);
            }
        }
    };
    __decorate([
        Field.d(1, ScoreSettlementMode, "optional")
    ], ScoreSettlementConfig.prototype, "mode", void 0);
    __decorate([
        Field.d(2, FixedScoreSettlementConfig, "optional")
    ], ScoreSettlementConfig.prototype, "fixedMode", void 0);
    __decorate([
        Field.d(3, RatioScoreSettlementConfig, "optional")
    ], ScoreSettlementConfig.prototype, "ratioMode", void 0);
    ScoreSettlementConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_ScoreSettlementConfig")
    ], ScoreSettlementConfig);
    match.ScoreSettlementConfig = ScoreSettlementConfig;
    let ScoreHoldRatioConfig = class ScoreHoldRatioConfig extends Message {
        constructor(param) {
            super();
            this.ratioRate = 0;
            if (param) {
                this.ratioRate = param.ratioRate;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ScoreHoldRatioConfig.prototype, "ratioRate", void 0);
    ScoreHoldRatioConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_ScoreHoldRatioConfig")
    ], ScoreHoldRatioConfig);
    match.ScoreHoldRatioConfig = ScoreHoldRatioConfig;
    let ScoreHoldRadicalConfig = class ScoreHoldRadicalConfig extends Message {
        constructor(param) {
            super();
            this.radicalRate = 0;
            if (param) {
                this.radicalRate = param.radicalRate;
            }
        }
    };
    __decorate([
        Field.d(1, "float", "optional")
    ], ScoreHoldRadicalConfig.prototype, "radicalRate", void 0);
    ScoreHoldRadicalConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_ScoreHoldRadicalConfig")
    ], ScoreHoldRadicalConfig);
    match.ScoreHoldRadicalConfig = ScoreHoldRadicalConfig;
    let ScoreHoldStairConfig = class ScoreHoldStairConfig extends Message {
        constructor(param) {
            super();
            this.baseScore = 0;
            this.ratioRate = [];
            if (param) {
                this.baseScore = param.baseScore;
                this.ratioRate = param.ratioRate;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ScoreHoldStairConfig.prototype, "baseScore", void 0);
    __decorate([
        Field.d(2, "int32", "repeated")
    ], ScoreHoldStairConfig.prototype, "ratioRate", void 0);
    ScoreHoldStairConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_ScoreHoldStairConfig")
    ], ScoreHoldStairConfig);
    match.ScoreHoldStairConfig = ScoreHoldStairConfig;
    let PromotionConfig = class PromotionConfig extends Message {
        constructor(param) {
            super();
            this.mode = 0;
            this.ratioMode = new ScoreHoldRatioConfig();
            this.radicalMode = new ScoreHoldRadicalConfig();
            this.promotionNum = 0;
            this.maxTakeScore = 0;
            this.isPromotion = false;
            this.stairMode = new ScoreHoldStairConfig();
            if (param) {
                this.mode = param.mode;
                this.ratioMode = new ScoreHoldRatioConfig(param.ratioMode);
                this.radicalMode = new ScoreHoldRadicalConfig(param.radicalMode);
                this.promotionNum = param.promotionNum;
                this.maxTakeScore = param.maxTakeScore;
                this.isPromotion = param.isPromotion;
                this.stairMode = new ScoreHoldStairConfig(param.stairMode);
            }
        }
    };
    __decorate([
        Field.d(1, ScoreHoldMode, "optional")
    ], PromotionConfig.prototype, "mode", void 0);
    __decorate([
        Field.d(2, ScoreHoldRatioConfig, "optional")
    ], PromotionConfig.prototype, "ratioMode", void 0);
    __decorate([
        Field.d(3, ScoreHoldRadicalConfig, "optional")
    ], PromotionConfig.prototype, "radicalMode", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], PromotionConfig.prototype, "promotionNum", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], PromotionConfig.prototype, "maxTakeScore", void 0);
    __decorate([
        Field.d(6, "bool", "optional")
    ], PromotionConfig.prototype, "isPromotion", void 0);
    __decorate([
        Field.d(7, ScoreHoldStairConfig, "optional")
    ], PromotionConfig.prototype, "stairMode", void 0);
    PromotionConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_PromotionConfig")
    ], PromotionConfig);
    match.PromotionConfig = PromotionConfig;
    let StrikeStageConfig = class StrikeStageConfig extends Message {
        constructor(param) {
            super();
            this.strikeEndType = 0;
            this.endSec = 0;
            this.endUserNum = 0;
            this.allocMode = 0;
            this.revival = new RevivalConfig();
            this.outScore = new OutScoreConfig();
            this.scoreSettlement = new ScoreSettlementConfig();
            this.stageName = "";
            this.promotionConfig = new PromotionConfig();
            if (param) {
                this.strikeEndType = param.strikeEndType;
                this.endSec = param.endSec;
                this.endUserNum = param.endUserNum;
                this.allocMode = param.allocMode;
                this.revival = new RevivalConfig(param.revival);
                this.outScore = new OutScoreConfig(param.outScore);
                this.scoreSettlement = new ScoreSettlementConfig(param.scoreSettlement);
                this.stageName = param.stageName;
                this.promotionConfig = new PromotionConfig(param.promotionConfig);
            }
        }
    };
    __decorate([
        Field.d(1, StrikeEndType, "optional")
    ], StrikeStageConfig.prototype, "strikeEndType", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], StrikeStageConfig.prototype, "endSec", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], StrikeStageConfig.prototype, "endUserNum", void 0);
    __decorate([
        Field.d(4, AllocMode, "optional")
    ], StrikeStageConfig.prototype, "allocMode", void 0);
    __decorate([
        Field.d(5, RevivalConfig, "optional")
    ], StrikeStageConfig.prototype, "revival", void 0);
    __decorate([
        Field.d(6, OutScoreConfig, "optional")
    ], StrikeStageConfig.prototype, "outScore", void 0);
    __decorate([
        Field.d(7, ScoreSettlementConfig, "optional")
    ], StrikeStageConfig.prototype, "scoreSettlement", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], StrikeStageConfig.prototype, "stageName", void 0);
    __decorate([
        Field.d(9, PromotionConfig, "optional")
    ], StrikeStageConfig.prototype, "promotionConfig", void 0);
    StrikeStageConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_StrikeStageConfig")
    ], StrikeStageConfig);
    match.StrikeStageConfig = StrikeStageConfig;
    let RoundConfig = class RoundConfig extends Message {
        constructor(param) {
            super();
            this.gameNum = 0;
            this.initScore = 0;
            this.scoreSettlement = new ScoreSettlementConfig();
            this.promotion = new PromotionConfig();
            if (param) {
                this.gameNum = param.gameNum;
                this.initScore = param.initScore;
                this.scoreSettlement = new ScoreSettlementConfig(param.scoreSettlement);
                this.promotion = new PromotionConfig(param.promotion);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], RoundConfig.prototype, "gameNum", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], RoundConfig.prototype, "initScore", void 0);
    __decorate([
        Field.d(3, ScoreSettlementConfig, "optional")
    ], RoundConfig.prototype, "scoreSettlement", void 0);
    __decorate([
        Field.d(4, PromotionConfig, "optional")
    ], RoundConfig.prototype, "promotion", void 0);
    RoundConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_RoundConfig")
    ], RoundConfig);
    match.RoundConfig = RoundConfig;
    let FinalityStageConfig = class FinalityStageConfig extends Message {
        constructor(param) {
            super();
            this.allocMode = 0;
            this.electMode = 0;
            this.outRuleMode = 0;
            this.isSwapSeat = false;
            this.rounds = [];
            this.isExtraGame = false;
            this.stageName = "";
            if (param) {
                this.allocMode = param.allocMode;
                this.electMode = param.electMode;
                this.outRuleMode = param.outRuleMode;
                this.isSwapSeat = param.isSwapSeat;
                this.rounds = param.rounds;
                this.isExtraGame = param.isExtraGame;
                this.stageName = param.stageName;
            }
        }
    };
    __decorate([
        Field.d(1, AllocMode, "optional")
    ], FinalityStageConfig.prototype, "allocMode", void 0);
    __decorate([
        Field.d(2, ElectMode, "optional")
    ], FinalityStageConfig.prototype, "electMode", void 0);
    __decorate([
        Field.d(3, OutRuleMode, "optional")
    ], FinalityStageConfig.prototype, "outRuleMode", void 0);
    __decorate([
        Field.d(4, "bool", "optional")
    ], FinalityStageConfig.prototype, "isSwapSeat", void 0);
    __decorate([
        Field.d(5, RoundConfig, "repeated")
    ], FinalityStageConfig.prototype, "rounds", void 0);
    __decorate([
        Field.d(6, "bool", "optional")
    ], FinalityStageConfig.prototype, "isExtraGame", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], FinalityStageConfig.prototype, "stageName", void 0);
    FinalityStageConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_FinalityStageConfig")
    ], FinalityStageConfig);
    match.FinalityStageConfig = FinalityStageConfig;
    let FastRoundPrize = class FastRoundPrize extends Message {
        constructor(param) {
            super();
            this.prizes = new PrizeDetailConfig();
            this.seq = 0;
            if (param) {
                this.prizes = new PrizeDetailConfig(param.prizes);
                this.seq = param.seq;
            }
        }
    };
    __decorate([
        Field.d(1, PrizeDetailConfig, "optional")
    ], FastRoundPrize.prototype, "prizes", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], FastRoundPrize.prototype, "seq", void 0);
    FastRoundPrize = __decorate([
        Type.d("Type_tss_match_common_config_proto_FastRoundPrize")
    ], FastRoundPrize);
    match.FastRoundPrize = FastRoundPrize;
    let MatchDifficulty = class MatchDifficulty extends Message {
        constructor(param) {
            super();
            this.base = 0;
            this.min = 0;
            this.max = 0;
            if (param) {
                this.base = param.base;
                this.min = param.min;
                this.max = param.max;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], MatchDifficulty.prototype, "base", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], MatchDifficulty.prototype, "min", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], MatchDifficulty.prototype, "max", void 0);
    MatchDifficulty = __decorate([
        Type.d("Type_tss_match_common_config_proto_MatchDifficulty")
    ], MatchDifficulty);
    match.MatchDifficulty = MatchDifficulty;
    let FastStageConfig = class FastStageConfig extends Message {
        constructor(param) {
            super();
            this.outRuleMode = 0;
            this.rounds = [];
            this.isOpenLevel = false;
            this.levels = [];
            this.isOpenPrize = false;
            this.roundPrize = [];
            this.isOpenRevival = false;
            this.revival = new RevivalConfig();
            this.difficulties = [];
            if (param) {
                this.outRuleMode = param.outRuleMode;
                this.rounds = param.rounds;
                this.isOpenLevel = param.isOpenLevel;
                this.levels = param.levels;
                this.isOpenPrize = param.isOpenPrize;
                this.roundPrize = param.roundPrize;
                this.isOpenRevival = param.isOpenRevival;
                this.revival = new RevivalConfig(param.revival);
                this.difficulties = param.difficulties;
            }
        }
    };
    __decorate([
        Field.d(1, OutRuleMode, "optional")
    ], FastStageConfig.prototype, "outRuleMode", void 0);
    __decorate([
        Field.d(2, RoundConfig, "repeated")
    ], FastStageConfig.prototype, "rounds", void 0);
    __decorate([
        Field.d(3, "bool", "optional")
    ], FastStageConfig.prototype, "isOpenLevel", void 0);
    __decorate([
        Field.d(4, "int32", "repeated")
    ], FastStageConfig.prototype, "levels", void 0);
    __decorate([
        Field.d(5, "bool", "optional")
    ], FastStageConfig.prototype, "isOpenPrize", void 0);
    __decorate([
        Field.d(6, FastRoundPrize, "repeated")
    ], FastStageConfig.prototype, "roundPrize", void 0);
    __decorate([
        Field.d(7, "bool", "optional")
    ], FastStageConfig.prototype, "isOpenRevival", void 0);
    __decorate([
        Field.d(8, RevivalConfig, "optional")
    ], FastStageConfig.prototype, "revival", void 0);
    __decorate([
        Field.d(9, MatchDifficulty, "repeated")
    ], FastStageConfig.prototype, "difficulties", void 0);
    FastStageConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_FastStageConfig")
    ], FastStageConfig);
    match.FastStageConfig = FastStageConfig;
    let BreakthroughStage = class BreakthroughStage extends Message {
        constructor(param) {
            super();
            this.outRuleMode = 0;
            this.isOpenReward = false;
            this.roundNum = 0;
            this.roundRewards = [];
            this.revival = new RevivalConfig();
            if (param) {
                this.outRuleMode = param.outRuleMode;
                this.isOpenReward = param.isOpenReward;
                this.roundNum = param.roundNum;
                this.roundRewards = param.roundRewards;
                this.revival = new RevivalConfig(param.revival);
            }
        }
    };
    __decorate([
        Field.d(1, OutRuleMode, "optional")
    ], BreakthroughStage.prototype, "outRuleMode", void 0);
    __decorate([
        Field.d(2, "bool", "optional")
    ], BreakthroughStage.prototype, "isOpenReward", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], BreakthroughStage.prototype, "roundNum", void 0);
    __decorate([
        Field.d(4, FastRoundPrize, "repeated")
    ], BreakthroughStage.prototype, "roundRewards", void 0);
    __decorate([
        Field.d(5, RevivalConfig, "optional")
    ], BreakthroughStage.prototype, "revival", void 0);
    BreakthroughStage = __decorate([
        Type.d("Type_tss_match_common_config_proto_BreakthroughStage")
    ], BreakthroughStage);
    match.BreakthroughStage = BreakthroughStage;
    let StageConfig = class StageConfig extends Message {
        constructor(param) {
            super();
            this.stageMode = 0;
            this.strikeStage = new StrikeStageConfig();
            this.finalityStage = new FinalityStageConfig();
            this.fastStage = new FastStageConfig();
            this.breakthroughStage = new BreakthroughStage();
            if (param) {
                this.stageMode = param.stageMode;
                this.strikeStage = new StrikeStageConfig(param.strikeStage);
                this.finalityStage = new FinalityStageConfig(param.finalityStage);
                this.fastStage = new FastStageConfig(param.fastStage);
                this.breakthroughStage = new BreakthroughStage(param.breakthroughStage);
            }
        }
    };
    __decorate([
        Field.d(1, StageMode, "optional")
    ], StageConfig.prototype, "stageMode", void 0);
    __decorate([
        Field.d(2, StrikeStageConfig, "optional")
    ], StageConfig.prototype, "strikeStage", void 0);
    __decorate([
        Field.d(3, FinalityStageConfig, "optional")
    ], StageConfig.prototype, "finalityStage", void 0);
    __decorate([
        Field.d(4, FastStageConfig, "optional")
    ], StageConfig.prototype, "fastStage", void 0);
    __decorate([
        Field.d(5, BreakthroughStage, "optional")
    ], StageConfig.prototype, "breakthroughStage", void 0);
    StageConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_StageConfig")
    ], StageConfig);
    match.StageConfig = StageConfig;
    let RuleConfig = class RuleConfig extends Message {
        constructor(param) {
            super();
            this.gameID = "";
            this.ruleID = 0;
            this.ruleName = "";
            this.matchKitVer = "";
            this.ruleStatus = 0;
            this.updateTime = 0;
            this.tags = [];
            this.updateOwner = "";
            this.initScore = 0;
            this.stages = [];
            if (param) {
                this.gameID = param.gameID;
                this.ruleID = param.ruleID;
                this.ruleName = param.ruleName;
                this.matchKitVer = param.matchKitVer;
                this.ruleStatus = param.ruleStatus;
                this.updateTime = param.updateTime;
                this.tags = param.tags;
                this.updateOwner = param.updateOwner;
                this.initScore = param.initScore;
                this.stages = param.stages;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], RuleConfig.prototype, "gameID", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], RuleConfig.prototype, "ruleID", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], RuleConfig.prototype, "ruleName", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], RuleConfig.prototype, "matchKitVer", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], RuleConfig.prototype, "ruleStatus", void 0);
    __decorate([
        Field.d(6, "int64", "optional")
    ], RuleConfig.prototype, "updateTime", void 0);
    __decorate([
        Field.d(7, "string", "repeated")
    ], RuleConfig.prototype, "tags", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], RuleConfig.prototype, "updateOwner", void 0);
    __decorate([
        Field.d(9, "int32", "optional")
    ], RuleConfig.prototype, "initScore", void 0);
    __decorate([
        Field.d(10, StageConfig, "repeated")
    ], RuleConfig.prototype, "stages", void 0);
    RuleConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_RuleConfig")
    ], RuleConfig);
    match.RuleConfig = RuleConfig;
    let RobotConfig = class RobotConfig extends Message {
        constructor(param) {
            super();
            this.isEnabled = false;
            this.addRobotMode = 0;
            this.addNum = 0;
            this.minJoinUserNum = 0;
            if (param) {
                this.isEnabled = param.isEnabled;
                this.addRobotMode = param.addRobotMode;
                this.addNum = param.addNum;
                this.minJoinUserNum = param.minJoinUserNum;
            }
        }
    };
    __decorate([
        Field.d(1, "bool", "optional")
    ], RobotConfig.prototype, "isEnabled", void 0);
    __decorate([
        Field.d(2, AddRobotMode, "optional")
    ], RobotConfig.prototype, "addRobotMode", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], RobotConfig.prototype, "addNum", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], RobotConfig.prototype, "minJoinUserNum", void 0);
    RobotConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_RobotConfig")
    ], RobotConfig);
    match.RobotConfig = RobotConfig;
    let ChatRoomConfig = class ChatRoomConfig extends Message {
        constructor(param) {
            super();
            this.isEnabled = false;
            this.openSec = 0;
            this.closedSec = 0;
            this.background = "";
            this.chatID = "";
            if (param) {
                this.isEnabled = param.isEnabled;
                this.openSec = param.openSec;
                this.closedSec = param.closedSec;
                this.background = param.background;
                this.chatID = param.chatID;
            }
        }
    };
    __decorate([
        Field.d(1, "bool", "optional")
    ], ChatRoomConfig.prototype, "isEnabled", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], ChatRoomConfig.prototype, "openSec", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], ChatRoomConfig.prototype, "closedSec", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], ChatRoomConfig.prototype, "background", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], ChatRoomConfig.prototype, "chatID", void 0);
    ChatRoomConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_ChatRoomConfig")
    ], ChatRoomConfig);
    match.ChatRoomConfig = ChatRoomConfig;
    let ObserveConfig = class ObserveConfig extends Message {
        constructor(param) {
            super();
            this.hasObserve = false;
            this.observeType = 0;
            this.delayedSec = 0;
            this.hasVisible = false;
            if (param) {
                this.hasObserve = param.hasObserve;
                this.observeType = param.observeType;
                this.delayedSec = param.delayedSec;
                this.hasVisible = param.hasVisible;
            }
        }
    };
    __decorate([
        Field.d(1, "bool", "optional")
    ], ObserveConfig.prototype, "hasObserve", void 0);
    __decorate([
        Field.d(2, ObserveType, "optional")
    ], ObserveConfig.prototype, "observeType", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], ObserveConfig.prototype, "delayedSec", void 0);
    __decorate([
        Field.d(4, "bool", "optional")
    ], ObserveConfig.prototype, "hasVisible", void 0);
    ObserveConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_ObserveConfig")
    ], ObserveConfig);
    match.ObserveConfig = ObserveConfig;
    let PreventCheatConfig = class PreventCheatConfig extends Message {
        constructor(param) {
            super();
            this.isPreventCheat = false;
            this.isHideUserInfo = false;
            this.isCheckIPLocation = false;
            this.isCheckLBSLocation = false;
            this.LBSCheckDistance = 0;
            this.isAllowProp = false;
            this.isEnabledMinMatchingUser = false;
            this.minMatchingUserNum = 0;
            if (param) {
                this.isPreventCheat = param.isPreventCheat;
                this.isHideUserInfo = param.isHideUserInfo;
                this.isCheckIPLocation = param.isCheckIPLocation;
                this.isCheckLBSLocation = param.isCheckLBSLocation;
                this.LBSCheckDistance = param.LBSCheckDistance;
                this.isAllowProp = param.isAllowProp;
                this.isEnabledMinMatchingUser = param.isEnabledMinMatchingUser;
                this.minMatchingUserNum = param.minMatchingUserNum;
            }
        }
    };
    __decorate([
        Field.d(1, "bool", "optional")
    ], PreventCheatConfig.prototype, "isPreventCheat", void 0);
    __decorate([
        Field.d(2, "bool", "optional")
    ], PreventCheatConfig.prototype, "isHideUserInfo", void 0);
    __decorate([
        Field.d(3, "bool", "optional")
    ], PreventCheatConfig.prototype, "isCheckIPLocation", void 0);
    __decorate([
        Field.d(4, "bool", "optional")
    ], PreventCheatConfig.prototype, "isCheckLBSLocation", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], PreventCheatConfig.prototype, "LBSCheckDistance", void 0);
    __decorate([
        Field.d(6, "bool", "optional")
    ], PreventCheatConfig.prototype, "isAllowProp", void 0);
    __decorate([
        Field.d(7, "bool", "optional")
    ], PreventCheatConfig.prototype, "isEnabledMinMatchingUser", void 0);
    __decorate([
        Field.d(8, "int32", "optional")
    ], PreventCheatConfig.prototype, "minMatchingUserNum", void 0);
    PreventCheatConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_PreventCheatConfig")
    ], PreventCheatConfig);
    match.PreventCheatConfig = PreventCheatConfig;
    let DelayEntryConfig = class DelayEntryConfig extends Message {
        constructor(param) {
            super();
            this.isEnabled = false;
            this.delaySec = 0;
            this.isOnlyFirstStageEnabled = false;
            if (param) {
                this.isEnabled = param.isEnabled;
                this.delaySec = param.delaySec;
                this.isOnlyFirstStageEnabled = param.isOnlyFirstStageEnabled;
            }
        }
    };
    __decorate([
        Field.d(1, "bool", "optional")
    ], DelayEntryConfig.prototype, "isEnabled", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], DelayEntryConfig.prototype, "delaySec", void 0);
    __decorate([
        Field.d(3, "bool", "optional")
    ], DelayEntryConfig.prototype, "isOnlyFirstStageEnabled", void 0);
    DelayEntryConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_DelayEntryConfig")
    ], DelayEntryConfig);
    match.DelayEntryConfig = DelayEntryConfig;
    let SchemeConfig = class SchemeConfig extends Message {
        constructor(param) {
            super();
            this.gameID = "";
            this.ruleID = 0;
            this.schemeID = 0;
            this.schemeName = "";
            this.schemeStatus = 0;
            this.updateTime = 0;
            this.updateOwner = "";
            this.subMatchType = 0;
            this.isForBeginner = false;
            this.scheduleConfig = new ScheduleConfig();
            this.signUpConfig = new SignUpConfig();
            this.matchConfig = new MatchConfig();
            this.prizeConfig = new PrizeConfig();
            this.robotConfig = new RobotConfig();
            this.chatRoomConfig = new ChatRoomConfig();
            this.tags = [];
            this.seriesID = 0;
            this.seriesName = "";
            this.observeConfig = new ObserveConfig();
            this.preventCheatConfig = new PreventCheatConfig();
            this.matchCfgTag = [];
            this.delayEntryConfig = new DelayEntryConfig();
            if (param) {
                this.gameID = param.gameID;
                this.ruleID = param.ruleID;
                this.schemeID = param.schemeID;
                this.schemeName = param.schemeName;
                this.schemeStatus = param.schemeStatus;
                this.updateTime = param.updateTime;
                this.updateOwner = param.updateOwner;
                this.subMatchType = param.subMatchType;
                this.isForBeginner = param.isForBeginner;
                this.scheduleConfig = new ScheduleConfig(param.scheduleConfig);
                this.signUpConfig = new SignUpConfig(param.signUpConfig);
                this.matchConfig = new MatchConfig(param.matchConfig);
                this.prizeConfig = new PrizeConfig(param.prizeConfig);
                this.robotConfig = new RobotConfig(param.robotConfig);
                this.chatRoomConfig = new ChatRoomConfig(param.chatRoomConfig);
                this.tags = param.tags;
                this.seriesID = param.seriesID;
                this.seriesName = param.seriesName;
                this.observeConfig = new ObserveConfig(param.observeConfig);
                this.preventCheatConfig = new PreventCheatConfig(param.preventCheatConfig);
                this.matchCfgTag = param.matchCfgTag;
                this.delayEntryConfig = new DelayEntryConfig(param.delayEntryConfig);
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], SchemeConfig.prototype, "gameID", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], SchemeConfig.prototype, "ruleID", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], SchemeConfig.prototype, "schemeID", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], SchemeConfig.prototype, "schemeName", void 0);
    __decorate([
        Field.d(5, SchemeStatus, "optional")
    ], SchemeConfig.prototype, "schemeStatus", void 0);
    __decorate([
        Field.d(7, "int64", "optional")
    ], SchemeConfig.prototype, "updateTime", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], SchemeConfig.prototype, "updateOwner", void 0);
    __decorate([
        Field.d(9, SubMatchType, "optional")
    ], SchemeConfig.prototype, "subMatchType", void 0);
    __decorate([
        Field.d(10, "bool", "optional")
    ], SchemeConfig.prototype, "isForBeginner", void 0);
    __decorate([
        Field.d(15, ScheduleConfig, "optional")
    ], SchemeConfig.prototype, "scheduleConfig", void 0);
    __decorate([
        Field.d(16, SignUpConfig, "optional")
    ], SchemeConfig.prototype, "signUpConfig", void 0);
    __decorate([
        Field.d(17, MatchConfig, "optional")
    ], SchemeConfig.prototype, "matchConfig", void 0);
    __decorate([
        Field.d(18, PrizeConfig, "optional")
    ], SchemeConfig.prototype, "prizeConfig", void 0);
    __decorate([
        Field.d(19, RobotConfig, "optional")
    ], SchemeConfig.prototype, "robotConfig", void 0);
    __decorate([
        Field.d(20, ChatRoomConfig, "optional")
    ], SchemeConfig.prototype, "chatRoomConfig", void 0);
    __decorate([
        Field.d(21, "string", "repeated")
    ], SchemeConfig.prototype, "tags", void 0);
    __decorate([
        Field.d(22, "int64", "optional")
    ], SchemeConfig.prototype, "seriesID", void 0);
    __decorate([
        Field.d(25, "string", "optional")
    ], SchemeConfig.prototype, "seriesName", void 0);
    __decorate([
        Field.d(23, ObserveConfig, "optional")
    ], SchemeConfig.prototype, "observeConfig", void 0);
    __decorate([
        Field.d(24, PreventCheatConfig, "optional")
    ], SchemeConfig.prototype, "preventCheatConfig", void 0);
    __decorate([
        Field.d(26, "string", "repeated")
    ], SchemeConfig.prototype, "matchCfgTag", void 0);
    __decorate([
        Field.d(27, DelayEntryConfig, "optional")
    ], SchemeConfig.prototype, "delayEntryConfig", void 0);
    SchemeConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_SchemeConfig")
    ], SchemeConfig);
    match.SchemeConfig = SchemeConfig;
    let WhiteListUser = class WhiteListUser extends Message {
        constructor(param) {
            super();
            this.userName = "";
            this.uids = [];
            if (param) {
                this.userName = param.userName;
                this.uids = param.uids;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], WhiteListUser.prototype, "userName", void 0);
    __decorate([
        Field.d(2, "int64", "repeated")
    ], WhiteListUser.prototype, "uids", void 0);
    WhiteListUser = __decorate([
        Type.d("Type_tss_match_common_config_proto_WhiteListUser")
    ], WhiteListUser);
    match.WhiteListUser = WhiteListUser;
    let SeriesScheduleConfig = class SeriesScheduleConfig extends Message {
        constructor(param) {
            super();
            this.seriesScheduleSeq = 0;
            this.seriesScheduleName = "";
            this.schemeID = 0;
            this.schemeName = "";
            this.startTime = 0;
            this.ruleID = 0;
            this.promotionNum = 0;
            if (param) {
                this.seriesScheduleSeq = param.seriesScheduleSeq;
                this.seriesScheduleName = param.seriesScheduleName;
                this.schemeID = param.schemeID;
                this.schemeName = param.schemeName;
                this.startTime = param.startTime;
                this.ruleID = param.ruleID;
                this.promotionNum = param.promotionNum;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], SeriesScheduleConfig.prototype, "seriesScheduleSeq", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], SeriesScheduleConfig.prototype, "seriesScheduleName", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], SeriesScheduleConfig.prototype, "schemeID", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], SeriesScheduleConfig.prototype, "schemeName", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], SeriesScheduleConfig.prototype, "startTime", void 0);
    __decorate([
        Field.d(6, "int64", "optional")
    ], SeriesScheduleConfig.prototype, "ruleID", void 0);
    __decorate([
        Field.d(7, "int32", "optional")
    ], SeriesScheduleConfig.prototype, "promotionNum", void 0);
    SeriesScheduleConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_SeriesScheduleConfig")
    ], SeriesScheduleConfig);
    match.SeriesScheduleConfig = SeriesScheduleConfig;
    let SeriesConfig = class SeriesConfig extends Message {
        constructor(param) {
            super();
            this.seriesID = 0;
            this.gameID = "";
            this.scheduleNum = 0;
            this.updateTime = 0;
            this.updateOwner = "";
            this.seriesSchedules = [];
            this.seriesStatus = 0;
            this.hasWhitelist = false;
            this.signUpConfig = new SignUpConfig();
            this.chatRoomConfig = new ChatRoomConfig();
            this.seriesName = "";
            this.users = [];
            if (param) {
                this.seriesID = param.seriesID;
                this.gameID = param.gameID;
                this.scheduleNum = param.scheduleNum;
                this.updateTime = param.updateTime;
                this.updateOwner = param.updateOwner;
                this.seriesSchedules = param.seriesSchedules;
                this.seriesStatus = param.seriesStatus;
                this.hasWhitelist = param.hasWhitelist;
                this.signUpConfig = new SignUpConfig(param.signUpConfig);
                this.chatRoomConfig = new ChatRoomConfig(param.chatRoomConfig);
                this.seriesName = param.seriesName;
                this.users = param.users;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], SeriesConfig.prototype, "seriesID", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], SeriesConfig.prototype, "gameID", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], SeriesConfig.prototype, "scheduleNum", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], SeriesConfig.prototype, "updateTime", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], SeriesConfig.prototype, "updateOwner", void 0);
    __decorate([
        Field.d(6, SeriesScheduleConfig, "repeated")
    ], SeriesConfig.prototype, "seriesSchedules", void 0);
    __decorate([
        Field.d(7, SeriesStatus, "optional")
    ], SeriesConfig.prototype, "seriesStatus", void 0);
    __decorate([
        Field.d(8, "bool", "optional")
    ], SeriesConfig.prototype, "hasWhitelist", void 0);
    __decorate([
        Field.d(9, SignUpConfig, "optional")
    ], SeriesConfig.prototype, "signUpConfig", void 0);
    __decorate([
        Field.d(10, ChatRoomConfig, "optional")
    ], SeriesConfig.prototype, "chatRoomConfig", void 0);
    __decorate([
        Field.d(11, "string", "optional")
    ], SeriesConfig.prototype, "seriesName", void 0);
    __decorate([
        Field.d(12, "int64", "repeated")
    ], SeriesConfig.prototype, "users", void 0);
    SeriesConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_SeriesConfig")
    ], SeriesConfig);
    match.SeriesConfig = SeriesConfig;
    let GameConfig = class GameConfig extends Message {
        constructor(param) {
            super();
            this.gameID = "";
            this.seatCnt = 0;
            this.gameDeadline = 0;
            this.healthCheckTime = 0;
            this.punishNorm = 0;
            this.gameName = "";
            this.icon = "";
            this.slogan = "";
            this.gameType = 0;
            if (param) {
                this.gameID = param.gameID;
                this.seatCnt = param.seatCnt;
                this.gameDeadline = param.gameDeadline;
                this.healthCheckTime = param.healthCheckTime;
                this.punishNorm = param.punishNorm;
                this.gameName = param.gameName;
                this.icon = param.icon;
                this.slogan = param.slogan;
                this.gameType = param.gameType;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GameConfig.prototype, "gameID", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], GameConfig.prototype, "seatCnt", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], GameConfig.prototype, "gameDeadline", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], GameConfig.prototype, "healthCheckTime", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], GameConfig.prototype, "punishNorm", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], GameConfig.prototype, "gameName", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], GameConfig.prototype, "icon", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], GameConfig.prototype, "slogan", void 0);
    __decorate([
        Field.d(9, "int32", "optional")
    ], GameConfig.prototype, "gameType", void 0);
    GameConfig = __decorate([
        Type.d("Type_tss_match_common_config_proto_GameConfig")
    ], GameConfig);
    match.GameConfig = GameConfig;
    let SeriesScheduleInfo = class SeriesScheduleInfo extends Message {
        constructor(param) {
            super();
            this.seriesScheduleSeq = 0;
            this.seriesScheduleName = "";
            this.nextScheduleName = "";
            this.promotionNum = 0;
            if (param) {
                this.seriesScheduleSeq = param.seriesScheduleSeq;
                this.seriesScheduleName = param.seriesScheduleName;
                this.nextScheduleName = param.nextScheduleName;
                this.promotionNum = param.promotionNum;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], SeriesScheduleInfo.prototype, "seriesScheduleSeq", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], SeriesScheduleInfo.prototype, "seriesScheduleName", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], SeriesScheduleInfo.prototype, "nextScheduleName", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], SeriesScheduleInfo.prototype, "promotionNum", void 0);
    SeriesScheduleInfo = __decorate([
        Type.d("Type_tss_match_common_config_proto_SeriesScheduleInfo")
    ], SeriesScheduleInfo);
    match.SeriesScheduleInfo = SeriesScheduleInfo;
    let StartTimeSpan = class StartTimeSpan extends Message {
        constructor(param) {
            super();
            this.start = "";
            this.end = "";
            this.startTime = 0;
            this.endTime = 0;
            this.isLastSpan = false;
            if (param) {
                this.start = param.start;
                this.end = param.end;
                this.startTime = param.startTime;
                this.endTime = param.endTime;
                this.isLastSpan = param.isLastSpan;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], StartTimeSpan.prototype, "start", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], StartTimeSpan.prototype, "end", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], StartTimeSpan.prototype, "startTime", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], StartTimeSpan.prototype, "endTime", void 0);
    __decorate([
        Field.d(5, "bool", "optional")
    ], StartTimeSpan.prototype, "isLastSpan", void 0);
    StartTimeSpan = __decorate([
        Type.d("Type_tss_match_common_config_proto_StartTimeSpan")
    ], StartTimeSpan);
    match.StartTimeSpan = StartTimeSpan;
    let MatchConfigInfo = class MatchConfigInfo extends Message {
        constructor(param) {
            super();
            this.matchKey = [];
            this.matchID = "";
            this.matchName = "";
            this.matchKitVer = "";
            this.matchState = 0;
            this.matchEndTime = 0;
            this.matchSrvName = [];
            this.matchSrvID = [];
            this.ruleID = "";
            this.schemeStatus = 0;
            this.initScore = 0;
            this.subMatchType = 0;
            this.matchType = 0;
            this.phaseSeq = 0;
            this.canSignUp = false;
            this.totalRoundNum = 0;
            this.listTags = [];
            this.matchDetail = new MatchConfig();
            this.signUpConfig = new SignUpConfig();
            this.robotConfig = new RobotConfig();
            this.chatRoomConfig = new ChatRoomConfig();
            this.prizeConfig = new PrizeConfig();
            this.stages = [];
            this.gameConfig = new GameConfig();
            this.seriesID = 0;
            this.seriesSchedule = new SeriesScheduleInfo();
            this.observeConfig = new ObserveConfig();
            this.creatorUID = 0;
            this.preventCheatConfig = new PreventCheatConfig();
            this.roundPrizes = [];
            this.matchCfgTag = [];
            this.startSpan = new StartTimeSpan();
            this.joinMatchNeedPropNum = 0;
            this.rewardPoolMungNum = 0;
            this.delayEntryConfig = new DelayEntryConfig();
            this.prizeRing = 0;
            if (param) {
                this.matchKey = param.matchKey;
                this.matchID = param.matchID;
                this.matchName = param.matchName;
                this.matchKitVer = param.matchKitVer;
                this.matchState = param.matchState;
                this.matchEndTime = param.matchEndTime;
                this.matchSrvName = param.matchSrvName;
                this.matchSrvID = param.matchSrvID;
                this.ruleID = param.ruleID;
                this.schemeStatus = param.schemeStatus;
                this.initScore = param.initScore;
                this.subMatchType = param.subMatchType;
                this.matchType = param.matchType;
                this.phaseSeq = param.phaseSeq;
                this.canSignUp = param.canSignUp;
                this.totalRoundNum = param.totalRoundNum;
                this.listTags = param.listTags;
                this.matchDetail = new MatchConfig(param.matchDetail);
                this.signUpConfig = new SignUpConfig(param.signUpConfig);
                this.robotConfig = new RobotConfig(param.robotConfig);
                this.chatRoomConfig = new ChatRoomConfig(param.chatRoomConfig);
                this.prizeConfig = new PrizeConfig(param.prizeConfig);
                this.stages = param.stages;
                this.gameConfig = new GameConfig(param.gameConfig);
                this.seriesID = param.seriesID;
                this.seriesSchedule = new SeriesScheduleInfo(param.seriesSchedule);
                this.observeConfig = new ObserveConfig(param.observeConfig);
                this.creatorUID = param.creatorUID;
                this.preventCheatConfig = new PreventCheatConfig(param.preventCheatConfig);
                this.roundPrizes = param.roundPrizes;
                this.matchCfgTag = param.matchCfgTag;
                this.startSpan = new StartTimeSpan(param.startSpan);
                this.joinMatchNeedPropNum = param.joinMatchNeedPropNum;
                this.rewardPoolMungNum = param.rewardPoolMungNum;
                this.delayEntryConfig = new DelayEntryConfig(param.delayEntryConfig);
                this.prizeRing = param.prizeRing;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "repeated")
    ], MatchConfigInfo.prototype, "matchKey", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], MatchConfigInfo.prototype, "matchID", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], MatchConfigInfo.prototype, "matchName", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], MatchConfigInfo.prototype, "matchKitVer", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], MatchConfigInfo.prototype, "matchState", void 0);
    __decorate([
        Field.d(6, "int64", "optional")
    ], MatchConfigInfo.prototype, "matchEndTime", void 0);
    __decorate([
        Field.d(7, "string", "repeated")
    ], MatchConfigInfo.prototype, "matchSrvName", void 0);
    __decorate([
        Field.d(8, "uint32", "repeated")
    ], MatchConfigInfo.prototype, "matchSrvID", void 0);
    __decorate([
        Field.d(10, "string", "optional")
    ], MatchConfigInfo.prototype, "ruleID", void 0);
    __decorate([
        Field.d(11, SchemeStatus, "optional")
    ], MatchConfigInfo.prototype, "schemeStatus", void 0);
    __decorate([
        Field.d(12, "int32", "optional")
    ], MatchConfigInfo.prototype, "initScore", void 0);
    __decorate([
        Field.d(15, "int32", "optional")
    ], MatchConfigInfo.prototype, "subMatchType", void 0);
    __decorate([
        Field.d(16, "int32", "optional")
    ], MatchConfigInfo.prototype, "matchType", void 0);
    __decorate([
        Field.d(17, "int32", "optional")
    ], MatchConfigInfo.prototype, "phaseSeq", void 0);
    __decorate([
        Field.d(18, "bool", "optional")
    ], MatchConfigInfo.prototype, "canSignUp", void 0);
    __decorate([
        Field.d(19, "int32", "optional")
    ], MatchConfigInfo.prototype, "totalRoundNum", void 0);
    __decorate([
        Field.d(20, "int32", "repeated")
    ], MatchConfigInfo.prototype, "listTags", void 0);
    __decorate([
        Field.d(21, MatchConfig, "optional")
    ], MatchConfigInfo.prototype, "matchDetail", void 0);
    __decorate([
        Field.d(22, SignUpConfig, "optional")
    ], MatchConfigInfo.prototype, "signUpConfig", void 0);
    __decorate([
        Field.d(23, RobotConfig, "optional")
    ], MatchConfigInfo.prototype, "robotConfig", void 0);
    __decorate([
        Field.d(24, ChatRoomConfig, "optional")
    ], MatchConfigInfo.prototype, "chatRoomConfig", void 0);
    __decorate([
        Field.d(25, PrizeConfig, "optional")
    ], MatchConfigInfo.prototype, "prizeConfig", void 0);
    __decorate([
        Field.d(26, StageConfig, "repeated")
    ], MatchConfigInfo.prototype, "stages", void 0);
    __decorate([
        Field.d(27, GameConfig, "optional")
    ], MatchConfigInfo.prototype, "gameConfig", void 0);
    __decorate([
        Field.d(28, "int64", "optional")
    ], MatchConfigInfo.prototype, "seriesID", void 0);
    __decorate([
        Field.d(29, SeriesScheduleInfo, "optional")
    ], MatchConfigInfo.prototype, "seriesSchedule", void 0);
    __decorate([
        Field.d(30, ObserveConfig, "optional")
    ], MatchConfigInfo.prototype, "observeConfig", void 0);
    __decorate([
        Field.d(32, "int64", "optional")
    ], MatchConfigInfo.prototype, "creatorUID", void 0);
    __decorate([
        Field.d(33, PreventCheatConfig, "optional")
    ], MatchConfigInfo.prototype, "preventCheatConfig", void 0);
    __decorate([
        Field.d(34, PrizeDetailConfig, "repeated")
    ], MatchConfigInfo.prototype, "roundPrizes", void 0);
    __decorate([
        Field.d(35, "string", "repeated")
    ], MatchConfigInfo.prototype, "matchCfgTag", void 0);
    __decorate([
        Field.d(36, StartTimeSpan, "optional")
    ], MatchConfigInfo.prototype, "startSpan", void 0);
    __decorate([
        Field.d(37, "int32", "optional")
    ], MatchConfigInfo.prototype, "joinMatchNeedPropNum", void 0);
    __decorate([
        Field.d(38, "int32", "optional")
    ], MatchConfigInfo.prototype, "rewardPoolMungNum", void 0);
    __decorate([
        Field.d(39, DelayEntryConfig, "optional")
    ], MatchConfigInfo.prototype, "delayEntryConfig", void 0);
    __decorate([
        Field.d(40, "int32", "optional")
    ], MatchConfigInfo.prototype, "prizeRing", void 0);
    MatchConfigInfo = __decorate([
        Type.d("Type_tss_match_common_config_proto_MatchConfigInfo")
    ], MatchConfigInfo);
    match.MatchConfigInfo = MatchConfigInfo;
    let IncludedMatch = class IncludedMatch extends Message {
        constructor(param) {
            super();
            this.includedMode = 0;
            this.matchIDs = [];
            this.classifiedModes = [];
            if (param) {
                this.includedMode = param.includedMode;
                this.matchIDs = param.matchIDs;
                this.classifiedModes = param.classifiedModes;
            }
        }
    };
    __decorate([
        Field.d(1, IncludedMode, "optional")
    ], IncludedMatch.prototype, "includedMode", void 0);
    __decorate([
        Field.d(3, "int64", "repeated")
    ], IncludedMatch.prototype, "matchIDs", void 0);
    __decorate([
        Field.d(4, ClassifiedMode, "repeated")
    ], IncludedMatch.prototype, "classifiedModes", void 0);
    IncludedMatch = __decorate([
        Type.d("Type_tss_match_common_config_proto_IncludedMatch")
    ], IncludedMatch);
    match.IncludedMatch = IncludedMatch;
    let MatchTab = class MatchTab extends Message {
        constructor(param) {
            super();
            this.tabID = 0;
            this.tabName = "";
            this.isDisplayed = false;
            this.operator = "";
            this.operationTime = 0;
            this.backgroundColor = "";
            this.backgroundImage = "";
            this.notCheckedFontColor = "";
            this.checkedFontColor = "";
            this.seq = 0;
            this.tabTitleImage = "";
            this.includedMatches = new IncludedMatch();
            if (param) {
                this.tabID = param.tabID;
                this.tabName = param.tabName;
                this.isDisplayed = param.isDisplayed;
                this.operator = param.operator;
                this.operationTime = param.operationTime;
                this.backgroundColor = param.backgroundColor;
                this.backgroundImage = param.backgroundImage;
                this.notCheckedFontColor = param.notCheckedFontColor;
                this.checkedFontColor = param.checkedFontColor;
                this.seq = param.seq;
                this.tabTitleImage = param.tabTitleImage;
                this.includedMatches = new IncludedMatch(param.includedMatches);
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], MatchTab.prototype, "tabID", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], MatchTab.prototype, "tabName", void 0);
    __decorate([
        Field.d(3, "bool", "optional")
    ], MatchTab.prototype, "isDisplayed", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], MatchTab.prototype, "operator", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], MatchTab.prototype, "operationTime", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], MatchTab.prototype, "backgroundColor", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], MatchTab.prototype, "backgroundImage", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], MatchTab.prototype, "notCheckedFontColor", void 0);
    __decorate([
        Field.d(9, "string", "optional")
    ], MatchTab.prototype, "checkedFontColor", void 0);
    __decorate([
        Field.d(10, "int32", "optional")
    ], MatchTab.prototype, "seq", void 0);
    __decorate([
        Field.d(11, "string", "optional")
    ], MatchTab.prototype, "tabTitleImage", void 0);
    __decorate([
        Field.d(12, IncludedMatch, "optional")
    ], MatchTab.prototype, "includedMatches", void 0);
    MatchTab = __decorate([
        Type.d("Type_tss_match_common_config_proto_MatchTab")
    ], MatchTab);
    match.MatchTab = MatchTab;
    let SkipTabRule = class SkipTabRule extends Message {
        constructor(param) {
            super();
            this.mode = 0;
            this.tabID = 0;
            if (param) {
                this.mode = param.mode;
                this.tabID = param.tabID;
            }
        }
    };
    __decorate([
        Field.d(1, SkipTabMode, "optional")
    ], SkipTabRule.prototype, "mode", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], SkipTabRule.prototype, "tabID", void 0);
    SkipTabRule = __decorate([
        Type.d("Type_tss_match_common_config_proto_SkipTabRule")
    ], SkipTabRule);
    match.SkipTabRule = SkipTabRule;
    let BreakthroughRecord = class BreakthroughRecord extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.successNum = 0;
            this.mungNum = 0;
            this.phaseSeq = 0;
            if (param) {
                this.uid = param.uid;
                this.successNum = param.successNum;
                this.mungNum = param.mungNum;
                this.phaseSeq = param.phaseSeq;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], BreakthroughRecord.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], BreakthroughRecord.prototype, "successNum", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], BreakthroughRecord.prototype, "mungNum", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], BreakthroughRecord.prototype, "phaseSeq", void 0);
    BreakthroughRecord = __decorate([
        Type.d("Type_tss_match_common_config_proto_BreakthroughRecord")
    ], BreakthroughRecord);
    match.BreakthroughRecord = BreakthroughRecord;
    let GetMatchReconnectInfoRsp = class GetMatchReconnectInfoRsp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.reconnectInfo = new Uint8Array();
            this.matchType = 0;
            if (param) {
                this.code = param.code;
                this.reconnectInfo = new Uint8Array(param.reconnectInfo);
                this.matchType = param.matchType;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], GetMatchReconnectInfoRsp.prototype, "code", void 0);
    __decorate([
        Field.d(3, "bytes", "optional")
    ], GetMatchReconnectInfoRsp.prototype, "reconnectInfo", void 0);
    __decorate([
        Field.d(2, MatchType, "optional")
    ], GetMatchReconnectInfoRsp.prototype, "matchType", void 0);
    GetMatchReconnectInfoRsp = __decorate([
        Type.d("Type_tss_match_common_config_proto_GetMatchReconnectInfoRsp")
    ], GetMatchReconnectInfoRsp);
    match.GetMatchReconnectInfoRsp = GetMatchReconnectInfoRsp;
})(match || (match = {}));
//# sourceMappingURL=common_config.js.map