module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withFetch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FetchProviderContext = (0, _react.createContext)({});

var FetchProvider = function (_Component) {
    _inherits(FetchProvider, _Component);

    function FetchProvider(props) {
        _classCallCheck(this, FetchProvider);

        var _this = _possibleConstructorReturn(this, (FetchProvider.__proto__ || Object.getPrototypeOf(FetchProvider)).call(this, props));

        var _this$props = _this.props,
            baseUrl = _this$props.baseUrl,
            baseHeaders = _this$props.baseHeaders,
            baseMode = _this$props.baseMode,
            baseCredentials = _this$props.baseCredentials,
            baseRedirect = _this$props.baseRedirect,
            baseCache = _this$props.baseCache,
            beforeRequest = _this$props.beforeRequest,
            onError = _this$props.onError;


        _this.state = {
            baseUrl: baseUrl,
            baseHeaders: baseHeaders,
            baseMode: baseMode,
            baseCredentials: baseCredentials,
            baseRedirect: baseRedirect,
            baseCache: baseCache,
            beforeRequest: beforeRequest,
            onError: onError
        };
        return _this;
    }

    _createClass(FetchProvider, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                FetchProviderContext.Provider,
                { value: this.state },
                this.props.children
            );
        }
    }]);

    return FetchProvider;
}(_react.Component);

exports.default = FetchProvider;


FetchProvider.defaultProps = {
    baseUrl: '',
    baseHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, application/ld+json'
    },
    baseMode: 'cors',
    baseCredentials: "same-origin",
    baseRedirect: 'follow',
    baseCache: 'default',
    beforeRequest: null,
    onError: null
};

var withFetch = exports.withFetch = function withFetch(Component) {
    return function (props) {
        return _react2.default.createElement(
            FetchProviderContext.Consumer,
            null,
            function (store) {
                return _react2.default.createElement(Component, _extends({}, props, store));
            }
        );
    };
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Hoc = __webpack_require__(0);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbortController = window.AbortController;

var Fetch = function (_Component) {
    _inherits(Fetch, _Component);

    function Fetch(props) {
        _classCallCheck(this, Fetch);

        var _this = _possibleConstructorReturn(this, (Fetch.__proto__ || Object.getPrototypeOf(Fetch)).call(this, props));

        _this.fetch = _this.fetch.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.fetchContext = (0, _react.createContext)({});
        _this.controller = new AbortController();

        _this.state = {
            data: null,
            error: null,
            loading: !_this.props.manual,
            fetched: false,
            fetchError: null,
            send: _this.fetch,
            reset: _this.reset
        };
        return _this;
    }

    _createClass(Fetch, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _props = this.props,
                manual = _props.manual,
                body = _props.body;


            if (!manual) {
                this.fetch(body);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.controller.abort();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            var _props2 = this.props,
                url = _props2.url,
                method = _props2.method,
                headers = _props2.headers,
                referrer = _props2.referrer,
                mode = _props2.mode,
                credentials = _props2.credentials,
                redirect = _props2.redirect,
                integrity = _props2.integrity,
                cache = _props2.cache,
                manual = _props2.manual,
                body = _props2.body;


            if (prevProps.url !== url || prevProps.method !== method || prevProps.headers !== headers || prevProps.referrer !== referrer || prevProps.mode !== mode || prevProps.credentials !== credentials || prevProps.redirect !== redirect || prevProps.integrity !== integrity || prevProps.cache !== cache || prevProps.manual !== manual) {
                if (!manual) {
                    this.fetch(body);
                }
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var _props3 = this.props,
                url = _props3.url,
                method = _props3.method,
                headers = _props3.headers,
                referrer = _props3.referrer,
                mode = _props3.mode,
                credentials = _props3.credentials,
                redirect = _props3.redirect,
                integrity = _props3.integrity,
                cache = _props3.cache,
                manual = _props3.manual;


            if (nextProps.url !== url || nextProps.method !== method || nextProps.headers !== headers || nextProps.referrer !== referrer || nextProps.mode !== mode || nextProps.credentials !== credentials || nextProps.redirect !== redirect || nextProps.integrity !== integrity || nextProps.cache !== cache || nextProps.manual !== manual) {
                this.setState({
                    data: null,
                    error: null,
                    loading: !this.props.manual,
                    fetched: false,
                    fetchError: null
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var FetchContext = this.fetchContext;

            return _react2.default.createElement(
                FetchContext.Provider,
                { value: this.state },
                _react2.default.createElement(
                    FetchContext.Consumer,
                    null,
                    this.props.children
                )
            );
        }
    }, {
        key: "fetch",
        value: function (_fetch) {
            function fetch(_x, _x2) {
                return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
                return _fetch.toString();
            };

            return fetch;
        }(function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(body, complementHeaders) {
                var _this2 = this;

                var _props4, beforeRequest, onError, onSuccess, url, method, headers, referrer, mode, credentials, redirect, integrity, cache, request;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _props4 = this.props, beforeRequest = _props4.beforeRequest, onError = _props4.onError, onSuccess = _props4.onSuccess;


                                if (!complementHeaders) {
                                    complementHeaders = {};
                                }

                                url = this.props.baseUrl + this.props.url;
                                method = this.props.method;
                                headers = Object.assign({}, this.props.baseHeaders, this.props.headers, complementHeaders);
                                referrer = this.props.referrer;
                                mode = this.props.mode || this.props.baseMode;
                                credentials = this.props.credentials || this.props.baseCredentials;
                                redirect = this.props.redirect || this.props.baseRedirect;
                                integrity = this.props.integrity;
                                cache = this.props.cache || this.props.baseCache;
                                request = new Request(url, {
                                    method: method,
                                    headers: headers,
                                    referrer: referrer,
                                    mode: mode,
                                    credentials: credentials,
                                    redirect: redirect,
                                    integrity: integrity,
                                    cache: cache,
                                    body: body,
                                    signal: this.controller.signal
                                });

                                if (!(typeof beforeRequest === "function")) {
                                    _context.next = 15;
                                    break;
                                }

                                _context.next = 15;
                                return beforeRequest(request);

                            case 15:
                                return _context.abrupt("return", fetch(request).then(function (response) {
                                    if (response.ok) {
                                        return response.json();
                                    }

                                    throw response;
                                }).then(function (data) {
                                    if (typeof onSuccess === "function") {
                                        onSuccess(data);
                                    } else {
                                        _this2.setState({
                                            data: data,
                                            loading: false,
                                            fetched: true,
                                            error: null
                                        });
                                    }
                                }).catch(function (error) {
                                    if (typeof error.json === 'function') {
                                        return error.json();
                                    }

                                    return new Promise(function (resolve) {
                                        return resolve(error.toString());
                                    });
                                }).catch(function (error) {
                                    error = error.toString();

                                    if (error === 'SyntaxError: JSON Parse error: Unrecognized token \'<\'') {
                                        return new Promise(function (resolve) {
                                            return resolve(true);
                                        });
                                    }

                                    return new Promise(function (resolve) {
                                        return resolve(error);
                                    });
                                }).then(function (error) {
                                    if (!error) {
                                        _this2.setState({
                                            error: null,
                                            loading: false,
                                            fetched: true
                                        });

                                        return;
                                    }

                                    if (typeof onError === "function") {
                                        var e = onError(error, _this2);
                                        if (e && typeof e.then === "function") {
                                            e.then(function (data) {
                                                if (!data) {
                                                    _this2.setState({
                                                        data: null,
                                                        error: error,
                                                        loading: false,
                                                        fetched: true
                                                    });
                                                }
                                            });
                                        } else {
                                            _this2.setState({
                                                data: null,
                                                error: error,
                                                loading: false,
                                                fetched: true
                                            });
                                        }
                                    } else {
                                        _this2.setState({
                                            data: null,
                                            error: error,
                                            loading: false,
                                            fetched: true
                                        });
                                    }
                                }));

                            case 16:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            return function (_x3, _x4) {
                return _ref.apply(this, arguments);
            };
        }())
    }, {
        key: "reset",
        value: function reset() {
            var _this3 = this;

            this.setState({
                data: null,
                error: null,
                loading: !this.props.manual,
                fetched: false,
                fetchError: null
            }, function () {
                if (!_this3.props.manual) {
                    _this3.fetch(_this3.props.body);
                }
            });
        }
    }]);

    return Fetch;
}(_react.Component);

Fetch.defaultProps = {
    url: '/',
    method: 'GET',
    manual: false
};

exports.default = (0, _Hoc.withFetch)(Fetch);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) :
  factory();
}(function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var Emitter =
  /*#__PURE__*/
  function () {
    function Emitter() {
      _classCallCheck(this, Emitter);

      Object.defineProperty(this, 'listeners', {
        value: {},
        writable: true,
        configurable: true
      });
    }

    _createClass(Emitter, [{
      key: "addEventListener",
      value: function addEventListener(type, callback) {
        if (!(type in this.listeners)) {
          this.listeners[type] = [];
        }

        this.listeners[type].push(callback);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, callback) {
        if (!(type in this.listeners)) {
          return;
        }

        var stack = this.listeners[type];

        for (var i = 0, l = stack.length; i < l; i++) {
          if (stack[i] === callback) {
            stack.splice(i, 1);
            return;
          }
        }
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        var _this = this;

        if (!(event.type in this.listeners)) {
          return;
        }

        var debounce = function debounce(callback) {
          setTimeout(function () {
            return callback.call(_this, event);
          });
        };

        var stack = this.listeners[event.type];

        for (var i = 0, l = stack.length; i < l; i++) {
          debounce(stack[i]);
        }

        return !event.defaultPrevented;
      }
    }]);

    return Emitter;
  }();

  var AbortSignal =
  /*#__PURE__*/
  function (_Emitter) {
    _inherits(AbortSignal, _Emitter);

    function AbortSignal() {
      var _this2;

      _classCallCheck(this, AbortSignal);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AbortSignal).call(this)); // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
      // constructor has failed to run, then "this.listeners" will still be undefined and then we call
      // the parent constructor directly instead as a workaround. For general details, see babel bug:
      // https://github.com/babel/babel/issues/3041
      // This hack was added as a fix for the issue described here:
      // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042

      if (!_this2.listeners) {
        Emitter.call(_assertThisInitialized(_this2));
      } // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
      // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl


      Object.defineProperty(_assertThisInitialized(_this2), 'aborted', {
        value: false,
        writable: true,
        configurable: true
      });
      Object.defineProperty(_assertThisInitialized(_this2), 'onabort', {
        value: null,
        writable: true,
        configurable: true
      });
      return _this2;
    }

    _createClass(AbortSignal, [{
      key: "toString",
      value: function toString() {
        return '[object AbortSignal]';
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        if (event.type === 'abort') {
          this.aborted = true;

          if (typeof this.onabort === 'function') {
            this.onabort.call(this, event);
          }
        }

        _get(_getPrototypeOf(AbortSignal.prototype), "dispatchEvent", this).call(this, event);
      }
    }]);

    return AbortSignal;
  }(Emitter);
  var AbortController =
  /*#__PURE__*/
  function () {
    function AbortController() {
      _classCallCheck(this, AbortController);

      // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
      // we want Object.keys(new AbortController()) to be [] for compat with the native impl
      Object.defineProperty(this, 'signal', {
        value: new AbortSignal(),
        writable: true,
        configurable: true
      });
    }

    _createClass(AbortController, [{
      key: "abort",
      value: function abort() {
        var event;

        try {
          event = new Event('abort');
        } catch (e) {
          if (typeof document !== 'undefined') {
            if (!document.createEvent) {
              // For Internet Explorer 8:
              event = document.createEventObject();
              event.type = 'abort';
            } else {
              // For Internet Explorer 11:
              event = document.createEvent('Event');
              event.initEvent('abort', false, false);
            }
          } else {
            // Fallback where document isn't available:
            event = {
              type: 'abort',
              bubbles: false,
              cancelable: false
            };
          }
        }

        this.signal.dispatchEvent(event);
      }
    }, {
      key: "toString",
      value: function toString() {
        return '[object AbortController]';
      }
    }]);

    return AbortController;
  }();

  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    // These are necessary to make sure that we get correct output for:
    // Object.prototype.toString.call(new AbortController())
    AbortController.prototype[Symbol.toStringTag] = 'AbortController';
    AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';
  }

  function polyfillNeeded(self) {
    if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
      console.log('__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill');
      return true;
    } // Note that the "unfetch" minimal fetch polyfill defines fetch() without
    // defining window.Request, and this polyfill need to work on top of unfetch
    // so the below feature detection needs the !self.AbortController part.
    // The Request.prototype check is also needed because Safari versions 11.1.2
    // up to and including 12.1.x has a window.AbortController present but still
    // does NOT correctly implement abortable fetch:
    // https://bugs.webkit.org/show_bug.cgi?id=174980#c2


    return typeof self.Request === 'function' && !self.Request.prototype.hasOwnProperty('signal') || !self.AbortController;
  }

  /**
   * Note: the "fetch.Request" default value is available for fetch imported from
   * the "node-fetch" package and not in browsers. This is OK since browsers
   * will be importing umd-polyfill.js from that path "self" is passed the
   * decorator so the default value will not be used (because browsers that define
   * fetch also has Request). One quirky setup where self.fetch exists but
   * self.Request does not is when the "unfetch" minimal fetch polyfill is used
   * on top of IE11; for this case the browser will try to use the fetch.Request
   * default value which in turn will be undefined but then then "if (Request)"
   * will ensure that you get a patched fetch but still no Request (as expected).
   * @param {fetch, Request = fetch.Request}
   * @returns {fetch: abortableFetch, Request: AbortableRequest}
   */

  function abortableFetchDecorator(patchTargets) {
    if ('function' === typeof patchTargets) {
      patchTargets = {
        fetch: patchTargets
      };
    }

    var _patchTargets = patchTargets,
        fetch = _patchTargets.fetch,
        _patchTargets$Request = _patchTargets.Request,
        NativeRequest = _patchTargets$Request === void 0 ? fetch.Request : _patchTargets$Request,
        NativeAbortController = _patchTargets.AbortController,
        _patchTargets$__FORCE = _patchTargets.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,
        __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL = _patchTargets$__FORCE === void 0 ? false : _patchTargets$__FORCE;

    if (!polyfillNeeded({
      fetch: fetch,
      Request: NativeRequest,
      AbortController: NativeAbortController,
      __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
    })) {
      return {
        fetch: fetch,
        Request: Request
      };
    }

    var Request = NativeRequest; // Note that the "unfetch" minimal fetch polyfill defines fetch() without
    // defining window.Request, and this polyfill need to work on top of unfetch
    // hence we only patch it if it's available. Also we don't patch it if signal
    // is already available on the Request prototype because in this case support
    // is present and the patching below can cause a crash since it assigns to
    // request.signal which is technically a read-only property. This latter error
    // happens when you run the main5.js node-fetch example in the repo
    // "abortcontroller-polyfill-examples". The exact error is:
    //   request.signal = init.signal;
    //   ^
    // TypeError: Cannot set property signal of #<Request> which has only a getter

    if (Request && !Request.prototype.hasOwnProperty('signal') || __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
      Request = function Request(input, init) {
        var signal;

        if (init && init.signal) {
          signal = init.signal; // Never pass init.signal to the native Request implementation when the polyfill has
          // been installed because if we're running on top of a browser with a
          // working native AbortController (i.e. the polyfill was installed due to
          // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
          // fake AbortSignal to the native fetch will trigger:
          // TypeError: Failed to construct 'Request': member signal is not of type AbortSignal.

          delete init.signal;
        }

        var request = new NativeRequest(input, init);

        if (signal) {
          Object.defineProperty(request, 'signal', {
            writable: false,
            enumerable: false,
            configurable: true,
            value: signal
          });
        }

        return request;
      };

      Request.prototype = NativeRequest.prototype;
    }

    var realFetch = fetch;

    var abortableFetch = function abortableFetch(input, init) {
      var signal = Request && Request.prototype.isPrototypeOf(input) ? input.signal : init ? init.signal : undefined;

      if (signal) {
        var abortError;

        try {
          abortError = new DOMException('Aborted', 'AbortError');
        } catch (err) {
          // IE 11 does not support calling the DOMException constructor, use a
          // regular error object on it instead.
          abortError = new Error('Aborted');
          abortError.name = 'AbortError';
        } // Return early if already aborted, thus avoiding making an HTTP request


        if (signal.aborted) {
          return Promise.reject(abortError);
        } // Turn an event into a promise, reject it once `abort` is dispatched


        var cancellation = new Promise(function (_, reject) {
          signal.addEventListener('abort', function () {
            return reject(abortError);
          }, {
            once: true
          });
        });

        if (init && init.signal) {
          // Never pass .signal to the native implementation when the polyfill has
          // been installed because if we're running on top of a browser with a
          // working native AbortController (i.e. the polyfill was installed due to
          // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
          // fake AbortSignal to the native fetch will trigger:
          // TypeError: Failed to execute 'fetch' on 'Window': member signal is not of type AbortSignal.
          delete init.signal;
        } // Return the fastest promise (don't need to wait for request to finish)


        return Promise.race([cancellation, realFetch(input, init)]);
      }

      return realFetch(input, init);
    };

    return {
      fetch: abortableFetch,
      Request: Request
    };
  }

  (function (self) {

    if (!polyfillNeeded(self)) {
      return;
    }

    if (!self.fetch) {
      console.warn('fetch() is not available, cannot install abortcontroller-polyfill');
      return;
    }

    var _abortableFetch = abortableFetchDecorator(self),
        fetch = _abortableFetch.fetch,
        Request = _abortableFetch.Request;

    self.fetch = fetch;
    self.Request = Request;
    Object.defineProperty(self, 'AbortController', {
      writable: true,
      enumerable: false,
      configurable: true,
      value: AbortController
    });
    Object.defineProperty(self, 'AbortSignal', {
      writable: true,
      enumerable: false,
      configurable: true,
      value: AbortSignal
    });
  })(typeof self !== 'undefined' ? self : global);

}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Hoc = __webpack_require__(0);

var _Hoc2 = _interopRequireDefault(_Hoc);

var _Fetch = __webpack_require__(2);

var _Fetch2 = _interopRequireDefault(_Fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    Fetch: _Fetch2.default,
    FetchProvider: _Hoc2.default
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);