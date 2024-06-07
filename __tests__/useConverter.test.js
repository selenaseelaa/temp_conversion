"use strict";

var _reactHooks = require("@testing-library/react-hooks");
var _useConverter = _interopRequireDefault(require("../src/utils/useConverter"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }


describe('useConverter', () => {
  test('converts Fahrenheit to Celsius correctly', () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useConverter.default)(32, 'celsius'));
    (0, _reactHooks.act)(() => {
      result.current;
    });
    expect(result.current[0]).toBe(0); // 32°F is 0°C
  });
  test('converts Celsius to Fahrenheit correctly', () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useConverter.default)(0, 'fahrenheit'));
    (0, _reactHooks.act)(() => {
      result.current;
    });
    expect(result.current[0]).toBe(32);
  });
});