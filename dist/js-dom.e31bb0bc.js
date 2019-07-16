// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"JQuery/each.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var each = function each(fn) {
  console.log(this);

  for (var _i = 0, _Object$keys = Object.keys(this); _i < _Object$keys.length; _i++) {
    var index = _Object$keys[_i];
    fn(this[index], index);
  }
};

var _default = each;
exports.default = _default;
},{}],"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diff = exports.uniq = exports.isJQuery = exports.isElement = exports.isFunction = exports.isString = void 0;

var _JQuery = _interopRequireDefault(require("./JQuery/JQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var isString = function isString(obj) {
  return typeof obj === 'string';
};

exports.isString = isString;

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

exports.isFunction = isFunction;

var isElement = function isElement(obj) {
  return obj instanceof Element;
};

exports.isElement = isElement;

var isJQuery = function isJQuery(obj) {
  return obj instanceof _JQuery.default;
};

exports.isJQuery = isJQuery;

var uniq = function uniq(arr1, arr2) {
  return _toConsumableArray(new Set([].concat(_toConsumableArray(arr1), _toConsumableArray(arr2))));
};

exports.uniq = uniq;

var diff = function diff(arr1, arr2) {
  arr1.array.filter(function (element) {
    return !arr2.includes(element);
  });
};

exports.diff = diff;
},{"./JQuery/JQuery":"JQuery/JQuery.js"}],"JQuery/addClass.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var addClass = function addClass(classes) {
  if (!(0, _utils.isString)(classes) && !(0, _utils.isFunction)(classes)) {
    return this;
  }

  this.each(function (item, index) {
    var newClasses = (0, _utils.isFunction)(classes) ? classes(index, item.className) : classes;

    if (!(0, _utils.isString)(newClasses)) {
      return;
    }

    if (item.className) {
      var existClasses = item.className.split(' ').filter(function (className) {
        return className;
      });
      item.className = (0, _utils.uniq)(existClasses, newClasses.split(' ')).join(' ');
    } else {
      item.className = newClasses;
    }
  });
  return this;
};

var _default = addClass;
exports.default = _default;
},{"../utils":"utils.js"}],"JQuery/removeClass.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var removeClass = function removeClass(classes) {
  if (!(0, _utils.isString)(classes) && !(0, _utils.isFunction)(classes)) {
    return this;
  }

  this.each(function (item, index) {
    var toRemoveClasses = (0, _utils.isFunction)(classes) ? classes(index, item.className) : classes;

    if (!(0, _utils.isString)(toRemoveClasses)) {
      return;
    }

    if (item.className) {
      var existClasses = item.className.split(' ').filter(function (className) {
        return className;
      });
      item.className = (0, _utils.diff)(existClasses, toRemoveClasses.split(' ')).join(' ');
    }

    item.className = item.className.trim();
  });
  return this;
};

var _default = removeClass;
exports.default = _default;
},{"../utils":"utils.js"}],"JQuery/append.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var append = function append() {
  for (var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++) {
    elements[_key] = arguments[_key];
  }

  if (elements.length > 1 && (0, _utils.isFunction)(elements[0])) {
    return this;
  }

  var flattenedElements = elements.flat();
  this.each(function (item, index) {
    var newElements = (0, _utils.isFunction)(elements[0]) ? elements[0](index, item.innerHTML) : flattenedElements;
    newElements.array.forEach(function (element) {
      if ((0, _utils.isElement)(element)) {
        item.appendChild(element);
      } else if ((0, _utils.isJQuery)(element)) {
        element.each(function (node) {
          item.appendChild(node);
        });
      } else {
        item.innerHTML += element;
      }
    });
  });
  return this;
};

var _default = append;
exports.default = _default;
},{"../utils":"utils.js"}],"JQuery/remove.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var remove = function remove() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  selector = this.selector + selector;
  var elements = document.querySelectorAll(selector);
  elements.array.forEach(function (element) {
    element.parentNode.removeChild(element);
  });
};

var _default = remove;
exports.default = _default;
},{}],"JQuery/JQuery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _each = _interopRequireDefault(require("./each"));

var _addClass = _interopRequireDefault(require("./addClass"));

var _removeClass = _interopRequireDefault(require("./removeClass"));

var _append = _interopRequireDefault(require("./append"));

var _remove = _interopRequireDefault(require("./remove"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var JQuery =
/*#__PURE__*/
function () {
  function JQuery(selector, elements) {
    _classCallCheck(this, JQuery);

    if (!elements) {
      elements = document.querySelectorAll(selector);
    }

    if (typeof elements[Symbol.iterator] === 'function') {
      for (var _i = 0, _Object$keys = Object.keys(elements); _i < _Object$keys.length; _i++) {
        var elementKey = _Object$keys[_i];
        this[elementKey] = elements[elementKey];
      }
    } else {
      this[0] = elements;
    }
  }

  _createClass(JQuery, [{
    key: Symbol.iterator,
    value: function value() {
      var _this = this;

      var index = -1;
      return {
        next: function next() {
          return {
            value: _this[++index],
            done: !_this[index]
          };
        }
      };
    }
  }]);

  return JQuery;
}();

JQuery.prototype.each = _each.default;
JQuery.prototype.addClass = _addClass.default;
JQuery.prototype.removeClass = _removeClass.default;
JQuery.prototype.append = _append.default;
JQuery.prototype.remove = _remove.default;
var _default = JQuery;
exports.default = _default;
},{"./each":"JQuery/each.js","./addClass":"JQuery/addClass.js","./removeClass":"JQuery/removeClass.js","./append":"JQuery/append.js","./remove":"JQuery/remove.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _JQuery = _interopRequireDefault(require("./JQuery/JQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function $(selector) {
  if (typeof selector === 'string') {
    var res = new _JQuery.default(selector);
    return res;
  }

  return null;
}
},{"./JQuery/JQuery":"JQuery/JQuery.js"}],"../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37409" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js-dom.e31bb0bc.js.map