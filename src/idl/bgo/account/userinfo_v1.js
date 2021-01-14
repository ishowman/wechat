import { __decorate } from "tslib";
/* eslint-disable */
import { rpcPlugin as byRpc, ApiSendConfig } from 'xj-core';
import { Message, Type, Field } from 'protobufjs/light';
import { account as account_common_account } from '@/idl/bgo/account/common_account';
import { component as component_common_msg } from '@/idl/bgo/component/common_msg';
import { base as base } from '@/idl/base/base';
export var userinfo;
(function (userinfo) {
    let VIPStatus;
    (function (VIPStatus) {
        VIPStatus[VIPStatus["UnknownStatus"] = 0] = "UnknownStatus";
        VIPStatus[VIPStatus["NotVIP"] = 1] = "NotVIP";
        VIPStatus[VIPStatus["Opening"] = 2] = "Opening";
        VIPStatus[VIPStatus["Expired"] = 3] = "Expired";
    })(VIPStatus = userinfo.VIPStatus || (userinfo.VIPStatus = {}));
    let DelGuidOnlineInfoByUidReq = class DelGuidOnlineInfoByUidReq extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            if (param) {
                this.uid = param.uid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], DelGuidOnlineInfoByUidReq.prototype, "uid", void 0);
    DelGuidOnlineInfoByUidReq = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_DelGuidOnlineInfoByUidReq")
    ], DelGuidOnlineInfoByUidReq);
    userinfo.DelGuidOnlineInfoByUidReq = DelGuidOnlineInfoByUidReq;
    let NotifyGuestTrialEndResp = class NotifyGuestTrialEndResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], NotifyGuestTrialEndResp.prototype, "code", void 0);
    NotifyGuestTrialEndResp = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_NotifyGuestTrialEndResp")
    ], NotifyGuestTrialEndResp);
    userinfo.NotifyGuestTrialEndResp = NotifyGuestTrialEndResp;
    let GetGuidTrialStatusReq = class GetGuidTrialStatusReq extends Message {
        constructor(param) {
            super();
            this.guid = "";
            if (param) {
                this.guid = param.guid;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetGuidTrialStatusReq.prototype, "guid", void 0);
    GetGuidTrialStatusReq = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetGuidTrialStatusReq")
    ], GetGuidTrialStatusReq);
    userinfo.GetGuidTrialStatusReq = GetGuidTrialStatusReq;
    let GetGuidTrialStatusResp = class GetGuidTrialStatusResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.isEnd = false;
            this.trialTimeLeft = 0;
            if (param) {
                this.code = param.code;
                this.isEnd = param.isEnd;
                this.trialTimeLeft = param.trialTimeLeft;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], GetGuidTrialStatusResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "bool", "optional")
    ], GetGuidTrialStatusResp.prototype, "isEnd", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], GetGuidTrialStatusResp.prototype, "trialTimeLeft", void 0);
    GetGuidTrialStatusResp = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetGuidTrialStatusResp")
    ], GetGuidTrialStatusResp);
    userinfo.GetGuidTrialStatusResp = GetGuidTrialStatusResp;
    let RecordGuidOnlineReq = class RecordGuidOnlineReq extends Message {
        constructor(param) {
            super();
            this.guid = "";
            this.uid = 0;
            this.accountLv = 0;
            if (param) {
                this.guid = param.guid;
                this.uid = param.uid;
                this.accountLv = param.accountLv;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], RecordGuidOnlineReq.prototype, "guid", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], RecordGuidOnlineReq.prototype, "uid", void 0);
    __decorate([
        Field.d(3, account_common_account.AccountLvEm, "optional")
    ], RecordGuidOnlineReq.prototype, "accountLv", void 0);
    RecordGuidOnlineReq = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_RecordGuidOnlineReq")
    ], RecordGuidOnlineReq);
    userinfo.RecordGuidOnlineReq = RecordGuidOnlineReq;
    let IncrGuidOnlineTimeReq = class IncrGuidOnlineTimeReq extends Message {
        constructor(param) {
            super();
            this.guid = [];
            this.incrTimeDuration = 0;
            if (param) {
                this.guid = param.guid;
                this.incrTimeDuration = param.incrTimeDuration;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "repeated")
    ], IncrGuidOnlineTimeReq.prototype, "guid", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], IncrGuidOnlineTimeReq.prototype, "incrTimeDuration", void 0);
    IncrGuidOnlineTimeReq = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_IncrGuidOnlineTimeReq")
    ], IncrGuidOnlineTimeReq);
    userinfo.IncrGuidOnlineTimeReq = IncrGuidOnlineTimeReq;
    let GuidOnlineIdReq = class GuidOnlineIdReq extends Message {
        constructor(param) {
            super();
            this.guid = "";
            if (param) {
                this.guid = param.guid;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GuidOnlineIdReq.prototype, "guid", void 0);
    GuidOnlineIdReq = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GuidOnlineIdReq")
    ], GuidOnlineIdReq);
    userinfo.GuidOnlineIdReq = GuidOnlineIdReq;
    let GetGuidOnlineInfoResp = class GetGuidOnlineInfoResp extends Message {
        constructor(param) {
            super();
            this.guid = "";
            this.uid = 0;
            this.onlineTimeSec = 0;
            this.trialStartTimeUinx = 0;
            this.guestUid = 0;
            if (param) {
                this.guid = param.guid;
                this.uid = param.uid;
                this.onlineTimeSec = param.onlineTimeSec;
                this.trialStartTimeUinx = param.trialStartTimeUinx;
                this.guestUid = param.guestUid;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetGuidOnlineInfoResp.prototype, "guid", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], GetGuidOnlineInfoResp.prototype, "uid", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], GetGuidOnlineInfoResp.prototype, "onlineTimeSec", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], GetGuidOnlineInfoResp.prototype, "trialStartTimeUinx", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], GetGuidOnlineInfoResp.prototype, "guestUid", void 0);
    GetGuidOnlineInfoResp = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetGuidOnlineInfoResp")
    ], GetGuidOnlineInfoResp);
    userinfo.GetGuidOnlineInfoResp = GetGuidOnlineInfoResp;
    let UploadAvatarRequest = class UploadAvatarRequest extends Message {
        constructor(param) {
            super();
            this.Path = "";
            this.Pic = "";
            this.Thumb = "";
            if (param) {
                this.Path = param.Path;
                this.Pic = param.Pic;
                this.Thumb = param.Thumb;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], UploadAvatarRequest.prototype, "Path", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], UploadAvatarRequest.prototype, "Pic", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], UploadAvatarRequest.prototype, "Thumb", void 0);
    UploadAvatarRequest = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_UploadAvatarRequest")
    ], UploadAvatarRequest);
    userinfo.UploadAvatarRequest = UploadAvatarRequest;
    let UploadAvatarResponse = class UploadAvatarResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], UploadAvatarResponse.prototype, "code", void 0);
    UploadAvatarResponse = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_UploadAvatarResponse")
    ], UploadAvatarResponse);
    userinfo.UploadAvatarResponse = UploadAvatarResponse;
    let GetCDNAddrRequest = class GetCDNAddrRequest extends Message {
        constructor(param) {
            super();
            if (param) {
            }
        }
    };
    GetCDNAddrRequest = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetCDNAddrRequest")
    ], GetCDNAddrRequest);
    userinfo.GetCDNAddrRequest = GetCDNAddrRequest;
    let GetCDNAddrResponse = class GetCDNAddrResponse extends Message {
        constructor(param) {
            super();
            this.Addr = "";
            this.UpLoadAddr = "";
            this.Pre = "";
            this.CmsPre = "";
            this.FileUpAddr = "";
            if (param) {
                this.Addr = param.Addr;
                this.UpLoadAddr = param.UpLoadAddr;
                this.Pre = param.Pre;
                this.CmsPre = param.CmsPre;
                this.FileUpAddr = param.FileUpAddr;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetCDNAddrResponse.prototype, "Addr", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], GetCDNAddrResponse.prototype, "UpLoadAddr", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], GetCDNAddrResponse.prototype, "Pre", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], GetCDNAddrResponse.prototype, "CmsPre", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], GetCDNAddrResponse.prototype, "FileUpAddr", void 0);
    GetCDNAddrResponse = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetCDNAddrResponse")
    ], GetCDNAddrResponse);
    userinfo.GetCDNAddrResponse = GetCDNAddrResponse;
    let CheckNameRequest = class CheckNameRequest extends Message {
        constructor(param) {
            super();
            this.Name = "";
            if (param) {
                this.Name = param.Name;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], CheckNameRequest.prototype, "Name", void 0);
    CheckNameRequest = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_CheckNameRequest")
    ], CheckNameRequest);
    userinfo.CheckNameRequest = CheckNameRequest;
    let CheckNameResponse = class CheckNameResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], CheckNameResponse.prototype, "code", void 0);
    CheckNameResponse = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_CheckNameResponse")
    ], CheckNameResponse);
    userinfo.CheckNameResponse = CheckNameResponse;
    let FurtherUserInfoRequest = class FurtherUserInfoRequest extends Message {
        constructor(param) {
            super();
            this.Name = "";
            this.Sex = 0;
            this.ZoneID = "";
            if (param) {
                this.Name = param.Name;
                this.Sex = param.Sex;
                this.ZoneID = param.ZoneID;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], FurtherUserInfoRequest.prototype, "Name", void 0);
    __decorate([
        Field.d(2, account_common_account.SexValue, "optional")
    ], FurtherUserInfoRequest.prototype, "Sex", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], FurtherUserInfoRequest.prototype, "ZoneID", void 0);
    FurtherUserInfoRequest = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_FurtherUserInfoRequest")
    ], FurtherUserInfoRequest);
    userinfo.FurtherUserInfoRequest = FurtherUserInfoRequest;
    let FurtherUserInfoResponse = class FurtherUserInfoResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], FurtherUserInfoResponse.prototype, "code", void 0);
    FurtherUserInfoResponse = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_FurtherUserInfoResponse")
    ], FurtherUserInfoResponse);
    userinfo.FurtherUserInfoResponse = FurtherUserInfoResponse;
    let GetUserInfoRequest = class GetUserInfoRequest extends Message {
        constructor(param) {
            super();
            this.Uid = 0;
            if (param) {
                this.Uid = param.Uid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], GetUserInfoRequest.prototype, "Uid", void 0);
    GetUserInfoRequest = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetUserInfoRequest")
    ], GetUserInfoRequest);
    userinfo.GetUserInfoRequest = GetUserInfoRequest;
    let GetUserInfoResponse = class GetUserInfoResponse extends Message {
        constructor(param) {
            super();
            this.Data = new account_common_account.UserInfo();
            if (param) {
                this.Data = new account_common_account.UserInfo(param.Data);
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.UserInfo, "optional")
    ], GetUserInfoResponse.prototype, "Data", void 0);
    GetUserInfoResponse = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetUserInfoResponse")
    ], GetUserInfoResponse);
    userinfo.GetUserInfoResponse = GetUserInfoResponse;
    let GetMulitUserInfoRequest = class GetMulitUserInfoRequest extends Message {
        constructor(param) {
            super();
            this.Uids = [];
            if (param) {
                this.Uids = param.Uids;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "repeated")
    ], GetMulitUserInfoRequest.prototype, "Uids", void 0);
    GetMulitUserInfoRequest = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetMulitUserInfoRequest")
    ], GetMulitUserInfoRequest);
    userinfo.GetMulitUserInfoRequest = GetMulitUserInfoRequest;
    let GetMulitUserInfoResponse = class GetMulitUserInfoResponse extends Message {
        constructor(param) {
            super();
            this.data = [];
            if (param) {
                this.data = param.data;
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.UserInfo, "repeated")
    ], GetMulitUserInfoResponse.prototype, "data", void 0);
    GetMulitUserInfoResponse = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetMulitUserInfoResponse")
    ], GetMulitUserInfoResponse);
    userinfo.GetMulitUserInfoResponse = GetMulitUserInfoResponse;
    let SetOnceUserNameRequest = class SetOnceUserNameRequest extends Message {
        constructor(param) {
            super();
            this.Name = "";
            if (param) {
                this.Name = param.Name;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], SetOnceUserNameRequest.prototype, "Name", void 0);
    SetOnceUserNameRequest = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_SetOnceUserNameRequest")
    ], SetOnceUserNameRequest);
    userinfo.SetOnceUserNameRequest = SetOnceUserNameRequest;
    let SetOnceUserNameResponse = class SetOnceUserNameResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], SetOnceUserNameResponse.prototype, "code", void 0);
    SetOnceUserNameResponse = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_SetOnceUserNameResponse")
    ], SetOnceUserNameResponse);
    userinfo.SetOnceUserNameResponse = SetOnceUserNameResponse;
    let SetOnceUserSexRequest = class SetOnceUserSexRequest extends Message {
        constructor(param) {
            super();
            this.sex = 0;
            if (param) {
                this.sex = param.sex;
            }
        }
    };
    __decorate([
        Field.d(1, account_common_account.SexValue, "optional")
    ], SetOnceUserSexRequest.prototype, "sex", void 0);
    SetOnceUserSexRequest = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_SetOnceUserSexRequest")
    ], SetOnceUserSexRequest);
    userinfo.SetOnceUserSexRequest = SetOnceUserSexRequest;
    let SetOnceUserSexResponse = class SetOnceUserSexResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], SetOnceUserSexResponse.prototype, "code", void 0);
    SetOnceUserSexResponse = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_SetOnceUserSexResponse")
    ], SetOnceUserSexResponse);
    userinfo.SetOnceUserSexResponse = SetOnceUserSexResponse;
    let OnceUserNamedRequest = class OnceUserNamedRequest extends Message {
        constructor(param) {
            super();
            if (param) {
            }
        }
    };
    OnceUserNamedRequest = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_OnceUserNamedRequest")
    ], OnceUserNamedRequest);
    userinfo.OnceUserNamedRequest = OnceUserNamedRequest;
    let OnceUserNamedResponse = class OnceUserNamedResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], OnceUserNamedResponse.prototype, "code", void 0);
    OnceUserNamedResponse = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_OnceUserNamedResponse")
    ], OnceUserNamedResponse);
    userinfo.OnceUserNamedResponse = OnceUserNamedResponse;
    let GetUserInfoDetailedRequest = class GetUserInfoDetailedRequest extends Message {
        constructor(param) {
            super();
            this.Uid = 0;
            if (param) {
                this.Uid = param.Uid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], GetUserInfoDetailedRequest.prototype, "Uid", void 0);
    GetUserInfoDetailedRequest = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetUserInfoDetailedRequest")
    ], GetUserInfoDetailedRequest);
    userinfo.GetUserInfoDetailedRequest = GetUserInfoDetailedRequest;
    let OnlineInfo = class OnlineInfo extends Message {
        constructor(param) {
            super();
            this.Appids = [];
            if (param) {
                this.Appids = param.Appids;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "repeated")
    ], OnlineInfo.prototype, "Appids", void 0);
    OnlineInfo = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_OnlineInfo")
    ], OnlineInfo);
    userinfo.OnlineInfo = OnlineInfo;
    let LoginInfo = class LoginInfo extends Message {
        constructor(param) {
            super();
            this.OnlineInfo = new OnlineInfo();
            this.DType = 0;
            this.LastLoginTime = 0;
            this.RemoteIp = "";
            this.PhoneModel = "";
            this.Version = "";
            this.IsOnLine = false;
            this.Latitude = 0;
            this.Longitude = 0;
            this.Language = "";
            this.DeviceGuid = "";
            if (param) {
                this.OnlineInfo = new OnlineInfo(param.OnlineInfo);
                this.DType = param.DType;
                this.LastLoginTime = param.LastLoginTime;
                this.RemoteIp = param.RemoteIp;
                this.PhoneModel = param.PhoneModel;
                this.Version = param.Version;
                this.IsOnLine = param.IsOnLine;
                this.Latitude = param.Latitude;
                this.Longitude = param.Longitude;
                this.Language = param.Language;
                this.DeviceGuid = param.DeviceGuid;
            }
        }
    };
    __decorate([
        Field.d(1, OnlineInfo, "optional")
    ], LoginInfo.prototype, "OnlineInfo", void 0);
    __decorate([
        Field.d(2, account_common_account.DeviceType, "optional")
    ], LoginInfo.prototype, "DType", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], LoginInfo.prototype, "LastLoginTime", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], LoginInfo.prototype, "RemoteIp", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], LoginInfo.prototype, "PhoneModel", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], LoginInfo.prototype, "Version", void 0);
    __decorate([
        Field.d(7, "bool", "optional")
    ], LoginInfo.prototype, "IsOnLine", void 0);
    __decorate([
        Field.d(8, "float", "optional")
    ], LoginInfo.prototype, "Latitude", void 0);
    __decorate([
        Field.d(9, "float", "optional")
    ], LoginInfo.prototype, "Longitude", void 0);
    __decorate([
        Field.d(10, "string", "optional")
    ], LoginInfo.prototype, "Language", void 0);
    __decorate([
        Field.d(11, "string", "optional")
    ], LoginInfo.prototype, "DeviceGuid", void 0);
    LoginInfo = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_LoginInfo")
    ], LoginInfo);
    userinfo.LoginInfo = LoginInfo;
    let GetUserInfoDetailedResponse = class GetUserInfoDetailedResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.UInfo = new account_common_account.UserInfo();
            this.RegTime = 0;
            this.ZoneID = 0;
            this.LInfo = new LoginInfo();
            if (param) {
                this.code = param.code;
                this.UInfo = new account_common_account.UserInfo(param.UInfo);
                this.RegTime = param.RegTime;
                this.ZoneID = param.ZoneID;
                this.LInfo = new LoginInfo(param.LInfo);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], GetUserInfoDetailedResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, account_common_account.UserInfo, "optional")
    ], GetUserInfoDetailedResponse.prototype, "UInfo", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], GetUserInfoDetailedResponse.prototype, "RegTime", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], GetUserInfoDetailedResponse.prototype, "ZoneID", void 0);
    __decorate([
        Field.d(5, LoginInfo, "optional")
    ], GetUserInfoDetailedResponse.prototype, "LInfo", void 0);
    GetUserInfoDetailedResponse = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetUserInfoDetailedResponse")
    ], GetUserInfoDetailedResponse);
    userinfo.GetUserInfoDetailedResponse = GetUserInfoDetailedResponse;
    let IsRobotReq = class IsRobotReq extends Message {
        constructor(param) {
            super();
            this.Uid = 0;
            if (param) {
                this.Uid = param.Uid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], IsRobotReq.prototype, "Uid", void 0);
    IsRobotReq = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_IsRobotReq")
    ], IsRobotReq);
    userinfo.IsRobotReq = IsRobotReq;
    let IsRobotResponse = class IsRobotResponse extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.IsRobot = false;
            if (param) {
                this.code = param.code;
                this.IsRobot = param.IsRobot;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], IsRobotResponse.prototype, "code", void 0);
    __decorate([
        Field.d(2, "bool", "optional")
    ], IsRobotResponse.prototype, "IsRobot", void 0);
    IsRobotResponse = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_IsRobotResponse")
    ], IsRobotResponse);
    userinfo.IsRobotResponse = IsRobotResponse;
    let IDCardReq = class IDCardReq extends Message {
        constructor(param) {
            super();
            this.Uid = 0;
            this.Name = "";
            this.IDCard = "";
            if (param) {
                this.Uid = param.Uid;
                this.Name = param.Name;
                this.IDCard = param.IDCard;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], IDCardReq.prototype, "Uid", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], IDCardReq.prototype, "Name", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], IDCardReq.prototype, "IDCard", void 0);
    IDCardReq = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_IDCardReq")
    ], IDCardReq);
    userinfo.IDCardReq = IDCardReq;
    let IDCardResp = class IDCardResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.retryLeft = 0;
            if (param) {
                this.code = param.code;
                this.retryLeft = param.retryLeft;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], IDCardResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], IDCardResp.prototype, "retryLeft", void 0);
    IDCardResp = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_IDCardResp")
    ], IDCardResp);
    userinfo.IDCardResp = IDCardResp;
    let Void = class Void extends Message {
        constructor(param) {
            super();
            if (param) {
            }
        }
    };
    Void = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_Void")
    ], Void);
    userinfo.Void = Void;
    let GetAccountInfoRequest = class GetAccountInfoRequest extends Message {
        constructor(param) {
            super();
            this.Uid = 0;
            if (param) {
                this.Uid = param.Uid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], GetAccountInfoRequest.prototype, "Uid", void 0);
    GetAccountInfoRequest = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetAccountInfoRequest")
    ], GetAccountInfoRequest);
    userinfo.GetAccountInfoRequest = GetAccountInfoRequest;
    let GetAccountInfoResponse = class GetAccountInfoResponse extends Message {
        constructor(param) {
            super();
            this.Type = 0;
            this.UserName = "";
            this.code = 0;
            this.CreatTime = 0;
            this.PlatUid = "";
            this.ZoneID = 0;
            this.Phone = "";
            this.Email = "";
            this.AccountLv = 0;
            this.Name = "";
            this.IDCard = "";
            this.UID = 0;
            if (param) {
                this.Type = param.Type;
                this.UserName = param.UserName;
                this.code = param.code;
                this.CreatTime = param.CreatTime;
                this.PlatUid = param.PlatUid;
                this.ZoneID = param.ZoneID;
                this.Phone = param.Phone;
                this.Email = param.Email;
                this.AccountLv = param.AccountLv;
                this.Name = param.Name;
                this.IDCard = param.IDCard;
                this.UID = param.UID;
            }
        }
    };
    __decorate([
        Field.d(1, "uint32", "optional")
    ], GetAccountInfoResponse.prototype, "Type", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], GetAccountInfoResponse.prototype, "UserName", void 0);
    __decorate([
        Field.d(4, "int32", "required")
    ], GetAccountInfoResponse.prototype, "code", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], GetAccountInfoResponse.prototype, "CreatTime", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], GetAccountInfoResponse.prototype, "PlatUid", void 0);
    __decorate([
        Field.d(8, "int32", "optional")
    ], GetAccountInfoResponse.prototype, "ZoneID", void 0);
    __decorate([
        Field.d(9, "string", "optional")
    ], GetAccountInfoResponse.prototype, "Phone", void 0);
    __decorate([
        Field.d(10, "string", "optional")
    ], GetAccountInfoResponse.prototype, "Email", void 0);
    __decorate([
        Field.d(11, account_common_account.AccountLvEm, "optional")
    ], GetAccountInfoResponse.prototype, "AccountLv", void 0);
    __decorate([
        Field.d(12, "string", "optional")
    ], GetAccountInfoResponse.prototype, "Name", void 0);
    __decorate([
        Field.d(13, "string", "optional")
    ], GetAccountInfoResponse.prototype, "IDCard", void 0);
    __decorate([
        Field.d(14, "int64", "optional")
    ], GetAccountInfoResponse.prototype, "UID", void 0);
    GetAccountInfoResponse = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetAccountInfoResponse")
    ], GetAccountInfoResponse);
    userinfo.GetAccountInfoResponse = GetAccountInfoResponse;
    let GetLockoutInfoReq = class GetLockoutInfoReq extends Message {
        constructor(param) {
            super();
            this.Uid = 0;
            if (param) {
                this.Uid = param.Uid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], GetLockoutInfoReq.prototype, "Uid", void 0);
    GetLockoutInfoReq = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetLockoutInfoReq")
    ], GetLockoutInfoReq);
    userinfo.GetLockoutInfoReq = GetLockoutInfoReq;
    let GetLockoutInfoResp = class GetLockoutInfoResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.Uid = 0;
            this.Reason = "";
            this.StartTime = 0;
            this.EndTime = 0;
            if (param) {
                this.code = param.code;
                this.Uid = param.Uid;
                this.Reason = param.Reason;
                this.StartTime = param.StartTime;
                this.EndTime = param.EndTime;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], GetLockoutInfoResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], GetLockoutInfoResp.prototype, "Uid", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], GetLockoutInfoResp.prototype, "Reason", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], GetLockoutInfoResp.prototype, "StartTime", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], GetLockoutInfoResp.prototype, "EndTime", void 0);
    GetLockoutInfoResp = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetLockoutInfoResp")
    ], GetLockoutInfoResp);
    userinfo.GetLockoutInfoResp = GetLockoutInfoResp;
    let GetGuestConfigReq = class GetGuestConfigReq extends Message {
        constructor(param) {
            super();
            this.guid = "";
            this.deviceType = 0;
            if (param) {
                this.guid = param.guid;
                this.deviceType = param.deviceType;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetGuestConfigReq.prototype, "guid", void 0);
    __decorate([
        Field.d(2, account_common_account.DeviceType, "optional")
    ], GetGuestConfigReq.prototype, "deviceType", void 0);
    GetGuestConfigReq = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetGuestConfigReq")
    ], GetGuestConfigReq);
    userinfo.GetGuestConfigReq = GetGuestConfigReq;
    let GetGuestConfigResp = class GetGuestConfigResp extends Message {
        constructor(param) {
            super();
            this.enable = false;
            this.trialEnd = false;
            if (param) {
                this.enable = param.enable;
                this.trialEnd = param.trialEnd;
            }
        }
    };
    __decorate([
        Field.d(1, "bool", "optional")
    ], GetGuestConfigResp.prototype, "enable", void 0);
    __decorate([
        Field.d(2, "bool", "optional")
    ], GetGuestConfigResp.prototype, "trialEnd", void 0);
    GetGuestConfigResp = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_GetGuestConfigResp")
    ], GetGuestConfigResp);
    userinfo.GetGuestConfigResp = GetGuestConfigResp;
    let ResetVerifyIdcardRetryLimitReq = class ResetVerifyIdcardRetryLimitReq extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            if (param) {
                this.uid = param.uid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], ResetVerifyIdcardRetryLimitReq.prototype, "uid", void 0);
    ResetVerifyIdcardRetryLimitReq = __decorate([
        Type.d("Type_bgo_account_userinfo_v1_proto_ResetVerifyIdcardRetryLimitReq")
    ], ResetVerifyIdcardRetryLimitReq);
    userinfo.ResetVerifyIdcardRetryLimitReq = ResetVerifyIdcardRetryLimitReq;
    userinfo.UserinfoServer = {
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
        async getCDNAddr(param) {
            const buffer = GetCDNAddrRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 1, "GetCDNAddr", buffer, this.config);
            return rsp.code === 0 ? GetCDNAddrResponse.decode(rsp.data) : null;
        },
        async uploadAvatar(param) {
            const buffer = UploadAvatarRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 2, "UploadAvatar", buffer, this.config);
            return rsp.code === 0 ? UploadAvatarResponse.decode(rsp.data) : null;
        },
        async userNameCheck(param) {
            const buffer = CheckNameRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 3, "UserNameCheck", buffer, this.config);
            return rsp.code === 0 ? CheckNameResponse.decode(rsp.data) : null;
        },
        async furtherUserInfo(param) {
            const buffer = FurtherUserInfoRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 4, "FurtherUserInfo", buffer, this.config);
            return rsp.code === 0 ? FurtherUserInfoResponse.decode(rsp.data) : null;
        },
        async getUserInfo(param) {
            const buffer = GetUserInfoRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 5, "GetUserInfo", buffer, this.config);
            return rsp.code === 0 ? GetUserInfoResponse.decode(rsp.data) : null;
        },
        async getMulitUserInfo(param) {
            const buffer = GetMulitUserInfoRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 6, "GetMulitUserInfo", buffer, this.config);
            return rsp.code === 0 ? GetMulitUserInfoResponse.decode(rsp.data) : null;
        },
        async setOnceUserName(param) {
            const buffer = SetOnceUserNameRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 7, "SetOnceUserName", buffer, this.config);
            return rsp.code === 0 ? SetOnceUserNameResponse.decode(rsp.data) : null;
        },
        async setOnceUserSex(param) {
            const buffer = SetOnceUserSexRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 8, "SetOnceUserSex", buffer, this.config);
            return rsp.code === 0 ? SetOnceUserSexResponse.decode(rsp.data) : null;
        },
        async onceUserNamed(param) {
            const buffer = OnceUserNamedRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 9, "OnceUserNamed", buffer, this.config);
            return rsp.code === 0 ? OnceUserNamedResponse.decode(rsp.data) : null;
        },
        async getUserInfoDetailed(param) {
            const buffer = GetUserInfoDetailedRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 10, "GetUserInfoDetailed", buffer, this.config);
            return rsp.code === 0 ? GetUserInfoDetailedResponse.decode(rsp.data) : null;
        },
        async isRobot(param) {
            const buffer = IsRobotReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 10001, "IsRobot", buffer, this.config);
            return rsp.code === 0 ? IsRobotResponse.decode(rsp.data) : null;
        },
        async verifyIDCard(param) {
            const buffer = IDCardReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 11, "VerifyIDCard", buffer, this.config);
            return rsp.code === 0 ? IDCardResp.decode(rsp.data) : null;
        },
        async getMyUserInfo(param) {
            const buffer = Void.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 12, "GetMyUserInfo", buffer, this.config);
            return rsp.code === 0 ? account_common_account.UserInfo.decode(rsp.data) : null;
        },
        async getAccountInfo(param) {
            const buffer = GetAccountInfoRequest.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 13, "GetAccountInfo", buffer, this.config);
            return rsp.code === 0 ? GetAccountInfoResponse.decode(rsp.data) : null;
        },
        async getLockoutInfo(param) {
            const buffer = GetLockoutInfoReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 14, "GetLockoutInfo", buffer, this.config);
            return rsp.code === 0 ? GetLockoutInfoResp.decode(rsp.data) : null;
        },
        async getGuestConfig(param) {
            const buffer = GetGuestConfigReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 15, "GetGuestConfig", buffer, this.config);
            return rsp.code === 0 ? GetGuestConfigResp.decode(rsp.data) : null;
        },
        async recordGuidOnline(param) {
            const buffer = RecordGuidOnlineReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 10022, "RecordGuidOnline", buffer, this.config);
            return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
        },
        async delGuidOnlineInfo(param) {
            const buffer = GuidOnlineIdReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 10024, "DelGuidOnlineInfo", buffer, this.config);
            return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
        },
        async getGuidOnlineInfo(param) {
            const buffer = GuidOnlineIdReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 10025, "GetGuidOnlineInfo", buffer, this.config);
            return rsp.code === 0 ? GetGuidOnlineInfoResp.decode(rsp.data) : null;
        },
        async getGuidTrialStatus(param) {
            const buffer = GetGuidTrialStatusReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 10026, "GetGuidTrialStatus", buffer, this.config);
            return rsp.code === 0 ? GetGuidTrialStatusResp.decode(rsp.data) : null;
        },
        async offlineCallback(param) {
            const buffer = component_common_msg.UesrOffLine.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 10027, "OfflineCallback", buffer, this.config);
            return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
        },
        async notifyGuestTrialEnd(param) {
            const buffer = base.Void.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 1001, "NotifyGuestTrialEnd", buffer, this.config);
            return rsp.code === 0 ? NotifyGuestTrialEndResp.decode(rsp.data) : null;
        },
        async delGuidOnlineInfoByUid(param) {
            const buffer = DelGuidOnlineInfoByUidReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 10028, "DelGuidOnlineInfoByUid", buffer, this.config);
            return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
        },
        async resetVerifyIdcardRetryLimit(param) {
            const buffer = ResetVerifyIdcardRetryLimitReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 10029, "ResetVerifyIdcardRetryLimit", buffer, this.config);
            return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
        },
        async delGuidOnlineGuestInfo(param) {
            const buffer = GuidOnlineIdReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 10030, "DelGuidOnlineGuestInfo", buffer, this.config);
            return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
        },
        async delGuidOnlineGuestInfoByUid(param) {
            const buffer = DelGuidOnlineInfoByUidReq.encode(param).finish();
            let rsp = await byRpc.sendV2("bgo.account.userinfo.v1", 10031, "DelGuidOnlineGuestInfoByUid", buffer, this.config);
            return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
        },
    };
})(userinfo || (userinfo = {}));
//# sourceMappingURL=userinfo_v1.js.map