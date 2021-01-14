/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace user {
export enum RoleType {
	RoleTypeUnknown = 0,
	RoleTypeVisitor = 1,
	RoleTypeNormalPlayer = 2,
	RoleTypeCertifiedPlayer = 3,
}
export enum PermissionType {
	PermissionTypeUnknown = 0,
	PermissionTypeRecharge = 1,
	PermissionTypeExchangePrize = 3,
	PermissionTypeLogin = 6,
}
export enum State {
	StateUnknown = 0,
	StateWaitToShelf = 1,
	StateOnShelf = 2,
	StateOutOfStock = 3,
}
@Type.d("Type_tss_user_common_user_proto_RolePermission") 
export class RolePermission extends Message<RolePermission> { 
	constructor(param?: Properties<RolePermission>) {  
		super(); 
		if (param) { 
			this.role = param.role!
			this.permission = param.permission!
			} 
		} 
		@Field.d(1, RoleType, "required")
		role:RoleType = 0;
		@Field.d(2, PermissionType, "required")
		permission:PermissionType = 0;
} 
@Type.d("Type_tss_user_common_user_proto_Log") 
export class Log extends Message<Log> { 
	constructor(param?: Properties<Log>) {  
		super(); 
		if (param) { 
			this.role = param.role!
			this.permission = param.permission!
			this.operation = param.operation!
			} 
		} 
		@Field.d(1, "string", "required")
		role:string = "";
		@Field.d(2, "string", "required")
		permission:string = "";
		@Field.d(3, "string", "required")
		operation:string = "";
} 
@Type.d("Type_tss_user_common_user_proto_OperateLog") 
export class OperateLog extends Message<OperateLog> { 
	constructor(param?: Properties<OperateLog>) {  
		super(); 
		if (param) { 
			this.operateAt = param.operateAt!
			this.operator = param.operator!
			this.logData = param.logData!
			} 
		} 
		@Field.d(1, "int64", "required")
		operateAt:number = 0;
		@Field.d(2, "string", "required")
		operator:string = "";
		@Field.d(3, Log, "repeated")
		logData:Log[] = [];
} 
@Type.d("Type_tss_user_common_user_proto_ChatWallPaper") 
export class ChatWallPaper extends Message<ChatWallPaper> { 
	constructor(param?: Properties<ChatWallPaper>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			this.name = param.name!
			this.state = param.state!
			this.detailImg = param.detailImg!
			this.thumbImg = param.thumbImg!
			this.levelVal = param.levelVal!
			this.order = param.order!
			this.onlineTime = param.onlineTime!
			this.offlineTime = param.offlineTime!
			this.updateTime = param.updateTime!
			} 
		} 
		@Field.d(1, "int64", "optional")
		id:number = 0;
		@Field.d(2, "string", "optional")
		name:string = "";
		@Field.d(3, State, "optional")
		state:State = 0;
		@Field.d(4, "string", "optional")
		detailImg:string = "";
		@Field.d(5, "string", "optional")
		thumbImg:string = "";
		@Field.d(6, "int64", "optional")
		levelVal:number = 0;
		@Field.d(7, "int32", "optional")
		order:number = 0;
		@Field.d(8, "int64", "optional")
		onlineTime:number = 0;
		@Field.d(9, "int64", "optional")
		offlineTime:number = 0;
		@Field.d(10, "int64", "optional")
		updateTime:number = 0;
} 
@Type.d("Type_tss_user_common_user_proto_ChatBubble") 
export class ChatBubble extends Message<ChatBubble> { 
	constructor(param?: Properties<ChatBubble>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			this.name = param.name!
			this.state = param.state!
			this.detailImg = param.detailImg!
			this.thumbImg = param.thumbImg!
			this.receiveImg = param.receiveImg!
			this.sendImg = param.sendImg!
			this.decorateImg = param.decorateImg!
			this.levelVal = param.levelVal!
			this.order = param.order!
			this.onlineTime = param.onlineTime!
			this.offlineTime = param.offlineTime!
			this.updateTime = param.updateTime!
			} 
		} 
		@Field.d(1, "int64", "optional")
		id:number = 0;
		@Field.d(2, "string", "optional")
		name:string = "";
		@Field.d(3, State, "optional")
		state:State = 0;
		@Field.d(4, "string", "optional")
		detailImg:string = "";
		@Field.d(5, "string", "optional")
		thumbImg:string = "";
		@Field.d(6, "string", "optional")
		receiveImg:string = "";
		@Field.d(7, "string", "optional")
		sendImg:string = "";
		@Field.d(8, "string", "optional")
		decorateImg:string = "";
		@Field.d(9, "int64", "optional")
		levelVal:number = 0;
		@Field.d(10, "int32", "optional")
		order:number = 0;
		@Field.d(11, "int64", "optional")
		onlineTime:number = 0;
		@Field.d(12, "int64", "optional")
		offlineTime:number = 0;
		@Field.d(13, "int64", "optional")
		updateTime:number = 0;
} 
@Type.d("Type_tss_user_common_user_proto_PhotoFrame") 
export class PhotoFrame extends Message<PhotoFrame> { 
	constructor(param?: Properties<PhotoFrame>) {  
		super(); 
		if (param) { 
			this.levelVal = param.levelVal!
			this.levelName = param.levelName!
			this.image = param.image!
			this.createTime = param.createTime!
			this.updateTime = param.updateTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		levelVal:number = 0;
		@Field.d(2, "string", "optional")
		levelName:string = "";
		@Field.d(3, "string", "optional")
		image:string = "";
		@Field.d(4, "int64", "optional")
		createTime:number = 0;
		@Field.d(5, "int64", "optional")
		updateTime:number = 0;
} 
@Type.d("Type_tss_user_common_user_proto_NicknameColor") 
export class NicknameColor extends Message<NicknameColor> { 
	constructor(param?: Properties<NicknameColor>) {  
		super(); 
		if (param) { 
			this.levelVal = param.levelVal!
			this.levelName = param.levelName!
			this.colorValue = param.colorValue!
			this.createTime = param.createTime!
			this.updateTime = param.updateTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		levelVal:number = 0;
		@Field.d(2, "string", "optional")
		levelName:string = "";
		@Field.d(3, "string", "optional")
		colorValue:string = "";
		@Field.d(4, "int64", "optional")
		createTime:number = 0;
		@Field.d(5, "int64", "optional")
		updateTime:number = 0;
} 
@Type.d("Type_tss_user_common_user_proto_VipLevel") 
export class VipLevel extends Message<VipLevel> { 
	constructor(param?: Properties<VipLevel>) {  
		super(); 
		if (param) { 
			this.levelVal = param.levelVal!
			this.name = param.name!
			} 
		} 
		@Field.d(1, "int32", "optional")
		levelVal:number = 0;
		@Field.d(2, "string", "optional")
		name:string = "";
} 
@Type.d("Type_tss_user_common_user_proto_UserWallPaperCfg") 
export class UserWallPaperCfg extends Message<UserWallPaperCfg> { 
	constructor(param?: Properties<UserWallPaperCfg>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.wallPaperId = param.wallPaperId!
			this.name = param.name!
			this.detailImg = param.detailImg!
			this.thumbImg = param.thumbImg!
			this.levelVal = param.levelVal!
			this.createTime = param.createTime!
			this.updateTime = param.updateTime!
			} 
		} 
		@Field.d(1, "int64", "optional")
		uid:number = 0;
		@Field.d(2, "int64", "optional")
		wallPaperId:number = 0;
		@Field.d(3, "string", "optional")
		name:string = "";
		@Field.d(4, "string", "optional")
		detailImg:string = "";
		@Field.d(5, "string", "optional")
		thumbImg:string = "";
		@Field.d(6, "int64", "optional")
		levelVal:number = 0;
		@Field.d(7, "int64", "optional")
		createTime:number = 0;
		@Field.d(8, "int64", "optional")
		updateTime:number = 0;
} 
@Type.d("Type_tss_user_common_user_proto_UserBubbleCfg") 
export class UserBubbleCfg extends Message<UserBubbleCfg> { 
	constructor(param?: Properties<UserBubbleCfg>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.bubbleId = param.bubbleId!
			this.name = param.name!
			this.detailImg = param.detailImg!
			this.thumbImg = param.thumbImg!
			this.receiveImg = param.receiveImg!
			this.sendImg = param.sendImg!
			this.decorateImg = param.decorateImg!
			this.levelVal = param.levelVal!
			this.createTime = param.createTime!
			this.updateTime = param.updateTime!
			} 
		} 
		@Field.d(1, "int64", "optional")
		uid:number = 0;
		@Field.d(2, "int64", "optional")
		bubbleId:number = 0;
		@Field.d(3, "string", "optional")
		name:string = "";
		@Field.d(4, "string", "optional")
		detailImg:string = "";
		@Field.d(5, "string", "optional")
		thumbImg:string = "";
		@Field.d(6, "string", "optional")
		receiveImg:string = "";
		@Field.d(7, "string", "optional")
		sendImg:string = "";
		@Field.d(8, "string", "optional")
		decorateImg:string = "";
		@Field.d(9, "int64", "optional")
		levelVal:number = 0;
		@Field.d(10, "int64", "optional")
		createTime:number = 0;
		@Field.d(11, "int64", "optional")
		updateTime:number = 0;
} 
@Type.d("Type_tss_user_common_user_proto_UserInfoCompleteTask") 
export class UserInfoCompleteTask extends Message<UserInfoCompleteTask> { 
	constructor(param?: Properties<UserInfoCompleteTask>) {  
		super(); 
		if (param) { 
			this.uid = param.uid!
			this.taskFlag = param.taskFlag!
			this.isAwarded = param.isAwarded!
			this.createTime = param.createTime!
			this.updateTime = param.updateTime!
			} 
		} 
		@Field.d(1, "int64", "optional")
		uid:number = 0;
		@Field.d(2, "int64", "optional")
		taskFlag:number = 0;
		@Field.d(3, "bool", "optional")
		isAwarded:boolean = false;
		@Field.d(4, "int64", "optional")
		createTime:number = 0;
		@Field.d(5, "int64", "optional")
		updateTime:number = 0;
} 
}
