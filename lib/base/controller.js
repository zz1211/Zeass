'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _bunyan = require('bunyan');

var _bunyan2 = _interopRequireDefault(_bunyan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controller = function Controller() {
  (0, _classCallCheck3.default)(this, Controller);

  this.Logger = _bunyan2.default.createLogger({
    name: this.constructor.name,
    level: 'debug'
  });
};

exports.default = Controller;