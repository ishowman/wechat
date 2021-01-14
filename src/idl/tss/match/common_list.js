import { __decorate } from "tslib";
import { Message, Type, Field } from 'protobufjs/light';
import { roots } from 'protobufjs';
export var match;
(function (match) {
    var Template_1;
    let SubMatchTyp;
    (function (SubMatchTyp) {
        SubMatchTyp[SubMatchTyp["UnKnownMatch"] = 0] = "UnKnownMatch";
        SubMatchTyp[SubMatchTyp["SingleMatch"] = 1] = "SingleMatch";
        SubMatchTyp[SubMatchTyp["SeriesMatch"] = 2] = "SeriesMatch";
        SubMatchTyp[SubMatchTyp["CycleMatch"] = 3] = "CycleMatch";
        SubMatchTyp[SubMatchTyp["InviteMatch"] = 4] = "InviteMatch";
        SubMatchTyp[SubMatchTyp["FastMatch"] = 5] = "FastMatch";
        SubMatchTyp[SubMatchTyp["BeginnerMatch"] = 6] = "BeginnerMatch";
        SubMatchTyp[SubMatchTyp["BreakthroughMatch"] = 7] = "BreakthroughMatch";
        SubMatchTyp[SubMatchTyp["BettingMatch"] = 8] = "BettingMatch";
        SubMatchTyp[SubMatchTyp["StandingMatch"] = 9] = "StandingMatch";
    })(SubMatchTyp = match.SubMatchTyp || (match.SubMatchTyp = {}));
    let ListTagType;
    (function (ListTagType) {
        ListTagType[ListTagType["ListTagTypeNew"] = 0] = "ListTagTypeNew";
        ListTagType[ListTagType["ListTagTypeRevival"] = 1] = "ListTagTypeRevival";
        ListTagType[ListTagType["ListTagTypeSeries"] = 2] = "ListTagTypeSeries";
        ListTagType[ListTagType["ListTagTypeRound"] = 3] = "ListTagTypeRound";
        ListTagType[ListTagType["ListTagTypeLargePrizeRing"] = 4] = "ListTagTypeLargePrizeRing";
        ListTagType[ListTagType["ListTagTypeHighReward"] = 5] = "ListTagTypeHighReward";
        ListTagType[ListTagType["ListTagTypeDelayEntry"] = 6] = "ListTagTypeDelayEntry";
        ListTagType[ListTagType["ListTagTypeVIP"] = 7] = "ListTagTypeVIP";
    })(ListTagType = match.ListTagType || (match.ListTagType = {}));
    let ListRevivalType;
    (function (ListRevivalType) {
        ListRevivalType[ListRevivalType["VIPRevival"] = 0] = "VIPRevival";
        ListRevivalType[ListRevivalType["PropRevival"] = 1] = "PropRevival";
        ListRevivalType[ListRevivalType["BothRevival"] = 2] = "BothRevival";
    })(ListRevivalType = match.ListRevivalType || (match.ListRevivalType = {}));
    let UserState;
    (function (UserState) {
        UserState[UserState["NotSigned"] = 0] = "NotSigned";
        UserState[UserState["HasSigned"] = 1] = "HasSigned";
        UserState[UserState["NotReady"] = 2] = "NotReady";
        UserState[UserState["HasReady"] = 3] = "HasReady";
        UserState[UserState["CantSignUp"] = 4] = "CantSignUp";
        UserState[UserState["DelayEntry"] = 5] = "DelayEntry";
    })(UserState = match.UserState || (match.UserState = {}));
    let CardStyleType;
    (function (CardStyleType) {
        CardStyleType[CardStyleType["SmallCard"] = 0] = "SmallCard";
        CardStyleType[CardStyleType["LargeCard"] = 1] = "LargeCard";
    })(CardStyleType = match.CardStyleType || (match.CardStyleType = {}));
    let SignUpLimitState;
    (function (SignUpLimitState) {
        SignUpLimitState[SignUpLimitState["SignUpLimitStateNone"] = 0] = "SignUpLimitStateNone";
        SignUpLimitState[SignUpLimitState["SignUpLimitStateFree"] = 1] = "SignUpLimitStateFree";
        SignUpLimitState[SignUpLimitState["SignUpLimitStateInLimit"] = 2] = "SignUpLimitStateInLimit";
        SignUpLimitState[SignUpLimitState["SignUpLimitStateBan"] = 3] = "SignUpLimitStateBan";
        SignUpLimitState[SignUpLimitState["SignUpLimitStatePay"] = 4] = "SignUpLimitStatePay";
        SignUpLimitState[SignUpLimitState["SignUpLimitStateCantPay"] = 5] = "SignUpLimitStateCantPay";
    })(SignUpLimitState = match.SignUpLimitState || (match.SignUpLimitState = {}));
    let VIPPrizeMode;
    (function (VIPPrizeMode) {
        VIPPrizeMode[VIPPrizeMode["VIPPrizeModeDefault"] = 0] = "VIPPrizeModeDefault";
        VIPPrizeMode[VIPPrizeMode["VIPPrizeModeCustom"] = 1] = "VIPPrizeModeCustom";
    })(VIPPrizeMode = match.VIPPrizeMode || (match.VIPPrizeMode = {}));
    let VIPPrizeType;
    (function (VIPPrizeType) {
        VIPPrizeType[VIPPrizeType["VIPPrizeTypeFixed"] = 0] = "VIPPrizeTypeFixed";
        VIPPrizeType[VIPPrizeType["VIPPrizeTypeRatio"] = 1] = "VIPPrizeTypeRatio";
    })(VIPPrizeType = match.VIPPrizeType || (match.VIPPrizeType = {}));
    let SignUpTyp;
    (function (SignUpTyp) {
        SignUpTyp[SignUpTyp["SignUpTypUnknow"] = 0] = "SignUpTypUnknow";
        SignUpTyp[SignUpTyp["SignUpTypFree"] = 1] = "SignUpTypFree";
        SignUpTyp[SignUpTyp["SignUpTypProp"] = 2] = "SignUpTypProp";
        SignUpTyp[SignUpTyp["SignUpTypVIP"] = 4] = "SignUpTypVIP";
        SignUpTyp[SignUpTyp["SignUpTypDiamond"] = 8] = "SignUpTypDiamond";
        SignUpTyp[SignUpTyp["SignUpTypMung"] = 16] = "SignUpTypMung";
    })(SignUpTyp = match.SignUpTyp || (match.SignUpTyp = {}));
    let PageType;
    (function (PageType) {
        PageType[PageType["ChosenPage"] = 0] = "ChosenPage";
        PageType[PageType["RegularPage"] = 1] = "RegularPage";
        PageType[PageType["CyclePage"] = 2] = "CyclePage";
        PageType[PageType["GamePage"] = 3] = "GamePage";
        PageType[PageType["ScenePage"] = 4] = "ScenePage";
        PageType[PageType["HistoricalPage"] = 5] = "HistoricalPage";
    })(PageType = match.PageType || (match.PageType = {}));
    let CardType;
    (function (CardType) {
        CardType[CardType["UnknownCard"] = 0] = "UnknownCard";
        CardType[CardType["MatchCard"] = 1] = "MatchCard";
        CardType[CardType["ImgCard"] = 2] = "ImgCard";
        CardType[CardType["OnlookerCard"] = 3] = "OnlookerCard";
    })(CardType = match.CardType || (match.CardType = {}));
    let RecommendedMode;
    (function (RecommendedMode) {
        RecommendedMode[RecommendedMode["AccordingStartTime"] = 0] = "AccordingStartTime";
        RecommendedMode[RecommendedMode["AccordingInterest"] = 1] = "AccordingInterest";
    })(RecommendedMode = match.RecommendedMode || (match.RecommendedMode = {}));
    let QueryMode;
    (function (QueryMode) {
        QueryMode[QueryMode["AccordingGame"] = 0] = "AccordingGame";
        QueryMode[QueryMode["AccordingMatch"] = 1] = "AccordingMatch";
        QueryMode[QueryMode["AccordingTime"] = 2] = "AccordingTime";
        QueryMode[QueryMode["AccordingReward"] = 3] = "AccordingReward";
    })(QueryMode = match.QueryMode || (match.QueryMode = {}));
    let GameType;
    (function (GameType) {
        GameType[GameType["All"] = 0] = "All";
        GameType[GameType["Chess"] = 1] = "Chess";
        GameType[GameType["Poker"] = 2] = "Poker";
        GameType[GameType["Mahjong"] = 3] = "Mahjong";
    })(GameType = match.GameType || (match.GameType = {}));
    let TimeSpanType;
    (function (TimeSpanType) {
        TimeSpanType[TimeSpanType["AllDayLong"] = 0] = "AllDayLong";
        TimeSpanType[TimeSpanType["Morning"] = 1] = "Morning";
        TimeSpanType[TimeSpanType["NoonDay"] = 2] = "NoonDay";
        TimeSpanType[TimeSpanType["Afternoon"] = 3] = "Afternoon";
        TimeSpanType[TimeSpanType["Night"] = 4] = "Night";
    })(TimeSpanType = match.TimeSpanType || (match.TimeSpanType = {}));
    let PrizeDetailInfo = class PrizeDetailInfo extends Message {
        constructor(param) {
            super();
            this.prizeID = 0;
            this.prizeNum = 0;
            this.prizeName = "";
            this.requiredNum = 0;
            this.exchangeablePrizeName = "";
            this.exchangeablePrizeImg = "";
            this.exchangeablePrizeTypes = [];
            this.rewardMode = 0;
            this.mungNum = 0;
            this.type = 0;
            this.price = 0;
            if (param) {
                this.prizeID = param.prizeID;
                this.prizeNum = param.prizeNum;
                this.prizeName = param.prizeName;
                this.requiredNum = param.requiredNum;
                this.exchangeablePrizeName = param.exchangeablePrizeName;
                this.exchangeablePrizeImg = param.exchangeablePrizeImg;
                this.exchangeablePrizeTypes = param.exchangeablePrizeTypes;
                this.rewardMode = param.rewardMode;
                this.mungNum = param.mungNum;
                this.type = param.type;
                this.price = param.price;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], PrizeDetailInfo.prototype, "prizeID", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], PrizeDetailInfo.prototype, "prizeNum", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], PrizeDetailInfo.prototype, "prizeName", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], PrizeDetailInfo.prototype, "requiredNum", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], PrizeDetailInfo.prototype, "exchangeablePrizeName", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], PrizeDetailInfo.prototype, "exchangeablePrizeImg", void 0);
    __decorate([
        Field.d(7, "int32", "repeated")
    ], PrizeDetailInfo.prototype, "exchangeablePrizeTypes", void 0);
    __decorate([
        Field.d(8, "int32", "optional")
    ], PrizeDetailInfo.prototype, "rewardMode", void 0);
    __decorate([
        Field.d(9, "int32", "optional")
    ], PrizeDetailInfo.prototype, "mungNum", void 0);
    __decorate([
        Field.d(10, "int32", "optional")
    ], PrizeDetailInfo.prototype, "type", void 0);
    __decorate([
        Field.d(11, "int32", "optional")
    ], PrizeDetailInfo.prototype, "price", void 0);
    PrizeDetailInfo = __decorate([
        Type.d("Type_tss_match_common_list_proto_PrizeDetailInfo")
    ], PrizeDetailInfo);
    match.PrizeDetailInfo = PrizeDetailInfo;
    let VIPExtraPrizeInfo = class VIPExtraPrizeInfo extends Message {
        constructor(param) {
            super();
            this.levelBegin = 0;
            this.levelEnd = 0;
            this.ratio = 0;
            this.prizes = [];
            if (param) {
                this.levelBegin = param.levelBegin;
                this.levelEnd = param.levelEnd;
                this.ratio = param.ratio;
                this.prizes = param.prizes;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], VIPExtraPrizeInfo.prototype, "levelBegin", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], VIPExtraPrizeInfo.prototype, "levelEnd", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], VIPExtraPrizeInfo.prototype, "ratio", void 0);
    __decorate([
        Field.d(5, PrizeDetailInfo, "repeated")
    ], VIPExtraPrizeInfo.prototype, "prizes", void 0);
    VIPExtraPrizeInfo = __decorate([
        Type.d("Type_tss_match_common_list_proto_VIPExtraPrizeInfo")
    ], VIPExtraPrizeInfo);
    match.VIPExtraPrizeInfo = VIPExtraPrizeInfo;
    let RankPrizeInfo = class RankPrizeInfo extends Message {
        constructor(param) {
            super();
            this.start = 0;
            this.end = 0;
            this.prizes = [];
            this.vipPrizes = [];
            if (param) {
                this.start = param.start;
                this.end = param.end;
                this.prizes = param.prizes;
                this.vipPrizes = param.vipPrizes;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], RankPrizeInfo.prototype, "start", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], RankPrizeInfo.prototype, "end", void 0);
    __decorate([
        Field.d(3, PrizeDetailInfo, "repeated")
    ], RankPrizeInfo.prototype, "prizes", void 0);
    __decorate([
        Field.d(4, VIPExtraPrizeInfo, "repeated")
    ], RankPrizeInfo.prototype, "vipPrizes", void 0);
    RankPrizeInfo = __decorate([
        Type.d("Type_tss_match_common_list_proto_RankPrizeInfo")
    ], RankPrizeInfo);
    match.RankPrizeInfo = RankPrizeInfo;
    let AssetCheckConf = class AssetCheckConf extends Message {
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
    ], AssetCheckConf.prototype, "enabled", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], AssetCheckConf.prototype, "checkPropId", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], AssetCheckConf.prototype, "checkPropNum", void 0);
    __decorate([
        Field.d(4, SignUpTyp, "optional")
    ], AssetCheckConf.prototype, "signUpType", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], AssetCheckConf.prototype, "signUpPropId", void 0);
    __decorate([
        Field.d(6, "int32", "optional")
    ], AssetCheckConf.prototype, "signUpPropNum", void 0);
    __decorate([
        Field.d(7, "int32", "optional")
    ], AssetCheckConf.prototype, "signUpDiamondNum", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], AssetCheckConf.prototype, "signUpPropName", void 0);
    __decorate([
        Field.d(9, "string", "optional")
    ], AssetCheckConf.prototype, "signUpPropIcon", void 0);
    AssetCheckConf = __decorate([
        Type.d("Type_tss_match_common_list_proto_AssetCheckConf")
    ], AssetCheckConf);
    match.AssetCheckConf = AssetCheckConf;
    let SignUpInfo = class SignUpInfo extends Message {
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
            this.assetCheck = new AssetCheckConf();
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
                this.assetCheck = new AssetCheckConf(param.assetCheck);
                this.propType = param.propType;
                this.propPrice = param.propPrice;
            }
        }
    };
    __decorate([
        Field.d(1, SignUpTyp, "optional")
    ], SignUpInfo.prototype, "signUpType", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], SignUpInfo.prototype, "EXPLevel", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], SignUpInfo.prototype, "VIPLevel", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], SignUpInfo.prototype, "propID", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], SignUpInfo.prototype, "propNum", void 0);
    __decorate([
        Field.d(6, "int32", "optional")
    ], SignUpInfo.prototype, "diamondNum", void 0);
    __decorate([
        Field.d(7, "int64", "optional")
    ], SignUpInfo.prototype, "deadlineSec", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], SignUpInfo.prototype, "propName", void 0);
    __decorate([
        Field.d(9, "string", "optional")
    ], SignUpInfo.prototype, "propIcon", void 0);
    __decorate([
        Field.d(10, "int32", "optional")
    ], SignUpInfo.prototype, "mungNum", void 0);
    __decorate([
        Field.d(11, AssetCheckConf, "optional")
    ], SignUpInfo.prototype, "assetCheck", void 0);
    __decorate([
        Field.d(12, "int32", "optional")
    ], SignUpInfo.prototype, "propType", void 0);
    __decorate([
        Field.d(13, "int32", "optional")
    ], SignUpInfo.prototype, "propPrice", void 0);
    SignUpInfo = __decorate([
        Type.d("Type_tss_match_common_list_proto_SignUpInfo")
    ], SignUpInfo);
    match.SignUpInfo = SignUpInfo;
    let SeriesInfo = class SeriesInfo extends Message {
        constructor(param) {
            super();
            this.seriesKey = "";
            this.seriesScheduleName = "";
            this.nextScheduleStartTime = 0;
            if (param) {
                this.seriesKey = param.seriesKey;
                this.seriesScheduleName = param.seriesScheduleName;
                this.nextScheduleStartTime = param.nextScheduleStartTime;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], SeriesInfo.prototype, "seriesKey", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], SeriesInfo.prototype, "seriesScheduleName", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], SeriesInfo.prototype, "nextScheduleStartTime", void 0);
    SeriesInfo = __decorate([
        Type.d("Type_tss_match_common_list_proto_SeriesInfo")
    ], SeriesInfo);
    match.SeriesInfo = SeriesInfo;
    let FastMatchSignUpLimit = class FastMatchSignUpLimit extends Message {
        constructor(param) {
            super();
            this.signUpLimitState = 0;
            this.limitNum = 0;
            if (param) {
                this.signUpLimitState = param.signUpLimitState;
                this.limitNum = param.limitNum;
            }
        }
    };
    __decorate([
        Field.d(1, SignUpLimitState, "optional")
    ], FastMatchSignUpLimit.prototype, "signUpLimitState", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], FastMatchSignUpLimit.prototype, "limitNum", void 0);
    FastMatchSignUpLimit = __decorate([
        Type.d("Type_tss_match_common_list_proto_FastMatchSignUpLimit")
    ], FastMatchSignUpLimit);
    match.FastMatchSignUpLimit = FastMatchSignUpLimit;
    let DelayEntryInfo = class DelayEntryInfo extends Message {
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
    ], DelayEntryInfo.prototype, "isEnabled", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], DelayEntryInfo.prototype, "delaySec", void 0);
    __decorate([
        Field.d(3, "bool", "optional")
    ], DelayEntryInfo.prototype, "isOnlyFirstStageEnabled", void 0);
    DelayEntryInfo = __decorate([
        Type.d("Type_tss_match_common_list_proto_DelayEntryInfo")
    ], DelayEntryInfo);
    match.DelayEntryInfo = DelayEntryInfo;
    let MatchInfo = class MatchInfo extends Message {
        constructor(param) {
            super();
            this.preMatchKey = "";
            this.gameID = "";
            this.displayURL = "";
            this.startTime = 0;
            this.signedNum = 0;
            this.matchName = "";
            this.leftSec = 0;
            this.matchKitVer = "";
            this.matchID = 0;
            this.hasWhitelist = false;
            this.isRevival = false;
            this.fixedStartTimeDesc = "";
            this.matchState = 0;
            this.creatorUID = 0;
            this.matchMinNum = 0;
            this.revivalType = 0;
            this.signedUsers = [];
            this.gameName = "";
            this.gameIcon = "";
            this.tabs = [];
            this.joinedUsers = [];
            this.prizeRing = 0;
            this.hasObserve = false;
            this.readySec = 0;
            this.signedFriends = [];
            this.signedFriendNum = 0;
            this.joinNum = 0;
            this.srvName = "";
            this.srvID = 0;
            this.matchType = 0;
            this.endTime = 0;
            this.matchKey = "";
            this.estimatedTime = "";
            this.entranceBorderImg = "";
            this.expcMatchingSec = 0;
            this.subMatchType = 0;
            this.gameType = 0;
            this.userState = 0;
            this.listTags = [];
            this.extraPrizeMode = 0;
            this.extraPrizeType = 0;
            this.cardStyleType = 0;
            this.rankPrizes = [];
            this.signUpInfo = new SignUpInfo();
            this.seriesInfo = new SeriesInfo();
            this.fastMatchSignUpLimit = new FastMatchSignUpLimit();
            this.matchCfgTag = [];
            this.roundNum = 0;
            this.userGroupType = 0;
            this.rewardPoolMungNum = 0;
            this.canSignUp = false;
            this.miniDisplayURL = "";
            this.prizeMode = 0;
            this.immediatelyMungNum = 0;
            this.delayEntryInfo = new DelayEntryInfo();
            this.seq = 0;
            if (param) {
                this.preMatchKey = param.preMatchKey;
                this.gameID = param.gameID;
                this.displayURL = param.displayURL;
                this.startTime = param.startTime;
                this.signedNum = param.signedNum;
                this.matchName = param.matchName;
                this.leftSec = param.leftSec;
                this.matchKitVer = param.matchKitVer;
                this.matchID = param.matchID;
                this.hasWhitelist = param.hasWhitelist;
                this.isRevival = param.isRevival;
                this.fixedStartTimeDesc = param.fixedStartTimeDesc;
                this.matchState = param.matchState;
                this.creatorUID = param.creatorUID;
                this.matchMinNum = param.matchMinNum;
                this.revivalType = param.revivalType;
                this.signedUsers = param.signedUsers;
                this.gameName = param.gameName;
                this.gameIcon = param.gameIcon;
                this.tabs = param.tabs;
                this.joinedUsers = param.joinedUsers;
                this.prizeRing = param.prizeRing;
                this.hasObserve = param.hasObserve;
                this.readySec = param.readySec;
                this.signedFriends = param.signedFriends;
                this.signedFriendNum = param.signedFriendNum;
                this.joinNum = param.joinNum;
                this.srvName = param.srvName;
                this.srvID = param.srvID;
                this.matchType = param.matchType;
                this.endTime = param.endTime;
                this.matchKey = param.matchKey;
                this.estimatedTime = param.estimatedTime;
                this.entranceBorderImg = param.entranceBorderImg;
                this.expcMatchingSec = param.expcMatchingSec;
                this.subMatchType = param.subMatchType;
                this.gameType = param.gameType;
                this.userState = param.userState;
                this.listTags = param.listTags;
                this.extraPrizeMode = param.extraPrizeMode;
                this.extraPrizeType = param.extraPrizeType;
                this.cardStyleType = param.cardStyleType;
                this.rankPrizes = param.rankPrizes;
                this.signUpInfo = new SignUpInfo(param.signUpInfo);
                this.seriesInfo = new SeriesInfo(param.seriesInfo);
                this.fastMatchSignUpLimit = new FastMatchSignUpLimit(param.fastMatchSignUpLimit);
                this.matchCfgTag = param.matchCfgTag;
                this.roundNum = param.roundNum;
                this.userGroupType = param.userGroupType;
                this.rewardPoolMungNum = param.rewardPoolMungNum;
                this.canSignUp = param.canSignUp;
                this.miniDisplayURL = param.miniDisplayURL;
                this.prizeMode = param.prizeMode;
                this.immediatelyMungNum = param.immediatelyMungNum;
                this.delayEntryInfo = new DelayEntryInfo(param.delayEntryInfo);
                this.seq = param.seq;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], MatchInfo.prototype, "preMatchKey", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], MatchInfo.prototype, "gameID", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], MatchInfo.prototype, "displayURL", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], MatchInfo.prototype, "startTime", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], MatchInfo.prototype, "signedNum", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], MatchInfo.prototype, "matchName", void 0);
    __decorate([
        Field.d(7, "int64", "optional")
    ], MatchInfo.prototype, "leftSec", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], MatchInfo.prototype, "matchKitVer", void 0);
    __decorate([
        Field.d(9, "int64", "optional")
    ], MatchInfo.prototype, "matchID", void 0);
    __decorate([
        Field.d(10, "bool", "optional")
    ], MatchInfo.prototype, "hasWhitelist", void 0);
    __decorate([
        Field.d(11, "bool", "optional")
    ], MatchInfo.prototype, "isRevival", void 0);
    __decorate([
        Field.d(12, "string", "optional")
    ], MatchInfo.prototype, "fixedStartTimeDesc", void 0);
    __decorate([
        Field.d(13, "int32", "optional")
    ], MatchInfo.prototype, "matchState", void 0);
    __decorate([
        Field.d(14, "int64", "optional")
    ], MatchInfo.prototype, "creatorUID", void 0);
    __decorate([
        Field.d(15, "int32", "optional")
    ], MatchInfo.prototype, "matchMinNum", void 0);
    __decorate([
        Field.d(16, "int32", "optional")
    ], MatchInfo.prototype, "revivalType", void 0);
    __decorate([
        Field.d(17, "int64", "repeated")
    ], MatchInfo.prototype, "signedUsers", void 0);
    __decorate([
        Field.d(18, "string", "optional")
    ], MatchInfo.prototype, "gameName", void 0);
    __decorate([
        Field.d(19, "string", "optional")
    ], MatchInfo.prototype, "gameIcon", void 0);
    __decorate([
        Field.d(20, "string", "repeated")
    ], MatchInfo.prototype, "tabs", void 0);
    __decorate([
        Field.d(21, "int64", "repeated")
    ], MatchInfo.prototype, "joinedUsers", void 0);
    __decorate([
        Field.d(22, "int32", "optional")
    ], MatchInfo.prototype, "prizeRing", void 0);
    __decorate([
        Field.d(23, "bool", "optional")
    ], MatchInfo.prototype, "hasObserve", void 0);
    __decorate([
        Field.d(24, "int32", "optional")
    ], MatchInfo.prototype, "readySec", void 0);
    __decorate([
        Field.d(25, "int64", "repeated")
    ], MatchInfo.prototype, "signedFriends", void 0);
    __decorate([
        Field.d(26, "int32", "optional")
    ], MatchInfo.prototype, "signedFriendNum", void 0);
    __decorate([
        Field.d(27, "int32", "optional")
    ], MatchInfo.prototype, "joinNum", void 0);
    __decorate([
        Field.d(28, "string", "optional")
    ], MatchInfo.prototype, "srvName", void 0);
    __decorate([
        Field.d(29, "uint32", "optional")
    ], MatchInfo.prototype, "srvID", void 0);
    __decorate([
        Field.d(30, "int32", "optional")
    ], MatchInfo.prototype, "matchType", void 0);
    __decorate([
        Field.d(31, "int64", "optional")
    ], MatchInfo.prototype, "endTime", void 0);
    __decorate([
        Field.d(32, "string", "optional")
    ], MatchInfo.prototype, "matchKey", void 0);
    __decorate([
        Field.d(33, "string", "optional")
    ], MatchInfo.prototype, "estimatedTime", void 0);
    __decorate([
        Field.d(34, "string", "optional")
    ], MatchInfo.prototype, "entranceBorderImg", void 0);
    __decorate([
        Field.d(35, "int32", "optional")
    ], MatchInfo.prototype, "expcMatchingSec", void 0);
    __decorate([
        Field.d(36, SubMatchTyp, "optional")
    ], MatchInfo.prototype, "subMatchType", void 0);
    __decorate([
        Field.d(37, GameType, "optional")
    ], MatchInfo.prototype, "gameType", void 0);
    __decorate([
        Field.d(38, UserState, "optional")
    ], MatchInfo.prototype, "userState", void 0);
    __decorate([
        Field.d(39, ListTagType, "repeated")
    ], MatchInfo.prototype, "listTags", void 0);
    __decorate([
        Field.d(40, VIPPrizeMode, "optional")
    ], MatchInfo.prototype, "extraPrizeMode", void 0);
    __decorate([
        Field.d(41, VIPPrizeType, "optional")
    ], MatchInfo.prototype, "extraPrizeType", void 0);
    __decorate([
        Field.d(45, CardStyleType, "optional")
    ], MatchInfo.prototype, "cardStyleType", void 0);
    __decorate([
        Field.d(42, RankPrizeInfo, "repeated")
    ], MatchInfo.prototype, "rankPrizes", void 0);
    __decorate([
        Field.d(43, SignUpInfo, "optional")
    ], MatchInfo.prototype, "signUpInfo", void 0);
    __decorate([
        Field.d(44, SeriesInfo, "optional")
    ], MatchInfo.prototype, "seriesInfo", void 0);
    __decorate([
        Field.d(46, FastMatchSignUpLimit, "optional")
    ], MatchInfo.prototype, "fastMatchSignUpLimit", void 0);
    __decorate([
        Field.d(47, "string", "repeated")
    ], MatchInfo.prototype, "matchCfgTag", void 0);
    __decorate([
        Field.d(48, "int32", "optional")
    ], MatchInfo.prototype, "roundNum", void 0);
    __decorate([
        Field.d(49, "int32", "optional")
    ], MatchInfo.prototype, "userGroupType", void 0);
    __decorate([
        Field.d(50, "int32", "optional")
    ], MatchInfo.prototype, "rewardPoolMungNum", void 0);
    __decorate([
        Field.d(51, "bool", "optional")
    ], MatchInfo.prototype, "canSignUp", void 0);
    __decorate([
        Field.d(52, "string", "optional")
    ], MatchInfo.prototype, "miniDisplayURL", void 0);
    __decorate([
        Field.d(53, "int32", "optional")
    ], MatchInfo.prototype, "prizeMode", void 0);
    __decorate([
        Field.d(54, "int32", "optional")
    ], MatchInfo.prototype, "immediatelyMungNum", void 0);
    __decorate([
        Field.d(55, DelayEntryInfo, "optional")
    ], MatchInfo.prototype, "delayEntryInfo", void 0);
    __decorate([
        Field.d(56, "int32", "optional")
    ], MatchInfo.prototype, "seq", void 0);
    MatchInfo = __decorate([
        Type.d("Type_tss_match_common_list_proto_MatchInfo")
    ], MatchInfo);
    match.MatchInfo = MatchInfo;
    let TabColor = class TabColor extends Message {
        constructor(param) {
            super();
            this.gameID = "";
            this.themeColor = "";
            this.fontColor = "";
            if (param) {
                this.gameID = param.gameID;
                this.themeColor = param.themeColor;
                this.fontColor = param.fontColor;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], TabColor.prototype, "gameID", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], TabColor.prototype, "themeColor", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], TabColor.prototype, "fontColor", void 0);
    TabColor = __decorate([
        Type.d("Type_tss_match_common_list_proto_TabColor")
    ], TabColor);
    match.TabColor = TabColor;
    let BaseConfig = class BaseConfig extends Message {
        constructor(param) {
            super();
            this.switchableDeadline = 0;
            this.tabColors = [];
            if (param) {
                this.switchableDeadline = param.switchableDeadline;
                this.tabColors = param.tabColors;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], BaseConfig.prototype, "switchableDeadline", void 0);
    __decorate([
        Field.d(2, TabColor, "repeated")
    ], BaseConfig.prototype, "tabColors", void 0);
    BaseConfig = __decorate([
        Type.d("Type_tss_match_common_list_proto_BaseConfig")
    ], BaseConfig);
    match.BaseConfig = BaseConfig;
    let OptionalConfig = class OptionalConfig extends Message {
        constructor(param) {
            super();
            this.maxRecentMatchNum = 0;
            this.maxMoreMatchNum = 0;
            this.seriesCarouselSec = 0;
            this.isFilterCycleMatch = false;
            if (param) {
                this.maxRecentMatchNum = param.maxRecentMatchNum;
                this.maxMoreMatchNum = param.maxMoreMatchNum;
                this.seriesCarouselSec = param.seriesCarouselSec;
                this.isFilterCycleMatch = param.isFilterCycleMatch;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], OptionalConfig.prototype, "maxRecentMatchNum", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], OptionalConfig.prototype, "maxMoreMatchNum", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], OptionalConfig.prototype, "seriesCarouselSec", void 0);
    __decorate([
        Field.d(6, "bool", "optional")
    ], OptionalConfig.prototype, "isFilterCycleMatch", void 0);
    OptionalConfig = __decorate([
        Type.d("Type_tss_match_common_list_proto_OptionalConfig")
    ], OptionalConfig);
    match.OptionalConfig = OptionalConfig;
    let ListConfig = class ListConfig extends Message {
        constructor(param) {
            super();
            this.pageType = 0;
            this.baseConfig = new BaseConfig();
            this.optionalConfig = new OptionalConfig();
            if (param) {
                this.pageType = param.pageType;
                this.baseConfig = new BaseConfig(param.baseConfig);
                this.optionalConfig = new OptionalConfig(param.optionalConfig);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], ListConfig.prototype, "pageType", void 0);
    __decorate([
        Field.d(2, BaseConfig, "optional")
    ], ListConfig.prototype, "baseConfig", void 0);
    __decorate([
        Field.d(3, OptionalConfig, "optional")
    ], ListConfig.prototype, "optionalConfig", void 0);
    ListConfig = __decorate([
        Type.d("Type_tss_match_common_list_proto_ListConfig")
    ], ListConfig);
    match.ListConfig = ListConfig;
    let MatchFrequency = class MatchFrequency extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.gameID = "";
            this.frequency = 0;
            this.lastAt = 0;
            this.lastRegularAt = 0;
            this.lastRegularMatchKey = "";
            this.lastMatchingAt = 0;
            this.lastMatchingMatchKey = "";
            if (param) {
                this.uid = param.uid;
                this.gameID = param.gameID;
                this.frequency = param.frequency;
                this.lastAt = param.lastAt;
                this.lastRegularAt = param.lastRegularAt;
                this.lastRegularMatchKey = param.lastRegularMatchKey;
                this.lastMatchingAt = param.lastMatchingAt;
                this.lastMatchingMatchKey = param.lastMatchingMatchKey;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], MatchFrequency.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], MatchFrequency.prototype, "gameID", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], MatchFrequency.prototype, "frequency", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], MatchFrequency.prototype, "lastAt", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], MatchFrequency.prototype, "lastRegularAt", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], MatchFrequency.prototype, "lastRegularMatchKey", void 0);
    __decorate([
        Field.d(7, "int64", "optional")
    ], MatchFrequency.prototype, "lastMatchingAt", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], MatchFrequency.prototype, "lastMatchingMatchKey", void 0);
    MatchFrequency = __decorate([
        Type.d("Type_tss_match_common_list_proto_MatchFrequency")
    ], MatchFrequency);
    match.MatchFrequency = MatchFrequency;
    let Template = Template_1 = class Template extends Message {
        constructor(param) {
            super();
            this.templateID = 0;
            this.templateURL = "";
            this.children = [];
            if (param) {
                this.templateID = param.templateID;
                this.templateURL = param.templateURL;
                this.children = param.children;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], Template.prototype, "templateID", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], Template.prototype, "templateURL", void 0);
    __decorate([
        Field.d(3, Template_1, "repeated")
    ], Template.prototype, "children", void 0);
    Template = Template_1 = __decorate([
        Type.d("Type_tss_match_common_list_proto_Template")
    ], Template);
    match.Template = Template;
    roots.decorated.lookupType("Type_tss_match_common_list_proto_Template").fields["children"].type = "Type_tss_match_common_list_proto_Template";
    let DisplayCard = class DisplayCard extends Message {
        constructor(param) {
            super();
            this.cardType = 0;
            this.linkURL = "";
            this.cardImg = "";
            this.cardDesc = "";
            this.match = new Uint8Array();
            if (param) {
                this.cardType = param.cardType;
                this.linkURL = param.linkURL;
                this.cardImg = param.cardImg;
                this.cardDesc = param.cardDesc;
                this.match = new Uint8Array(param.match);
            }
        }
    };
    __decorate([
        Field.d(1, CardType, "optional")
    ], DisplayCard.prototype, "cardType", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], DisplayCard.prototype, "linkURL", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], DisplayCard.prototype, "cardImg", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], DisplayCard.prototype, "cardDesc", void 0);
    __decorate([
        Field.d(5, "bytes", "optional")
    ], DisplayCard.prototype, "match", void 0);
    DisplayCard = __decorate([
        Type.d("Type_tss_match_common_list_proto_DisplayCard")
    ], DisplayCard);
    match.DisplayCard = DisplayCard;
    let DisplayArea = class DisplayArea extends Message {
        constructor(param) {
            super();
            this.areaName = "";
            this.carouselSec = 0;
            this.defaultImg = "";
            this.defaultDesc = "";
            this.areaSeq = 0;
            this.cards = [];
            this.template = new Template();
            if (param) {
                this.areaName = param.areaName;
                this.carouselSec = param.carouselSec;
                this.defaultImg = param.defaultImg;
                this.defaultDesc = param.defaultDesc;
                this.areaSeq = param.areaSeq;
                this.cards = param.cards;
                this.template = new Template(param.template);
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], DisplayArea.prototype, "areaName", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], DisplayArea.prototype, "carouselSec", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], DisplayArea.prototype, "defaultImg", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], DisplayArea.prototype, "defaultDesc", void 0);
    __decorate([
        Field.d(7, "int32", "optional")
    ], DisplayArea.prototype, "areaSeq", void 0);
    __decorate([
        Field.d(5, DisplayCard, "repeated")
    ], DisplayArea.prototype, "cards", void 0);
    __decorate([
        Field.d(6, Template, "optional")
    ], DisplayArea.prototype, "template", void 0);
    DisplayArea = __decorate([
        Type.d("Type_tss_match_common_list_proto_DisplayArea")
    ], DisplayArea);
    match.DisplayArea = DisplayArea;
    let ScreenItem = class ScreenItem extends Message {
        constructor(param) {
            super();
            this.name = "";
            this.id = 0;
            if (param) {
                this.name = param.name;
                this.id = param.id;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], ScreenItem.prototype, "name", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ScreenItem.prototype, "id", void 0);
    ScreenItem = __decorate([
        Type.d("Type_tss_match_common_list_proto_ScreenItem")
    ], ScreenItem);
    match.ScreenItem = ScreenItem;
    let ScreenItemGroup = class ScreenItemGroup extends Message {
        constructor(param) {
            super();
            this.items = [];
            if (param) {
                this.items = param.items;
            }
        }
    };
    __decorate([
        Field.d(1, ScreenItem, "repeated")
    ], ScreenItemGroup.prototype, "items", void 0);
    ScreenItemGroup = __decorate([
        Type.d("Type_tss_match_common_list_proto_ScreenItemGroup")
    ], ScreenItemGroup);
    match.ScreenItemGroup = ScreenItemGroup;
    let Tab = class Tab extends Message {
        constructor(param) {
            super();
            this.tabName = "";
            this.tabID = 0;
            this.backgroundColor = "";
            this.backgroundImage = "";
            this.notCheckedFontColor = "";
            this.checkedFontColor = "";
            this.includedMode = 0;
            this.matchIDs = [];
            this.classifiedModes = [];
            this.seq = 0;
            this.tabTitleImage = "";
            this.gameIDs = [];
            this.groups = [];
            if (param) {
                this.tabName = param.tabName;
                this.tabID = param.tabID;
                this.backgroundColor = param.backgroundColor;
                this.backgroundImage = param.backgroundImage;
                this.notCheckedFontColor = param.notCheckedFontColor;
                this.checkedFontColor = param.checkedFontColor;
                this.includedMode = param.includedMode;
                this.matchIDs = param.matchIDs;
                this.classifiedModes = param.classifiedModes;
                this.seq = param.seq;
                this.tabTitleImage = param.tabTitleImage;
                this.gameIDs = param.gameIDs;
                this.groups = param.groups;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], Tab.prototype, "tabName", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], Tab.prototype, "tabID", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], Tab.prototype, "backgroundColor", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], Tab.prototype, "backgroundImage", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], Tab.prototype, "notCheckedFontColor", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], Tab.prototype, "checkedFontColor", void 0);
    __decorate([
        Field.d(7, "int32", "optional")
    ], Tab.prototype, "includedMode", void 0);
    __decorate([
        Field.d(9, "int64", "repeated")
    ], Tab.prototype, "matchIDs", void 0);
    __decorate([
        Field.d(10, "int32", "repeated")
    ], Tab.prototype, "classifiedModes", void 0);
    __decorate([
        Field.d(11, "int32", "optional")
    ], Tab.prototype, "seq", void 0);
    __decorate([
        Field.d(12, "string", "optional")
    ], Tab.prototype, "tabTitleImage", void 0);
    __decorate([
        Field.d(13, "string", "repeated")
    ], Tab.prototype, "gameIDs", void 0);
    __decorate([
        Field.d(14, ScreenItemGroup, "repeated")
    ], Tab.prototype, "groups", void 0);
    Tab = __decorate([
        Type.d("Type_tss_match_common_list_proto_Tab")
    ], Tab);
    match.Tab = Tab;
    let PrizeType = class PrizeType extends Message {
        constructor(param) {
            super();
            this.typeID = 0;
            this.typeName = "";
            if (param) {
                this.typeID = param.typeID;
                this.typeName = param.typeName;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], PrizeType.prototype, "typeID", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], PrizeType.prototype, "typeName", void 0);
    PrizeType = __decorate([
        Type.d("Type_tss_match_common_list_proto_PrizeType")
    ], PrizeType);
    match.PrizeType = PrizeType;
    let QueryRule = class QueryRule extends Message {
        constructor(param) {
            super();
            this.mode = 0;
            this.types = [];
            this.prizeTypes = [];
            if (param) {
                this.mode = param.mode;
                this.types = param.types;
                this.prizeTypes = param.prizeTypes;
            }
        }
    };
    __decorate([
        Field.d(1, QueryMode, "optional")
    ], QueryRule.prototype, "mode", void 0);
    __decorate([
        Field.d(2, "int32", "repeated")
    ], QueryRule.prototype, "types", void 0);
    __decorate([
        Field.d(3, PrizeType, "repeated")
    ], QueryRule.prototype, "prizeTypes", void 0);
    QueryRule = __decorate([
        Type.d("Type_tss_match_common_list_proto_QueryRule")
    ], QueryRule);
    match.QueryRule = QueryRule;
})(match || (match = {}));
//# sourceMappingURL=common_list.js.map