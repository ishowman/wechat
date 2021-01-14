/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
import { mail} from '@/idl/tss/hall/mail_v2';
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace feedback {
export enum FeedbackWay {
	FeedbackWay_APP = 0,
	FeedbackWay_MPWEIXIN = 1,
}
export enum FeedbackStatus {
	FeedbackStatusPending = 0,
	FeedbackStatusSolved = 1,
	FeedbackStatusIgnore = 2,
	FeedbackStatusUnknown = 999,
}
export enum FeedbackClassify {
	FeedbackClassifyAccount = 3,
	FeedbackClassifyGame = 4,
	FeedbackClassifyProp = 5,
	FeedbackClassifyOther = 6,
	FeedbackClassifyReport = 7,
	FeedbackClassifyAdvice = 8,
	FeedbackClassifyHead = 9,
	FeedbackClassifyNick = 10,
	FeedbackClassifyVIP = 14,
	FeedbackClassifyLogin = 15,
}
@Type.d("Type_tss_feedback_feedback_proto_GetClassifyReq") 
export class GetClassifyReq extends Message<GetClassifyReq> { 
	constructor(param?: Properties<GetClassifyReq>) {  
		super(); 
		if (param) { 
			this.type = param.type!
			} 
		} 
		@Field.d(1, "uint32", "optional")
		type:number = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_Classify") 
export class Classify extends Message<Classify> { 
	constructor(param?: Properties<Classify>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			this.name = param.name!
			} 
		} 
		@Field.d(1, "uint32", "required")
		id:number = 0;
		@Field.d(2, "string", "required")
		name:string = "";
} 
@Type.d("Type_tss_feedback_feedback_proto_GetClassifyResp") 
export class GetClassifyResp extends Message<GetClassifyResp> { 
	constructor(param?: Properties<GetClassifyResp>) {  
		super(); 
		if (param) { 
			this.classifyList = param.classifyList!
			} 
		} 
		@Field.d(1, Classify, "repeated")
		classifyList:Classify[] = [];
} 
@Type.d("Type_tss_feedback_feedback_proto_AddClassifyReq") 
export class AddClassifyReq extends Message<AddClassifyReq> { 
	constructor(param?: Properties<AddClassifyReq>) {  
		super(); 
		if (param) { 
			this.name = param.name!
			this.sort = param.sort!
			this.type = param.type!
			} 
		} 
		@Field.d(1, "string", "required")
		name:string = "";
		@Field.d(2, "uint32", "required")
		sort:number = 0;
		@Field.d(3, "uint32", "required")
		type:number = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_Resp") 
export class Resp extends Message<Resp> { 
	constructor(param?: Properties<Resp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.msg = param.msg!
			} 
		} 
		@Field.d(1, "uint32", "required")
		code:number = 0;
		@Field.d(2, "string", "required")
		msg:string = "";
} 
@Type.d("Type_tss_feedback_feedback_proto_GetFeedbackListReq") 
export class GetFeedbackListReq extends Message<GetFeedbackListReq> { 
	constructor(param?: Properties<GetFeedbackListReq>) {  
		super(); 
		if (param) { 
			this.page = param.page!
			this.pageSize = param.pageSize!
			this.id = param.id!
			this.content = param.content!
			this.userId = param.userId!
			this.userName = param.userName!
			this.status = param.status!
			this.classifyList = param.classifyList!
			} 
		} 
		@Field.d(1, "uint32", "optional")
		page:number = 0;
		@Field.d(2, "uint32", "optional")
		pageSize:number = 0;
		@Field.d(3, "uint32", "optional")
		id:number = 0;
		@Field.d(4, "string", "optional")
		content:string = "";
		@Field.d(5, "uint32", "optional")
		userId:number = 0;
		@Field.d(6, "string", "optional")
		userName:string = "";
		@Field.d(7, FeedbackStatus, "optional")
		status:FeedbackStatus = 0;
		@Field.d(8, FeedbackClassify, "repeated")
		classifyList:FeedbackClassify[] = [];
} 
@Type.d("Type_tss_feedback_feedback_proto_FeedbackInfoResp") 
export class FeedbackInfoResp extends Message<FeedbackInfoResp> { 
	constructor(param?: Properties<FeedbackInfoResp>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			this.version = param.version!
			this.userId = param.userId!
			this.userName = param.userName!
			this.classify = param.classify!
			this.gameId = param.gameId!
			this.desc = param.desc!
			this.status = param.status!
			this.img = param.img!
			this.createAt = param.createAt!
			this.phone = param.phone!
			this.phoneModel = param.phoneModel!
			this.operator = param.operator!
			this.phoneOs = param.phoneOs!
			this.remarks = param.remarks!
			this.lastOpUser = param.lastOpUser!
			this.lastOpAt = param.lastOpAt!
			this.way = param.way!
			} 
		} 
		@Field.d(1, "uint32", "required")
		id:number = 0;
		@Field.d(2, "string", "required")
		version:string = "";
		@Field.d(3, "uint32", "required")
		userId:number = 0;
		@Field.d(4, "string", "required")
		userName:string = "";
		@Field.d(5, "uint32", "required")
		classify:number = 0;
		@Field.d(6, "string", "required")
		gameId:string = "";
		@Field.d(7, "string", "required")
		desc:string = "";
		@Field.d(8, FeedbackStatus, "required")
		status:FeedbackStatus = 0;
		@Field.d(9, "string", "required")
		img:string = "";
		@Field.d(10, "int64", "required")
		createAt:number = 0;
		@Field.d(11, "string", "required")
		phone:string = "";
		@Field.d(12, "string", "required")
		phoneModel:string = "";
		@Field.d(13, "string", "required")
		operator:string = "";
		@Field.d(14, "string", "required")
		phoneOs:string = "";
		@Field.d(15, "string", "required")
		remarks:string = "";
		@Field.d(16, "string", "required")
		lastOpUser:string = "";
		@Field.d(17, "int64", "required")
		lastOpAt:number = 0;
		@Field.d(18, FeedbackWay, "optional")
		way:FeedbackWay = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_GetFeedbackListResp") 
export class GetFeedbackListResp extends Message<GetFeedbackListResp> { 
	constructor(param?: Properties<GetFeedbackListResp>) {  
		super(); 
		if (param) { 
			this.feedbackData = param.feedbackData!
			this.total = param.total!
			} 
		} 
		@Field.d(1, FeedbackInfoResp, "repeated")
		feedbackData:FeedbackInfoResp[] = [];
		@Field.d(2, "uint32", "required")
		total:number = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_AddFeedbackReq") 
export class AddFeedbackReq extends Message<AddFeedbackReq> { 
	constructor(param?: Properties<AddFeedbackReq>) {  
		super(); 
		if (param) { 
			this.version = param.version!
			this.userId = param.userId!
			this.userName = param.userName!
			this.classify = param.classify!
			this.gameId = param.gameId!
			this.desc = param.desc!
			this.img = param.img!
			this.phone = param.phone!
			this.phoneModel = param.phoneModel!
			this.operator = param.operator!
			this.phoneOs = param.phoneOs!
			this.way = param.way!
			} 
		} 
		@Field.d(1, "string", "required")
		version:string = "";
		@Field.d(2, "uint32", "optional")
		userId:number = 0;
		@Field.d(3, "string", "optional")
		userName:string = "";
		@Field.d(4, "uint32", "required")
		classify:number = 0;
		@Field.d(5, "string", "required")
		gameId:string = "";
		@Field.d(6, "string", "required")
		desc:string = "";
		@Field.d(7, "string", "required")
		img:string = "";
		@Field.d(8, "string", "required")
		phone:string = "";
		@Field.d(9, "string", "required")
		phoneModel:string = "";
		@Field.d(10, "string", "required")
		operator:string = "";
		@Field.d(11, "string", "required")
		phoneOs:string = "";
		@Field.d(12, FeedbackWay, "optional")
		way:FeedbackWay = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_GetFeedbackInfoReq") 
export class GetFeedbackInfoReq extends Message<GetFeedbackInfoReq> { 
	constructor(param?: Properties<GetFeedbackInfoReq>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			} 
		} 
		@Field.d(1, "uint32", "required")
		id:number = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_EditFeedbackReq") 
export class EditFeedbackReq extends Message<EditFeedbackReq> { 
	constructor(param?: Properties<EditFeedbackReq>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			this.classify = param.classify!
			this.gameId = param.gameId!
			this.status = param.status!
			this.remarks = param.remarks!
			} 
		} 
		@Field.d(1, "uint32", "required")
		id:number = 0;
		@Field.d(2, "uint32", "required")
		classify:number = 0;
		@Field.d(3, "string", "required")
		gameId:string = "";
		@Field.d(4, FeedbackStatus, "required")
		status:FeedbackStatus = 0;
		@Field.d(5, "string", "required")
		remarks:string = "";
} 
@Type.d("Type_tss_feedback_feedback_proto_EditClassifyReq") 
export class EditClassifyReq extends Message<EditClassifyReq> { 
	constructor(param?: Properties<EditClassifyReq>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			this.name = param.name!
			this.sort = param.sort!
			this.status = param.status!
			} 
		} 
		@Field.d(1, "uint32", "required")
		id:number = 0;
		@Field.d(2, "string", "required")
		name:string = "";
		@Field.d(3, "uint32", "required")
		sort:number = 0;
		@Field.d(4, "uint32", "required")
		status:number = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_SubmitReportReq") 
export class SubmitReportReq extends Message<SubmitReportReq> { 
	constructor(param?: Properties<SubmitReportReq>) {  
		super(); 
		if (param) { 
			this.version = param.version!
			this.fromUserId = param.fromUserId!
			this.fromUserName = param.fromUserName!
			this.reportType = param.reportType!
			this.gameId = param.gameId!
			this.toUserAvatar = param.toUserAvatar!
			this.toUserId = param.toUserId!
			this.toUserName = param.toUserName!
			} 
		} 
		@Field.d(1, "string", "required")
		version:string = "";
		@Field.d(2, "uint32", "required")
		fromUserId:number = 0;
		@Field.d(3, "string", "required")
		fromUserName:string = "";
		@Field.d(4, "uint32", "required")
		reportType:number = 0;
		@Field.d(5, "string", "required")
		gameId:string = "";
		@Field.d(6, "string", "required")
		toUserAvatar:string = "";
		@Field.d(7, "uint32", "required")
		toUserId:number = 0;
		@Field.d(8, "string", "required")
		toUserName:string = "";
} 
@Type.d("Type_tss_feedback_feedback_proto_EditReportReq") 
export class EditReportReq extends Message<EditReportReq> { 
	constructor(param?: Properties<EditReportReq>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			this.status = param.status!
			} 
		} 
		@Field.d(1, "uint32", "required")
		id:number = 0;
		@Field.d(2, FeedbackStatus, "required")
		status:FeedbackStatus = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_GetReportListReq") 
export class GetReportListReq extends Message<GetReportListReq> { 
	constructor(param?: Properties<GetReportListReq>) {  
		super(); 
		if (param) { 
			this.time = param.time!
			this.page = param.page!
			this.keyword = param.keyword!
			this.version = param.version!
			this.status = param.status!
			} 
		} 
		@Field.d(1, "uint32", "optional")
		time:number = 0;
		@Field.d(2, "uint32", "optional")
		page:number = 0;
		@Field.d(3, "string", "optional")
		keyword:string = "";
		@Field.d(4, "uint32", "optional")
		version:number = 0;
		@Field.d(5, FeedbackStatus, "optional")
		status:FeedbackStatus = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_ReportInfo") 
export class ReportInfo extends Message<ReportInfo> { 
	constructor(param?: Properties<ReportInfo>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			this.version = param.version!
			this.fromUserId = param.fromUserId!
			this.fromUserName = param.fromUserName!
			this.reportType = param.reportType!
			this.gameId = param.gameId!
			this.toUserAvatar = param.toUserAvatar!
			this.toUserId = param.toUserId!
			this.toUserName = param.toUserName!
			this.createAt = param.createAt!
			this.status = param.status!
			} 
		} 
		@Field.d(1, "uint32", "required")
		id:number = 0;
		@Field.d(2, "string", "required")
		version:string = "";
		@Field.d(3, "uint32", "required")
		fromUserId:number = 0;
		@Field.d(4, "string", "required")
		fromUserName:string = "";
		@Field.d(5, "uint32", "required")
		reportType:number = 0;
		@Field.d(6, "string", "required")
		gameId:string = "";
		@Field.d(7, "string", "required")
		toUserAvatar:string = "";
		@Field.d(8, "uint32", "required")
		toUserId:number = 0;
		@Field.d(9, "string", "required")
		toUserName:string = "";
		@Field.d(10, "uint32", "required")
		createAt:number = 0;
		@Field.d(11, FeedbackStatus, "required")
		status:FeedbackStatus = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_GetReportkListResp") 
export class GetReportkListResp extends Message<GetReportkListResp> { 
	constructor(param?: Properties<GetReportkListResp>) {  
		super(); 
		if (param) { 
			this.reportInfo = param.reportInfo!
			} 
		} 
		@Field.d(1, ReportInfo, "repeated")
		reportInfo:ReportInfo[] = [];
} 
@Type.d("Type_tss_feedback_feedback_proto_Operate") 
export class Operate extends Message<Operate> { 
	constructor(param?: Properties<Operate>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			this.feedbackID = param.feedbackID!
			this.user = param.user!
			this.descript = param.descript!
			this.content = param.content!
			this.createAt = param.createAt!
			} 
		} 
		@Field.d(1, "uint32", "required")
		id:number = 0;
		@Field.d(2, "uint32", "required")
		feedbackID:number = 0;
		@Field.d(3, "string", "required")
		user:string = "";
		@Field.d(4, "string", "required")
		descript:string = "";
		@Field.d(5, "string", "required")
		content:string = "";
		@Field.d(6, "int64", "optional")
		createAt:number = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_ListOperateReq") 
export class ListOperateReq extends Message<ListOperateReq> { 
	constructor(param?: Properties<ListOperateReq>) {  
		super(); 
		if (param) { 
			this.feedbackID = param.feedbackID!
			this.page = param.page!
			this.pageSize = param.pageSize!
			} 
		} 
		@Field.d(1, "uint32", "required")
		feedbackID:number = 0;
		@Field.d(2, "uint32", "required")
		page:number = 0;
		@Field.d(3, "uint32", "required")
		pageSize:number = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_ListOperateResp") 
export class ListOperateResp extends Message<ListOperateResp> { 
	constructor(param?: Properties<ListOperateResp>) {  
		super(); 
		if (param) { 
			this.list = param.list!
			this.total = param.total!
			} 
		} 
		@Field.d(1, Operate, "repeated")
		list:Operate[] = [];
		@Field.d(2, "uint32", "required")
		total:number = 0;
} 
@Type.d("Type_tss_feedback_feedback_proto_ModifyFeedbackStatusReq") 
export class ModifyFeedbackStatusReq extends Message<ModifyFeedbackStatusReq> { 
	constructor(param?: Properties<ModifyFeedbackStatusReq>) {  
		super(); 
		if (param) { 
			this.feedbackID = param.feedbackID!
			this.status = param.status!
			this.operate = new Operate(param.operate!)
			} 
		} 
		@Field.d(1, "uint32", "required")
		feedbackID:number = 0;
		@Field.d(2, FeedbackStatus, "required")
		status:FeedbackStatus = 0;
		@Field.d(3, Operate, "required")
		operate:Operate =  new Operate();
} 
@Type.d("Type_tss_feedback_feedback_proto_SendSysMailReq") 
export class SendSysMailReq extends Message<SendSysMailReq> { 
	constructor(param?: Properties<SendSysMailReq>) {  
		super(); 
		if (param) { 
			this.feedbackID = param.feedbackID!
			this.sysMail = new mail.SendSysMailReq(param.sysMail!)
			this.operate = new Operate(param.operate!)
			} 
		} 
		@Field.d(1, "uint32", "required")
		feedbackID:number = 0;
		@Field.d(2, mail.SendSysMailReq, "required")
		sysMail:mail.SendSysMailReq =  new mail.SendSysMailReq();
		@Field.d(3, Operate, "required")
		operate:Operate =  new Operate();
} 
@Type.d("Type_tss_feedback_feedback_proto_SendSysMailResp") 
export class SendSysMailResp extends Message<SendSysMailResp> { 
	constructor(param?: Properties<SendSysMailResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.errMsg = param.errMsg!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "string", "optional")
		errMsg:string = "";
} 
export const FeedbackServer = {
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
	async getClassify(param:GetClassifyReq):Promise<GetClassifyResp|null> {
		const buffer = GetClassifyReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 1, "GetClassify", buffer, this.config);
		return rsp.code === 0 ? GetClassifyResp.decode(rsp.data) : null;
	},
	async addClassify(param:AddClassifyReq):Promise<Resp|null> {
		const buffer = AddClassifyReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 2, "AddClassify", buffer, this.config);
		return rsp.code === 0 ? Resp.decode(rsp.data) : null;
	},
	async editClassify(param:EditClassifyReq):Promise<Resp|null> {
		const buffer = EditClassifyReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 3, "EditClassify", buffer, this.config);
		return rsp.code === 0 ? Resp.decode(rsp.data) : null;
	},
	async getFeedbackList(param:GetFeedbackListReq):Promise<GetFeedbackListResp|null> {
		const buffer = GetFeedbackListReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 4, "GetFeedbackList", buffer, this.config);
		return rsp.code === 0 ? GetFeedbackListResp.decode(rsp.data) : null;
	},
	async getFeedbackInfo(param:GetFeedbackInfoReq):Promise<FeedbackInfoResp|null> {
		const buffer = GetFeedbackInfoReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 5, "GetFeedbackInfo", buffer, this.config);
		return rsp.code === 0 ? FeedbackInfoResp.decode(rsp.data) : null;
	},
	async submitFeedback(param:AddFeedbackReq):Promise<Resp|null> {
		const buffer = AddFeedbackReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 6, "SubmitFeedback", buffer, this.config);
		return rsp.code === 0 ? Resp.decode(rsp.data) : null;
	},
	async editFeedback(param:EditFeedbackReq):Promise<Resp|null> {
		const buffer = EditFeedbackReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 7, "EditFeedback", buffer, this.config);
		return rsp.code === 0 ? Resp.decode(rsp.data) : null;
	},
	async submitReport(param:SubmitReportReq):Promise<Resp|null> {
		const buffer = SubmitReportReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 8, "SubmitReport", buffer, this.config);
		return rsp.code === 0 ? Resp.decode(rsp.data) : null;
	},
	async getReportList(param:GetReportListReq):Promise<GetReportkListResp|null> {
		const buffer = GetReportListReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 9, "GetReportList", buffer, this.config);
		return rsp.code === 0 ? GetReportkListResp.decode(rsp.data) : null;
	},
	async editReport(param:EditReportReq):Promise<Resp|null> {
		const buffer = EditReportReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 10, "EditReport", buffer, this.config);
		return rsp.code === 0 ? Resp.decode(rsp.data) : null;
	},
	async submitVIPFeedback(param:AddFeedbackReq):Promise<Resp|null> {
		const buffer = AddFeedbackReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 11, "SubmitVIPFeedback", buffer, this.config);
		return rsp.code === 0 ? Resp.decode(rsp.data) : null;
	},
	async listOperate(param:ListOperateReq):Promise<ListOperateResp|null> {
		const buffer = ListOperateReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 12, "ListOperate", buffer, this.config);
		return rsp.code === 0 ? ListOperateResp.decode(rsp.data) : null;
	},
	async addOperate(param:Operate):Promise<Resp|null> {
		const buffer = Operate.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 13, "AddOperate", buffer, this.config);
		return rsp.code === 0 ? Resp.decode(rsp.data) : null;
	},
	async modifyFeedbackStatus(param:ModifyFeedbackStatusReq):Promise<Resp|null> {
		const buffer = ModifyFeedbackStatusReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 14, "ModifyFeedbackStatus", buffer, this.config);
		return rsp.code === 0 ? Resp.decode(rsp.data) : null;
	},
	async sendSysMail(param:SendSysMailReq):Promise<SendSysMailResp|null> {
		const buffer = SendSysMailReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.feedback.feedback", 15, "SendSysMail", buffer, this.config);
		return rsp.code === 0 ? SendSysMailResp.decode(rsp.data) : null;
	},
}
}
