/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace component {
export enum PlatTypeCode {
	WIN = 0,
	IOS = 1,
	ANDROID = 2,
	WEB = 3,
	MAC = 4,
}
@Type.d("Type_bgo_component_common_msg_proto_UesrOnLine") 
export class UesrOnLine extends Message<UesrOnLine> { 
	constructor(param?: Properties<UesrOnLine>) {  
		super(); 
		if (param) { 
			this.PlatType = param.PlatType!
			this.Fid = param.Fid!
			this.IP = param.IP!
			} 
		} 
		@Field.d(1, PlatTypeCode, "optional")
		PlatType:PlatTypeCode = 0;
		@Field.d(2, "int64", "optional")
		Fid:number = 0;
		@Field.d(3, "string", "optional")
		IP:string = "";
} 
@Type.d("Type_bgo_component_common_msg_proto_UesrOffLine") 
export class UesrOffLine extends Message<UesrOffLine> { 
	constructor(param?: Properties<UesrOffLine>) {  
		super(); 
		if (param) { 
			this.Fid = param.Fid!
			} 
		} 
		@Field.d(1, "int64", "optional")
		Fid:number = 0;
} 
@Type.d("Type_bgo_component_common_msg_proto_ServerChange") 
export class ServerChange extends Message<ServerChange> { 
	constructor(param?: Properties<ServerChange>) {  
		super(); 
		if (param) { 
			this.Name = param.Name!
			this.ID = param.ID!
			} 
		} 
		@Field.d(1, "string", "required")
		Name:string = "";
		@Field.d(2, "uint32", "required")
		ID:number = 0;
} 
}
