"use strict";
// original tool source from 'babel-plugin-superjson-next'
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = exports.withSuperJSONPage = exports.deserializeProps = exports.withSuperJSONInitProps = exports.withSuperJSONProps = void 0;
var hoistNonReactStatics = require("hoist-non-react-statics");
var React = require("react");
var superjson_1 = require("superjson");
function withSuperJSONProps(gssp, exclude) {
    if (exclude === void 0) { exclude = []; }
    return function withSuperJSON() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var result, excludedPropValues, _a, json, meta, props;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, gssp.apply(void 0, args)];
                    case 1:
                        result = _b.sent();
                        if (!("props" in result)) {
                            return [2 /*return*/, result];
                        }
                        if (!result.props) {
                            return [2 /*return*/, result];
                        }
                        excludedPropValues = exclude.map(function (propKey) {
                            var value = result.props[propKey];
                            delete result.props[propKey];
                            return value;
                        });
                        _a = superjson_1.default.serialize(result.props), json = _a.json, meta = _a.meta;
                        props = json;
                        if (meta) {
                            props._superjson = meta;
                        }
                        exclude.forEach(function (key, index) {
                            var excludedPropValue = excludedPropValues[index];
                            if (typeof excludedPropValue !== "undefined") {
                                props[key] = excludedPropValue;
                            }
                        });
                        return [2 /*return*/, __assign(__assign({}, result), { props: props })];
                }
            });
        });
    };
}
exports.withSuperJSONProps = withSuperJSONProps;
function withSuperJSONInitProps(gip, exclude) {
    if (exclude === void 0) { exclude = []; }
    return function withSuperJSON() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var result, excludedPropValues, _a, json, meta, props;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, gip.apply(void 0, args)];
                    case 1:
                        result = _b.sent();
                        excludedPropValues = exclude.map(function (propKey) {
                            var value = result[propKey];
                            delete result[propKey];
                            return value;
                        });
                        _a = superjson_1.default.serialize(result), json = _a.json, meta = _a.meta;
                        props = json;
                        if (meta) {
                            props._superjson = meta;
                        }
                        exclude.forEach(function (key, index) {
                            var excludedPropValue = excludedPropValues[index];
                            if (typeof excludedPropValue !== "undefined") {
                                props[key] = excludedPropValue;
                            }
                        });
                        return [2 /*return*/, __assign(__assign({}, result), props)];
                }
            });
        });
    };
}
exports.withSuperJSONInitProps = withSuperJSONInitProps;
function deserializeProps(serializedProps) {
    var _superjson = serializedProps._superjson, props = __rest(serializedProps, ["_superjson"]);
    return superjson_1.default.deserialize({ json: props, meta: _superjson });
}
exports.deserializeProps = deserializeProps;
function withSuperJSONPage(Page) {
    function WithSuperJSON(serializedProps) {
        return React.createElement(Page, __assign({}, deserializeProps(serializedProps)));
    }
    hoistNonReactStatics(WithSuperJSON, Page);
    return WithSuperJSON;
}
exports.withSuperJSONPage = withSuperJSONPage;
function serialize(props) {
    var _a = superjson_1.default.serialize(props), json = _a.json, _superjson = _a.meta;
    return __assign(__assign({}, json), { _superjson: _superjson });
}
exports.serialize = serialize;
//# sourceMappingURL=tools.js.map