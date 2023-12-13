"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports[
  "default"
] = exports.StatusEnum = exports.SizeEnum = exports.MessageTypeEnum = void 0;
var StatusEnum = (exports.StatusEnum = [
  "available",
  "unavailable",
  "away",
  "dnd",
  "invisible",
  "eager",
]);
var SizeEnum = (exports.SizeEnum = ["xs", "sm", "md", "lg", "fluid"]);
var MessageTypeEnum = (exports.MessageTypeEnum = [
  "html",
  "text",
  "image",
  "custom",
]);
var _default = (exports["default"] = {
  SizeEnum: SizeEnum,
  StatusEnum: StatusEnum,
  MessageTypeEnum: MessageTypeEnum,
});
