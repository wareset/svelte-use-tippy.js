'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tippy = require('tippy.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var tippy__default = /*#__PURE__*/_interopDefaultLegacy(tippy);

function use(node, options = {}) {
  let Tippy;

  function destroy() {
    if (Tippy && Tippy.destroy) Tippy.destroy(), (Tippy = null);
  }

  function update(options = {}) {
    if (!options.content) options.content = '';
    if (!Tippy) Tippy = tippy__default['default'](node, options);
    else Tippy.setProps(options);
    options.Tippy = Tippy;
  }

  update(options);
  return { update, destroy, Tippy }
}

exports.default = use;
