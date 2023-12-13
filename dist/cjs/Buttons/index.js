"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
Object.defineProperty(exports, "__esModule", {
  value: true,
});
var _exportNames = {};
exports["default"] = void 0;
var _Button = _interopRequireWildcard(require("./Button"));
Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Button[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button[key];
    },
  });
});
var _ArrowButton = _interopRequireWildcard(require("./ArrowButton"));
Object.keys(_ArrowButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ArrowButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ArrowButton[key];
    },
  });
});
var _InfoButton = _interopRequireWildcard(require("./InfoButton"));
Object.keys(_InfoButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _InfoButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InfoButton[key];
    },
  });
});
var _VoiceCallButton = _interopRequireWildcard(require("./VoiceCallButton"));
Object.keys(_VoiceCallButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _VoiceCallButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VoiceCallButton[key];
    },
  });
});
var _VideoCallButton = _interopRequireWildcard(require("./VideoCallButton"));
Object.keys(_VideoCallButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _VideoCallButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VideoCallButton[key];
    },
  });
});
var _StarButton = _interopRequireWildcard(require("./StarButton"));
Object.keys(_StarButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _StarButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StarButton[key];
    },
  });
});
var _AddUserButton = _interopRequireDefault(require("./AddUserButton"));
var _EllipsisButton = _interopRequireWildcard(require("./EllipsisButton"));
Object.keys(_EllipsisButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _EllipsisButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _EllipsisButton[key];
    },
  });
});
var _SendButton = _interopRequireWildcard(require("./SendButton"));
Object.keys(_SendButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SendButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SendButton[key];
    },
  });
});
var _AttachmentButton = _interopRequireWildcard(require("./AttachmentButton"));
Object.keys(_AttachmentButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _AttachmentButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AttachmentButton[key];
    },
  });
});
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ("object" != _typeof(e) && "function" != typeof e))
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n["default"] = e), t && t.set(e, n), n;
}
var _default = (exports["default"] = {
  Button: _Button["default"],
  ArrowButton: _ArrowButton["default"],
  InfoButton: _InfoButton["default"],
  VoiceCallButton: _VoiceCallButton["default"],
  VideoCallButton: _VideoCallButton["default"],
  StarButton: _StarButton["default"],
  AddUserButton: _AddUserButton["default"],
  EllipsisButton: _EllipsisButton["default"],
  SendButton: _SendButton["default"],
  AttachmentButton: _AttachmentButton["default"],
});
