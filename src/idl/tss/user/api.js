import { __decorate } from "tslib";
/* eslint-disable */
import { rpcPlugin as byRpc, ApiSendConfig } from 'xj-core';
import { Message, Type, Field } from 'protobufjs/light';
import { account as account_common_account } from '@/idl/bgo/account/common_account';
import { user as user_common_user } from '@/idl/tss/user/common_user';
export var api;
(function (api) {
    let LineState;
    (function (LineState) {
        LineState[LineState["None"] = 0] = "None";
        LineState[LineState["Online"] = 1] = "Online";
        LineState[LineState["Offline"] = 2] = "Offline";
        LineState[LineState["Matching"] = 3] = "Matching";
        LineState[LineState["Prematch"] = 4] = "Prematch";
        LineState[LineState["Playing"] = 5] = "Playing";
        LineState[LineState["Observer"] = 6] = "Observer";
    })(LineState = api.LineState || (api.LineState = {}));
    let UserAttrType;
    (function (UserAttrType) {
        UserAttrType[UserAttrType["UserAttrType_Int64"] = 1] = "UserAttrType_Int64";
        UserAttrType[UserAttrType["UserAttrType_String"] = 2] = "UserAttrType_String";
        UserAttrType[UserAttrType["UserAttrType_Int32"] = 3] = "UserAttrType_Int32";
        UserAttrType[UserAttrType["UserAttrType_Float64"] = 4] = "UserAttrType_Float64";
        UserAttrType[UserAttrType["UserAttrType_Json"] = 5] = "UserAttrType_Json";
        UserAttrType[UserAttrType["UserAttrType_Bool"] = 6] = "UserAttrType_Bool";
        UserAttrType[UserAttrType["UserAttrType_None"] = 7] = "UserAttrType_None";
    })(UserAttrType = api.UserAttrType || (api.UserAttrType = {}));
    let EnumSetFlag;
    (function (EnumSetFlag) {
        EnumSetFlag[EnumSetFlag["Flag_Set_User_Name"] = 1] = "Flag_Set_User_Name";
        EnumSetFlag[EnumSetFlag["Flag_Set_User_Sex"] = 2] = "Flag_Set_User_Sex";
        EnumSetFlag[EnumSetFlag["Flag_Set_User_Avatar"] = 4] = "Flag_Set_User_Avatar";
        EnumSetFlag[EnumSetFlag["Flag_Set_User_BigPic"] = 8] = "Flag_Set_User_BigPic";
        EnumSetFlag[EnumSetFlag["Flag_Set_User_Birthday"] = 16] = "Flag_Set_User_Birthday";
        EnumSetFlag[EnumSetFlag["Flag_Set_User_Zone"] = 32] = "Flag_Set_User_Zone";
    })(EnumSetFlag = api.EnumSetFlag || (api.EnumSetFlag = {}));
    let ListPhotoFrameReq = class ListPhotoFrameReq extends Message {
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
    ], ListPhotoFrameReq.prototype, "page", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ListPhotoFrameReq.prototype, "pageSize", void 0);
    ListPhotoFrameReq = __decorate([
        Type.d("Type_tss_user_api_proto_ListPhotoFrameReq")
    ], ListPhotoFrameReq);
    api.ListPhotoFrameReq = ListPhotoFrameReq;
    let ListPhotoFrameResp = class ListPhotoFrameResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.photos = [];
            this.totalSize = 0;
            if (param) {
                this.code = param.code;
                this.photos = param.photos;
                this.totalSize = param.totalSize;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ListPhotoFrameResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, user_common_user.PhotoFrame, "repeated")
    ], ListPhotoFrameResp.prototype, "photos", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], ListPhotoFrameResp.prototype, "totalSize", void 0);
    ListPhotoFrameResp = __decorate([
        Type.d("Type_tss_user_api_proto_ListPhotoFrameResp")
    ], ListPhotoFrameResp);
    api.ListPhotoFrameResp = ListPhotoFrameResp;
    let ListNicknameColorReq = class ListNicknameColorReq extends Message {
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
    ], ListNicknameColorReq.prototype, "page", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ListNicknameColorReq.prototype, "pageSize", void 0);
    ListNicknameColorReq = __decorate([
        Type.d("Type_tss_user_api_proto_ListNicknameColorReq")
    ], ListNicknameColorReq);
    api.ListNicknameColorReq = ListNicknameColorReq;
    let ListNicknameColorResp = class ListNicknameColorResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.colors = [];
            this.totalSize = 0;
            if (param) {
                this.code = param.code;
                this.colors = param.colors;
                this.totalSize = param.totalSize;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ListNicknameColorResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, user_common_user.NicknameColor, "repeated")
    ], ListNicknameColorResp.prototype, "colors", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], ListNicknameColorResp.prototype, "totalSize", void 0);
    ListNicknameColorResp = __decorate([
        Type.d("Type_tss_user_api_proto_ListNicknameColorResp")
    ], ListNicknameColorResp);
    api.ListNicknameColorResp = ListNicknameColorResp;
    let CompleteTaskAwardReq = class CompleteTaskAwardReq extends Message {
        constructor(param) {
            super();
            if (param) {
            }
        }
    };
    CompleteTaskAwardReq = __decorate([
        Type.d("Type_tss_user_api_proto_CompleteTaskAwardReq")
    ], CompleteTaskAwardReq);
    api.CompleteTaskAwardReq = CompleteTaskAwardReq;
    let CompleteTaskAwardResp = class CompleteTaskAwardResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.awardName = "";
            this.awardNum = 0;
            if (param) {
                this.code = param.code;
                this.awardName = param.awardName;
                this.awardNum = param.awardNum;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], CompleteTaskAwardResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], CompleteTaskAwardResp.prototype, "awardName", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], CompleteTaskAwardResp.prototype, "awardNum", void 0);
    CompleteTaskAwardResp = __decorate([
        Type.d("Type_tss_user_api_proto_CompleteTaskAwardResp")
    ], CompleteTaskAwardResp);
    api.CompleteTaskAwardResp = CompleteTaskAwardResp;
    let UploadAvatar = class UploadAvatar extends Message {
        constructor(param) {
            super();
            this.path = "";
            this.pic = "";
            this.thumb = "";
            if (param) {
                this.path = param.path;
                this.pic = param.pic;
                this.thumb = param.thumb;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], UploadAvatar.prototype, "path", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], UploadAvatar.prototype, "pic", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], UploadAvatar.prototype, "thumb", void 0);
    UploadAvatar = __decorate([
        Type.d("Type_tss_user_api_proto_UploadAvatar")
    ], UploadAvatar);
    api.UploadAvatar = UploadAvatar;
    let PicInfo = class PicInfo extends Message {
        constructor(param) {
            super();
            this.path = "";
            this.pic = "";
            this.thumbNail = "";
            if (param) {
                this.path = param.path;
                this.pic = param.pic;
                this.thumbNail = param.thumbNail;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], PicInfo.prototype, "path", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], PicInfo.prototype, "pic", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], PicInfo.prototype, "thumbNail", void 0);
    PicInfo = __decorate([
        Type.d("Type_tss_user_api_proto_PicInfo")
    ], PicInfo);
    api.PicInfo = PicInfo;
    let SetUserAccountReq = class SetUserAccountReq extends Message {
        constructor(param) {
            super();
            this.setFlag = 0;
            this.name = "";
            this.socialSex = 0;
            this.avatar = new UploadAvatar();
            this.bigPic = new PicInfo();
            this.socialAddr = 0;
            this.socialBirthday = "";
            if (param) {
                this.setFlag = param.setFlag;
                this.name = param.name;
                this.socialSex = param.socialSex;
                this.avatar = new UploadAvatar(param.avatar);
                this.bigPic = new PicInfo(param.bigPic);
                this.socialAddr = param.socialAddr;
                this.socialBirthday = param.socialBirthday;
            }
        }
    };
    __decorate([
        Field.d(1, EnumSetFlag, "required")
    ], SetUserAccountReq.prototype, "setFlag", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], SetUserAccountReq.prototype, "name", void 0);
    __decorate([
        Field.d(3, account_common_account.SexValue, "optional")
    ], SetUserAccountReq.prototype, "socialSex", void 0);
    __decorate([
        Field.d(4, UploadAvatar, "optional")
    ], SetUserAccountReq.prototype, "avatar", void 0);
    __decorate([
        Field.d(5, PicInfo, "optional")
    ], SetUserAccountReq.prototype, "bigPic", void 0);
    __decorate([
        Field.d(6, "int32", "optional")
    ], SetUserAccountReq.prototype, "socialAddr", void 0);
    __decorate([
        Field.d(7, "string", "optional")
    ], SetUserAccountReq.prototype, "socialBirthday", void 0);
    SetUserAccountReq = __decorate([
        Type.d("Type_tss_user_api_proto_SetUserAccountReq")
    ], SetUserAccountReq);
    api.SetUserAccountReq = SetUserAccountReq;
    let SetUserAccountResp = class SetUserAccountResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.task = new user_common_user.UserInfoCompleteTask();
            if (param) {
                this.code = param.code;
                this.task = new user_common_user.UserInfoCompleteTask(param.task);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], SetUserAccountResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, user_common_user.UserInfoCompleteTask, "optional")
    ], SetUserAccountResp.prototype, "task", void 0);
    SetUserAccountResp = __decorate([
        Type.d("Type_tss_user_api_proto_SetUserAccountResp")
    ], SetUserAccountResp);
    api.SetUserAccountResp = SetUserAccountResp;
    let GetUserInfoReq = class GetUserInfoReq extends Message {
        constructor(param) {
            super();
            this.uids = [];
            if (param) {
                this.uids = param.uids;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "repeated")
    ], GetUserInfoReq.prototype, "uids", void 0);
    GetUserInfoReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetUserInfoReq")
    ], GetUserInfoReq);
    api.GetUserInfoReq = GetUserInfoReq;
    let BaseInfo = class BaseInfo extends Message {
        constructor(param) {
            super();
            this.sex = 0;
            this.name = "";
            this.avatar = "";
            this.bigpic = "";
            this.modTime = 0;
            this.socialAddr = 0;
            this.birthday = "";
            if (param) {
                this.sex = param.sex;
                this.name = param.name;
                this.avatar = param.avatar;
                this.bigpic = param.bigpic;
                this.modTime = param.modTime;
                this.socialAddr = param.socialAddr;
                this.birthday = param.birthday;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], BaseInfo.prototype, "sex", void 0);
    __decorate([
        Field.d(2, "string", "required")
    ], BaseInfo.prototype, "name", void 0);
    __decorate([
        Field.d(3, "string", "required")
    ], BaseInfo.prototype, "avatar", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], BaseInfo.prototype, "bigpic", void 0);
    __decorate([
        Field.d(8, "int64", "optional")
    ], BaseInfo.prototype, "modTime", void 0);
    __decorate([
        Field.d(9, "int32", "optional")
    ], BaseInfo.prototype, "socialAddr", void 0);
    __decorate([
        Field.d(10, "string", "optional")
    ], BaseInfo.prototype, "birthday", void 0);
    BaseInfo = __decorate([
        Type.d("Type_tss_user_api_proto_BaseInfo")
    ], BaseInfo);
    api.BaseInfo = BaseInfo;
    let VipInfo = class VipInfo extends Message {
        constructor(param) {
            super();
            this.status = 0;
            this.expirationAt = 0;
            this.level = 0;
            if (param) {
                this.status = param.status;
                this.expirationAt = param.expirationAt;
                this.level = param.level;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], VipInfo.prototype, "status", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], VipInfo.prototype, "expirationAt", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], VipInfo.prototype, "level", void 0);
    VipInfo = __decorate([
        Type.d("Type_tss_user_api_proto_VipInfo")
    ], VipInfo);
    api.VipInfo = VipInfo;
    let TagInfo = class TagInfo extends Message {
        constructor(param) {
            super();
            this.tagName = "";
            this.tagTitle = "";
            if (param) {
                this.tagName = param.tagName;
                this.tagTitle = param.tagTitle;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], TagInfo.prototype, "tagName", void 0);
    __decorate([
        Field.d(2, "string", "required")
    ], TagInfo.prototype, "tagTitle", void 0);
    TagInfo = __decorate([
        Type.d("Type_tss_user_api_proto_TagInfo")
    ], TagInfo);
    api.TagInfo = TagInfo;
    let UserInfo = class UserInfo extends Message {
        constructor(param) {
            super();
            this.uID = 0;
            this.base = new BaseInfo();
            this.vip = new VipInfo();
            this.fansNum = 0;
            this.followNum = 0;
            this.friendNum = 0;
            this.tag = new TagInfo();
            this.commonFriendNum = 0;
            this.photoFrameImage = "";
            this.nicknameColorValue = "";
            this.task = new user_common_user.UserInfoCompleteTask();
            if (param) {
                this.uID = param.uID;
                this.base = new BaseInfo(param.base);
                this.vip = new VipInfo(param.vip);
                this.fansNum = param.fansNum;
                this.followNum = param.followNum;
                this.friendNum = param.friendNum;
                this.tag = new TagInfo(param.tag);
                this.commonFriendNum = param.commonFriendNum;
                this.photoFrameImage = param.photoFrameImage;
                this.nicknameColorValue = param.nicknameColorValue;
                this.task = new user_common_user.UserInfoCompleteTask(param.task);
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], UserInfo.prototype, "uID", void 0);
    __decorate([
        Field.d(2, BaseInfo, "required")
    ], UserInfo.prototype, "base", void 0);
    __decorate([
        Field.d(3, VipInfo, "optional")
    ], UserInfo.prototype, "vip", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], UserInfo.prototype, "fansNum", void 0);
    __decorate([
        Field.d(5, "int32", "optional")
    ], UserInfo.prototype, "followNum", void 0);
    __decorate([
        Field.d(6, "int32", "optional")
    ], UserInfo.prototype, "friendNum", void 0);
    __decorate([
        Field.d(8, TagInfo, "optional")
    ], UserInfo.prototype, "tag", void 0);
    __decorate([
        Field.d(9, "int32", "optional")
    ], UserInfo.prototype, "commonFriendNum", void 0);
    __decorate([
        Field.d(10, "string", "optional")
    ], UserInfo.prototype, "photoFrameImage", void 0);
    __decorate([
        Field.d(11, "string", "optional")
    ], UserInfo.prototype, "nicknameColorValue", void 0);
    __decorate([
        Field.d(12, user_common_user.UserInfoCompleteTask, "optional")
    ], UserInfo.prototype, "task", void 0);
    UserInfo = __decorate([
        Type.d("Type_tss_user_api_proto_UserInfo")
    ], UserInfo);
    api.UserInfo = UserInfo;
    let GetUserInfoResp = class GetUserInfoResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.infos = [];
            if (param) {
                this.code = param.code;
                this.infos = param.infos;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetUserInfoResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, UserInfo, "repeated")
    ], GetUserInfoResp.prototype, "infos", void 0);
    GetUserInfoResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetUserInfoResp")
    ], GetUserInfoResp);
    api.GetUserInfoResp = GetUserInfoResp;
    let UsertagInfo = class UsertagInfo extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.tags = [];
            if (param) {
                this.uid = param.uid;
                this.tags = param.tags;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], UsertagInfo.prototype, "uid", void 0);
    __decorate([
        Field.d(2, TagInfo, "repeated")
    ], UsertagInfo.prototype, "tags", void 0);
    UsertagInfo = __decorate([
        Type.d("Type_tss_user_api_proto_UsertagInfo")
    ], UsertagInfo);
    api.UsertagInfo = UsertagInfo;
    let GetUserLineStateReq = class GetUserLineStateReq extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            if (param) {
                this.uid = param.uid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], GetUserLineStateReq.prototype, "uid", void 0);
    GetUserLineStateReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetUserLineStateReq")
    ], GetUserLineStateReq);
    api.GetUserLineStateReq = GetUserLineStateReq;
    let GetUserLineStateResp = class GetUserLineStateResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.state = 0;
            this.gameID = "";
            if (param) {
                this.code = param.code;
                this.state = param.state;
                this.gameID = param.gameID;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetUserLineStateResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int32", "required")
    ], GetUserLineStateResp.prototype, "state", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], GetUserLineStateResp.prototype, "gameID", void 0);
    GetUserLineStateResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetUserLineStateResp")
    ], GetUserLineStateResp);
    api.GetUserLineStateResp = GetUserLineStateResp;
    let FollowUserReq = class FollowUserReq extends Message {
        constructor(param) {
            super();
            this.fuid = 0;
            this.tuid = 0;
            if (param) {
                this.fuid = param.fuid;
                this.tuid = param.tuid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], FollowUserReq.prototype, "fuid", void 0);
    __decorate([
        Field.d(2, "int64", "required")
    ], FollowUserReq.prototype, "tuid", void 0);
    FollowUserReq = __decorate([
        Type.d("Type_tss_user_api_proto_FollowUserReq")
    ], FollowUserReq);
    api.FollowUserReq = FollowUserReq;
    let FollowUserResp = class FollowUserResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], FollowUserResp.prototype, "code", void 0);
    FollowUserResp = __decorate([
        Type.d("Type_tss_user_api_proto_FollowUserResp")
    ], FollowUserResp);
    api.FollowUserResp = FollowUserResp;
    let CancelFollowUserReq = class CancelFollowUserReq extends Message {
        constructor(param) {
            super();
            this.fuid = 0;
            this.tuid = 0;
            if (param) {
                this.fuid = param.fuid;
                this.tuid = param.tuid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], CancelFollowUserReq.prototype, "fuid", void 0);
    __decorate([
        Field.d(2, "int64", "required")
    ], CancelFollowUserReq.prototype, "tuid", void 0);
    CancelFollowUserReq = __decorate([
        Type.d("Type_tss_user_api_proto_CancelFollowUserReq")
    ], CancelFollowUserReq);
    api.CancelFollowUserReq = CancelFollowUserReq;
    let CancelFollowUserResp = class CancelFollowUserResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], CancelFollowUserResp.prototype, "code", void 0);
    CancelFollowUserResp = __decorate([
        Type.d("Type_tss_user_api_proto_CancelFollowUserResp")
    ], CancelFollowUserResp);
    api.CancelFollowUserResp = CancelFollowUserResp;
    let GetAllRelationDetailReq = class GetAllRelationDetailReq extends Message {
        constructor(param) {
            super();
            this.fuid = 0;
            this.tuid = 0;
            if (param) {
                this.fuid = param.fuid;
                this.tuid = param.tuid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], GetAllRelationDetailReq.prototype, "fuid", void 0);
    __decorate([
        Field.d(2, "int64", "required")
    ], GetAllRelationDetailReq.prototype, "tuid", void 0);
    GetAllRelationDetailReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetAllRelationDetailReq")
    ], GetAllRelationDetailReq);
    api.GetAllRelationDetailReq = GetAllRelationDetailReq;
    let RelationDetailInfo = class RelationDetailInfo extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.isFriend = false;
            this.isBlack = false;
            this.isFollow = false;
            this.isFans = false;
            this.isBlock = false;
            this.isFeedBlock = false;
            this.followNum = 0;
            this.fansNum = 0;
            if (param) {
                this.uid = param.uid;
                this.isFriend = param.isFriend;
                this.isBlack = param.isBlack;
                this.isFollow = param.isFollow;
                this.isFans = param.isFans;
                this.isBlock = param.isBlock;
                this.isFeedBlock = param.isFeedBlock;
                this.followNum = param.followNum;
                this.fansNum = param.fansNum;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], RelationDetailInfo.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "bool", "optional")
    ], RelationDetailInfo.prototype, "isFriend", void 0);
    __decorate([
        Field.d(3, "bool", "optional")
    ], RelationDetailInfo.prototype, "isBlack", void 0);
    __decorate([
        Field.d(4, "bool", "optional")
    ], RelationDetailInfo.prototype, "isFollow", void 0);
    __decorate([
        Field.d(5, "bool", "optional")
    ], RelationDetailInfo.prototype, "isFans", void 0);
    __decorate([
        Field.d(6, "bool", "optional")
    ], RelationDetailInfo.prototype, "isBlock", void 0);
    __decorate([
        Field.d(7, "bool", "optional")
    ], RelationDetailInfo.prototype, "isFeedBlock", void 0);
    __decorate([
        Field.d(8, "int32", "optional")
    ], RelationDetailInfo.prototype, "followNum", void 0);
    __decorate([
        Field.d(9, "int32", "optional")
    ], RelationDetailInfo.prototype, "fansNum", void 0);
    RelationDetailInfo = __decorate([
        Type.d("Type_tss_user_api_proto_RelationDetailInfo")
    ], RelationDetailInfo);
    api.RelationDetailInfo = RelationDetailInfo;
    let GetAllRelationDetailResp = class GetAllRelationDetailResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.ret = new RelationDetailInfo();
            if (param) {
                this.code = param.code;
                this.ret = new RelationDetailInfo(param.ret);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetAllRelationDetailResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, RelationDetailInfo, "required")
    ], GetAllRelationDetailResp.prototype, "ret", void 0);
    GetAllRelationDetailResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetAllRelationDetailResp")
    ], GetAllRelationDetailResp);
    api.GetAllRelationDetailResp = GetAllRelationDetailResp;
    let GetFansListReq = class GetFansListReq extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.pg = 0;
            this.pgSize = 0;
            this.fuid = 0;
            if (param) {
                this.uid = param.uid;
                this.pg = param.pg;
                this.pgSize = param.pgSize;
                this.fuid = param.fuid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], GetFansListReq.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "int32", "required")
    ], GetFansListReq.prototype, "pg", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetFansListReq.prototype, "pgSize", void 0);
    __decorate([
        Field.d(4, "int64", "required")
    ], GetFansListReq.prototype, "fuid", void 0);
    GetFansListReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetFansListReq")
    ], GetFansListReq);
    api.GetFansListReq = GetFansListReq;
    let GetFansListResp = class GetFansListResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.userInfos = [];
            this.cnt = 0;
            this.relationInfos = [];
            if (param) {
                this.code = param.code;
                this.userInfos = param.userInfos;
                this.cnt = param.cnt;
                this.relationInfos = param.relationInfos;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetFansListResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, UserInfo, "repeated")
    ], GetFansListResp.prototype, "userInfos", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetFansListResp.prototype, "cnt", void 0);
    __decorate([
        Field.d(4, RelationDetailInfo, "repeated")
    ], GetFansListResp.prototype, "relationInfos", void 0);
    GetFansListResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetFansListResp")
    ], GetFansListResp);
    api.GetFansListResp = GetFansListResp;
    let GetFollowListReq = class GetFollowListReq extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.pg = 0;
            this.pgSize = 0;
            this.fuid = 0;
            if (param) {
                this.uid = param.uid;
                this.pg = param.pg;
                this.pgSize = param.pgSize;
                this.fuid = param.fuid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], GetFollowListReq.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "int32", "required")
    ], GetFollowListReq.prototype, "pg", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetFollowListReq.prototype, "pgSize", void 0);
    __decorate([
        Field.d(4, "int64", "required")
    ], GetFollowListReq.prototype, "fuid", void 0);
    GetFollowListReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetFollowListReq")
    ], GetFollowListReq);
    api.GetFollowListReq = GetFollowListReq;
    let GetFollowListResp = class GetFollowListResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.userInfos = [];
            this.cnt = 0;
            this.relationInfos = [];
            if (param) {
                this.code = param.code;
                this.userInfos = param.userInfos;
                this.cnt = param.cnt;
                this.relationInfos = param.relationInfos;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetFollowListResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, UserInfo, "repeated")
    ], GetFollowListResp.prototype, "userInfos", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetFollowListResp.prototype, "cnt", void 0);
    __decorate([
        Field.d(4, RelationDetailInfo, "repeated")
    ], GetFollowListResp.prototype, "relationInfos", void 0);
    GetFollowListResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetFollowListResp")
    ], GetFollowListResp);
    api.GetFollowListResp = GetFollowListResp;
    let GetCommonFriendReq = class GetCommonFriendReq extends Message {
        constructor(param) {
            super();
            this.fuid = 0;
            this.tuid = 0;
            this.offset = 0;
            this.limit = 0;
            if (param) {
                this.fuid = param.fuid;
                this.tuid = param.tuid;
                this.offset = param.offset;
                this.limit = param.limit;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], GetCommonFriendReq.prototype, "fuid", void 0);
    __decorate([
        Field.d(2, "int64", "required")
    ], GetCommonFriendReq.prototype, "tuid", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetCommonFriendReq.prototype, "offset", void 0);
    __decorate([
        Field.d(4, "int32", "required")
    ], GetCommonFriendReq.prototype, "limit", void 0);
    GetCommonFriendReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetCommonFriendReq")
    ], GetCommonFriendReq);
    api.GetCommonFriendReq = GetCommonFriendReq;
    let GetCommonFriendResp = class GetCommonFriendResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.userInfos = [];
            this.cnt = 0;
            if (param) {
                this.code = param.code;
                this.userInfos = param.userInfos;
                this.cnt = param.cnt;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetCommonFriendResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, UserInfo, "repeated")
    ], GetCommonFriendResp.prototype, "userInfos", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetCommonFriendResp.prototype, "cnt", void 0);
    GetCommonFriendResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetCommonFriendResp")
    ], GetCommonFriendResp);
    api.GetCommonFriendResp = GetCommonFriendResp;
    let GetUidsAllRelationDetailReq = class GetUidsAllRelationDetailReq extends Message {
        constructor(param) {
            super();
            this.fuid = 0;
            this.tuids = [];
            if (param) {
                this.fuid = param.fuid;
                this.tuids = param.tuids;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], GetUidsAllRelationDetailReq.prototype, "fuid", void 0);
    __decorate([
        Field.d(2, "int64", "repeated")
    ], GetUidsAllRelationDetailReq.prototype, "tuids", void 0);
    GetUidsAllRelationDetailReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetUidsAllRelationDetailReq")
    ], GetUidsAllRelationDetailReq);
    api.GetUidsAllRelationDetailReq = GetUidsAllRelationDetailReq;
    let GetUidsAllRelationDetailResp = class GetUidsAllRelationDetailResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.infos = [];
            if (param) {
                this.code = param.code;
                this.infos = param.infos;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetUidsAllRelationDetailResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, RelationDetailInfo, "repeated")
    ], GetUidsAllRelationDetailResp.prototype, "infos", void 0);
    GetUidsAllRelationDetailResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetUidsAllRelationDetailResp")
    ], GetUidsAllRelationDetailResp);
    api.GetUidsAllRelationDetailResp = GetUidsAllRelationDetailResp;
    let GetCommonFollowReq = class GetCommonFollowReq extends Message {
        constructor(param) {
            super();
            this.fuid = 0;
            this.tuid = 0;
            this.offset = 0;
            this.limit = 0;
            if (param) {
                this.fuid = param.fuid;
                this.tuid = param.tuid;
                this.offset = param.offset;
                this.limit = param.limit;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], GetCommonFollowReq.prototype, "fuid", void 0);
    __decorate([
        Field.d(2, "int64", "required")
    ], GetCommonFollowReq.prototype, "tuid", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetCommonFollowReq.prototype, "offset", void 0);
    __decorate([
        Field.d(4, "int32", "required")
    ], GetCommonFollowReq.prototype, "limit", void 0);
    GetCommonFollowReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetCommonFollowReq")
    ], GetCommonFollowReq);
    api.GetCommonFollowReq = GetCommonFollowReq;
    let GetCommonFollowResp = class GetCommonFollowResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.userInfos = [];
            this.cnt = 0;
            if (param) {
                this.code = param.code;
                this.userInfos = param.userInfos;
                this.cnt = param.cnt;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetCommonFollowResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, UserInfo, "repeated")
    ], GetCommonFollowResp.prototype, "userInfos", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetCommonFollowResp.prototype, "cnt", void 0);
    GetCommonFollowResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetCommonFollowResp")
    ], GetCommonFollowResp);
    api.GetCommonFollowResp = GetCommonFollowResp;
    let GetFriendListReq = class GetFriendListReq extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.pg = 0;
            this.pgSize = 0;
            if (param) {
                this.uid = param.uid;
                this.pg = param.pg;
                this.pgSize = param.pgSize;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], GetFriendListReq.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "int32", "required")
    ], GetFriendListReq.prototype, "pg", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetFriendListReq.prototype, "pgSize", void 0);
    GetFriendListReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetFriendListReq")
    ], GetFriendListReq);
    api.GetFriendListReq = GetFriendListReq;
    let GetFriendListResp = class GetFriendListResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.userInfos = [];
            this.cnt = 0;
            if (param) {
                this.code = param.code;
                this.userInfos = param.userInfos;
                this.cnt = param.cnt;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetFriendListResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, UserInfo, "repeated")
    ], GetFriendListResp.prototype, "userInfos", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetFriendListResp.prototype, "cnt", void 0);
    GetFriendListResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetFriendListResp")
    ], GetFriendListResp);
    api.GetFriendListResp = GetFriendListResp;
    let GetMutualFollowListReq = class GetMutualFollowListReq extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.offset = 0;
            this.limit = 0;
            if (param) {
                this.uid = param.uid;
                this.offset = param.offset;
                this.limit = param.limit;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], GetMutualFollowListReq.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "int32", "required")
    ], GetMutualFollowListReq.prototype, "offset", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetMutualFollowListReq.prototype, "limit", void 0);
    GetMutualFollowListReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetMutualFollowListReq")
    ], GetMutualFollowListReq);
    api.GetMutualFollowListReq = GetMutualFollowListReq;
    let GetMutualFollowListResp = class GetMutualFollowListResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.userInfos = [];
            this.cnt = 0;
            if (param) {
                this.code = param.code;
                this.userInfos = param.userInfos;
                this.cnt = param.cnt;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetMutualFollowListResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, UserInfo, "repeated")
    ], GetMutualFollowListResp.prototype, "userInfos", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetMutualFollowListResp.prototype, "cnt", void 0);
    GetMutualFollowListResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetMutualFollowListResp")
    ], GetMutualFollowListResp);
    api.GetMutualFollowListResp = GetMutualFollowListResp;
    let SearchUserReq = class SearchUserReq extends Message {
        constructor(param) {
            super();
            this.keyword = "";
            if (param) {
                this.keyword = param.keyword;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], SearchUserReq.prototype, "keyword", void 0);
    SearchUserReq = __decorate([
        Type.d("Type_tss_user_api_proto_SearchUserReq")
    ], SearchUserReq);
    api.SearchUserReq = SearchUserReq;
    let SearchUserResp = class SearchUserResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.uid = 0;
            if (param) {
                this.code = param.code;
                this.uid = param.uid;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], SearchUserResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], SearchUserResp.prototype, "uid", void 0);
    SearchUserResp = __decorate([
        Type.d("Type_tss_user_api_proto_SearchUserResp")
    ], SearchUserResp);
    api.SearchUserResp = SearchUserResp;
    let GetRecommendedUserReq = class GetRecommendedUserReq extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.page = 0;
            this.pageSize = 0;
            if (param) {
                this.uid = param.uid;
                this.page = param.page;
                this.pageSize = param.pageSize;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], GetRecommendedUserReq.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "int32", "required")
    ], GetRecommendedUserReq.prototype, "page", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], GetRecommendedUserReq.prototype, "pageSize", void 0);
    GetRecommendedUserReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetRecommendedUserReq")
    ], GetRecommendedUserReq);
    api.GetRecommendedUserReq = GetRecommendedUserReq;
    let GetRecommendedUserResp = class GetRecommendedUserResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.infos = [];
            if (param) {
                this.code = param.code;
                this.infos = param.infos;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetRecommendedUserResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, UserInfo, "repeated")
    ], GetRecommendedUserResp.prototype, "infos", void 0);
    GetRecommendedUserResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetRecommendedUserResp")
    ], GetRecommendedUserResp);
    api.GetRecommendedUserResp = GetRecommendedUserResp;
    let UserLineInfo = class UserLineInfo extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.state = 0;
            this.gameID = "";
            if (param) {
                this.uid = param.uid;
                this.state = param.state;
                this.gameID = param.gameID;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], UserLineInfo.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "int32", "required")
    ], UserLineInfo.prototype, "state", void 0);
    __decorate([
        Field.d(3, "string", "required")
    ], UserLineInfo.prototype, "gameID", void 0);
    UserLineInfo = __decorate([
        Type.d("Type_tss_user_api_proto_UserLineInfo")
    ], UserLineInfo);
    api.UserLineInfo = UserLineInfo;
    let GetBatchUserLineStateReq = class GetBatchUserLineStateReq extends Message {
        constructor(param) {
            super();
            this.uids = [];
            if (param) {
                this.uids = param.uids;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "repeated")
    ], GetBatchUserLineStateReq.prototype, "uids", void 0);
    GetBatchUserLineStateReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetBatchUserLineStateReq")
    ], GetBatchUserLineStateReq);
    api.GetBatchUserLineStateReq = GetBatchUserLineStateReq;
    let GetBatchUserLineStateResp = class GetBatchUserLineStateResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.infos = [];
            if (param) {
                this.code = param.code;
                this.infos = param.infos;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetBatchUserLineStateResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, UserLineInfo, "repeated")
    ], GetBatchUserLineStateResp.prototype, "infos", void 0);
    GetBatchUserLineStateResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetBatchUserLineStateResp")
    ], GetBatchUserLineStateResp);
    api.GetBatchUserLineStateResp = GetBatchUserLineStateResp;
    let ShippingAddr = class ShippingAddr extends Message {
        constructor(param) {
            super();
            this.ID = "";
            this.UID = 0;
            this.receiver = "";
            this.contactNumber = "";
            this.province = "";
            this.city = "";
            this.region = "";
            this.addr = "";
            this.default = 0;
            if (param) {
                this.ID = param.ID;
                this.UID = param.UID;
                this.receiver = param.receiver;
                this.contactNumber = param.contactNumber;
                this.province = param.province;
                this.city = param.city;
                this.region = param.region;
                this.addr = param.addr;
                this.default = param.default;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], ShippingAddr.prototype, "ID", void 0);
    __decorate([
        Field.d(2, "int64", "required")
    ], ShippingAddr.prototype, "UID", void 0);
    __decorate([
        Field.d(3, "string", "required")
    ], ShippingAddr.prototype, "receiver", void 0);
    __decorate([
        Field.d(4, "string", "required")
    ], ShippingAddr.prototype, "contactNumber", void 0);
    __decorate([
        Field.d(5, "string", "required")
    ], ShippingAddr.prototype, "province", void 0);
    __decorate([
        Field.d(6, "string", "required")
    ], ShippingAddr.prototype, "city", void 0);
    __decorate([
        Field.d(7, "string", "required")
    ], ShippingAddr.prototype, "region", void 0);
    __decorate([
        Field.d(8, "string", "required")
    ], ShippingAddr.prototype, "addr", void 0);
    __decorate([
        Field.d(9, "int32", "required")
    ], ShippingAddr.prototype, "default", void 0);
    ShippingAddr = __decorate([
        Type.d("Type_tss_user_api_proto_ShippingAddr")
    ], ShippingAddr);
    api.ShippingAddr = ShippingAddr;
    let FieldMask = class FieldMask extends Message {
        constructor(param) {
            super();
            this.paths = [];
            if (param) {
                this.paths = param.paths;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "repeated")
    ], FieldMask.prototype, "paths", void 0);
    FieldMask = __decorate([
        Type.d("Type_tss_user_api_proto_FieldMask")
    ], FieldMask);
    api.FieldMask = FieldMask;
    let GetShippingAddrReq = class GetShippingAddrReq extends Message {
        constructor(param) {
            super();
            this.ID = "";
            if (param) {
                this.ID = param.ID;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], GetShippingAddrReq.prototype, "ID", void 0);
    GetShippingAddrReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetShippingAddrReq")
    ], GetShippingAddrReq);
    api.GetShippingAddrReq = GetShippingAddrReq;
    let GetShippingAddrResp = class GetShippingAddrResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.info = new ShippingAddr();
            if (param) {
                this.code = param.code;
                this.info = new ShippingAddr(param.info);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetShippingAddrResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, ShippingAddr, "required")
    ], GetShippingAddrResp.prototype, "info", void 0);
    GetShippingAddrResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetShippingAddrResp")
    ], GetShippingAddrResp);
    api.GetShippingAddrResp = GetShippingAddrResp;
    let ListShippingAddrReq = class ListShippingAddrReq extends Message {
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
        Field.d(2, "int32", "required")
    ], ListShippingAddrReq.prototype, "page", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], ListShippingAddrReq.prototype, "pageSize", void 0);
    ListShippingAddrReq = __decorate([
        Type.d("Type_tss_user_api_proto_ListShippingAddrReq")
    ], ListShippingAddrReq);
    api.ListShippingAddrReq = ListShippingAddrReq;
    let ListShippingAddrResp = class ListShippingAddrResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.infos = [];
            this.total = 0;
            if (param) {
                this.code = param.code;
                this.infos = param.infos;
                this.total = param.total;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], ListShippingAddrResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, ShippingAddr, "repeated")
    ], ListShippingAddrResp.prototype, "infos", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], ListShippingAddrResp.prototype, "total", void 0);
    ListShippingAddrResp = __decorate([
        Type.d("Type_tss_user_api_proto_ListShippingAddrResp")
    ], ListShippingAddrResp);
    api.ListShippingAddrResp = ListShippingAddrResp;
    let CreateShippingAddrReq = class CreateShippingAddrReq extends Message {
        constructor(param) {
            super();
            this.info = new ShippingAddr();
            if (param) {
                this.info = new ShippingAddr(param.info);
            }
        }
    };
    __decorate([
        Field.d(1, ShippingAddr, "required")
    ], CreateShippingAddrReq.prototype, "info", void 0);
    CreateShippingAddrReq = __decorate([
        Type.d("Type_tss_user_api_proto_CreateShippingAddrReq")
    ], CreateShippingAddrReq);
    api.CreateShippingAddrReq = CreateShippingAddrReq;
    let CreateShippingAddrResp = class CreateShippingAddrResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.info = new ShippingAddr();
            if (param) {
                this.code = param.code;
                this.info = new ShippingAddr(param.info);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], CreateShippingAddrResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, ShippingAddr, "required")
    ], CreateShippingAddrResp.prototype, "info", void 0);
    CreateShippingAddrResp = __decorate([
        Type.d("Type_tss_user_api_proto_CreateShippingAddrResp")
    ], CreateShippingAddrResp);
    api.CreateShippingAddrResp = CreateShippingAddrResp;
    let UpdateShippingAddrReq = class UpdateShippingAddrReq extends Message {
        constructor(param) {
            super();
            this.info = new ShippingAddr();
            this.updateMask = new FieldMask();
            if (param) {
                this.info = new ShippingAddr(param.info);
                this.updateMask = new FieldMask(param.updateMask);
            }
        }
    };
    __decorate([
        Field.d(1, ShippingAddr, "required")
    ], UpdateShippingAddrReq.prototype, "info", void 0);
    __decorate([
        Field.d(2, FieldMask, "required")
    ], UpdateShippingAddrReq.prototype, "updateMask", void 0);
    UpdateShippingAddrReq = __decorate([
        Type.d("Type_tss_user_api_proto_UpdateShippingAddrReq")
    ], UpdateShippingAddrReq);
    api.UpdateShippingAddrReq = UpdateShippingAddrReq;
    let UpdateShippingAddrResp = class UpdateShippingAddrResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.info = new ShippingAddr();
            if (param) {
                this.code = param.code;
                this.info = new ShippingAddr(param.info);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], UpdateShippingAddrResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, ShippingAddr, "required")
    ], UpdateShippingAddrResp.prototype, "info", void 0);
    UpdateShippingAddrResp = __decorate([
        Type.d("Type_tss_user_api_proto_UpdateShippingAddrResp")
    ], UpdateShippingAddrResp);
    api.UpdateShippingAddrResp = UpdateShippingAddrResp;
    let DeleteShippingAddrReq = class DeleteShippingAddrReq extends Message {
        constructor(param) {
            super();
            this.ID = "";
            if (param) {
                this.ID = param.ID;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], DeleteShippingAddrReq.prototype, "ID", void 0);
    DeleteShippingAddrReq = __decorate([
        Type.d("Type_tss_user_api_proto_DeleteShippingAddrReq")
    ], DeleteShippingAddrReq);
    api.DeleteShippingAddrReq = DeleteShippingAddrReq;
    let DeleteShippingAddrResp = class DeleteShippingAddrResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], DeleteShippingAddrResp.prototype, "code", void 0);
    DeleteShippingAddrResp = __decorate([
        Type.d("Type_tss_user_api_proto_DeleteShippingAddrResp")
    ], DeleteShippingAddrResp);
    api.DeleteShippingAddrResp = DeleteShippingAddrResp;
    let BatchGetUserGameTagReq = class BatchGetUserGameTagReq extends Message {
        constructor(param) {
            super();
            this.gameID = "";
            this.uIDs = [];
            if (param) {
                this.gameID = param.gameID;
                this.uIDs = param.uIDs;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], BatchGetUserGameTagReq.prototype, "gameID", void 0);
    __decorate([
        Field.d(2, "int64", "repeated")
    ], BatchGetUserGameTagReq.prototype, "uIDs", void 0);
    BatchGetUserGameTagReq = __decorate([
        Type.d("Type_tss_user_api_proto_BatchGetUserGameTagReq")
    ], BatchGetUserGameTagReq);
    api.BatchGetUserGameTagReq = BatchGetUserGameTagReq;
    let BatchGetUserGameTagResp = class BatchGetUserGameTagResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.infos = [];
            if (param) {
                this.code = param.code;
                this.infos = param.infos;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], BatchGetUserGameTagResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, UsertagInfo, "repeated")
    ], BatchGetUserGameTagResp.prototype, "infos", void 0);
    BatchGetUserGameTagResp = __decorate([
        Type.d("Type_tss_user_api_proto_BatchGetUserGameTagResp")
    ], BatchGetUserGameTagResp);
    api.BatchGetUserGameTagResp = BatchGetUserGameTagResp;
    let ListNearStrangerReq = class ListNearStrangerReq extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.Latitude = 0;
            this.Longitude = 0;
            this.distance = 0;
            this.page = 0;
            this.pageSize = 0;
            if (param) {
                this.uid = param.uid;
                this.Latitude = param.Latitude;
                this.Longitude = param.Longitude;
                this.distance = param.distance;
                this.page = param.page;
                this.pageSize = param.pageSize;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], ListNearStrangerReq.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "float", "required")
    ], ListNearStrangerReq.prototype, "Latitude", void 0);
    __decorate([
        Field.d(3, "float", "required")
    ], ListNearStrangerReq.prototype, "Longitude", void 0);
    __decorate([
        Field.d(4, "int32", "required")
    ], ListNearStrangerReq.prototype, "distance", void 0);
    __decorate([
        Field.d(5, "int32", "required")
    ], ListNearStrangerReq.prototype, "page", void 0);
    __decorate([
        Field.d(6, "int32", "required")
    ], ListNearStrangerReq.prototype, "pageSize", void 0);
    ListNearStrangerReq = __decorate([
        Type.d("Type_tss_user_api_proto_ListNearStrangerReq")
    ], ListNearStrangerReq);
    api.ListNearStrangerReq = ListNearStrangerReq;
    let UserLocInfo = class UserLocInfo extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.Latitude = 0;
            this.Longitude = 0;
            this.distance = 0;
            if (param) {
                this.uid = param.uid;
                this.Latitude = param.Latitude;
                this.Longitude = param.Longitude;
                this.distance = param.distance;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], UserLocInfo.prototype, "uid", void 0);
    __decorate([
        Field.d(2, "float", "required")
    ], UserLocInfo.prototype, "Latitude", void 0);
    __decorate([
        Field.d(3, "float", "required")
    ], UserLocInfo.prototype, "Longitude", void 0);
    __decorate([
        Field.d(4, "int32", "optional")
    ], UserLocInfo.prototype, "distance", void 0);
    UserLocInfo = __decorate([
        Type.d("Type_tss_user_api_proto_UserLocInfo")
    ], UserLocInfo);
    api.UserLocInfo = UserLocInfo;
    let ListNearStrangerResp = class ListNearStrangerResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.infos = [];
            this.total = 0;
            if (param) {
                this.code = param.code;
                this.infos = param.infos;
                this.total = param.total;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], ListNearStrangerResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, UserLocInfo, "repeated")
    ], ListNearStrangerResp.prototype, "infos", void 0);
    __decorate([
        Field.d(3, "int32", "required")
    ], ListNearStrangerResp.prototype, "total", void 0);
    ListNearStrangerResp = __decorate([
        Type.d("Type_tss_user_api_proto_ListNearStrangerResp")
    ], ListNearStrangerResp);
    api.ListNearStrangerResp = ListNearStrangerResp;
    let GetUserTagCmmFriendCntReq = class GetUserTagCmmFriendCntReq extends Message {
        constructor(param) {
            super();
            this.UIDs = [];
            if (param) {
                this.UIDs = param.UIDs;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "repeated")
    ], GetUserTagCmmFriendCntReq.prototype, "UIDs", void 0);
    GetUserTagCmmFriendCntReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetUserTagCmmFriendCntReq")
    ], GetUserTagCmmFriendCntReq);
    api.GetUserTagCmmFriendCntReq = GetUserTagCmmFriendCntReq;
    let GetUserTagCmmFriendCntResp = class GetUserTagCmmFriendCntResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.userInfos = [];
            if (param) {
                this.code = param.code;
                this.userInfos = param.userInfos;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetUserTagCmmFriendCntResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, UserInfo, "repeated")
    ], GetUserTagCmmFriendCntResp.prototype, "userInfos", void 0);
    GetUserTagCmmFriendCntResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetUserTagCmmFriendCntResp")
    ], GetUserTagCmmFriendCntResp);
    api.GetUserTagCmmFriendCntResp = GetUserTagCmmFriendCntResp;
    let GetBeFriendTimeReq = class GetBeFriendTimeReq extends Message {
        constructor(param) {
            super();
            this.UidA = 0;
            this.UidB = 0;
            if (param) {
                this.UidA = param.UidA;
                this.UidB = param.UidB;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "required")
    ], GetBeFriendTimeReq.prototype, "UidA", void 0);
    __decorate([
        Field.d(2, "int64", "required")
    ], GetBeFriendTimeReq.prototype, "UidB", void 0);
    GetBeFriendTimeReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetBeFriendTimeReq")
    ], GetBeFriendTimeReq);
    api.GetBeFriendTimeReq = GetBeFriendTimeReq;
    let GetBeFriendTimeResp = class GetBeFriendTimeResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.time = 0;
            if (param) {
                this.code = param.code;
                this.time = param.time;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "required")
    ], GetBeFriendTimeResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "int64", "required")
    ], GetBeFriendTimeResp.prototype, "time", void 0);
    GetBeFriendTimeResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetBeFriendTimeResp")
    ], GetBeFriendTimeResp);
    api.GetBeFriendTimeResp = GetBeFriendTimeResp;
    let SetUserChatWallPaperReq = class SetUserChatWallPaperReq extends Message {
        constructor(param) {
            super();
            this.id = 0;
            if (param) {
                this.id = param.id;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], SetUserChatWallPaperReq.prototype, "id", void 0);
    SetUserChatWallPaperReq = __decorate([
        Type.d("Type_tss_user_api_proto_SetUserChatWallPaperReq")
    ], SetUserChatWallPaperReq);
    api.SetUserChatWallPaperReq = SetUserChatWallPaperReq;
    let SetUserChatWallPaperResp = class SetUserChatWallPaperResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.wallPaper = new user_common_user.UserWallPaperCfg();
            if (param) {
                this.code = param.code;
                this.wallPaper = new user_common_user.UserWallPaperCfg(param.wallPaper);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], SetUserChatWallPaperResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, user_common_user.UserWallPaperCfg, "optional")
    ], SetUserChatWallPaperResp.prototype, "wallPaper", void 0);
    SetUserChatWallPaperResp = __decorate([
        Type.d("Type_tss_user_api_proto_SetUserChatWallPaperResp")
    ], SetUserChatWallPaperResp);
    api.SetUserChatWallPaperResp = SetUserChatWallPaperResp;
    let GetUsersChatWallPaperReq = class GetUsersChatWallPaperReq extends Message {
        constructor(param) {
            super();
            this.uids = [];
            if (param) {
                this.uids = param.uids;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "repeated")
    ], GetUsersChatWallPaperReq.prototype, "uids", void 0);
    GetUsersChatWallPaperReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetUsersChatWallPaperReq")
    ], GetUsersChatWallPaperReq);
    api.GetUsersChatWallPaperReq = GetUsersChatWallPaperReq;
    let GetUsersChatWallPaperResp = class GetUsersChatWallPaperResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.wallPapers = [];
            if (param) {
                this.code = param.code;
                this.wallPapers = param.wallPapers;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], GetUsersChatWallPaperResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, user_common_user.UserWallPaperCfg, "repeated")
    ], GetUsersChatWallPaperResp.prototype, "wallPapers", void 0);
    GetUsersChatWallPaperResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetUsersChatWallPaperResp")
    ], GetUsersChatWallPaperResp);
    api.GetUsersChatWallPaperResp = GetUsersChatWallPaperResp;
    let SetUserChatBubbleReq = class SetUserChatBubbleReq extends Message {
        constructor(param) {
            super();
            this.id = 0;
            if (param) {
                this.id = param.id;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], SetUserChatBubbleReq.prototype, "id", void 0);
    SetUserChatBubbleReq = __decorate([
        Type.d("Type_tss_user_api_proto_SetUserChatBubbleReq")
    ], SetUserChatBubbleReq);
    api.SetUserChatBubbleReq = SetUserChatBubbleReq;
    let SetUserChatBubbleResp = class SetUserChatBubbleResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.bubble = new user_common_user.UserBubbleCfg();
            if (param) {
                this.code = param.code;
                this.bubble = new user_common_user.UserBubbleCfg(param.bubble);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], SetUserChatBubbleResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, user_common_user.UserBubbleCfg, "optional")
    ], SetUserChatBubbleResp.prototype, "bubble", void 0);
    SetUserChatBubbleResp = __decorate([
        Type.d("Type_tss_user_api_proto_SetUserChatBubbleResp")
    ], SetUserChatBubbleResp);
    api.SetUserChatBubbleResp = SetUserChatBubbleResp;
    let GetUsersChatBubbleReq = class GetUsersChatBubbleReq extends Message {
        constructor(param) {
            super();
            this.uids = [];
            if (param) {
                this.uids = param.uids;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "repeated")
    ], GetUsersChatBubbleReq.prototype, "uids", void 0);
    GetUsersChatBubbleReq = __decorate([
        Type.d("Type_tss_user_api_proto_GetUsersChatBubbleReq")
    ], GetUsersChatBubbleReq);
    api.GetUsersChatBubbleReq = GetUsersChatBubbleReq;
    let GetUsersChatBubbleResp = class GetUsersChatBubbleResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.bubbles = [];
            if (param) {
                this.code = param.code;
                this.bubbles = param.bubbles;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], GetUsersChatBubbleResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, user_common_user.UserBubbleCfg, "repeated")
    ], GetUsersChatBubbleResp.prototype, "bubbles", void 0);
    GetUsersChatBubbleResp = __decorate([
        Type.d("Type_tss_user_api_proto_GetUsersChatBubbleResp")
    ], GetUsersChatBubbleResp);
    api.GetUsersChatBubbleResp = GetUsersChatBubbleResp;
    let ListChatWallPaperReq = class ListChatWallPaperReq extends Message {
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
    ], ListChatWallPaperReq.prototype, "page", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ListChatWallPaperReq.prototype, "pageSize", void 0);
    ListChatWallPaperReq = __decorate([
        Type.d("Type_tss_user_api_proto_ListChatWallPaperReq")
    ], ListChatWallPaperReq);
    api.ListChatWallPaperReq = ListChatWallPaperReq;
    let ListChatWallPaperResp = class ListChatWallPaperResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.wallPapers = [];
            this.totalSize = 0;
            if (param) {
                this.code = param.code;
                this.wallPapers = param.wallPapers;
                this.totalSize = param.totalSize;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ListChatWallPaperResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, user_common_user.ChatWallPaper, "repeated")
    ], ListChatWallPaperResp.prototype, "wallPapers", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], ListChatWallPaperResp.prototype, "totalSize", void 0);
    ListChatWallPaperResp = __decorate([
        Type.d("Type_tss_user_api_proto_ListChatWallPaperResp")
    ], ListChatWallPaperResp);
    api.ListChatWallPaperResp = ListChatWallPaperResp;
    let ListChatBubbleReq = class ListChatBubbleReq extends Message {
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
    ], ListChatBubbleReq.prototype, "page", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ListChatBubbleReq.prototype, "pageSize", void 0);
    ListChatBubbleReq = __decorate([
        Type.d("Type_tss_user_api_proto_ListChatBubbleReq")
    ], ListChatBubbleReq);
    api.ListChatBubbleReq = ListChatBubbleReq;
    let ListChatBubbleResp = class ListChatBubbleResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.bubbles = [];
            this.totalSize = 0;
            if (param) {
                this.code = param.code;
                this.bubbles = param.bubbles;
                this.totalSize = param.totalSize;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ListChatBubbleResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, user_common_user.ChatBubble, "repeated")
    ], ListChatBubbleResp.prototype, "bubbles", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], ListChatBubbleResp.prototype, "totalSize", void 0);
    ListChatBubbleResp = __decorate([
        Type.d("Type_tss_user_api_proto_ListChatBubbleResp")
    ], ListChatBubbleResp);
    api.ListChatBubbleResp = ListChatBubbleResp;
    api.ApiServer = {
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
        async setUserAccount(param) {
            const buffer = SetUserAccountReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 1, "SetUserAccount", buffer, this.config);
            return rsp.code === 0 ? SetUserAccountResp.decode(rsp.data) : null;
        },
        async getUserInfo(param) {
            const buffer = GetUserInfoReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 2, "GetUserInfo", buffer, this.config);
            return rsp.code === 0 ? GetUserInfoResp.decode(rsp.data) : null;
        },
        async followUser(param) {
            const buffer = FollowUserReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 3, "FollowUser", buffer, this.config);
            return rsp.code === 0 ? FollowUserResp.decode(rsp.data) : null;
        },
        async cancelFollowUser(param) {
            const buffer = CancelFollowUserReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 4, "CancelFollowUser", buffer, this.config);
            return rsp.code === 0 ? CancelFollowUserResp.decode(rsp.data) : null;
        },
        async getAllRelationDetail(param) {
            const buffer = GetAllRelationDetailReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 5, "GetAllRelationDetail", buffer, this.config);
            return rsp.code === 0 ? GetAllRelationDetailResp.decode(rsp.data) : null;
        },
        async getFansList(param) {
            const buffer = GetFansListReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 6, "GetFansList", buffer, this.config);
            return rsp.code === 0 ? GetFansListResp.decode(rsp.data) : null;
        },
        async getFollowList(param) {
            const buffer = GetFollowListReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 7, "GetFollowList", buffer, this.config);
            return rsp.code === 0 ? GetFollowListResp.decode(rsp.data) : null;
        },
        async getCommonFriend(param) {
            const buffer = GetCommonFriendReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 8, "GetCommonFriend", buffer, this.config);
            return rsp.code === 0 ? GetCommonFriendResp.decode(rsp.data) : null;
        },
        async getUidsAllRelationDetail(param) {
            const buffer = GetUidsAllRelationDetailReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 9, "GetUidsAllRelationDetail", buffer, this.config);
            return rsp.code === 0 ? GetUidsAllRelationDetailResp.decode(rsp.data) : null;
        },
        async getCommonFollow(param) {
            const buffer = GetCommonFollowReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 10, "GetCommonFollow", buffer, this.config);
            return rsp.code === 0 ? GetCommonFollowResp.decode(rsp.data) : null;
        },
        async getFriendList(param) {
            const buffer = GetFriendListReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 11, "GetFriendList", buffer, this.config);
            return rsp.code === 0 ? GetFriendListResp.decode(rsp.data) : null;
        },
        async getMutualFollowList(param) {
            const buffer = GetMutualFollowListReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 12, "GetMutualFollowList", buffer, this.config);
            return rsp.code === 0 ? GetMutualFollowListResp.decode(rsp.data) : null;
        },
        async searchUser(param) {
            const buffer = SearchUserReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 13, "SearchUser", buffer, this.config);
            return rsp.code === 0 ? SearchUserResp.decode(rsp.data) : null;
        },
        async getRecommendedUser(param) {
            const buffer = GetRecommendedUserReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 14, "GetRecommendedUser", buffer, this.config);
            return rsp.code === 0 ? GetRecommendedUserResp.decode(rsp.data) : null;
        },
        async getUserLineState(param) {
            const buffer = GetUserLineStateReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 15, "GetUserLineState", buffer, this.config);
            return rsp.code === 0 ? GetUserLineStateResp.decode(rsp.data) : null;
        },
        async getBatchUserLineState(param) {
            const buffer = GetBatchUserLineStateReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 16, "GetBatchUserLineState", buffer, this.config);
            return rsp.code === 0 ? GetBatchUserLineStateResp.decode(rsp.data) : null;
        },
        async getShippingAddr(param) {
            const buffer = GetShippingAddrReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 17, "GetShippingAddr", buffer, this.config);
            return rsp.code === 0 ? GetShippingAddrResp.decode(rsp.data) : null;
        },
        async listShippingAddr(param) {
            const buffer = ListShippingAddrReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 18, "ListShippingAddr", buffer, this.config);
            return rsp.code === 0 ? ListShippingAddrResp.decode(rsp.data) : null;
        },
        async createShippingAddr(param) {
            const buffer = CreateShippingAddrReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 19, "CreateShippingAddr", buffer, this.config);
            return rsp.code === 0 ? CreateShippingAddrResp.decode(rsp.data) : null;
        },
        async updateShippingAddr(param) {
            const buffer = UpdateShippingAddrReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 20, "UpdateShippingAddr", buffer, this.config);
            return rsp.code === 0 ? UpdateShippingAddrResp.decode(rsp.data) : null;
        },
        async deleteShippingAddr(param) {
            const buffer = DeleteShippingAddrReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 21, "DeleteShippingAddr", buffer, this.config);
            return rsp.code === 0 ? DeleteShippingAddrResp.decode(rsp.data) : null;
        },
        async batchGetUserGameTag(param) {
            const buffer = BatchGetUserGameTagReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 22, "BatchGetUserGameTag", buffer, this.config);
            return rsp.code === 0 ? BatchGetUserGameTagResp.decode(rsp.data) : null;
        },
        async listNearStranger(param) {
            const buffer = ListNearStrangerReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 23, "ListNearStranger", buffer, this.config);
            return rsp.code === 0 ? ListNearStrangerResp.decode(rsp.data) : null;
        },
        async getUserTagCmmFriendCnt(param) {
            const buffer = GetUserTagCmmFriendCntReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 24, "GetUserTagCmmFriendCnt", buffer, this.config);
            return rsp.code === 0 ? GetUserTagCmmFriendCntResp.decode(rsp.data) : null;
        },
        async getBeFriendTime(param) {
            const buffer = GetBeFriendTimeReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 25, "GetBeFriendTime", buffer, this.config);
            return rsp.code === 0 ? GetBeFriendTimeResp.decode(rsp.data) : null;
        },
        async setUserChatWallPaper(param) {
            const buffer = SetUserChatWallPaperReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 31, "SetUserChatWallPaper", buffer, this.config);
            return rsp.code === 0 ? SetUserChatWallPaperResp.decode(rsp.data) : null;
        },
        async getUsersChatWallPaper(param) {
            const buffer = GetUsersChatWallPaperReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 32, "GetUsersChatWallPaper", buffer, this.config);
            return rsp.code === 0 ? GetUsersChatWallPaperResp.decode(rsp.data) : null;
        },
        async setUserChatBubble(param) {
            const buffer = SetUserChatBubbleReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 33, "SetUserChatBubble", buffer, this.config);
            return rsp.code === 0 ? SetUserChatBubbleResp.decode(rsp.data) : null;
        },
        async getUsersChatBubble(param) {
            const buffer = GetUsersChatBubbleReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 34, "GetUsersChatBubble", buffer, this.config);
            return rsp.code === 0 ? GetUsersChatBubbleResp.decode(rsp.data) : null;
        },
        async listChatWallPaper(param) {
            const buffer = ListChatWallPaperReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 35, "ListChatWallPaper", buffer, this.config);
            return rsp.code === 0 ? ListChatWallPaperResp.decode(rsp.data) : null;
        },
        async listChatBubble(param) {
            const buffer = ListChatBubbleReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 36, "ListChatBubble", buffer, this.config);
            return rsp.code === 0 ? ListChatBubbleResp.decode(rsp.data) : null;
        },
        async listPhotoFrame(param) {
            const buffer = ListPhotoFrameReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 37, "ListPhotoFrame", buffer, this.config);
            return rsp.code === 0 ? ListPhotoFrameResp.decode(rsp.data) : null;
        },
        async listNicknameColor(param) {
            const buffer = ListNicknameColorReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 38, "ListNicknameColor", buffer, this.config);
            return rsp.code === 0 ? ListNicknameColorResp.decode(rsp.data) : null;
        },
        async completeTaskAward(param) {
            const buffer = CompleteTaskAwardReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.user.api", 39, "CompleteTaskAward", buffer, this.config);
            return rsp.code === 0 ? CompleteTaskAwardResp.decode(rsp.data) : null;
        },
    };
})(api || (api = {}));
//# sourceMappingURL=api.js.map