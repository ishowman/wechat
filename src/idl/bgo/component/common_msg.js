import { __decorate } from "tslib";
import { Message, Type, Field } from 'protobufjs/light';
export var component;
(function (component) {
    let PlatTypeCode;
    (function (PlatTypeCode) {
        PlatTypeCode[PlatTypeCode["WIN"] = 0] = "WIN";
        PlatTypeCode[PlatTypeCode["IOS"] = 1] = "IOS";
        PlatTypeCode[PlatTypeCode["ANDROID"] = 2] = "ANDROID";
        PlatTypeCode[PlatTypeCode["WEB"] = 3] = "WEB";
        PlatTypeCode[PlatTypeCode["MAC"] = 4] = "MAC";
    })(PlatTypeCode = component.PlatTypeCode || (component.PlatTypeCode = {}));
    let UesrOnLine = class UesrOnLine extends Message {
        constructor(param) {
            super();
            this.PlatType = 0;
            this.Fid = 0;
            this.IP = "";
            if (param) {
                this.PlatType = param.PlatType;
                this.Fid = param.Fid;
                this.IP = param.IP;
            }
        }
    };
    __decorate([
        Field.d(1, PlatTypeCode, "optional")
    ], UesrOnLine.prototype, "PlatType", void 0);
    __decorate([
        Field.d(2, "int64", "optional")
    ], UesrOnLine.prototype, "Fid", void 0);
    __decorate([
        Field.d(3, "string", "optional")
    ], UesrOnLine.prototype, "IP", void 0);
    UesrOnLine = __decorate([
        Type.d("Type_bgo_component_common_msg_proto_UesrOnLine")
    ], UesrOnLine);
    component.UesrOnLine = UesrOnLine;
    let UesrOffLine = class UesrOffLine extends Message {
        constructor(param) {
            super();
            this.Fid = 0;
            if (param) {
                this.Fid = param.Fid;
            }
        }
    };
    __decorate([
        Field.d(1, "int64", "optional")
    ], UesrOffLine.prototype, "Fid", void 0);
    UesrOffLine = __decorate([
        Type.d("Type_bgo_component_common_msg_proto_UesrOffLine")
    ], UesrOffLine);
    component.UesrOffLine = UesrOffLine;
    let ServerChange = class ServerChange extends Message {
        constructor(param) {
            super();
            this.Name = "";
            this.ID = 0;
            if (param) {
                this.Name = param.Name;
                this.ID = param.ID;
            }
        }
    };
    __decorate([
        Field.d(1, "string", "required")
    ], ServerChange.prototype, "Name", void 0);
    __decorate([
        Field.d(2, "uint32", "required")
    ], ServerChange.prototype, "ID", void 0);
    ServerChange = __decorate([
        Type.d("Type_bgo_component_common_msg_proto_ServerChange")
    ], ServerChange);
    component.ServerChange = ServerChange;
})(component || (component = {}));
//# sourceMappingURL=common_msg.js.map