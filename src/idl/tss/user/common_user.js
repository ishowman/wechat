import { __decorate } from "tslib";
import { Message, Type, Field } from 'protobufjs/light';
export var user;
(function (user) {
    let RoleType;
    (function (RoleType) {
        RoleType[RoleType["RoleTypeUnknown"] = 0] = "RoleTypeUnknown";
        RoleType[RoleType["RoleTypeVisitor"] = 1] = "RoleTypeVisitor";
        RoleType[RoleType["RoleTypeNormalPlayer"] = 2] = "RoleTypeNormalPlayer";
        RoleType[RoleType["RoleTypeCertifiedPlayer"] = 3] = "RoleTypeCertifiedPlayer";
    })(RoleType = user.RoleType || (user.RoleType = {}));
    let PermissionType;
    (function (PermissionType) {
        PermissionType[PermissionType["PermissionTypeUnknown"] = 0] = "PermissionTypeUnknown";
        PermissionType[PermissionType["PermissionTypeRecharge"] = 1] = "PermissionTypeRecharge";
        PermissionType[PermissionType["PermissionTypeExchangePrize"] = 3] = "PermissionTypeExchangePrize";
        PermissionType[PermissionType["PermissionTypeLogin"] = 6] = "PermissionTypeLogin";
    })(PermissionType = user.PermissionType || (user.PermissionType = {}));
    let State;
    (function (State) {
        State[State["StateUnknown"] = 0] = "StateUnknown";
        State[State["StateWaitToShelf"] = 1] = "StateWaitToShelf";
        State[State["StateOnShelf"] = 2] = "StateOnShelf";
        State[State["StateOutOfStock"] = 3] = "StateOutOfStock";
    })(State = user.State || (user.State = {}));
    let RolePermission = class RolePermission extends Message {
        constructor(param) {
            super();
            this.role = 0;
            this.permission = 0;
            if (param) {
                this.role = param.role;
                this.permission = param.permission;
            }
        }
    };
    __decorate([
        Field.d(1, RoleType, "required")
    ], RolePermission.prototype, "role", void 0);
    __decorate([
        Field.d(2, PermissionType, "required")
    ], RolePermission.prototype, "permission", void 0);
    RolePermission = __decorate([
        Type.d("Type_tss_user_common_user_proto_RolePermission")
    ], RolePermission);
    user.RolePermission = RolePermission;
    let Log = class Log extends Message {
        constructor(param) {
            super();
            this.role = "";
            this.permission = "";
            this.operation = "";
            if (param) {
                this.role = param.role;
                this.permission = param.permission;
                this.operation = param.operation;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], Log.prototype, "role", void 0);
    __decorate([
        Field.d(2, "string", "required")
    ], Log.prototype, "permission", void 0);
    __decorate([
        Field.d(3, "string", "required")
    ], Log.prototype, "operation", void 0);
    Log = __decorate([
        Type.d("Type_tss_user_common_user_proto_Log")
    ], Log);
    user.Log = Log;
    let OperateLog = class OperateLog extends Message {
        constructor(param) {
            super();
            this.operateAt = 0;
            this.operator = "";
            this.logData = [];
            if (param) {
                this.operateAt = param.operateAt;
                this.operator = param.operator;
                this.logData = param.logData;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], OperateLog.prototype, "operateAt", void 0);
    __decorate([
        Field.d(2, "string", "required")
    ], OperateLog.prototype, "operator", void 0);
    __decorate([
        Field.d(3, Log, "repeated")
    ], OperateLog.prototype, "logData", void 0);
    OperateLog = __decorate([
        Type.d("Type_tss_user_common_user_proto_OperateLog")
    ], OperateLog);
    user.OperateLog = OperateLog;
    let ChatWallPaper = class ChatWallPaper extends Message {
        constructor(param) {
            super();
            this.id = 0;
            this.name = "";
            this.state = 0;
            this.detailImg = "";
            this.thumbImg = "";
            this.levelVal = 0;
            this.order = 0;
            this.onlineTime = 0;
            this.offlineTime = 0;
            this.updateTime = 0;
            if (param) {
                this.id = param.id;
                this.name = param.name;
                this.state = param.state;
                this.detailImg = param.detailImg;
                this.thumbImg = param.thumbImg;
                this.levelVal = param.levelVal;
                this.order = param.order;
                this.onlineTime = param.onlineTime;
                this.offlineTime = param.offlineTime;
                this.updateTime = param.updateTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], ChatWallPaper.prototype, "id", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], ChatWallPaper.prototype, "name", void 0);
    __decorate([
        Field.d(3, State, "optional")
    ], ChatWallPaper.prototype, "state", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], ChatWallPaper.prototype, "detailImg", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], ChatWallPaper.prototype, "thumbImg", void 0);
    __decorate([
        Field.d(6, "int64", "optional")
    ], ChatWallPaper.prototype, "levelVal", void 0);
    __decorate([
        Field.d(7, "int32", "optional")
    ], ChatWallPaper.prototype, "order", void 0);
    __decorate([
        Field.d(8, "int64", "optional")
    ], ChatWallPaper.prototype, "onlineTime", void 0);
    __decorate([
        Field.d(9, "int64", "optional")
    ], ChatWallPaper.prototype, "offlineTime", void 0);
    __decorate([
        Field.d(10, "int64", "optional")
    ], ChatWallPaper.prototype, "updateTime", void 0);
    ChatWallPaper = __decorate([
        Type.d("Type_tss_user_common_user_proto_ChatWallPaper")
    ], ChatWallPaper);
    user.ChatWallPaper = ChatWallPaper;
    let ChatBubble = class ChatBubble extends Message {
        constructor(param) {
            super();
            this.id = 0;
            this.name = "";
            this.state = 0;
            this.detailImg = "";
            this.thumbImg = "";
            this.receiveImg = "";
            this.sendImg = "";
            this.decorateImg = "";
            this.levelVal = 0;
            this.order = 0;
            this.onlineTime = 0;
            this.offlineTime = 0;
            this.updateTime = 0;
            if (param) {
                this.id = param.id;
                this.name = param.name;
                this.state = param.state;
                this.detailImg = param.detailImg;
                this.thumbImg = param.thumbImg;
                this.receiveImg = param.receiveImg;
                this.sendImg = param.sendImg;
                this.decorateImg = param.decorateImg;
                this.levelVal = param.levelVal;
                this.order = param.order;
                this.onlineTime = param.onlineTime;
                this.offlineTime = param.offlineTime;
                this.updateTime = param.updateTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], ChatBubble.prototype, "id", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], ChatBubble.prototype, "name", void 0);
    __decorate([
        Field.d(3, State, "optional")
    ], ChatBubble.prototype, "state", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], ChatBubble.prototype, "detailImg", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], ChatBubble.prototype, "thumbImg", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], ChatBubble.prototype, "receiveImg", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], ChatBubble.prototype, "sendImg", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], ChatBubble.prototype, "decorateImg", void 0);
    __decorate([
        Field.d(9, "int64", "optional")
    ], ChatBubble.prototype, "levelVal", void 0);
    __decorate([
        Field.d(10, "int32", "optional")
    ], ChatBubble.prototype, "order", void 0);
    __decorate([
        Field.d(11, "int64", "optional")
    ], ChatBubble.prototype, "onlineTime", void 0);
    __decorate([
        Field.d(12, "int64", "optional")
    ], ChatBubble.prototype, "offlineTime", void 0);
    __decorate([
        Field.d(13, "int64", "optional")
    ], ChatBubble.prototype, "updateTime", void 0);
    ChatBubble = __decorate([
        Type.d("Type_tss_user_common_user_proto_ChatBubble")
    ], ChatBubble);
    user.ChatBubble = ChatBubble;
    let PhotoFrame = class PhotoFrame extends Message {
        constructor(param) {
            super();
            this.levelVal = 0;
            this.levelName = "";
            this.image = "";
            this.createTime = 0;
            this.updateTime = 0;
            if (param) {
                this.levelVal = param.levelVal;
                this.levelName = param.levelName;
                this.image = param.image;
                this.createTime = param.createTime;
                this.updateTime = param.updateTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], PhotoFrame.prototype, "levelVal", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], PhotoFrame.prototype, "levelName", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], PhotoFrame.prototype, "image", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], PhotoFrame.prototype, "createTime", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], PhotoFrame.prototype, "updateTime", void 0);
    PhotoFrame = __decorate([
        Type.d("Type_tss_user_common_user_proto_PhotoFrame")
    ], PhotoFrame);
    user.PhotoFrame = PhotoFrame;
    let NicknameColor = class NicknameColor extends Message {
        constructor(param) {
            super();
            this.levelVal = 0;
            this.levelName = "";
            this.colorValue = "";
            this.createTime = 0;
            this.updateTime = 0;
            if (param) {
                this.levelVal = param.levelVal;
                this.levelName = param.levelName;
                this.colorValue = param.colorValue;
                this.createTime = param.createTime;
                this.updateTime = param.updateTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], NicknameColor.prototype, "levelVal", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], NicknameColor.prototype, "levelName", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], NicknameColor.prototype, "colorValue", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], NicknameColor.prototype, "createTime", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], NicknameColor.prototype, "updateTime", void 0);
    NicknameColor = __decorate([
        Type.d("Type_tss_user_common_user_proto_NicknameColor")
    ], NicknameColor);
    user.NicknameColor = NicknameColor;
    let VipLevel = class VipLevel extends Message {
        constructor(param) {
            super();
            this.levelVal = 0;
            this.name = "";
            if (param) {
                this.levelVal = param.levelVal;
                this.name = param.name;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], VipLevel.prototype, "levelVal", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], VipLevel.prototype, "name", void 0);
    VipLevel = __decorate([
        Type.d("Type_tss_user_common_user_proto_VipLevel")
    ], VipLevel);
    user.VipLevel = VipLevel;
    let UserWallPaperCfg = class UserWallPaperCfg extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.wallPaperId = 0;
            this.name = "";
            this.detailImg = "";
            this.thumbImg = "";
            this.levelVal = 0;
            this.createTime = 0;
            this.updateTime = 0;
            if (param) {
                this.uid = param.uid;
                this.wallPaperId = param.wallPaperId;
                this.name = param.name;
                this.detailImg = param.detailImg;
                this.thumbImg = param.thumbImg;
                this.levelVal = param.levelVal;
                this.createTime = param.createTime;
                this.updateTime = param.updateTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], UserWallPaperCfg.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], UserWallPaperCfg.prototype, "wallPaperId", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], UserWallPaperCfg.prototype, "name", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], UserWallPaperCfg.prototype, "detailImg", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], UserWallPaperCfg.prototype, "thumbImg", void 0);
    __decorate([
        Field.d(6, "int64", "optional")
    ], UserWallPaperCfg.prototype, "levelVal", void 0);
    __decorate([
        Field.d(7, "int64", "optional")
    ], UserWallPaperCfg.prototype, "createTime", void 0);
    __decorate([
        Field.d(8, "int64", "optional")
    ], UserWallPaperCfg.prototype, "updateTime", void 0);
    UserWallPaperCfg = __decorate([
        Type.d("Type_tss_user_common_user_proto_UserWallPaperCfg")
    ], UserWallPaperCfg);
    user.UserWallPaperCfg = UserWallPaperCfg;
    let UserBubbleCfg = class UserBubbleCfg extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.bubbleId = 0;
            this.name = "";
            this.detailImg = "";
            this.thumbImg = "";
            this.receiveImg = "";
            this.sendImg = "";
            this.decorateImg = "";
            this.levelVal = 0;
            this.createTime = 0;
            this.updateTime = 0;
            if (param) {
                this.uid = param.uid;
                this.bubbleId = param.bubbleId;
                this.name = param.name;
                this.detailImg = param.detailImg;
                this.thumbImg = param.thumbImg;
                this.receiveImg = param.receiveImg;
                this.sendImg = param.sendImg;
                this.decorateImg = param.decorateImg;
                this.levelVal = param.levelVal;
                this.createTime = param.createTime;
                this.updateTime = param.updateTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], UserBubbleCfg.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], UserBubbleCfg.prototype, "bubbleId", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], UserBubbleCfg.prototype, "name", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], UserBubbleCfg.prototype, "detailImg", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], UserBubbleCfg.prototype, "thumbImg", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], UserBubbleCfg.prototype, "receiveImg", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], UserBubbleCfg.prototype, "sendImg", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], UserBubbleCfg.prototype, "decorateImg", void 0);
    __decorate([
        Field.d(9, "int64", "optional")
    ], UserBubbleCfg.prototype, "levelVal", void 0);
    __decorate([
        Field.d(10, "int64", "optional")
    ], UserBubbleCfg.prototype, "createTime", void 0);
    __decorate([
        Field.d(11, "int64", "optional")
    ], UserBubbleCfg.prototype, "updateTime", void 0);
    UserBubbleCfg = __decorate([
        Type.d("Type_tss_user_common_user_proto_UserBubbleCfg")
    ], UserBubbleCfg);
    user.UserBubbleCfg = UserBubbleCfg;
    let UserInfoCompleteTask = class UserInfoCompleteTask extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.taskFlag = 0;
            this.isAwarded = false;
            this.createTime = 0;
            this.updateTime = 0;
            if (param) {
                this.uid = param.uid;
                this.taskFlag = param.taskFlag;
                this.isAwarded = param.isAwarded;
                this.createTime = param.createTime;
                this.updateTime = param.updateTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], UserInfoCompleteTask.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], UserInfoCompleteTask.prototype, "taskFlag", void 0);
    __decorate([
        Field.d(3, "bool", "optional")
    ], UserInfoCompleteTask.prototype, "isAwarded", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], UserInfoCompleteTask.prototype, "createTime", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], UserInfoCompleteTask.prototype, "updateTime", void 0);
    UserInfoCompleteTask = __decorate([
        Type.d("Type_tss_user_common_user_proto_UserInfoCompleteTask")
    ], UserInfoCompleteTask);
    user.UserInfoCompleteTask = UserInfoCompleteTask;
})(user || (user = {}));
//# sourceMappingURL=common_user.js.map