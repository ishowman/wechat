import { __decorate } from "tslib";
/* eslint-disable */
import { rpcPlugin as byRpc, ApiSendConfig } from 'xj-core';
import { Message, Type, Field } from 'protobufjs/light';
import { base as base } from '@/idl/base/base';
import { common as common_common_define } from '@/idl/tss/common/common_define';
export var customersvc;
(function (customersvc) {
    let QuestionType;
    (function (QuestionType) {
        QuestionType[QuestionType["QuestionTypeUnknown"] = 0] = "QuestionTypeUnknown";
        QuestionType[QuestionType["QuestionTypeSingleChoice"] = 1] = "QuestionTypeSingleChoice";
        QuestionType[QuestionType["QuestionTypeMultiChoice"] = 2] = "QuestionTypeMultiChoice";
        QuestionType[QuestionType["QuestionTypeRadio"] = 3] = "QuestionTypeRadio";
        QuestionType[QuestionType["QuestionTypeFillInTheBlank"] = 4] = "QuestionTypeFillInTheBlank";
        QuestionType[QuestionType["QuestionTypeLocation"] = 5] = "QuestionTypeLocation";
    })(QuestionType = customersvc.QuestionType || (customersvc.QuestionType = {}));
    let AnswerOrderType;
    (function (AnswerOrderType) {
        AnswerOrderType[AnswerOrderType["AnswerOrderTypeUnknown"] = 0] = "AnswerOrderTypeUnknown";
        AnswerOrderType[AnswerOrderType["AnswerOrderTypeASC"] = 1] = "AnswerOrderTypeASC";
        AnswerOrderType[AnswerOrderType["AnswerOrderTypeRandom"] = 2] = "AnswerOrderTypeRandom";
    })(AnswerOrderType = customersvc.AnswerOrderType || (customersvc.AnswerOrderType = {}));
    let PeriodType;
    (function (PeriodType) {
        PeriodType[PeriodType["PeriodTypeUnknown"] = 0] = "PeriodTypeUnknown";
        PeriodType[PeriodType["PeriodTypeOnce"] = 1] = "PeriodTypeOnce";
        PeriodType[PeriodType["PeriodTypeInfinite"] = 2] = "PeriodTypeInfinite";
        PeriodType[PeriodType["PeriodTypeDay"] = 3] = "PeriodTypeDay";
        PeriodType[PeriodType["PeriodTypeWeek"] = 4] = "PeriodTypeWeek";
        PeriodType[PeriodType["PeriodTypeMonth"] = 5] = "PeriodTypeMonth";
        PeriodType[PeriodType["PeriodTypeUserDefined"] = 6] = "PeriodTypeUserDefined";
    })(PeriodType = customersvc.PeriodType || (customersvc.PeriodType = {}));
    let UserGiftStateType;
    (function (UserGiftStateType) {
        UserGiftStateType[UserGiftStateType["UserGiftStateTypeUnknown"] = 0] = "UserGiftStateTypeUnknown";
        UserGiftStateType[UserGiftStateType["UserGiftStateTypeAvailable"] = 1] = "UserGiftStateTypeAvailable";
        UserGiftStateType[UserGiftStateType["UserGiftStateTypeAcquired"] = 2] = "UserGiftStateTypeAcquired";
    })(UserGiftStateType = customersvc.UserGiftStateType || (customersvc.UserGiftStateType = {}));
    let UserGiftStateErrorCode;
    (function (UserGiftStateErrorCode) {
        UserGiftStateErrorCode[UserGiftStateErrorCode["UserGiftStateErrorCodeUnknown"] = 0] = "UserGiftStateErrorCodeUnknown";
        UserGiftStateErrorCode[UserGiftStateErrorCode["UserGiftStateErrorCodeAcquired"] = 1] = "UserGiftStateErrorCodeAcquired";
        UserGiftStateErrorCode[UserGiftStateErrorCode["UserGiftStateErrorCodeAboveOnce"] = 2] = "UserGiftStateErrorCodeAboveOnce";
        UserGiftStateErrorCode[UserGiftStateErrorCode["UserGiftStateErrorCodeDay"] = 3] = "UserGiftStateErrorCodeDay";
        UserGiftStateErrorCode[UserGiftStateErrorCode["UserGiftStateErrorCodeWeek"] = 4] = "UserGiftStateErrorCodeWeek";
        UserGiftStateErrorCode[UserGiftStateErrorCode["UserGiftStateErrorCodeMonth"] = 5] = "UserGiftStateErrorCodeMonth";
        UserGiftStateErrorCode[UserGiftStateErrorCode["UserGiftStateErrorCodeAboveUserDefined"] = 6] = "UserGiftStateErrorCodeAboveUserDefined";
        UserGiftStateErrorCode[UserGiftStateErrorCode["UserGiftStateErrorCodeConfigUndefined"] = 7] = "UserGiftStateErrorCodeConfigUndefined";
        UserGiftStateErrorCode[UserGiftStateErrorCode["UserGiftStateErrorCodeMailFailed"] = 8] = "UserGiftStateErrorCodeMailFailed";
    })(UserGiftStateErrorCode = customersvc.UserGiftStateErrorCode || (customersvc.UserGiftStateErrorCode = {}));
    let Answer = class Answer extends Message {
        constructor(param) {
            super();
            this.id = "";
            this.seq = 0;
            this.img = "";
            this.enableFillBlank = false;
            this.content = "";
            if (param) {
                this.id = param.id;
                this.seq = param.seq;
                this.img = param.img;
                this.enableFillBlank = param.enableFillBlank;
                this.content = param.content;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], Answer.prototype, "id", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], Answer.prototype, "seq", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], Answer.prototype, "img", void 0);
    __decorate([
        Field.d(4, "bool", "optional")
    ], Answer.prototype, "enableFillBlank", void 0);
    __decorate([
        Field.d(5, "string", "optional")
    ], Answer.prototype, "content", void 0);
    Answer = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_Answer")
    ], Answer);
    customersvc.Answer = Answer;
    let Question = class Question extends Message {
        constructor(param) {
            super();
            this.id = "";
            this.refsAnswerID = [];
            this.seq = 0;
            this.content = "";
            this.answerOrderType = 0;
            this.questionType = 0;
            this.answers = [];
            this.refsQuestionID = "";
            if (param) {
                this.id = param.id;
                this.refsAnswerID = param.refsAnswerID;
                this.seq = param.seq;
                this.content = param.content;
                this.answerOrderType = param.answerOrderType;
                this.questionType = param.questionType;
                this.answers = param.answers;
                this.refsQuestionID = param.refsQuestionID;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], Question.prototype, "id", void 0);
    __decorate([
        Field.d(2, "string", "repeated")
    ], Question.prototype, "refsAnswerID", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], Question.prototype, "seq", void 0);
    __decorate([
        Field.d(4, "string", "optional")
    ], Question.prototype, "content", void 0);
    __decorate([
        Field.d(5, customersvc.AnswerOrderType, "optional")
    ], Question.prototype, "answerOrderType", void 0);
    __decorate([
        Field.d(6, customersvc.QuestionType, "optional")
    ], Question.prototype, "questionType", void 0);
    __decorate([
        Field.d(7, customersvc.Answer, "repeated")
    ], Question.prototype, "answers", void 0);
    __decorate([
        Field.d(8, "string", "optional")
    ], Question.prototype, "refsQuestionID", void 0);
    Question = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_Question")
    ], Question);
    customersvc.Question = Question;
    let AwardConfig = class AwardConfig extends Message {
        constructor(param) {
            super();
            this.props = [];
            this.mail = new common_common_define.SysMailBody();
            if (param) {
                this.props = param.props;
                this.mail = new common_common_define.SysMailBody(param.mail);
            }
        }
    };
    __decorate([
        Field.d(1, common_common_define.PropItem, "repeated")
    ], AwardConfig.prototype, "props", void 0);
    __decorate([
        Field.d(2, common_common_define.SysMailBody, "optional")
    ], AwardConfig.prototype, "mail", void 0);
    AwardConfig = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_AwardConfig")
    ], AwardConfig);
    customersvc.AwardConfig = AwardConfig;
    let Questionnaire = class Questionnaire extends Message {
        constructor(param) {
            super();
            this.id = "";
            this.describe = "";
            this.exprieAt = 0;
            this.awardConfig = new customersvc.AwardConfig();
            this.questions = [];
            this.state = 0;
            this.createdAt = 0;
            this.updatedAt = 0;
            this.operator = "";
            this.name = "";
            if (param) {
                this.id = param.id;
                this.describe = param.describe;
                this.exprieAt = param.exprieAt;
                this.awardConfig = new customersvc.AwardConfig(param.awardConfig);
                this.questions = param.questions;
                this.state = param.state;
                this.createdAt = param.createdAt;
                this.updatedAt = param.updatedAt;
                this.operator = param.operator;
                this.name = param.name;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], Questionnaire.prototype, "id", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], Questionnaire.prototype, "describe", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], Questionnaire.prototype, "exprieAt", void 0);
    __decorate([
        Field.d(4, customersvc.AwardConfig, "optional")
    ], Questionnaire.prototype, "awardConfig", void 0);
    __decorate([
        Field.d(5, customersvc.Question, "repeated")
    ], Questionnaire.prototype, "questions", void 0);
    __decorate([
        Field.d(6, common_common_define.State, "optional")
    ], Questionnaire.prototype, "state", void 0);
    __decorate([
        Field.d(7, "int64", "optional")
    ], Questionnaire.prototype, "createdAt", void 0);
    __decorate([
        Field.d(8, "int64", "optional")
    ], Questionnaire.prototype, "updatedAt", void 0);
    __decorate([
        Field.d(9, "string", "optional")
    ], Questionnaire.prototype, "operator", void 0);
    __decorate([
        Field.d(10, "string", "optional")
    ], Questionnaire.prototype, "name", void 0);
    Questionnaire = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_Questionnaire")
    ], Questionnaire);
    customersvc.Questionnaire = Questionnaire;
    let Location = class Location extends Message {
        constructor(param) {
            super();
            this.province = "";
            this.city = "";
            this.region = "";
            if (param) {
                this.province = param.province;
                this.city = param.city;
                this.region = param.region;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], Location.prototype, "province", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], Location.prototype, "city", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], Location.prototype, "region", void 0);
    Location = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_Location")
    ], Location);
    customersvc.Location = Location;
    let UserAnswer = class UserAnswer extends Message {
        constructor(param) {
            super();
            this.answerID = "";
            this.content = "";
            this.radio = 0;
            this.loc = new customersvc.Location();
            if (param) {
                this.answerID = param.answerID;
                this.content = param.content;
                this.radio = param.radio;
                this.loc = new customersvc.Location(param.loc);
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], UserAnswer.prototype, "answerID", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], UserAnswer.prototype, "content", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], UserAnswer.prototype, "radio", void 0);
    __decorate([
        Field.d(4, customersvc.Location, "optional")
    ], UserAnswer.prototype, "loc", void 0);
    UserAnswer = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_UserAnswer")
    ], UserAnswer);
    customersvc.UserAnswer = UserAnswer;
    let UserQuestionAnswer = class UserQuestionAnswer extends Message {
        constructor(param) {
            super();
            this.questionID = "";
            this.answers = [];
            if (param) {
                this.questionID = param.questionID;
                this.answers = param.answers;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], UserQuestionAnswer.prototype, "questionID", void 0);
    __decorate([
        Field.d(2, customersvc.UserAnswer, "repeated")
    ], UserQuestionAnswer.prototype, "answers", void 0);
    UserQuestionAnswer = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_UserQuestionAnswer")
    ], UserQuestionAnswer);
    customersvc.UserQuestionAnswer = UserQuestionAnswer;
    let UserAnswerSheet = class UserAnswerSheet extends Message {
        constructor(param) {
            super();
            this.questionnaireID = "";
            this.UID = 0;
            this.answers = [];
            this.createdAt = 0;
            if (param) {
                this.questionnaireID = param.questionnaireID;
                this.UID = param.UID;
                this.answers = param.answers;
                this.createdAt = param.createdAt;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], UserAnswerSheet.prototype, "questionnaireID", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], UserAnswerSheet.prototype, "UID", void 0);
    __decorate([
        Field.d(3, customersvc.UserQuestionAnswer, "repeated")
    ], UserAnswerSheet.prototype, "answers", void 0);
    __decorate([
        Field.d(4, "int64", "optional")
    ], UserAnswerSheet.prototype, "createdAt", void 0);
    UserAnswerSheet = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_UserAnswerSheet")
    ], UserAnswerSheet);
    customersvc.UserAnswerSheet = UserAnswerSheet;
    let RadioStatistics = class RadioStatistics extends Message {
        constructor(param) {
            super();
            this.radioVal = 0;
            this.cnt = 0;
            if (param) {
                this.radioVal = param.radioVal;
                this.cnt = param.cnt;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], RadioStatistics.prototype, "radioVal", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], RadioStatistics.prototype, "cnt", void 0);
    RadioStatistics = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_RadioStatistics")
    ], RadioStatistics);
    customersvc.RadioStatistics = RadioStatistics;
    let AnswerStatistics = class AnswerStatistics extends Message {
        constructor(param) {
            super();
            this.answerID = "";
            this.cnt = 0;
            this.radioAnswers = [];
            if (param) {
                this.answerID = param.answerID;
                this.cnt = param.cnt;
                this.radioAnswers = param.radioAnswers;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], AnswerStatistics.prototype, "answerID", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], AnswerStatistics.prototype, "cnt", void 0);
    __decorate([
        Field.d(3, customersvc.RadioStatistics, "repeated")
    ], AnswerStatistics.prototype, "radioAnswers", void 0);
    AnswerStatistics = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_AnswerStatistics")
    ], AnswerStatistics);
    customersvc.AnswerStatistics = AnswerStatistics;
    let QuestionStatistics = class QuestionStatistics extends Message {
        constructor(param) {
            super();
            this.questionID = "";
            this.answers = [];
            if (param) {
                this.questionID = param.questionID;
                this.answers = param.answers;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], QuestionStatistics.prototype, "questionID", void 0);
    __decorate([
        Field.d(2, customersvc.AnswerStatistics, "repeated")
    ], QuestionStatistics.prototype, "answers", void 0);
    QuestionStatistics = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_QuestionStatistics")
    ], QuestionStatistics);
    customersvc.QuestionStatistics = QuestionStatistics;
    let CreateQuestionnaireReq = class CreateQuestionnaireReq extends Message {
        constructor(param) {
            super();
            this.questionnaire = new customersvc.Questionnaire();
            if (param) {
                this.questionnaire = new customersvc.Questionnaire(param.questionnaire);
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.Questionnaire, "optional")
    ], CreateQuestionnaireReq.prototype, "questionnaire", void 0);
    CreateQuestionnaireReq = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_CreateQuestionnaireReq")
    ], CreateQuestionnaireReq);
    customersvc.CreateQuestionnaireReq = CreateQuestionnaireReq;
    let CreateQuestionnaireResp = class CreateQuestionnaireResp extends Message {
        constructor(param) {
            super();
            this.questionnaire = new customersvc.Questionnaire();
            if (param) {
                this.questionnaire = new customersvc.Questionnaire(param.questionnaire);
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.Questionnaire, "optional")
    ], CreateQuestionnaireResp.prototype, "questionnaire", void 0);
    CreateQuestionnaireResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_CreateQuestionnaireResp")
    ], CreateQuestionnaireResp);
    customersvc.CreateQuestionnaireResp = CreateQuestionnaireResp;
    let GetQuestionnaireReq = class GetQuestionnaireReq extends Message {
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
    ], GetQuestionnaireReq.prototype, "id", void 0);
    GetQuestionnaireReq = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_GetQuestionnaireReq")
    ], GetQuestionnaireReq);
    customersvc.GetQuestionnaireReq = GetQuestionnaireReq;
    let GetQuestionnaireResp = class GetQuestionnaireResp extends Message {
        constructor(param) {
            super();
            this.questionnaire = new customersvc.Questionnaire();
            if (param) {
                this.questionnaire = new customersvc.Questionnaire(param.questionnaire);
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.Questionnaire, "optional")
    ], GetQuestionnaireResp.prototype, "questionnaire", void 0);
    GetQuestionnaireResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_GetQuestionnaireResp")
    ], GetQuestionnaireResp);
    customersvc.GetQuestionnaireResp = GetQuestionnaireResp;
    let ListQuestionnaireReq = class ListQuestionnaireReq extends Message {
        constructor(param) {
            super();
            this.page = 0;
            this.pageSize = 0;
            this.state = 0;
            if (param) {
                this.page = param.page;
                this.pageSize = param.pageSize;
                this.state = param.state;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ListQuestionnaireReq.prototype, "page", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ListQuestionnaireReq.prototype, "pageSize", void 0);
    __decorate([
        Field.d(3, common_common_define.State, "optional")
    ], ListQuestionnaireReq.prototype, "state", void 0);
    ListQuestionnaireReq = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_ListQuestionnaireReq")
    ], ListQuestionnaireReq);
    customersvc.ListQuestionnaireReq = ListQuestionnaireReq;
    let ListQuestionnaireResp = class ListQuestionnaireResp extends Message {
        constructor(param) {
            super();
            this.total = 0;
            this.questionnaire = [];
            if (param) {
                this.total = param.total;
                this.questionnaire = param.questionnaire;
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], ListQuestionnaireResp.prototype, "total", void 0);
    __decorate([
        Field.d(2, customersvc.Questionnaire, "repeated")
    ], ListQuestionnaireResp.prototype, "questionnaire", void 0);
    ListQuestionnaireResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_ListQuestionnaireResp")
    ], ListQuestionnaireResp);
    customersvc.ListQuestionnaireResp = ListQuestionnaireResp;
    let UpdateQuestionnaireReq = class UpdateQuestionnaireReq extends Message {
        constructor(param) {
            super();
            this.questionnaire = new customersvc.Questionnaire();
            if (param) {
                this.questionnaire = new customersvc.Questionnaire(param.questionnaire);
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.Questionnaire, "optional")
    ], UpdateQuestionnaireReq.prototype, "questionnaire", void 0);
    UpdateQuestionnaireReq = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_UpdateQuestionnaireReq")
    ], UpdateQuestionnaireReq);
    customersvc.UpdateQuestionnaireReq = UpdateQuestionnaireReq;
    let UpdateQuestionnaireResp = class UpdateQuestionnaireResp extends Message {
        constructor(param) {
            super();
            this.questionnaire = new customersvc.Questionnaire();
            if (param) {
                this.questionnaire = new customersvc.Questionnaire(param.questionnaire);
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.Questionnaire, "optional")
    ], UpdateQuestionnaireResp.prototype, "questionnaire", void 0);
    UpdateQuestionnaireResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_UpdateQuestionnaireResp")
    ], UpdateQuestionnaireResp);
    customersvc.UpdateQuestionnaireResp = UpdateQuestionnaireResp;
    let DeleteQuestionnaireReq = class DeleteQuestionnaireReq extends Message {
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
    ], DeleteQuestionnaireReq.prototype, "id", void 0);
    DeleteQuestionnaireReq = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_DeleteQuestionnaireReq")
    ], DeleteQuestionnaireReq);
    customersvc.DeleteQuestionnaireReq = DeleteQuestionnaireReq;
    let GetQuestionnaireStatisticsReq = class GetQuestionnaireStatisticsReq extends Message {
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
    ], GetQuestionnaireStatisticsReq.prototype, "id", void 0);
    GetQuestionnaireStatisticsReq = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_GetQuestionnaireStatisticsReq")
    ], GetQuestionnaireStatisticsReq);
    customersvc.GetQuestionnaireStatisticsReq = GetQuestionnaireStatisticsReq;
    let GetQuestionnaireStatisticsResp = class GetQuestionnaireStatisticsResp extends Message {
        constructor(param) {
            super();
            this.Statistics = [];
            this.answersCnt = 0;
            if (param) {
                this.Statistics = param.Statistics;
                this.answersCnt = param.answersCnt;
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.QuestionStatistics, "repeated")
    ], GetQuestionnaireStatisticsResp.prototype, "Statistics", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], GetQuestionnaireStatisticsResp.prototype, "answersCnt", void 0);
    GetQuestionnaireStatisticsResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_GetQuestionnaireStatisticsResp")
    ], GetQuestionnaireStatisticsResp);
    customersvc.GetQuestionnaireStatisticsResp = GetQuestionnaireStatisticsResp;
    let CreateQuestionnaireAnswerSheetReq = class CreateQuestionnaireAnswerSheetReq extends Message {
        constructor(param) {
            super();
            this.answerSheet = new customersvc.UserAnswerSheet();
            if (param) {
                this.answerSheet = new customersvc.UserAnswerSheet(param.answerSheet);
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.UserAnswerSheet, "optional")
    ], CreateQuestionnaireAnswerSheetReq.prototype, "answerSheet", void 0);
    CreateQuestionnaireAnswerSheetReq = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_CreateQuestionnaireAnswerSheetReq")
    ], CreateQuestionnaireAnswerSheetReq);
    customersvc.CreateQuestionnaireAnswerSheetReq = CreateQuestionnaireAnswerSheetReq;
    let CreateQuestionnaireAnswerSheetResp = class CreateQuestionnaireAnswerSheetResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.haveAward = false;
            if (param) {
                this.code = param.code;
                this.haveAward = param.haveAward;
            }
        }
    };
    __decorate([
        Field.d(1, 'int32', "optional")
    ], CreateQuestionnaireAnswerSheetResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, "bool", "optional")
    ], CreateQuestionnaireAnswerSheetResp.prototype, "haveAward", void 0);
    CreateQuestionnaireAnswerSheetResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_CreateQuestionnaireAnswerSheetResp")
    ], CreateQuestionnaireAnswerSheetResp);
    customersvc.CreateQuestionnaireAnswerSheetResp = CreateQuestionnaireAnswerSheetResp;
    let ListQuestionnaireAnswersReq = class ListQuestionnaireAnswersReq extends Message {
        constructor(param) {
            super();
            this.id = "";
            this.page = 0;
            this.pageSize = 0;
            if (param) {
                this.id = param.id;
                this.page = param.page;
                this.pageSize = param.pageSize;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], ListQuestionnaireAnswersReq.prototype, "id", void 0);
    __decorate([
        Field.d(2, "int32", "optional")
    ], ListQuestionnaireAnswersReq.prototype, "page", void 0);
    __decorate([
        Field.d(3, "int32", "optional")
    ], ListQuestionnaireAnswersReq.prototype, "pageSize", void 0);
    ListQuestionnaireAnswersReq = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_ListQuestionnaireAnswersReq")
    ], ListQuestionnaireAnswersReq);
    customersvc.ListQuestionnaireAnswersReq = ListQuestionnaireAnswersReq;
    let ListQuestionnaireAnswersResp = class ListQuestionnaireAnswersResp extends Message {
        constructor(param) {
            super();
            this.questionnaire = new customersvc.Questionnaire();
            this.sheets = [];
            this.total = 0;
            if (param) {
                this.questionnaire = new customersvc.Questionnaire(param.questionnaire);
                this.sheets = param.sheets;
                this.total = param.total;
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.Questionnaire, "optional")
    ], ListQuestionnaireAnswersResp.prototype, "questionnaire", void 0);
    __decorate([
        Field.d(2, customersvc.UserAnswerSheet, "repeated")
    ], ListQuestionnaireAnswersResp.prototype, "sheets", void 0);
    __decorate([
        Field.d(3, "int64", "optional")
    ], ListQuestionnaireAnswersResp.prototype, "total", void 0);
    ListQuestionnaireAnswersResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_ListQuestionnaireAnswersResp")
    ], ListQuestionnaireAnswersResp);
    customersvc.ListQuestionnaireAnswersResp = ListQuestionnaireAnswersResp;
    let GetUserAnswerSheetReq = class GetUserAnswerSheetReq extends Message {
        constructor(param) {
            super();
            this.questionnaireID = "";
            this.uid = 0;
            if (param) {
                this.questionnaireID = param.questionnaireID;
                this.uid = param.uid;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "optional")
    ], GetUserAnswerSheetReq.prototype, "questionnaireID", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], GetUserAnswerSheetReq.prototype, "uid", void 0);
    GetUserAnswerSheetReq = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_GetUserAnswerSheetReq")
    ], GetUserAnswerSheetReq);
    customersvc.GetUserAnswerSheetReq = GetUserAnswerSheetReq;
    let GetUserAnswerSheetResp = class GetUserAnswerSheetResp extends Message {
        constructor(param) {
            super();
            this.alreadyAnswer = false;
            if (param) {
                this.alreadyAnswer = param.alreadyAnswer;
            }
        }
    };
    __decorate([
        Field.d(1, "bool", "optional")
    ], GetUserAnswerSheetResp.prototype, "alreadyAnswer", void 0);
    GetUserAnswerSheetResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_GetUserAnswerSheetResp")
    ], GetUserAnswerSheetResp);
    customersvc.GetUserAnswerSheetResp = GetUserAnswerSheetResp;
    let FollowGiftConfig = class FollowGiftConfig extends Message {
        constructor(param) {
            super();
            this.award = new customersvc.AwardConfig();
            this.acquireRule = "";
            this.operator = "";
            if (param) {
                this.award = new customersvc.AwardConfig(param.award);
                this.acquireRule = param.acquireRule;
                this.operator = param.operator;
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.AwardConfig, "optional")
    ], FollowGiftConfig.prototype, "award", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], FollowGiftConfig.prototype, "acquireRule", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], FollowGiftConfig.prototype, "operator", void 0);
    FollowGiftConfig = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_FollowGiftConfig")
    ], FollowGiftConfig);
    customersvc.FollowGiftConfig = FollowGiftConfig;
    let GetFollowGiftConfigResp = class GetFollowGiftConfigResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.config = new customersvc.FollowGiftConfig();
            if (param) {
                this.code = param.code;
                this.config = new customersvc.FollowGiftConfig(param.config);
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.UserGiftStateErrorCode, "optional")
    ], GetFollowGiftConfigResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, customersvc.FollowGiftConfig, "optional")
    ], GetFollowGiftConfigResp.prototype, "config", void 0);
    GetFollowGiftConfigResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_GetFollowGiftConfigResp")
    ], GetFollowGiftConfigResp);
    customersvc.GetFollowGiftConfigResp = GetFollowGiftConfigResp;
    let UpsertFollowGiftConfigReq = class UpsertFollowGiftConfigReq extends Message {
        constructor(param) {
            super();
            this.config = new customersvc.FollowGiftConfig();
            if (param) {
                this.config = new customersvc.FollowGiftConfig(param.config);
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.FollowGiftConfig, "optional")
    ], UpsertFollowGiftConfigReq.prototype, "config", void 0);
    UpsertFollowGiftConfigReq = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_UpsertFollowGiftConfigReq")
    ], UpsertFollowGiftConfigReq);
    customersvc.UpsertFollowGiftConfigReq = UpsertFollowGiftConfigReq;
    let WealGiftConfig = class WealGiftConfig extends Message {
        constructor(param) {
            super();
            this.award = new customersvc.AwardConfig();
            this.acquireRule = "";
            this.name = "";
            this.periodType = 0;
            this.periodCnt = 0;
            this.operator = "";
            if (param) {
                this.award = new customersvc.AwardConfig(param.award);
                this.acquireRule = param.acquireRule;
                this.name = param.name;
                this.periodType = param.periodType;
                this.periodCnt = param.periodCnt;
                this.operator = param.operator;
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.AwardConfig, "optional")
    ], WealGiftConfig.prototype, "award", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], WealGiftConfig.prototype, "acquireRule", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], WealGiftConfig.prototype, "name", void 0);
    __decorate([
        Field.d(4, customersvc.PeriodType, "optional")
    ], WealGiftConfig.prototype, "periodType", void 0);
    __decorate([
        Field.d(5, "int64", "optional")
    ], WealGiftConfig.prototype, "periodCnt", void 0);
    __decorate([
        Field.d(6, "string", "optional")
    ], WealGiftConfig.prototype, "operator", void 0);
    WealGiftConfig = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_WealGiftConfig")
    ], WealGiftConfig);
    customersvc.WealGiftConfig = WealGiftConfig;
    let GetWealGiftConfigResp = class GetWealGiftConfigResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.config = new customersvc.WealGiftConfig();
            if (param) {
                this.code = param.code;
                this.config = new customersvc.WealGiftConfig(param.config);
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.UserGiftStateErrorCode, "optional")
    ], GetWealGiftConfigResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, customersvc.WealGiftConfig, "optional")
    ], GetWealGiftConfigResp.prototype, "config", void 0);
    GetWealGiftConfigResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_GetWealGiftConfigResp")
    ], GetWealGiftConfigResp);
    customersvc.GetWealGiftConfigResp = GetWealGiftConfigResp;
    let UpsertWealGiftConfigReq = class UpsertWealGiftConfigReq extends Message {
        constructor(param) {
            super();
            this.config = new customersvc.WealGiftConfig();
            if (param) {
                this.config = new customersvc.WealGiftConfig(param.config);
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.WealGiftConfig, "optional")
    ], UpsertWealGiftConfigReq.prototype, "config", void 0);
    UpsertWealGiftConfigReq = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_UpsertWealGiftConfigReq")
    ], UpsertWealGiftConfigReq);
    customersvc.UpsertWealGiftConfigReq = UpsertWealGiftConfigReq;
    let UserGiftState = class UserGiftState extends Message {
        constructor(param) {
            super();
            this.uid = 0;
            this.state = 0;
            if (param) {
                this.uid = param.uid;
                this.state = param.state;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], UserGiftState.prototype, "uid", void 0);
    __decorate([
        Field.d(2, customersvc.UserGiftStateType, "optional")
    ], UserGiftState.prototype, "state", void 0);
    UserGiftState = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_UserGiftState")
    ], UserGiftState);
    customersvc.UserGiftState = UserGiftState;
    let GetUserFollowGiftStateResp = class GetUserFollowGiftStateResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.userState = new customersvc.UserGiftState();
            if (param) {
                this.code = param.code;
                this.userState = new customersvc.UserGiftState(param.userState);
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.UserGiftStateErrorCode, "optional")
    ], GetUserFollowGiftStateResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, customersvc.UserGiftState, "optional")
    ], GetUserFollowGiftStateResp.prototype, "userState", void 0);
    GetUserFollowGiftStateResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_GetUserFollowGiftStateResp")
    ], GetUserFollowGiftStateResp);
    customersvc.GetUserFollowGiftStateResp = GetUserFollowGiftStateResp;
    let GetUserWealGiftStateResp = class GetUserWealGiftStateResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.userState = new customersvc.UserGiftState();
            if (param) {
                this.code = param.code;
                this.userState = new customersvc.UserGiftState(param.userState);
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.UserGiftStateErrorCode, "optional")
    ], GetUserWealGiftStateResp.prototype, "code", void 0);
    __decorate([
        Field.d(2, customersvc.UserGiftState, "optional")
    ], GetUserWealGiftStateResp.prototype, "userState", void 0);
    GetUserWealGiftStateResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_GetUserWealGiftStateResp")
    ], GetUserWealGiftStateResp);
    customersvc.GetUserWealGiftStateResp = GetUserWealGiftStateResp;
    let AcquireFollowGiftResp = class AcquireFollowGiftResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.UserGiftStateErrorCode, "optional")
    ], AcquireFollowGiftResp.prototype, "code", void 0);
    AcquireFollowGiftResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_AcquireFollowGiftResp")
    ], AcquireFollowGiftResp);
    customersvc.AcquireFollowGiftResp = AcquireFollowGiftResp;
    let AcquireWealGiftResp = class AcquireWealGiftResp extends Message {
        constructor(param) {
            super();
            this.code = 0;
            if (param) {
                this.code = param.code;
            }
        }
    };
    __decorate([
        Field.d(1, customersvc.UserGiftStateErrorCode, "optional")
    ], AcquireWealGiftResp.prototype, "code", void 0);
    AcquireWealGiftResp = __decorate([
        Type.d("Type_tss_hall_customersvc_v1_proto_AcquireWealGiftResp")
    ], AcquireWealGiftResp);
    customersvc.AcquireWealGiftResp = AcquireWealGiftResp;
    customersvc.CustomersvcServer = {
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
            space ? this.config.space = space : 'tony';
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
        async createQuestionnaire(param) {
            const buffer = CreateQuestionnaireReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 10001, "CreateQuestionnaire", buffer, this.config);
            return rsp.code === 0 ? CreateQuestionnaireResp.decode(rsp.data) : null;
        },
        async getQuestionnaire(param) {
            const buffer = GetQuestionnaireReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 3, "GetQuestionnaire", buffer, this.config);
            return rsp.code === 0 ? GetQuestionnaireResp.decode(rsp.data) : null;
        },
        async listQuestionnaire(param) {
            const buffer = ListQuestionnaireReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 1, "ListQuestionnaire", buffer, this.config);
            return rsp.code === 0 ? ListQuestionnaireResp.decode(rsp.data) : null;
        },
        async updateQuestionnaire(param) {
            const buffer = UpdateQuestionnaireReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 10003, "UpdateQuestionnaire", buffer, this.config);
            return rsp.code === 0 ? UpdateQuestionnaireResp.decode(rsp.data) : null;
        },
        async deleteQuestionnaire(param) {
            const buffer = DeleteQuestionnaireReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 10004, "DeleteQuestionnaire", buffer, this.config);
            return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
        },
        async getQuestionnaireStatistics(param) {
            const buffer = GetQuestionnaireStatisticsReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 10005, "GetQuestionnaireStatistics", buffer, this.config);
            return rsp.code === 0 ? GetQuestionnaireStatisticsResp.decode(rsp.data) : null;
        },
        async listQuestionnaireAnswers(param) {
            const buffer = ListQuestionnaireAnswersReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 10006, "ListQuestionnaireAnswers", buffer, this.config);
            return rsp.code === 0 ? ListQuestionnaireAnswersResp.decode(rsp.data) : null;
        },
        async createQuestionnaireAnswerSheet(param) {
            const buffer = CreateQuestionnaireAnswerSheetReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 2, "CreateQuestionnaireAnswerSheet", buffer, this.config);
            return rsp.code === 0 ? CreateQuestionnaireAnswerSheetResp.decode(rsp.data) : null;
        },
        async getUserAnswerSheet(param) {
            const buffer = GetUserAnswerSheetReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 4, "GetUserAnswerSheet", buffer, this.config);
            return rsp.code === 0 ? GetUserAnswerSheetResp.decode(rsp.data) : null;
        },
        async getFollowGiftConfig(param) {
            const buffer = base.Void.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 5, "GetFollowGiftConfig", buffer, this.config);
            return rsp.code === 0 ? GetFollowGiftConfigResp.decode(rsp.data) : null;
        },
        async upsertFollowGiftConfig(param) {
            const buffer = UpsertFollowGiftConfigReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 10008, "UpsertFollowGiftConfig", buffer, this.config);
            return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
        },
        async acquireFollowGift(param) {
            const buffer = base.Void.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 6, "AcquireFollowGift", buffer, this.config);
            return rsp.code === 0 ? AcquireFollowGiftResp.decode(rsp.data) : null;
        },
        async getUserFollowGiftState(param) {
            const buffer = base.Void.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 7, "GetUserFollowGiftState", buffer, this.config);
            return rsp.code === 0 ? GetUserFollowGiftStateResp.decode(rsp.data) : null;
        },
        async getWealGiftConfig(param) {
            const buffer = base.Void.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 8, "GetWealGiftConfig", buffer, this.config);
            return rsp.code === 0 ? GetWealGiftConfigResp.decode(rsp.data) : null;
        },
        async upsertWealGiftConfig(param) {
            const buffer = UpsertWealGiftConfigReq.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 10012, "UpsertWealGiftConfig", buffer, this.config);
            return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
        },
        async acquireWealGift(param) {
            const buffer = base.Void.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 9, "AcquireWealGift", buffer, this.config);
            return rsp.code === 0 ? AcquireWealGiftResp.decode(rsp.data) : null;
        },
        async getUserWealGiftState(param) {
            const buffer = base.Void.encode(param).finish();
            let rsp = await byRpc.sendV2("tss.hall.customersvc.v1", 10, "GetUserWealGiftState", buffer, this.config);
            return rsp.code === 0 ? GetUserWealGiftStateResp.decode(rsp.data) : null;
        },
    };
})(customersvc || (customersvc = {}));
//# sourceMappingURL=customersvc_v1.js.map