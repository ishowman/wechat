/* eslint-disable */ 
import { rpcPlugin as byRpc ,ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace base {
@Type.d("Type_base_base_proto_Void") 
export class Void extends Message<Void> { 
	constructor(param?: Properties<Void>) {  
		super(); 
		if (param) { 
			} 
		} 
} 
@Type.d("Type_base_base_proto_Label") 
export class Label extends Message<Label> { 
	constructor(param?: Properties<Label>) {  
		super(); 
		if (param) { 
			this.Key = param.Key!
			this.Value = param.Value!
			} 
		} 
		@Field.d(1, "string", "optional")
		Key:string = "";
		@Field.d(2, "string", "optional")
		Value:string = "";
} 
@Type.d("Type_base_base_proto_ExceptionResp") 
export class ExceptionResp extends Message<ExceptionResp> { 
	constructor(param?: Properties<ExceptionResp>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			} 
		} 
		@Field.d(1, "int32", "required")
		code:number = 0;
} 
@Type.d("Type_base_base_proto_FieldMask") 
export class FieldMask extends Message<FieldMask> { 
	constructor(param?: Properties<FieldMask>) {  
		super(); 
		if (param) { 
			this.paths = param.paths!
			} 
		} 
		@Field.d(1, "string", "repeated")
		paths:string[] = [];
} 
@Type.d("Type_base_base_proto_SyncDependence") 
export class SyncDependence extends Message<SyncDependence> { 
	constructor(param?: Properties<SyncDependence>) {  
		super(); 
		if (param) { 
			this.serviceName = param.serviceName!
			this.updateId = param.updateId!
			this.getId = param.getId!
			this.int64Ids = param.int64Ids!
			this.stringIds = param.stringIds!
			} 
		} 
		@Field.d(1, "string", "required")
		serviceName:string = "";
		@Field.d(2, "int32", "required")
		updateId:number = 0;
		@Field.d(3, "int32", "required")
		getId:number = 0;
		@Field.d(4, "int64", "repeated")
		int64Ids:number[] = [];
		@Field.d(5, "string", "repeated")
		stringIds:string[] = [];
} 
@Type.d("Type_base_base_proto_BatchGetResourceReq") 
export class BatchGetResourceReq extends Message<BatchGetResourceReq> { 
	constructor(param?: Properties<BatchGetResourceReq>) {  
		super(); 
		if (param) { 
			this.int64Ids = param.int64Ids!
			this.stringIds = param.stringIds!
			this.operator = param.operator!
			} 
		} 
		@Field.d(1, "int64", "repeated")
		int64Ids:number[] = [];
		@Field.d(2, "string", "repeated")
		stringIds:string[] = [];
		@Field.d(3, "string", "optional")
		operator:string = "";
} 
@Type.d("Type_base_base_proto_Resource") 
export class Resource extends Message<Resource> { 
	constructor(param?: Properties<Resource>) {  
		super(); 
		if (param) { 
			this.id = param.id!
			this.updateData = new Uint8Array(param.updateData!)
			this.checksum = param.checksum!
			this.dependencies = param.dependencies!
			this.desc = param.desc!
			this.stringID = param.stringID!
			} 
		} 
		@Field.d(1, "int64", "optional")
		id:number = 0;
		@Field.d(2, "bytes", "optional")
		updateData:Uint8Array =  new Uint8Array();
		@Field.d(3, "string", "optional")
		checksum:string = "";
		@Field.d(4, SyncDependence, "repeated")
		dependencies:SyncDependence[] = [];
		@Field.d(5, "string", "optional")
		desc:string = "";
		@Field.d(6, "string", "optional")
		stringID:string = "";
} 
@Type.d("Type_base_base_proto_BatchGetResourceResp") 
export class BatchGetResourceResp extends Message<BatchGetResourceResp> { 
	constructor(param?: Properties<BatchGetResourceResp>) {  
		super(); 
		if (param) { 
			this.resources = param.resources!
			} 
		} 
		@Field.d(1, Resource, "repeated")
		resources:Resource[] = [];
} 
@Type.d("Type_base_base_proto_ResourceDesc") 
export class ResourceDesc extends Message<ResourceDesc> { 
	constructor(param?: Properties<ResourceDesc>) {  
		super(); 
		if (param) { 
			this.serviceName = param.serviceName!
			this.getID = param.getID!
			this.updateID = param.updateID!
			this.ids = param.ids!
			} 
		} 
		@Field.d(1, "string", "optional")
		serviceName:string = "";
		@Field.d(2, "int32", "optional")
		getID:number = 0;
		@Field.d(3, "int32", "optional")
		updateID:number = 0;
		@Field.d(4, "int64", "repeated")
		ids:number[] = [];
} 
}
