import { __decorate } from "tslib";
/* eslint-disable */
import { ApiSendConfig } from 'xj-core';
import { Message, Type, Field } from 'protobufjs/light';
export var httpagent;
(function (httpagent) {
    let AgentAppId;
    (function (AgentAppId) {
        AgentAppId[AgentAppId["H5PrizeCenter"] = 1024] = "H5PrizeCenter";
    })(AgentAppId = httpagent.AgentAppId || (httpagent.AgentAppId = {}));
    let RespBody = class RespBody extends Message {
        constructor(param) {
            super();
            this.code = 0;
            this.msg = "";
            this.data = new Uint8Array();
            if (param) {
                this.code = param.code;
                this.msg = param.msg;
                this.data = new Uint8Array(param.data);
            }
        }
    };
    __decorate([
        Field.d(1, "int32", "optional")
    ], RespBody.prototype, "code", void 0);
    __decorate([
        Field.d(2, "string", "optional")
    ], RespBody.prototype, "msg", void 0);
    __decorate([
        Field.d(3, "bytes", "optional")
    ], RespBody.prototype, "data", void 0);
    RespBody = __decorate([
        Type.d("Type_bgo_component_httpagent_proto_RespBody")
    ], RespBody);
    httpagent.RespBody = RespBody;
    httpagent.HttpagentServer = {
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
    };
})(httpagent || (httpagent = {}));
//# sourceMappingURL=httpagent.js.map