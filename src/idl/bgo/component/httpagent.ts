/* eslint-disable */ 
import { rpcPlugin as byRpc, ApiSendConfig,CMSEnv } from 'xj-core'; 
import { Message, Type, Field, OneOf } from 'protobufjs/light'; 
import { roots } from 'protobufjs'; 
type Properties<T> = { [P in keyof T]?: T[P] }; 
export namespace httpagent {
export enum AgentAppId {
	H5PrizeCenter = 1024,
}
@Type.d("Type_bgo_component_httpagent_proto_RespBody") 
export class RespBody extends Message<RespBody> { 
	constructor(param?: Properties<RespBody>) {  
		super(); 
		if (param) { 
			this.code = param.code!
			this.msg = param.msg!
			this.data = new Uint8Array(param.data!)
			} 
		} 
		@Field.d(1, "int32", "optional")
		code:number = 0;
		@Field.d(2, "string", "optional")
		msg:string = "";
		@Field.d(3, "bytes", "optional")
		data:Uint8Array =  new Uint8Array();
} 
export const HttpagentServer = {
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
}
}
