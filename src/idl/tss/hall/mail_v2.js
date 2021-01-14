import { __decorate } from "tslib";
/* eslint-disable */
import { rpcPlugin as byRpc, ApiSendConfig } from 'xj-core';
import { Message, Type, Field } from 'protobufjs/light';
import { base as base } from '@/idl/base/base';
import { common as common_common_define } from '@/idl/tss/common/common_define';
export var mail;
(function (mail) {
    let MailTaskState;
    (function (MailTaskState) {
        MailTaskState[MailTaskState["MailTaskStateUnknown"] = 0] = "MailTaskStateUnknown";
        MailTaskState[MailTaskState["MailTaskStateInit"] = 1] = "MailTaskStateInit";
        MailTaskState[MailTaskState["MailTaskStateSending"] = 2] = "MailTaskStateSending";
        MailTaskState[MailTaskState["MailTaskStateDone"] = 3] = "MailTaskStateDone";
        MailTaskState[MailTaskState["MailTaskStateFailed"] = 4] = "MailTaskStateFailed";
        MailTaskState[MailTaskState["MailTaskStateRevokeing"] = 5] = "MailTaskStateRevokeing";
        MailTaskState[MailTaskState["MailTaskStateRevokeSuccess"] = 6] = "MailTaskStateRevokeSuccess";
        MailTaskState[MailTaskState["MailTaskStateRevokeFailed"] = 7] = "MailTaskStateRevokeFailed";
    })(MailTaskState = mail.MailTaskState || (mail.MailTaskState = {}));
    let ChangeType;
    (function (ChangeType) {
        ChangeType[ChangeType["ChangeTypeUnknown"] = 0] = "ChangeTypeUnknown";
        ChangeType[ChangeType["ChangeTypeIncr"] = 1] = "ChangeTypeIncr";
        ChangeType[ChangeType["ChangeTypeDecr"] = 2] = "ChangeTypeDecr";
    })(ChangeType = mail.ChangeType || (mail.ChangeType = {}));
    let RevokeState;
    (function (RevokeState) {
        RevokeState[RevokeState["RevokeStateUnknown"] = 0] = "RevokeStateUnknown";
        RevokeState[RevokeState["RevokeStateSuccess"] = 1] = "RevokeStateSuccess";
        RevokeState[RevokeState["RevokeStateFailed"] = 2] = "RevokeStateFailed";
    })(RevokeState = mail.RevokeState || (mail.RevokeState = {}));
    let OperateType;
    (function (OperateType) {
        OperateType[OperateType["OperateTypeUnknown"] = 0] = "OperateTypeUnknown";
        OperateType[OperateType["OperateTypeRevoke"] = 1] = "OperateTypeRevoke";
    })(OperateType = mail.OperateType || (mail.OperateType = {}));
    let MailTime = class MailTime extends Message {
        constructor(param) {
            super();
            this.expire = new common_common_define.ExpireData();
            this.receiveTime = 0;
            if (param) {
                this.expire = new common_common_define.ExpireData(param.expire);
                this.receiveTime = param.receiveTime;
            }
        }
    };
    __decorate([
        Field.d(1, common_common_define.ExpireData, "optional")
    ], MailTime.prototype, "expire", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], MailTime.prototype, "receiveTime", void 0);
    MailTime = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_MailTime")
    ], MailTime);
    mail.MailTime = MailTime;
    let AwardData = class AwardData extends Message {
        constructor(param) {
            super();
            this.way = 0;
            this.PropItem = [];
            if (param) {
                this.way = param.way;
                this.PropItem = param.PropItem;
            }
        }
    };
    __decorate([
        Field.d(1, common_common_define.Way, "optional")
    ], AwardData.prototype, "way", void 0);
    __decorate([
        Field.d(2, common_common_define.PropItem, "repeated")
    ], AwardData.prototype, "PropItem", void 0);
    AwardData = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_AwardData")
    ], AwardData);
    mail.AwardData = AwardData;
    let SysMaillTmpl = class SysMaillTmpl extends Message {
        constructor(param) {
            super();
            this.origin = "";
            this.title = "";
            this.content = "";
            this.changeReason = "";
            this.expire = new common_common_define.ExpireData();
            this.aData = new mail.AwardData();
            this.MailExtra = new Uint8Array();
            if (param) {
                this.origin = param.origin;
                this.title = param.title;
                this.content = param.content;
                this.changeReason = param.changeReason;
                this.expire = new common_common_define.ExpireData(param.expire);
                this.aData = new mail.AwardData(param.aData);
                this.MailExtra = new Uint8Array(param.MailExtra);
            }
        }
    };
    __decorate([
        Field.d(2, "string", "optional")
    ], SysMaillTmpl.prototype, "origin", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], SysMaillTmpl.prototype, "title", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], SysMaillTmpl.prototype, "content", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], SysMaillTmpl.prototype, "changeReason", void 0);
    __decorate([
        Field.d(6, common_common_define.ExpireData, "optional")
    ], SysMaillTmpl.prototype, "expire", void 0);
    __decorate([
        Field.d(7, mail.AwardData, "optional")
    ], SysMaillTmpl.prototype, "aData", void 0);
    __decorate([
        Field.d(10, "bytes", "optional")
    ], SysMaillTmpl.prototype, "MailExtra", void 0);
    SysMaillTmpl = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_SysMaillTmpl")
    ], SysMaillTmpl);
    mail.SysMaillTmpl = SysMaillTmpl;
    let SysMailData = class SysMailData extends Message {
        constructor(param) {
            super();
            this.mid = "";
            this.origin = "";
            this.title = "";
            this.content = "";
            this.isRead = false;
            this.expiredAt = 0;
            this.aData = new mail.AwardData();
            this.changeReason = "";
            this.createdAt = 0;
            this.isAccept = false;
            if (param) {
                this.mid = param.mid;
                this.origin = param.origin;
                this.title = param.title;
                this.content = param.content;
                this.isRead = param.isRead;
                this.expiredAt = param.expiredAt;
                this.aData = new mail.AwardData(param.aData);
                this.changeReason = param.changeReason;
                this.createdAt = param.createdAt;
                this.isAccept = param.isAccept;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], SysMailData.prototype, "mid", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], SysMailData.prototype, "origin", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], SysMailData.prototype, "title", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], SysMailData.prototype, "content", void 0);
    __decorate([
        Field.d(5, "bool", "optional")
    ], SysMailData.prototype, "isRead", void 0);
    __decorate([
        Field.d(6, "int64", "optional")
    ], SysMailData.prototype, "expiredAt", void 0);
    __decorate([
        Field.d(7, mail.AwardData, "optional")
    ], SysMailData.prototype, "aData", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], SysMailData.prototype, "changeReason", void 0);
    __decorate([
        Field.d(9, "int64", "optional")
    ], SysMailData.prototype, "createdAt", void 0);
    __decorate([
        Field.d(10, "bool", "optional")
    ], SysMailData.prototype, "isAccept", void 0);
    SysMailData = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_SysMailData")
    ], SysMailData);
    mail.SysMailData = SysMailData;
    let BatchSendSysMailReq = class BatchSendSysMailReq extends Message {
        constructor(param) {
            super();
            this.groupID = "";
            this.UIDs = [];
            this.data = new mail.SysMaillTmpl();
            this.MailExtra = new Uint8Array();
            this.operator = "";
            if (param) {
                this.groupID = param.groupID;
                this.UIDs = param.UIDs;
                this.data = new mail.SysMaillTmpl(param.data);
                this.MailExtra = new Uint8Array(param.MailExtra);
                this.operator = param.operator;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], BatchSendSysMailReq.prototype, "groupID", void 0);
    __decorate([
        Field.d(2, "int64", "repeated")
    ], BatchSendSysMailReq.prototype, "UIDs", void 0);
    __decorate([
        Field.d(3, mail.SysMaillTmpl, "optional")
    ], BatchSendSysMailReq.prototype, "data", void 0);
    __decorate([
        Field.d(4, "bytes", "optional")
    ], BatchSendSysMailReq.prototype, "MailExtra", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], BatchSendSysMailReq.prototype, "operator", void 0);
    BatchSendSysMailReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_BatchSendSysMailReq")
    ], BatchSendSysMailReq);
    mail.BatchSendSysMailReq = BatchSendSysMailReq;
    let BatchSendSysMailResp = class BatchSendSysMailResp extends Message {
        constructor(param) {
            super();
            if (param) {
            }
        }
    };
    BatchSendSysMailResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_BatchSendSysMailResp")
    ], BatchSendSysMailResp);
    mail.BatchSendSysMailResp = BatchSendSysMailResp;
    let ListSysMailsReq = class ListSysMailsReq extends Message {
        constructor(param) {
            super();
            this.UID = 0;
            this.page = 0;
            this.pageSize = 0;
            if (param) {
                this.UID = param.UID;
                this.page = param.page;
                this.pageSize = param.pageSize;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], ListSysMailsReq.prototype, "UID", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ListSysMailsReq.prototype, "page", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], ListSysMailsReq.prototype, "pageSize", void 0);
    ListSysMailsReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_ListSysMailsReq")
    ], ListSysMailsReq);
    mail.ListSysMailsReq = ListSysMailsReq;
    let MailBriefData = class MailBriefData extends Message {
        constructor(param) {
            super();
            this.mid = "";
            this.origin = "";
            this.title = "";
            this.isRead = false;
            this.expiredAt = 0;
            this.isExistAward = false;
            this.isAccept = false;
            this.createdAt = 0;
            this.content = "";
            if (param) {
                this.mid = param.mid;
                this.origin = param.origin;
                this.title = param.title;
                this.isRead = param.isRead;
                this.expiredAt = param.expiredAt;
                this.isExistAward = param.isExistAward;
                this.isAccept = param.isAccept;
                this.createdAt = param.createdAt;
                this.content = param.content;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], MailBriefData.prototype, "mid", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], MailBriefData.prototype, "origin", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], MailBriefData.prototype, "title", void 0);
    __decorate([
        Field.d(4, "bool", "optional")
    ], MailBriefData.prototype, "isRead", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], MailBriefData.prototype, "expiredAt", void 0);
    __decorate([
        Field.d(6, "bool", "optional")
    ], MailBriefData.prototype, "isExistAward", void 0);
    __decorate([
        Field.d(7, "bool", "optional")
    ], MailBriefData.prototype, "isAccept", void 0);
    __decorate([
        Field.d(8, "int64", "optional")
    ], MailBriefData.prototype, "createdAt", void 0);
    __decorate([
        Field.d(9, "string", "optional")
    ], MailBriefData.prototype, "content", void 0);
    MailBriefData = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_MailBriefData")
    ], MailBriefData);
    mail.MailBriefData = MailBriefData;
    let ListSysMailsResp = class ListSysMailsResp extends Message {
        constructor(param) {
            super();
            this.data = [];
            this.total = 0;
            this.unAcceptNum = 0;
            if (param) {
                this.data = param.data;
                this.total = param.total;
                this.unAcceptNum = param.unAcceptNum;
            }
        }
    };
    __decorate([
        Field.d(2, mail.MailBriefData, "repeated")
    ], ListSysMailsResp.prototype, "data", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], ListSysMailsResp.prototype, "total", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], ListSysMailsResp.prototype, "unAcceptNum", void 0);
    ListSysMailsResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_ListSysMailsResp")
    ], ListSysMailsResp);
    mail.ListSysMailsResp = ListSysMailsResp;
    let GetSysMailReq = class GetSysMailReq extends Message {
        constructor(param) {
            super();
            this.MiD = "";
            if (param) {
                this.MiD = param.MiD;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetSysMailReq.prototype, "MiD", void 0);
    GetSysMailReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_GetSysMailReq")
    ], GetSysMailReq);
    mail.GetSysMailReq = GetSysMailReq;
    let GetSysMailResp = class GetSysMailResp extends Message {
        constructor(param) {
            super();
            this.data = new mail.SysMailData();
            if (param) {
                this.data = new mail.SysMailData(param.data);
            }
        }
    };
    __decorate([
        Field.d(2, mail.SysMailData, "optional")
    ], GetSysMailResp.prototype, "data", void 0);
    GetSysMailResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_GetSysMailResp")
    ], GetSysMailResp);
    mail.GetSysMailResp = GetSysMailResp;
    let GetUnreadMailNumReq = class GetUnreadMailNumReq extends Message {
        constructor(param) {
            super();
            this.UID = 0;
            if (param) {
                this.UID = param.UID;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], GetUnreadMailNumReq.prototype, "UID", void 0);
    GetUnreadMailNumReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_GetUnreadMailNumReq")
    ], GetUnreadMailNumReq);
    mail.GetUnreadMailNumReq = GetUnreadMailNumReq;
    let GetUnreadMailNumResp = class GetUnreadMailNumResp extends Message {
        constructor(param) {
            super();
            this.unreadNum = 0;
            if (param) {
                this.unreadNum = param.unreadNum;
            }
        }
    };
    __decorate([
        Field.d(2, "int32", "optional")
    ], GetUnreadMailNumResp.prototype, "unreadNum", void 0);
    GetUnreadMailNumResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_GetUnreadMailNumResp")
    ], GetUnreadMailNumResp);
    mail.GetUnreadMailNumResp = GetUnreadMailNumResp;
    let AcceptAwardReq = class AcceptAwardReq extends Message {
        constructor(param) {
            super();
            this.UID = 0;
            this.MID = "";
            if (param) {
                this.UID = param.UID;
                this.MID = param.MID;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], AcceptAwardReq.prototype, "UID", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], AcceptAwardReq.prototype, "MID", void 0);
    AcceptAwardReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_AcceptAwardReq")
    ], AcceptAwardReq);
    mail.AcceptAwardReq = AcceptAwardReq;
    let AcceptAwardResp = class AcceptAwardResp extends Message {
        constructor(param) {
            super();
            this.aData = [];
            if (param) {
                this.aData = param.aData;
            }
        }
    };
    __decorate([
        Field.d(2, common_common_define.PropItem, "repeated")
    ], AcceptAwardResp.prototype, "aData", void 0);
    AcceptAwardResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_AcceptAwardResp")
    ], AcceptAwardResp);
    mail.AcceptAwardResp = AcceptAwardResp;
    let BatchAcceptAwardReq = class BatchAcceptAwardReq extends Message {
        constructor(param) {
            super();
            this.UID = 0;
            this.MIDs = [];
            if (param) {
                this.UID = param.UID;
                this.MIDs = param.MIDs;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], BatchAcceptAwardReq.prototype, "UID", void 0);
    __decorate([
        Field.d(2, "string", "repeated")
    ], BatchAcceptAwardReq.prototype, "MIDs", void 0);
    BatchAcceptAwardReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_BatchAcceptAwardReq")
    ], BatchAcceptAwardReq);
    mail.BatchAcceptAwardReq = BatchAcceptAwardReq;
    let BatchAwardData = class BatchAwardData extends Message {
        constructor(param) {
            super();
            this.MID = "";
            this.aData = [];
            if (param) {
                this.MID = param.MID;
                this.aData = param.aData;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], BatchAwardData.prototype, "MID", void 0);
    __decorate([
        Field.d(2, common_common_define.PropItem, "repeated")
    ], BatchAwardData.prototype, "aData", void 0);
    BatchAwardData = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_BatchAwardData")
    ], BatchAwardData);
    mail.BatchAwardData = BatchAwardData;
    let BatchAcceptAwardResp = class BatchAcceptAwardResp extends Message {
        constructor(param) {
            super();
            this.bData = [];
            if (param) {
                this.bData = param.bData;
            }
        }
    };
    __decorate([
        Field.d(2, mail.BatchAwardData, "repeated")
    ], BatchAcceptAwardResp.prototype, "bData", void 0);
    BatchAcceptAwardResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_BatchAcceptAwardResp")
    ], BatchAcceptAwardResp);
    mail.BatchAcceptAwardResp = BatchAcceptAwardResp;
    let NotifySysMailResp = class NotifySysMailResp extends Message {
        constructor(param) {
            super();
            this.unreadNum = 0;
            this.data = new mail.MailBriefData();
            if (param) {
                this.unreadNum = param.unreadNum;
                this.data = new mail.MailBriefData(param.data);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], NotifySysMailResp.prototype, "unreadNum", void 0);
    __decorate([
        Field.d(2, mail.MailBriefData, "optional")
    ], NotifySysMailResp.prototype, "data", void 0);
    NotifySysMailResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_NotifySysMailResp")
    ], NotifySysMailResp);
    mail.NotifySysMailResp = NotifySysMailResp;
    let ListBatchSendMailLogReq = class ListBatchSendMailLogReq extends Message {
        constructor(param) {
            super();
            this.itemType = 0;
            this.page = 0;
            this.pageSize = 0;
            if (param) {
                this.itemType = param.itemType;
                this.page = param.page;
                this.pageSize = param.pageSize;
            }
        }
    };
    __decorate([
        Field.d(1, common_common_define.ItemType, "optional")
    ], ListBatchSendMailLogReq.prototype, "itemType", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ListBatchSendMailLogReq.prototype, "page", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], ListBatchSendMailLogReq.prototype, "pageSize", void 0);
    ListBatchSendMailLogReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_ListBatchSendMailLogReq")
    ], ListBatchSendMailLogReq);
    mail.ListBatchSendMailLogReq = ListBatchSendMailLogReq;
    let SendMailLog = class SendMailLog extends Message {
        constructor(param) {
            super();
            this.objectID = "";
            this.createAt = 0;
            this.itemType = 0;
            this.propID = 0;
            this.propName = "";
            this.num = 0;
            this.expireAt = 0;
            this.way = 0;
            this.groupID = "";
            this.groupName = "";
            this.UIDs = [];
            this.isSuccess = false;
            this.operator = "";
            if (param) {
                this.objectID = param.objectID;
                this.createAt = param.createAt;
                this.itemType = param.itemType;
                this.propID = param.propID;
                this.propName = param.propName;
                this.num = param.num;
                this.expireAt = param.expireAt;
                this.way = param.way;
                this.groupID = param.groupID;
                this.groupName = param.groupName;
                this.UIDs = param.UIDs;
                this.isSuccess = param.isSuccess;
                this.operator = param.operator;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], SendMailLog.prototype, "objectID", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], SendMailLog.prototype, "createAt", void 0);
    __decorate([
        Field.d(3, common_common_define.ItemType, "optional")
    ], SendMailLog.prototype, "itemType", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], SendMailLog.prototype, "propID", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], SendMailLog.prototype, "propName", void 0);
    __decorate([
        Field.d(6, "int32", "optional")
    ], SendMailLog.prototype, "num", void 0);
    __decorate([
        Field.d(7, "int64", "optional")
    ], SendMailLog.prototype, "expireAt", void 0);
    __decorate([
        Field.d(9, common_common_define.Way, "optional")
    ], SendMailLog.prototype, "way", void 0);
    __decorate([
        Field.d(10, "string", "required")
    ], SendMailLog.prototype, "groupID", void 0);
    __decorate([
        Field.d(11, "string", "optional")
    ], SendMailLog.prototype, "groupName", void 0);
    __decorate([
        Field.d(12, "int64", "repeated")
    ], SendMailLog.prototype, "UIDs", void 0);
    __decorate([
        Field.d(13, "bool", "optional")
    ], SendMailLog.prototype, "isSuccess", void 0);
    __decorate([
        Field.d(14, "string", "optional")
    ], SendMailLog.prototype, "operator", void 0);
    SendMailLog = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_SendMailLog")
    ], SendMailLog);
    mail.SendMailLog = SendMailLog;
    let ListBatchSendMailLogRsp = class ListBatchSendMailLogRsp extends Message {
        constructor(param) {
            super();
            this.logs = [];
            this.totalSize = 0;
            if (param) {
                this.logs = param.logs;
                this.totalSize = param.totalSize;
            }
        }
    };
    __decorate([
        Field.d(1, mail.SendMailLog, "repeated")
    ], ListBatchSendMailLogRsp.prototype, "logs", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ListBatchSendMailLogRsp.prototype, "totalSize", void 0);
    ListBatchSendMailLogRsp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_ListBatchSendMailLogRsp")
    ], ListBatchSendMailLogRsp);
    mail.ListBatchSendMailLogRsp = ListBatchSendMailLogRsp;
    let DeleteMailReq = class DeleteMailReq extends Message {
        constructor(param) {
            super();
            this.MiD = "";
            if (param) {
                this.MiD = param.MiD;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], DeleteMailReq.prototype, "MiD", void 0);
    DeleteMailReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_DeleteMailReq")
    ], DeleteMailReq);
    mail.DeleteMailReq = DeleteMailReq;
    let DeleteMailResp = class DeleteMailResp extends Message {
        constructor(param) {
            super();
            if (param) {
            }
        }
    };
    DeleteMailResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_DeleteMailResp")
    ], DeleteMailResp);
    mail.DeleteMailResp = DeleteMailResp;
    let MailTask = class MailTask extends Message {
        constructor(param) {
            super();
            this.groupID = "";
            this.UIDs = [];
            this.tmpl = new mail.SysMaillTmpl();
            this.operator = "";
            this.batchID = "";
            this.state = 0;
            this.groupName = "";
            this.createdAt = 0;
            this.way = 0;
            if (param) {
                this.groupID = param.groupID;
                this.UIDs = param.UIDs;
                this.tmpl = new mail.SysMaillTmpl(param.tmpl);
                this.operator = param.operator;
                this.batchID = param.batchID;
                this.state = param.state;
                this.groupName = param.groupName;
                this.createdAt = param.createdAt;
                this.way = param.way;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], MailTask.prototype, "groupID", void 0);
    __decorate([
        Field.d(2, "int64", "repeated")
    ], MailTask.prototype, "UIDs", void 0);
    __decorate([
        Field.d(3, mail.SysMaillTmpl, "optional")
    ], MailTask.prototype, "tmpl", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], MailTask.prototype, "operator", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], MailTask.prototype, "batchID", void 0);
    __decorate([
        Field.d(6, mail.MailTaskState, "optional")
    ], MailTask.prototype, "state", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], MailTask.prototype, "groupName", void 0);
    __decorate([
        Field.d(8, "int64", "optional")
    ], MailTask.prototype, "createdAt", void 0);
    __decorate([
        Field.d(9, common_common_define.Way, "optional")
    ], MailTask.prototype, "way", void 0);
    MailTask = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_MailTask")
    ], MailTask);
    mail.MailTask = MailTask;
    let CreateSysMailTaskReq = class CreateSysMailTaskReq extends Message {
        constructor(param) {
            super();
            this.task = new mail.MailTask();
            if (param) {
                this.task = new mail.MailTask(param.task);
            }
        }
    };
    __decorate([
        Field.d(1, mail.MailTask, "optional")
    ], CreateSysMailTaskReq.prototype, "task", void 0);
    CreateSysMailTaskReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_CreateSysMailTaskReq")
    ], CreateSysMailTaskReq);
    mail.CreateSysMailTaskReq = CreateSysMailTaskReq;
    let CreateSysMailTaskRsp = class CreateSysMailTaskRsp extends Message {
        constructor(param) {
            super();
            this.batchID = "";
            if (param) {
                this.batchID = param.batchID;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], CreateSysMailTaskRsp.prototype, "batchID", void 0);
    CreateSysMailTaskRsp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_CreateSysMailTaskRsp")
    ], CreateSysMailTaskRsp);
    mail.CreateSysMailTaskRsp = CreateSysMailTaskRsp;
    let SendSysMailReq = class SendSysMailReq extends Message {
        constructor(param) {
            super();
            this.batchID = "";
            if (param) {
                this.batchID = param.batchID;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], SendSysMailReq.prototype, "batchID", void 0);
    SendSysMailReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_SendSysMailReq")
    ], SendSysMailReq);
    mail.SendSysMailReq = SendSysMailReq;
    let ListSysMailTaskReq = class ListSysMailTaskReq extends Message {
        constructor(param) {
            super();
            this.page = 0;
            this.pageSize = 0;
            this.attachmentType = 0;
            this.operator = "";
            this.way = 0;
            this.title = "";
            this.propName = "";
            this.propId = 0;
            this.beginTime = 0;
            this.endTime = 0;
            if (param) {
                this.page = param.page;
                this.pageSize = param.pageSize;
                this.attachmentType = param.attachmentType;
                this.operator = param.operator;
                this.way = param.way;
                this.title = param.title;
                this.propName = param.propName;
                this.propId = param.propId;
                this.beginTime = param.beginTime;
                this.endTime = param.endTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ListSysMailTaskReq.prototype, "page", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ListSysMailTaskReq.prototype, "pageSize", void 0);
    __decorate([
        Field.d(3, common_common_define.ItemType, "optional")
    ], ListSysMailTaskReq.prototype, "attachmentType", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], ListSysMailTaskReq.prototype, "operator", void 0);
    __decorate([
        Field.d(5, common_common_define.Way, "optional")
    ], ListSysMailTaskReq.prototype, "way", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], ListSysMailTaskReq.prototype, "title", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], ListSysMailTaskReq.prototype, "propName", void 0);
    __decorate([
        Field.d(8, "int64", "optional")
    ], ListSysMailTaskReq.prototype, "propId", void 0);
    __decorate([
        Field.d(9, "int64", "optional")
    ], ListSysMailTaskReq.prototype, "beginTime", void 0);
    __decorate([
        Field.d(10, "int64", "optional")
    ], ListSysMailTaskReq.prototype, "endTime", void 0);
    ListSysMailTaskReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_ListSysMailTaskReq")
    ], ListSysMailTaskReq);
    mail.ListSysMailTaskReq = ListSysMailTaskReq;
    let ListSysMailTaskResp = class ListSysMailTaskResp extends Message {
        constructor(param) {
            super();
            this.tasks = [];
            this.total = 0;
            if (param) {
                this.tasks = param.tasks;
                this.total = param.total;
            }
        }
    };
    __decorate([
        Field.d(1, mail.MailTask, "repeated")
    ], ListSysMailTaskResp.prototype, "tasks", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], ListSysMailTaskResp.prototype, "total", void 0);
    ListSysMailTaskResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_ListSysMailTaskResp")
    ], ListSysMailTaskResp);
    mail.ListSysMailTaskResp = ListSysMailTaskResp;
    let ListSysMailUidReq = class ListSysMailUidReq extends Message {
        constructor(param) {
            super();
            this.batchID = "";
            this.page = 0;
            this.pageSize = 0;
            this.revoke = 0;
            if (param) {
                this.batchID = param.batchID;
                this.page = param.page;
                this.pageSize = param.pageSize;
                this.revoke = param.revoke;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], ListSysMailUidReq.prototype, "batchID", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ListSysMailUidReq.prototype, "page", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], ListSysMailUidReq.prototype, "pageSize", void 0);
    __decorate([
        Field.d(4, mail.RevokeState, "optional")
    ], ListSysMailUidReq.prototype, "revoke", void 0);
    ListSysMailUidReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_ListSysMailUidReq")
    ], ListSysMailUidReq);
    mail.ListSysMailUidReq = ListSysMailUidReq;
    let ListSysMailUidResp = class ListSysMailUidResp extends Message {
        constructor(param) {
            super();
            this.total = 0;
            this.uids = [];
            if (param) {
                this.total = param.total;
                this.uids = param.uids;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], ListSysMailUidResp.prototype, "total", void 0);
    __decorate([
        Field.d(2, "int64", "repeated")
    ], ListSysMailUidResp.prototype, "uids", void 0);
    ListSysMailUidResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_ListSysMailUidResp")
    ], ListSysMailUidResp);
    mail.ListSysMailUidResp = ListSysMailUidResp;
    let GetSysMailTaskReq = class GetSysMailTaskReq extends Message {
        constructor(param) {
            super();
            this.batchID = "";
            if (param) {
                this.batchID = param.batchID;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetSysMailTaskReq.prototype, "batchID", void 0);
    GetSysMailTaskReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_GetSysMailTaskReq")
    ], GetSysMailTaskReq);
    mail.GetSysMailTaskReq = GetSysMailTaskReq;
    let GetSysMailTaskResp = class GetSysMailTaskResp extends Message {
        constructor(param) {
            super();
            this.task = new mail.MailTask();
            if (param) {
                this.task = new mail.MailTask(param.task);
            }
        }
    };
    __decorate([
        Field.d(1, mail.MailTask, "optional")
    ], GetSysMailTaskResp.prototype, "task", void 0);
    GetSysMailTaskResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_GetSysMailTaskResp")
    ], GetSysMailTaskResp);
    mail.GetSysMailTaskResp = GetSysMailTaskResp;
    let OperateLog = class OperateLog extends Message {
        constructor(param) {
            super();
            this.id = "";
            this.title = "";
            this.batchId = "";
            this.successCount = 0;
            this.failedCount = 0;
            this.operator = "";
            this.createdAt = 0;
            this.updatedAt = 0;
            this.operate = 0;
            this.groupName = "";
            this.uids = [];
            if (param) {
                this.id = param.id;
                this.title = param.title;
                this.batchId = param.batchId;
                this.successCount = param.successCount;
                this.failedCount = param.failedCount;
                this.operator = param.operator;
                this.createdAt = param.createdAt;
                this.updatedAt = param.updatedAt;
                this.operate = param.operate;
                this.groupName = param.groupName;
                this.uids = param.uids;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], OperateLog.prototype, "id", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], OperateLog.prototype, "title", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], OperateLog.prototype, "batchId", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], OperateLog.prototype, "successCount", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], OperateLog.prototype, "failedCount", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], OperateLog.prototype, "operator", void 0);
    __decorate([
        Field.d(7, "int64", "optional")
    ], OperateLog.prototype, "createdAt", void 0);
    __decorate([
        Field.d(8, "int64", "optional")
    ], OperateLog.prototype, "updatedAt", void 0);
    __decorate([
        Field.d(9, mail.OperateType, "optional")
    ], OperateLog.prototype, "operate", void 0);
    __decorate([
        Field.d(10, "string", "optional")
    ], OperateLog.prototype, "groupName", void 0);
    __decorate([
        Field.d(11, "int64", "repeated")
    ], OperateLog.prototype, "uids", void 0);
    OperateLog = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_OperateLog")
    ], OperateLog);
    mail.OperateLog = OperateLog;
    let ListSysMailTaskOperateLogReq = class ListSysMailTaskOperateLogReq extends Message {
        constructor(param) {
            super();
            this.page = 0;
            this.pageSize = 0;
            if (param) {
                this.page = param.page;
                this.pageSize = param.pageSize;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ListSysMailTaskOperateLogReq.prototype, "page", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ListSysMailTaskOperateLogReq.prototype, "pageSize", void 0);
    ListSysMailTaskOperateLogReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_ListSysMailTaskOperateLogReq")
    ], ListSysMailTaskOperateLogReq);
    mail.ListSysMailTaskOperateLogReq = ListSysMailTaskOperateLogReq;
    let ListSysMailTaskOperateLogResp = class ListSysMailTaskOperateLogResp extends Message {
        constructor(param) {
            super();
            this.total = 0;
            this.logs = [];
            if (param) {
                this.total = param.total;
                this.logs = param.logs;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], ListSysMailTaskOperateLogResp.prototype, "total", void 0);
    __decorate([
        Field.d(2, mail.OperateLog, "repeated")
    ], ListSysMailTaskOperateLogResp.prototype, "logs", void 0);
    ListSysMailTaskOperateLogResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_ListSysMailTaskOperateLogResp")
    ], ListSysMailTaskOperateLogResp);
    mail.ListSysMailTaskOperateLogResp = ListSysMailTaskOperateLogResp;
    let RevokeMailReq = class RevokeMailReq extends Message {
        constructor(param) {
            super();
            this.batchId = "";
            this.operator = "";
            if (param) {
                this.batchId = param.batchId;
                this.operator = param.operator;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], RevokeMailReq.prototype, "batchId", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], RevokeMailReq.prototype, "operator", void 0);
    RevokeMailReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_RevokeMailReq")
    ], RevokeMailReq);
    mail.RevokeMailReq = RevokeMailReq;
    let RevokeMailResp = class RevokeMailResp extends Message {
        constructor(param) {
            super();
            this.log = new mail.OperateLog();
            if (param) {
                this.log = new mail.OperateLog(param.log);
            }
        }
    };
    __decorate([
        Field.d(1, mail.OperateLog, "optional")
    ], RevokeMailResp.prototype, "log", void 0);
    RevokeMailResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_RevokeMailResp")
    ], RevokeMailResp);
    mail.RevokeMailResp = RevokeMailResp;
    let GetSysMailTaskOperateLogReq = class GetSysMailTaskOperateLogReq extends Message {
        constructor(param) {
            super();
            this.id = "";
            if (param) {
                this.id = param.id;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetSysMailTaskOperateLogReq.prototype, "id", void 0);
    GetSysMailTaskOperateLogReq = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_GetSysMailTaskOperateLogReq")
    ], GetSysMailTaskOperateLogReq);
    mail.GetSysMailTaskOperateLogReq = GetSysMailTaskOperateLogReq;
    let GetSysMailTaskOperateLogResp = class GetSysMailTaskOperateLogResp extends Message {
        constructor(param) {
            super();
            this.log = new mail.OperateLog();
            if (param) {
                this.log = new mail.OperateLog(param.log);
            }
        }
    };
    __decorate([
        Field.d(1, mail.OperateLog, "optional")
    ], GetSysMailTaskOperateLogResp.prototype, "log", void 0);
    GetSysMailTaskOperateLogResp = __decorate([
        Type.d("Type_tss_hall_mail_v2_proto_GetSysMailTaskOperateLogResp")
    ], GetSysMailTaskOperateLogResp);
    mail.GetSysMailTaskOperateLogResp = GetSysMailTaskOperateLogResp;
    mail.MailServer = {
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
        async createSysMailTask(param) {
            const buffer = CreateSysMailTaskReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 10004, "CreateSysMailTask", buffer, this.config);
            return rsp.code === 0 ? CreateSysMailTaskRsp.decode(rsp.data) : null;
        },
        async sendSysMail(param) {
            const buffer = SendSysMailReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 10005, "SendSysMail", buffer, this.config);
            return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
        },
        async listSysMailTask(param) {
            const buffer = ListSysMailTaskReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 10006, "ListSysMailTask", buffer, this.config);
            return rsp.code === 0 ? ListSysMailTaskResp.decode(rsp.data) : null;
        },
        async listSysMailUid(param) {
            const buffer = ListSysMailUidReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 10007, "ListSysMailUid", buffer, this.config);
            return rsp.code === 0 ? ListSysMailUidResp.decode(rsp.data) : null;
        },
        async getSysMailTask(param) {
            const buffer = GetSysMailTaskReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 10008, "GetSysMailTask", buffer, this.config);
            return rsp.code === 0 ? GetSysMailTaskResp.decode(rsp.data) : null;
        },
        async listSysMailTaskOperateLog(param) {
            const buffer = ListSysMailTaskOperateLogReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 10009, "ListSysMailTaskOperateLog", buffer, this.config);
            return rsp.code === 0 ? ListSysMailTaskOperateLogResp.decode(rsp.data) : null;
        },
        async revokeMail(param) {
            const buffer = RevokeMailReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 10010, "RevokeMail", buffer, this.config);
            return rsp.code === 0 ? RevokeMailResp.decode(rsp.data) : null;
        },
        async getSysMailTaskOperateLog(param) {
            const buffer = GetSysMailTaskOperateLogReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 10011, "GetSysMailTaskOperateLog", buffer, this.config);
            return rsp.code === 0 ? GetSysMailTaskOperateLogResp.decode(rsp.data) : null;
        },
        async getSysMail(param) {
            const buffer = GetSysMailReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 1, "GetSysMail", buffer, this.config);
            return rsp.code === 0 ? GetSysMailResp.decode(rsp.data) : null;
        },
        async listSysMails(param) {
            const buffer = ListSysMailsReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 2, "ListSysMails", buffer, this.config);
            return rsp.code === 0 ? ListSysMailsResp.decode(rsp.data) : null;
        },
        async getUnreadMailNum(param) {
            const buffer = GetUnreadMailNumReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 3, "GetUnreadMailNum", buffer, this.config);
            return rsp.code === 0 ? GetUnreadMailNumResp.decode(rsp.data) : null;
        },
        async acceptAward(param) {
            const buffer = AcceptAwardReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 4, "AcceptAward", buffer, this.config);
            return rsp.code === 0 ? AcceptAwardResp.decode(rsp.data) : null;
        },
        async batchAcceptAward(param) {
            const buffer = BatchAcceptAwardReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 5, "BatchAcceptAward", buffer, this.config);
            return rsp.code === 0 ? BatchAcceptAwardResp.decode(rsp.data) : null;
        },
        async deleteMail(param) {
            const buffer = DeleteMailReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 6, "DeleteMail", buffer, this.config);
            return rsp.code === 0 ? DeleteMailResp.decode(rsp.data) : null;
        },
        async notifySysMail(param) {
            const buffer = base.Void.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.mail.v2", 1001, "NotifySysMail", buffer, this.config);
            return rsp.code === 0 ? NotifySysMailResp.decode(rsp.data) : null;
        },
    };
})(mail || (mail = {}));
//# sourceMappingURL=mail_v2.js.map