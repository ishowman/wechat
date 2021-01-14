/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
import { base as base} from '@/idl/base/base';
import { common as common_common_define} from '@/idl/tss/common/common_define';
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace customersvc {
	export enum QuestionType {
		QuestionTypeUnknown = 0,
		QuestionTypeSingleChoice = 1,
		QuestionTypeMultiChoice = 2,
		QuestionTypeRadio = 3,
		QuestionTypeFillInTheBlank = 4,
		QuestionTypeLocation = 5,
	}
	export enum AnswerOrderType {
		AnswerOrderTypeUnknown = 0,
		AnswerOrderTypeASC = 1,
		AnswerOrderTypeRandom = 2,
	}
	export enum PeriodType {
		PeriodTypeUnknown = 0,
		PeriodTypeOnce = 1,
		PeriodTypeInfinite = 2,
		PeriodTypeDay = 3,
		PeriodTypeWeek = 4,
		PeriodTypeMonth = 5,
		PeriodTypeUserDefined = 6,
	}
	export enum UserGiftStateType {
		UserGiftStateTypeUnknown = 0,
		UserGiftStateTypeAvailable = 1,
		UserGiftStateTypeAcquired = 2,
	}
	export enum UserGiftStateErrorCode {
		UserGiftStateErrorCodeUnknown = 0,
		UserGiftStateErrorCodeAcquired = 1,
		UserGiftStateErrorCodeAboveOnce = 2,
		UserGiftStateErrorCodeDay = 3,
		UserGiftStateErrorCodeWeek = 4,
		UserGiftStateErrorCodeMonth = 5,
		UserGiftStateErrorCodeAboveUserDefined = 6,
		UserGiftStateErrorCodeConfigUndefined = 7,
		UserGiftStateErrorCodeMailFailed = 8,
	}
	@Type.d("Type_tss_hall_customersvc_v1_proto_Answer") 
	export class Answer extends Message<Answer> { 
		constructor(param?: Properties<Answer>) {  
			super(); 
			if (param) { 
				this.id = param.id!
				this.seq = param.seq!
				this.img = param.img!
				this.enableFillBlank = param.enableFillBlank!
				this.content = param.content!
				} 
			} 
			@Field.d(1, "string", "optional")
			id:string = "";
			@Field.d(2, "int32", "optional")
			seq:number = 0;
			@Field.d(3, "string", "optional")
			img:string = "";
			@Field.d(4, "bool", "optional")
			enableFillBlank:boolean = false;
			@Field.d(5, "string", "optional")
			content:string = "";
	} 
	
	@Type.d("Type_tss_hall_customersvc_v1_proto_Question") 
	export class Question extends Message<Question> { 
		constructor(param?: Properties<Question>) {  
			super(); 
			if (param) { 
				this.id = param.id!
				this.refsAnswerID = param.refsAnswerID!
				this.seq = param.seq!
				this.content = param.content!
				this.answerOrderType = param.answerOrderType!
				this.questionType = param.questionType!
				this.answers = param.answers!
				this.refsQuestionID = param.refsQuestionID!
				} 
			} 
			@Field.d(1, "string", "optional")
			id:string = "";
			@Field.d(2, "string", "repeated")
			refsAnswerID:string[] = [];
			@Field.d(3, "int32", "optional")
			seq:number = 0;
			@Field.d(4, "string", "optional")
			content:string = "";
			@Field.d(5, customersvc.AnswerOrderType, "optional")
			answerOrderType:customersvc.AnswerOrderType = 0;
			@Field.d(6, customersvc.QuestionType, "optional")
			questionType:customersvc.QuestionType = 0;
			@Field.d(7, customersvc.Answer, "repeated")
			answers:customersvc.Answer[] = [];
			@Field.d(8, "string", "optional")
			refsQuestionID:string = "";
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_AwardConfig") 
	export class AwardConfig extends Message<AwardConfig> { 
		constructor(param?: Properties<AwardConfig>) {  
			super(); 
			if (param) { 
				this.props = param.props!
				this.mail = new common_common_define.SysMailBody(param.mail!)
				} 
			} 
			@Field.d(1, common_common_define.PropItem, "repeated")
			props:common_common_define.PropItem[] = [];
			@Field.d(2, common_common_define.SysMailBody, "optional")
			mail:common_common_define.SysMailBody =  new common_common_define.SysMailBody();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_Questionnaire") 
	export class Questionnaire extends Message<Questionnaire> { 
		constructor(param?: Properties<Questionnaire>) {  
			super(); 
			if (param) { 
				this.id = param.id!
				this.describe = param.describe!
				this.exprieAt = param.exprieAt!
				this.awardConfig = new customersvc.AwardConfig(param.awardConfig!)
				this.questions = param.questions!
				this.state = param.state!
				this.createdAt = param.createdAt!
				this.updatedAt = param.updatedAt!
				this.operator = param.operator!
				this.name = param.name!
				} 
			} 
			@Field.d(1, "string", "optional")
			id:string = "";
			@Field.d(2, "string", "optional")
			describe:string = "";
			@Field.d(3, "int64", "optional")
			exprieAt:number = 0;
			@Field.d(4, customersvc.AwardConfig, "optional")
			awardConfig:customersvc.AwardConfig =  new customersvc.AwardConfig();
			@Field.d(5, customersvc.Question, "repeated")
			questions:customersvc.Question[] = [];
			@Field.d(6, common_common_define.State, "optional")
			state:common_common_define.State = 0;
			@Field.d(7, "int64", "optional")
			createdAt:number = 0;
			@Field.d(8, "int64", "optional")
			updatedAt:number = 0;
			@Field.d(9, "string", "optional")
			operator:string = "";
			@Field.d(10, "string", "optional")
			name:string = "";
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_Location") 
	export class Location extends Message<Location> { 
		constructor(param?: Properties<Location>) {  
			super(); 
			if (param) { 
				this.province = param.province!
				this.city = param.city!
				this.region = param.region!
				} 
			} 
			@Field.d(1, "string", "optional")
			province:string = "";
			@Field.d(2, "string", "optional")
			city:string = "";
			@Field.d(3, "string", "optional")
			region:string = "";
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_UserAnswer") 
	export class UserAnswer extends Message<UserAnswer> { 
		constructor(param?: Properties<UserAnswer>) {  
			super(); 
			if (param) { 
				this.answerID = param.answerID!
				this.content = param.content!
				this.radio = param.radio!
				this.loc = new customersvc.Location(param.loc!)
				} 
			} 
			@Field.d(1, "string", "optional")
			answerID:string = "";
			@Field.d(2, "string", "optional")
			content:string = "";
			@Field.d(3, "int32", "optional")
			radio:number = 0;
			@Field.d(4, customersvc.Location, "optional")
			loc:customersvc.Location =  new customersvc.Location();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_UserQuestionAnswer") 
	export class UserQuestionAnswer extends Message<UserQuestionAnswer> { 
		constructor(param?: Properties<UserQuestionAnswer>) {  
			super(); 
			if (param) { 
				this.questionID = param.questionID!
				this.answers = param.answers!
				} 
			} 
			@Field.d(1, "string", "optional")
			questionID:string = "";
			@Field.d(2, customersvc.UserAnswer, "repeated")
			answers:customersvc.UserAnswer[] = [];
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_UserAnswerSheet") 
	export class UserAnswerSheet extends Message<UserAnswerSheet> { 
		constructor(param?: Properties<UserAnswerSheet>) {  
			super(); 
			if (param) { 
				this.questionnaireID = param.questionnaireID!
				this.UID = param.UID!
				this.answers = param.answers!
				this.createdAt = param.createdAt!
				} 
			} 
			@Field.d(1, "string", "optional")
			questionnaireID:string = "";
			@Field.d(2, "int64", "optional")
			UID:number = 0;
			@Field.d(3, customersvc.UserQuestionAnswer, "repeated")
			answers:customersvc.UserQuestionAnswer[] = [];
			@Field.d(4, "int64", "optional")
			createdAt:number = 0;
	} 
	
	@Type.d("Type_tss_hall_customersvc_v1_proto_RadioStatistics") 
	export class RadioStatistics extends Message<RadioStatistics> { 
		constructor(param?: Properties<RadioStatistics>) {  
			super(); 
			if (param) { 
				this.radioVal = param.radioVal!
				this.cnt = param.cnt!
				} 
			} 
			@Field.d(1, "int32", "optional")
			radioVal:number = 0;
			@Field.d(2, "int32", "optional")
			cnt:number = 0;
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_AnswerStatistics") 
	export class AnswerStatistics extends Message<AnswerStatistics> { 
		constructor(param?: Properties<AnswerStatistics>) {  
			super(); 
			if (param) { 
				this.answerID = param.answerID!
				this.cnt = param.cnt!
				this.radioAnswers = param.radioAnswers!
				} 
			} 
			@Field.d(1, "string", "optional")
			answerID:string = "";
			@Field.d(2, "int32", "optional")
			cnt:number = 0;
			@Field.d(3, customersvc.RadioStatistics, "repeated")
			radioAnswers:customersvc.RadioStatistics[] = [];
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_QuestionStatistics") 
	export class QuestionStatistics extends Message<QuestionStatistics> { 
		constructor(param?: Properties<QuestionStatistics>) {  
			super(); 
			if (param) { 
				this.questionID = param.questionID!
				this.answers = param.answers!
				} 
			} 
			@Field.d(1, "string", "optional")
			questionID:string = "";
			@Field.d(2, customersvc.AnswerStatistics, "repeated")
			answers:customersvc.AnswerStatistics[] = [];
	} 
	
	
	@Type.d("Type_tss_hall_customersvc_v1_proto_CreateQuestionnaireReq") 
	export class CreateQuestionnaireReq extends Message<CreateQuestionnaireReq> { 
		constructor(param?: Properties<CreateQuestionnaireReq>) {  
			super(); 
			if (param) { 
				this.questionnaire = new customersvc.Questionnaire(param.questionnaire!)
				} 
			} 
			@Field.d(1, customersvc.Questionnaire, "optional")
			questionnaire:customersvc.Questionnaire =  new customersvc.Questionnaire();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_CreateQuestionnaireResp") 
	export class CreateQuestionnaireResp extends Message<CreateQuestionnaireResp> { 
		constructor(param?: Properties<CreateQuestionnaireResp>) {  
			super(); 
			if (param) { 
				this.questionnaire = new customersvc.Questionnaire(param.questionnaire!)
				} 
			} 
			@Field.d(1, customersvc.Questionnaire, "optional")
			questionnaire:customersvc.Questionnaire =  new customersvc.Questionnaire();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_GetQuestionnaireReq") 
	export class GetQuestionnaireReq extends Message<GetQuestionnaireReq> { 
		constructor(param?: Properties<GetQuestionnaireReq>) {  
			super(); 
			if (param) { 
				this.id = param.id!
				} 
			} 
			@Field.d(1, "string", "optional")
			id:string = "";
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_GetQuestionnaireResp") 
	export class GetQuestionnaireResp extends Message<GetQuestionnaireResp> { 
		constructor(param?: Properties<GetQuestionnaireResp>) {  
			super(); 
			if (param) { 
				this.questionnaire = new customersvc.Questionnaire(param.questionnaire!)
				} 
			} 
			@Field.d(1, customersvc.Questionnaire, "optional")
			questionnaire:customersvc.Questionnaire =  new customersvc.Questionnaire();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_ListQuestionnaireReq") 
	export class ListQuestionnaireReq extends Message<ListQuestionnaireReq> { 
		constructor(param?: Properties<ListQuestionnaireReq>) {  
			super(); 
			if (param) { 
				this.page = param.page!
				this.pageSize = param.pageSize!
				this.state = param.state!
				} 
			} 
			@Field.d(1, "int32", "optional")
			page:number = 0;
			@Field.d(2, "int32", "optional")
			pageSize:number = 0;
			@Field.d(3, common_common_define.State, "optional")
			state:common_common_define.State = 0;
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_ListQuestionnaireResp") 
	export class ListQuestionnaireResp extends Message<ListQuestionnaireResp> { 
		constructor(param?: Properties<ListQuestionnaireResp>) {  
			super(); 
			if (param) { 
				this.total = param.total!
				this.questionnaire = param.questionnaire!
				} 
			} 
			@Field.d(1, "int32", "optional")
			total:number = 0;
			@Field.d(2, customersvc.Questionnaire, "repeated")
			questionnaire:customersvc.Questionnaire[] = [];
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_UpdateQuestionnaireReq") 
	export class UpdateQuestionnaireReq extends Message<UpdateQuestionnaireReq> { 
		constructor(param?: Properties<UpdateQuestionnaireReq>) {  
			super(); 
			if (param) { 
				this.questionnaire = new customersvc.Questionnaire(param.questionnaire!)
				} 
			} 
			@Field.d(1, customersvc.Questionnaire, "optional")
			questionnaire:customersvc.Questionnaire =  new customersvc.Questionnaire();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_UpdateQuestionnaireResp") 
	export class UpdateQuestionnaireResp extends Message<UpdateQuestionnaireResp> { 
		constructor(param?: Properties<UpdateQuestionnaireResp>) {  
			super(); 
			if (param) { 
				this.questionnaire = new customersvc.Questionnaire(param.questionnaire!)
				} 
			} 
			@Field.d(1, customersvc.Questionnaire, "optional")
			questionnaire:customersvc.Questionnaire =  new customersvc.Questionnaire();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_DeleteQuestionnaireReq") 
	export class DeleteQuestionnaireReq extends Message<DeleteQuestionnaireReq> { 
		constructor(param?: Properties<DeleteQuestionnaireReq>) {  
			super(); 
			if (param) { 
				this.id = param.id!
				} 
			} 
			@Field.d(1, "string", "optional")
			id:string = "";
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_GetQuestionnaireStatisticsReq") 
	export class GetQuestionnaireStatisticsReq extends Message<GetQuestionnaireStatisticsReq> { 
		constructor(param?: Properties<GetQuestionnaireStatisticsReq>) {  
			super(); 
			if (param) { 
				this.id = param.id!
				} 
			} 
			@Field.d(1, "string", "optional")
			id:string = "";
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_GetQuestionnaireStatisticsResp") 
	export class GetQuestionnaireStatisticsResp extends Message<GetQuestionnaireStatisticsResp> { 
		constructor(param?: Properties<GetQuestionnaireStatisticsResp>) {  
			super(); 
			if (param) { 
				this.Statistics = param.Statistics!
				this.answersCnt = param.answersCnt!
				} 
			} 
			@Field.d(1, customersvc.QuestionStatistics, "repeated")
			Statistics:customersvc.QuestionStatistics[] = [];
			@Field.d(2, "int32", "optional")
			answersCnt:number = 0;
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_CreateQuestionnaireAnswerSheetReq") 
	export class CreateQuestionnaireAnswerSheetReq extends Message<CreateQuestionnaireAnswerSheetReq> { 
		constructor(param?: Properties<CreateQuestionnaireAnswerSheetReq>) {  
			super(); 
			if (param) { 
				this.answerSheet = new customersvc.UserAnswerSheet(param.answerSheet!)
				} 
			} 
			@Field.d(1, customersvc.UserAnswerSheet, "optional")
			answerSheet:customersvc.UserAnswerSheet =  new customersvc.UserAnswerSheet();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_CreateQuestionnaireAnswerSheetResp") 
	export class CreateQuestionnaireAnswerSheetResp extends Message<CreateQuestionnaireAnswerSheetResp> { 
		constructor(param?: Properties<CreateQuestionnaireAnswerSheetResp>) {  
			super(); 
			if (param) { 
				this.code = param.code!
				this.haveAward = param.haveAward!
				} 
			} 
			@Field.d(1, 'int32', "optional")
			code:number = 0;
			@Field.d(2, "bool", "optional")
			haveAward:boolean = false;
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_ListQuestionnaireAnswersReq") 
	export class ListQuestionnaireAnswersReq extends Message<ListQuestionnaireAnswersReq> { 
		constructor(param?: Properties<ListQuestionnaireAnswersReq>) {  
			super(); 
			if (param) { 
				this.id = param.id!
				this.page = param.page!
				this.pageSize = param.pageSize!
				} 
			} 
			@Field.d(1, "string", "optional")
			id:string = "";
			@Field.d(2, "int32", "optional")
			page:number = 0;
			@Field.d(3, "int32", "optional")
			pageSize:number = 0;
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_ListQuestionnaireAnswersResp") 
	export class ListQuestionnaireAnswersResp extends Message<ListQuestionnaireAnswersResp> { 
		constructor(param?: Properties<ListQuestionnaireAnswersResp>) {  
			super(); 
			if (param) { 
				this.questionnaire = new customersvc.Questionnaire(param.questionnaire!)
				this.sheets = param.sheets!
				this.total = param.total!
				} 
			} 
			@Field.d(1, customersvc.Questionnaire, "optional")
			questionnaire:customersvc.Questionnaire =  new customersvc.Questionnaire();
			@Field.d(2, customersvc.UserAnswerSheet, "repeated")
			sheets:customersvc.UserAnswerSheet[] = [];
			@Field.d(3, "int64", "optional")
			total:number = 0;
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_GetUserAnswerSheetReq") 
	export class GetUserAnswerSheetReq extends Message<GetUserAnswerSheetReq> { 
		constructor(param?: Properties<GetUserAnswerSheetReq>) {  
			super(); 
			if (param) { 
				this.questionnaireID = param.questionnaireID!
				this.uid = param.uid!
				} 
			} 
			@Field.d(1, "string", "optional")
			questionnaireID:string = "";
			@Field.d(2, "int64", "optional")
			uid:number = 0;
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_GetUserAnswerSheetResp") 
	export class GetUserAnswerSheetResp extends Message<GetUserAnswerSheetResp> { 
		constructor(param?: Properties<GetUserAnswerSheetResp>) {  
			super(); 
			if (param) { 
				this.alreadyAnswer = param.alreadyAnswer!
				} 
			} 
			@Field.d(1, "bool", "optional")
			alreadyAnswer:boolean = false;
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_FollowGiftConfig") 
	export class FollowGiftConfig extends Message<FollowGiftConfig> { 
		constructor(param?: Properties<FollowGiftConfig>) {  
			super(); 
			if (param) { 
				this.award = new customersvc.AwardConfig(param.award!)
				this.acquireRule = param.acquireRule!
				this.operator = param.operator!
				} 
			} 
			@Field.d(1, customersvc.AwardConfig, "optional")
			award:customersvc.AwardConfig =  new customersvc.AwardConfig();
			@Field.d(2, "string", "optional")
			acquireRule:string = "";
			@Field.d(3, "string", "optional")
			operator:string = "";
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_GetFollowGiftConfigResp") 
	export class GetFollowGiftConfigResp extends Message<GetFollowGiftConfigResp> { 
		constructor(param?: Properties<GetFollowGiftConfigResp>) {  
			super(); 
			if (param) { 
				this.code = param.code!
				this.config = new customersvc.FollowGiftConfig(param.config!)
				} 
			} 
			@Field.d(1, customersvc.UserGiftStateErrorCode, "optional")
			code:customersvc.UserGiftStateErrorCode = 0;
			@Field.d(2, customersvc.FollowGiftConfig, "optional")
			config:customersvc.FollowGiftConfig =  new customersvc.FollowGiftConfig();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_UpsertFollowGiftConfigReq") 
	export class UpsertFollowGiftConfigReq extends Message<UpsertFollowGiftConfigReq> { 
		constructor(param?: Properties<UpsertFollowGiftConfigReq>) {  
			super(); 
			if (param) { 
				this.config = new customersvc.FollowGiftConfig(param.config!)
				} 
			} 
			@Field.d(1, customersvc.FollowGiftConfig, "optional")
			config:customersvc.FollowGiftConfig =  new customersvc.FollowGiftConfig();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_WealGiftConfig") 
	export class WealGiftConfig extends Message<WealGiftConfig> { 
		constructor(param?: Properties<WealGiftConfig>) {  
			super(); 
			if (param) { 
				this.award = new customersvc.AwardConfig(param.award!)
				this.acquireRule = param.acquireRule!
				this.name = param.name!
				this.periodType = param.periodType!
				this.periodCnt = param.periodCnt!
				this.operator = param.operator!
				} 
			} 
			@Field.d(1, customersvc.AwardConfig, "optional")
			award:customersvc.AwardConfig =  new customersvc.AwardConfig();
			@Field.d(2, "string", "optional")
			acquireRule:string = "";
			@Field.d(3, "string", "optional")
			name:string = "";
			@Field.d(4, customersvc.PeriodType, "optional")
			periodType:customersvc.PeriodType = 0;
			@Field.d(5, "int64", "optional")
			periodCnt:number = 0;
			@Field.d(6, "string", "optional")
			operator:string = "";
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_GetWealGiftConfigResp") 
	export class GetWealGiftConfigResp extends Message<GetWealGiftConfigResp> { 
		constructor(param?: Properties<GetWealGiftConfigResp>) {  
			super(); 
			if (param) { 
				this.code = param.code!
				this.config = new customersvc.WealGiftConfig(param.config!)
				} 
			} 
			@Field.d(1, customersvc.UserGiftStateErrorCode, "optional")
			code:customersvc.UserGiftStateErrorCode = 0;
			@Field.d(2, customersvc.WealGiftConfig, "optional")
			config:customersvc.WealGiftConfig =  new customersvc.WealGiftConfig();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_UpsertWealGiftConfigReq") 
	export class UpsertWealGiftConfigReq extends Message<UpsertWealGiftConfigReq> { 
		constructor(param?: Properties<UpsertWealGiftConfigReq>) {  
			super(); 
			if (param) { 
				this.config = new customersvc.WealGiftConfig(param.config!)
				} 
			} 
			@Field.d(1, customersvc.WealGiftConfig, "optional")
			config:customersvc.WealGiftConfig =  new customersvc.WealGiftConfig();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_UserGiftState") 
	export class UserGiftState extends Message<UserGiftState> { 
		constructor(param?: Properties<UserGiftState>) {  
			super(); 
			if (param) { 
				this.uid = param.uid!
				this.state = param.state!
				} 
			} 
			@Field.d(1, "int64", "optional")
			uid:number = 0;
			@Field.d(2, customersvc.UserGiftStateType, "optional")
			state:customersvc.UserGiftStateType = 0;
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_GetUserFollowGiftStateResp") 
	export class GetUserFollowGiftStateResp extends Message<GetUserFollowGiftStateResp> { 
		constructor(param?: Properties<GetUserFollowGiftStateResp>) {  
			super(); 
			if (param) { 
				this.code = param.code!
				this.userState = new customersvc.UserGiftState(param.userState!)
				} 
			} 
			@Field.d(1, customersvc.UserGiftStateErrorCode, "optional")
			code:customersvc.UserGiftStateErrorCode = 0;
			@Field.d(2, customersvc.UserGiftState, "optional")
			userState:customersvc.UserGiftState =  new customersvc.UserGiftState();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_GetUserWealGiftStateResp") 
	export class GetUserWealGiftStateResp extends Message<GetUserWealGiftStateResp> { 
		constructor(param?: Properties<GetUserWealGiftStateResp>) {  
			super(); 
			if (param) { 
				this.code = param.code!
				this.userState = new customersvc.UserGiftState(param.userState!)
				} 
			} 
			@Field.d(1, customersvc.UserGiftStateErrorCode, "optional")
			code:customersvc.UserGiftStateErrorCode = 0;
			@Field.d(2, customersvc.UserGiftState, "optional")
			userState:customersvc.UserGiftState =  new customersvc.UserGiftState();
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_AcquireFollowGiftResp") 
	export class AcquireFollowGiftResp extends Message<AcquireFollowGiftResp> { 
		constructor(param?: Properties<AcquireFollowGiftResp>) {  
			super(); 
			if (param) { 
				this.code = param.code!
				} 
			} 
			@Field.d(1, customersvc.UserGiftStateErrorCode, "optional")
			code:customersvc.UserGiftStateErrorCode = 0;
	} 
	@Type.d("Type_tss_hall_customersvc_v1_proto_AcquireWealGiftResp") 
	export class AcquireWealGiftResp extends Message<AcquireWealGiftResp> { 
		constructor(param?: Properties<AcquireWealGiftResp>) {  
			super(); 
			if (param) { 
				this.code = param.code!
				} 
			} 
			@Field.d(1, customersvc.UserGiftStateErrorCode, "optional")
			code:customersvc.UserGiftStateErrorCode = 0;
	} 
export const CustomersvcServer = {
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
		space ? this.config.space = space : 'tony';
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
	async createQuestionnaire(param:CreateQuestionnaireReq):Promise<CreateQuestionnaireResp|null> {
		const buffer = CreateQuestionnaireReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 10001, "CreateQuestionnaire", buffer, this.config);
		return rsp.code === 0 ? CreateQuestionnaireResp.decode(rsp.data) : null;
	},
	async getQuestionnaire(param:GetQuestionnaireReq):Promise<GetQuestionnaireResp|null> {
		const buffer = GetQuestionnaireReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 3, "GetQuestionnaire", buffer, this.config);
		return rsp.code === 0 ? GetQuestionnaireResp.decode(rsp.data) : null;
	},
	async listQuestionnaire(param:ListQuestionnaireReq):Promise<ListQuestionnaireResp|null> {
		const buffer = ListQuestionnaireReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 1, "ListQuestionnaire", buffer, this.config);
		return rsp.code === 0 ? ListQuestionnaireResp.decode(rsp.data) : null;
	},
	async updateQuestionnaire(param:UpdateQuestionnaireReq):Promise<UpdateQuestionnaireResp|null> {
		const buffer = UpdateQuestionnaireReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 10003, "UpdateQuestionnaire", buffer, this.config);
		return rsp.code === 0 ? UpdateQuestionnaireResp.decode(rsp.data) : null;
	},
	async deleteQuestionnaire(param:DeleteQuestionnaireReq):Promise<base.Void|null> {
		const buffer = DeleteQuestionnaireReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 10004, "DeleteQuestionnaire", buffer, this.config);
		return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
	},
	async getQuestionnaireStatistics(param:GetQuestionnaireStatisticsReq):Promise<GetQuestionnaireStatisticsResp|null> {
		const buffer = GetQuestionnaireStatisticsReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 10005, "GetQuestionnaireStatistics", buffer, this.config);
		return rsp.code === 0 ? GetQuestionnaireStatisticsResp.decode(rsp.data) : null;
	},
	async listQuestionnaireAnswers(param:ListQuestionnaireAnswersReq):Promise<ListQuestionnaireAnswersResp|null> {
		const buffer = ListQuestionnaireAnswersReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 10006, "ListQuestionnaireAnswers", buffer, this.config);
		return rsp.code === 0 ? ListQuestionnaireAnswersResp.decode(rsp.data) : null;
	},
	async createQuestionnaireAnswerSheet(param:CreateQuestionnaireAnswerSheetReq):Promise<CreateQuestionnaireAnswerSheetResp|null> {
		const buffer = CreateQuestionnaireAnswerSheetReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 2, "CreateQuestionnaireAnswerSheet", buffer, this.config);
		return rsp.code === 0 ? CreateQuestionnaireAnswerSheetResp.decode(rsp.data) : null;
	},
	async getUserAnswerSheet(param:GetUserAnswerSheetReq):Promise<GetUserAnswerSheetResp|null> {
		const buffer = GetUserAnswerSheetReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 4, "GetUserAnswerSheet", buffer, this.config);
		return rsp.code === 0 ? GetUserAnswerSheetResp.decode(rsp.data) : null;
	},
	async getFollowGiftConfig(param:base.Void):Promise<GetFollowGiftConfigResp|null> {
		const buffer = base.Void.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 5, "GetFollowGiftConfig", buffer, this.config);
		return rsp.code === 0 ? GetFollowGiftConfigResp.decode(rsp.data) : null;
	},
	async upsertFollowGiftConfig(param:UpsertFollowGiftConfigReq):Promise<base.Void|null> {
		const buffer = UpsertFollowGiftConfigReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 10008, "UpsertFollowGiftConfig", buffer, this.config);
		return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
	},
	async acquireFollowGift(param:base.Void):Promise<AcquireFollowGiftResp|null> {
		const buffer = base.Void.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 6, "AcquireFollowGift", buffer, this.config);
		return rsp.code === 0 ? AcquireFollowGiftResp.decode(rsp.data) : null;
	},
	async getUserFollowGiftState(param:base.Void):Promise<GetUserFollowGiftStateResp|null> {
		const buffer = base.Void.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 7, "GetUserFollowGiftState", buffer, this.config);
		return rsp.code === 0 ? GetUserFollowGiftStateResp.decode(rsp.data) : null;
	},
	async getWealGiftConfig(param:base.Void):Promise<GetWealGiftConfigResp|null> {
		const buffer = base.Void.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 8, "GetWealGiftConfig", buffer, this.config);
		return rsp.code === 0 ? GetWealGiftConfigResp.decode(rsp.data) : null;
	},
	async upsertWealGiftConfig(param:UpsertWealGiftConfigReq):Promise<base.Void|null> {
		const buffer = UpsertWealGiftConfigReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 10012, "UpsertWealGiftConfig", buffer, this.config);
		return rsp.code === 0 ? base.Void.decode(rsp.data) : null;
	},
	async acquireWealGift(param:base.Void):Promise<AcquireWealGiftResp|null> {
		const buffer = base.Void.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 9, "AcquireWealGift", buffer, this.config);
		return rsp.code === 0 ? AcquireWealGiftResp.decode(rsp.data) : null;
	},
	async getUserWealGiftState(param:base.Void):Promise<GetUserWealGiftStateResp|null> {
		const buffer = base.Void.encode(param).finish();
		let rsp =  await byRpc.sendV2("tss.hall.customersvc.v1", 10, "GetUserWealGiftState", buffer, this.config);
		return rsp.code === 0 ? GetUserWealGiftStateResp.decode(rsp.data) : null;
	},
}
}
