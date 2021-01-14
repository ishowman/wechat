import { __decorate } from "tslib";
/* eslint-disable */
import { rpcPlugin as byRpc, ApiSendConfig } from 'xj-core';
import { Message, Type, Field } from 'protobufjs/light';
import { match as match_common_config } from '@/idl/tss/match/common_config';
import { match as match_common_list } from '@/idl/tss/match/common_list';
export var prematchdetail;
(function (prematchdetail) {
    let MatchState;
    (function (MatchState) {
        MatchState[MatchState["MatchState_PreMatch"] = 0] = "MatchState_PreMatch";
        MatchState[MatchState["MatchState_InGame"] = 1] = "MatchState_InGame";
        MatchState[MatchState["MatchState_MatchOver"] = 2] = "MatchState_MatchOver";
    })(MatchState = prematchdetail.MatchState || (prematchdetail.MatchState = {}));
    let SignUpStatus;
    (function (SignUpStatus) {
        SignUpStatus[SignUpStatus["SignUpStatusNotSignUp"] = 0] = "SignUpStatusNotSignUp";
        SignUpStatus[SignUpStatus["SignUpStatusIsSigned"] = 1] = "SignUpStatusIsSigned";
        SignUpStatus[SignUpStatus["SignUpStatusIsNotSignedTime"] = 2] = "SignUpStatusIsNotSignedTime";
        SignUpStatus[SignUpStatus["SignUpStatusNotQualify"] = 3] = "SignUpStatusNotQualify";
        SignUpStatus[SignUpStatus["SignUpStatusDelayEntry"] = 4] = "SignUpStatusDelayEntry";
    })(SignUpStatus = prematchdetail.SignUpStatus || (prematchdetail.SignUpStatus = {}));
    let RewardType;
    (function (RewardType) {
        RewardType[RewardType["RewardType_Prize"] = 0] = "RewardType_Prize";
        RewardType[RewardType["RewardType_Topic"] = 1] = "RewardType_Topic";
    })(RewardType = prematchdetail.RewardType || (prematchdetail.RewardType = {}));
    let GetPreMatchDetailReq = class GetPreMatchDetailReq extends Message {
        constructor(param) {
            super();
            this.preMatchKey = "";
            this.seriesKey = "";
            if (param) {
                this.preMatchKey = param.preMatchKey;
                this.seriesKey = param.seriesKey;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetPreMatchDetailReq.prototype, "preMatchKey", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], GetPreMatchDetailReq.prototype, "seriesKey", void 0);
    GetPreMatchDetailReq = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_GetPreMatchDetailReq")
    ], GetPreMatchDetailReq);
    prematchdetail.GetPreMatchDetailReq = GetPreMatchDetailReq;
    let StageInfo = class StageInfo extends Message {
        constructor(param) {
            super();
            this.stageMode = 0;
            this.roundSeq = 0;
            this.promotionNum = 0;
            this.stageName = "";
            this.startNum = 0;
            this.outRule = 0;
            this.canRevive = false;
            this.revivalTypes = [];
            if (param) {
                this.stageMode = param.stageMode;
                this.roundSeq = param.roundSeq;
                this.promotionNum = param.promotionNum;
                this.stageName = param.stageName;
                this.startNum = param.startNum;
                this.outRule = param.outRule;
                this.canRevive = param.canRevive;
                this.revivalTypes = param.revivalTypes;
            }
        }
    };
    __decorate([
        Field.d(1, match_common_config.StageMode, "required")
    ], StageInfo.prototype, "stageMode", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], StageInfo.prototype, "roundSeq", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], StageInfo.prototype, "promotionNum", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], StageInfo.prototype, "stageName", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], StageInfo.prototype, "startNum", void 0);
    __decorate([
        Field.d(6, match_common_config.OutRuleMode, "optional")
    ], StageInfo.prototype, "outRule", void 0);
    __decorate([
        Field.d(7, "bool", "optional")
    ], StageInfo.prototype, "canRevive", void 0);
    __decorate([
        Field.d(8, match_common_config.RevivalType, "repeated")
    ], StageInfo.prototype, "revivalTypes", void 0);
    StageInfo = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_StageInfo")
    ], StageInfo);
    prematchdetail.StageInfo = StageInfo;
    let ChatRoomInfo = class ChatRoomInfo extends Message {
        constructor(param) {
            super();
            this.isOpened = false;
            this.openSec = 0;
            this.closedSec = 0;
            this.chatBackground = "";
            this.chatID = "";
            this.canChat = false;
            this.onceEntered = false;
            if (param) {
                this.isOpened = param.isOpened;
                this.openSec = param.openSec;
                this.closedSec = param.closedSec;
                this.chatBackground = param.chatBackground;
                this.chatID = param.chatID;
                this.canChat = param.canChat;
                this.onceEntered = param.onceEntered;
            }
        }
    };
    __decorate([
        Field.d(1, "bool", "optional")
    ], ChatRoomInfo.prototype, "isOpened", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], ChatRoomInfo.prototype, "openSec", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], ChatRoomInfo.prototype, "closedSec", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], ChatRoomInfo.prototype, "chatBackground", void 0);
    __decorate([
        Field.d(5, "string", "required")
    ], ChatRoomInfo.prototype, "chatID", void 0);
    __decorate([
        Field.d(6, "bool", "optional")
    ], ChatRoomInfo.prototype, "canChat", void 0);
    __decorate([
        Field.d(7, "bool", "optional")
    ], ChatRoomInfo.prototype, "onceEntered", void 0);
    ChatRoomInfo = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_ChatRoomInfo")
    ], ChatRoomInfo);
    prematchdetail.ChatRoomInfo = ChatRoomInfo;
    let GameBriefInfo = class GameBriefInfo extends Message {
        constructor(param) {
            super();
            this.gameName = "";
            this.icon = "";
            this.gameID = "";
            this.slogan = "";
            if (param) {
                this.gameName = param.gameName;
                this.icon = param.icon;
                this.gameID = param.gameID;
                this.slogan = param.slogan;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GameBriefInfo.prototype, "gameName", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], GameBriefInfo.prototype, "icon", void 0);
    __decorate([
        Field.d(3, "string", "required")
    ], GameBriefInfo.prototype, "gameID", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], GameBriefInfo.prototype, "slogan", void 0);
    GameBriefInfo = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_GameBriefInfo")
    ], GameBriefInfo);
    prematchdetail.GameBriefInfo = GameBriefInfo;
    let SignedUserState = class SignedUserState extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.isJoined = false;
            if (param) {
                this.uid = param.uid;
                this.isJoined = param.isJoined;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], SignedUserState.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "bool", "optional")
    ], SignedUserState.prototype, "isJoined", void 0);
    SignedUserState = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_SignedUserState")
    ], SignedUserState);
    prematchdetail.SignedUserState = SignedUserState;
    let RewardDisplayInfo = class RewardDisplayInfo extends Message {
        constructor(param) {
            super();
            this.rewardName = "";
            this.rewardID = 0;
            this.rewardImg = "";
            this.rewardType = 0;
            this.rewardIcon = "";
            if (param) {
                this.rewardName = param.rewardName;
                this.rewardID = param.rewardID;
                this.rewardImg = param.rewardImg;
                this.rewardType = param.rewardType;
                this.rewardIcon = param.rewardIcon;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], RewardDisplayInfo.prototype, "rewardName", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], RewardDisplayInfo.prototype, "rewardID", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], RewardDisplayInfo.prototype, "rewardImg", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], RewardDisplayInfo.prototype, "rewardType", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], RewardDisplayInfo.prototype, "rewardIcon", void 0);
    RewardDisplayInfo = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_RewardDisplayInfo")
    ], RewardDisplayInfo);
    prematchdetail.RewardDisplayInfo = RewardDisplayInfo;
    let ScheduleStageInfo = class ScheduleStageInfo extends Message {
        constructor(param) {
            super();
            this.seriesSchedule = new match_common_config.SeriesScheduleConfig();
            this.stages = [];
            this.rewards = new match_common_config.PrizeConfig();
            this.hasPromotedList = false;
            this.matchKey = "";
            if (param) {
                this.seriesSchedule = new match_common_config.SeriesScheduleConfig(param.seriesSchedule);
                this.stages = param.stages;
                this.rewards = new match_common_config.PrizeConfig(param.rewards);
                this.hasPromotedList = param.hasPromotedList;
                this.matchKey = param.matchKey;
            }
        }
    };
    __decorate([
        Field.d(1, match_common_config.SeriesScheduleConfig, "optional")
    ], ScheduleStageInfo.prototype, "seriesSchedule", void 0);
    __decorate([
        Field.d(2, StageInfo, "repeated")
    ], ScheduleStageInfo.prototype, "stages", void 0);
    __decorate([
        Field.d(4, match_common_config.PrizeConfig, "optional")
    ], ScheduleStageInfo.prototype, "rewards", void 0);
    __decorate([
        Field.d(3, "bool", "optional")
    ], ScheduleStageInfo.prototype, "hasPromotedList", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], ScheduleStageInfo.prototype, "matchKey", void 0);
    ScheduleStageInfo = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_ScheduleStageInfo")
    ], ScheduleStageInfo);
    prematchdetail.ScheduleStageInfo = ScheduleStageInfo;
    let SeriesInfo = class SeriesInfo extends Message {
        constructor(param) {
            super();
            this.curScheduleSeq = 0;
            this.isAllOver = false;
            this.scheduleStages = [];
            if (param) {
                this.curScheduleSeq = param.curScheduleSeq;
                this.isAllOver = param.isAllOver;
                this.scheduleStages = param.scheduleStages;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], SeriesInfo.prototype, "curScheduleSeq", void 0);
    __decorate([
        Field.d(2, "bool", "optional")
    ], SeriesInfo.prototype, "isAllOver", void 0);
    __decorate([
        Field.d(3, ScheduleStageInfo, "repeated")
    ], SeriesInfo.prototype, "scheduleStages", void 0);
    SeriesInfo = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_SeriesInfo")
    ], SeriesInfo);
    prematchdetail.SeriesInfo = SeriesInfo;
    let GetPreMatchDetailResp = class GetPreMatchDetailResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.preMatchKey = "";
            this.matchName = "";
            this.startTime = 0;
            this.readyTime = 0;
            this.curTime = 0;
            this.signedNum = 0;
            this.joinNum = 0;
            this.minNum = 0;
            this.schemeID = 0;
            this.detailURL = "";
            this.displayURL = "";
            this.estimatedTime = "";
            this.matchKitVer = "";
            this.isJoined = false;
            this.matchState = 0;
            this.matchSrvName = "";
            this.matchSrvID = 0;
            this.matchKey = "";
            this.matchType = 0;
            this.seriesKey = "";
            this.signedStatus = 0;
            this.expcMatchingSec = 0;
            this.matchHotLevel = 0;
            this.curRoundSeq = 0;
            this.rewardPoolMungNum = 0;
            this.totalRoundNum = 0;
            this.type = 0;
            this.stages = [];
            this.chatRoom = new ChatRoomInfo();
            this.game = new GameBriefInfo();
            this.newestSignedUsers = [];
            this.rewardDisplayInfo = new RewardDisplayInfo();
            this.rewards = new match_common_config.PrizeConfig();
            this.signUpInfo = new match_common_config.SignUpConfig();
            this.seriesInfo = new SeriesInfo();
            this.creatorUID = 0;
            this.preventCheatCfg = new match_common_config.PreventCheatConfig();
            this.roundPrizes = [];
            this.isLimitSignUp = false;
            this.records = [];
            this.startSpan = new match_common_config.StartTimeSpan();
            this.phaseSeq = 0;
            this.ruleDesc = "";
            this.joinMatchNeedPropNum = 0;
            this.ownPropNum = 0;
            this.delayEntryConfig = new match_common_config.DelayEntryConfig();
            this.listTags = [];
            this.prizeRing = 0;
            if (param) {
                this.code = param.code;
                this.preMatchKey = param.preMatchKey;
                this.matchName = param.matchName;
                this.startTime = param.startTime;
                this.readyTime = param.readyTime;
                this.curTime = param.curTime;
                this.signedNum = param.signedNum;
                this.joinNum = param.joinNum;
                this.minNum = param.minNum;
                this.schemeID = param.schemeID;
                this.detailURL = param.detailURL;
                this.displayURL = param.displayURL;
                this.estimatedTime = param.estimatedTime;
                this.matchKitVer = param.matchKitVer;
                this.isJoined = param.isJoined;
                this.matchState = param.matchState;
                this.matchSrvName = param.matchSrvName;
                this.matchSrvID = param.matchSrvID;
                this.matchKey = param.matchKey;
                this.matchType = param.matchType;
                this.seriesKey = param.seriesKey;
                this.signedStatus = param.signedStatus;
                this.expcMatchingSec = param.expcMatchingSec;
                this.matchHotLevel = param.matchHotLevel;
                this.curRoundSeq = param.curRoundSeq;
                this.rewardPoolMungNum = param.rewardPoolMungNum;
                this.totalRoundNum = param.totalRoundNum;
                this.type = param.type;
                this.stages = param.stages;
                this.chatRoom = new ChatRoomInfo(param.chatRoom);
                this.game = new GameBriefInfo(param.game);
                this.newestSignedUsers = param.newestSignedUsers;
                this.rewardDisplayInfo = new RewardDisplayInfo(param.rewardDisplayInfo);
                this.rewards = new match_common_config.PrizeConfig(param.rewards);
                this.signUpInfo = new match_common_config.SignUpConfig(param.signUpInfo);
                this.seriesInfo = new SeriesInfo(param.seriesInfo);
                this.creatorUID = param.creatorUID;
                this.preventCheatCfg = new match_common_config.PreventCheatConfig(param.preventCheatCfg);
                this.roundPrizes = param.roundPrizes;
                this.isLimitSignUp = param.isLimitSignUp;
                this.records = param.records;
                this.startSpan = new match_common_config.StartTimeSpan(param.startSpan);
                this.phaseSeq = param.phaseSeq;
                this.ruleDesc = param.ruleDesc;
                this.joinMatchNeedPropNum = param.joinMatchNeedPropNum;
                this.ownPropNum = param.ownPropNum;
                this.delayEntryConfig = new match_common_config.DelayEntryConfig(param.delayEntryConfig);
                this.listTags = param.listTags;
                this.prizeRing = param.prizeRing;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], GetPreMatchDetailResp.prototype, "preMatchKey", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], GetPreMatchDetailResp.prototype, "matchName", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], GetPreMatchDetailResp.prototype, "startTime", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], GetPreMatchDetailResp.prototype, "readyTime", void 0);
    __decorate([
        Field.d(6, "int64", "optional")
    ], GetPreMatchDetailResp.prototype, "curTime", void 0);
    __decorate([
        Field.d(7, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "signedNum", void 0);
    __decorate([
        Field.d(8, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "joinNum", void 0);
    __decorate([
        Field.d(9, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "minNum", void 0);
    __decorate([
        Field.d(10, "int64", "optional")
    ], GetPreMatchDetailResp.prototype, "schemeID", void 0);
    __decorate([
        Field.d(12, "string", "optional")
    ], GetPreMatchDetailResp.prototype, "detailURL", void 0);
    __decorate([
        Field.d(13, "string", "optional")
    ], GetPreMatchDetailResp.prototype, "displayURL", void 0);
    __decorate([
        Field.d(14, "string", "optional")
    ], GetPreMatchDetailResp.prototype, "estimatedTime", void 0);
    __decorate([
        Field.d(15, "string", "optional")
    ], GetPreMatchDetailResp.prototype, "matchKitVer", void 0);
    __decorate([
        Field.d(16, "bool", "optional")
    ], GetPreMatchDetailResp.prototype, "isJoined", void 0);
    __decorate([
        Field.d(17, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "matchState", void 0);
    __decorate([
        Field.d(18, "string", "optional")
    ], GetPreMatchDetailResp.prototype, "matchSrvName", void 0);
    __decorate([
        Field.d(19, "uint32", "optional")
    ], GetPreMatchDetailResp.prototype, "matchSrvID", void 0);
    __decorate([
        Field.d(20, "string", "optional")
    ], GetPreMatchDetailResp.prototype, "matchKey", void 0);
    __decorate([
        Field.d(21, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "matchType", void 0);
    __decorate([
        Field.d(22, "string", "optional")
    ], GetPreMatchDetailResp.prototype, "seriesKey", void 0);
    __decorate([
        Field.d(23, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "signedStatus", void 0);
    __decorate([
        Field.d(24, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "expcMatchingSec", void 0);
    __decorate([
        Field.d(25, "int64", "optional")
    ], GetPreMatchDetailResp.prototype, "matchHotLevel", void 0);
    __decorate([
        Field.d(26, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "curRoundSeq", void 0);
    __decorate([
        Field.d(27, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "rewardPoolMungNum", void 0);
    __decorate([
        Field.d(28, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "totalRoundNum", void 0);
    __decorate([
        Field.d(29, match_common_config.MatchType, "optional")
    ], GetPreMatchDetailResp.prototype, "type", void 0);
    __decorate([
        Field.d(30, StageInfo, "repeated")
    ], GetPreMatchDetailResp.prototype, "stages", void 0);
    __decorate([
        Field.d(31, ChatRoomInfo, "optional")
    ], GetPreMatchDetailResp.prototype, "chatRoom", void 0);
    __decorate([
        Field.d(32, GameBriefInfo, "optional")
    ], GetPreMatchDetailResp.prototype, "game", void 0);
    __decorate([
        Field.d(33, SignedUserState, "repeated")
    ], GetPreMatchDetailResp.prototype, "newestSignedUsers", void 0);
    __decorate([
        Field.d(34, RewardDisplayInfo, "optional")
    ], GetPreMatchDetailResp.prototype, "rewardDisplayInfo", void 0);
    __decorate([
        Field.d(35, match_common_config.PrizeConfig, "optional")
    ], GetPreMatchDetailResp.prototype, "rewards", void 0);
    __decorate([
        Field.d(36, match_common_config.SignUpConfig, "optional")
    ], GetPreMatchDetailResp.prototype, "signUpInfo", void 0);
    __decorate([
        Field.d(37, SeriesInfo, "optional")
    ], GetPreMatchDetailResp.prototype, "seriesInfo", void 0);
    __decorate([
        Field.d(38, "int64", "optional")
    ], GetPreMatchDetailResp.prototype, "creatorUID", void 0);
    __decorate([
        Field.d(39, match_common_config.PreventCheatConfig, "optional")
    ], GetPreMatchDetailResp.prototype, "preventCheatCfg", void 0);
    __decorate([
        Field.d(40, match_common_config.PrizeDetailConfig, "repeated")
    ], GetPreMatchDetailResp.prototype, "roundPrizes", void 0);
    __decorate([
        Field.d(41, "bool", "optional")
    ], GetPreMatchDetailResp.prototype, "isLimitSignUp", void 0);
    __decorate([
        Field.d(42, match_common_config.BreakthroughRecord, "repeated")
    ], GetPreMatchDetailResp.prototype, "records", void 0);
    __decorate([
        Field.d(43, match_common_config.StartTimeSpan, "optional")
    ], GetPreMatchDetailResp.prototype, "startSpan", void 0);
    __decorate([
        Field.d(44, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "phaseSeq", void 0);
    __decorate([
        Field.d(45, "string", "optional")
    ], GetPreMatchDetailResp.prototype, "ruleDesc", void 0);
    __decorate([
        Field.d(46, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "joinMatchNeedPropNum", void 0);
    __decorate([
        Field.d(47, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "ownPropNum", void 0);
    __decorate([
        Field.d(48, match_common_config.DelayEntryConfig, "optional")
    ], GetPreMatchDetailResp.prototype, "delayEntryConfig", void 0);
    __decorate([
        Field.d(49, match_common_list.ListTagType, "repeated")
    ], GetPreMatchDetailResp.prototype, "listTags", void 0);
    __decorate([
        Field.d(50, "int32", "optional")
    ], GetPreMatchDetailResp.prototype, "prizeRing", void 0);
    GetPreMatchDetailResp = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_GetPreMatchDetailResp")
    ], GetPreMatchDetailResp);
    prematchdetail.GetPreMatchDetailResp = GetPreMatchDetailResp;
    let User = class User extends Message {
        constructor(param) {
            super();
            this.UID = 0;
            this.signTime = 0;
            this.isReady = false;
            this.preMatchKey = "";
            if (param) {
                this.UID = param.UID;
                this.signTime = param.signTime;
                this.isReady = param.isReady;
                this.preMatchKey = param.preMatchKey;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], User.prototype, "UID", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], User.prototype, "signTime", void 0);
    __decorate([
        Field.d(4, "bool", "optional")
    ], User.prototype, "isReady", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], User.prototype, "preMatchKey", void 0);
    User = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_User")
    ], User);
    prematchdetail.User = User;
    let PreMatchEntity = class PreMatchEntity extends Message {
        constructor(param) {
            super();
            this.preMatchKey = "";
            this.MatchConfigInfo = new match_common_config.MatchConfigInfo();
            if (param) {
                this.preMatchKey = param.preMatchKey;
                this.MatchConfigInfo = new match_common_config.MatchConfigInfo(param.MatchConfigInfo);
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], PreMatchEntity.prototype, "preMatchKey", void 0);
    __decorate([
        Field.d(2, match_common_config.MatchConfigInfo, "optional")
    ], PreMatchEntity.prototype, "MatchConfigInfo", void 0);
    PreMatchEntity = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_PreMatchEntity")
    ], PreMatchEntity);
    prematchdetail.PreMatchEntity = PreMatchEntity;
    let CanJoinMatchReq = class CanJoinMatchReq extends Message {
        constructor(param) {
            super();
            this.preMatchKey = "";
            if (param) {
                this.preMatchKey = param.preMatchKey;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], CanJoinMatchReq.prototype, "preMatchKey", void 0);
    CanJoinMatchReq = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_CanJoinMatchReq")
    ], CanJoinMatchReq);
    prematchdetail.CanJoinMatchReq = CanJoinMatchReq;
    let CanJoinMatchResp = class CanJoinMatchResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.canJoin = false;
            if (param) {
                this.code = param.code;
                this.canJoin = param.canJoin;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], CanJoinMatchResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "bool", "optional")
    ], CanJoinMatchResp.prototype, "canJoin", void 0);
    CanJoinMatchResp = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_CanJoinMatchResp")
    ], CanJoinMatchResp);
    prematchdetail.CanJoinMatchResp = CanJoinMatchResp;
    let GetMatchStateReq = class GetMatchStateReq extends Message {
        constructor(param) {
            super();
            this.preMatchKey = "";
            if (param) {
                this.preMatchKey = param.preMatchKey;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetMatchStateReq.prototype, "preMatchKey", void 0);
    GetMatchStateReq = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_GetMatchStateReq")
    ], GetMatchStateReq);
    prematchdetail.GetMatchStateReq = GetMatchStateReq;
    let GetMatchStateResp = class GetMatchStateResp extends Message {
        constructor(param) {
            super();
            this.matchState = 0;
            if (param) {
                this.matchState = param.matchState;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], GetMatchStateResp.prototype, "matchState", void 0);
    GetMatchStateResp = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_GetMatchStateResp")
    ], GetMatchStateResp);
    prematchdetail.GetMatchStateResp = GetMatchStateResp;
    let GetVipPrizeListReq = class GetVipPrizeListReq extends Message {
        constructor(param) {
            super();
            this.preMatchKey = "";
            if (param) {
                this.preMatchKey = param.preMatchKey;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], GetVipPrizeListReq.prototype, "preMatchKey", void 0);
    GetVipPrizeListReq = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_GetVipPrizeListReq")
    ], GetVipPrizeListReq);
    prematchdetail.GetVipPrizeListReq = GetVipPrizeListReq;
    let PrizeDetail = class PrizeDetail extends Message {
        constructor(param) {
            super();
            this.prizeID = 0;
            this.prizeNum = 0;
            this.prizeName = "";
            this.prizeImg = "";
            this.rewardMode = 0;
            this.mungNum = 0;
            this.prizeIcon = "";
            this.prizeType = 0;
            this.desc = "";
            if (param) {
                this.prizeID = param.prizeID;
                this.prizeNum = param.prizeNum;
                this.prizeName = param.prizeName;
                this.prizeImg = param.prizeImg;
                this.rewardMode = param.rewardMode;
                this.mungNum = param.mungNum;
                this.prizeIcon = param.prizeIcon;
                this.prizeType = param.prizeType;
                this.desc = param.desc;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], PrizeDetail.prototype, "prizeID", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], PrizeDetail.prototype, "prizeNum", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], PrizeDetail.prototype, "prizeName", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], PrizeDetail.prototype, "prizeImg", void 0);
    __decorate([
        Field.d(6, match_common_config.RewardMode, "optional")
    ], PrizeDetail.prototype, "rewardMode", void 0);
    __decorate([
        Field.d(7, "int32", "optional")
    ], PrizeDetail.prototype, "mungNum", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], PrizeDetail.prototype, "prizeIcon", void 0);
    __decorate([
        Field.d(9, "int32", "optional")
    ], PrizeDetail.prototype, "prizeType", void 0);
    __decorate([
        Field.d(10, "string", "optional")
    ], PrizeDetail.prototype, "desc", void 0);
    PrizeDetail = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_PrizeDetail")
    ], PrizeDetail);
    prematchdetail.PrizeDetail = PrizeDetail;
    let VipRankPrize = class VipRankPrize extends Message {
        constructor(param) {
            super();
            this.rankStart = 0;
            this.rankEnd = 0;
            this.prizeDetail = [];
            this.extraPrizeType = 0;
            this.ratio = 0;
            if (param) {
                this.rankStart = param.rankStart;
                this.rankEnd = param.rankEnd;
                this.prizeDetail = param.prizeDetail;
                this.extraPrizeType = param.extraPrizeType;
                this.ratio = param.ratio;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], VipRankPrize.prototype, "rankStart", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], VipRankPrize.prototype, "rankEnd", void 0);
    __decorate([
        Field.d(3, PrizeDetail, "repeated")
    ], VipRankPrize.prototype, "prizeDetail", void 0);
    __decorate([
        Field.d(4, match_common_config.ExtraPrizeType, "optional")
    ], VipRankPrize.prototype, "extraPrizeType", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], VipRankPrize.prototype, "ratio", void 0);
    VipRankPrize = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_VipRankPrize")
    ], VipRankPrize);
    prematchdetail.VipRankPrize = VipRankPrize;
    let VipPrize = class VipPrize extends Message {
        constructor(param) {
            super();
            this.levelBegin = 0;
            this.levelEnd = 0;
            this.vipRankPrize = [];
            if (param) {
                this.levelBegin = param.levelBegin;
                this.levelEnd = param.levelEnd;
                this.vipRankPrize = param.vipRankPrize;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], VipPrize.prototype, "levelBegin", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], VipPrize.prototype, "levelEnd", void 0);
    __decorate([
        Field.d(3, VipRankPrize, "repeated")
    ], VipPrize.prototype, "vipRankPrize", void 0);
    VipPrize = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_VipPrize")
    ], VipPrize);
    prematchdetail.VipPrize = VipPrize;
    let GetVipPrizeListResp = class GetVipPrizeListResp extends Message {
        constructor(param) {
            super();
            this.vipPrizes = [];
            this.code = 0;
            if (param) {
                this.vipPrizes = param.vipPrizes;
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, VipPrize, "repeated")
    ], GetVipPrizeListResp.prototype, "vipPrizes", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], GetVipPrizeListResp.prototype, "code", void 0);
    GetVipPrizeListResp = __decorate([
        Type.d("Type_tss_match_prematchdetail_v1_proto_GetVipPrizeListResp")
    ], GetVipPrizeListResp);
    prematchdetail.GetVipPrizeListResp = GetVipPrizeListResp;
    prematchdetail.PreMatchDetailServer = {
        config: new ApiSendConfig(),
        response: { code: 0 },
        resetConfig() {
            this.config = new ApiSendConfig();
        },
        env(baseEnv) {
            baseEnv ? this.config.baseEnv = baseEnv : '';
            return this;
        },
        label(label) {
            label ? this.config.label = label : {};
            return this;
        },
        space(space) {
            space ? this.config.space = space : '';
            return this;
        },
        sen(sen) {
            sen ? this.config.sen = sen : '';
            return this;
        },
        appID(appID) {
            appID ? this.config.appID = appID : 0;
            return this;
        },
        async getPreMatchDetail(param) {
            const buffer = GetPreMatchDetailReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.match.prematchdetail.v1", 1, "GetPreMatchDetail", buffer, this.config);
            return rsp.code === 0 ? GetPreMatchDetailResp.decode(rsp.data) : null;
        },
        async canJoinMatch(param) {
            const buffer = CanJoinMatchReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.match.prematchdetail.v1", 2, "CanJoinMatch", buffer, this.config);
            return rsp.code === 0 ? CanJoinMatchResp.decode(rsp.data) : null;
        },
        async getMatchState(param) {
            const buffer = GetMatchStateReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.match.prematchdetail.v1", 3, "GetMatchState", buffer, this.config);
            return rsp.code === 0 ? GetMatchStateResp.decode(rsp.data) : null;
        },
        async getVipPrizeList(param) {
            const buffer = GetVipPrizeListReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.match.prematchdetail.v1", 4, "GetVipPrizeList", buffer, this.config);
            return rsp.code === 0 ? GetVipPrizeListResp.decode(rsp.data) : null;
        },
        async getPreMatchDetailForWeb(param) {
            const buffer = GetPreMatchDetailReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.match.prematchdetail.v1", 5, "GetPreMatchDetailForWeb", buffer, this.config);
            return rsp.code === 0 ? GetPreMatchDetailResp.decode(rsp.data) : null;
        },
    };
})(prematchdetail || (prematchdetail = {}));
//# sourceMappingURL=prematchdetail_v1.js.map