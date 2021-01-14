/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
import { base as base} from '@/idl/base/base';
import { common as common_common_define} from '@/idl/tss/common/common_define';
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace mail {
export enum MailTaskState {
	MailTaskStateUnknown = 0,
	MailTaskStateInit = 1,
	MailTaskStateSending = 2,
	MailTaskStateDone = 3,
	MailTaskStateFailed = 4,
	MailTaskStateRevokeing = 5,
	MailTaskStateRevokeSuccess = 6,
	MailTaskStateRevokeFailed = 7,
}
export enum ChangeType {
	ChangeTypeUnknown = 0,
	ChangeTypeIncr = 1,
	ChangeTypeDecr = 2,
}
export enum RevokeState {
	RevokeStateUnknown = 0,
	RevokeStateSuccess = 1,
	RevokeStateFailed = 2,
}
export enum OperateType {
	OperateTypeUnknown = 0,
	OperateTypeRevoke = 1,
}
@Type.d("Type_tss_hall_mail_v2_proto_MailTime") 
export class MailTime extends Message<MailTime> { 
	constructor(param?: Properties<MailTime>) {  
		super(); 
		if (param) { 
			this.expire = new common_common_define.ExpireData(param.expire!)
			this.receiveTime = param.receiveTime!
			} 
		} 
		@Field.d(1, common_common_define.ExpireData, "optional")
		expire:common_common_define.ExpireData =  new common_common_define.ExpireData();
		@Field.d(3, "int64", "optional")
		receiveTime:number = 0;
} 
@Type.d("Type_tss_hall_mail_v2_proto_AwardData") 
export class AwardData extends Message<AwardData> { 
	constructor(param?: Properties<AwardData>) {  
		super(); 
		if (param) { 
			this.way = param.way!
			this.PropItem = param.PropItem!
			} 
		} 
		@Field.d(1, common_common_define.Way, "optional")
		way:common_common_define.Way = 0;
		@Field.d(2, common_common_define.PropItem, "repeated")
		PropItem:common_common_define.PropItem[] = [];
} 
@Type.d("Type_tss_hall_mail_v2_proto_SysMaillTmpl") 
export class SysMaillTmpl extends Message<SysMaillTmpl> { 
	constructor(param?: Properties<SysMaillTmpl>) {  
		super(); 
		if (param) { 
			this.origin = param.origin!
			this.title = param.title!
			this.content = param.content!
			this.changeReason = param.changeReason!
			this.expire = new common_common_define.ExpireData(param.expire!)
			this.aData = new mail.AwardData(param.aData!)
			this.MailExtra = new Uint8Array(param.MailExtra!)
			} 
		} 
		@Field.d(2, "string", "optional")
		origin:string = "";
		@Field.d(3, "string", "optional")
		title:string = "";
		@Field.d(4, "string", "optional")
		content:string = "";
		@Field.d(8, "string", "optional")
		changeReason:string = "";
		@Field.d(6, common_common_define.ExpireData, "optional")
		expire:common_common_define.ExpireData =  new common_common_define.ExpireData();
		@Field.d(7, mail.AwardData, "optional")
		aData:mail.AwardData =  new mail.AwardData();
		@Field.d(10, "bytes", "optional")
		MailExtra:Uint8Array =  new Uint8Array();
} 
@Type.d("Type_tss_hall_mail_v2_proto_SysMailData") 
export class SysMailData extends Message<SysMailData> { 
	constructor(param?: Properties<SysMailData>) {  
		super(); 
		if (param) { 
			this.mid = param.mid!
			this.origin = param.origin!
			this.title = param.title!
			this.content = param.content!
			this.isRead = param.isRead!
			this.expiredAt = param.expiredAt!
			this.aData = new mail.AwardData(param.aData!)
			this.changeReason = param.changeReason!
			this.createdAt = param.createdAt!
			this.isAccept = param.isAccept!
			} 
		} 
		@Field.d(1, "string", "optional")
		mid:string = "";
		@Field.d(2, "string", "optional")
		origin:string = "";
		@Field.d(3, "string", "optional")
		title:string = "";
		@Field.d(4, "string", "optional")
		content:string = "";
		@Field.d(5, "bool", "optional")
		isRead:boolean = false;
		@Field.d(6, "int64", "optional")
		expiredAt:number = 0;
		@Field.d(7, mail.AwardData, "optional")
		aData:mail.AwardData =  new mail.AwardData();
		@Field.d(8, "string", "optional")
		changeReason:string = "";
		@Field.d(9, "int64", "optional")
		createdAt:number = 0;
		@Field.d(10, "bool", "optional")
		isAccept:boolean = false;
} 
@Type.d("Type_tss_hall_mail_v2_proto_BatchSendSysMailReq") 
export class BatchSendSysMailReq extends Message<BatchSendSysMailReq> { 
	constructor(param?: Properties<BatchSendSysMailReq>) {  
		super(); 
		if (param) { 
			this.groupID = param.groupID!
			this.UIDs = param.UIDs!
			this.data = new mail.SysMaillTmpl(param.data!)
			this.MailExtra = new Uint8Array(param.MailExtra!)
			this.operator = param.operator!
			} 
		} 
		@Field.d(1, "string", "required")
		groupID:string = "";
		@Field.d(2, "int64", "repeated")
		UIDs:number[] = [];
		@Field.d(3, mail.SysMaillTmpl, "optional")
		data:mail.SysMaillTmpl =  new mail.SysMaillTmpl();
		@Field.d(4, "bytes", "optional")
		MailExtra:Uint8Array =  new Uint8Array();
		@Field.d(5, "string", "optional")
		operator:string = "";
} 
@Type.d("Type_tss_hall_mail_v2_proto_BatchSendSysMailResp") 
export class BatchSendSysMailResp extends Message<BatchSendSysMailResp> { 
	constructor(param?: Properties<BatchSendSysMailResp>) {  
		super(); 
		if (param) { 
			} 
		} 
} 
@Type.d("Type_tss_hall_mail_v2_proto_ListSysMailsReq") 
export class ListSysMailsReq extends Message<ListSysMailsReq> { 
	constructor(param?: Properties<ListSysMailsReq>) {  
		super(); 
		if (param) { 
			this.UID = param.UID!
			this.page = param.page!
			this.pageSize = param.pageSize!
			} 
		} 
		@Field.d(1, "int64", "optional")
		UID:number = 0;
		@Field.d(2, "int32", "optional")
		page:number = 0;
		@Field.d(3, "int32", "optional")
		pageSize:number = 0;
} 
@Type.d("Type_tss_hall_mail_v2_proto_MailBriefData") 
export class MailBriefData extends Message<MailBriefData> { 
	constructor(param?: Properties<MailBriefData>) {  
		super(); 
		if (param) { 
			this.mid = param.mid!
			this.origin = param.origin!
			this.title = param.title!
			this.isRead = param.isRead!
			this.expiredAt = param.expiredAt!
			this.isExistAward = param.isExistAward!
			this.isAccept = param.isAccept!
			this.createdAt = param.createdAt!
			this.content = param.content!
			} 
		} 
		@Field.d(1, "string", "optional")
		mid:string = "";
		@Field.d(2, "string", "optional")
		origin:string = "";
		@Field.d(3, "string", "optional")
		title:string = "";
		@Field.d(4, "bool", "optional")
		isRead:boolean = false;
		@Field.d(5, "int64", "optional")
		expiredAt:number = 0;
		@Field.d(6, "bool", "optional")
		isExistAward:boolean = false;
		@Field.d(7, "bool", "optional")
		isAccept:boolean = false;
		@Field.d(8, "int64", "optional")
		createdAt:number = 0;
		@Field.d(9, "string", "optional")
		content:string = "";
} 
@Type.d("Type_tss_hall_mail_v2_proto_ListSysMailsResp") 
export class ListSysMailsResp extends Message<ListSysMailsResp> { 
	constructor(param?: Properties<ListSysMailsResp>) {  
		super(); 
		if (param) { 
			this.data = param.data!
			this.total = param.total!
			this.unAcceptNum = param.unAcceptNum!
			} 
		} 
		@Field.d(2, mail.MailBriefData, "repeated")
		data:mail.MailBriefData[] = [];
		@Field.d(3, "int64", "optional")
		total:number = 0;
		@Field.d(4, "int64", "optional")
		unAcceptNum:number = 0;
} 
@Type.d("Type_tss_hall_mail_v2_proto_GetSysMailReq") 
export class GetSysMailReq extends Message<GetSysMailReq> { 
	constructor(param?: Properties<GetSysMailReq>) {  
		super(); 
		if (param) { 
			this.MiD = param.MiD!
			} 
		} 
		@Field.d(1, "string", "optional")
		MiD:string = "";
} 
@Type.d("Type_tss_hall_mail_v2_proto_GetSysMailResp") 
export class GetSysMailResp extends Message<GetSysMailResp> { 
	constructor(param?: Properties<GetSysMailResp>) {  
		super(); 
		if (param) { 
			this.data = new mail.SysMailData(param.data!)
			} 
		} 
		@Field.d(2, mail.SysMailData, "optional")
		data:mail.SysMailData =  new mail.SysMailData();
} 
@Type.d("Type_tss_hall_mail_v2_proto_GetUnreadMailNumReq") 
export class GetUnreadMailNumReq extends Message<GetUnreadMailNumReq> { 
	constructor(param?: Properties<GetUnreadMailNumReq>) {  
		super(); 
		if (param) { 
			this.UID = param.UID!
			} 
		} 
		@Field.d(1, "int64", "optional")
		UID:number = 0;
} 
@Type.d("Type_tss_hall_mail_v2_proto_GetUnreadMailNumResp") 
export class GetUnreadMailNumResp extends Message<GetUnreadMailNumResp> { 
	constructor(param?: Properties<GetUnreadMailNumResp>) {  
		super(); 
		if (param) { 
			this.unreadNum = param.unreadNum!
			} 
		} 
		@Field.d(2, "int32", "optional")
		unreadNum:number = 0;
} 
@Type.d("Type_tss_hall_mail_v2_proto_AcceptAwardReq") 
export class AcceptAwardReq extends Message<AcceptAwardReq> { 
	constructor(param?: Properties<AcceptAwardReq>) {  
		super(); 
		if (param) { 
			this.UID = param.UID!
			this.MID = param.MID!
			} 
		} 
		@Field.d(1, "int64", "optional")
		UID:number = 0;
		@Field.d(2, "string", "optional")
		MID:string = "";
} 
@Type.d("Type_tss_hall_mail_v2_proto_AcceptAwardResp") 
export class AcceptAwardResp extends Message<AcceptAwardResp> { 
	constructor(param?: Properties<AcceptAwardResp>) {  
		super(); 
		if (param) { 
			this.aData = param.aData!
			} 
		} 
		@Field.d(2, common_common_define.PropItem, "repeated")
		aData:common_common_define.PropItem[] = [];
} 
@Type.d("Type_tss_hall_mail_v2_proto_BatchAcceptAwardReq") 
export class BatchAcceptAwardReq extends Message<BatchAcceptAwardReq> { 
	constructor(param?: Properties<BatchAcceptAwardReq>) {  
		super(); 
		if (param) { 
			this.UID = param.UID!
			this.MIDs = param.MIDs!
			} 
		} 
		@Field.d(1, "int64", "optional")
		UID:number = 0;
		@Field.d(2, "string", "repeated")
		MIDs:string[] = [];
} 
@Type.d("Type_tss_hall_mail_v2_proto_BatchAwardData") 
export class BatchAwardData extends Message<BatchAwardData> { 
	constructor(param?: Properties<BatchAwardData>) {  
		super(); 
		if (param) { 
			this.MID = param.MID!
			this.aData = param.aData!
			} 
		} 
		@Field.d(1, "string", "optional")
		MID:string = "";
		@Field.d(2, common_common_define.PropItem, "repeated")
		aData:common_common_define.PropItem[] = [];
} 
@Type.d("Type_tss_hall_mail_v2_proto_BatchAcceptAwardResp") 
export class BatchAcceptAwardResp extends Message<BatchAcceptAwardResp> { 
	constructor(param?: Properties<BatchAcceptAwardResp>) {  
		super(); 
		if (param) { 
			this.bData = param.bData!
			} 
		} 
		@Field.d(2, mail.BatchAwardData, "repeated")
		bData:mail.BatchAwardData[] = [];
} 
@Type.d("Type_tss_hall_mail_v2_proto_NotifySysMailResp") 
export class NotifySysMailResp extends Message<NotifySysMailResp> { 
	constructor(param?: Properties<NotifySysMailResp>) {  
		super(); 
		if (param) { 
			this.unreadNum = param.unreadNum!
			this.data = new mail.MailBriefData(param.data!)
			} 
		} 
		@Field.d(1, "int32", "optional")
		unreadNum:number = 0;
		@Field.d(2, mail.MailBriefData, "optional")
		data:mail.MailBriefData =  new mail.MailBriefData();
} 
@Type.d("Type_tss_hall_mail_v2_proto_ListBatchSendMailLogReq") 
export class ListBatchSendMailLogReq extends Message<ListBatchSendMailLogReq> { 
	constructor(param?: Properties<ListBatchSendMailLogReq>) {  
		super(); 
		if (param) { 
			this.itemType = param.itemType!
			this.page = param.page!
			this.pageSize = param.pageSize!
			} 
		} 
		@Field.d(1, common_common_define.ItemType, "optional")
		itemType:common_common_define.ItemType = 0;
		@Field.d(2, "int32", "optional")
		page:number = 0;
		@Field.d(3, "int32", "optional")
		pageSize:number = 0;
} 
@Type.d("Type_tss_hall_mail_v2_proto_SendMailLog") 
export class SendMailLog extends Message<SendMailLog> { 
	constructor(param?: Properties<SendMailLog>) {  
		super(); 
		if (param) { 
			this.objectID = param.objectID!
			this.createAt = param.createAt!
			this.itemType = param.itemType!
			this.propID = param.propID!
			this.propName = param.propName!
			this.num = param.num!
			this.expireAt = param.expireAt!
			this.way = param.way!
			this.groupID = param.groupID!
			this.groupName = param.groupName!
			this.UIDs = param.UIDs!
			this.isSuccess = param.isSuccess!
			this.operator = param.operator!
			} 
		} 
		@Field.d(1, "string", "optional")
		objectID:string = "";
		@Field.d(2, "int64", "optional")
		createAt:number = 0;
		@Field.d(3, common_common_define.ItemType, "optional")
		itemType:common_common_define.ItemType = 0;
		@Field.d(4, "int64", "optional")
		propID:number = 0;
		@Field.d(5, "string", "optional")
		propName:string = "";
		@Field.d(6, "int32", "optional")
		num:number = 0;
		@Field.d(7, "int64", "optional")
		expireAt:number = 0;
		@Field.d(9, common_common_define.Way, "optional")
		way:common_common_define.Way = 0;
		@Field.d(10, "string", "required")
		groupID:string = "";
		@Field.d(11, "string", "optional")
		groupName:string = "";
		@Field.d(12, "int64", "repeated")
		UIDs:number[] = [];
		@Field.d(13, "bool", "optional")
		isSuccess:boolean = false;
		@Field.d(14, "string", "optional")
		operator:string = "";
} 
@Type.d("Type_tss_hall_mail_v2_proto_ListBatchSendMailLogRsp") 
export class ListBatchSendMailLogRsp extends Message<ListBatchSendMailLogRsp> { 
	constructor(param?: Properties<ListBatchSendMailLogRsp>) {  
		super(); 
		if (param) { 
			this.logs = param.logs!
			this.totalSize = param.totalSize!
			} 
		} 
		@Field.d(1, mail.SendMailLog, "repeated")
		logs:mail.SendMailLog[] = [];
		@Field.d(2, "int32", "optional")
		totalSize:number = 0;
} 

@Type.d("Type_tss_hall_mail_v2_proto_DeleteMailReq") 
export class DeleteMailReq extends Message<DeleteMailReq> { 
	constructor(param?: Properties<DeleteMailReq>) {  
		super(); 
		if (param) { 
			this.MiD = param.MiD!
			} 
		} 
		@Field.d(1, "string", "optional")
		MiD:string = "";
} 
@Type.d("Type_tss_hall_mail_v2_proto_DeleteMailResp") 
export class DeleteMailResp extends Message<DeleteMailResp> { 
	constructor(param?: Properties<DeleteMailResp>) {  
		super(); 
		if (param) { 
			} 
		} 
} 
@Type.d("Type_tss_hall_mail_v2_proto_MailTask") 
export class MailTask extends Message<MailTask> { 
	constructor(param?: Properties<MailTask>) {  
		super(); 
		if (param) { 
			this.groupID = param.groupID!
			this.UIDs = param.UIDs!
			this.tmpl = new mail.SysMaillTmpl(param.tmpl!)
			this.operator = param.operator!
			this.batchID = param.batchID!
			this.state = param.state!
			this.groupName = param.groupName!
			this.createdAt = param.createdAt!
			this.way = param.way!
			} 
		} 
		@Field.d(1, "string", "optional")
		groupID:string = "";
		@Field.d(2, "int64", "repeated")
		UIDs:number[] = [];
		@Field.d(3, mail.SysMaillTmpl, "optional")
		tmpl:mail.SysMaillTmpl =  new mail.SysMaillTmpl();
		@Field.d(4, "string", "optional")
		operator:string = "";
		@Field.d(5, "string", "optional")
		batchID:string = "";
		@Field.d(6, mail.MailTaskState, "optional")
		state:mail.MailTaskState = 0;
		@Field.d(7, "string", "optional")
		groupName:string = "";
		@Field.d(8, "int64", "optional")
		createdAt:number = 0;
		@Field.d(9, common_common_define.Way, "optional")
		way:common_common_define.Way = 0;
} 
@Type.d("Type_tss_hall_mail_v2_proto_CreateSysMailTaskReq") 
export class CreateSysMailTaskReq extends Message<CreateSysMailTaskReq> { 
	constructor(param?: Properties<CreateSysMailTaskReq>) {  
		super(); 
		if (param) { 
			this.task = new mail.MailTask(param.task!)
			} 
		} 
		@Field.d(1, mail.MailTask, "optional")
		task:mail.MailTask =  new mail.MailTask();
} 
@Type.d("Type_tss_hall_mail_v2_proto_CreateSysMailTaskRsp") 
export class CreateSysMailTaskRsp extends Message<CreateSysMailTaskRsp> { 
	constructor(param?: Properties<CreateSysMailTaskRsp>) {  
		super(); 
		if (param) { 
			this.batchID = param.batchID!
			} 
		} 
		@Field.d(1, "string", "optional")
		batchID:string = "";
} 
@Type.d("Type_tss_hall_mail_v2_proto_SendSysMailReq") 
export class SendSysMailReq extends Message<SendSysMailReq> { 
	constructor(param?: Properties<SendSysMailReq>) {  
		super(); 
		if (param) { 
			this.batchID = param.batchID!
			} 
		} 
		@Field.d(1, "string", "optional")
		batchID:string = "";
} 
@Type.d("Type_tss_hall_mail_v2_proto_ListSysMailTaskReq") 
export class ListSysMailTaskReq extends Message<ListSysMailTaskReq> { 
	constructor(param?: Properties<ListSysMailTaskReq>) {  
		super(); 
		if (param) { 
			this.page = param.page!
			this.pageSize = param.pageSize!
			this.attachmentType = param.attachmentType!
			this.operator = param.operator!
			this.way = param.way!
			this.title = param.title!
			this.propName = param.propName!
			this.propId = param.propId!
			this.beginTime = param.beginTime!
			this.endTime = param.endTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		page:number = 0;
		@Field.d(2, "int32", "optional")
		pageSize:number = 0;
		@Field.d(3, common_common_define.ItemType, "optional")
		attachmentType:common_common_define.ItemType = 0;
		@Field.d(4, "string", "optional")
		operator:string = "";
		@Field.d(5, common_common_define.Way, "optional")
		way:common_common_define.Way = 0;
		@Field.d(6, "string", "optional")
		title:string = "";
		@Field.d(7, "string", "optional")
		propName:string = "";
		@Field.d(8, "int64", "optional")
		propId:number = 0;
		@Field.d(9, "int64", "optional")
		beginTime:number = 0;
		@Field.d(10, "int64", "optional")
		endTime:number = 0;
} 
@Type.d("Type_tss_hall_mail_v2_proto_ListSysMailTaskResp") 
export class ListSysMailTaskResp extends Message<ListSysMailTaskResp> { 
	constructor(param?: Properties<ListSysMailTaskResp>) {  
		super(); 
		if (param) { 
			this.tasks = param.tasks!
			this.total = param.total!
			} 
		} 
		@Field.d(1, mail.MailTask, "repeated")
		tasks:mail.MailTask[] = [];
		@Field.d(2, "int64", "optional")
		total:number = 0;
} 
@Type.d("Type_tss_hall_mail_v2_proto_ListSysMailUidReq") 
export class ListSysMailUidReq extends Message<ListSysMailUidReq> { 
	constructor(param?: Properties<ListSysMailUidReq>) {  
		super(); 
		if (param) { 
			this.batchID = param.batchID!
			this.page = param.page!
			this.pageSize = param.pageSize!
			this.revoke = param.revoke!
			} 
		} 
		@Field.d(1, "string", "optional")
		batchID:string = "";
		@Field.d(2, "int32", "optional")
		page:number = 0;
		@Field.d(3, "int32", "optional")
		pageSize:number = 0;
		@Field.d(4, mail.RevokeState, "optional")
		revoke:mail.RevokeState = 0;
} 
@Type.d("Type_tss_hall_mail_v2_proto_ListSysMailUidResp") 
export class ListSysMailUidResp extends Message<ListSysMailUidResp> { 
	constructor(param?: Properties<ListSysMailUidResp>) {  
		super(); 
		if (param) { 
			this.total = param.total!
			this.uids = param.uids!
			} 
		} 
		@Field.d(1, "int64", "optional")
		total:number = 0;
		@Field.d(2, "int64", "repeated")
		uids:number[] = [];
} 
@Type.d("Type_tss_hall_mail_v2_proto_GetSysMailTaskReq") 
export class GetSysMailTaskReq extends Message<GetSysMailTaskReq> { 
	constructor(param?: Properties<GetSysMailTaskReq>) {  
		super(); 
		if (param) { 
			this.batchID = param.batchID!
			} 
		} 
		@Field.d(1, "string", "optional")
		batchID:string = "";
} 
@Type.d("Type_tss_hall_mail_v2_proto_GetSysMailTaskResp") 
export class GetSysMailTaskResp extends Message<GetSysMailTaskResp> { 
	constructor(param?: Properties<GetSysMailTaskResp>) {  
		super(); 
		if (param) { 
			this.task = new mail.MailTask(param.task!)
			} 
		} 
		@Field.d(1, mail.MailTask, "optional")
		task:mail.MailTask =  new mail.MailTask();
} 
@Type.d("Type_tss_hall_mail_v2_proto_OperateLog") 
export class OperateLog extends Message<OperateLog> { 
	constructor(param?: Properties<OperateLog>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			this.title = param.title!
			this.batchId = param.batchId!
			this.successCount = param.successCount!
			this.failedCount = param.failedCount!
			this.operator = param.operator!
			this.createdAt = param.createdAt!
			this.updatedAt = param.updatedAt!
			this.operate = param.operate!
			this.groupName = param.groupName!
			this.uids = param.uids!
			} 
		} 
		@Field.d(1, "string", "optional")
		id:string = "";
		@Field.d(2, "string", "optional")
		title:string = "";
		@Field.d(3, "string", "optional")
		batchId:string = "";
		@Field.d(4, "int64", "optional")
		successCount:number = 0;
		@Field.d(5, "int64", "optional")
		failedCount:number = 0;
		@Field.d(6, "string", "optional")
		operator:string = "";
		@Field.d(7, "int64", "optional")
		createdAt:number = 0;
		@Field.d(8, "int64", "optional")
		updatedAt:number = 0;
		@Field.d(9, mail.OperateType, "optional")
		operate:mail.OperateType = 0;
		@Field.d(10, "string", "optional")
		groupName:string = "";
		@Field.d(11, "int64", "repeated")
		uids:number[] = [];
} 
@Type.d("Type_tss_hall_mail_v2_proto_ListSysMailTaskOperateLogReq") 
export class ListSysMailTaskOperateLogReq extends Message<ListSysMailTaskOperateLogReq> { 
	constructor(param?: Properties<ListSysMailTaskOperateLogReq>) {  
		super(); 
		if (param) { 
			this.page = param.page!
			this.pageSize = param.pageSize!
			} 
		} 
		@Field.d(1, "int32", "optional")
		page:number = 0;
		@Field.d(2, "int32", "optional")
		pageSize:number = 0;
} 
@Type.d("Type_tss_hall_mail_v2_proto_ListSysMailTaskOperateLogResp") 
export class ListSysMailTaskOperateLogResp extends Message<ListSysMailTaskOperateLogResp> { 
	constructor(param?: Properties<ListSysMailTaskOperateLogResp>) {  
		super(); 
		if (param) { 
			this.total = param.total!
			this.logs = param.logs!
			} 
		} 
		@Field.d(1, "int64", "optional")
		total:number = 0;
		@Field.d(2, mail.OperateLog, "repeated")
		logs:mail.OperateLog[] = [];
} 
@Type.d("Type_tss_hall_mail_v2_proto_RevokeMailReq") 
export class RevokeMailReq extends Message<RevokeMailReq> { 
	constructor(param?: Properties<RevokeMailReq>) {  
		super(); 
		if (param) { 
			this.batchId = param.batchId!
			this.operator = param.operator!
			} 
		} 
		@Field.d(1, "string", "optional")
		batchId:string = "";
		@Field.d(2, "string", "optional")
		operator:string = "";
} 
@Type.d("Type_tss_hall_mail_v2_proto_RevokeMailResp") 
export class RevokeMailResp extends Message<RevokeMailResp> { 
	constructor(param?: Properties<RevokeMailResp>) {  
		super(); 
		if (param) { 
			this.log = new mail.OperateLog(param.log!)
			} 
		} 
		@Field.d(1, mail.OperateLog, "optional")
		log:mail.OperateLog =  new mail.OperateLog();
} 
@Type.d("Type_tss_hall_mail_v2_proto_GetSysMailTaskOperateLogReq") 
export class GetSysMailTaskOperateLogReq extends Message<GetSysMailTaskOperateLogReq> { 
	constructor(param?: Properties<GetSysMailTaskOperateLogReq>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			} 
		} 
		@Field.d(1, "string", "optional")
		id:string = "";
} 
@Type.d("Type_tss_hall_mail_v2_proto_GetSysMailTaskOperateLogResp") 
export class GetSysMailTaskOperateLogResp extends Message<GetSysMailTaskOperateLogResp> { 
	constructor(param?: Properties<GetSysMailTaskOperateLogResp>) {  
		super(); 
		if (param) { 
			this.log = new mail.OperateLog(param.log!)
			} 
		} 
		@Field.d(1, mail.OperateLog, "optional")
		log:mail.OperateLog =  new mail.OperateLog();
} 
export const MailServer = {
	config: new ApiSendConfig(),
	response:{ code:0 },
	resetConfig() {
		this.config = new ApiSendConfig();
	},
	env(baseEnv:CMSEnv) {
		baseEnv ? this.config.baseEnv = baseEnv : '';
		return this
	},
	label(label:{}) {
		label ? this.config.label = label : {};
		return this
	},
	space(space:string) {
		space ? this.config.space = space : '';
		return this
	},
	sen(sen:string) {
		sen ? this.config.sen = sen : '';
		return this
	},
	appID(appID:number) {
		appID ? this.config.appID = appID : 0;
		return this
	},
	async createSysMailTask(param:CreateSysMailTaskReq):Promise<CreateSysMailTaskRsp|null> {
		const buffer = CreateSysMailTaskReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 10004, "CreateSysMailTask", buffer, this.config);
		return rsp.code === 0 ? CreateSysMailTaskRsp.decode(rsp.data) : null;
	},
	async sendSysMail(param:SendSysMailReq):Promise<base.Void|null> {
		const buffer = SendSysMailReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 10005, "SendSysMail", buffer, this.config);
		return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
	},
	async listSysMailTask(param:ListSysMailTaskReq):Promise<ListSysMailTaskResp|null> {
		const buffer = ListSysMailTaskReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 10006, "ListSysMailTask", buffer, this.config);
		return rsp.code === 0 ? ListSysMailTaskResp.decode(rsp.data) : null;
	},
	async listSysMailUid(param:ListSysMailUidReq):Promise<ListSysMailUidResp|null> {
		const buffer = ListSysMailUidReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 10007, "ListSysMailUid", buffer, this.config);
		return rsp.code === 0 ? ListSysMailUidResp.decode(rsp.data) : null;
	},
	async getSysMailTask(param:GetSysMailTaskReq):Promise<GetSysMailTaskResp|null> {
		const buffer = GetSysMailTaskReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 10008, "GetSysMailTask", buffer, this.config);
		return rsp.code === 0 ? GetSysMailTaskResp.decode(rsp.data) : null;
	},
	async listSysMailTaskOperateLog(param:ListSysMailTaskOperateLogReq):Promise<ListSysMailTaskOperateLogResp|null> {
		const buffer = ListSysMailTaskOperateLogReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 10009, "ListSysMailTaskOperateLog", buffer, this.config);
		return rsp.code === 0 ? ListSysMailTaskOperateLogResp.decode(rsp.data) : null;
	},
	async revokeMail(param:RevokeMailReq):Promise<RevokeMailResp|null> {
		const buffer = RevokeMailReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 10010, "RevokeMail", buffer, this.config);
		return rsp.code === 0 ? RevokeMailResp.decode(rsp.data) : null;
	},
	async getSysMailTaskOperateLog(param:GetSysMailTaskOperateLogReq):Promise<GetSysMailTaskOperateLogResp|null> {
		const buffer = GetSysMailTaskOperateLogReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 10011, "GetSysMailTaskOperateLog", buffer, this.config);
		return rsp.code === 0 ? GetSysMailTaskOperateLogResp.decode(rsp.data) : null;
	},
	async getSysMail(param:GetSysMailReq):Promise<GetSysMailResp|null> {
		const buffer = GetSysMailReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 1, "GetSysMail", buffer, this.config);
		return rsp.code === 0 ? GetSysMailResp.decode(rsp.data) : null;
	},
	async listSysMails(param:ListSysMailsReq):Promise<ListSysMailsResp|null> {
		const buffer = ListSysMailsReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 2, "ListSysMails", buffer, this.config);
		return rsp.code === 0 ? ListSysMailsResp.decode(rsp.data) : null;
	},
	async getUnreadMailNum(param:GetUnreadMailNumReq):Promise<GetUnreadMailNumResp|null> {
		const buffer = GetUnreadMailNumReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 3, "GetUnreadMailNum", buffer, this.config);
		return rsp.code === 0 ? GetUnreadMailNumResp.decode(rsp.data) : null;
	},
	async acceptAward(param:AcceptAwardReq):Promise<AcceptAwardResp|null> {
		const buffer = AcceptAwardReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 4, "AcceptAward", buffer, this.config);
		return rsp.code === 0 ? AcceptAwardResp.decode(rsp.data) : null;
	},
	async batchAcceptAward(param:BatchAcceptAwardReq):Promise<BatchAcceptAwardResp|null> {
		const buffer = BatchAcceptAwardReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 5, "BatchAcceptAward", buffer, this.config);
		return rsp.code === 0 ? BatchAcceptAwardResp.decode(rsp.data) : null;
	},
	async deleteMail(param:DeleteMailReq):Promise<DeleteMailResp|null> {
		const buffer = DeleteMailReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 6, "DeleteMail", buffer, this.config);
		return rsp.code === 0 ? DeleteMailResp.decode(rsp.data) : null;
	},
	async notifySysMail(param:base.Void):Promise<NotifySysMailResp|null> {
		const buffer = base.Void.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.mail.v2", 1001, "NotifySysMail", buffer, this.config);
		return rsp.code === 0 ? NotifySysMailResp.decode(rsp.data) : null;
	},
}
}
