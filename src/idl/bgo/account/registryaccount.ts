/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
import { account as account_common_account} from '@/idl/bgo/account/common_account';
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace registryaccount {
@Type.d("Type_bgo_account_registryaccount_proto_MsgBytes") 
export class MsgBytes extends Message<MsgBytes> { 
	constructor(param?: Properties<MsgBytes>) {  
		super(); 
		if (param) { 
			this.bytes = new Uint8Array(param.bytes!)
			} 
		} 
		@Field.d(1, "bytes", "optional")
		bytes:Uint8Array =  new Uint8Array();
} 
@Type.d("Type_bgo_account_registryaccount_proto_RegisterRequest") 
export class RegisterRequest extends Message<RegisterRequest> { 
	constructor(param?: Properties<RegisterRequest>) {  
		super(); 
		if (param) { 
			this.AccountType = param.AccountType!
			this.Account = param.Account!
			this.Password = param.Password!
			this.UserInfo = new account_common_account.UserInfo(param.UserInfo!)
			this.SmsCode = param.SmsCode!
			this.ZoneID = param.ZoneID!
			this.PlatUid = param.PlatUid!
			this.ThirdToken = param.ThirdToken!
			this.Phone = param.Phone!
			this.Email = param.Email!
			} 
		} 
		@Field.d(1, account_common_account.AccountType, "optional")
		AccountType:account_common_account.AccountType = 0;
		@Field.d(2, "string", "optional")
		Account:string = "";
		@Field.d(3, "string", "optional")
		Password:string = "";
		@Field.d(4, account_common_account.UserInfo, "optional")
		UserInfo:account_common_account.UserInfo =  new account_common_account.UserInfo();
		@Field.d(5, "int32", "optional")
		SmsCode:number = 0;
		@Field.d(6, "int32", "optional")
		ZoneID:number = 0;
		@Field.d(7, "string", "optional")
		PlatUid:string = "";
		@Field.d(8, "string", "optional")
		ThirdToken:string = "";
		@Field.d(9, "string", "optional")
		Phone:string = "";
		@Field.d(10, "string", "optional")
		Email:string = "";
} 
@Type.d("Type_bgo_account_registryaccount_proto_RegisterResponse") 
export class RegisterResponse extends Message<RegisterResponse> { 
	constructor(param?: Properties<RegisterResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.UID = param.UID!
			this.ExpiredTime = param.ExpiredTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int64", "optional")
		UID:number = 0;
		@Field.d(3, "int64", "optional")
		ExpiredTime:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_ChangePasswordRequest") 
export class ChangePasswordRequest extends Message<ChangePasswordRequest> { 
	constructor(param?: Properties<ChangePasswordRequest>) {  
		super(); 
		if (param) { 
			this.AccountType = param.AccountType!
			this.Account = param.Account!
			this.UID = param.UID!
			this.OldPassword = param.OldPassword!
			this.NewPassword = param.NewPassword!
			this.SmsCode = param.SmsCode!
			} 
		} 
		@Field.d(1, account_common_account.AccountType, "optional")
		AccountType:account_common_account.AccountType = 0;
		@Field.d(2, "string", "optional")
		Account:string = "";
		@Field.d(3, "int64", "optional")
		UID:number = 0;
		@Field.d(4, "string", "optional")
		OldPassword:string = "";
		@Field.d(5, "string", "optional")
		NewPassword:string = "";
		@Field.d(6, "int32", "optional")
		SmsCode:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_ChangePasswordResponse") 
export class ChangePasswordResponse extends Message<ChangePasswordResponse> { 
	constructor(param?: Properties<ChangePasswordResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.UID = param.UID!
			this.ExpiredTime = param.ExpiredTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int64", "optional")
		UID:number = 0;
		@Field.d(3, "int64", "optional")
		ExpiredTime:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_GetSmsCodeRequest") 
export class GetSmsCodeRequest extends Message<GetSmsCodeRequest> { 
	constructor(param?: Properties<GetSmsCodeRequest>) {  
		super(); 
		if (param) { 
			this.Phone = param.Phone!
			this.ZoneID = param.ZoneID!
			this.SmsType = param.SmsType!
			} 
		} 
		@Field.d(1, "string", "optional")
		Phone:string = "";
		@Field.d(2, "int32", "optional")
		ZoneID:number = 0;
		@Field.d(3, account_common_account.SmsType, "optional")
		SmsType:account_common_account.SmsType = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_GetSmsCodeResponse") 
export class GetSmsCodeResponse extends Message<GetSmsCodeResponse> { 
	constructor(param?: Properties<GetSmsCodeResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.ExpireTime = param.ExpireTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int64", "optional")
		ExpireTime:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_PreCheckCSmsCodeRequest") 
export class PreCheckCSmsCodeRequest extends Message<PreCheckCSmsCodeRequest> { 
	constructor(param?: Properties<PreCheckCSmsCodeRequest>) {  
		super(); 
		if (param) { 
			this.Phone = param.Phone!
			this.ZoneID = param.ZoneID!
			this.SmsType = param.SmsType!
			this.SmsCode = param.SmsCode!
			} 
		} 
		@Field.d(1, "string", "optional")
		Phone:string = "";
		@Field.d(2, "int32", "optional")
		ZoneID:number = 0;
		@Field.d(3, account_common_account.SmsType, "optional")
		SmsType:account_common_account.SmsType = 0;
		@Field.d(4, "int32", "optional")
		SmsCode:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_PreCheckCSmsCodeResponse") 
export class PreCheckCSmsCodeResponse extends Message<PreCheckCSmsCodeResponse> { 
	constructor(param?: Properties<PreCheckCSmsCodeResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.ExpireTime = param.ExpireTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int64", "optional")
		ExpireTime:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_ResetPasswordRequest") 
export class ResetPasswordRequest extends Message<ResetPasswordRequest> { 
	constructor(param?: Properties<ResetPasswordRequest>) {  
		super(); 
		if (param) { 
			this.AccountType = param.AccountType!
			this.Account = param.Account!
			this.Password = param.Password!
			this.SmsCode = param.SmsCode!
			this.ZoneID = param.ZoneID!
			} 
		} 
		@Field.d(1, account_common_account.AccountType, "optional")
		AccountType:account_common_account.AccountType = 0;
		@Field.d(2, "string", "optional")
		Account:string = "";
		@Field.d(3, "string", "optional")
		Password:string = "";
		@Field.d(4, "int32", "optional")
		SmsCode:number = 0;
		@Field.d(5, "int32", "optional")
		ZoneID:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_ResetPasswordResponse") 
export class ResetPasswordResponse extends Message<ResetPasswordResponse> { 
	constructor(param?: Properties<ResetPasswordResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.UID = param.UID!
			this.ExpiredTime = param.ExpiredTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int64", "optional")
		UID:number = 0;
		@Field.d(3, "int64", "optional")
		ExpiredTime:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_BindThirdPlatRequest") 
export class BindThirdPlatRequest extends Message<BindThirdPlatRequest> { 
	constructor(param?: Properties<BindThirdPlatRequest>) {  
		super(); 
		if (param) { 
			this.AccountType = param.AccountType!
			this.PlatUid = param.PlatUid!
			this.ThirdToken = param.ThirdToken!
			this.Ext = param.Ext!
			} 
		} 
		@Field.d(1, account_common_account.AccountType, "optional")
		AccountType:account_common_account.AccountType = 0;
		@Field.d(2, "string", "optional")
		PlatUid:string = "";
		@Field.d(3, "string", "optional")
		ThirdToken:string = "";
		@Field.d(4, "string", "optional")
		Ext:string = "";
} 
@Type.d("Type_bgo_account_registryaccount_proto_BindThirdPlatResponse") 
export class BindThirdPlatResponse extends Message<BindThirdPlatResponse> { 
	constructor(param?: Properties<BindThirdPlatResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_GetMailCodeRequest") 
export class GetMailCodeRequest extends Message<GetMailCodeRequest> { 
	constructor(param?: Properties<GetMailCodeRequest>) {  
		super(); 
		if (param) { 
			this.Email = param.Email!
			this.SmsType = param.SmsType!
			} 
		} 
		@Field.d(1, "string", "optional")
		Email:string = "";
		@Field.d(2, account_common_account.SmsType, "optional")
		SmsType:account_common_account.SmsType = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_GetMailCodeResponse") 
export class GetMailCodeResponse extends Message<GetMailCodeResponse> { 
	constructor(param?: Properties<GetMailCodeResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.ExpireTime = param.ExpireTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int64", "optional")
		ExpireTime:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_PreCheckCMailCodeRequest") 
export class PreCheckCMailCodeRequest extends Message<PreCheckCMailCodeRequest> { 
	constructor(param?: Properties<PreCheckCMailCodeRequest>) {  
		super(); 
		if (param) { 
			this.Email = param.Email!
			this.SmsType = param.SmsType!
			this.MailCode = param.MailCode!
			} 
		} 
		@Field.d(1, "string", "optional")
		Email:string = "";
		@Field.d(2, account_common_account.SmsType, "optional")
		SmsType:account_common_account.SmsType = 0;
		@Field.d(3, "int32", "optional")
		MailCode:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_PreCheckCMailCodeResponse") 
export class PreCheckCMailCodeResponse extends Message<PreCheckCMailCodeResponse> { 
	constructor(param?: Properties<PreCheckCMailCodeResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_BindPhoneRequest") 
export class BindPhoneRequest extends Message<BindPhoneRequest> { 
	constructor(param?: Properties<BindPhoneRequest>) {  
		super(); 
		if (param) { 
			this.Phone = param.Phone!
			this.SmsCode = param.SmsCode!
			this.ZoneID = param.ZoneID!
			this.Pwd = param.Pwd!
			} 
		} 
		@Field.d(1, "string", "optional")
		Phone:string = "";
		@Field.d(2, "int32", "optional")
		SmsCode:number = 0;
		@Field.d(3, "int32", "optional")
		ZoneID:number = 0;
		@Field.d(4, "string", "optional")
		Pwd:string = "";
} 
@Type.d("Type_bgo_account_registryaccount_proto_BindPhoneResponse") 
export class BindPhoneResponse extends Message<BindPhoneResponse> { 
	constructor(param?: Properties<BindPhoneResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.ExpiredTime = param.ExpiredTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(3, "int64", "optional")
		ExpiredTime:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_BindEmailRequest") 
export class BindEmailRequest extends Message<BindEmailRequest> { 
	constructor(param?: Properties<BindEmailRequest>) {  
		super(); 
		if (param) { 
			this.Email = param.Email!
			this.Code = param.Code!
			this.Pwd = param.Pwd!
			} 
		} 
		@Field.d(1, "string", "optional")
		Email:string = "";
		@Field.d(2, "int32", "optional")
		Code:number = 0;
		@Field.d(3, "string", "optional")
		Pwd:string = "";
} 
@Type.d("Type_bgo_account_registryaccount_proto_BindEmailResponse") 
export class BindEmailResponse extends Message<BindEmailResponse> { 
	constructor(param?: Properties<BindEmailResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_BindDetailsRequest") 
export class BindDetailsRequest extends Message<BindDetailsRequest> { 
	constructor(param?: Properties<BindDetailsRequest>) {  
		super(); 
		if (param) { 
			this.ThirdType = param.ThirdType!
			this.SetPwd = param.SetPwd!
			this.IsBindWhat = param.IsBindWhat!
			} 
		} 
		@Field.d(1, "int32", "optional")
		ThirdType:number = 0;
		@Field.d(2, "bool", "optional")
		SetPwd:boolean = false;
		@Field.d(3, "int32", "optional")
		IsBindWhat:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_ThirdRegisterRequest") 
export class ThirdRegisterRequest extends Message<ThirdRegisterRequest> { 
	constructor(param?: Properties<ThirdRegisterRequest>) {  
		super(); 
		if (param) { 
			this.AccountType = param.AccountType!
			this.userInfo = new account_common_account.UserInfo(param.userInfo!)
			this.ZoneID = param.ZoneID!
			this.PlatUid = param.PlatUid!
			this.ThirdToken = param.ThirdToken!
			this.Email = param.Email!
			this.Phone = param.Phone!
			} 
		} 
		@Field.d(1, account_common_account.AccountType, "optional")
		AccountType:account_common_account.AccountType = 0;
		@Field.d(2, account_common_account.UserInfo, "optional")
		userInfo:account_common_account.UserInfo =  new account_common_account.UserInfo();
		@Field.d(3, "int32", "optional")
		ZoneID:number = 0;
		@Field.d(4, "string", "optional")
		PlatUid:string = "";
		@Field.d(5, "string", "optional")
		ThirdToken:string = "";
		@Field.d(6, "string", "optional")
		Email:string = "";
		@Field.d(7, "string", "optional")
		Phone:string = "";
} 
@Type.d("Type_bgo_account_registryaccount_proto_IsBindEmailRequest") 
export class IsBindEmailRequest extends Message<IsBindEmailRequest> { 
	constructor(param?: Properties<IsBindEmailRequest>) {  
		super(); 
		if (param) { 
			this.AccountType = param.AccountType!
			this.Account = param.Account!
			} 
		} 
		@Field.d(1, account_common_account.AccountType, "optional")
		AccountType:account_common_account.AccountType = 0;
		@Field.d(2, "string", "optional")
		Account:string = "";
} 
@Type.d("Type_bgo_account_registryaccount_proto_IsBindEmailResponse") 
export class IsBindEmailResponse extends Message<IsBindEmailResponse> { 
	constructor(param?: Properties<IsBindEmailResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.Email = param.Email!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "string", "optional")
		Email:string = "";
} 
@Type.d("Type_bgo_account_registryaccount_proto_IsBindPhoneRequest") 
export class IsBindPhoneRequest extends Message<IsBindPhoneRequest> { 
	constructor(param?: Properties<IsBindPhoneRequest>) {  
		super(); 
		if (param) { 
			this.AccountType = param.AccountType!
			this.Account = param.Account!
			} 
		} 
		@Field.d(1, account_common_account.AccountType, "optional")
		AccountType:account_common_account.AccountType = 0;
		@Field.d(2, "string", "optional")
		Account:string = "";
} 
@Type.d("Type_bgo_account_registryaccount_proto_IsBindPhoneResponse") 
export class IsBindPhoneResponse extends Message<IsBindPhoneResponse> { 
	constructor(param?: Properties<IsBindPhoneResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.Phone = param.Phone!
			this.ZoneID = param.ZoneID!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "string", "optional")
		Phone:string = "";
		@Field.d(3, "int32", "optional")
		ZoneID:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_IsBindThirdResponse") 
export class IsBindThirdResponse extends Message<IsBindThirdResponse> { 
	constructor(param?: Properties<IsBindThirdResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.BindThirdType = param.BindThirdType!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int32", "optional")
		BindThirdType:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_BindDetailsResponse") 
export class BindDetailsResponse extends Message<BindDetailsResponse> { 
	constructor(param?: Properties<BindDetailsResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.SetPwd = param.SetPwd!
			this.Emailret = new IsBindEmailResponse(param.Emailret!)
			this.Phoneret = new IsBindPhoneResponse(param.Phoneret!)
			this.ThirdRet = new IsBindThirdResponse(param.ThirdRet!)
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "bool", "optional")
		SetPwd:boolean = false;
		@Field.d(3, IsBindEmailResponse, "optional")
		Emailret:IsBindEmailResponse =  new IsBindEmailResponse();
		@Field.d(4, IsBindPhoneResponse, "optional")
		Phoneret:IsBindPhoneResponse =  new IsBindPhoneResponse();
		@Field.d(5, IsBindThirdResponse, "optional")
		ThirdRet:IsBindThirdResponse =  new IsBindThirdResponse();
} 
@Type.d("Type_bgo_account_registryaccount_proto_ReleasePhoneRequest") 
export class ReleasePhoneRequest extends Message<ReleasePhoneRequest> { 
	constructor(param?: Properties<ReleasePhoneRequest>) {  
		super(); 
		if (param) { 
			this.ZoneID = param.ZoneID!
			this.Phone = param.Phone!
			this.SmsCode = param.SmsCode!
			} 
		} 
		@Field.d(1, "int32", "optional")
		ZoneID:number = 0;
		@Field.d(2, "string", "optional")
		Phone:string = "";
		@Field.d(3, "int32", "optional")
		SmsCode:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_ReleasePhoneResponse") 
export class ReleasePhoneResponse extends Message<ReleasePhoneResponse> { 
	constructor(param?: Properties<ReleasePhoneResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.ExpiredTime = param.ExpiredTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(3, "int64", "optional")
		ExpiredTime:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_ReleaseEmailRequest") 
export class ReleaseEmailRequest extends Message<ReleaseEmailRequest> { 
	constructor(param?: Properties<ReleaseEmailRequest>) {  
		super(); 
		if (param) { 
			this.Email = param.Email!
			this.Code = param.Code!
			} 
		} 
		@Field.d(1, "string", "optional")
		Email:string = "";
		@Field.d(2, "int32", "optional")
		Code:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_ReleaseEmailResponse") 
export class ReleaseEmailResponse extends Message<ReleaseEmailResponse> { 
	constructor(param?: Properties<ReleaseEmailResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_ChangeBindPhoneRequest") 
export class ChangeBindPhoneRequest extends Message<ChangeBindPhoneRequest> { 
	constructor(param?: Properties<ChangeBindPhoneRequest>) {  
		super(); 
		if (param) { 
			this.UnBindZoneID = param.UnBindZoneID!
			this.UnBindPhone = param.UnBindPhone!
			this.UnBindSmsCode = param.UnBindSmsCode!
			this.BindZoneID = param.BindZoneID!
			this.BindPhone = param.BindPhone!
			this.BindSmsCode = param.BindSmsCode!
			} 
		} 
		@Field.d(1, "int32", "optional")
		UnBindZoneID:number = 0;
		@Field.d(2, "string", "optional")
		UnBindPhone:string = "";
		@Field.d(3, "int32", "optional")
		UnBindSmsCode:number = 0;
		@Field.d(4, "int32", "optional")
		BindZoneID:number = 0;
		@Field.d(5, "string", "optional")
		BindPhone:string = "";
		@Field.d(6, "int32", "optional")
		BindSmsCode:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_ChangeBindPhoneResponse") 
export class ChangeBindPhoneResponse extends Message<ChangeBindPhoneResponse> { 
	constructor(param?: Properties<ChangeBindPhoneResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.Phone = param.Phone!
			this.ExpiredTime = param.ExpiredTime!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "string", "optional")
		Phone:string = "";
		@Field.d(3, "int64", "optional")
		ExpiredTime:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_ChangeBindEmailRequest") 
export class ChangeBindEmailRequest extends Message<ChangeBindEmailRequest> { 
	constructor(param?: Properties<ChangeBindEmailRequest>) {  
		super(); 
		if (param) { 
			this.UnBindEmail = param.UnBindEmail!
			this.UnBindCode = param.UnBindCode!
			this.BindEmail = param.BindEmail!
			this.BindCode = param.BindCode!
			} 
		} 
		@Field.d(1, "string", "optional")
		UnBindEmail:string = "";
		@Field.d(2, "int32", "optional")
		UnBindCode:number = 0;
		@Field.d(3, "string", "optional")
		BindEmail:string = "";
		@Field.d(4, "int32", "optional")
		BindCode:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_ChangeBindEmailResponse") 
export class ChangeBindEmailResponse extends Message<ChangeBindEmailResponse> { 
	constructor(param?: Properties<ChangeBindEmailResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
@Type.d("Type_bgo_account_registryaccount_proto_GetAccountNameRequest") 
export class GetAccountNameRequest extends Message<GetAccountNameRequest> { 
	constructor(param?: Properties<GetAccountNameRequest>) {  
		super(); 
		if (param) { 
			} 
		} 
} 
@Type.d("Type_bgo_account_registryaccount_proto_GetAccountNameResponse") 
export class GetAccountNameResponse extends Message<GetAccountNameResponse> { 
	constructor(param?: Properties<GetAccountNameResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.AccountName = param.AccountName!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "string", "optional")
		AccountName:string = "";
} 
@Type.d("Type_bgo_account_registryaccount_proto_HttpRegistryRequest") 
export class HttpRegistryRequest extends Message<HttpRegistryRequest> { 
	constructor(param?: Properties<HttpRegistryRequest>) {  
		super(); 
		if (param) { 
			this.AccountType = param.AccountType!
			this.Account = param.Account!
			this.PassWord = param.PassWord!
			this.Phone = param.Phone!
			this.Email = param.Email!
			this.Name = param.Name!
			this.Sex = param.Sex!
			this.IsRobot = param.IsRobot!
			this.Avatar = param.Avatar!
			} 
		} 
		@Field.d(1, account_common_account.AccountType, "optional")
		AccountType:account_common_account.AccountType = 0;
		@Field.d(2, "string", "optional")
		Account:string = "";
		@Field.d(3, "string", "optional")
		PassWord:string = "";
		@Field.d(4, "string", "optional")
		Phone:string = "";
		@Field.d(5, "string", "optional")
		Email:string = "";
		@Field.d(6, "string", "optional")
		Name:string = "";
		@Field.d(7, account_common_account.SexValue, "optional")
		Sex:account_common_account.SexValue = 0;
		@Field.d(8, "bool", "optional")
		IsRobot:boolean = false;
		@Field.d(9, "string", "optional")
		Avatar:string = "";
} 
@Type.d("Type_bgo_account_registryaccount_proto_HttpRegistryResponse") 
export class HttpRegistryResponse extends Message<HttpRegistryResponse> { 
	constructor(param?: Properties<HttpRegistryResponse>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.UID = param.UID!
			this.ErrDes = param.ErrDes!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "int64", "optional")
		UID:number = 0;
		@Field.d(3, "string", "optional")
		ErrDes:string = "";
} 
@Type.d("Type_bgo_account_registryaccount_proto_SetPswReq") 
export class SetPswReq extends Message<SetPswReq> { 
	constructor(param?: Properties<SetPswReq>) {  
		super(); 
		if (param) { 
			this.password = param.password!
			} 
		} 
		@Field.d(1, "string", "optional")
		password:string = "";
} 
@Type.d("Type_bgo_account_registryaccount_proto_SetPswResp") 
export class SetPswResp extends Message<SetPswResp> { 
	constructor(param?: Properties<SetPswResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
} 
export const RegistryAccountServer = {
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
	async registry(param:RegisterRequest):Promise<RegisterResponse|null> {
		const buffer = RegisterRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 1, "Registry", buffer, this.config);
		return rsp.code === 0 ? RegisterResponse.decode(rsp.data) : null;
	},
	async getSmsCode(param:GetSmsCodeRequest):Promise<GetSmsCodeResponse|null> {
		const buffer = GetSmsCodeRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 2, "GetSmsCode", buffer, this.config);
		return rsp.code === 0 ? GetSmsCodeResponse.decode(rsp.data) : null;
	},
	async preCheckCode(param:PreCheckCSmsCodeRequest):Promise<PreCheckCSmsCodeResponse|null> {
		const buffer = PreCheckCSmsCodeRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 3, "PreCheckCode", buffer, this.config);
		return rsp.code === 0 ? PreCheckCSmsCodeResponse.decode(rsp.data) : null;
	},
	async changePwd(param:ChangePasswordRequest):Promise<ChangePasswordResponse|null> {
		const buffer = ChangePasswordRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 4, "ChangePwd", buffer, this.config);
		return rsp.code === 0 ? ChangePasswordResponse.decode(rsp.data) : null;
	},
	async resetPwd(param:ResetPasswordRequest):Promise<ResetPasswordResponse|null> {
		const buffer = ResetPasswordRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 5, "ResetPwd", buffer, this.config);
		return rsp.code === 0 ? ResetPasswordResponse.decode(rsp.data) : null;
	},
	async thirdRegistry(param:ThirdRegisterRequest):Promise<RegisterResponse|null> {
		const buffer = ThirdRegisterRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 6, "ThirdRegistry", buffer, this.config);
		return rsp.code === 0 ? RegisterResponse.decode(rsp.data) : null;
	},
	async bindThirdPlat(param:BindThirdPlatRequest):Promise<BindThirdPlatResponse|null> {
		const buffer = BindThirdPlatRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 7, "BindThirdPlat", buffer, this.config);
		return rsp.code === 0 ? BindThirdPlatResponse.decode(rsp.data) : null;
	},
	async getMailCode(param:GetMailCodeRequest):Promise<GetMailCodeResponse|null> {
		const buffer = GetMailCodeRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 8, "GetMailCode", buffer, this.config);
		return rsp.code === 0 ? GetMailCodeResponse.decode(rsp.data) : null;
	},
	async preCheckMailCode(param:PreCheckCMailCodeRequest):Promise<PreCheckCMailCodeResponse|null> {
		const buffer = PreCheckCMailCodeRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 9, "PreCheckMailCode", buffer, this.config);
		return rsp.code === 0 ? PreCheckCMailCodeResponse.decode(rsp.data) : null;
	},
	async bindPhone(param:BindPhoneRequest):Promise<BindPhoneResponse|null> {
		const buffer = BindPhoneRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 10, "BindPhone", buffer, this.config);
		return rsp.code === 0 ? BindPhoneResponse.decode(rsp.data) : null;
	},
	async bindEmail(param:BindEmailRequest):Promise<BindEmailResponse|null> {
		const buffer = BindEmailRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 11, "BindEmail", buffer, this.config);
		return rsp.code === 0 ? BindEmailResponse.decode(rsp.data) : null;
	},
	async bindDetails(param:BindDetailsRequest):Promise<BindDetailsResponse|null> {
		const buffer = BindDetailsRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 12, "BindDetails", buffer, this.config);
		return rsp.code === 0 ? BindDetailsResponse.decode(rsp.data) : null;
	},
	async unBindPhone(param:ReleasePhoneRequest):Promise<ReleasePhoneResponse|null> {
		const buffer = ReleasePhoneRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 13, "UnBindPhone", buffer, this.config);
		return rsp.code === 0 ? ReleasePhoneResponse.decode(rsp.data) : null;
	},
	async unBindEmail(param:ReleaseEmailRequest):Promise<ReleaseEmailResponse|null> {
		const buffer = ReleaseEmailRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 14, "UnBindEmail", buffer, this.config);
		return rsp.code === 0 ? ReleaseEmailResponse.decode(rsp.data) : null;
	},
	async changeBindPhone(param:ChangeBindPhoneRequest):Promise<ChangeBindPhoneResponse|null> {
		const buffer = ChangeBindPhoneRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 15, "ChangeBindPhone", buffer, this.config);
		return rsp.code === 0 ? ChangeBindPhoneResponse.decode(rsp.data) : null;
	},
	async changeBindEmail(param:ChangeBindEmailRequest):Promise<ChangeBindEmailResponse|null> {
		const buffer = ChangeBindEmailRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 16, "ChangeBindEmail", buffer, this.config);
		return rsp.code === 0 ? ChangeBindEmailResponse.decode(rsp.data) : null;
	},
	async getAccountName(param:GetAccountNameRequest):Promise<GetAccountNameResponse|null> {
		const buffer = GetAccountNameRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 17, "GetAccountName", buffer, this.config);
		return rsp.code === 0 ? GetAccountNameResponse.decode(rsp.data) : null;
	},
	async registryByHttp(param:HttpRegistryRequest):Promise<HttpRegistryResponse|null> {
		const buffer = HttpRegistryRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 18, "RegistryByHttp", buffer, this.config);
		return rsp.code === 0 ? HttpRegistryResponse.decode(rsp.data) : null;
	},
	async registryThirdConfByHttp(param:MsgBytes):Promise<MsgBytes|null> {
		const buffer = MsgBytes.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 10002, "RegistryThirdConfByHttp", buffer, this.config);
		return rsp.code === 0 ? MsgBytes.decode(rsp.data) : null;
	},
	async bindRecommendReg(param:account_common_account.BindRecommendRegRequest):Promise<account_common_account.BindRecommendRegResponse|null> {
		const buffer = account_common_account.BindRecommendRegRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 19, "BindRecommendReg", buffer, this.config);
		return rsp.code === 0 ? account_common_account.BindRecommendRegResponse.decode(rsp.data) : null;
	},
	async getRecommendRegList(param:account_common_account.GetRecommendRegListRequest):Promise<account_common_account.GetRecommendRegListResponse|null> {
		const buffer = account_common_account.GetRecommendRegListRequest.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 20, "GetRecommendRegList", buffer, this.config);
		return rsp.code === 0 ? account_common_account.GetRecommendRegListResponse.decode(rsp.data) : null;
	},
	async setPsw(param:SetPswReq):Promise<SetPswResp|null> {
		const buffer = SetPswReq.encode(param).finish();
		let rsp =  await byRpc.sendV2("bgo.account.registryaccount", 21, "SetPsw", buffer, this.config);
		return rsp.code === 0 ? SetPswResp.decode(rsp.data) : null;
	},
}
}
