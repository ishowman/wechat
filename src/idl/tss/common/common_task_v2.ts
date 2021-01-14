/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace v2_task {
export enum TargetUser {
	TargetUserUnknown = 0,
	TargetUserAll = 1,
	TargetUserVip = 2,
	TargetUserNewUser = 3,
	TargetUserTourist = 4,
	TargetUserOldUser = 5,
	TargetUserBackUser = 6,
	TargetUserNotCertification = 7,
}
export enum GetTaskType {
	GetTaskTypeUnknown = 0,
	GetTaskTypeAuto = 1,
	GetTaskTypeManually = 2,
}
export enum TaskTimeType {
	TaskTimeTypeUnknown = 0,
	TaskTimeTypeAll = 1,
	TaskTimeTypeTimeFrame = 2,
	TaskTimeTypeWeekday = 3,
}
export enum TaskEffectType {
	TaskEffectTypeUnknown = 0,
	TaskEffectTypeUnlimited = 1,
	TaskEffectTypeLimited = 2,
}
export enum TaskPeriodType {
	TaskPeriodTypeUnknown = 0,
	TaskPeriodTypeUnlimited = 1,
	TaskPeriodTypeDay = 2,
	TaskPeriodTypeWeek = 3,
	TaskPeriodTypeMonth = 4,
}
export enum CalcStrategy {
	CalcStrategyUnknown = 0,
	CalcStrategyContinuous = 1,
	CalcStrategyAccumulation = 2,
	CalcStrategyTimesCA = 3,
}
export enum PublishStatus {
	PublishStatusUnknown = 0,
	PublishStatusDraft = 1,
	PublishStatusOnline = 2,
	PublishStatusOffline = 3,
	PublishStatusPublished = 4,
}
@Type.d("Type_tss_common_common_task_v2_proto_Publish") 
export class Publish extends Message<Publish> { 
	constructor(param?: Properties<Publish>) {  
		super(); 
		if (param) { 
			this.onlineTime = param.onlineTime!
			this.offlineTime = param.offlineTime!
			this.status = param.status!
			} 
		} 
		@Field.d(1, "int64", "optional")
		onlineTime:number = 0;
		@Field.d(2, "int64", "optional")
		offlineTime:number = 0;
		@Field.d(3, PublishStatus, "optional")
		status:PublishStatus = 0;
} 
@Type.d("Type_tss_common_common_task_v2_proto_Task") 
export class Task extends Message<Task> { 
	constructor(param?: Properties<Task>) {  
		super(); 
		if (param) { 
			this.taskID = param.taskID!
			this.taskName = param.taskName!
			this.desc = param.desc!
			this.icon = param.icon!
			this.targetUser = param.targetUser!
			this.getTaskType = param.getTaskType!
			this.taskTimeType = param.taskTimeType!
			this.weekdays = param.weekdays!
			this.relativeStartAt = param.relativeStartAt!
			this.relativeEndAt = param.relativeEndAt!
			this.taskEffectType = param.taskEffectType!
			this.effectDuration = param.effectDuration!
			this.eventTopic = param.eventTopic!
			this.targetPerCycle = param.targetPerCycle!
			this.url = param.url!
			this.periodType = param.periodType!
			this.periodCnt = param.periodCnt!
			this.cycleCntPerPeriod = param.cycleCntPerPeriod!
			this.calcStrategy = param.calcStrategy!
			this.operator = param.operator!
			this.updateAt = param.updateAt!
			this.publish = new Publish(param.publish!)
			this.isPush = param.isPush!
			this.checksum = param.checksum!
			this.topicID = param.topicID!
			} 
		} 
		@Field.d(1, "int64", "optional")
		taskID:number = 0;
		@Field.d(2, "string", "required")
		taskName:string = "";
		@Field.d(3, "string", "optional")
		desc:string = "";
		@Field.d(4, "string", "optional")
		icon:string = "";
		@Field.d(5, TargetUser, "optional")
		targetUser:TargetUser = 0;
		@Field.d(6, GetTaskType, "optional")
		getTaskType:GetTaskType = 0;
		@Field.d(7, TaskTimeType, "optional")
		taskTimeType:TaskTimeType = 0;
		@Field.d(8, "int32", "repeated")
		weekdays:number[] = [];
		@Field.d(9, "int64", "optional")
		relativeStartAt:number = 0;
		@Field.d(10, "int64", "optional")
		relativeEndAt:number = 0;
		@Field.d(11, TaskEffectType, "optional")
		taskEffectType:TaskEffectType = 0;
		@Field.d(12, "int64", "optional")
		effectDuration:number = 0;
		@Field.d(13, "string", "optional")
		eventTopic:string = "";
		@Field.d(14, "int64", "optional")
		targetPerCycle:number = 0;
		@Field.d(15, "string", "optional")
		url:string = "";
		@Field.d(16, TaskPeriodType, "optional")
		periodType:TaskPeriodType = 0;
		@Field.d(17, "int64", "optional")
		periodCnt:number = 0;
		@Field.d(18, "int64", "optional")
		cycleCntPerPeriod:number = 0;
		@Field.d(19, CalcStrategy, "optional")
		calcStrategy:CalcStrategy = 0;
		@Field.d(20, "string", "optional")
		operator:string = "";
		@Field.d(21, "int64", "optional")
		updateAt:number = 0;
		@Field.d(23, Publish, "optional")
		publish:Publish =  new Publish();
		@Field.d(24, "bool", "optional")
		isPush:boolean = false;
		@Field.d(25, "string", "optional")
		checksum:string = "";
		@Field.d(26, "int64", "optional")
		topicID:number = 0;
} 
}
