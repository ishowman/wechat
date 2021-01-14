import { __decorate } from "tslib";
/* eslint-disable */
import { rpcPlugin as byRpc, ApiSendConfig } from 'xj-core';
import { Message, Type, Field } from 'protobufjs/light';
import { mail } from '@/idl/tss/hall/mail_v2';
export var feedback;
(function (feedback) {
    let FeedbackWay;
    (function (FeedbackWay) {
        FeedbackWay[FeedbackWay["FeedbackWay_APP"] = 0] = "FeedbackWay_APP";
        FeedbackWay[FeedbackWay["FeedbackWay_MPWEIXIN"] = 1] = "FeedbackWay_MPWEIXIN";
    })(FeedbackWay = feedback.FeedbackWay || (feedback.FeedbackWay = {}));
    let FeedbackStatus;
    (function (FeedbackStatus) {
        FeedbackStatus[FeedbackStatus["FeedbackStatusPending"] = 0] = "FeedbackStatusPending";
        FeedbackStatus[FeedbackStatus["FeedbackStatusSolved"] = 1] = "FeedbackStatusSolved";
        FeedbackStatus[FeedbackStatus["FeedbackStatusIgnore"] = 2] = "FeedbackStatusIgnore";
        FeedbackStatus[FeedbackStatus["FeedbackStatusUnknown"] = 999] = "FeedbackStatusUnknown";
    })(FeedbackStatus = feedback.FeedbackStatus || (feedback.FeedbackStatus = {}));
    let FeedbackClassify;
    (function (FeedbackClassify) {
        FeedbackClassify[FeedbackClassify["FeedbackClassifyAccount"] = 3] = "FeedbackClassifyAccount";
        FeedbackClassify[FeedbackClassify["FeedbackClassifyGame"] = 4] = "FeedbackClassifyGame";
        FeedbackClassify[FeedbackClassify["FeedbackClassifyProp"] = 5] = "FeedbackClassifyProp";
        FeedbackClassify[FeedbackClassify["FeedbackClassifyOther"] = 6] = "FeedbackClassifyOther";
        FeedbackClassify[FeedbackClassify["FeedbackClassifyReport"] = 7] = "FeedbackClassifyReport";
        FeedbackClassify[FeedbackClassify["FeedbackClassifyAdvice"] = 8] = "FeedbackClassifyAdvice";
        FeedbackClassify[FeedbackClassify["FeedbackClassifyHead"] = 9] = "FeedbackClassifyHead";
        FeedbackClassify[FeedbackClassify["FeedbackClassifyNick"] = 10] = "FeedbackClassifyNick";
        FeedbackClassify[FeedbackClassify["FeedbackClassifyVIP"] = 14] = "FeedbackClassifyVIP";
        FeedbackClassify[FeedbackClassify["FeedbackClassifyLogin"] = 15] = "FeedbackClassifyLogin";
    })(FeedbackClassify = feedback.FeedbackClassify || (feedback.FeedbackClassify = {}));
    let GetClassifyReq = class GetClassifyReq extends Message {
        constructor(param) {
            super();
            this.type = 0;
            if (param) {
                this.type = param.type;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "optional")
    ], GetClassifyReq.prototype, "type", void 0);
    GetClassifyReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_GetClassifyReq")
    ], GetClassifyReq);
    feedback.GetClassifyReq = GetClassifyReq;
    let Classify = class Classify extends Message {
        constructor(param) {
            super();
            this.id = 0;
            this.name = "";
            if (param) {
                this.id = param.id;
                this.name = param.name;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "required")
    ], Classify.prototype, "id", void 0);
    __decorate([
        Field.d(2, "string", "required")
    ], Classify.prototype, "name", void 0);
    Classify = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_Classify")
    ], Classify);
    feedback.Classify = Classify;
    let GetClassifyResp = class GetClassifyResp extends Message {
        constructor(param) {
            super();
            this.classifyList = [];
            if (param) {
                this.classifyList = param.classifyList;
            }
        }
    };
    __decorate([
        Field.d(1, Classify, "repeated")
    ], GetClassifyResp.prototype, "classifyList", void 0);
    GetClassifyResp = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_GetClassifyResp")
    ], GetClassifyResp);
    feedback.GetClassifyResp = GetClassifyResp;
    let AddClassifyReq = class AddClassifyReq extends Message {
        constructor(param) {
            super();
            this.name = "";
            this.sort = 0;
            this.type = 0;
            if (param) {
                this.name = param.name;
                this.sort = param.sort;
                this.type = param.type;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], AddClassifyReq.prototype, "name", void 0);
    __decorate([
        Field.d(2, "uint32", "required")
    ], AddClassifyReq.prototype, "sort", void 0);
    __decorate([
        Field.d(3, "uint32", "required")
    ], AddClassifyReq.prototype, "type", void 0);
    AddClassifyReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_AddClassifyReq")
    ], AddClassifyReq);
    feedback.AddClassifyReq = AddClassifyReq;
    let Resp = class Resp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.msg = "";
            if (param) {
                this.code = param.code;
                this.msg = param.msg;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "required")
    ], Resp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "string", "required")
    ], Resp.prototype, "msg", void 0);
    Resp = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_Resp")
    ], Resp);
    feedback.Resp = Resp;
    let GetFeedbackListReq = class GetFeedbackListReq extends Message {
        constructor(param) {
            super();
            this.page = 0;
            this.pageSize = 0;
            this.id = 0;
            this.content = "";
            this.userId = 0;
            this.userName = "";
            this.status = 0;
            this.classifyList = [];
            if (param) {
                this.page = param.page;
                this.pageSize = param.pageSize;
                this.id = param.id;
                this.content = param.content;
                this.userId = param.userId;
                this.userName = param.userName;
                this.status = param.status;
                this.classifyList = param.classifyList;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "optional")
    ], GetFeedbackListReq.prototype, "page", void 0);
    __decorate([
        Field.d(2, "uint32", "optional")
    ], GetFeedbackListReq.prototype, "pageSize", void 0);
    __decorate([
        Field.d(3, "uint32", "optional")
    ], GetFeedbackListReq.prototype, "id", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], GetFeedbackListReq.prototype, "content", void 0);
    __decorate([
        Field.d(5, "uint32", "optional")
    ], GetFeedbackListReq.prototype, "userId", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], GetFeedbackListReq.prototype, "userName", void 0);
    __decorate([
        Field.d(7, FeedbackStatus, "optional")
    ], GetFeedbackListReq.prototype, "status", void 0);
    __decorate([
        Field.d(8, FeedbackClassify, "repeated")
    ], GetFeedbackListReq.prototype, "classifyList", void 0);
    GetFeedbackListReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_GetFeedbackListReq")
    ], GetFeedbackListReq);
    feedback.GetFeedbackListReq = GetFeedbackListReq;
    let FeedbackInfoResp = class FeedbackInfoResp extends Message {
        constructor(param) {
            super();
            this.id = 0;
            this.version = "";
            this.userId = 0;
            this.userName = "";
            this.classify = 0;
            this.gameId = "";
            this.desc = "";
            this.status = 0;
            this.img = "";
            this.createAt = 0;
            this.phone = "";
            this.phoneModel = "";
            this.operator = "";
            this.phoneOs = "";
            this.remarks = "";
            this.lastOpUser = "";
            this.lastOpAt = 0;
            this.way = 0;
            if (param) {
                this.id = param.id;
                this.version = param.version;
                this.userId = param.userId;
                this.userName = param.userName;
                this.classify = param.classify;
                this.gameId = param.gameId;
                this.desc = param.desc;
                this.status = param.status;
                this.img = param.img;
                this.createAt = param.createAt;
                this.phone = param.phone;
                this.phoneModel = param.phoneModel;
                this.operator = param.operator;
                this.phoneOs = param.phoneOs;
                this.remarks = param.remarks;
                this.lastOpUser = param.lastOpUser;
                this.lastOpAt = param.lastOpAt;
                this.way = param.way;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "required")
    ], FeedbackInfoResp.prototype, "id", void 0);
    __decorate([
        Field.d(2, "string", "required")
    ], FeedbackInfoResp.prototype, "version", void 0);
    __decorate([
        Field.d(3, "uint32", "required")
    ], FeedbackInfoResp.prototype, "userId", void 0);
    __decorate([
        Field.d(4, "string", "required")
    ], FeedbackInfoResp.prototype, "userName", void 0);
    __decorate([
        Field.d(5, "uint32", "required")
    ], FeedbackInfoResp.prototype, "classify", void 0);
    __decorate([
        Field.d(6, "string", "required")
    ], FeedbackInfoResp.prototype, "gameId", void 0);
    __decorate([
        Field.d(7, "string", "required")
    ], FeedbackInfoResp.prototype, "desc", void 0);
    __decorate([
        Field.d(8, FeedbackStatus, "required")
    ], FeedbackInfoResp.prototype, "status", void 0);
    __decorate([
        Field.d(9, "string", "required")
    ], FeedbackInfoResp.prototype, "img", void 0);
    __decorate([
        Field.d(10, "int64", "required")
    ], FeedbackInfoResp.prototype, "createAt", void 0);
    __decorate([
        Field.d(11, "string", "required")
    ], FeedbackInfoResp.prototype, "phone", void 0);
    __decorate([
        Field.d(12, "string", "required")
    ], FeedbackInfoResp.prototype, "phoneModel", void 0);
    __decorate([
        Field.d(13, "string", "required")
    ], FeedbackInfoResp.prototype, "operator", void 0);
    __decorate([
        Field.d(14, "string", "required")
    ], FeedbackInfoResp.prototype, "phoneOs", void 0);
    __decorate([
        Field.d(15, "string", "required")
    ], FeedbackInfoResp.prototype, "remarks", void 0);
    __decorate([
        Field.d(16, "string", "required")
    ], FeedbackInfoResp.prototype, "lastOpUser", void 0);
    __decorate([
        Field.d(17, "int64", "required")
    ], FeedbackInfoResp.prototype, "lastOpAt", void 0);
    __decorate([
        Field.d(18, FeedbackWay, "optional")
    ], FeedbackInfoResp.prototype, "way", void 0);
    FeedbackInfoResp = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_FeedbackInfoResp")
    ], FeedbackInfoResp);
    feedback.FeedbackInfoResp = FeedbackInfoResp;
    let GetFeedbackListResp = class GetFeedbackListResp extends Message {
        constructor(param) {
            super();
            this.feedbackData = [];
            this.total = 0;
            if (param) {
                this.feedbackData = param.feedbackData;
                this.total = param.total;
            }
        }
    };
    __decorate([
        Field.d(1, FeedbackInfoResp, "repeated")
    ], GetFeedbackListResp.prototype, "feedbackData", void 0);
    __decorate([
        Field.d(2, "uint32", "required")
    ], GetFeedbackListResp.prototype, "total", void 0);
    GetFeedbackListResp = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_GetFeedbackListResp")
    ], GetFeedbackListResp);
    feedback.GetFeedbackListResp = GetFeedbackListResp;
    let AddFeedbackReq = class AddFeedbackReq extends Message {
        constructor(param) {
            super();
            this.version = "";
            this.userId = 0;
            this.userName = "";
            this.classify = 0;
            this.gameId = "";
            this.desc = "";
            this.img = "";
            this.phone = "";
            this.phoneModel = "";
            this.operator = "";
            this.phoneOs = "";
            this.way = 0;
            if (param) {
                this.version = param.version;
                this.userId = param.userId;
                this.userName = param.userName;
                this.classify = param.classify;
                this.gameId = param.gameId;
                this.desc = param.desc;
                this.img = param.img;
                this.phone = param.phone;
                this.phoneModel = param.phoneModel;
                this.operator = param.operator;
                this.phoneOs = param.phoneOs;
                this.way = param.way;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], AddFeedbackReq.prototype, "version", void 0);
    __decorate([
        Field.d(2, "uint32", "optional")
    ], AddFeedbackReq.prototype, "userId", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], AddFeedbackReq.prototype, "userName", void 0);
    __decorate([
        Field.d(4, "uint32", "required")
    ], AddFeedbackReq.prototype, "classify", void 0);
    __decorate([
        Field.d(5, "string", "required")
    ], AddFeedbackReq.prototype, "gameId", void 0);
    __decorate([
        Field.d(6, "string", "required")
    ], AddFeedbackReq.prototype, "desc", void 0);
    __decorate([
        Field.d(7, "string", "required")
    ], AddFeedbackReq.prototype, "img", void 0);
    __decorate([
        Field.d(8, "string", "required")
    ], AddFeedbackReq.prototype, "phone", void 0);
    __decorate([
        Field.d(9, "string", "required")
    ], AddFeedbackReq.prototype, "phoneModel", void 0);
    __decorate([
        Field.d(10, "string", "required")
    ], AddFeedbackReq.prototype, "operator", void 0);
    __decorate([
        Field.d(11, "string", "required")
    ], AddFeedbackReq.prototype, "phoneOs", void 0);
    __decorate([
        Field.d(12, FeedbackWay, "optional")
    ], AddFeedbackReq.prototype, "way", void 0);
    AddFeedbackReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_AddFeedbackReq")
    ], AddFeedbackReq);
    feedback.AddFeedbackReq = AddFeedbackReq;
    let GetFeedbackInfoReq = class GetFeedbackInfoReq extends Message {
        constructor(param) {
            super();
            this.id = 0;
            if (param) {
                this.id = param.id;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "required")
    ], GetFeedbackInfoReq.prototype, "id", void 0);
    GetFeedbackInfoReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_GetFeedbackInfoReq")
    ], GetFeedbackInfoReq);
    feedback.GetFeedbackInfoReq = GetFeedbackInfoReq;
    let EditFeedbackReq = class EditFeedbackReq extends Message {
        constructor(param) {
            super();
            this.id = 0;
            this.classify = 0;
            this.gameId = "";
            this.status = 0;
            this.remarks = "";
            if (param) {
                this.id = param.id;
                this.classify = param.classify;
                this.gameId = param.gameId;
                this.status = param.status;
                this.remarks = param.remarks;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "required")
    ], EditFeedbackReq.prototype, "id", void 0);
    __decorate([
        Field.d(2, "uint32", "required")
    ], EditFeedbackReq.prototype, "classify", void 0);
    __decorate([
        Field.d(3, "string", "required")
    ], EditFeedbackReq.prototype, "gameId", void 0);
    __decorate([
        Field.d(4, FeedbackStatus, "required")
    ], EditFeedbackReq.prototype, "status", void 0);
    __decorate([
        Field.d(5, "string", "required")
    ], EditFeedbackReq.prototype, "remarks", void 0);
    EditFeedbackReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_EditFeedbackReq")
    ], EditFeedbackReq);
    feedback.EditFeedbackReq = EditFeedbackReq;
    let EditClassifyReq = class EditClassifyReq extends Message {
        constructor(param) {
            super();
            this.id = 0;
            this.name = "";
            this.sort = 0;
            this.status = 0;
            if (param) {
                this.id = param.id;
                this.name = param.name;
                this.sort = param.sort;
                this.status = param.status;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "required")
    ], EditClassifyReq.prototype, "id", void 0);
    __decorate([
        Field.d(2, "string", "required")
    ], EditClassifyReq.prototype, "name", void 0);
    __decorate([
        Field.d(3, "uint32", "required")
    ], EditClassifyReq.prototype, "sort", void 0);
    __decorate([
        Field.d(4, "uint32", "required")
    ], EditClassifyReq.prototype, "status", void 0);
    EditClassifyReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_EditClassifyReq")
    ], EditClassifyReq);
    feedback.EditClassifyReq = EditClassifyReq;
    let SubmitReportReq = class SubmitReportReq extends Message {
        constructor(param) {
            super();
            this.version = "";
            this.fromUserId = 0;
            this.fromUserName = "";
            this.reportType = 0;
            this.gameId = "";
            this.toUserAvatar = "";
            this.toUserId = 0;
            this.toUserName = "";
            if (param) {
                this.version = param.version;
                this.fromUserId = param.fromUserId;
                this.fromUserName = param.fromUserName;
                this.reportType = param.reportType;
                this.gameId = param.gameId;
                this.toUserAvatar = param.toUserAvatar;
                this.toUserId = param.toUserId;
                this.toUserName = param.toUserName;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], SubmitReportReq.prototype, "version", void 0);
    __decorate([
        Field.d(2, "uint32", "required")
    ], SubmitReportReq.prototype, "fromUserId", void 0);
    __decorate([
        Field.d(3, "string", "required")
    ], SubmitReportReq.prototype, "fromUserName", void 0);
    __decorate([
        Field.d(4, "uint32", "required")
    ], SubmitReportReq.prototype, "reportType", void 0);
    __decorate([
        Field.d(5, "string", "required")
    ], SubmitReportReq.prototype, "gameId", void 0);
    __decorate([
        Field.d(6, "string", "required")
    ], SubmitReportReq.prototype, "toUserAvatar", void 0);
    __decorate([
        Field.d(7, "uint32", "required")
    ], SubmitReportReq.prototype, "toUserId", void 0);
    __decorate([
        Field.d(8, "string", "required")
    ], SubmitReportReq.prototype, "toUserName", void 0);
    SubmitReportReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_SubmitReportReq")
    ], SubmitReportReq);
    feedback.SubmitReportReq = SubmitReportReq;
    let EditReportReq = class EditReportReq extends Message {
        constructor(param) {
            super();
            this.id = 0;
            this.status = 0;
            if (param) {
                this.id = param.id;
                this.status = param.status;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "required")
    ], EditReportReq.prototype, "id", void 0);
    __decorate([
        Field.d(2, FeedbackStatus, "required")
    ], EditReportReq.prototype, "status", void 0);
    EditReportReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_EditReportReq")
    ], EditReportReq);
    feedback.EditReportReq = EditReportReq;
    let GetReportListReq = class GetReportListReq extends Message {
        constructor(param) {
            super();
            this.time = 0;
            this.page = 0;
            this.keyword = "";
            this.version = 0;
            this.status = 0;
            if (param) {
                this.time = param.time;
                this.page = param.page;
                this.keyword = param.keyword;
                this.version = param.version;
                this.status = param.status;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "optional")
    ], GetReportListReq.prototype, "time", void 0);
    __decorate([
        Field.d(2, "uint32", "optional")
    ], GetReportListReq.prototype, "page", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], GetReportListReq.prototype, "keyword", void 0);
    __decorate([
        Field.d(4, "uint32", "optional")
    ], GetReportListReq.prototype, "version", void 0);
    __decorate([
        Field.d(5, FeedbackStatus, "optional")
    ], GetReportListReq.prototype, "status", void 0);
    GetReportListReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_GetReportListReq")
    ], GetReportListReq);
    feedback.GetReportListReq = GetReportListReq;
    let ReportInfo = class ReportInfo extends Message {
        constructor(param) {
            super();
            this.id = 0;
            this.version = "";
            this.fromUserId = 0;
            this.fromUserName = "";
            this.reportType = 0;
            this.gameId = "";
            this.toUserAvatar = "";
            this.toUserId = 0;
            this.toUserName = "";
            this.createAt = 0;
            this.status = 0;
            if (param) {
                this.id = param.id;
                this.version = param.version;
                this.fromUserId = param.fromUserId;
                this.fromUserName = param.fromUserName;
                this.reportType = param.reportType;
                this.gameId = param.gameId;
                this.toUserAvatar = param.toUserAvatar;
                this.toUserId = param.toUserId;
                this.toUserName = param.toUserName;
                this.createAt = param.createAt;
                this.status = param.status;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "required")
    ], ReportInfo.prototype, "id", void 0);
    __decorate([
        Field.d(2, "string", "required")
    ], ReportInfo.prototype, "version", void 0);
    __decorate([
        Field.d(3, "uint32", "required")
    ], ReportInfo.prototype, "fromUserId", void 0);
    __decorate([
        Field.d(4, "string", "required")
    ], ReportInfo.prototype, "fromUserName", void 0);
    __decorate([
        Field.d(5, "uint32", "required")
    ], ReportInfo.prototype, "reportType", void 0);
    __decorate([
        Field.d(6, "string", "required")
    ], ReportInfo.prototype, "gameId", void 0);
    __decorate([
        Field.d(7, "string", "required")
    ], ReportInfo.prototype, "toUserAvatar", void 0);
    __decorate([
        Field.d(8, "uint32", "required")
    ], ReportInfo.prototype, "toUserId", void 0);
    __decorate([
        Field.d(9, "string", "required")
    ], ReportInfo.prototype, "toUserName", void 0);
    __decorate([
        Field.d(10, "uint32", "required")
    ], ReportInfo.prototype, "createAt", void 0);
    __decorate([
        Field.d(11, FeedbackStatus, "required")
    ], ReportInfo.prototype, "status", void 0);
    ReportInfo = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_ReportInfo")
    ], ReportInfo);
    feedback.ReportInfo = ReportInfo;
    let GetReportkListResp = class GetReportkListResp extends Message {
        constructor(param) {
            super();
            this.reportInfo = [];
            if (param) {
                this.reportInfo = param.reportInfo;
            }
        }
    };
    __decorate([
        Field.d(1, ReportInfo, "repeated")
    ], GetReportkListResp.prototype, "reportInfo", void 0);
    GetReportkListResp = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_GetReportkListResp")
    ], GetReportkListResp);
    feedback.GetReportkListResp = GetReportkListResp;
    let Operate = class Operate extends Message {
        constructor(param) {
            super();
            this.id = 0;
            this.feedbackID = 0;
            this.user = "";
            this.descript = "";
            this.content = "";
            this.createAt = 0;
            if (param) {
                this.id = param.id;
                this.feedbackID = param.feedbackID;
                this.user = param.user;
                this.descript = param.descript;
                this.content = param.content;
                this.createAt = param.createAt;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "required")
    ], Operate.prototype, "id", void 0);
    __decorate([
        Field.d(2, "uint32", "required")
    ], Operate.prototype, "feedbackID", void 0);
    __decorate([
        Field.d(3, "string", "required")
    ], Operate.prototype, "user", void 0);
    __decorate([
        Field.d(4, "string", "required")
    ], Operate.prototype, "descript", void 0);
    __decorate([
        Field.d(5, "string", "required")
    ], Operate.prototype, "content", void 0);
    __decorate([
        Field.d(6, "int64", "optional")
    ], Operate.prototype, "createAt", void 0);
    Operate = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_Operate")
    ], Operate);
    feedback.Operate = Operate;
    let ListOperateReq = class ListOperateReq extends Message {
        constructor(param) {
            super();
            this.feedbackID = 0;
            this.page = 0;
            this.pageSize = 0;
            if (param) {
                this.feedbackID = param.feedbackID;
                this.page = param.page;
                this.pageSize = param.pageSize;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "required")
    ], ListOperateReq.prototype, "feedbackID", void 0);
    __decorate([
        Field.d(2, "uint32", "required")
    ], ListOperateReq.prototype, "page", void 0);
    __decorate([
        Field.d(3, "uint32", "required")
    ], ListOperateReq.prototype, "pageSize", void 0);
    ListOperateReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_ListOperateReq")
    ], ListOperateReq);
    feedback.ListOperateReq = ListOperateReq;
    let ListOperateResp = class ListOperateResp extends Message {
        constructor(param) {
            super();
            this.list = [];
            this.total = 0;
            if (param) {
                this.list = param.list;
                this.total = param.total;
            }
        }
    };
    __decorate([
        Field.d(1, Operate, "repeated")
    ], ListOperateResp.prototype, "list", void 0);
    __decorate([
        Field.d(2, "uint32", "required")
    ], ListOperateResp.prototype, "total", void 0);
    ListOperateResp = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_ListOperateResp")
    ], ListOperateResp);
    feedback.ListOperateResp = ListOperateResp;
    let ModifyFeedbackStatusReq = class ModifyFeedbackStatusReq extends Message {
        constructor(param) {
            super();
            this.feedbackID = 0;
            this.status = 0;
            this.operate = new Operate();
            if (param) {
                this.feedbackID = param.feedbackID;
                this.status = param.status;
                this.operate = new Operate(param.operate);
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "required")
    ], ModifyFeedbackStatusReq.prototype, "feedbackID", void 0);
    __decorate([
        Field.d(2, FeedbackStatus, "required")
    ], ModifyFeedbackStatusReq.prototype, "status", void 0);
    __decorate([
        Field.d(3, Operate, "required")
    ], ModifyFeedbackStatusReq.prototype, "operate", void 0);
    ModifyFeedbackStatusReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_ModifyFeedbackStatusReq")
    ], ModifyFeedbackStatusReq);
    feedback.ModifyFeedbackStatusReq = ModifyFeedbackStatusReq;
    let SendSysMailReq = class SendSysMailReq extends Message {
        constructor(param) {
            super();
            this.feedbackID = 0;
            this.sysMail = new mail.SendSysMailReq();
            this.operate = new Operate();
            if (param) {
                this.feedbackID = param.feedbackID;
                this.sysMail = new mail.SendSysMailReq(param.sysMail);
                this.operate = new Operate(param.operate);
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "required")
    ], SendSysMailReq.prototype, "feedbackID", void 0);
    __decorate([
        Field.d(2, mail.SendSysMailReq, "required")
    ], SendSysMailReq.prototype, "sysMail", void 0);
    __decorate([
        Field.d(3, Operate, "required")
    ], SendSysMailReq.prototype, "operate", void 0);
    SendSysMailReq = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_SendSysMailReq")
    ], SendSysMailReq);
    feedback.SendSysMailReq = SendSysMailReq;
    let SendSysMailResp = class SendSysMailResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.errMsg = "";
            if (param) {
                this.code = param.code;
                this.errMsg = param.errMsg;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], SendSysMailResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], SendSysMailResp.prototype, "errMsg", void 0);
    SendSysMailResp = __decorate([
        Type.d("Type_tss_feedback_feedback_proto_SendSysMailResp")
    ], SendSysMailResp);
    feedback.SendSysMailResp = SendSysMailResp;
    feedback.FeedbackServer = {
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
        async getClassify(param) {
            const buffer = GetClassifyReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 1, "GetClassify", buffer, this.config);
            return rsp.code === 0 ? GetClassifyResp.decode(rsp.data) : null;
        },
        async addClassify(param) {
            const buffer = AddClassifyReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 2, "AddClassify", buffer, this.config);
            return rsp.code === 0 ? Resp.decode(rsp.data) : null;
        },
        async editClassify(param) {
            const buffer = EditClassifyReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 3, "EditClassify", buffer, this.config);
            return rsp.code === 0 ? Resp.decode(rsp.data) : null;
        },
        async getFeedbackList(param) {
            const buffer = GetFeedbackListReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 4, "GetFeedbackList", buffer, this.config);
            return rsp.code === 0 ? GetFeedbackListResp.decode(rsp.data) : null;
        },
        async getFeedbackInfo(param) {
            const buffer = GetFeedbackInfoReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 5, "GetFeedbackInfo", buffer, this.config);
            return rsp.code === 0 ? FeedbackInfoResp.decode(rsp.data) : null;
        },
        async submitFeedback(param) {
            const buffer = AddFeedbackReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 6, "SubmitFeedback", buffer, this.config);
            return rsp.code === 0 ? Resp.decode(rsp.data) : null;
        },
        async editFeedback(param) {
            const buffer = EditFeedbackReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 7, "EditFeedback", buffer, this.config);
            return rsp.code === 0 ? Resp.decode(rsp.data) : null;
        },
        async submitReport(param) {
            const buffer = SubmitReportReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 8, "SubmitReport", buffer, this.config);
            return rsp.code === 0 ? Resp.decode(rsp.data) : null;
        },
        async getReportList(param) {
            const buffer = GetReportListReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 9, "GetReportList", buffer, this.config);
            return rsp.code === 0 ? GetReportkListResp.decode(rsp.data) : null;
        },
        async editReport(param) {
            const buffer = EditReportReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 10, "EditReport", buffer, this.config);
            return rsp.code === 0 ? Resp.decode(rsp.data) : null;
        },
        async submitVIPFeedback(param) {
            const buffer = AddFeedbackReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 11, "SubmitVIPFeedback", buffer, this.config);
            return rsp.code === 0 ? Resp.decode(rsp.data) : null;
        },
        async listOperate(param) {
            const buffer = ListOperateReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 12, "ListOperate", buffer, this.config);
            return rsp.code === 0 ? ListOperateResp.decode(rsp.data) : null;
        },
        async addOperate(param) {
            const buffer = Operate.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 13, "AddOperate", buffer, this.config);
            return rsp.code === 0 ? Resp.decode(rsp.data) : null;
        },
        async modifyFeedbackStatus(param) {
            const buffer = ModifyFeedbackStatusReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 14, "ModifyFeedbackStatus", buffer, this.config);
            return rsp.code === 0 ? Resp.decode(rsp.data) : null;
        },
        async sendSysMail(param) {
            const buffer = SendSysMailReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.feedback.feedback", 15, "SendSysMail", buffer, this.config);
            return rsp.code === 0 ? SendSysMailResp.decode(rsp.data) : null;
        },
    };
})(feedback || (feedback = {}));
//# sourceMappingURL=feedback.js.map