import { __decorate } from "tslib";
import { Message, Type, Field } from 'protobufjs/light';
export var common;
(function (common) {
    let State;
    (function (State) {
        State[State["StateUnknown"] = 0] = "StateUnknown";
        State[State["StateOnline"] = 1] = "StateOnline";
        State[State["StateOffline"] = 2] = "StateOffline";
        State[State["StatePending"] = 3] = "StatePending";
    })(State = common.State || (common.State = {}));
    let OS;
    (function (OS) {
        OS[OS["OSUnknown"] = 0] = "OSUnknown";
        OS[OS["OSiOS"] = 1] = "OSiOS";
        OS[OS["OSAndroid"] = 2] = "OSAndroid";
    })(OS = common.OS || (common.OS = {}));
    let SysModules;
    (function (SysModules) {
        SysModules[SysModules["SysModules_Unknown"] = 0] = "SysModules_Unknown";
        SysModules[SysModules["SysModules_Prop"] = 1] = "SysModules_Prop";
        SysModules[SysModules["SysModules_VIP"] = 2] = "SysModules_VIP";
    })(SysModules = common.SysModules || (common.SysModules = {}));
    let ExpireType;
    (function (ExpireType) {
        ExpireType[ExpireType["ExpireTypeUnknown"] = 0] = "ExpireTypeUnknown";
        ExpireType[ExpireType["ExpireTypeDuration"] = 1] = "ExpireTypeDuration";
        ExpireType[ExpireType["ExpireTypeTime"] = 2] = "ExpireTypeTime";
    })(ExpireType = common.ExpireType || (common.ExpireType = {}));
    let ItemType;
    (function (ItemType) {
        ItemType[ItemType["ItemTypeUnknown"] = 0] = "ItemTypeUnknown";
        ItemType[ItemType["ItemTypeProp"] = 1] = "ItemTypeProp";
        ItemType[ItemType["ItemTypeMung"] = 2] = "ItemTypeMung";
    })(ItemType = common.ItemType || (common.ItemType = {}));
    let Way;
    (function (Way) {
        Way[Way["WayNone"] = 0] = "WayNone";
        Way[Way["WayIncMatch"] = 1] = "WayIncMatch";
        Way[Way["WayIncCMS"] = 2] = "WayIncCMS";
        Way[Way["WayIncMall"] = 3] = "WayIncMall";
        Way[Way["WayIncSYS"] = 4] = "WayIncSYS";
        Way[Way["WayIncActivity"] = 5] = "WayIncActivity";
        Way[Way["WayIncVipWeal"] = 6] = "WayIncVipWeal";
        Way[Way["WayIncVipPoint"] = 7] = "WayIncVipPoint";
        Way[Way["WayIncCDK"] = 8] = "WayIncCDK";
        Way[Way["WayIncGiftBag"] = 9] = "WayIncGiftBag";
        Way[Way["WayIncTask"] = 10] = "WayIncTask";
        Way[Way["WayIncExchange"] = 11] = "WayIncExchange";
        Way[Way["WayIncBeginner"] = 12] = "WayIncBeginner";
        Way[Way["WayIncThirdPartRefund"] = 13] = "WayIncThirdPartRefund";
        Way[Way["WayIncMatchingRank"] = 14] = "WayIncMatchingRank";
        Way[Way["WayIncMatchingStreakWin"] = 15] = "WayIncMatchingStreakWin";
        Way[Way["WayIncPrizeComment"] = 16] = "WayIncPrizeComment";
        Way[Way["WayIncUse"] = 17] = "WayIncUse";
        Way[Way["WayIncActivityDailyTask"] = 18] = "WayIncActivityDailyTask";
        Way[Way["WayIncActivityWeeklySign"] = 19] = "WayIncActivityWeeklySign";
        Way[Way["WayIncActivityNewUserTask"] = 20] = "WayIncActivityNewUserTask";
        Way[Way["WayIncTicketExchangeMung"] = 31] = "WayIncTicketExchangeMung";
        Way[Way["WayIncActivityInviterRebate"] = 32] = "WayIncActivityInviterRebate";
        Way[Way["WayIncActivityProfitInvite"] = 33] = "WayIncActivityProfitInvite";
        Way[Way["WayIncWeiChatFollowGift"] = 34] = "WayIncWeiChatFollowGift";
        Way[Way["WayIncWeiChatWealGift"] = 35] = "WayIncWeiChatWealGift";
        Way[Way["WayIncRegularMatch"] = 21] = "WayIncRegularMatch";
        Way[Way["WayIncFastMatch"] = 22] = "WayIncFastMatch";
        Way[Way["WayIncBreakthroughMatch"] = 23] = "WayIncBreakthroughMatch";
        Way[Way["WayIncBettingMatch"] = 24] = "WayIncBettingMatch";
        Way[Way["WayIncOtherMatch"] = 25] = "WayIncOtherMatch";
        Way[Way["WayDecUse"] = 100] = "WayDecUse";
        Way[Way["WayDecCMS"] = 101] = "WayDecCMS";
        Way[Way["WayDecExpire"] = 102] = "WayDecExpire";
        Way[Way["WayDecThirdPart"] = 103] = "WayDecThirdPart";
        Way[Way["WayDecExchange"] = 104] = "WayDecExchange";
        Way[Way["WayDecRegularMatch"] = 111] = "WayDecRegularMatch";
        Way[Way["WayDecFastMatch"] = 112] = "WayDecFastMatch";
        Way[Way["WayDecBreakthroughMatch"] = 113] = "WayDecBreakthroughMatch";
        Way[Way["WayDecBettingMatch"] = 114] = "WayDecBettingMatch";
        Way[Way["WayDecMatchingMatch"] = 115] = "WayDecMatchingMatch";
        Way[Way["WayDecOtherMatch"] = 120] = "WayDecOtherMatch";
        Way[Way["WayDecTicketExchangeMung"] = 131] = "WayDecTicketExchangeMung";
        Way[Way["WayIncVIPRecharge"] = 132] = "WayIncVIPRecharge";
        Way[Way["WayIncQuestionnaire"] = 133] = "WayIncQuestionnaire";
    })(Way = common.Way || (common.Way = {}));
    let AwardAcceptType;
    (function (AwardAcceptType) {
        AwardAcceptType[AwardAcceptType["AwardAcceptTypeUnknown"] = 0] = "AwardAcceptTypeUnknown";
        AwardAcceptType[AwardAcceptType["AwardAcceptTypeManualAccept"] = 1] = "AwardAcceptTypeManualAccept";
        AwardAcceptType[AwardAcceptType["AwardAcceptTypeAutoAccept"] = 2] = "AwardAcceptTypeAutoAccept";
    })(AwardAcceptType = common.AwardAcceptType || (common.AwardAcceptType = {}));
    let AwardAcceptDest;
    (function (AwardAcceptDest) {
        AwardAcceptDest[AwardAcceptDest["AwardAcceptDestUnknown"] = 0] = "AwardAcceptDestUnknown";
        AwardAcceptDest[AwardAcceptDest["AwardAcceptDestSysMail"] = 1] = "AwardAcceptDestSysMail";
        AwardAcceptDest[AwardAcceptDest["AwardAcceptDestUserBag"] = 2] = "AwardAcceptDestUserBag";
    })(AwardAcceptDest = common.AwardAcceptDest || (common.AwardAcceptDest = {}));
    let AwardType;
    (function (AwardType) {
        AwardType[AwardType["AwardTypeUnknown"] = 0] = "AwardTypeUnknown";
        AwardType[AwardType["AwardTypeFixed"] = 1] = "AwardTypeFixed";
        AwardType[AwardType["AwardTypeRandom"] = 2] = "AwardTypeRandom";
    })(AwardType = common.AwardType || (common.AwardType = {}));
    let VIPRewardType;
    (function (VIPRewardType) {
        VIPRewardType[VIPRewardType["VIPRewardTypeUnknown"] = 0] = "VIPRewardTypeUnknown";
        VIPRewardType[VIPRewardType["VIPRewardTypeClose"] = 1] = "VIPRewardTypeClose";
        VIPRewardType[VIPRewardType["VIPRewardTypeDouble"] = 2] = "VIPRewardTypeDouble";
        VIPRewardType[VIPRewardType["VIPRewardTypeLevel"] = 3] = "VIPRewardTypeLevel";
    })(VIPRewardType = common.VIPRewardType || (common.VIPRewardType = {}));
    let UserGroupType;
    (function (UserGroupType) {
        UserGroupType[UserGroupType["UserGroupTypeUnknown"] = 0] = "UserGroupTypeUnknown";
        UserGroupType[UserGroupType["UserGroupTypeNormal"] = 1] = "UserGroupTypeNormal";
        UserGroupType[UserGroupType["UserGroupTypeBlock"] = 2] = "UserGroupTypeBlock";
    })(UserGroupType = common.UserGroupType || (common.UserGroupType = {}));
    let Range = class Range extends Message {
        constructor(param) {
            super();
            this.start = 0;
            this.end = 0;
            if (param) {
                this.start = param.start;
                this.end = param.end;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], Range.prototype, "start", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], Range.prototype, "end", void 0);
    Range = __decorate([
        Type.d("Type_tss_common_common_define_proto_Range")
    ], Range);
    common.Range = Range;
    let Metadata = class Metadata extends Message {
        constructor(param) {
            super();
            this.key = "";
            this.value = "";
            this.desc = "";
            if (param) {
                this.key = param.key;
                this.value = param.value;
                this.desc = param.desc;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], Metadata.prototype, "key", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], Metadata.prototype, "value", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], Metadata.prototype, "desc", void 0);
    Metadata = __decorate([
        Type.d("Type_tss_common_common_define_proto_Metadata")
    ], Metadata);
    common.Metadata = Metadata;
    let ExpireData = class ExpireData extends Message {
        constructor(param) {
            super();
            this.type = 0;
            this.value = 0;
            if (param) {
                this.type = param.type;
                this.value = param.value;
            }
        }
    };
    __decorate([
        Field.d(1, ExpireType, "optional")
    ], ExpireData.prototype, "type", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], ExpireData.prototype, "value", void 0);
    ExpireData = __decorate([
        Type.d("Type_tss_common_common_define_proto_ExpireData")
    ], ExpireData);
    common.ExpireData = ExpireData;
    let PropItem = class PropItem extends Message {
        constructor(param) {
            super();
            this.propID = 0;
            this.name = "";
            this.img = "";
            this.num = 0;
            this.typeID = 0;
            this.expire = new ExpireData();
            this.desc = "";
            this.itemType = 0;
            this.icon = "";
            if (param) {
                this.propID = param.propID;
                this.name = param.name;
                this.img = param.img;
                this.num = param.num;
                this.typeID = param.typeID;
                this.expire = new ExpireData(param.expire);
                this.desc = param.desc;
                this.itemType = param.itemType;
                this.icon = param.icon;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], PropItem.prototype, "propID", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], PropItem.prototype, "name", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], PropItem.prototype, "img", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], PropItem.prototype, "num", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], PropItem.prototype, "typeID", void 0);
    __decorate([
        Field.d(6, ExpireData, "optional")
    ], PropItem.prototype, "expire", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], PropItem.prototype, "desc", void 0);
    __decorate([
        Field.d(8, ItemType, "optional")
    ], PropItem.prototype, "itemType", void 0);
    __decorate([
        Field.d(9, "string", "optional")
    ], PropItem.prototype, "icon", void 0);
    PropItem = __decorate([
        Type.d("Type_tss_common_common_define_proto_PropItem")
    ], PropItem);
    common.PropItem = PropItem;
    let VIPLevelReward = class VIPLevelReward extends Message {
        constructor(param) {
            super();
            this.level = 0;
            this.multiple = 0;
            this.name = "";
            if (param) {
                this.level = param.level;
                this.multiple = param.multiple;
                this.name = param.name;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], VIPLevelReward.prototype, "level", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], VIPLevelReward.prototype, "multiple", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], VIPLevelReward.prototype, "name", void 0);
    VIPLevelReward = __decorate([
        Type.d("Type_tss_common_common_define_proto_VIPLevelReward")
    ], VIPLevelReward);
    common.VIPLevelReward = VIPLevelReward;
    let SysMailBody = class SysMailBody extends Message {
        constructor(param) {
            super();
            this.title = "";
            this.content = "";
            this.expire = new ExpireData();
            this.reason = "";
            this.templateType = 0;
            if (param) {
                this.title = param.title;
                this.content = param.content;
                this.expire = new ExpireData(param.expire);
                this.reason = param.reason;
                this.templateType = param.templateType;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], SysMailBody.prototype, "title", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], SysMailBody.prototype, "content", void 0);
    __decorate([
        Field.d(3, ExpireData, "optional")
    ], SysMailBody.prototype, "expire", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], SysMailBody.prototype, "reason", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], SysMailBody.prototype, "templateType", void 0);
    SysMailBody = __decorate([
        Type.d("Type_tss_common_common_define_proto_SysMailBody")
    ], SysMailBody);
    common.SysMailBody = SysMailBody;
    let AwardAcceptConf = class AwardAcceptConf extends Message {
        constructor(param) {
            super();
            this.awardAcceptType = 0;
            this.awardAcceptDest = 0;
            this.sysMailBody = new SysMailBody();
            if (param) {
                this.awardAcceptType = param.awardAcceptType;
                this.awardAcceptDest = param.awardAcceptDest;
                this.sysMailBody = new SysMailBody(param.sysMailBody);
            }
        }
    };
    __decorate([
        Field.d(1, AwardAcceptType, "optional")
    ], AwardAcceptConf.prototype, "awardAcceptType", void 0);
    __decorate([
        Field.d(2, AwardAcceptDest, "optional")
    ], AwardAcceptConf.prototype, "awardAcceptDest", void 0);
    __decorate([
        Field.d(5, SysMailBody, "optional")
    ], AwardAcceptConf.prototype, "sysMailBody", void 0);
    AwardAcceptConf = __decorate([
        Type.d("Type_tss_common_common_define_proto_AwardAcceptConf")
    ], AwardAcceptConf);
    common.AwardAcceptConf = AwardAcceptConf;
})(common || (common = {}));
//# sourceMappingURL=common_define.js.map