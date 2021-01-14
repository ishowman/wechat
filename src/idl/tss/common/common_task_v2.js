import { __decorate } from "tslib";
import { Message, Type, Field } from 'protobufjs/light';
export var v2_task;
(function (v2_task) {
    let TargetUser;
    (function (TargetUser) {
        TargetUser[TargetUser["TargetUserUnknown"] = 0] = "TargetUserUnknown";
        TargetUser[TargetUser["TargetUserAll"] = 1] = "TargetUserAll";
        TargetUser[TargetUser["TargetUserVip"] = 2] = "TargetUserVip";
        TargetUser[TargetUser["TargetUserNewUser"] = 3] = "TargetUserNewUser";
        TargetUser[TargetUser["TargetUserTourist"] = 4] = "TargetUserTourist";
        TargetUser[TargetUser["TargetUserOldUser"] = 5] = "TargetUserOldUser";
        TargetUser[TargetUser["TargetUserBackUser"] = 6] = "TargetUserBackUser";
        TargetUser[TargetUser["TargetUserNotCertification"] = 7] = "TargetUserNotCertification";
    })(TargetUser = v2_task.TargetUser || (v2_task.TargetUser = {}));
    let GetTaskType;
    (function (GetTaskType) {
        GetTaskType[GetTaskType["GetTaskTypeUnknown"] = 0] = "GetTaskTypeUnknown";
        GetTaskType[GetTaskType["GetTaskTypeAuto"] = 1] = "GetTaskTypeAuto";
        GetTaskType[GetTaskType["GetTaskTypeManually"] = 2] = "GetTaskTypeManually";
    })(GetTaskType = v2_task.GetTaskType || (v2_task.GetTaskType = {}));
    let TaskTimeType;
    (function (TaskTimeType) {
        TaskTimeType[TaskTimeType["TaskTimeTypeUnknown"] = 0] = "TaskTimeTypeUnknown";
        TaskTimeType[TaskTimeType["TaskTimeTypeAll"] = 1] = "TaskTimeTypeAll";
        TaskTimeType[TaskTimeType["TaskTimeTypeTimeFrame"] = 2] = "TaskTimeTypeTimeFrame";
        TaskTimeType[TaskTimeType["TaskTimeTypeWeekday"] = 3] = "TaskTimeTypeWeekday";
    })(TaskTimeType = v2_task.TaskTimeType || (v2_task.TaskTimeType = {}));
    let TaskEffectType;
    (function (TaskEffectType) {
        TaskEffectType[TaskEffectType["TaskEffectTypeUnknown"] = 0] = "TaskEffectTypeUnknown";
        TaskEffectType[TaskEffectType["TaskEffectTypeUnlimited"] = 1] = "TaskEffectTypeUnlimited";
        TaskEffectType[TaskEffectType["TaskEffectTypeLimited"] = 2] = "TaskEffectTypeLimited";
    })(TaskEffectType = v2_task.TaskEffectType || (v2_task.TaskEffectType = {}));
    let TaskPeriodType;
    (function (TaskPeriodType) {
        TaskPeriodType[TaskPeriodType["TaskPeriodTypeUnknown"] = 0] = "TaskPeriodTypeUnknown";
        TaskPeriodType[TaskPeriodType["TaskPeriodTypeUnlimited"] = 1] = "TaskPeriodTypeUnlimited";
        TaskPeriodType[TaskPeriodType["TaskPeriodTypeDay"] = 2] = "TaskPeriodTypeDay";
        TaskPeriodType[TaskPeriodType["TaskPeriodTypeWeek"] = 3] = "TaskPeriodTypeWeek";
        TaskPeriodType[TaskPeriodType["TaskPeriodTypeMonth"] = 4] = "TaskPeriodTypeMonth";
    })(TaskPeriodType = v2_task.TaskPeriodType || (v2_task.TaskPeriodType = {}));
    let CalcStrategy;
    (function (CalcStrategy) {
        CalcStrategy[CalcStrategy["CalcStrategyUnknown"] = 0] = "CalcStrategyUnknown";
        CalcStrategy[CalcStrategy["CalcStrategyContinuous"] = 1] = "CalcStrategyContinuous";
        CalcStrategy[CalcStrategy["CalcStrategyAccumulation"] = 2] = "CalcStrategyAccumulation";
        CalcStrategy[CalcStrategy["CalcStrategyTimesCA"] = 3] = "CalcStrategyTimesCA";
    })(CalcStrategy = v2_task.CalcStrategy || (v2_task.CalcStrategy = {}));
    let PublishStatus;
    (function (PublishStatus) {
        PublishStatus[PublishStatus["PublishStatusUnknown"] = 0] = "PublishStatusUnknown";
        PublishStatus[PublishStatus["PublishStatusDraft"] = 1] = "PublishStatusDraft";
        PublishStatus[PublishStatus["PublishStatusOnline"] = 2] = "PublishStatusOnline";
        PublishStatus[PublishStatus["PublishStatusOffline"] = 3] = "PublishStatusOffline";
        PublishStatus[PublishStatus["PublishStatusPublished"] = 4] = "PublishStatusPublished";
    })(PublishStatus = v2_task.PublishStatus || (v2_task.PublishStatus = {}));
    let Publish = class Publish extends Message {
        constructor(param) {
            super();
            this.onlineTime = 0;
            this.offlineTime = 0;
            this.status = 0;
            if (param) {
                this.onlineTime = param.onlineTime;
                this.offlineTime = param.offlineTime;
                this.status = param.status;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], Publish.prototype, "onlineTime", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], Publish.prototype, "offlineTime", void 0);
    __decorate([
        Field.d(3, PublishStatus, "optional")
    ], Publish.prototype, "status", void 0);
    Publish = __decorate([
        Type.d("Type_tss_common_common_task_v2_proto_Publish")
    ], Publish);
    v2_task.Publish = Publish;
    let Task = class Task extends Message {
        constructor(param) {
            super();
            this.taskID = 0;
            this.taskName = "";
            this.desc = "";
            this.icon = "";
            this.targetUser = 0;
            this.getTaskType = 0;
            this.taskTimeType = 0;
            this.weekdays = [];
            this.relativeStartAt = 0;
            this.relativeEndAt = 0;
            this.taskEffectType = 0;
            this.effectDuration = 0;
            this.eventTopic = "";
            this.targetPerCycle = 0;
            this.url = "";
            this.periodType = 0;
            this.periodCnt = 0;
            this.cycleCntPerPeriod = 0;
            this.calcStrategy = 0;
            this.operator = "";
            this.updateAt = 0;
            this.publish = new Publish();
            this.isPush = false;
            this.checksum = "";
            this.topicID = 0;
            if (param) {
                this.taskID = param.taskID;
                this.taskName = param.taskName;
                this.desc = param.desc;
                this.icon = param.icon;
                this.targetUser = param.targetUser;
                this.getTaskType = param.getTaskType;
                this.taskTimeType = param.taskTimeType;
                this.weekdays = param.weekdays;
                this.relativeStartAt = param.relativeStartAt;
                this.relativeEndAt = param.relativeEndAt;
                this.taskEffectType = param.taskEffectType;
                this.effectDuration = param.effectDuration;
                this.eventTopic = param.eventTopic;
                this.targetPerCycle = param.targetPerCycle;
                this.url = param.url;
                this.periodType = param.periodType;
                this.periodCnt = param.periodCnt;
                this.cycleCntPerPeriod = param.cycleCntPerPeriod;
                this.calcStrategy = param.calcStrategy;
                this.operator = param.operator;
                this.updateAt = param.updateAt;
                this.publish = new Publish(param.publish);
                this.isPush = param.isPush;
                this.checksum = param.checksum;
                this.topicID = param.topicID;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], Task.prototype, "taskID", void 0);
    __decorate([
        Field.d(2, "string", "required")
    ], Task.prototype, "taskName", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], Task.prototype, "desc", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], Task.prototype, "icon", void 0);
    __decorate([
        Field.d(5, TargetUser, "optional")
    ], Task.prototype, "targetUser", void 0);
    __decorate([
        Field.d(6, GetTaskType, "optional")
    ], Task.prototype, "getTaskType", void 0);
    __decorate([
        Field.d(7, TaskTimeType, "optional")
    ], Task.prototype, "taskTimeType", void 0);
    __decorate([
        Field.d(8, "int32", "repeated")
    ], Task.prototype, "weekdays", void 0);
    __decorate([
        Field.d(9, "int64", "optional")
    ], Task.prototype, "relativeStartAt", void 0);
    __decorate([
        Field.d(10, "int64", "optional")
    ], Task.prototype, "relativeEndAt", void 0);
    __decorate([
        Field.d(11, TaskEffectType, "optional")
    ], Task.prototype, "taskEffectType", void 0);
    __decorate([
        Field.d(12, "int64", "optional")
    ], Task.prototype, "effectDuration", void 0);
    __decorate([
        Field.d(13, "string", "optional")
    ], Task.prototype, "eventTopic", void 0);
    __decorate([
        Field.d(14, "int64", "optional")
    ], Task.prototype, "targetPerCycle", void 0);
    __decorate([
        Field.d(15, "string", "optional")
    ], Task.prototype, "url", void 0);
    __decorate([
        Field.d(16, TaskPeriodType, "optional")
    ], Task.prototype, "periodType", void 0);
    __decorate([
        Field.d(17, "int64", "optional")
    ], Task.prototype, "periodCnt", void 0);
    __decorate([
        Field.d(18, "int64", "optional")
    ], Task.prototype, "cycleCntPerPeriod", void 0);
    __decorate([
        Field.d(19, CalcStrategy, "optional")
    ], Task.prototype, "calcStrategy", void 0);
    __decorate([
        Field.d(20, "string", "optional")
    ], Task.prototype, "operator", void 0);
    __decorate([
        Field.d(21, "int64", "optional")
    ], Task.prototype, "updateAt", void 0);
    __decorate([
        Field.d(23, Publish, "optional")
    ], Task.prototype, "publish", void 0);
    __decorate([
        Field.d(24, "bool", "optional")
    ], Task.prototype, "isPush", void 0);
    __decorate([
        Field.d(25, "string", "optional")
    ], Task.prototype, "checksum", void 0);
    __decorate([
        Field.d(26, "int64", "optional")
    ], Task.prototype, "topicID", void 0);
    Task = __decorate([
        Type.d("Type_tss_common_common_task_v2_proto_Task")
    ], Task);
    v2_task.Task = Task;
})(v2_task || (v2_task = {}));
//# sourceMappingURL=common_task_v2.js.map