/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 609:
/***/ ((module) => {

module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {

;// CONCATENATED MODULE: external "React"
const external_React_namespaceObject = React;
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_namespaceObject);
;// CONCATENATED MODULE: external "ReactDOM"
const external_ReactDOM_namespaceObject = ReactDOM;
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_namespaceObject);
;// CONCATENATED MODULE: ./components/Button.coffee
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Button;


Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",

    /*
     * The button component renders a single button
     */
    value: function render() {
      /*
       * Render the Button component
       */
      return /*#__PURE__*/external_React_default().createElement("button", _extends({
        id: this.props.id,
        title: this.props.help || this.props.title,
        name: this.props.name,
        url: this.props.url,
        onClick: this.props.onClick,
        className: this.props.className
      }, this.props.attrs), /*#__PURE__*/external_React_default().createElement("span", {
        dangerouslySetInnerHTML: {
          __html: this.props.title
        }
      }), this.props.badge && /*#__PURE__*/external_React_default().createElement("span", {
        className: "badge badge-light",
        style: {
          marginLeft: "0.25em"
        }
      }, this.props.badge));
    }
  }]);

  return Button;
}((external_React_default()).Component);

/* harmony default export */ const Button_coffee = (Button);
;// CONCATENATED MODULE: ./components/ButtonBar.coffee
/* provided dependency */ var $ = __webpack_require__(609);
function ButtonBar_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ButtonBar_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { ButtonBar_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ButtonBar_coffee_typeof(obj); }

function ButtonBar_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ButtonBar_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ButtonBar_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) ButtonBar_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) ButtonBar_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function ButtonBar_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ButtonBar_coffee_setPrototypeOf(subClass, superClass); }

function ButtonBar_coffee_setPrototypeOf(o, p) { ButtonBar_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ButtonBar_coffee_setPrototypeOf(o, p); }

function ButtonBar_coffee_createSuper(Derived) { var hasNativeReflectConstruct = ButtonBar_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ButtonBar_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ButtonBar_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ButtonBar_coffee_possibleConstructorReturn(this, result); }; }

function ButtonBar_coffee_possibleConstructorReturn(self, call) { if (call && (ButtonBar_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return ButtonBar_coffee_assertThisInitialized(self); }

function ButtonBar_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ButtonBar_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ButtonBar_coffee_getPrototypeOf(o) { ButtonBar_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ButtonBar_coffee_getPrototypeOf(o); }

var ButtonBar,
    indexOf = [].indexOf;



ButtonBar = /*#__PURE__*/function (_React$Component) {
  ButtonBar_coffee_inherits(ButtonBar, _React$Component);

  var _super = ButtonBar_coffee_createSuper(ButtonBar);

  function ButtonBar(props) {
    var _this;

    ButtonBar_coffee_classCallCheck(this, ButtonBar);

    _this = _super.call(this, props); // Bind eventhandlers to local context

    _this.on_ajax_save_button_click = _this.on_ajax_save_button_click.bind(ButtonBar_coffee_assertThisInitialized(_this));
    _this.on_transition_button_click = _this.on_transition_button_click.bind(ButtonBar_coffee_assertThisInitialized(_this)); // default "confirm first" transitions

    _this.confirm_transitions = ["cancel", "deactivate", "invalidate", "reject", "remove", "retract", "unassign", "retest"];
    _this.css_mapping = {
      // default buttons
      "reassign": "btn-secondary",
      "duplicate": "btn-secondary",
      "close": "btn-secondary",
      // blue buttons
      "assign": "btn-secondary",
      "receive": "btn-primary",
      "open": "btn-primary",
      "verify": "btn-primary",
      "retest": "btn-primary",
      // green buttons
      "activate": "btn-success",
      "prepublish": "btn-success",
      "publish": "btn-success",
      "republish": "btn-success",
      "submit": "btn-success",
      // orange buttons
      "unassign": "btn-warning",
      // red buttons
      "cancel": "btn-danger",
      "deactivate": "btn-danger",
      "invalidate": "btn-danger",
      "reject": "btn-danger",
      "retract": "btn-danger",
      "remove": "btn-danger"
    };
    return _this;
  }

  ButtonBar_coffee_createClass(ButtonBar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // N.B. This needs jQuery.js and bootstrap.js injected from the outer scope
      //      -> see webpack.config.js externals
      // Not sure if hooking this event handler in `componentDidUpdate` always
      // intercepts correctly *before* the bound `onClick` event handler fires.
      // http://bootstrap-confirmation.js.org/
      return $("[data-toggle=confirmation]").confirmation({
        rootSelector: "[data-toggle=confirmation]",
        btnOkLabel: _t("Yes"),
        btnOkClass: "btn btn-outline-primary",
        btnOkIconClass: "fas fa-check-circle mr-1",
        btnCancelLabel: _t("No"),
        btnCancelClass: "btn btn-outline-secondary",
        btnCancelIconClass: "fas fa-circle mr-1",
        container: "body",
        singleton: true
      });
    }
  }, {
    key: "get_button_css",
    value: function get_button_css(id) {
      var additional_cls, cls; // calculate the button CSS

      cls = "btn btn-sm mr-1 mb-1"; // append additional button styles

      additional_cls = this.css_mapping[id];

      if (additional_cls) {
        cls += " ".concat(additional_cls);
      } else {
        cls += " btn-outline-secondary";
      }

      return cls;
    }
  }, {
    key: "on_ajax_save_button_click",
    value: function on_ajax_save_button_click(event) {
      // prevent form submit, because we want to handle that explicitly
      event.preventDefault(); // call the parent event handler to save

      if (this.props.on_ajax_save_button_click) {
        return this.props.on_ajax_save_button_click();
      }
    }
  }, {
    key: "on_transition_button_click",
    value: function on_transition_button_click(event) {
      var action, el, url; // prevent form submit, because we want to handle that explicitly

      event.preventDefault(); // extract the action ID

      el = event.currentTarget; // extract the transition action and the url of the button

      action = el.getAttribute("id");
      url = el.getAttribute("url"); // call the parent event handler to perform the transition

      if (this.props.on_transition_button_click) {
        return this.props.on_transition_button_click(action, url);
      }
    }
  }, {
    key: "build_buttons",
    value: function build_buttons() {
      var attrs, btn_id, buttons, cls, help, i, id, len, ref, review_state_confirm_transitions, title, transition, url;
      buttons = []; // Add a clear button if the select column is rendered

      if (this.props.show_select_column) {
        if (this.props.transitions.length > 0) {
          buttons.push( /*#__PURE__*/external_React_default().createElement("button", {
            key: "clear",
            className: "btn btn-outline-secondary btn-sm mb-1 mr-1",
            title: _t("Clear selection"),
            onClick: this.on_transition_button_click,
            id: "clear_selection"
          }, /*#__PURE__*/external_React_default().createElement("i", {
            className: "fas fa-circle-notch"
          })));
        }
      } // Add an Ajax save button


      if (this.props.show_ajax_save) {
        buttons.push( /*#__PURE__*/external_React_default().createElement("button", {
          key: "ajax-save",
          className: "btn btn-primary btn-sm mb-1 mr-1",
          onClick: this.on_ajax_save_button_click,
          title: this.props.ajax_save_button_title,
          id: "ajax_save_selection"
        }, this.props.ajax_save_button_title, " ", /*#__PURE__*/external_React_default().createElement("i", {
          className: "fas fa-save"
        })));
      }

      ref = this.props.transitions; // build the transition buttons

      for (i = 0, len = ref.length; i < len; i++) {
        transition = ref[i];
        id = transition.id;
        url = transition.url;
        title = _t(transition.title);
        help = _t(transition.help);
        cls = this.get_button_css(id);
        btn_id = "".concat(id, "_transition"); // append custom css class

        if (transition.css_class) {
          cls += " ".concat(transition.css_class);
        } // each review_state item may also define a list of confirm transitions


        review_state_confirm_transitions = this.props.review_state.confirm_transitions || []; // Add bootstrap-confirmation data toggle
        // http://bootstrap-confirmation.js.org/#options

        attrs = {};

        if (indexOf.call(this.confirm_transitions, id) >= 0 || indexOf.call(review_state_confirm_transitions, id) >= 0) {
          attrs["data-toggle"] = "confirmation";
          attrs["data-title"] = "".concat(title, "?");
        }

        buttons.push( /*#__PURE__*/external_React_default().createElement(Button_coffee, {
          key: transition.id,
          id: btn_id,
          title: title,
          help: help,
          url: url,
          className: cls,
          badge: this.props.selected_uids.length,
          onClick: this.on_transition_button_click,
          attrs: attrs
        }));
      }

      return buttons;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.selected_uids.length === 0) {
        return null;
      }

      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "".concat(this.props.className)
      }, this.build_buttons());
    }
  }]);

  return ButtonBar;
}((external_React_default()).Component);

/* harmony default export */ const ButtonBar_coffee = (ButtonBar);
;// CONCATENATED MODULE: ./components/FilterBar.coffee
function FilterBar_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FilterBar_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { FilterBar_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FilterBar_coffee_typeof(obj); }

function FilterBar_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FilterBar_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FilterBar_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) FilterBar_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) FilterBar_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function FilterBar_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FilterBar_coffee_setPrototypeOf(subClass, superClass); }

function FilterBar_coffee_setPrototypeOf(o, p) { FilterBar_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FilterBar_coffee_setPrototypeOf(o, p); }

function FilterBar_coffee_createSuper(Derived) { var hasNativeReflectConstruct = FilterBar_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = FilterBar_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = FilterBar_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return FilterBar_coffee_possibleConstructorReturn(this, result); }; }

function FilterBar_coffee_possibleConstructorReturn(self, call) { if (call && (FilterBar_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return FilterBar_coffee_assertThisInitialized(self); }

function FilterBar_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FilterBar_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function FilterBar_coffee_getPrototypeOf(o) { FilterBar_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FilterBar_coffee_getPrototypeOf(o); }

var FilterBar;



FilterBar = /*#__PURE__*/function (_React$Component) {
  FilterBar_coffee_inherits(FilterBar, _React$Component);

  var _super = FilterBar_coffee_createSuper(FilterBar);

  /*
   * The filter component provides workflow filter buttons
   */
  function FilterBar(props) {
    var _this;

    FilterBar_coffee_classCallCheck(this, FilterBar);

    _this = _super.call(this, props);
    _this.on_filter_button_clicked = _this.on_filter_button_clicked.bind(FilterBar_coffee_assertThisInitialized(_this));
    return _this;
  }

  FilterBar_coffee_createClass(FilterBar, [{
    key: "on_filter_button_clicked",
    value: function on_filter_button_clicked(event) {
      var el, id;
      /*
       * Event handler when a filter button was clicked
       */
      // prevent form submission

      event.preventDefault();
      el = event.currentTarget;
      id = el.id; // call the parent event handler with the state id

      return this.props.on_filter_button_clicked(id);
    }
  }, {
    key: "build_filter_buttons",
    value: function build_filter_buttons() {
      /*
       * Build filter buttons from the listing `review_states` list
       */
      var active_state, buttons, cls, key, ref, value;
      buttons = []; // the current active review state

      active_state = this.props.review_state;
      ref = this.props.review_states;

      for (key in ref) {
        value = ref[key]; // button CSS

        cls = "nav-item btn btn-sm btn-outline-secondary mr-1 mb-1";

        if (value.id === active_state) {
          cls += " active";
        }

        buttons.push( /*#__PURE__*/external_React_default().createElement(Button_coffee, {
          key: value.id,
          onClick: this.on_filter_button_clicked,
          id: value.id,
          title: value.title,
          className: cls
        }));
      } // omit filter buttons if there is only one


      if (buttons.length === 1) {
        return [];
      }

      return buttons;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: this.props.className
      }, this.build_filter_buttons());
    }
  }]);

  return FilterBar;
}((external_React_default()).Component);

/* harmony default export */ const FilterBar_coffee = (FilterBar);
;// CONCATENATED MODULE: ./api.coffee
function api_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function api_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function api_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) api_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) api_coffee_defineProperties(Constructor, staticProps); return Constructor; }

/*
 * Listing API Module
 */
var ListingAPI;

ListingAPI = /*#__PURE__*/function () {
  function ListingAPI(props) {
    api_coffee_classCallCheck(this, ListingAPI);

    console.debug("ListingAPI::constructor");
    this.api_url = props.api_url;
    this.form_id = props.form_id || "list";

    this.on_api_error = props.on_api_error || function (response) {};

    return this;
  }

  api_coffee_createClass(ListingAPI, [{
    key: "get_api_url",
    value: function get_api_url(endpoint) {
      /*
       * Build API URL for the given endpoint
       * @param {string} endpoint
       * @returns {string}
       */
      return "".concat(this.api_url, "/").concat(endpoint).concat(location.search);
    }
    /**
     * Prefix the name with the form_id
     *
     * @param name {string} The name to be prefixed
     * @returns {string}
     */

  }, {
    key: "to_form_name",
    value: function to_form_name(name) {
      if (name.startsWith(this.form_id)) {
        return name;
      }

      return "".concat(this.form_id, "_").concat(name);
    }
    /**
     * Get the name parameter either from the search or hash location
     *
     * @param name {string} The parameter name
     * @returns {string}
     */

  }, {
    key: "get_url_parameter",
    value: function get_url_parameter(name) {
      var regex, results;
      name = this.to_form_name(name);
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      results = regex.exec(location.search) || regex.exec(location.hash);

      if (results === null) {
        return "";
      }

      return decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    /**
     * parse the hash location from a given string
     *
     * @param s {string} string
     */

  }, {
    key: "parse_hash",
    value: function parse_hash(loc) {
      var hash, index, pairs;
      index = loc.indexOf("#");

      if (index === -1) {
        return [];
      }

      pairs = [];
      hash = loc.substring(index).replace("#", "").replace("?", "");
      return hash.split("&");
    }
  }, {
    key: "get_json",
    value: function get_json(endpoint, options) {
      var data, init, method, on_api_error, request, url;
      /*
       * Fetch Ajax API resource from the server
       * @param {string} endpoint
       * @param {object} options
       * @returns {Promise}
       */

      if (options == null) {
        options = {};
      }

      method = options.method || "POST";
      data = JSON.stringify(options.data) || "{}";
      on_api_error = this.on_api_error;
      url = this.get_api_url(endpoint);
      init = {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": this.get_csrf_token()
        },
        body: method === "POST" ? data : null,
        credentials: "include"
      };
      console.info("ListingAPI::fetch:endpoint=".concat(endpoint, " init="), init);
      request = new Request(url, init);
      return fetch(request).then(function (response) {
        if (!response.ok) {
          return Promise.reject(response);
        }

        return response;
      }).then(function (response) {
        return response.json();
      })["catch"](function (response) {
        on_api_error(response);
        return response;
      });
    }
  }, {
    key: "set_fields",
    value: function set_fields(data) {
      /*
       * Set values of multiple fields
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("set_fields", options);
    }
  }, {
    key: "query_folderitems",
    value: function query_folderitems(data) {
      /*
       * Query folderitems
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("query_folderitems", options);
    }
  }, {
    key: "fetch_children",
    value: function fetch_children(data) {
      /*
       * Query children
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("get_children", options);
    }
  }, {
    key: "fetch_folderitems",
    value: function fetch_folderitems(data) {
      /*
       * Fetch folder items
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("folderitems", options);
    }
  }, {
    key: "fetch_transitions",
    value: function fetch_transitions(data) {
      /*
       * Fetch possible transitions
       * @returns {Promise}
       */
      var options;
      options = {
        data: data || {},
        method: "POST"
      };
      return this.get_json("transitions", options);
    }
  }, {
    key: "get_csrf_token",
    value: function get_csrf_token() {
      /*
       * Get the plone.protect CSRF token
       * Note: The fields won't save w/o that token set
       */
      return document.querySelector("#protect-script").dataset.token;
    }
  }]);

  return ListingAPI;
}();

/* harmony default export */ const api_coffee = (ListingAPI);
;// CONCATENATED MODULE: ./components/Loader.coffee
function Loader_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Loader_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { Loader_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Loader_coffee_typeof(obj); }

function Loader_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Loader_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Loader_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) Loader_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) Loader_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function Loader_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Loader_coffee_setPrototypeOf(subClass, superClass); }

function Loader_coffee_setPrototypeOf(o, p) { Loader_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Loader_coffee_setPrototypeOf(o, p); }

function Loader_coffee_createSuper(Derived) { var hasNativeReflectConstruct = Loader_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Loader_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Loader_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Loader_coffee_possibleConstructorReturn(this, result); }; }

function Loader_coffee_possibleConstructorReturn(self, call) { if (call && (Loader_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return Loader_coffee_assertThisInitialized(self); }

function Loader_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Loader_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Loader_coffee_getPrototypeOf(o) { Loader_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Loader_coffee_getPrototypeOf(o); }

var Loader;



Loader = /*#__PURE__*/function (_React$Component) {
  Loader_coffee_inherits(Loader, _React$Component);

  var _super = Loader_coffee_createSuper(Loader);

  function Loader() {
    Loader_coffee_classCallCheck(this, Loader);

    return _super.apply(this, arguments);
  }

  Loader_coffee_createClass(Loader, [{
    key: "render",
    value: function render() {
      if (!this.props.loading) {
        // render a placeholder to avoid vertical jumps
        return /*#__PURE__*/external_React_default().createElement("div", {
          className: "loader"
        });
      }

      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "loader"
      }, /*#__PURE__*/external_React_default().createElement("span", {
        className: "dot dot_1"
      }), /*#__PURE__*/external_React_default().createElement("span", {
        className: "dot dot_2"
      }), /*#__PURE__*/external_React_default().createElement("span", {
        className: "dot dot_3"
      }), /*#__PURE__*/external_React_default().createElement("span", {
        className: "dot dot_4"
      }));
    }
  }]);

  return Loader;
}((external_React_default()).Component);

/* harmony default export */ const Loader_coffee = (Loader);
;// CONCATENATED MODULE: ./components/Messages.coffee
function Messages_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Messages_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { Messages_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Messages_coffee_typeof(obj); }

function Messages_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Messages_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Messages_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) Messages_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) Messages_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function Messages_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Messages_coffee_setPrototypeOf(subClass, superClass); }

function Messages_coffee_setPrototypeOf(o, p) { Messages_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Messages_coffee_setPrototypeOf(o, p); }

function Messages_coffee_createSuper(Derived) { var hasNativeReflectConstruct = Messages_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Messages_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Messages_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Messages_coffee_possibleConstructorReturn(this, result); }; }

function Messages_coffee_possibleConstructorReturn(self, call) { if (call && (Messages_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return Messages_coffee_assertThisInitialized(self); }

function Messages_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Messages_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Messages_coffee_getPrototypeOf(o) { Messages_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Messages_coffee_getPrototypeOf(o); }

var Messages;


Messages = /*#__PURE__*/function (_React$Component) {
  Messages_coffee_inherits(Messages, _React$Component);

  var _super = Messages_coffee_createSuper(Messages);

  function Messages(props) {
    var _this;

    Messages_coffee_classCallCheck(this, Messages);

    _this = _super.call(this, props); // Bind eventhandlers to local context

    _this.on_dismiss_message = _this.on_dismiss_message.bind(Messages_coffee_assertThisInitialized(_this));
    return _this;
  }

  Messages_coffee_createClass(Messages, [{
    key: "on_dismiss_message",
    value: function on_dismiss_message(event) {
      var index;
      event.preventDefault();
      index = event.currentTarget.getAttribute("index"); // call the parent event handler

      if (this.props.on_dismiss_message) {
        return this.props.on_dismiss_message(parseInt(index));
      }
    }
  }, {
    key: "render_messages",
    value: function render_messages() {
      var me, messages;
      messages = [];
      me = this;
      this.props.messages.map(function (message, index) {
        return messages.push( /*#__PURE__*/external_React_default().createElement("div", {
          key: index,
          className: "alert alert-".concat(message.level || 'info')
        }, /*#__PURE__*/external_React_default().createElement("button", {
          onClick: me.on_dismiss_message,
          index: index,
          type: "button",
          className: "close",
          "aria-label": "Close"
        }, /*#__PURE__*/external_React_default().createElement("span", {
          "aria-hidden": "true"
        }, "\xD7")), message.title && /*#__PURE__*/external_React_default().createElement("h4", {
          className: "alert-heading"
        }, message.title), message.text && /*#__PURE__*/external_React_default().createElement("div", null, message.text), message.traceback && /*#__PURE__*/external_React_default().createElement("pre", null, message.traceback)));
      });
      return messages;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.messages) {
        return null;
      }

      return /*#__PURE__*/external_React_default().createElement("div", {
        id: this.props.id,
        className: this.props.className
      }, this.render_messages());
    }
  }]);

  return Messages;
}((external_React_default()).Component);

/* harmony default export */ const Messages_coffee = (Messages);
;// CONCATENATED MODULE: ./components/Pagination.coffee
function Pagination_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Pagination_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { Pagination_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Pagination_coffee_typeof(obj); }

function Pagination_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Pagination_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Pagination_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) Pagination_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) Pagination_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function Pagination_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Pagination_coffee_setPrototypeOf(subClass, superClass); }

function Pagination_coffee_setPrototypeOf(o, p) { Pagination_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Pagination_coffee_setPrototypeOf(o, p); }

function Pagination_coffee_createSuper(Derived) { var hasNativeReflectConstruct = Pagination_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Pagination_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Pagination_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Pagination_coffee_possibleConstructorReturn(this, result); }; }

function Pagination_coffee_possibleConstructorReturn(self, call) { if (call && (Pagination_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return Pagination_coffee_assertThisInitialized(self); }

function Pagination_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Pagination_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Pagination_coffee_getPrototypeOf(o) { Pagination_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Pagination_coffee_getPrototypeOf(o); }

var Pagination;


Pagination = /*#__PURE__*/function (_React$Component) {
  Pagination_coffee_inherits(Pagination, _React$Component);

  var _super = Pagination_coffee_createSuper(Pagination);

  /*
   * The pagination component renders table paging controls
   */
  function Pagination(props) {
    var _this;

    Pagination_coffee_classCallCheck(this, Pagination);

    _this = _super.call(this, props);
    _this.state = {
      pagesize: _this.props.pagesize
    }; // bind event handler to local context

    _this.on_show_more_click = _this.on_show_more_click.bind(Pagination_coffee_assertThisInitialized(_this));
    _this.on_pagesize_change = _this.on_pagesize_change.bind(Pagination_coffee_assertThisInitialized(_this));
    _this.on_export_click = _this.on_export_click.bind(Pagination_coffee_assertThisInitialized(_this)); // create element references

    _this.pagesize_input = /*#__PURE__*/external_React_default().createRef();
    _this.show_more_button = /*#__PURE__*/external_React_default().createRef();
    _this.export_button = /*#__PURE__*/external_React_default().createRef();
    return _this;
  }

  Pagination_coffee_createClass(Pagination, [{
    key: "on_show_more_click",
    value: function on_show_more_click(event) {
      var pagesize;
      /*
       * Event handler when the "Show more" button was clicked
       */
      // prevent form submission

      event.preventDefault(); // parse the value of the pagesize input field

      pagesize = parseInt(this.pagesize_input.current.value); // minimum pagesize is 1

      if (!pagesize || pagesize < 1) {
        pagesize = 1;
      } // call the parent event handler


      return this.props.onShowMore(pagesize);
    }
  }, {
    key: "on_pagesize_change",
    value: function on_pagesize_change(event) {
      /*
       * Event handler when a manual pagesize was entered
       */
      var pagesize;
      pagesize = this.get_pagesize_input_value(); // set the pagesize to the local state

      this.setState({
        pagesize: pagesize
      }); // handle enter keypress

      if (event.which === 13) {
        // prevent form submission
        event.preventDefault(); // call the parent event listener

        return this.props.onShowMore(pagesize);
      }
    }
  }, {
    key: "get_pagesize_input_value",
    value: function get_pagesize_input_value() {
      /*
       * Fetch the value of the pagesize input field
       */
      var pagesize;
      pagesize = parseInt(this.pagesize_input.current.value);

      if (!pagesize || pagesize < 1) {
        // minimum pagesize is 1
        pagesize = 1; // write sanitized value back to the field

        this.pagesize_input.current.value = pagesize;
      }

      return pagesize;
    }
  }, {
    key: "on_export_click",
    value: function on_export_click(event) {
      /*
       * Event handler when the "Export" button was clicked
       */
      // prevent form submission
      event.preventDefault();
      console.debug("Pagination::on_export_click"); // call the parent event handler

      return this.props.onExport();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.count >= this.props.total) {
        return /*#__PURE__*/external_React_default().createElement("div", {
          id: this.props.id,
          className: this.props.className
        }, !this.props.show_export && /*#__PURE__*/external_React_default().createElement("div", {
          className: "text-right"
        }, this.props.count, " / ", this.props.total), this.props.show_export && /*#__PURE__*/external_React_default().createElement("div", {
          className: "input-group input-group-sm float-right"
        }, /*#__PURE__*/external_React_default().createElement("div", {
          className: "input-group-prepend"
        }, /*#__PURE__*/external_React_default().createElement("span", {
          className: "input-group-text"
        }, this.props.count, " / ", this.props.total)), /*#__PURE__*/external_React_default().createElement("span", {
          className: "input-group-append"
        }, /*#__PURE__*/external_React_default().createElement("button", {
          className: "btn btn-outline-secondary",
          ref: this.export_button,
          disabled: this.props.count === 0,
          onClick: this.on_export_click
        }, /*#__PURE__*/external_React_default().createElement("span", null, this.props.export_button_title || "Export")))));
      } else {
        return /*#__PURE__*/external_React_default().createElement("div", {
          id: this.props.id,
          className: this.props.className
        }, /*#__PURE__*/external_React_default().createElement("div", {
          className: "input-group input-group-sm float-right"
        }, /*#__PURE__*/external_React_default().createElement("div", {
          className: "input-group-prepend"
        }, /*#__PURE__*/external_React_default().createElement("span", {
          className: "input-group-text"
        }, this.props.count, " / ", this.props.total)), /*#__PURE__*/external_React_default().createElement("input", {
          type: "text",
          size: "3",
          defaultValue: this.state.pagesize,
          onChange: this.on_pagesize_change,
          onKeyPress: this.on_pagesize_change,
          ref: this.pagesize_input,
          disabled: this.props.count >= this.props.total,
          className: "form-control"
        }), /*#__PURE__*/external_React_default().createElement("span", {
          className: "input-group-append"
        }, /*#__PURE__*/external_React_default().createElement("button", {
          className: "btn btn-outline-secondary",
          disabled: this.props.count >= this.props.total,
          ref: this.show_more_button,
          onClick: this.on_show_more_click
        }, /*#__PURE__*/external_React_default().createElement("span", null, this.props.show_more_button_title || "Show more")), this.props.show_export && /*#__PURE__*/external_React_default().createElement("button", {
          className: "btn btn-outline-secondary",
          ref: this.export_button,
          disabled: this.props.count === 0,
          onClick: this.on_export_click
        }, /*#__PURE__*/external_React_default().createElement("span", null, this.props.export_button_title || "Export")))));
      }
    }
  }]);

  return Pagination;
}((external_React_default()).Component);

/* harmony default export */ const Pagination_coffee = (Pagination);
;// CONCATENATED MODULE: ./components/SearchBox.coffee
function SearchBox_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SearchBox_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { SearchBox_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SearchBox_coffee_typeof(obj); }

function SearchBox_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchBox_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SearchBox_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) SearchBox_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) SearchBox_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function SearchBox_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SearchBox_coffee_setPrototypeOf(subClass, superClass); }

function SearchBox_coffee_setPrototypeOf(o, p) { SearchBox_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SearchBox_coffee_setPrototypeOf(o, p); }

function SearchBox_coffee_createSuper(Derived) { var hasNativeReflectConstruct = SearchBox_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SearchBox_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SearchBox_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SearchBox_coffee_possibleConstructorReturn(this, result); }; }

function SearchBox_coffee_possibleConstructorReturn(self, call) { if (call && (SearchBox_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return SearchBox_coffee_assertThisInitialized(self); }

function SearchBox_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SearchBox_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SearchBox_coffee_getPrototypeOf(o) { SearchBox_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SearchBox_coffee_getPrototypeOf(o); }

var SearchBox;


SearchBox = /*#__PURE__*/function (_React$Component) {
  SearchBox_coffee_inherits(SearchBox, _React$Component);

  var _super = SearchBox_coffee_createSuper(SearchBox);

  /*
   * This component provides a search box
   */
  function SearchBox(props) {
    var _this;

    SearchBox_coffee_classCallCheck(this, SearchBox);

    _this = _super.call(this, props);
    _this.on_search_field_keypress = _this.on_search_field_keypress.bind(SearchBox_coffee_assertThisInitialized(_this));
    _this.on_search_button_click = _this.on_search_button_click.bind(SearchBox_coffee_assertThisInitialized(_this));
    _this.on_clear_button_click = _this.on_clear_button_click.bind(SearchBox_coffee_assertThisInitialized(_this));
    _this.search_input_field = /*#__PURE__*/external_React_default().createRef();
    return _this;
  }

  SearchBox_coffee_createClass(SearchBox, [{
    key: "on_search_field_keypress",
    value: function on_search_field_keypress(event) {
      var value;
      /*
       * Event handler when a keypress was detected in the searchfield
       */
      // handle enter key

      if (event.which === 13) {
        // prevent form submission on enter
        event.preventDefault(); // call the parent event handler with the current search value

        value = this.get_search_value();
        return this.props.on_search(value);
      }
    }
  }, {
    key: "on_search_button_click",
    value: function on_search_button_click(event) {
      var value;
      /*
       * Event handler when the search button was clicked
       */
      // prevent form submission

      event.preventDefault(); // call the parent event handler with the current search value

      value = this.get_search_value();
      return this.props.on_search(value);
    }
  }, {
    key: "on_clear_button_click",
    value: function on_clear_button_click(event) {
      /*
       * Event handler when the clear button was clicked
       */
      // prevent form submission
      event.preventDefault(); // flush the search field value

      this.search_input_field.current.value = ""; // call the parent event handler with the current search value

      return this.props.on_search("");
    }
  }, {
    key: "get_search_value",
    value: function get_search_value() {
      /*
       * Return the value of the search field
       */
      var value;
      value = this.search_input_field.current.value;
      return value;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.show_search === false) {
        return null;
      }

      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "input-group input-group-sm"
      }, /*#__PURE__*/external_React_default().createElement("input", {
        type: "text",
        autofocus: "true",
        className: "form-control",
        ref: this.search_input_field,
        defaultValue: this.props.filter,
        onKeyPress: this.on_search_field_keypress,
        placeholder: this.props.placeholder
      }), /*#__PURE__*/external_React_default().createElement("span", {
        className: "input-group-append"
      }, /*#__PURE__*/external_React_default().createElement("button", {
        className: "btn btn-outline-secondary",
        onClick: this.on_clear_button_click
      }, /*#__PURE__*/external_React_default().createElement("i", {
        className: "fas fa-undo"
      })), /*#__PURE__*/external_React_default().createElement("button", {
        className: "btn btn-outline-secondary",
        onClick: this.on_search_button_click
      }, /*#__PURE__*/external_React_default().createElement("i", {
        className: "fas fa-search"
      }))));
    }
  }]);

  return SearchBox;
}((external_React_default()).Component);

/* harmony default export */ const SearchBox_coffee = (SearchBox);
;// CONCATENATED MODULE: ./components/Checkbox.coffee
function Checkbox_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Checkbox_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { Checkbox_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Checkbox_coffee_typeof(obj); }

function Checkbox_coffee_extends() { Checkbox_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Checkbox_coffee_extends.apply(this, arguments); }

function Checkbox_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Checkbox_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Checkbox_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) Checkbox_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) Checkbox_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function Checkbox_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Checkbox_coffee_setPrototypeOf(subClass, superClass); }

function Checkbox_coffee_setPrototypeOf(o, p) { Checkbox_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Checkbox_coffee_setPrototypeOf(o, p); }

function Checkbox_coffee_createSuper(Derived) { var hasNativeReflectConstruct = Checkbox_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Checkbox_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Checkbox_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Checkbox_coffee_possibleConstructorReturn(this, result); }; }

function Checkbox_coffee_possibleConstructorReturn(self, call) { if (call && (Checkbox_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return Checkbox_coffee_assertThisInitialized(self); }

function Checkbox_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Checkbox_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Checkbox_coffee_getPrototypeOf(o) { Checkbox_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Checkbox_coffee_getPrototypeOf(o); }

var Checkbox;


Checkbox = /*#__PURE__*/function (_React$Component) {
  Checkbox_coffee_inherits(Checkbox, _React$Component);

  var _super = Checkbox_coffee_createSuper(Checkbox);

  /**
   * Checkbox Field for the Listing Table
   *
   * A checkbox field is identified by the column type "checkbox" in the listing
   * view, e.g.  `self.columns = {"Hidden": {"type": "checkbox"}, ... }`
   *
   */
  function Checkbox(props) {
    var _this;

    Checkbox_coffee_classCallCheck(this, Checkbox);

    _this = _super.call(this, props); // bind event handler to the current context

    _this.on_change = _this.on_change.bind(Checkbox_coffee_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Event handler when the value changed of the checkbox
   * @param event {object} ReactJS event object
   */


  Checkbox_coffee_createClass(Checkbox, [{
    key: "on_change",
    value: function on_change(event) {
      var checked, el, name, uid;
      el = event.currentTarget; // Extract the UID attribute

      uid = el.getAttribute("uid"); // Extract the column_key attribute

      name = el.getAttribute("column_key") || el.name; // Extract the checked status

      checked = el.checked;
      console.debug("Checkbox::on_change: checked=".concat(checked)); // Call the *update* field handler

      if (this.props.update_editable_field) {
        this.props.update_editable_field(uid, name, checked, this.props.item);
      } // Call the *save* field handler (no blur event here necessary)


      if (this.props.save_editable_field) {
        return this.props.save_editable_field(uid, name, checked, this.props.item);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("input", Checkbox_coffee_extends({
        key: this.props.name,
        type: "checkbox",
        uid: this.props.uid,
        name: this.props.name,
        value: this.props.value,
        column_key: this.props.column_key,
        title: this.props.title,
        disabled: this.props.disabled,
        checked: this.props.checked,
        defaultChecked: this.props.defaultChecked,
        className: this.props.className,
        onChange: this.props.onChange || this.on_change,
        tabIndex: this.props.tabIndex
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);

  return Checkbox;
}((external_React_default()).Component);

/* harmony default export */ const Checkbox_coffee = (Checkbox);
;// CONCATENATED MODULE: ./components/TableHeaderCell.coffee
function TableHeaderCell_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TableHeaderCell_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { TableHeaderCell_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TableHeaderCell_coffee_typeof(obj); }

function TableHeaderCell_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TableHeaderCell_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TableHeaderCell_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) TableHeaderCell_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) TableHeaderCell_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function TableHeaderCell_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TableHeaderCell_coffee_setPrototypeOf(subClass, superClass); }

function TableHeaderCell_coffee_setPrototypeOf(o, p) { TableHeaderCell_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TableHeaderCell_coffee_setPrototypeOf(o, p); }

function TableHeaderCell_coffee_createSuper(Derived) { var hasNativeReflectConstruct = TableHeaderCell_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TableHeaderCell_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TableHeaderCell_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TableHeaderCell_coffee_possibleConstructorReturn(this, result); }; }

function TableHeaderCell_coffee_possibleConstructorReturn(self, call) { if (call && (TableHeaderCell_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return TableHeaderCell_coffee_assertThisInitialized(self); }

function TableHeaderCell_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TableHeaderCell_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TableHeaderCell_coffee_getPrototypeOf(o) { TableHeaderCell_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TableHeaderCell_coffee_getPrototypeOf(o); }

var TableHeaderCell;


TableHeaderCell = /*#__PURE__*/function (_React$Component) {
  TableHeaderCell_coffee_inherits(TableHeaderCell, _React$Component);

  var _super = TableHeaderCell_coffee_createSuper(TableHeaderCell);

  /*
   * The table header cell component renders a single header cell
   */
  function TableHeaderCell(props) {
    TableHeaderCell_coffee_classCallCheck(this, TableHeaderCell);

    return _super.call(this, props);
  }

  TableHeaderCell_coffee_createClass(TableHeaderCell, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("th", {
        title: this.props.title,
        index: this.props.index,
        sort_order: this.props.sort_order,
        className: this.props.className,
        onClick: this.props.onClick
      }, /*#__PURE__*/external_React_default().createElement("span", null, this.props.title));
    }
  }]);

  return TableHeaderCell;
}((external_React_default()).Component);

/* harmony default export */ const TableHeaderCell_coffee = (TableHeaderCell);
;// CONCATENATED MODULE: ./components/TableHeaderRow.coffee
function TableHeaderRow_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TableHeaderRow_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { TableHeaderRow_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TableHeaderRow_coffee_typeof(obj); }

function TableHeaderRow_coffee_extends() { TableHeaderRow_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableHeaderRow_coffee_extends.apply(this, arguments); }

function TableHeaderRow_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TableHeaderRow_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TableHeaderRow_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) TableHeaderRow_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) TableHeaderRow_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function TableHeaderRow_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TableHeaderRow_coffee_setPrototypeOf(subClass, superClass); }

function TableHeaderRow_coffee_setPrototypeOf(o, p) { TableHeaderRow_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TableHeaderRow_coffee_setPrototypeOf(o, p); }

function TableHeaderRow_coffee_createSuper(Derived) { var hasNativeReflectConstruct = TableHeaderRow_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TableHeaderRow_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TableHeaderRow_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TableHeaderRow_coffee_possibleConstructorReturn(this, result); }; }

function TableHeaderRow_coffee_possibleConstructorReturn(self, call) { if (call && (TableHeaderRow_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return TableHeaderRow_coffee_assertThisInitialized(self); }

function TableHeaderRow_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TableHeaderRow_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TableHeaderRow_coffee_getPrototypeOf(o) { TableHeaderRow_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TableHeaderRow_coffee_getPrototypeOf(o); }

var TableHeaderRow,
    TableHeaderRow_coffee_indexOf = [].indexOf;




TableHeaderRow = /*#__PURE__*/function (_React$Component) {
  TableHeaderRow_coffee_inherits(TableHeaderRow, _React$Component);

  var _super = TableHeaderRow_coffee_createSuper(TableHeaderRow);

  /*
   * The table header row component renders a single row with cells
   */
  function TableHeaderRow(props) {
    var _this;

    TableHeaderRow_coffee_classCallCheck(this, TableHeaderRow);

    _this = _super.call(this, props);
    _this.on_header_column_click = _this.on_header_column_click.bind(TableHeaderRow_coffee_assertThisInitialized(_this));
    return _this;
  }

  TableHeaderRow_coffee_createClass(TableHeaderRow, [{
    key: "on_header_column_click",
    value: function on_header_column_click(event) {
      /*
       * Event handler when a header columns was clicked
       */
      var el, index, sort_order;
      el = event.currentTarget;
      index = el.getAttribute("index");
      sort_order = el.getAttribute("sort_order");

      if (!index) {
        return;
      }

      console.debug("HEADER CLICKED sort_on='".concat(index, "' sort_order=").concat(sort_order)); // toggle the sort order if the clicked column was the active one

      if (TableHeaderRow_coffee_indexOf.call(el.classList, "active") >= 0) {
        if (sort_order === "ascending") {
          sort_order = "descending";
        } else {
          sort_order = "ascending";
        }
      } // call the parent event handler with the sort index and the sort order


      return this.props.on_header_column_click(index, sort_order);
    }
  }, {
    key: "is_required_column",
    value: function is_required_column(key) {
      var first_item, folderitems, required;
      /*
       * Check if the column is required
       */
      // XXX This is a workaround for a missing key within the column definition

      folderitems = this.props.folderitems || [];

      if (folderitems.length === 0) {
        return false;
      }

      first_item = folderitems[0];
      required = first_item.required || [];
      return TableHeaderRow_coffee_indexOf.call(required, key) >= 0;
    }
  }, {
    key: "is_sortable",
    value: function is_sortable(column, key) {
      /*
       * Check if the column is sortable
       */
      if (column.sortable === false) {
        return false;
      }

      if (column.index) {
        return true;
      }

      if (TableHeaderRow_coffee_indexOf.call(this.props.sortable_columns, key) >= 0) {
        return true;
      }

      return false;
    }
  }, {
    key: "all_selected",
    value: function all_selected() {
      var i, item, len, ref, ref1;
      ref = this.props.folderitems;
      /*
       * Checks if all visible and enabled items are selected
       */

      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];

        if (!item.disabled && (ref1 = item.uid, TableHeaderRow_coffee_indexOf.call(this.props.selected_uids, ref1) < 0)) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "build_cells",
    value: function build_cells() {
      /*
       * Build all cells for the row
       */
      var all_selected, cells, checkbox_name, checkbox_value, cls, column, i, index, is_sort_column, item, key, len, ref, required, show_select_all_checkbox, sort_on, sort_order, sortable, title;
      cells = [];
      item = this.props.item;
      checkbox_name = "select_all";
      checkbox_value = "all"; // insert select column

      if (this.props.show_select_column) {
        // check if all visible rows are selected
        all_selected = this.all_selected();
        show_select_all_checkbox = this.props.show_select_all_checkbox;
        cells.push( /*#__PURE__*/external_React_default().createElement("th", {
          key: "select_all"
        }, show_select_all_checkbox && /*#__PURE__*/external_React_default().createElement(Checkbox_coffee, {
          name: checkbox_name,
          value: checkbox_value,
          checked: all_selected,
          onChange: this.props.on_select_checkbox_checked
        })));
      }

      ref = this.props.visible_columns; // insert table columns in the right order

      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i]; // get the column object

        column = this.props.columns[key]; // check if the key is in the sortable columns

        sortable = this.is_sortable(column, key); // sort index

        index = column.index || key;
        title = column.title; // sort_on is the current sort index/metadata

        sort_on = this.props.sort_on || "created";
        sort_order = this.props.sort_order || "ascending"; // check if the current sort_on is the index of this column

        is_sort_column = index === sort_on; // check if the column is required

        required = this.is_required_column(key);
        cls = [key];

        if (sortable) {
          cls.push("sortable");
        }

        if (is_sort_column && sortable) {
          cls.push("active ".concat(sort_order));
        }

        if (required) {
          cls.push("required");
        }

        cls = cls.join(" ");
        cells.push( /*#__PURE__*/external_React_default().createElement(TableHeaderCell_coffee, TableHeaderRow_coffee_extends({
          key: key
        }, this.props, {
          title: title,
          index: index,
          sort_order: sort_order,
          className: cls,
          onClick: sortable ? this.on_header_column_click : void 0
        }))); // internal key // pass in all properties from the table component
      }

      return cells;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("tr", {
        onContextMenu: this.props.on_context_menu
      }, this.build_cells());
    }
  }]);

  return TableHeaderRow;
}((external_React_default()).Component);

/* harmony default export */ const TableHeaderRow_coffee = (TableHeaderRow);
;// CONCATENATED MODULE: ./components/HiddenField.coffee
function HiddenField_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HiddenField_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { HiddenField_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HiddenField_coffee_typeof(obj); }

function HiddenField_coffee_extends() { HiddenField_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HiddenField_coffee_extends.apply(this, arguments); }

function HiddenField_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HiddenField_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HiddenField_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) HiddenField_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) HiddenField_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function HiddenField_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) HiddenField_coffee_setPrototypeOf(subClass, superClass); }

function HiddenField_coffee_setPrototypeOf(o, p) { HiddenField_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return HiddenField_coffee_setPrototypeOf(o, p); }

function HiddenField_coffee_createSuper(Derived) { var hasNativeReflectConstruct = HiddenField_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = HiddenField_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = HiddenField_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return HiddenField_coffee_possibleConstructorReturn(this, result); }; }

function HiddenField_coffee_possibleConstructorReturn(self, call) { if (call && (HiddenField_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return HiddenField_coffee_assertThisInitialized(self); }

function HiddenField_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function HiddenField_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function HiddenField_coffee_getPrototypeOf(o) { HiddenField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return HiddenField_coffee_getPrototypeOf(o); }

var HiddenField;


HiddenField = /*#__PURE__*/function (_React$Component) {
  HiddenField_coffee_inherits(HiddenField, _React$Component);

  var _super = HiddenField_coffee_createSuper(HiddenField);

  /**
   * Hidden Field for the Listing Table
   *
   * Render this field to ensure the value is sent to the server on form submission
   *
   */
  function HiddenField(props) {
    HiddenField_coffee_classCallCheck(this, HiddenField);

    return _super.call(this, props);
  }

  HiddenField_coffee_createClass(HiddenField, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("input", HiddenField_coffee_extends({
        type: "hidden",
        uid: this.props.uid,
        name: this.props.name,
        value: this.props.value,
        column_key: this.props.column_key,
        className: this.props.className
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);

  return HiddenField;
}((external_React_default()).Component);

/* harmony default export */ const HiddenField_coffee = (HiddenField);
;// CONCATENATED MODULE: ./components/MultiChoice.coffee
function MultiChoice_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MultiChoice_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { MultiChoice_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MultiChoice_coffee_typeof(obj); }

function MultiChoice_coffee_extends() { MultiChoice_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MultiChoice_coffee_extends.apply(this, arguments); }

function MultiChoice_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MultiChoice_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MultiChoice_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) MultiChoice_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) MultiChoice_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function MultiChoice_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MultiChoice_coffee_setPrototypeOf(subClass, superClass); }

function MultiChoice_coffee_setPrototypeOf(o, p) { MultiChoice_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MultiChoice_coffee_setPrototypeOf(o, p); }

function MultiChoice_coffee_createSuper(Derived) { var hasNativeReflectConstruct = MultiChoice_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MultiChoice_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MultiChoice_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MultiChoice_coffee_possibleConstructorReturn(this, result); }; }

function MultiChoice_coffee_possibleConstructorReturn(self, call) { if (call && (MultiChoice_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return MultiChoice_coffee_assertThisInitialized(self); }

function MultiChoice_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MultiChoice_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MultiChoice_coffee_getPrototypeOf(o) { MultiChoice_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MultiChoice_coffee_getPrototypeOf(o); }

var MultiChoice;


MultiChoice = /*#__PURE__*/function (_React$Component) {
  MultiChoice_coffee_inherits(MultiChoice, _React$Component);

  var _super = MultiChoice_coffee_createSuper(MultiChoice);

  /**
   * Multi-Choice Field for the Listing Table
   *
   * A multi select field is identified by the column type "multichoice" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "multichoice"}, ... }`
   *
   */
  function MultiChoice(props) {
    var _this;

    MultiChoice_coffee_classCallCheck(this, MultiChoice);

    _this = _super.call(this, props); // bind event handler to the current context

    _this.on_change = _this.on_change.bind(MultiChoice_coffee_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Event handler when the value changed of the select field
   * @param event {object} ReactJS event object
   */


  MultiChoice_coffee_createClass(MultiChoice, [{
    key: "on_change",
    value: function on_change(event) {
      var checked, el, input, name, uid, ul, value;
      el = event.currentTarget; // Get the parent list wrapper

      ul = el.parentNode.parentNode; // Extract all checked items

      checked = ul.querySelectorAll("input[type='checkbox']:checked"); // Extract the UID attribute

      uid = el.getAttribute("uid"); // Extract the column_key attribute

      name = el.getAttribute("column_key") || el.name; // Prepare a list of UIDs

      value = function () {
        var i, len, results;
        results = [];

        for (i = 0, len = checked.length; i < len; i++) {
          input = checked[i];
          results.push(input.value);
        }

        return results;
      }();

      console.debug("MultiChoice::on_change: value=".concat(value)); // Call the *update* field handler

      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }
    /**
     * Select options builder
     * @param options {array} list of option objects, e.g.:
     *                        {"ResultText": ..., "ResultValue": ...}
     */

  }, {
    key: "build_options",
    value: function build_options() {
      var i, len, option, options, selected, sorted_options, title, value;
      options = []; // Sort the items alphabetically

      sorted_options = this.props.options.sort(function (a, b) {
        var text_a, text_b;
        text_a = a.ResultText.toLowerCase();
        text_b = b.ResultText.toLowerCase();

        if (text_a > text_b) {
          return 1;
        }

        if (text_a < text_b) {
          return -1;
        }

        return 0;
      });

      for (i = 0, len = sorted_options.length; i < len; i++) {
        option = sorted_options[i];
        value = option.ResultValue;
        title = option.ResultText;
        selected = option.selected || false;
        options.push( /*#__PURE__*/external_React_default().createElement("li", {
          key: value
        }, /*#__PURE__*/external_React_default().createElement("input", MultiChoice_coffee_extends({
          type: "checkbox",
          defaultChecked: selected,
          uid: this.props.uid,
          name: this.props.name,
          value: value,
          onChange: this.props.onChange || this.on_change,
          column_key: this.props.column_key,
          tabIndex: this.props.tabIndex
        }, this.props.attrs)), " ", title));
      }

      return options;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "multichoice"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("ul", {
        className: "list-unstyled"
      }, this.build_options()), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);

  return MultiChoice;
}((external_React_default()).Component);

/* harmony default export */ const MultiChoice_coffee = (MultiChoice);
;// CONCATENATED MODULE: ./components/MultiSelect.coffee
function MultiSelect_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MultiSelect_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { MultiSelect_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MultiSelect_coffee_typeof(obj); }

function MultiSelect_coffee_extends() { MultiSelect_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MultiSelect_coffee_extends.apply(this, arguments); }

function MultiSelect_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MultiSelect_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MultiSelect_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) MultiSelect_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) MultiSelect_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function MultiSelect_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MultiSelect_coffee_setPrototypeOf(subClass, superClass); }

function MultiSelect_coffee_setPrototypeOf(o, p) { MultiSelect_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MultiSelect_coffee_setPrototypeOf(o, p); }

function MultiSelect_coffee_createSuper(Derived) { var hasNativeReflectConstruct = MultiSelect_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MultiSelect_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MultiSelect_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MultiSelect_coffee_possibleConstructorReturn(this, result); }; }

function MultiSelect_coffee_possibleConstructorReturn(self, call) { if (call && (MultiSelect_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return MultiSelect_coffee_assertThisInitialized(self); }

function MultiSelect_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MultiSelect_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MultiSelect_coffee_getPrototypeOf(o) { MultiSelect_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MultiSelect_coffee_getPrototypeOf(o); }

var MultiSelect,
    MultiSelect_coffee_indexOf = [].indexOf;


MultiSelect = /*#__PURE__*/function (_React$Component) {
  MultiSelect_coffee_inherits(MultiSelect, _React$Component);

  var _super = MultiSelect_coffee_createSuper(MultiSelect);

  /**
   * MultiSelect Field for the Listing Table
   *
   * A multi select field is identified by the column type "multiselect" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "multiselect"}, ... }`
   *
   */
  function MultiSelect(props) {
    var _this;

    MultiSelect_coffee_classCallCheck(this, MultiSelect);

    _this = _super.call(this, props); // remember the initial value

    _this.state = {
      value: props.defaultValue
    }; // bind event handler to the current context

    _this.on_change = _this.on_change.bind(MultiSelect_coffee_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Event handler when the value changed of the select field
   * @param event {object} ReactJS event object
   */


  MultiSelect_coffee_createClass(MultiSelect, [{
    key: "on_change",
    value: function on_change(event) {
      var checked, el, input, name, uid, ul, value;
      el = event.currentTarget; // Get the parent list wrapper

      ul = el.parentNode.parentNode; // Extract all selected items

      checked = ul.querySelectorAll("select"); // Extract the UID attribute

      uid = el.getAttribute("uid"); // Extract the column_key attribute

      name = el.getAttribute("column_key") || el.name; // Prepare a list of UIDs

      value = function () {
        var i, len, results;
        results = [];

        for (i = 0, len = checked.length; i < len; i++) {
          input = checked[i];
          results.push(input.value);
        }

        return results;
      }(); // store the new value


      this.setState({
        value: value
      });
      console.debug("MultiSelect::on_change: name=".concat(name, " value=").concat(value)); // Call the *update* field handler

      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }
    /**
     * Select options builder
     * @param selected_value the option to be selected
     * @param options {array} list of option objects, e.g.:
     *                        {"ResultText": ..., "ResultValue": ...}
     * @param exclude_values {array} list of option values to exclude
     */

  }, {
    key: "build_options",
    value: function build_options(exclude_values) {
      var empties, i, len, option, options, props_options, sorted_options, title, value;
      options = []; // Possible options of the selection list

      props_options = this.props.options || []; // Exclude some options

      props_options = props_options.filter(function (option) {
        var ref;
        return ref = option.ResultValue, MultiSelect_coffee_indexOf.call(exclude_values, ref) < 0;
      }); // Add an empty option to be displayed by default, but only when no empty
      // option does not exist yet

      empties = props_options.filter(function (option) {
        return option.ResultValue === "";
      });

      if (empties.length === 0) {
        props_options.push({
          ResultValue: "",
          ResultText: ""
        });
      } // Sort the options alphabetically


      sorted_options = props_options.sort(function (a, b) {
        var text_a, text_b;
        text_a = a.ResultText.toLowerCase();
        text_b = b.ResultText.toLowerCase();

        if (text_a > text_b) {
          return 1;
        }

        if (text_a < text_b) {
          return -1;
        }

        return 0;
      }); // Add the options to the selection list

      for (i = 0, len = sorted_options.length; i < len; i++) {
        option = sorted_options[i];
        value = option.ResultValue;
        title = option.ResultText;
        options.push( /*#__PURE__*/external_React_default().createElement("option", {
          value: value
        }, title));
      }

      return options;
    }
    /*
     * Converts the value to an array
     */

  }, {
    key: "to_array",
    value: function to_array(value) {
      if (!value) {
        return [];
      }

      if (Array.isArray(value)) {
        return value;
      }

      return JSON.parse(value);
    }
    /*
     * Selectors list builder. Generates a list with as many select elements as
     * values passed-in. Each selector contains all the options for selection,
     * with the option that matches with the value selected
     * @param values {array} list of selected ResultValues
     * @param options {array} list of option objects, e.g.:
     *                        {"ResultText": ..., "ResultValue": ...}
     */

  }, {
    key: "build_selectors",
    value: function build_selectors() {
      var exclude_values, excluded, excluded_values, i, len, options, selected_value, selectors, values; // Convert the result to an array

      values = this.to_array(this.state.value); // filter out empties

      values = values.filter(function (value) {
        return value !== "";
      });
      excluded_values = [];

      if (this.props.duplicates) {
        // Duplicates allowed. Add an empty selector at the end
        values.push("");
      } else {
        // Values exclusion
        excluded_values = values; // Add an empty selector at the end, but only if there are still options
        // available for selection

        options = this.props.options || [];

        if (values.length < options.length) {
          values.push("");
        }
      } // Build the selectors


      selectors = [];
      exclude_values = [];

      for (i = 0, len = values.length; i < len; i++) {
        selected_value = values[i];
        console.log("MultiSelect::build_selectors:value='".concat(selected_value, "'"));
        excluded = excluded_values.filter(function (value) {
          return value !== selected_value;
        });
        selectors.push( /*#__PURE__*/external_React_default().createElement("li", {
          key: selected_value
        }, /*#__PURE__*/external_React_default().createElement("select", MultiSelect_coffee_extends({
          value: selected_value,
          uid: this.props.uid,
          name: this.props.name,
          onChange: this.props.onChange || this.on_change,
          column_key: this.props.column_key,
          className: this.props.className
        }, this.props.attrs), this.build_options(excluded))));
      }

      return selectors;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "multiselect"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("ul", {
        className: "list-unstyled",
        tabIndex: this.props.tabIndex
      }, this.build_selectors()), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);

  return MultiSelect;
}((external_React_default()).Component);

/* harmony default export */ const MultiSelect_coffee = (MultiSelect);
;// CONCATENATED MODULE: ./components/NumericField.coffee
function NumericField_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NumericField_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { NumericField_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NumericField_coffee_typeof(obj); }

function NumericField_coffee_extends() { NumericField_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return NumericField_coffee_extends.apply(this, arguments); }

function NumericField_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NumericField_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NumericField_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) NumericField_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) NumericField_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function NumericField_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NumericField_coffee_setPrototypeOf(subClass, superClass); }

function NumericField_coffee_setPrototypeOf(o, p) { NumericField_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NumericField_coffee_setPrototypeOf(o, p); }

function NumericField_coffee_createSuper(Derived) { var hasNativeReflectConstruct = NumericField_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NumericField_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NumericField_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NumericField_coffee_possibleConstructorReturn(this, result); }; }

function NumericField_coffee_possibleConstructorReturn(self, call) { if (call && (NumericField_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return NumericField_coffee_assertThisInitialized(self); }

function NumericField_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NumericField_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function NumericField_coffee_getPrototypeOf(o) { NumericField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NumericField_coffee_getPrototypeOf(o); }

var NumericField;


NumericField = /*#__PURE__*/function (_React$Component) {
  NumericField_coffee_inherits(NumericField, _React$Component);

  var _super = NumericField_coffee_createSuper(NumericField);

  /**
   * Numeric Field for the Listing Table
   *
   * A numeric field is identified by the column type "numeric" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "numeric"}, ... }`
   *
   */
  function NumericField(props) {
    var _this;

    NumericField_coffee_classCallCheck(this, NumericField);

    _this = _super.call(this, props); // remember the initial value

    _this.state = {
      value: props.defaultValue
    }; // bind event handler to the current context

    _this.on_blur = _this.on_blur.bind(NumericField_coffee_assertThisInitialized(_this));
    _this.on_change = _this.on_change.bind(NumericField_coffee_assertThisInitialized(_this));
    return _this;
  }
  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   * This is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   */


  NumericField_coffee_createClass(NumericField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.defaultValue !== prevProps.defaultValue) {
        return this.setState({
          value: this.props.defaultValue
        });
      }
    }
    /**
     * Event handler when the mouse left the numeric field
     * @param event {object} ReactJS event object
     */

  }, {
    key: "on_blur",
    value: function on_blur(event) {
      var el, name, uid, value;
      el = event.currentTarget; // Extract the UID attribute

      uid = el.getAttribute("uid"); // Extract the column_key attribute

      name = el.getAttribute("column_key") || el.name; // Extract the value of the numeric field

      value = el.value; // Remove any trailing dots

      value = value.replace(/\.*$/, ""); // Set the sanitized value back to the field

      el.value = value;
      console.debug("NumericField::on_blur: value=".concat(value)); // Call the *save* field handler with the UID, name, value

      if (this.props.save_editable_field) {
        return this.props.save_editable_field(uid, name, value, this.props.item);
      }
    }
    /**
     * Event handler when the value changed of the numeric field
     * @param event {object} ReactJS event object
     */

  }, {
    key: "on_change",
    value: function on_change(event) {
      var el, name, uid, value;
      el = event.currentTarget; // Extract the UID attribute

      uid = el.getAttribute("uid"); // Extract the column_key attribute

      name = el.getAttribute("column_key") || el.name; // Extract the value of the numeric field

      value = el.value; // Convert the value to float

      value = this.to_float(value); // Set the float value back to the field

      el.value = value; // store the new value

      this.setState({
        value: value
      });
      console.debug("NumericField::on_change: value=".concat(value)); // Call the *update* field handler

      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }
    /**
     * Float converter
     * @param value {string} a numeric string value
     */

  }, {
    key: "to_float",
    value: function to_float(value) {
      // Valid -.5; -0.5; -0.555; .5; 0.5; 0.555
      //       -,5; -0,5; -0,555; ,5; 0,5; 0,555
      // Non Valid: -.5.5; 0,5,5; ...;
      value = value.replace(/(^[-,<,>]?)(\d*)([\.,]?\d*)(.*)/, "$1$2$3");
      value = value.replace(",", ".");
      return value;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("input", NumericField_coffee_extends({
        type: "text",
        size: this.props.size || 5,
        uid: this.props.uid,
        name: this.props.name,
        value: this.state.value,
        column_key: this.props.column_key,
        title: this.props.title,
        disabled: this.props.disabled,
        required: this.props.required,
        className: this.props.className,
        placeholder: this.props.placeholder,
        onBlur: this.props.onBlur || this.on_blur,
        onChange: this.props.onChange || this.on_change,
        tabIndex: this.props.tabIndex
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);

  return NumericField;
}((external_React_default()).Component);

/* harmony default export */ const NumericField_coffee = (NumericField);
;// CONCATENATED MODULE: ./components/CalculatedField.coffee
function CalculatedField_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CalculatedField_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { CalculatedField_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CalculatedField_coffee_typeof(obj); }

function CalculatedField_coffee_extends() { CalculatedField_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CalculatedField_coffee_extends.apply(this, arguments); }

function CalculatedField_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CalculatedField_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CalculatedField_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) CalculatedField_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) CalculatedField_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function CalculatedField_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CalculatedField_coffee_setPrototypeOf(subClass, superClass); }

function CalculatedField_coffee_setPrototypeOf(o, p) { CalculatedField_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CalculatedField_coffee_setPrototypeOf(o, p); }

function CalculatedField_coffee_createSuper(Derived) { var hasNativeReflectConstruct = CalculatedField_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CalculatedField_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CalculatedField_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CalculatedField_coffee_possibleConstructorReturn(this, result); }; }

function CalculatedField_coffee_possibleConstructorReturn(self, call) { if (call && (CalculatedField_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return CalculatedField_coffee_assertThisInitialized(self); }

function CalculatedField_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CalculatedField_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CalculatedField_coffee_getPrototypeOf(o) { CalculatedField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CalculatedField_coffee_getPrototypeOf(o); }

var CalculatedField;


CalculatedField = /*#__PURE__*/function (_React$Component) {
  CalculatedField_coffee_inherits(CalculatedField, _React$Component);

  var _super = CalculatedField_coffee_createSuper(CalculatedField);

  /**
   * Calculated Field for the Listing Table
   *
   * Basically like a *disabled* numeric field, but with a controlled value
   *
   */
  function CalculatedField(props) {
    CalculatedField_coffee_classCallCheck(this, CalculatedField);

    return _super.call(this, props);
  }

  CalculatedField_coffee_createClass(CalculatedField, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("input", CalculatedField_coffee_extends({
        type: "text",
        size: this.props.size || 5,
        uid: this.props.uid,
        name: this.props.name,
        value: this.props.value || "",
        column_key: this.props.column_key,
        title: this.props.title,
        disabled: true,
        required: this.props.required,
        className: this.props.className,
        placeholder: this.props.placeholder,
        tabIndex: "-1"
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);

  return CalculatedField;
}((external_React_default()).Component);

/* harmony default export */ const CalculatedField_coffee = (CalculatedField);
;// CONCATENATED MODULE: ./components/ReadonlyField.coffee
function ReadonlyField_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ReadonlyField_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { ReadonlyField_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ReadonlyField_coffee_typeof(obj); }

function ReadonlyField_coffee_extends() { ReadonlyField_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ReadonlyField_coffee_extends.apply(this, arguments); }

function ReadonlyField_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ReadonlyField_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ReadonlyField_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) ReadonlyField_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) ReadonlyField_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function ReadonlyField_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ReadonlyField_coffee_setPrototypeOf(subClass, superClass); }

function ReadonlyField_coffee_setPrototypeOf(o, p) { ReadonlyField_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ReadonlyField_coffee_setPrototypeOf(o, p); }

function ReadonlyField_coffee_createSuper(Derived) { var hasNativeReflectConstruct = ReadonlyField_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ReadonlyField_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ReadonlyField_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ReadonlyField_coffee_possibleConstructorReturn(this, result); }; }

function ReadonlyField_coffee_possibleConstructorReturn(self, call) { if (call && (ReadonlyField_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return ReadonlyField_coffee_assertThisInitialized(self); }

function ReadonlyField_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ReadonlyField_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ReadonlyField_coffee_getPrototypeOf(o) { ReadonlyField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ReadonlyField_coffee_getPrototypeOf(o); }

var ReadonlyField;


ReadonlyField = /*#__PURE__*/function (_React$Component) {
  ReadonlyField_coffee_inherits(ReadonlyField, _React$Component);

  var _super = ReadonlyField_coffee_createSuper(ReadonlyField);

  function ReadonlyField(props) {
    ReadonlyField_coffee_classCallCheck(this, ReadonlyField);

    return _super.call(this, props);
  }

  ReadonlyField_coffee_createClass(ReadonlyField, [{
    key: "is_boolean_field",
    value: function is_boolean_field() {
      if (typeof this.props.value === "boolean") {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.is_boolean_field()) {
        if (this.props.value) {
          return /*#__PURE__*/external_React_default().createElement("span", null, _t("Yes"));
        } else {
          return /*#__PURE__*/external_React_default().createElement("span", null, _t("No"));
        }
      } else {
        return /*#__PURE__*/external_React_default().createElement("span", {
          className: this.props.className
        }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
          className: "before_field",
          dangerouslySetInnerHTML: {
            __html: this.props.before
          }
        }), /*#__PURE__*/external_React_default().createElement("span", ReadonlyField_coffee_extends({
          dangerouslySetInnerHTML: {
            __html: this.props.formatted_value
          }
        }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
          className: "after_field",
          dangerouslySetInnerHTML: {
            __html: this.props.after
          }
        }));
      }
    }
  }]);

  return ReadonlyField;
}((external_React_default()).Component);

/* harmony default export */ const ReadonlyField_coffee = (ReadonlyField);
;// CONCATENATED MODULE: ./components/Select.coffee
function Select_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Select_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { Select_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Select_coffee_typeof(obj); }

function Select_coffee_extends() { Select_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_coffee_extends.apply(this, arguments); }

function Select_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Select_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Select_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) Select_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) Select_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function Select_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Select_coffee_setPrototypeOf(subClass, superClass); }

function Select_coffee_setPrototypeOf(o, p) { Select_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Select_coffee_setPrototypeOf(o, p); }

function Select_coffee_createSuper(Derived) { var hasNativeReflectConstruct = Select_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Select_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Select_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Select_coffee_possibleConstructorReturn(this, result); }; }

function Select_coffee_possibleConstructorReturn(self, call) { if (call && (Select_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return Select_coffee_assertThisInitialized(self); }

function Select_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Select_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Select_coffee_getPrototypeOf(o) { Select_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Select_coffee_getPrototypeOf(o); }

var Select;


Select = /*#__PURE__*/function (_React$Component) {
  Select_coffee_inherits(Select, _React$Component);

  var _super = Select_coffee_createSuper(Select);

  /**
   * Select Field for the Listing Table
   *
   * A select field is identified by the column type "choices" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "choices"}, ... }`
   *
   */
  function Select(props) {
    var _this;

    Select_coffee_classCallCheck(this, Select);

    _this = _super.call(this, props); // remember the initial value

    _this.state = {
      value: props.defaultValue || ""
    }; // bind event handler to the current context

    _this.on_blur = _this.on_blur.bind(Select_coffee_assertThisInitialized(_this));
    _this.on_change = _this.on_change.bind(Select_coffee_assertThisInitialized(_this));
    return _this;
  }
  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   * This is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   */


  Select_coffee_createClass(Select, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.defaultValue !== prevProps.defaultValue) {
        return this.setState({
          value: this.props.defaultValue
        });
      }
    }
    /**
     * Event handler when the mouse left the select field
     * @param event {object} ReactJS event object
     */

  }, {
    key: "on_blur",
    value: function on_blur(event) {
      var el, name, uid, value;
      el = event.currentTarget; // Extract the UID attribute

      uid = el.getAttribute("uid"); // Extract the column_key attribute

      name = el.getAttribute("column_key") || el.name; // Extract the value of the numeric field

      value = el.value;
      this.setState({
        value: value
      });
      console.debug("Select::on_blur: value=".concat(value)); // Call the *save* field handler with the UID, name, value

      if (this.props.save_editable_field) {
        return this.props.save_editable_field(uid, name, value, this.props.item);
      }
    }
    /**
     * Event handler when the value changed of the select field
     * @param event {object} ReactJS event object
     */

  }, {
    key: "on_change",
    value: function on_change(event) {
      var el, name, uid, value;
      el = event.currentTarget; // Extract the UID attribute

      uid = el.getAttribute("uid"); // Extract the column_key attribute

      name = el.getAttribute("column_key") || el.name; // Extract the value of the numeric field

      value = el.value; // Only propagate for new values

      if (value === this.state.value) {
        return;
      }

      console.debug("Select::on_change: value=".concat(value)); // store the new value

      this.setState({
        value: value
      }); // Call the *update* field handler

      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }
    /**
     * Select options builder
     * @param options {array} list of option objects, e.g.:
     *                        {"ResultText": ..., "ResultValue": ...}
     */

  }, {
    key: "build_options",
    value: function build_options() {
      var i, len, option, options, sorted_options, title, value;
      options = [];
      sorted_options = this.props.options.sort(function (a, b) {
        var text_a, text_b;
        text_a = a.ResultText;
        text_b = b.ResultText;

        if (text_a > text_b) {
          return 1;
        }

        if (text_a < text_b) {
          return -1;
        }

        return 0;
      });

      for (i = 0, len = sorted_options.length; i < len; i++) {
        option = sorted_options[i];
        value = option.ResultValue;
        title = option.ResultText;
        options.push( /*#__PURE__*/external_React_default().createElement("option", {
          key: value,
          value: value
        }, title));
      }

      return options;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("select", Select_coffee_extends({
        key: this.props.name,
        uid: this.props.uid,
        name: this.props.name,
        value: this.state.value,
        column_key: this.props.column_key,
        title: this.props.title,
        disabled: this.props.disabled,
        onBlur: this.props.onBlur || this.on_blur,
        onChange: this.props.onChange || this.on_change,
        required: this.props.required,
        className: this.props.className,
        tabIndex: this.props.tabIndex
      }, this.props.attrs), this.build_options()), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);

  return Select;
}((external_React_default()).Component);

/* harmony default export */ const Select_coffee = (Select);
;// CONCATENATED MODULE: ./components/StringField.coffee
function StringField_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StringField_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { StringField_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StringField_coffee_typeof(obj); }

function StringField_coffee_extends() { StringField_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return StringField_coffee_extends.apply(this, arguments); }

function StringField_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StringField_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StringField_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) StringField_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) StringField_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function StringField_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) StringField_coffee_setPrototypeOf(subClass, superClass); }

function StringField_coffee_setPrototypeOf(o, p) { StringField_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return StringField_coffee_setPrototypeOf(o, p); }

function StringField_coffee_createSuper(Derived) { var hasNativeReflectConstruct = StringField_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = StringField_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = StringField_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return StringField_coffee_possibleConstructorReturn(this, result); }; }

function StringField_coffee_possibleConstructorReturn(self, call) { if (call && (StringField_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return StringField_coffee_assertThisInitialized(self); }

function StringField_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function StringField_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function StringField_coffee_getPrototypeOf(o) { StringField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return StringField_coffee_getPrototypeOf(o); }

var StringField;


StringField = /*#__PURE__*/function (_React$Component) {
  StringField_coffee_inherits(StringField, _React$Component);

  var _super = StringField_coffee_createSuper(StringField);

  /**
   * String Field for the Listing Table
   *
   * A string field is identified by the column type "string" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "string"}, ... }`
   *
   */
  function StringField(props) {
    var _this;

    StringField_coffee_classCallCheck(this, StringField);

    _this = _super.call(this, props); // remember the initial value

    _this.state = {
      value: props.defaultValue
    }; // bind event handler to the current context

    _this.on_change = _this.on_change.bind(StringField_coffee_assertThisInitialized(_this));
    return _this;
  }
  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   * This is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   */


  StringField_coffee_createClass(StringField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.defaultValue !== prevProps.defaultValue) {
        return this.setState({
          value: this.props.defaultValue
        });
      }
    }
    /**
     * Event handler when the value changed of the string field
     * @param event {object} ReactJS event object
     */

  }, {
    key: "on_change",
    value: function on_change(event) {
      var el, name, uid, value;
      el = event.currentTarget; // Extract the UID attribute

      uid = el.getAttribute("uid"); // Extract the column_key attribute

      name = el.getAttribute("column_key") || el.name; // Extract the value of the string field

      value = el.value; // store the new value

      this.setState({
        value: value
      });
      console.debug("StringField::on_change: value=".concat(value)); // Call the *update* field handler

      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("input", StringField_coffee_extends({
        type: "text",
        size: this.props.size || 20,
        uid: this.props.uid,
        name: this.props.name,
        value: this.state.value,
        column_key: this.props.column_key,
        title: this.props.title,
        disabled: this.props.disabled,
        required: this.props.required,
        className: this.props.className,
        placeholder: this.props.placeholder,
        onChange: this.props.onChange || this.on_change,
        tabIndex: this.props.tabIndex
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);

  return StringField;
}((external_React_default()).Component);

/* harmony default export */ const StringField_coffee = (StringField);
;// CONCATENATED MODULE: ./components/DateTime.coffee
function DateTime_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DateTime_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { DateTime_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DateTime_coffee_typeof(obj); }

function DateTime_coffee_extends() { DateTime_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DateTime_coffee_extends.apply(this, arguments); }

function DateTime_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DateTime_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DateTime_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) DateTime_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) DateTime_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function DateTime_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DateTime_coffee_setPrototypeOf(subClass, superClass); }

function DateTime_coffee_setPrototypeOf(o, p) { DateTime_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DateTime_coffee_setPrototypeOf(o, p); }

function DateTime_coffee_createSuper(Derived) { var hasNativeReflectConstruct = DateTime_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = DateTime_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = DateTime_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return DateTime_coffee_possibleConstructorReturn(this, result); }; }

function DateTime_coffee_possibleConstructorReturn(self, call) { if (call && (DateTime_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return DateTime_coffee_assertThisInitialized(self); }

function DateTime_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DateTime_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function DateTime_coffee_getPrototypeOf(o) { DateTime_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DateTime_coffee_getPrototypeOf(o); }

var DateTime;


DateTime = /*#__PURE__*/function (_React$Component) {
  DateTime_coffee_inherits(DateTime, _React$Component);

  var _super = DateTime_coffee_createSuper(DateTime);

  /**
   * DateTime field for the Listing Table
   *
   * A datetime field is identified by the column type "datetime" in the listing
   * view, e.g.  `self.columns = {"Result": {"type": "datetime"}, ... }`
   *
   */
  function DateTime(props) {
    var _this;

    DateTime_coffee_classCallCheck(this, DateTime);

    _this = _super.call(this, props); // remember the initial value

    _this.state = {
      value: props.defaultValue
    }; // bind event handler to the current context

    _this.on_change = _this.on_change.bind(DateTime_coffee_assertThisInitialized(_this));
    return _this;
  }
  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   * This is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   */


  DateTime_coffee_createClass(DateTime, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.defaultValue !== prevProps.defaultValue) {
        return this.setState({
          value: this.props.defaultValue
        });
      }
    }
    /**
     * Event handler when the value changed of the datetime field
     * @param event {object} ReactJS event object
     */

  }, {
    key: "on_change",
    value: function on_change(event) {
      var el, name, uid, value;
      el = event.currentTarget; // Extract the UID attribute

      uid = el.getAttribute("uid"); // Extract the column_key attribute

      name = el.getAttribute("column_key") || el.name; // Extract the value of the datetime field

      value = el.value; // store the new value

      this.setState({
        value: value
      });
      console.debug("DateTime::on_change: value=".concat(value)); // Call the *update* field handler

      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("span", {
        className: "form-group"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("input", DateTime_coffee_extends({
        type: "datetime-local",
        size: this.props.size || 20,
        uid: this.props.uid,
        name: this.props.name,
        value: this.state.value,
        column_key: this.props.column_key,
        title: this.props.title,
        disabled: this.props.disabled,
        required: this.props.required,
        className: this.props.className,
        placeholder: this.props.placeholder,
        onChange: this.props.onChange || this.on_change,
        tabIndex: this.props.tabIndex
      }, this.props.attrs)), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);

  return DateTime;
}((external_React_default()).Component);

/* harmony default export */ const DateTime_coffee = (DateTime);
;// CONCATENATED MODULE: ./components/TableCell.coffee
function TableCell_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TableCell_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { TableCell_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TableCell_coffee_typeof(obj); }

function TableCell_coffee_extends() { TableCell_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableCell_coffee_extends.apply(this, arguments); }

function TableCell_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TableCell_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TableCell_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) TableCell_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) TableCell_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function TableCell_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TableCell_coffee_setPrototypeOf(subClass, superClass); }

function TableCell_coffee_setPrototypeOf(o, p) { TableCell_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TableCell_coffee_setPrototypeOf(o, p); }

function TableCell_coffee_createSuper(Derived) { var hasNativeReflectConstruct = TableCell_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TableCell_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TableCell_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TableCell_coffee_possibleConstructorReturn(this, result); }; }

function TableCell_coffee_possibleConstructorReturn(self, call) { if (call && (TableCell_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return TableCell_coffee_assertThisInitialized(self); }

function TableCell_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TableCell_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TableCell_coffee_getPrototypeOf(o) { TableCell_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TableCell_coffee_getPrototypeOf(o); }

var TableCell,
    TableCell_coffee_indexOf = [].indexOf;












TableCell = /*#__PURE__*/function (_React$Component) {
  TableCell_coffee_inherits(TableCell, _React$Component);

  var _super = TableCell_coffee_createSuper(TableCell);

  function TableCell(props) {
    var _this;

    TableCell_coffee_classCallCheck(this, TableCell);

    _this = _super.call(this, props); // Zope Publisher Converter Argument Mapping

    _this.ZPUBLISHER_CONVERTER = {
      "boolean": ":record:ignore_empty",
      "select": ":records",
      "choices": ":records",
      "multiselect": ":list",
      "multichoice": ":list",
      "numeric": ":records",
      "string": ":records",
      "datetime": ":records",
      "readonly": "",
      "default": ":records"
    };
    return _this;
  }

  TableCell_coffee_createClass(TableCell, [{
    key: "get_item",
    value: function get_item() {
      return this.props.item;
    }
  }, {
    key: "get_column_key",
    value: function get_column_key() {
      return this.props.column_key;
    }
  }, {
    key: "render_before_content",
    value: function render_before_content() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var before, before_components, column_key, item;
      column_key = this.get_column_key();
      item = this.get_item();

      if (!item) {
        return;
      }

      before = item.before;

      if (!(column_key in before)) {
        return null;
      } // support to render React components


      before_components = item.before_components || {};
      return /*#__PURE__*/external_React_default().createElement("span", {
        key: column_key + "_before",
        className: "before-item"
      }, before_components[column_key], /*#__PURE__*/external_React_default().createElement("span", TableCell_coffee_extends({
        dangerouslySetInnerHTML: {
          __html: before[column_key]
        }
      }, props)));
    }
  }, {
    key: "render_after_content",
    value: function render_after_content() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var after, after_components, column_key, item;
      column_key = this.get_column_key();
      item = this.get_item();

      if (!item) {
        return;
      }

      after = item.after;

      if (!(column_key in after)) {
        return null;
      } // support to render React components


      after_components = item.after_components || {};
      return /*#__PURE__*/external_React_default().createElement("span", {
        key: column_key + "_after",
        className: "after-item"
      }, after_components[column_key], /*#__PURE__*/external_React_default().createElement("span", TableCell_coffee_extends({
        dangerouslySetInnerHTML: {
          __html: after[column_key]
        }
      }, props)));
    }
  }, {
    key: "is_edit_allowed",
    value: function is_edit_allowed() {
      var column_key, item;
      column_key = this.get_column_key();
      item = this.get_item(); // the global allow_edit overrides all row specific settings

      if (!this.props.allow_edit) {
        return false;
      } // check if the field is listed in the item's allow_edit list


      if (TableCell_coffee_indexOf.call(item.allow_edit, column_key) >= 0) {
        return true;
      }

      return false;
    }
  }, {
    key: "is_disabled",
    value: function is_disabled() {
      var column_key, disabled, item;
      item = this.get_item();
      disabled = item.disabled;

      if (disabled === true || disabled === false) {
        return disabled;
      }

      if (disabled == null) {
        return false;
      } // check if the field is listed in the item's disabled list


      column_key = this.get_column_key();
      return TableCell_coffee_indexOf.call(disabled, column_key) >= 0;
    }
  }, {
    key: "is_required",
    value: function is_required() {
      var column_key, item, required, required_fields, selected;
      column_key = this.get_column_key();
      item = this.get_item();
      required_fields = item.required || [];
      required = TableCell_coffee_indexOf.call(required_fields, column_key) >= 0; // make the field conditionally required if the row is selected

      selected = this.props.selected;
      return required && selected;
    }
  }, {
    key: "get_name",
    value: function get_name() {
      var column_key, uid;
      uid = this.get_uid();
      column_key = this.get_column_key();
      return "".concat(column_key, ".").concat(uid);
    }
  }, {
    key: "get_uid",
    value: function get_uid() {
      var item;
      item = this.get_item();
      return item.uid;
    }
  }, {
    key: "is_selected",
    value: function is_selected() {
      var item, ref;
      item = this.get_item();
      return ref = item.uid, TableCell_coffee_indexOf.call(this.props.selected_uids, ref) >= 0;
    }
  }, {
    key: "get_value",
    value: function get_value() {
      var column_key, interims, item, value;
      column_key = this.get_column_key();
      item = this.get_item();
      value = item[column_key]; // check if the field is an interim

      interims = this.get_interimfields();

      if (interims.hasOwnProperty(column_key)) {
        // extract the value from the interim field
        // {value: "", keyword: "", formatted_value: "", unit: "", title: ""}
        value = interims[column_key].value || "";
      } // values of input fields should not be null


      if (value === null) {
        value = "";
      }

      return value;
    }
    /*
    Returns the size for the folderitem or interim field
    */

  }, {
    key: "get_size",
    value: function get_size() {
      var column_key, interim, item, size;
      size = 5;
      item = this.get_item();

      if (item.hasOwnProperty("size")) {
        size = item.size;
      } // Maybe is an interim field


      if (this.is_interimfield()) {
        column_key = this.get_column_key();
        interim = item[column_key];

        if (interim && interim.hasOwnProperty("size")) {
          size = interim.size;
        }
      }

      return size;
    }
    /**
     *  Returns the unit of the interimfield or of the folderitem
     */

  }, {
    key: "get_formatted_unit",
    value: function get_formatted_unit() {
      var column_key, item, unit;
      column_key = this.get_column_key();
      item = this.get_item();
      unit = item.Unit; // extract the unit from the interim field
      // {value: "", keyword: "", formatted_value: "", unit: "", title: ""}

      if (this.is_interimfield()) {
        unit = item[column_key].unit;
      }

      if (!unit) {
        return "";
      }

      return "<span class='unit'>".concat(unit, "</span>");
    }
    /**
     * Create a mapping of interim keyword -> interim field
     *
     * Interim fields are record fields with a format like this:
     * {value: "", keyword: "", formatted_value: "", unit: "", title: ""}
     */

  }, {
    key: "get_interimfields",
    value: function get_interimfields() {
      var interims, item, mapping;
      item = this.get_item();
      interims = item.interimfields || [];
      mapping = {};
      interims.map(function (item, index) {
        return mapping[item.keyword] = item;
      });
      return mapping;
    }
  }, {
    key: "is_interimfield",
    value: function is_interimfield() {
      var column_key, interims;
      column_key = this.get_column_key();
      interims = this.get_interimfields();
      return interims.hasOwnProperty(column_key);
    }
  }, {
    key: "get_choices",
    value: function get_choices() {
      var item;
      item = this.get_item();
      return item.choices || {};
    }
  }, {
    key: "is_result_column",
    value: function is_result_column() {
      var column_key;
      column_key = this.get_column_key();

      if (column_key === "Result") {
        return true;
      }

      return false;
    }
  }, {
    key: "get_formatted_value",
    value: function get_formatted_value() {
      var column_key, formatted_value, item;
      column_key = this.get_column_key();
      item = this.get_item(); // replacement html or plain value of the current column

      formatted_value = item.replace[column_key] || this.get_value(); // use the formatted result

      if (this.is_result_column()) {
        formatted_value = item.formatted_result || formatted_value; // Append the unit to the formatted value

        if (formatted_value) {
          formatted_value += this.get_formatted_unit();
        }
      } else if (this.is_interimfield()) {
        // Append the unit to the formatted value
        if (formatted_value) {
          formatted_value += this.get_formatted_unit();
        }
      }

      return formatted_value;
    }
  }, {
    key: "get_type",
    value: function get_type() {
      var choices, column, column_key, default_type, editable, item, resultfield, value;
      column_key = this.get_column_key();
      item = this.get_item(); // true if the field is editable

      editable = this.is_edit_allowed();
      resultfield = this.is_result_column(); // readonly field

      if (!editable) {
        return "readonly";
      } // calculated fields are also in editable mode readonly


      if (resultfield && item.calculation) {
        return "calculated";
      } // type definition of the column has precedence


      column = this.props.column || {};

      if ("type" in column) {
        return column["type"];
      } // check if the field is a boolean


      value = this.get_value();

      if (typeof value === "boolean") {
        return "boolean";
      } // check if the field is listed in choices


      choices = this.get_choices();

      if (column_key in choices) {
        // check if the field is a multi-choices
        default_type = "select";

        if (resultfield) {
          return item.result_type || default_type;
        }

        return default_type;
      } // check if the field is an interim


      if (this.is_interimfield()) {
        return "interim";
      } // check if the field is a string or datetime field


      if (resultfield) {
        return item.result_type || "numeric";
      } // the default


      return "numeric";
    }
    /**
     * Creates a readonly field component
     * @param props {object} properties passed to the component
     * @returns ReadonlyField component
     */

  }, {
    key: "create_readonly_field",
    value: function create_readonly_field() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref.props;

      var column_key, css_class, formatted_value, item, name, uid, value;
      column_key = this.get_column_key();
      item = this.get_item();

      if (props == null) {
        props = {};
      }

      name = this.get_name();
      value = this.get_value();
      formatted_value = this.get_formatted_value();
      uid = this.get_uid();
      css_class = "readonly";
      return /*#__PURE__*/external_React_default().createElement(ReadonlyField_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        name: name,
        value: value,
        formatted_value: formatted_value,
        className: css_class
      }, props));
    }
    /**
     * Creates a calculated field component
     * @param props {object} properties passed to the component
     * @returns CalculatedField component
     */

  }, {
    key: "create_calculated_field",
    value: function create_calculated_field() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref2.props;

      var column_key, css_class, formatted_value, item, name, required, selected, title, uid, unit, value;
      column_key = this.get_column_key();
      item = this.get_item();

      if (props == null) {
        props = {};
      }

      name = this.get_name();
      value = this.get_value();
      formatted_value = this.get_formatted_value();
      unit = this.get_formatted_unit();
      uid = this.get_uid();
      title = this.props.column.title || column_key;
      selected = this.is_selected();
      required = this.is_required();
      css_class = "form-control input-sm calculated";

      if (required) {
        css_class += " required";
      }

      return /*#__PURE__*/external_React_default().createElement(CalculatedField_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: name,
        value: value,
        column_key: column_key,
        title: title,
        formatted_value: formatted_value,
        placeholder: title,
        selected: selected,
        required: required,
        className: css_class,
        after: unit,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field
      }, props));
    }
    /**
     * Creates a hidden field component
     * @param props {object} properties passed to the component
     * @returns HiddenField component
     */

  }, {
    key: "create_hidden_field",
    value: function create_hidden_field() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref3.props;

      var column_key, formatted_value, item, name, title, uid, value;
      column_key = this.get_column_key();
      item = this.get_item();

      if (props == null) {
        props = {};
      }

      name = this.get_name();
      value = this.get_value();
      formatted_value = this.get_formatted_value();
      uid = this.get_uid();
      title = this.props.column.title || column_key;
      return /*#__PURE__*/external_React_default().createElement(HiddenField_coffee, TableCell_coffee_extends({
        key: name + "_hidden",
        uid: uid,
        name: name,
        value: value,
        column_key: column_key
      }, props));
    }
    /**
     * Creates a numeric field component
     * @param props {object} properties passed to the component
     * @returns NumericField component
     */

  }, {
    key: "create_numeric_field",
    value: function create_numeric_field() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref4.props;

      var column_key, converter, css_class, disabled, fieldname, formatted_value, item, name, required, selected, size, title, uid, unit, value;
      column_key = this.get_column_key();
      item = this.get_item();

      if (props == null) {
        props = {};
      }

      name = this.get_name();
      value = this.get_value();
      formatted_value = this.get_formatted_value();
      unit = this.get_formatted_unit();
      uid = this.get_uid();
      converter = this.ZPUBLISHER_CONVERTER["numeric"];
      fieldname = name + converter;
      title = this.props.column.title || column_key;
      selected = this.is_selected();
      disabled = this.is_disabled();
      required = this.is_required();
      size = this.get_size();
      css_class = "form-control input-sm";

      if (required) {
        css_class += " required";
      }

      return /*#__PURE__*/external_React_default().createElement(NumericField_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        column_key: column_key,
        title: title,
        formatted_value: formatted_value,
        placeholder: title,
        selected: selected,
        disabled: disabled,
        required: required,
        className: css_class,
        after: unit,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex,
        size: size
      }, props));
    }
    /**
     * Creates a string field component
     * @param props {object} properties passed to the component
     * @returns StringField component
     */

  }, {
    key: "create_string_field",
    value: function create_string_field() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref5.props;

      var column_key, converter, css_class, disabled, fieldname, formatted_value, item, name, required, selected, title, uid, unit, value;
      column_key = this.get_column_key();
      item = this.get_item();

      if (props == null) {
        props = {};
      }

      name = this.get_name();
      value = this.get_value();
      formatted_value = this.get_formatted_value();
      unit = this.get_formatted_unit();
      uid = this.get_uid();
      converter = this.ZPUBLISHER_CONVERTER["string"];
      fieldname = name + converter;
      title = this.props.column.title || column_key;
      selected = this.is_selected();
      disabled = this.is_disabled();
      required = this.is_required();
      css_class = "form-control input-sm";

      if (required) {
        css_class += " required";
      }

      return /*#__PURE__*/external_React_default().createElement(StringField_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        column_key: column_key,
        title: title,
        formatted_value: formatted_value,
        placeholder: title,
        selected: selected,
        disabled: disabled,
        required: required,
        className: css_class,
        after: unit,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex
      }, props));
    }
    /**
     * Creates a datetime field component
     * @param props {object} properties passed to the component
     * @returns DateTime component
     */

  }, {
    key: "create_datetime_field",
    value: function create_datetime_field() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref6.props;

      var column_key, converter, css_class, disabled, fieldname, formatted_value, item, name, required, result_type, selected, title, uid, unit, value;
      column_key = this.get_column_key();
      item = this.get_item();

      if (props == null) {
        props = {};
      }

      name = this.get_name();
      value = this.get_value();
      formatted_value = this.get_formatted_value();
      unit = this.get_formatted_unit();
      uid = this.get_uid();
      converter = this.ZPUBLISHER_CONVERTER["string"];
      fieldname = name + converter;
      title = this.props.column.title || column_key;
      selected = this.is_selected();
      disabled = this.is_disabled();
      required = this.is_required();
      css_class = "form-control input-sm";

      if (required) {
        css_class += " required";
      }

      result_type = "date";
      return /*#__PURE__*/external_React_default().createElement(DateTime_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        column_key: column_key,
        title: title,
        formatted_value: formatted_value,
        placeholder: title,
        selected: selected,
        disabled: disabled,
        required: required,
        className: css_class,
        results_type: result_type,
        after: unit,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex
      }, props));
    }
    /**
     * Creates a select field component
     * @param props {object} properties passed to the component
     * @returns SelectField component
     */

  }, {
    key: "create_select_field",
    value: function create_select_field() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref7.props;

      var column_key, converter, css_class, disabled, fieldname, formatted_value, item, name, options, required, selected, title, uid, value;
      column_key = this.get_column_key();
      item = this.get_item();

      if (props == null) {
        props = {};
      }

      name = this.get_name();
      value = this.get_value();
      options = item.choices[column_key] || [];
      formatted_value = this.get_formatted_value();
      uid = this.get_uid();
      converter = this.ZPUBLISHER_CONVERTER["select"];
      fieldname = name + converter;
      title = this.props.column.title || column_key;
      selected = this.is_selected();
      disabled = this.is_disabled();
      required = this.is_required();
      css_class = "form-control input-sm";

      if (required) {
        css_class += " required";
      }

      return /*#__PURE__*/external_React_default().createElement(Select_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        column_key: column_key,
        title: title,
        disabled: disabled,
        selected: selected,
        required: required,
        options: options,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex
      }, props));
    }
    /**
     * Creates a multichoice field component
     * @param props {object} properties passed to the component
     * @returns MultiChoice component
     */

  }, {
    key: "create_multichoice_field",
    value: function create_multichoice_field() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref8.props;

      var column_key, converter, css_class, disabled, fieldname, formatted_value, item, name, options, required, selected, title, uid, value;
      column_key = this.get_column_key();
      item = this.get_item();

      if (props == null) {
        props = {};
      }

      name = this.get_name();
      value = this.get_value(); // convert value to array

      if (value.length > 0) {
        value = JSON.parse(value);
      }

      options = item.choices[column_key] || []; // mark selected options

      options.forEach(function (option) {
        var selected;
        selected = false;

        if (Array.isArray(value)) {
          selected = value.indexOf(option.ResultValue) > -1;
        }

        return option.selected = selected;
      });
      formatted_value = this.get_formatted_value();
      uid = this.get_uid();
      converter = this.ZPUBLISHER_CONVERTER["multichoice"];
      fieldname = name + converter;
      title = this.props.column.title || column_key;
      selected = this.is_selected();
      disabled = this.is_disabled();
      required = this.is_required();
      css_class = "form-control input-sm";

      if (required) {
        css_class += " required";
      }

      return /*#__PURE__*/external_React_default().createElement(MultiChoice_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        column_key: column_key,
        title: title,
        disabled: disabled,
        selected: selected,
        required: required,
        options: options,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex
      }, props));
    }
    /**
     * Creates a multiselect field component
     * @param props {object} properties passed to the component
     * @returns MultiSelect component
     */

  }, {
    key: "create_multiselect_field",
    value: function create_multiselect_field() {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref9.props;

      var column_key, converter, css_class, disabled, duplicates, fieldname, formatted_value, item, name, options, required, selected, title, uid, value;
      column_key = this.get_column_key();
      item = this.get_item();

      if (props == null) {
        props = {};
      }

      uid = this.get_uid();
      name = this.get_name();
      value = this.get_value();
      options = item.choices[column_key] || [];
      formatted_value = this.get_formatted_value();
      converter = this.ZPUBLISHER_CONVERTER["multiselect"];
      fieldname = name + converter;
      title = this.props.column.title || column_key;
      selected = this.is_selected();
      disabled = this.is_disabled();
      required = this.is_required();
      duplicates = item.result_type === "multiselect_duplicates";
      css_class = "form-control input-sm";

      if (required) {
        css_class += " required";
      }

      return /*#__PURE__*/external_React_default().createElement(MultiSelect_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        defaultValue: value,
        value: value,
        column_key: column_key,
        title: title,
        disabled: disabled,
        selected: selected,
        required: required,
        options: options,
        duplicates: duplicates,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex
      }, props));
    }
    /**
     * Creates a checkbox field component
     * @param props {object} properties passed to the component
     * @returns Checkbox component
     */

  }, {
    key: "create_checkbox_field",
    value: function create_checkbox_field() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref10.props;

      var column_key, converter, css_class, disabled, fieldname, formatted_value, item, name, options, required, selected, title, uid, value;
      column_key = this.get_column_key();
      item = this.get_item();

      if (props == null) {
        props = {};
      }

      name = this.get_name();
      value = this.get_value();
      options = item.choices[column_key] || [];
      formatted_value = this.get_formatted_value();
      uid = this.get_uid();
      converter = this.ZPUBLISHER_CONVERTER["boolean"];
      fieldname = name + converter;
      title = this.props.column.title || column_key;
      selected = this.is_selected();
      disabled = this.is_disabled();
      required = this.is_required();
      css_class = "checkbox";

      if (required) {
        css_class += " required";
      }

      return /*#__PURE__*/external_React_default().createElement(Checkbox_coffee, TableCell_coffee_extends({
        key: name,
        uid: uid,
        item: item,
        name: fieldname,
        value: "on",
        column_key: column_key,
        title: title,
        defaultChecked: value,
        disabled: disabled,
        className: css_class,
        update_editable_field: this.props.update_editable_field,
        save_editable_field: this.props.save_editable_field,
        tabIndex: this.props.tabIndex
      }, props));
    }
  }, {
    key: "render_content",
    value: function render_content() {
      var column_key, field, item, type, uid; // the current rendered column cell name

      column_key = this.get_column_key(); // single folderitem

      item = this.get_item(); // return if there is no item

      if (!item) {
        console.warn("Skipping empty folderitem for column '".concat(column_key, "'"));
        return null;
      } // the UID of the folderitem


      uid = this.get_uid(); // field type to render

      type = this.get_type(); // the field to return

      field = [];

      if (type === "readonly") {
        field = field.concat(this.create_readonly_field());
      } else if (type === "calculated") {
        field = field.concat(this.create_calculated_field());
      } else if (type === "interim") {
        field = field.concat(this.create_numeric_field());
      } else if (type === "select" || type === "choices") {
        field = field.concat(this.create_select_field());
      } else if (type === "multichoice") {
        field = field.concat(this.create_multichoice_field());
      } else if (type === "multiselect" || type === "multiselect_duplicates") {
        field = field.concat(this.create_multiselect_field());
      } else if (type === "boolean") {
        field = field.concat(this.create_checkbox_field());
      } else if (type === "numeric") {
        field = field.concat(this.create_numeric_field());
      } else if (type === "string") {
        field = field.concat(this.create_string_field());
      } else if (type === "datetime") {
        field = field.concat(this.create_datetime_field());
      }

      return field;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("td", {
        className: this.props.className,
        colSpan: this.props.colspan,
        rowSpan: this.props.rowspan
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "form-group"
      }, this.render_before_content(), this.render_content(), this.render_after_content()));
    }
  }]);

  return TableCell;
}((external_React_default()).Component);

/* harmony default export */ const TableCell_coffee = (TableCell);
;// CONCATENATED MODULE: ./components/RemarksField.coffee
function RemarksField_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RemarksField_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { RemarksField_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RemarksField_coffee_typeof(obj); }

function RemarksField_coffee_extends() { RemarksField_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RemarksField_coffee_extends.apply(this, arguments); }

function RemarksField_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RemarksField_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RemarksField_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) RemarksField_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) RemarksField_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function RemarksField_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RemarksField_coffee_setPrototypeOf(subClass, superClass); }

function RemarksField_coffee_setPrototypeOf(o, p) { RemarksField_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RemarksField_coffee_setPrototypeOf(o, p); }

function RemarksField_coffee_createSuper(Derived) { var hasNativeReflectConstruct = RemarksField_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = RemarksField_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = RemarksField_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return RemarksField_coffee_possibleConstructorReturn(this, result); }; }

function RemarksField_coffee_possibleConstructorReturn(self, call) { if (call && (RemarksField_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return RemarksField_coffee_assertThisInitialized(self); }

function RemarksField_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RemarksField_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function RemarksField_coffee_getPrototypeOf(o) { RemarksField_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RemarksField_coffee_getPrototypeOf(o); }

var RemarksField,
    RemarksField_coffee_indexOf = [].indexOf;


RemarksField = /*#__PURE__*/function (_React$Component) {
  RemarksField_coffee_inherits(RemarksField, _React$Component);

  var _super = RemarksField_coffee_createSuper(RemarksField);

  /**
   * Collapsible Remarks Field for the Listing Table
   *
   * A remarks field is identified by the column type "remarks" in the listing
   * view, e.g.  `self.columns = {"Remarks": {"type": "remarks"}, ... }`
   *
   */
  function RemarksField(props) {
    var _this;

    RemarksField_coffee_classCallCheck(this, RemarksField);

    _this = _super.call(this, props); // Bind events to local context

    _this.on_blur = _this.on_blur.bind(RemarksField_coffee_assertThisInitialized(_this));
    _this.on_change = _this.on_change.bind(RemarksField_coffee_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Event handler when the mouse left the textarea
   * @param event {object} ReactJS event object
   */


  RemarksField_coffee_createClass(RemarksField, [{
    key: "on_blur",
    value: function on_blur(event) {
      var el, name, uid, value;
      el = event.currentTarget; // Extract the UID attribute

      uid = el.getAttribute("uid"); // Extract the column_key (usually `Remarks`)

      name = el.getAttribute("column_key") || el.name; // Extract the value of the textarea

      value = el.value;
      console.debug("RemarksField:on_blur: value=".concat(value)); // Call the *save* field handler with the UID, name, value

      if (this.props.save_editable_field) {
        return this.props.save_editable_field(uid, name, value, this.props.item);
      }
    }
    /**
     * Event handler when the value changed of the textarea
     * @param event {object} ReactJS event object
     */

  }, {
    key: "on_change",
    value: function on_change(event) {
      var el, name, uid, value;
      el = event.currentTarget; // Extract the UID attribute

      uid = el.getAttribute("uid"); // Extract the column_key (usually `Remarks`)

      name = el.getAttribute("column_key") || el.name; // Extract the value of the textarea

      value = el.value;
      console.debug("RemarksField:on_change: value=".concat(value)); // Call the *update* field handler with the UID, name, value

      if (this.props.update_editable_field) {
        return this.props.update_editable_field(uid, name, value, this.props.item);
      }
    }
    /**
     * Check if the remarks field is editable or not
     * @param item {object} the folderitem containing the {"Remarks": "..."} data
     * @param column_key {string} the current rendered column key (usually `Remarks`)
     */

  }, {
    key: "can_edit",
    value: function can_edit() {
      var allow_edit, column_key, item;
      item = this.props.item;
      column_key = this.props.column_key;
      allow_edit = item.allow_edit || [];
      return RemarksField_coffee_indexOf.call(allow_edit, column_key) >= 0;
    }
    /**
     * Get the title of the column object, e.g.: self.columns = {"Remarks": {"title": "..."}}
     * @param columns {object} as defined in the browser listing view
     * @param column {object} the remarks column definition
     */

  }, {
    key: "get_column_title",
    value: function get_column_title() {
      var column, column_key, columns, title;
      columns = this.props.columns;
      column_key = this.props.column_key;
      column = columns[column_key];
      title = column.title || "Remarks";

      if (typeof _ === "function") {
        title = _(title);
      }

      return title;
    }
    /**
     * Compute the inline CSS style for the field
     * @param uid {string} UID of the folderitem
     * @param expanded_remarks {array} list of expanded remarks fields
     */

  }, {
    key: "get_style",
    value: function get_style() {
      var show, style, uid;
      uid = this.props.uid; // show if the remarks are expanded or if a remark is set

      show = RemarksField_coffee_indexOf.call(this.props.expanded_remarks, uid) >= 0 || this.props.value.length > 0;
      style = {
        display: show ? "block" : "none"
      };
      return style;
    }
    /**
     * Render the editable/readonly remarks field
     * @param uid {string} UID of the folderitem
     * @param column_key {string} the current rendered column key (usually `Remarks`)
     * @param item {object} the folderitem containing the {"Remarks": "..."} data
     */

  }, {
    key: "render_remarks_field",
    value: function render_remarks_field() {
      var column_key, field, name, uid, value;
      uid = this.props.uid;
      column_key = this.props.column_key;
      name = "".concat(column_key, ".").concat(uid, ":records");
      value = this.props.value;

      if (!this.can_edit()) {
        field = /*#__PURE__*/external_React_default().createElement("span", {
          className: "remarksfield",
          dangerouslySetInnerHTML: {
            __html: value
          }
        });
      } else {
        field = /*#__PURE__*/external_React_default().createElement("textarea", RemarksField_coffee_extends({
          className: "remarksfield form-control",
          uid: uid,
          column_key: column_key,
          style: {
            width: "100%"
          },
          rows: this.props.rows || 2,
          name: name,
          onBlur: this.props.onBlur || this.on_blur,
          onChange: this.props.onChange || this.on_change,
          defaultValue: value,
          tabIndex: this.props.tabIndex
        }, this.props.attrs));
      }

      return field;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.uid) {
        return null;
      }

      return /*#__PURE__*/external_React_default().createElement("div", {
        style: this.get_style(),
        className: "remarks text-muted"
      }, this.props.before && /*#__PURE__*/external_React_default().createElement("span", {
        className: "before_field",
        dangerouslySetInnerHTML: {
          __html: this.props.before
        }
      }), /*#__PURE__*/external_React_default().createElement("div", {
        className: "text-info"
      }, /*#__PURE__*/external_React_default().createElement("i", {
        className: "fas fa-hand-point-right"
      }), " ", this.get_column_title(), ":"), this.render_remarks_field(), this.props.after && /*#__PURE__*/external_React_default().createElement("span", {
        className: "after_field",
        dangerouslySetInnerHTML: {
          __html: this.props.after
        }
      }));
    }
  }]);

  return RemarksField;
}((external_React_default()).Component);

/* harmony default export */ const RemarksField_coffee = (RemarksField);
;// CONCATENATED MODULE: ./components/TableTransposedCell.coffee
function TableTransposedCell_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TableTransposedCell_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { TableTransposedCell_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TableTransposedCell_coffee_typeof(obj); }

function TableTransposedCell_coffee_extends() { TableTransposedCell_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableTransposedCell_coffee_extends.apply(this, arguments); }

function TableTransposedCell_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TableTransposedCell_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TableTransposedCell_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) TableTransposedCell_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) TableTransposedCell_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function TableTransposedCell_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TableTransposedCell_coffee_setPrototypeOf(subClass, superClass); }

function TableTransposedCell_coffee_setPrototypeOf(o, p) { TableTransposedCell_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TableTransposedCell_coffee_setPrototypeOf(o, p); }

function TableTransposedCell_coffee_createSuper(Derived) { var hasNativeReflectConstruct = TableTransposedCell_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TableTransposedCell_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TableTransposedCell_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TableTransposedCell_coffee_possibleConstructorReturn(this, result); }; }

function TableTransposedCell_coffee_possibleConstructorReturn(self, call) { if (call && (TableTransposedCell_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return TableTransposedCell_coffee_assertThisInitialized(self); }

function TableTransposedCell_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TableTransposedCell_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TableTransposedCell_coffee_getPrototypeOf(o) { TableTransposedCell_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TableTransposedCell_coffee_getPrototypeOf(o); }

var TableTransposedCell,
    TableTransposedCell_coffee_indexOf = [].indexOf;




/**
 * This component is currently only used for the Transposed Layout in Worksheets
 */

TableTransposedCell = /*#__PURE__*/function (_TableCell) {
  TableTransposedCell_coffee_inherits(TableTransposedCell, _TableCell);

  var _super = TableTransposedCell_coffee_createSuper(TableTransposedCell);

  function TableTransposedCell() {
    TableTransposedCell_coffee_classCallCheck(this, TableTransposedCell);

    return _super.apply(this, arguments);
  }

  TableTransposedCell_coffee_createClass(TableTransposedCell, [{
    key: "get_item",

    /**
     * Get the transposed folderitem
     *
     * also see bika.lims.browser.worksheet.views.analyses_transposed.py
     *
     * The "transposed item" is the original folderitem, which is stored below the
     * `column_key` of the transposed column, e.g.
     *
     * columns: {1: {…}, 2: {…}, column_key: {…}}
     * folderitems: [
     *   {1: {original-folderitem}, 2: {original-folderitem}, item_key: "Pos", column_key: "Positions"},
     *   {1: {original-folderitem}, 2: {original-folderitem}, item_key: "Result", column_key: "Calcium"},
     *   {1: {original-folderitem}, 2: {original-folderitem}, item_key: "Result", column_key: "Magnesiumn"},
     * ]
     */
    value: function get_item() {
      // @props.item: transposed folderitem (see TableCells.coffee)
      // @props.column_key: current column key rendered, e.g. "1", "2", "column_key"
      return this.props.item[this.props.column_key];
    }
    /**
     * Get the value within the transposed folderitem to render
     *
     * also see bika.lims.browser.worksheet.views.analyses_transposed.py
     *
     * The `item_key` (see also above) within a transposed folderitems item,
     * points to the value to be rendered from the original folderitem.
     *
     */

  }, {
    key: "get_column_key",
    value: function get_column_key() {
      // @props.item is a transposed folderitem
      // @props.column_key is the actual column key rendered, e.g. "1", "2", "column_key"
      return this.props.item.item_key || this.props.item.column_key;
    }
    /**
     * Calculate CSS Class for the <td> cell based on the original folderitem
     */

  }, {
    key: "get_css",
    value: function get_css() {
      var css, item, ref;
      item = this.get_item();
      css = ["transposed", this.props.className];

      if (this.is_result_column()) {
        css.push("result");
      }

      if (!item) {
        css.push("empty");
      } else {
        css.push(item.state_class);

        if (ref = item.uid, TableTransposedCell_coffee_indexOf.call(this.props.selected_uids, ref) >= 0) {
          css.push("info");
        }
      }

      return css.join(" ");
    }
  }, {
    key: "get_remarks_columns",
    value: function get_remarks_columns() {
      var columns, key, ref, value;
      columns = [];
      ref = this.props.columns;

      for (key in ref) {
        value = ref[key];

        if (value.type === "remarks") {
          columns.push(key);
        }
      }

      return columns;
    }
    /**
     * Creates a select checkbox for the original folderitem
     * @param props {object} properties passed to the component
     * @returns ReadonlyField component
     */

  }, {
    key: "create_select_checkbox",
    value: function create_select_checkbox() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref.props;

      var disabled, name, selected, uid;

      if (props == null) {
        props = {};
      }

      uid = this.get_uid();
      name = "".concat(this.props.select_checkbox_name, ":list");
      disabled = this.is_disabled();
      selected = this.is_selected();
      return /*#__PURE__*/external_React_default().createElement("div", {
        key: "select",
        className: "checkbox"
      }, /*#__PURE__*/external_React_default().createElement(Checkbox_coffee, TableTransposedCell_coffee_extends({
        name: name,
        value: uid,
        disabled: disabled,
        checked: selected,
        onChange: this.props.on_select_checkbox_checked
      }, props)));
    }
    /**
     * Creates all interim fields
     * @param props {object} properties passed to the component
     * @returns Interim Fields
     */

  }, {
    key: "create_interim_fields",
    value: function create_interim_fields() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref2.props;

      var fields, i, index, interim, interims, item, keyword, len, size, title, uid, unit;

      if (props == null) {
        props = {};
      }

      uid = this.get_uid();
      item = this.get_item();
      fields = [];
      interims = item.interimfields || []; // [{value: 10, keyword: "F_cl", formatted_value: "10,0", unit: "mg/mL", title: "Faktor cl"}, ...]

      for (index = i = 0, len = interims.length; i < len; index = ++i) {
        interim = interims[index]; // get the keyword of the interim field

        keyword = interim.keyword;

        if (!this.props.columns.hasOwnProperty(keyword)) {
          // skip interims which are not listed in the columns
          // -> see: bika.lims.browser.analyses.view.folderitems
          continue;
        } // get the unit of the interim


        unit = interim.unit || ""; // title / keyword

        title = interim.title || keyword; // field size

        size = interim.size || 5; // prepare the field properties

        props = {
          key: keyword,
          column_key: keyword,
          name: "".concat(keyword, ".").concat(uid),
          defaultValue: interim.value,
          placeholder: title,
          formatted_value: interim.formatted_value,
          size: size,
          before: "<span>".concat(title, "</span>"),
          after: "<span>".concat(unit, "</span>")
        };

        if (this.is_edit_allowed()) {
          // add a numeric field per interim
          props.className = "form-control input-sm interim";
          fields = fields.concat(this.create_numeric_field({
            props: props
          }));
        } else {
          props.className = "readonly interim";
          fields = fields.concat(this.create_readonly_field({
            props: props
          }));
        }
      }

      return fields;
    }
    /**
     * Render the fields for a single transposed cell
     * @param column_key {object} properties passed to the component
     * @returns fields {array}
     */

  }, {
    key: "render_content",
    value: function render_content() {
      var before_components, column_index, column_key, fields, i, item, len, ref, result_column, result_column_title, type, uid, value; // the current rendered column ID

      column_key = this.get_column_key(); // single folderitem

      item = this.get_item(); // return if there is no item

      if (!item) {
        console.debug("Skipping empty item for '".concat(column_key, "' in column '").concat(this.props.column_key, "'"));
        return null;
      } // the UID of the original folderitem


      uid = this.get_uid(); // field type to render

      type = this.get_type(); // the fields to return

      fields = []; // We deal only with result columns in transposed view for now

      if (!this.is_result_column) {
        return;
      } // Get the Result column


      result_column = this.props.columns["Result"];
      result_column_title = result_column.title; // Each item can render a piece of HTML, which is defined in the before/after
      // key of the folderitem.
      // To add a controlled ReactJS component (with callbacks etc.), we inject here
      // a checkbox and the remarks button into the item['before_components'].
      // This is handled then by `render_before_content` and `render_after_content`.

      before_components = {}; // Add a select checkbox for result cells

      before_components[column_key] = [this.create_select_checkbox()]; // Append remarks toggle

      if (this.get_remarks_columns().length > 0) {
        before_components[column_key].push( /*#__PURE__*/external_React_default().createElement("a", {
          key: uid + "_remarks",
          href: "#",
          className: "transposed_remarks",
          uid: uid,
          onClick: this.props.on_remarks_expand_click
        }, /*#__PURE__*/external_React_default().createElement("i", {
          className: "remarksicon fas fa-comment"
        })));
      }

      item["before_components"] = before_components; // E.g. a submitted result

      if (type === "readonly") {
        fields = fields.concat(this.create_interim_fields());
        fields = fields.concat(this.create_readonly_field());
      } else {
        // interims first
        fields = fields.concat(this.create_interim_fields()); // calculated field

        if (type === "calculated") {
          fields = fields.concat(this.create_calculated_field({
            props: {
              before: "<span>".concat(result_column_title, "</span>"),
              after: "<span>".concat(item.Unit || '', "</span>")
            }
          }));
        } else {
          // editable choices field
          if (column_key in this.get_choices()) {
            fields = fields.concat(this.create_select_field());
          } else {
            // editable numeric field
            fields = fields.concat(this.create_numeric_field());
          }
        }
      }

      ref = this.get_remarks_columns(); // Append Remarks field(s)

      for (column_index = i = 0, len = ref.length; i < len; column_index = ++i) {
        column_key = ref[column_index];
        value = item[column_key];
        fields.push( /*#__PURE__*/external_React_default().createElement("div", {
          key: column_index + "_remarks"
        }, /*#__PURE__*/external_React_default().createElement(RemarksField_coffee, TableTransposedCell_coffee_extends({}, this.props, {
          uid: uid,
          item: item,
          column_key: column_key,
          value: item[column_key]
        }))));
      } // Append Attachments


      if (item.replace.Attachments) {
        fields = fields.concat(this.create_readonly_field({
          props: {
            key: column_index + "_attachments",
            uid: uid,
            item: item,
            column_key: "Attachments",
            formatted_value: item.replace.Attachments,
            attrs: {
              style: {
                display: "block"
              }
            }
          }
        }));
      }

      return fields;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("td", {
        className: this.get_css(),
        colSpan: this.props.colspan,
        rowSpan: this.props.rowspan
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "form-group"
      }, this.render_before_content(), this.render_content(), this.render_after_content()));
    }
  }]);

  return TableTransposedCell;
}(TableCell_coffee);

/* harmony default export */ const TableTransposedCell_coffee = (TableTransposedCell);
;// CONCATENATED MODULE: ./components/TableCells.coffee
function TableCells_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TableCells_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { TableCells_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TableCells_coffee_typeof(obj); }

function TableCells_coffee_extends() { TableCells_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableCells_coffee_extends.apply(this, arguments); }

function TableCells_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TableCells_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TableCells_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) TableCells_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) TableCells_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function TableCells_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TableCells_coffee_setPrototypeOf(subClass, superClass); }

function TableCells_coffee_setPrototypeOf(o, p) { TableCells_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TableCells_coffee_setPrototypeOf(o, p); }

function TableCells_coffee_createSuper(Derived) { var hasNativeReflectConstruct = TableCells_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TableCells_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TableCells_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TableCells_coffee_possibleConstructorReturn(this, result); }; }

function TableCells_coffee_possibleConstructorReturn(self, call) { if (call && (TableCells_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return TableCells_coffee_assertThisInitialized(self); }

function TableCells_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TableCells_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TableCells_coffee_getPrototypeOf(o) { TableCells_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TableCells_coffee_getPrototypeOf(o); }

var TableCells,
    TableCells_coffee_indexOf = [].indexOf;





TableCells = /*#__PURE__*/function (_React$Component) {
  TableCells_coffee_inherits(TableCells, _React$Component);

  var _super = TableCells_coffee_createSuper(TableCells);

  function TableCells(props) {
    var _this;

    TableCells_coffee_classCallCheck(this, TableCells);

    _this = _super.call(this, props);
    _this.on_remarks_expand_click = _this.on_remarks_expand_click.bind(TableCells_coffee_assertThisInitialized(_this));
    return _this;
  }

  TableCells_coffee_createClass(TableCells, [{
    key: "on_remarks_expand_click",
    value: function on_remarks_expand_click(event) {
      var el, uid;
      event.preventDefault();
      el = event.currentTarget;
      uid = el.getAttribute("uid"); // notify parent event handler with the extracted uid

      if (this.props.on_remarks_expand_click) {
        return this.props.on_remarks_expand_click(uid);
      }
    }
  }, {
    key: "get_column",
    value: function get_column(column_key) {
      return this.props.columns[column_key];
    }
  }, {
    key: "get_item",
    value: function get_item() {
      return this.props.item;
    }
  }, {
    key: "get_uid",
    value: function get_uid() {
      var item;
      item = this.get_item();
      return item.uid;
    }
  }, {
    key: "get_tab_index",
    value: function get_tab_index(column_key, item) {
      var tabindex;
      tabindex = item.tabindex || {
        column_key: "active"
      };
      tabindex = tabindex[column_key];

      if (tabindex === "disabled") {
        return -1;
      } else {
        return 0;
      }
    }
  }, {
    key: "get_colspan",
    value: function get_colspan(column_key, item) {
      var colspan;
      colspan = item.colspan || {};
      return colspan[column_key];
    }
  }, {
    key: "get_rowspan",
    value: function get_rowspan(column_key, item) {
      var rowspan;
      rowspan = item.rowspan || {};
      return rowspan[column_key];
    }
  }, {
    key: "skip_cell_rendering",
    value: function skip_cell_rendering(column_key) {
      var item, skip;
      item = this.get_item();
      skip = item.skip || [];
      return TableCells_coffee_indexOf.call(skip, column_key) >= 0;
    }
  }, {
    key: "show_select",
    value: function show_select() {
      var item;
      item = this.get_item();

      if (typeof item.show_select === "boolean") {
        return item.show_select;
      }

      return this.props.show_select_column;
    }
  }, {
    key: "is_transposed",
    value: function is_transposed(column_key) {
      var column;
      column = this.get_column(column_key);
      return column.type === "transposed";
    }
    /**
     * Creates a select cell
     *
     * @returns SelectCell component
     */

  }, {
    key: "create_select_cell",
    value: function create_select_cell() {
      var cell, checkbox_name, item, level, remarks, uid;
      checkbox_name = "".concat(this.props.select_checkbox_name, ":list");
      item = this.get_item();
      uid = this.get_uid();
      remarks = this.props.remarks; // True if this row follows a remarks row

      level = item.node_level || 0;
      cell = /*#__PURE__*/external_React_default().createElement("td", {
        key: uid,
        className: "level-".concat(level)
      }, /*#__PURE__*/external_React_default().createElement(Checkbox_coffee, {
        name: checkbox_name,
        value: uid,
        disabled: this.props.disabled,
        checked: this.props.selected,
        tabIndex: "-1",
        onChange: this.props.on_select_checkbox_checked
      }), remarks && /*#__PURE__*/external_React_default().createElement("a", {
        uid: uid,
        href: "#",
        className: "remarks",
        onClick: this.on_remarks_expand_click
      }, /*#__PURE__*/external_React_default().createElement("span", {
        className: "remarksicon fas fa-comment-alt"
      })));
      return cell;
    }
    /**
     * Creates a regular table cell
     *
     * @param column_key {String} The key of the column definition
     * @param column_index {Integer} The current cell index
     * @returns TableCell component
     */

  }, {
    key: "create_regular_cell",
    value: function create_regular_cell(column_key, column_index) {
      var cell, colspan, column, css, item, rowspan, tabindex;
      item = this.get_item();
      column = this.get_column(column_key);
      colspan = this.get_colspan(column_key, item);
      rowspan = this.get_rowspan(column_key, item);
      tabindex = this.get_tab_index(column_key, item);
      css = "contentcell ".concat(column_key);
      cell = /*#__PURE__*/external_React_default().createElement(TableCell_coffee, TableCells_coffee_extends({}, this.props, {
        key: column_index,
        item: item,
        column_key: column_key,
        column_index: column_index,
        column: column,
        colspan: colspan,
        rowspan: rowspan,
        className: css,
        tabIndex: tabindex
      }));
      return cell;
    }
    /**
     * Creates a transposed cell
     *
     * Transposed cell items contain an object key "column_key", which points to
     * the transposed folderitem requested.
     *
     * E.g. a transposed worksheet would have the positions (1, 2, 3, ...) as
     * columns and the contained services of each position as rows.
     * {"column_key": "1", "1": {"Service": "Calcium", ...}}
     *
     * The column for "1" would then contain the type "transposed".
     *
     * @param column_key {String} The key of the column definition
     * @param column_index {Integer} The current cell index
     * @returns TableTransposedCell component
     */

  }, {
    key: "create_transposed_cell",
    value: function create_transposed_cell(column_key, column_index) {
      var cell, colspan, column, css, item, rowspan, tabindex;
      item = this.get_item();
      column = this.get_column(column_key);
      colspan = this.get_colspan(column_key, item);
      rowspan = this.get_rowspan(column_key, item);
      tabindex = this.get_tab_index(column_key, item);
      css = "contentcell ".concat(column_key);
      cell = /*#__PURE__*/external_React_default().createElement(TableTransposedCell_coffee, TableCells_coffee_extends({}, this.props, {
        key: column_index,
        item: item,
        column_key: column_key,
        column_index: column_index,
        column: column,
        colspan: colspan,
        rowspan: rowspan,
        on_remarks_expand_click: this.on_remarks_expand_click,
        className: css,
        tabIndex: tabindex
      }));
      return cell;
    }
  }, {
    key: "build_cells",
    value: function build_cells() {
      var cells, column_index, column_key, i, len, ref;
      cells = []; // insert select column

      if (this.show_select()) {
        cells.push(this.create_select_cell());
      }

      ref = this.props.visible_columns; // insert visible columns in the right order

      for (column_index = i = 0, len = ref.length; i < len; column_index = ++i) {
        column_key = ref[column_index]; // Skip single cell rendering to support rowspans

        if (this.skip_cell_rendering(column_key)) {
          continue;
        }

        if (this.is_transposed(column_key)) {
          // Transposed Cell
          cells.push(this.create_transposed_cell(column_key, column_index));
        } else {
          // Regular Cell
          cells.push(this.create_regular_cell(column_key, column_index));
        }
      }

      return cells;
    }
  }, {
    key: "render",
    value: function render() {
      return this.build_cells();
    }
  }]);

  return TableCells;
}((external_React_default()).Component);

/* harmony default export */ const TableCells_coffee = (TableCells);
;// CONCATENATED MODULE: ./components/TableRow.coffee
function TableRow_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TableRow_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { TableRow_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TableRow_coffee_typeof(obj); }

function TableRow_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TableRow_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TableRow_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) TableRow_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) TableRow_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function TableRow_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TableRow_coffee_setPrototypeOf(subClass, superClass); }

function TableRow_coffee_setPrototypeOf(o, p) { TableRow_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TableRow_coffee_setPrototypeOf(o, p); }

function TableRow_coffee_createSuper(Derived) { var hasNativeReflectConstruct = TableRow_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TableRow_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TableRow_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TableRow_coffee_possibleConstructorReturn(this, result); }; }

function TableRow_coffee_possibleConstructorReturn(self, call) { if (call && (TableRow_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return TableRow_coffee_assertThisInitialized(self); }

function TableRow_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TableRow_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TableRow_coffee_getPrototypeOf(o) { TableRow_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TableRow_coffee_getPrototypeOf(o); }

var TableRow;



TableRow = /*#__PURE__*/function (_React$Component) {
  TableRow_coffee_inherits(TableRow, _React$Component);

  var _super = TableRow_coffee_createSuper(TableRow);

  function TableRow(props) {
    TableRow_coffee_classCallCheck(this, TableRow);

    return _super.call(this, props);
  }

  TableRow_coffee_createClass(TableRow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("tr", {
        className: this.props.className,
        onClick: this.props.onClick,
        category: this.props.category,
        uid: this.props.uid
      }, /*#__PURE__*/external_React_default().createElement(TableCells_coffee, this.props));
    }
  }]);

  return TableRow;
}((external_React_default()).Component);

/* harmony default export */ const TableRow_coffee = (TableRow);
;// CONCATENATED MODULE: ./components/TableCategoryRow.coffee
function TableCategoryRow_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TableCategoryRow_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { TableCategoryRow_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TableCategoryRow_coffee_typeof(obj); }

function TableCategoryRow_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TableCategoryRow_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TableCategoryRow_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) TableCategoryRow_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) TableCategoryRow_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function TableCategoryRow_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TableCategoryRow_coffee_setPrototypeOf(subClass, superClass); }

function TableCategoryRow_coffee_setPrototypeOf(o, p) { TableCategoryRow_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TableCategoryRow_coffee_setPrototypeOf(o, p); }

function TableCategoryRow_coffee_createSuper(Derived) { var hasNativeReflectConstruct = TableCategoryRow_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TableCategoryRow_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TableCategoryRow_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TableCategoryRow_coffee_possibleConstructorReturn(this, result); }; }

function TableCategoryRow_coffee_possibleConstructorReturn(self, call) { if (call && (TableCategoryRow_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return TableCategoryRow_coffee_assertThisInitialized(self); }

function TableCategoryRow_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TableCategoryRow_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TableCategoryRow_coffee_getPrototypeOf(o) { TableCategoryRow_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TableCategoryRow_coffee_getPrototypeOf(o); }

var TableCategoryRow;



TableCategoryRow = /*#__PURE__*/function (_React$Component) {
  TableCategoryRow_coffee_inherits(TableCategoryRow, _React$Component);

  var _super = TableCategoryRow_coffee_createSuper(TableCategoryRow);

  function TableCategoryRow(props) {
    var _this;

    TableCategoryRow_coffee_classCallCheck(this, TableCategoryRow);

    _this = _super.call(this, props); // Bind event handler to local context

    _this.on_category_click = _this.on_category_click.bind(TableCategoryRow_coffee_assertThisInitialized(_this));
    return _this;
  }

  TableCategoryRow_coffee_createClass(TableCategoryRow, [{
    key: "on_category_click",
    value: function on_category_click(event) {
      var category, el;
      el = event.currentTarget;
      category = el.getAttribute("category");
      console.debug("TableCategoryRow::on_row_click: category ".concat(category, " clicked")); // notify parent event handler with the extracted values

      if (this.props.on_category_click) {
        // @param {string} category: The category title
        return this.props.on_category_click(category);
      }
    }
  }, {
    key: "build_category",
    value: function build_category() {
      var cls, icon_cls; // collaped css

      cls = "collapsed";
      icon_cls = "fas fa-caret-square-up"; // expanded css

      if (this.props.expanded) {
        cls = "expanded";
        icon_cls = "fas fa-caret-square-down";
      }

      return /*#__PURE__*/external_React_default().createElement("td", {
        key: "toggle",
        className: cls,
        colSpan: this.props.columns_count
      }, /*#__PURE__*/external_React_default().createElement("span", {
        className: icon_cls
      }), " ", this.props.category);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("tr", {
        category: this.props.category,
        onClick: this.on_category_click,
        className: this.props.className
      }, this.build_category());
    }
  }]);

  return TableCategoryRow;
}((external_React_default()).Component);

/* harmony default export */ const TableCategoryRow_coffee = (TableCategoryRow);
;// CONCATENATED MODULE: ./components/TableRemarksRow.coffee
function TableRemarksRow_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TableRemarksRow_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { TableRemarksRow_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TableRemarksRow_coffee_typeof(obj); }

function TableRemarksRow_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TableRemarksRow_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TableRemarksRow_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) TableRemarksRow_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) TableRemarksRow_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function TableRemarksRow_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TableRemarksRow_coffee_setPrototypeOf(subClass, superClass); }

function TableRemarksRow_coffee_setPrototypeOf(o, p) { TableRemarksRow_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TableRemarksRow_coffee_setPrototypeOf(o, p); }

function TableRemarksRow_coffee_createSuper(Derived) { var hasNativeReflectConstruct = TableRemarksRow_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TableRemarksRow_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TableRemarksRow_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TableRemarksRow_coffee_possibleConstructorReturn(this, result); }; }

function TableRemarksRow_coffee_possibleConstructorReturn(self, call) { if (call && (TableRemarksRow_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return TableRemarksRow_coffee_assertThisInitialized(self); }

function TableRemarksRow_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TableRemarksRow_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TableRemarksRow_coffee_getPrototypeOf(o) { TableRemarksRow_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TableRemarksRow_coffee_getPrototypeOf(o); }

var TableRemarksRow;



TableRemarksRow = /*#__PURE__*/function (_React$Component) {
  TableRemarksRow_coffee_inherits(TableRemarksRow, _React$Component);

  var _super = TableRemarksRow_coffee_createSuper(TableRemarksRow);

  function TableRemarksRow(props) {
    TableRemarksRow_coffee_classCallCheck(this, TableRemarksRow);

    return _super.call(this, props);
  }

  TableRemarksRow_coffee_createClass(TableRemarksRow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("tr", {
        className: this.props.className
      }, /*#__PURE__*/external_React_default().createElement("td", {
        style: {
          padding: 0,
          borderTop: 0
        }
      }), /*#__PURE__*/external_React_default().createElement("td", {
        style: {
          padding: 0,
          borderTop: 0
        },
        colSpan: this.props.colspan - 1
      }, /*#__PURE__*/external_React_default().createElement(RemarksField_coffee, this.props)));
    }
  }]);

  return TableRemarksRow;
}((external_React_default()).Component);

/* harmony default export */ const TableRemarksRow_coffee = (TableRemarksRow);
;// CONCATENATED MODULE: ./components/TableRows.coffee
function TableRows_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TableRows_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { TableRows_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TableRows_coffee_typeof(obj); }

function TableRows_coffee_extends() { TableRows_coffee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableRows_coffee_extends.apply(this, arguments); }

function TableRows_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TableRows_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TableRows_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) TableRows_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) TableRows_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function TableRows_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TableRows_coffee_setPrototypeOf(subClass, superClass); }

function TableRows_coffee_setPrototypeOf(o, p) { TableRows_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TableRows_coffee_setPrototypeOf(o, p); }

function TableRows_coffee_createSuper(Derived) { var hasNativeReflectConstruct = TableRows_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TableRows_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TableRows_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TableRows_coffee_possibleConstructorReturn(this, result); }; }

function TableRows_coffee_possibleConstructorReturn(self, call) { if (call && (TableRows_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return TableRows_coffee_assertThisInitialized(self); }

function TableRows_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TableRows_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TableRows_coffee_getPrototypeOf(o) { TableRows_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TableRows_coffee_getPrototypeOf(o); }

var TableRows,
    TableRows_coffee_indexOf = [].indexOf;





TableRows = /*#__PURE__*/function (_React$Component) {
  TableRows_coffee_inherits(TableRows, _React$Component);

  var _super = TableRows_coffee_createSuper(TableRows);

  function TableRows(props) {
    var _this;

    TableRows_coffee_classCallCheck(this, TableRows);

    _this = _super.call(this, props); // Bind event handler to local context

    _this.on_row_expand_click = _this.on_row_expand_click.bind(TableRows_coffee_assertThisInitialized(_this));
    return _this;
  }

  TableRows_coffee_createClass(TableRows, [{
    key: "on_row_expand_click",
    value: function on_row_expand_click(event) {
      var first_td, row, uid;
      row = event.currentTarget;
      first_td = row.children.item(0);

      if (event.target === first_td) {
        uid = row.getAttribute("uid");

        if (this.props.on_row_expand_click) {
          return this.props.on_row_expand_click(uid);
        }
      }
    }
  }, {
    key: "is_selected",
    value: function is_selected(item) {
      var selected_uids, uid;
      uid = item.uid;
      selected_uids = this.props.selected_uids || [];
      return TableRows_coffee_indexOf.call(selected_uids, uid) >= 0;
    }
  }, {
    key: "is_expanded",
    value: function is_expanded(item) {
      var expanded, ref;
      expanded = this.props.expanded_rows || [];
      return ref = item.uid, TableRows_coffee_indexOf.call(expanded, ref) >= 0;
    }
  }, {
    key: "get_children",
    value: function get_children(item) {
      var children, item_children, uid;
      uid = item.uid;
      children = this.props.children || {};
      item_children = children[uid] || [];
      return item_children;
    }
  }, {
    key: "is_category_expanded",
    value: function is_category_expanded(category) {
      return TableRows_coffee_indexOf.call(this.props.expanded_categories, category) >= 0;
    }
  }, {
    key: "is_item_disabled",
    value: function is_item_disabled(item) {
      return item.disabled || false;
    }
  }, {
    key: "is_child_item",
    value: function is_child_item(item) {
      if (item.parent) {
        return true;
      }
    }
  }, {
    key: "get_item_category",
    value: function get_item_category(item) {
      return item.category || null;
    }
  }, {
    key: "get_item_children",
    value: function get_item_children(item) {
      // list of UIDs in the folderitem
      return item.children || [];
    }
  }, {
    key: "has_item_children",
    value: function has_item_children(item) {
      var children;
      children = this.get_item_children(item);
      return children.length > 0;
    }
  }, {
    key: "get_remarks_columns",
    value: function get_remarks_columns(item) {
      var columns, key, ref, value;
      columns = [];
      ref = this.props.columns;

      for (key in ref) {
        value = ref[key];

        if (value.type === "remarks") {
          // skip undefined values (e.g. reassignable slots)
          if (item[key] === void 0) {
            continue;
          }

          columns.push(key);
        }
      }

      return columns;
    }
  }, {
    key: "get_item_uid",
    value: function get_item_uid(item) {
      return item.uid;
    }
  }, {
    key: "get_item_css",
    value: function get_item_css(item) {
      var cls;
      cls = ["contentrow"]; // review state

      if (item.state_class) {
        cls = cls.concat(item.state_class.split(" "));
      } // selected


      if (this.is_selected(item)) {
        cls.push("table-info");
      } // child/parent


      if (this.is_child_item(item)) {
        cls.push("child");
      } else {
        cls.push("parent");
      } // expandable


      if (this.has_item_children(item)) {
        if (this.is_expanded(item)) {
          cls.push("expanded");
        } else {
          cls.push("collapsed");
        }
      }

      return cls.join(" ");
    }
  }, {
    key: "render_categorized_rows",
    value: function render_categorized_rows() {
      var category, expanded, i, len, ref, rows;
      rows = []; // Render categorized rows

      if (this.props.show_categories) {
        ref = this.props.categories;

        for (i = 0, len = ref.length; i < len; i++) {
          category = ref[i];
          expanded = this.is_category_expanded(category);
          rows.push( /*#__PURE__*/external_React_default().createElement(TableCategoryRow_coffee, TableRows_coffee_extends({}, this.props, {
            key: category,
            category: category,
            expanded: expanded,
            className: "categoryrow"
          }))); // concatenate the categorized rows in the right order

          rows = rows.concat(this.build_rows({
            props: {
              category: category
            }
          }));
        }
      } else {
        // Render uncatgorized rows
        rows = this.build_rows();
      }

      return rows;
    }
  }, {
    key: "build_rows",
    value: function build_rows() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          props = _ref.props;

      var category, child_rows, children, colspan, column, column_index, column_key, css, disabled, expandable, expanded, folderitems, i, item, item_index, j, len, len1, remarks_columns, rows, selected, skip, transposed, uid, value;
      rows = [];

      if (props == null) {
        props = {};
      }

      category = props.category || null;
      folderitems = props.folderitems || this.props.folderitems;

      for (item_index = i = 0, len = folderitems.length; i < len; item_index = ++i) {
        item = folderitems[item_index]; // skip items of other categories

        if (category && this.get_item_category(item) !== category) {
          continue;
        } // skip items in collapsed categories except the selected ones


        if (category && !this.is_category_expanded(category)) {
          if (!this.is_selected(item)) {
            continue;
          }
        }

        uid = this.get_item_uid(item);
        css = this.get_item_css(item); // list of child UIDs in the folderitem

        children = this.get_item_children(item);
        expanded = this.is_expanded(item);
        selected = this.is_selected(item);
        disabled = this.is_item_disabled(item);
        expandable = this.has_item_children(item);
        remarks_columns = this.get_remarks_columns(item);
        transposed = false; // transposed items have no uid, so use the index instead

        if (uid === null) {
          transposed = true;
          uid = item_index;
        }

        rows.push( /*#__PURE__*/external_React_default().createElement(TableRow_coffee, TableRows_coffee_extends({}, this.props, {
          key: uid,
          item: item,
          uid: uid,
          category: category,
          expanded: expanded,
          remarks: remarks_columns.length > 0,
          selected: selected,
          disabled: disabled,
          className: css,
          onClick: expandable && this.on_row_expand_click || void 0,
          row_index: item_index
        }))); // columns with type="remarks" set are rendered in their own row

        for (column_index = j = 0, len1 = remarks_columns.length; j < len1; column_index = ++j) {
          column_key = remarks_columns[column_index];

          if (transposed) {
            // skip for transposed cells
            break;
          }

          column = this.props.columns[column_key]; // support rowspanning for WS header slot

          skip = item.skip || [];
          colspan = this.props.columns_count - skip.length; // get the remarks value

          value = item[column_key] || "";
          rows.push( /*#__PURE__*/external_React_default().createElement(TableRemarksRow_coffee, TableRows_coffee_extends({}, this.props, {
            key: "remarks_" + item_index,
            uid: uid,
            item: item,
            column_key: column_key,
            value: value,
            expanded: expanded,
            selected: selected,
            disabled: disabled,
            className: css + " remarksrow",
            colspan: colspan,
            row_index: item_index
          })));
        } // append expanded rows


        if (expanded) {
          // use the global children mapping to get the lazy fetched folderitem
          children = this.get_children(item);

          if (children.length > 0) {
            child_rows = this.build_rows({
              props: {
                category: category,
                folderitems: children
              }
            });
            rows = rows.concat(child_rows);
          }
        }
      }

      return rows;
    }
  }, {
    key: "render",
    value: function render() {
      return this.render_categorized_rows();
    }
  }]);

  return TableRows;
}((external_React_default()).Component);

/* harmony default export */ const TableRows_coffee = (TableRows);
;// CONCATENATED MODULE: ./components/Table.coffee
function Table_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Table_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { Table_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Table_coffee_typeof(obj); }

function Table_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Table_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Table_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) Table_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) Table_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function Table_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Table_coffee_setPrototypeOf(subClass, superClass); }

function Table_coffee_setPrototypeOf(o, p) { Table_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Table_coffee_setPrototypeOf(o, p); }

function Table_coffee_createSuper(Derived) { var hasNativeReflectConstruct = Table_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Table_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Table_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Table_coffee_possibleConstructorReturn(this, result); }; }

function Table_coffee_possibleConstructorReturn(self, call) { if (call && (Table_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return Table_coffee_assertThisInitialized(self); }

function Table_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Table_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Table_coffee_getPrototypeOf(o) { Table_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Table_coffee_getPrototypeOf(o); }

var Table;




Table = /*#__PURE__*/function (_React$Component) {
  Table_coffee_inherits(Table, _React$Component);

  var _super = Table_coffee_createSuper(Table);

  function Table(props) {
    Table_coffee_classCallCheck(this, Table);

    return _super.call(this, props);
  }

  Table_coffee_createClass(Table, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("table", {
        id: this.props.id,
        className: this.props.className
      }, /*#__PURE__*/external_React_default().createElement("thead", null, /*#__PURE__*/external_React_default().createElement(TableHeaderRow_coffee, this.props)), /*#__PURE__*/external_React_default().createElement("tbody", null, /*#__PURE__*/external_React_default().createElement(TableRows_coffee, this.props)));
    }
  }]);

  return Table;
}((external_React_default()).Component);

/* harmony default export */ const Table_coffee = (Table);
;// CONCATENATED MODULE: ./components/TableColumnConfig.coffee
function TableColumnConfig_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TableColumnConfig_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { TableColumnConfig_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TableColumnConfig_coffee_typeof(obj); }

function TableColumnConfig_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TableColumnConfig_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TableColumnConfig_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) TableColumnConfig_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) TableColumnConfig_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function TableColumnConfig_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TableColumnConfig_coffee_setPrototypeOf(subClass, superClass); }

function TableColumnConfig_coffee_setPrototypeOf(o, p) { TableColumnConfig_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TableColumnConfig_coffee_setPrototypeOf(o, p); }

function TableColumnConfig_coffee_createSuper(Derived) { var hasNativeReflectConstruct = TableColumnConfig_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TableColumnConfig_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TableColumnConfig_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TableColumnConfig_coffee_possibleConstructorReturn(this, result); }; }

function TableColumnConfig_coffee_possibleConstructorReturn(self, call) { if (call && (TableColumnConfig_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return TableColumnConfig_coffee_assertThisInitialized(self); }

function TableColumnConfig_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TableColumnConfig_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TableColumnConfig_coffee_getPrototypeOf(o) { TableColumnConfig_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TableColumnConfig_coffee_getPrototypeOf(o); }

var TableColumnConfig;


TableColumnConfig = /*#__PURE__*/function (_React$Component) {
  TableColumnConfig_coffee_inherits(TableColumnConfig, _React$Component);

  var _super = TableColumnConfig_coffee_createSuper(TableColumnConfig);

  function TableColumnConfig(props) {
    var _this;

    TableColumnConfig_coffee_classCallCheck(this, TableColumnConfig);

    _this = _super.call(this, props);
    _this.on_drag_start = _this.on_drag_start.bind(TableColumnConfig_coffee_assertThisInitialized(_this));
    _this.on_drag_end = _this.on_drag_end.bind(TableColumnConfig_coffee_assertThisInitialized(_this));
    _this.on_drag_over = _this.on_drag_over.bind(TableColumnConfig_coffee_assertThisInitialized(_this));
    _this.on_column_toggle_click = _this.on_column_toggle_click.bind(TableColumnConfig_coffee_assertThisInitialized(_this));
    _this.on_reset_click = _this.on_reset_click.bind(TableColumnConfig_coffee_assertThisInitialized(_this));
    _this.state = {
      columns_order: _this.props.columns_order
    };
    return _this;
  }
  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   *
   * This is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   */


  TableColumnConfig_coffee_createClass(TableColumnConfig, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      // update the column order from the listing
      if (this.props.columns_order !== prevProps.columns_order) {
        return this.setState({
          columns_order: this.props.columns_order
        });
      }
    }
  }, {
    key: "on_reset_click",
    value: function on_reset_click(event) {
      event.preventDefault(); // call the parent event handler

      if (this.props.on_column_toggle_click) {
        return this.props.on_column_toggle_click("reset");
      }
    }
  }, {
    key: "on_drag_start",
    value: function on_drag_start(event) {
      this.dragged_item = event.currentTarget;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/html", this.dragged_item);
      return event.dataTransfer.setDragImage(this.dragged_item, 50, 0);
    }
  }, {
    key: "on_drag_over",
    value: function on_drag_over(event) {
      var column1, column2, columns_order, index, li;
      li = event.currentTarget;

      if (li === this.dragged_item) {
        return;
      }

      column1 = this.dragged_item.getAttribute("column");
      column2 = li.getAttribute("column");
      columns_order = this.state.columns_order; // index of the second column

      index = columns_order.indexOf(column2); // filter out the currently dragged item

      columns_order = columns_order.filter(function (column) {
        return column !== column1;
      }); // add the dragged column after the dragged over column

      columns_order.splice(index, 0, column1); // set the new columns order to the local state

      return this.setState({
        columns_order: columns_order
      });
    }
  }, {
    key: "on_drag_end",
    value: function on_drag_end(event) {
      this.dragged_item = null; // call the event handler of the controller to change the column order

      if (this.props.on_columns_order_change) {
        return this.props.on_columns_order_change(this.state.columns_order);
      }
    }
  }, {
    key: "on_column_toggle_click",
    value: function on_column_toggle_click(event) {
      var column, el;
      event.preventDefault();
      el = event.currentTarget;
      column = el.getAttribute("column"); // call the event handler of the controller to toggle the column

      if (this.props.on_column_toggle_click) {
        return this.props.on_column_toggle_click(column);
      }
    }
  }, {
    key: "is_column_visible",
    value: function is_column_visible(column) {
      return column.toggle !== false;
    }
  }, {
    key: "build_column_toggles",
    value: function build_column_toggles() {
      var column, columns, i, key, len, ref, visible;
      columns = [];
      ref = this.state.columns_order;

      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        column = this.props.columns[key];
        visible = this.is_column_visible(column);
        columns.push( /*#__PURE__*/external_React_default().createElement("li", {
          key: key,
          column: key,
          style: {
            padding: "0 5px 5px 0"
          },
          className: "column",
          onDragOver: this.on_drag_over
        }, /*#__PURE__*/external_React_default().createElement("a", {
          href: "#",
          column: key,
          className: "draggable-column",
          onDragStart: this.on_drag_start,
          onDragEnd: this.on_drag_end,
          draggable: true
        }, /*#__PURE__*/external_React_default().createElement("span", {
          column: key,
          onClick: this.on_column_toggle_click,
          className: "nav-item btn btn-light btn-sm"
        }, visible && /*#__PURE__*/external_React_default().createElement("i", {
          className: "text-primary fas fa-check-square"
        }), !visible && /*#__PURE__*/external_React_default().createElement("i", {
          className: "text-muted fas fa-square"
        }), "\xA0", /*#__PURE__*/external_React_default().createElement("span", {
          dangerouslySetInnerHTML: {
            __html: column.title || key
          }
        })))));
      }

      return columns;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement("div", {
        id: this.props.id,
        className: this.props.className
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-12 text-left my-3"
      }, /*#__PURE__*/external_React_default().createElement("strong", null, this.props.title), /*#__PURE__*/external_React_default().createElement("div", {
        className: "help-block"
      }, this.props.description), /*#__PURE__*/external_React_default().createElement("ul", {
        className: "list-inline nav nav-pills"
      }, this.build_column_toggles(), /*#__PURE__*/external_React_default().createElement("li", {
        key: "reset",
        style: {
          padding: "0 5px 5px 0"
        }
      }, /*#__PURE__*/external_React_default().createElement("button", {
        onClick: this.on_reset_click,
        className: "btn btn-warning btn-sm"
      }, _t("Reset Columns")))))));
    }
  }]);

  return TableColumnConfig;
}((external_React_default()).Component);

/* harmony default export */ const TableColumnConfig_coffee = (TableColumnConfig);
;// CONCATENATED MODULE: ./listing.coffee
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function listing_coffee_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { listing_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { listing_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return listing_coffee_typeof(obj); }

function listing_coffee_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function listing_coffee_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function listing_coffee_createClass(Constructor, protoProps, staticProps) { if (protoProps) listing_coffee_defineProperties(Constructor.prototype, protoProps); if (staticProps) listing_coffee_defineProperties(Constructor, staticProps); return Constructor; }

function listing_coffee_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) listing_coffee_setPrototypeOf(subClass, superClass); }

function listing_coffee_setPrototypeOf(o, p) { listing_coffee_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return listing_coffee_setPrototypeOf(o, p); }

function listing_coffee_createSuper(Derived) { var hasNativeReflectConstruct = listing_coffee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = listing_coffee_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = listing_coffee_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return listing_coffee_possibleConstructorReturn(this, result); }; }

function listing_coffee_possibleConstructorReturn(self, call) { if (call && (listing_coffee_typeof(call) === "object" || typeof call === "function")) { return call; } return listing_coffee_assertThisInitialized(self); }

function listing_coffee_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function listing_coffee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function listing_coffee_getPrototypeOf(o) { listing_coffee_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return listing_coffee_getPrototypeOf(o); }

/** ReactJS controlled component
 *
 * Please use JSDoc comments: https://jsdoc.app
 *
 * Note: Each comment must start with a `/**` sequence in order to be recognized
 *       by the JSDoc parser.
 */
var ListingController,
    listing_coffee_indexOf = [].indexOf;












/** DOCUMENT READY ENTRY POINT */

document.addEventListener("DOMContentLoaded", function () {
  var controller, form_id, i, len, results, table, tables;
  console.debug("*** SENAITE.APP.LISTING::DOMContentLoaded: --> Loading ReactJS Controller");

  if (window._t == null) {
    console.warn("Global translation variable `_t` not found! Translations won't work!"); // Mock the variable to return the input as output

    window._t = function (text) {
      return text;
    };
  }

  tables = document.getElementsByClassName("ajax-contents-table");

  if (window.listings == null) {
    window.listings = {};
  }

  results = [];

  for (i = 0, len = tables.length; i < len; i++) {
    table = tables[i];
    form_id = table.dataset.form_id;
    controller = external_ReactDOM_default().render( /*#__PURE__*/external_React_default().createElement(ListingController, {
      root_el: table
    }), table); // Keep a reference to the listing

    results.push(window.listings[form_id] = controller);
  }

  return results;
});
/**
 * Controller class for one listing table.
 * The idea is to handle all API calls and logic here and pass the callback
 * methods to the contained components.
 * @class
 */

ListingController = /*#__PURE__*/function (_React$Component) {
  listing_coffee_inherits(ListingController, _React$Component);

  var _super = listing_coffee_createSuper(ListingController);

  /**
   * Bind all event handlers and define the state
   * @constructor
   */
  function ListingController(props) {
    var _this;

    listing_coffee_classCallCheck(this, ListingController);

    _this = _super.call(this, props); // bind callbacks

    _this.dismissMessage = _this.dismissMessage.bind(listing_coffee_assertThisInitialized(_this));
    _this.doAction = _this.doAction.bind(listing_coffee_assertThisInitialized(_this));
    _this.filterBySearchterm = _this.filterBySearchterm.bind(listing_coffee_assertThisInitialized(_this));
    _this.filterByState = _this.filterByState.bind(listing_coffee_assertThisInitialized(_this));
    _this.on_api_error = _this.on_api_error.bind(listing_coffee_assertThisInitialized(_this));
    _this.on_column_config_click = _this.on_column_config_click.bind(listing_coffee_assertThisInitialized(_this));
    _this.on_select_checkbox_checked = _this.on_select_checkbox_checked.bind(listing_coffee_assertThisInitialized(_this));
    _this.on_reload = _this.on_reload.bind(listing_coffee_assertThisInitialized(_this));
    _this.saveAjaxQueue = _this.saveAjaxQueue.bind(listing_coffee_assertThisInitialized(_this));
    _this.saveEditableField = _this.saveEditableField.bind(listing_coffee_assertThisInitialized(_this));
    _this.setColumnsOrder = _this.setColumnsOrder.bind(listing_coffee_assertThisInitialized(_this));
    _this.showMore = _this.showMore.bind(listing_coffee_assertThisInitialized(_this));
    _this["export"] = _this["export"].bind(listing_coffee_assertThisInitialized(_this));
    _this.sortBy = _this.sortBy.bind(listing_coffee_assertThisInitialized(_this));
    _this.toggleCategory = _this.toggleCategory.bind(listing_coffee_assertThisInitialized(_this));
    _this.toggleColumn = _this.toggleColumn.bind(listing_coffee_assertThisInitialized(_this));
    _this.toggleRemarks = _this.toggleRemarks.bind(listing_coffee_assertThisInitialized(_this));
    _this.toggleRow = _this.toggleRow.bind(listing_coffee_assertThisInitialized(_this));
    _this.updateEditableField = _this.updateEditableField.bind(listing_coffee_assertThisInitialized(_this));
    _this.on_popstate = _this.on_popstate.bind(listing_coffee_assertThisInitialized(_this)); // root element

    _this.root_el = _this.props.root_el; // get initial configuration data from the HTML attribute

    _this.api_url = _this.root_el.dataset.api_url;
    _this.columns = JSON.parse(_this.root_el.dataset.columns);
    _this.form_id = _this.root_el.dataset.form_id;
    _this.listing_identifier = _this.root_el.dataset.listing_identifier;
    _this.pagesize = parseInt(_this.root_el.dataset.pagesize);
    _this.review_states = JSON.parse(_this.root_el.dataset.review_states);
    _this.show_column_toggles = JSON.parse(_this.root_el.dataset.show_column_toggles); // bind event handlers

    _this.root_el.addEventListener("reload", _this.on_reload); // the API is responsible for async calls and knows about the endpoints


    _this.api = new api_coffee({
      api_url: _this.api_url,
      on_api_error: _this.on_api_error,
      form_id: _this.form_id
    }); // request parameters

    _this.filter = _this.api.get_url_parameter("filter");
    _this.pagesize = parseInt(_this.api.get_url_parameter("pagesize")) || _this.pagesize;
    _this.sort_on = _this.api.get_url_parameter("sort_on");
    _this.sort_order = _this.api.get_url_parameter("sort_order");
    _this.review_state = _this.api.get_url_parameter("review_state") || "default";
    _this.state = {
      // alert messages
      messages: [],
      // loading indicator
      loading: true,
      // show column config toggle
      show_column_config: false,
      // filter, pagesize, sort_on, sort_order and review_state are initially set
      // from the request to allow bookmarks to specific searches
      filter: _this.filter,
      pagesize: _this.pagesize,
      sort_on: _this.sort_on,
      sort_order: _this.sort_order,
      review_state: _this.review_state,
      // The query string is computed on the server and allows to bookmark listings
      query_string: "",
      // The API URL to call
      api_url: "",
      // form_id, columns and review_states are defined in the listing view and
      // passed in via a data attribute in the template, because they can be seen
      // as constant values
      form_id: _this.form_id,
      columns: _this.get_default_columns(),
      review_states: _this.review_states,
      // The data from the folderitems view call
      folderitems: [],
      // Mapping of UID -> list of children from the folderitems
      children: {},
      // The categories of the folderitems
      categories: [],
      // Expanded categories
      expanded_categories: [],
      // Expanded Rows (currently only Partitions)
      expanded_rows: [],
      // Expanded Remarks Rows
      expanded_remarks: [],
      // total number of items in the database
      total: 0,
      // UIDs of selected rows are stored in selected_uids.
      // These are sent when a transition action is clicked.
      selected_uids: [],
      // The possible transition buttons
      transitions: [],
      // The available catalog indexes for sorting
      catalog_indexes: [],
      // The available catalog columns for sorting
      catalog_columns: [],
      // The possible sortable columns
      sortable_columns: [],
      // ajax save queue: mapping of uid: name -> value mapping
      ajax_save_queue: {},
      // Listing specific configs
      content_filter: {},
      allow_edit: false,
      show_select_all_checkbox: false,
      show_select_column: false,
      show_column_toggles: _this.show_column_toggles,
      select_checkbox_name: "uids",
      post_action: "workflow_action",
      show_categories: false,
      expand_all_categories: false,
      show_more: false,
      limit_from: 0,
      show_search: false,
      show_ajax_save: false,
      show_table_footer: false,
      fetch_transitions_on_select: true,
      show_export: true
    };
    return _this;
  }
  /**
   * Dismisses a message by its message index
   *
   * @param index {int} Index of the message to dismiss
   * @returns {bool} true
   */


  listing_coffee_createClass(ListingController, [{
    key: "dismissMessage",
    value: function dismissMessage() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var messages; // dismiss all messages

      if (index === null) {
        this.setState({
          messages: []
        });
      } else {
        // dismiss message by index
        messages = [].concat(this.state.messages);
        messages.splice(index, 1);
        this.setState({
          messages: messages
        });
      }

      return true;
    }
    /**
     * Display a new bootstrap alert message above the table
     *
     * @param title {string} Title to be displayed in the alert box
     *              {object} Config object for all parameters
     * @param text {string} The message text
     * @param traceback {string} Preformatted traceback
     * @param level {string} info, success, warning, danger
     * @returns {bool} true
     */

  }, {
    key: "addMessage",
    value: function addMessage(title, text, traceback) {
      var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "info";
      var messages, props;

      if (listing_coffee_typeof(title) === "object") {
        props = Object.assign(title);
        title = props.title;
        text = props.text;
        traceback = props.traceback;
        level = props.level;
      }

      messages = [].concat(this.state.messages);
      messages.push({
        title: title,
        text: text,
        traceback: traceback,
        level: level
      });
      this.setState({
        messages: messages
      });
      return true;
    }
    /**
     * Parameters to be sent in each Ajax POST request
     * @returns {object} current state values
     */

  }, {
    key: "getRequestOptions",
    value: function getRequestOptions() {
      var options;
      options = {
        "review_state": this.state.review_state,
        "filter": this.state.filter,
        "sort_on": this.state.sort_on,
        "sort_order": this.state.sort_order,
        "pagesize": this.state.pagesize,
        "limit_from": this.state.limit_from,
        "selected_uids": this.state.selected_uids
      };
      console.debug("Request Options=", options);
      return options;
    }
    /**
     * ReactJS event handler when the component did mount
     * Fetches the initial folderitems
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("popstate", this.on_popstate, false);
      return this.fetch_folderitems();
    }
    /**
     * ReactJS event handler when the component unmounts
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      return window.removeEventListener("popstate", this.on_popstate, false);
    }
    /**
     * componentDidUpdate(prevProps, prevState, snapshot)
     *
     * This is invoked immediately after updating occurs.
     * This method is not called for the initial render.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {}
    /**
     * Expand/Collapse a listing category row by adding the category ID to the
     * state `expanded_categories`
     *
     * @param category {string} Title of the category
     * @returns {bool} true if the category was expanded, otherwise false
     */

  }, {
    key: "toggleCategory",
    value: function toggleCategory(category) {
      var expanded, index;
      console.debug("ListingController::toggleCategory: column=".concat(category)); // get the current expanded categories

      expanded = this.state.expanded_categories; // check if the current category is in there

      index = expanded.indexOf(category);

      if (index > -1) {
        // remove the category
        expanded.splice(index, 1);
      } else {
        // add the category
        expanded.push(category);
      } // set the new expanded categories


      this.setState({
        expanded_categories: expanded
      });
      return expanded.length > 0;
    }
    /**
     * Expand/Collapse remarks
     *
     * @param uid {string} UID of the item
     * @returns {bool} true if the remarks were expanded, otherwise false
     */

  }, {
    key: "toggleRemarks",
    value: function toggleRemarks(uid) {
      var expanded, index;
      console.debug("ListingController::toggleRemarks: uid=".concat(uid));

      if (!uid) {
        // skip if no uid is given
        return false;
      } // get the current expanded remarks


      expanded = this.state.expanded_remarks; // check if the current UID is in there

      index = expanded.indexOf(uid);

      if (index > -1) {
        // remove the UID
        expanded.splice(index, 1);
      } else {
        // add the UID
        expanded.push(uid);
      } // set the new expanded remarks


      this.setState({
        expanded_remarks: expanded
      });
      return expanded.length > 0;
    }
    /*
     * Expand/Collapse the row
     *
     * @param uid {string} UID of the item
     * @returns {bool} true if the row was expanded, otherwise false
     */

  }, {
    key: "toggleRow",
    value: function toggleRow(uid) {
      var expanded, index, me, promise;
      console.debug("ListingController::toggleRow: uid=".concat(uid));

      if (!uid) {
        // skip if no uid is given
        return false;
      } // get the current expanded rows


      expanded = this.state.expanded_rows; // check if the current row is in there

      index = expanded.indexOf(uid);

      if (index > -1) {
        // remove the category
        expanded.splice(index, 1);
      } else {
        // add the category
        expanded.push(uid);
      } // check if the children are already fetched


      me = this;

      if (!(uid in this.state.children)) {
        promise = this.fetch_children({
          parent_uid: uid
        });
        promise.then(function (data) {
          var child, children, i, item_children, len;
          children = me.state.children;
          item_children = data.children || [];
          children[uid] = item_children;

          for (i = 0, len = item_children.length; i < len; i++) {
            child = item_children[i];

            if (child.selected) {
              me.selectUID(child.uid, true);
            }
          }

          return me.setState({
            children: children,
            expanded_rows: expanded
          });
        });
      } else {
        // set the new expanded categories
        this.setState({
          expanded_rows: expanded
        });
      }

      return expanded.length > 0;
    }
    /**
     * Toggle the visibility of a column by its column key.
     *
     * This method also stores the visibility of the column in the browser's
     * localstorage.
     *
     * @param key {string} The ID of the column, or "reset" to restore all columns
     * @returns {bool} true if the column was expanded, otherwise false
     */

  }, {
    key: "toggleColumn",
    value: function toggleColumn(key) {
      var column, column_config, columns, toggle;
      console.debug("ListingController::toggleColumn: key=".concat(key)); // restore columns to the initial state and flush the local storage

      if (key === "reset") {
        this.setState({
          columns: this.get_default_columns()
        });
        this.set_local_column_config([]);
        return true;
      } // get the columns from the state


      columns = this.state.columns; // Toggle the visibility of the column

      toggle = columns[key]["toggle"];

      if (toggle === void 0) {
        toggle = true;
      }

      columns[key]["toggle"] = !toggle;
      column_config = [];

      for (key in columns) {
        column = columns[key]; // keep only a record of the column key and visibility in the local storage

        column_config.push({
          key: key,
          toggle: column.toggle
        });
      } // store the new order and visibility in the local storage


      this.set_local_column_config(column_config); // update the columns of the current state

      this.setState({
        columns: columns
      });
      return toggle;
    }
    /**
     * Update the order of all columns
     *
     * This method also stores the order of the columns in the browser's
     * localstorage.
     *
     * @param order {array} Array of column IDs to be used as new order
     * @returns {object} New ordered columns object
     */

  }, {
    key: "setColumnsOrder",
    value: function setColumnsOrder(order) {
      var column, column_config, i, key, keys, len, ordered_columns, toggle;
      console.debug("ListingController::setColumnsOrder: order=".concat(order)); // This object will hold the new ordered columns

      ordered_columns = {}; // Although the column properties seem to be sorted, we keep in the local
      // storage a list of column "visibility" objects to avoid any order issues
      // with the JSON serialization step.

      column_config = []; // get the keys of all columns (visible or not)

      keys = Object.keys(this.state.columns); // sort the keys according to the passed in column order

      keys.sort(function (a, b) {
        return order.indexOf(a) - order.indexOf(b);
      }); // rebuild an object with the new property order

      for (i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        column = this.state.columns[key];
        toggle = column.toggle;

        if (toggle === void 0) {
          toggle = true;
        } // keep only a record of the column key and visibility in the local storage


        column_config.push({
          key: key,
          toggle: toggle
        });
        ordered_columns[key] = column;
      } // store the new order and visibility in the local storage


      this.set_local_column_config(column_config); // update the columns of the current state

      this.setState({
        columns: ordered_columns
      });
      return ordered_columns;
    }
    /**
     * Returns all column keys where the visibility toggle is true
     *
     * @returns columns {array} Array of ordered and visible columns
     */

  }, {
    key: "get_visible_columns",
    value: function get_visible_columns() {
      var allowed_keys, i, key, keys, len, ref, toggle, visible;
      keys = [];
      allowed_keys = this.get_allowed_column_keys();
      visible = this.get_columns_visibility();
      ref = this.get_columns_order();

      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i]; // skip non-allowed keys

        if (listing_coffee_indexOf.call(allowed_keys, key) < 0) {
          continue;
        }

        toggle = visible[key]; // skip columns which are not visible

        if (toggle === false) {
          continue;
        } // remember the key


        keys.push(key);
      }

      return keys;
    }
    /**
     * Get the default columns
     *
     * This method parses the JSON columns definitions from the DOM.
     *
     * @returns columns {object} Object of column definitions
     */

  }, {
    key: "get_default_columns",
    value: function get_default_columns() {
      return JSON.parse(this.root_el.dataset.columns);
    }
    /**
     * Get columns in the right order and visibility
     *
     * This method takes the local column settings into consideration to set the
     * visibility and order of the final columns object.
     *
     * @returns columns {object} new columns object
     */

  }, {
    key: "get_columns",
    value: function get_columns() {
      var column, columns, i, key, len, ref, toggle, visibility;
      columns = {};
      visibility = this.get_columns_visibility();
      ref = this.get_columns_order();

      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        column = this.state.columns[key];

        if (column === void 0) {
          console.warn("Skipping nonexisting column '".concat(key, "'."));
          continue;
        }

        toggle = visibility[key];

        if (toggle !== void 0) {
          column["toggle"] = toggle;
        }

        columns[key] = column;
      }

      return columns;
    }
    /**
     * Extract all keys from the curent columns
     *
     * @returns keys {array} Current colum keys
     */

  }, {
    key: "get_columns_keys",
    value: function get_columns_keys() {
      return Object.keys(this.state.columns);
    }
    /**
     * Return the order of all columns
     *
     * This method takes also the local column config into consideration
     *
     * @returns keys {array} Current colum keys
     */

  }, {
    key: "get_columns_order",
    value: function get_columns_order() {
      var allowed, allowed_keys, columns_keys, keys, local_config;
      keys = [];
      columns_keys = this.get_columns_keys();
      local_config = this.get_local_column_config(); // filter out removed columns that still exist in the local config

      local_config = local_config.filter(function (column) {
        return columns_keys.indexOf(column.key) !== -1;
      }); // Skip local settings if toggling/ordering is not allowed

      allowed = this.state.show_column_toggles;

      if (allowed && local_config.length > 0) {
        // extract the column keys in the user selected order
        keys = local_config.map(function (item, index) {
          return item.key;
        });
      } else {
        // sort column keys by the current columns settings
        allowed_keys = this.get_allowed_column_keys();
        keys = allowed_keys.concat(columns_keys.filter(function (k) {
          // only append column keys which are not yet in  allowed_keys
          return allowed_keys.indexOf(k) === -1;
        }));
      }

      return keys;
    }
    /**
     * Return the set visibility of all columns
     *
     * This method takes also the local column config into consideration
     *
     * @returns visibility {object} of column key -> visibility
     */

  }, {
    key: "get_columns_visibility",
    value: function get_columns_visibility() {
      var allowed, column, i, key, len, local_config, ref, toggle, visibility;
      visibility = {};
      local_config = this.get_local_column_config(); // Skip local settings if toggling/ordering is not allowed

      allowed = this.state.show_column_toggles;

      if (allowed && local_config.length > 0) {
        // get the user defined visibility
        for (i = 0, len = local_config.length; i < len; i++) {
          var _local_config$i = local_config[i];
          key = _local_config$i.key;
          toggle = _local_config$i.toggle;

          if (toggle === void 0) {
            toggle = true;
          }

          visibility[key] = toggle;
        }
      } else {
        ref = this.state.columns; // use the default visibility of the columns

        for (key in ref) {
          column = ref[key];
          toggle = column.toggle;

          if (toggle === void 0) {
            toggle = true;
          }

          visibility[key] = toggle;
        }
      }

      return visibility;
    }
    /**
     * Filter the results by the given state
     *
     * This method executes an Ajax request to the server.
     *
     * @param review_state {string} The state to filter, e.g. verified, published
     * @returns {bool} true
     */

  }, {
    key: "filterByState",
    value: function filterByState() {
      var review_state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";
      var state, state_listing_config;
      console.debug("ListingController::filterByState: review_state=".concat(review_state));
      state = this.get_review_state_by_id(review_state); // allow to update the listing config per state

      state_listing_config = state.listing_config || {};
      this.set_state(Object.assign({
        review_state: review_state,
        pagesize: this.pagesize,
        // reset to the initial pagesize on state change
        limit_from: 0
      }, state_listing_config));
      return true;
    }
    /**
     * Filter the results by the given searchterm
     *
     * This method executes an Ajax request to the server.
     *
     * @param filter {string} An arbitrary search string
     * @returns {bool} true
     */

  }, {
    key: "filterBySearchterm",
    value: function filterBySearchterm() {
      var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      console.debug("ListingController::filterBySearchter: filter=".concat(filter));
      this.set_state({
        filter: filter,
        pagesize: this.pagesize,
        // reset to the initial pagesize on search
        limit_from: 0
      });
      return true;
    }
    /**
     * Sort a column with a specific order
     *
     * This method executes an Ajax request to the server.
     *
     * @param sort_on {string} Sort index, e.g. getId, created
     * @param sort_order {string} Sort order, e.g. ascending, descending
     * @returns {bool} true
     */

  }, {
    key: "sortBy",
    value: function sortBy(sort_on, sort_order) {
      console.debug("sort_on=".concat(sort_on, " sort_order=").concat(sort_order));
      this.set_state({
        sort_on: sort_on,
        sort_order: sort_order,
        pagesize: this.get_item_count(),
        // keep the current number of items on sort
        limit_from: 0
      });
      return true;
    }
    /**
     * Show more results
     *
     * This method executes an Ajax request to the server.
     *
     * @param pagesize {int} The amount of additional items to request
     * @returns {bool} true
     */

  }, {
    key: "showMore",
    value: function showMore(pagesize) {
      var folderitems, me;
      console.debug("ListingController::showMore: pagesize=".concat(pagesize)); // the existing folderitems

      folderitems = this.state.folderitems;
      me = this;
      this.setState({
        pagesize: parseInt(pagesize),
        limit_from: this.state.folderitems.length,
        loading: true
      }, function () {
        var promise; // N.B. we're using limit_from here, so we must append the returning
        //      folderitems to the existing ones

        promise = me.api.fetch_folderitems(me.getRequestOptions());
        return promise.then(function (data) {
          var new_folderitems;
          me.toggle_loader(false);

          if (data.folderitems.length > 0) {
            console.debug("Adding ".concat(data.folderitems.length, " more folderitems...")); // append the new folderitems to the existing ones

            new_folderitems = folderitems.concat(data.folderitems);
            return me.setState({
              folderitems: new_folderitems
            });
          }
        });
      });
      return true;
    }
    /*
    Export the current displayed items to a CSV
    */

  }, {
    key: "export",
    value: function _export() {
      var col, columns, columns_keys, columns_visibility, csv, folderitems, header, item, key, rows;
      console.debug("ListingController::export"); // Column keys, sorted properly

      columns_keys = this.get_columns_order(); // Only interested in visible columns

      columns_visibility = this.get_columns_visibility();

      columns_keys = function () {
        var i, len, results;
        results = [];

        for (i = 0, len = columns_keys.length; i < len; i++) {
          col = columns_keys[i];

          if (columns_visibility[col] === true) {
            results.push(col);
          }
        }

        return results;
      }(); // Generate the header


      columns = this.get_columns();

      header = function () {
        var i, len, results;
        results = [];

        for (i = 0, len = columns_keys.length; i < len; i++) {
          key = columns_keys[i];
          results.push(JSON.stringify(columns[key]["title"] || key));
        }

        return results;
      }(); // Generate the list of rows


      folderitems = this.state.folderitems;

      rows = function () {
        var i, len, results;
        results = [];

        for (i = 0, len = folderitems.length; i < len; i++) {
          item = folderitems[i];
          results.push(this.to_csv_row(item, columns_keys));
        }

        return results;
      }.call(this); // Join all together


      csv = header.join(",");
      csv = csv + "\n" + rows.join("\n");
      return this.download_csv(csv, "download.csv");
    }
    /*
    Triggers the download of the csv
    */

  }, {
    key: "download_csv",
    value: function download_csv(csv, filename) {
      var csv_file, csv_properties, down_link, universalBOM;
      universalBOM = "\uFEFF";
      csv_properties = {
        encoding: "UTF-8",
        type: "text/csv;charset=UTF-8"
      };
      csv_file = new Blob([universalBOM, csv], csv_properties);
      down_link = document.createElement("a");
      down_link.download = filename;
      down_link.href = window.URL.createObjectURL(csv_file);
      down_link.display = "none";
      document.body.appendChild(down_link);
      return down_link.click();
    }
    /*
    Converts the item to a well-formed csv row
    */

  }, {
    key: "to_csv_row",
    value: function to_csv_row(item, columns) {
      var c, cell, cells, choice, choices, column, i, len;
      cells = [];
      console.debug(item);

      for (i = 0, len = columns.length; i < len; i++) {
        column = columns[i];
        cell = item[column] || "";

        if (column === "Result") {
          // Give priority to formatted_result
          cell = item.formatted_result || cell;
        } else if (cell.constructor === Object) {
          // Handle interim fields gracefully
          cell = cell.formatted_value || cell.value;
        }

        if (item.choices != null) {
          // Handle choices
          choices = item.choices[column];

          if (choices != null) {
            choice = function () {
              var j, len1, results;
              results = [];

              for (j = 0, len1 = choices.length; j < len1; j++) {
                c = choices[j];

                if (c.ResultValue === cell) {
                  results.push(c.ResultText);
                }
              }

              return results;
            }();

            cell = choice[0] || cell;
          }
        }

        cell = JSON.stringify(cell);
        cells.push(cell);
      }

      return cells.join(',');
    }
    /**
     * Submit form
     *
     * This method executes an HTTP POST form submission
     *
     * @param id {string} The workflow action id
     * @param url {string} The form action URL
     * @returns form submission
     */

  }, {
    key: "doAction",
    value: function doAction(id, url) {
      var action, form, input; // handle clear button separate

      if (id === "clear_selection") {
        this.selectUID("all", false);
        return;
      } // get the form element


      form = document.getElementById(this.state.form_id); // N.B. Transition submit buttons are suffixed with `_transition`, because
      //      otherwise the form.submit call below retrieves the element instead of
      //      doing the method call.

      action = id.split("_transition")[0]; // inject workflow action id for `BikaListing._get_form_workflow_action`

      input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("id", id);
      input.setAttribute("name", "workflow_action_id");
      input.setAttribute("value", action);
      form.appendChild(input); // Override the form action when a custom URL is given

      if (url) {
        form.action = url;
      }

      return form.submit();
    }
    /**
     * Select a row checkbox by UID
     *
     * This method executes an Ajax request to the server.
     *
     * @param uid {string} The UID of the row
     * @param toggle {bool} true for select, false for deselect
     * @returns {Promise} which is resolved when the state was sucessfully set
     */

  }, {
    key: "selectUID",
    value: function selectUID(uid, toggle) {
      var _this2 = this;

      var added, all_uids, by_uid, i, items, len, pos, removed, selected_uids; // copy the selected UIDs from the state
      // N.B. We use [].concat(@state.selected_uids) to get a copy, otherwise it
      //      would be a reference of the state value!

      selected_uids = [].concat(this.state.selected_uids);

      if (toggle === true) {
        // handle the select all checkbox
        if (uid === "all") {
          // Do not select disabled items
          items = this.state.folderitems.filter(function (item) {
            return !item.disabled;
          }); // Get all uids from enabled items

          all_uids = items.map(function (item) {
            return item.uid;
          }); // keep existing selected uids

          for (i = 0, len = all_uids.length; i < len; i++) {
            uid = all_uids[i];

            if (listing_coffee_indexOf.call(selected_uids, uid) < 0) {
              selected_uids.push(uid);
            }
          }
        } else {
          if (listing_coffee_indexOf.call(selected_uids, uid) < 0) {
            // push the uid into the list of selected_uids
            selected_uids.push(uid);
          }
        }
      } else {
        // flush all selected UIDs when the select_all checkbox is deselected or
        // when the deselect all button was clicked
        if (uid === "all") {
          // Keep readonly items
          by_uid = this.group_by_uid(this.state.folderitems);
          selected_uids = selected_uids.filter(function (uid) {
            var item;
            item = by_uid[uid];
            return item.readonly;
          });
        } else {
          // remove the selected UID from the list of selected_uids
          pos = selected_uids.indexOf(uid);
          selected_uids.splice(pos, 1);
        }
      } // Only set the state and refetch transitions if the selected UIDs changed


      added = selected_uids.filter(function (uid) {
        return _this2.state.selected_uids.indexOf(uid) === -1;
      }).length > 0;
      removed = this.state.selected_uids.filter(function (uid) {
        return selected_uids.indexOf(uid) === -1;
      }).length > 0;

      if (!(added || removed)) {
        return;
      } // return a promise which is resolved when the state was successfully set


      return new Promise(function (resolve, reject) {
        return _this2.setState({
          selected_uids: selected_uids
        }, resolve);
      });
    }
    /**
     * Save the values of the state's `ajax_save_queue`
     *
     * This method executes an Ajax request to the server.
     *
     * @returns {Promise} of the Ajax Save Request
     */

  }, {
    key: "saveAjaxQueue",
    value: function saveAjaxQueue() {
      var uids;
      uids = Object.keys(this.state.ajax_save_queue);

      if (!(uids.length > 0)) {
        return false;
      }

      return this.ajax_save();
    }
    /**
     * Save a named value by UID to the ajax_save_queue
     *
     * If the column has the `autosave` property set,
     * the value will be send immediately to the server
     *
     * @param uid {string} UID of the object
     * @param name {string} name of the field
     * @param value {string} value to set
     * @param item {object} additional server data
     * @returns {bool} true
     */

  }, {
    key: "saveEditableField",
    value: function saveEditableField(uid, name, value, item) {
      var ajax_save_queue, column, me;

      if (listing_coffee_indexOf.call(item.allow_edit, name) < 0) {
        // Skip fields which are not editable
        return false;
      }

      console.debug("ListingController::saveEditableField: uid=".concat(uid, " name=").concat(name, " value=").concat(value));
      column = this.state.columns[name] || {}; // store the value in the ajax_save_queue

      if (column.ajax) {
        me = this;
        ajax_save_queue = this.state.ajax_save_queue;

        if (ajax_save_queue[uid] == null) {
          ajax_save_queue[uid] = {};
        }

        ajax_save_queue[uid][name] = value;
        this.setState({
          show_ajax_save: true,
          ajax_save_queue: ajax_save_queue
        }, function () {
          if (column.autosave) {
            return me.ajax_save();
          }
        });
      }

      return true;
    }
    /**
     * Update a named value by UID
     *
     * Saves the value and selects the row.
     *
     * @param uid {string} UID of the object
     * @param name {string} name of the field
     * @param value {string} value to set
     * @param item {object} additional server data
     * @returns {bool} true
     */

  }, {
    key: "updateEditableField",
    value: function updateEditableField(uid, name, value, item) {
      var me;
      console.debug("ListingController::updateEditableField: uid=".concat(uid, " name=").concat(name, " value=").concat(value)); // immediately fill the `ajax_save_queue` to show the "Save" button

      this.saveEditableField(uid, name, value, item); // Select the whole row if an editable field changed its value

      me = this;

      if (!this.is_uid_selected(uid)) {
        me = this;
        this.selectUID(uid, true).then(function () {
          // fetch all possible transitions
          if (me.state.fetch_transitions_on_select) {
            return me.fetch_transitions();
          }
        });
      }

      return true;
    }
    /**
     * Checks if the UID is selected.
     *
     * @param uid {string} UID of the object
     * @returns {bool} true if the UID is selected or false
     */

  }, {
    key: "is_uid_selected",
    value: function is_uid_selected(uid) {
      return listing_coffee_indexOf.call(this.state.selected_uids, uid) >= 0;
    }
    /**
     * Checks if the UID is selected.
     *
     * Throws an error if the ID was not found in the review_states list.
     *
     * @param id {string} ID of the review_state, e.g. "default" or "verified"
     * @returns {object} review_states item
     */

  }, {
    key: "get_review_state_by_id",
    value: function get_review_state_by_id(id) {
      var current, i, len, ref, review_state;
      current = null;
      ref = this.state.review_states; // review_states is the list of review_state items from the listing view

      for (i = 0, len = ref.length; i < len; i++) {
        review_state = ref[i];

        if (review_state.id === id) {
          current = review_state;
          break;
        }
      }

      if (!current) {
        console.warn("No review_state with ID '".concat(id, "' found"));
        return {
          // return the default column keys
          id: "default",
          columns: this.get_columns_keys()
        };
      }

      return current;
    }
    /**
     * Get the allowed columns of the current review state.
     *
     * This is defined in the view config by tge review_states list, e.g.:
     *
     *  review_states = [
     *      {
     *          "id": "default",
     *          "title": _t("All"),
     *          "contentFilter": {},
     *          "transitions": [],
     *          "custom_transitions": [],
     *          "columns": ["Title", "Descritpion"],
     *      }
     *  ]
     *
     * Usually the columns are defined as `self.columns.keys()`, which means that
     * they contain the same columns and order as defined in the `self.columns`
     * ordered dictionary.
     *
     * @returns {array} columns of column keys
     */

  }, {
    key: "get_allowed_column_keys",
    value: function get_allowed_column_keys() {
      var columns, keys, review_state, review_state_item; // get the current active state filter, e.g. "default"

      review_state = this.state.review_state; // get the defined review state item from the config

      review_state_item = this.get_review_state_by_id(review_state);
      keys = review_state_item.columns;

      if (!keys) {
        // return the keys of the columns object
        Object.keys(this.state.columns);
      } // filter out nonexisting fields


      columns = this.state.columns;
      keys = keys.filter(function (key) {
        return columns[key] !== void 0;
      });
      return keys;
    }
    /**
     * Calculate a common local storage key for this listing view.
     *
     * Note:
     * The browser view initially calculates the `listing_identifier`, which is
     * basically a concatenation of the listed items portal_type and view name.
     *
     * @returns key {string} with optional prefix and postfix
     */

  }, {
    key: "get_local_storage_key",
    value: function get_local_storage_key(prefix, postfix) {
      var key;
      key = this.listing_identifier;

      if (this.listing_identifier === void 0) {
        key = location.pathname;
      }

      if (prefix !== void 0) {
        key = prefix + key;
      }

      if (postfix !== void 0) {
        key = key + postfix;
      }

      return key;
    }
    /**
     * Set the columns definition to the local storage
     *
     * @param columns {array} Array of {"key":key, "toggle":toggle} records
     * @returns {bool} true
     */

  }, {
    key: "set_local_column_config",
    value: function set_local_column_config(columns) {
      var key, storage;
      console.debug("ListingController::set_local_column_config: columns=", columns);
      key = this.get_local_storage_key("columns-");
      storage = window.localStorage;
      storage.setItem(key, JSON.stringify(columns));
      return true;
    }
    /**
     * Returns column definitions of the local storage
     *
     * @returns columns {array} of {"key":key, "toggle":toggle} records
     */

  }, {
    key: "get_local_column_config",
    value: function get_local_column_config() {
      var columns, key, storage;
      key = this.get_local_storage_key("columns-");
      storage = window.localStorage;
      columns = storage.getItem(key);

      if (!columns) {
        return [];
      }

      try {
        return JSON.parse(columns);
      } catch (error) {
        return [];
      }
    }
    /**
     * Calculate the number of displayed columns
     *
     * This method also counts the selection column if present.
     *
     * @returns count {int} of displayed columns
     */

  }, {
    key: "get_columns_count",
    value: function get_columns_count() {
      var count, visible_columns; // get the current visible columns

      visible_columns = this.get_visible_columns();
      count = visible_columns.length; // add 1 if the select column is rendered

      if (this.state.show_select_column) {
        count += 1;
      }

      return count;
    }
    /**
     * Get the names of all expanded categories
     *
     * @returns {array} expanded category names
     */

  }, {
    key: "get_expanded_categories",
    value: function get_expanded_categories() {
      // return all categories if the flag is on
      if (this.state.expand_all_categories) {
        return [].concat(this.state.categories);
      } // expand all categories for searches


      if (this.state.filter) {
        return [].concat(this.state.categories);
      }

      return [];
    }
    /**
     * Create a mapping of UID -> folderitem
     *
     * @param folderitems {array} Array of folderitem records
     * @returns {object} of {UID:folderitem}
     */

  }, {
    key: "group_by_uid",
    value: function group_by_uid(folderitems) {
      var mapping;

      if (folderitems == null) {
        folderitems = this.state.folderitems;
      }

      mapping = {};
      folderitems.map(function (item, index) {
        var uid; // transposed cells have no uid, but a column_key

        uid = item.uid || item.column_key || index;
        return mapping[uid] = item;
      });
      return mapping;
    }
    /**
     * Calculate the count of current folderitems
     *
     * @returns {int} Number of folderitems
     */

  }, {
    key: "get_item_count",
    value: function get_item_count() {
      return this.state.folderitems.length;
    }
    /**
     * Toggles the loading animation on/off
     *
     * @param toggle {bool} true to show the loader, false otherwise
     * @returns {bool} toggle state
     */

  }, {
    key: "toggle_loader",
    value: function toggle_loader() {
      var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.setState({
        loading: toggle
      });
      return toggle;
    }
    /**
     * Set the state with optional folderitems fetch
     *
     * @param data {object} data to set to the state
     * @param fetch {bool} true to re-fetch the folderitems, false otherwise
     * @returns {bool} true
     */

  }, {
    key: "set_state",
    value: function set_state(data) {
      var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var me;
      me = this;
      this.setState(data, function () {
        if (fetch) {
          return me.fetch_folderitems();
        }
      });
      return true;
    }
    /**
     * Fetch the possible transitions of the selected UIDs
     *
     * @returns {Promise} for the API fetch transitions call
     */

  }, {
    key: "fetch_transitions",
    value: function fetch_transitions() {
      var me, options, promise, selected_uids;
      selected_uids = this.state.selected_uids; // empty the possible transitions if no UID is selected

      if (selected_uids.length === 0) {
        this.setState({
          transitions: []
        });
        return;
      } // turn loader on


      this.toggle_loader(true); // get the request options

      options = this.getRequestOptions(); // update the location hash

      this.update_location_hash(options); // fetch the transitions from the server

      promise = this.api.fetch_transitions(options);
      me = this;
      promise.then(function (data) {
        // data looks like this: {"transitions": [...]}
        return me.setState(data, function () {
          console.debug("ListingController::fetch_transitions: NEW STATE=", me.state); // turn loader off

          return me.toggle_loader(false);
        });
      });
      return promise;
    }
    /*
     * Fetch folderitems from the server
     *
     * @returns {Promise} for the API fetch folderitems call
     */

  }, {
    key: "fetch_folderitems",
    value: function fetch_folderitems() {
      var me, options, promise; // turn loader on

      this.toggle_loader(true); // get the request options

      options = this.getRequestOptions(); // update the location hash

      this.update_location_hash(options); // fetch the folderitems from the server

      promise = this.api.fetch_folderitems(options);
      me = this;
      promise.then(function (data) {
        var category, existing_folderitems, folderitem, i, len, new_categories, new_folderitems, ref, uid;
        console.debug("ListingController::fetch_folderitems: GOT RESPONSE=", data); // N.B. Always keep selected folderitems, because otherwise modified fields
        //      won't get send to the server on form submit.
        // This is needed e.g. in "Manage Analyses" when the users searches for
        // analyses to add. Keeping only the UID is there not sufficient, because
        //      we would loose the Min/Max values.
        // TODO refactor this logic
        // -------------------------------8<--------------------------------------
        // existing folderitems from the state as a UID -> folderitem mapping

        existing_folderitems = me.group_by_uid(me.state.folderitems); // new folderitems from the server as a UID -> folderitem mapping

        new_folderitems = me.group_by_uid(data.folderitems); // new categories from the server

        new_categories = data.categories || [];
        ref = me.state.selected_uids; // keep selected and potentially modified folderitems in the table

        for (i = 0, len = ref.length; i < len; i++) {
          uid = ref[i]; // inject missing folderitems into the server sent folderitems

          if (!(uid in new_folderitems)) {
            // get the missing folderitem from the current state
            folderitem = existing_folderitems[uid];

            if (!folderitem) {
              // skip if the selected UID is not in the existing folderitems
              // -> happens for transposed WS folderitems, e.g.: {0: {uid: ...}, 1: {uid: ...}}
              continue;
            } // inject it to the new folderitems list from the server


            new_folderitems[uid] = existing_folderitems[uid]; // also append the category if it is missing

            category = folderitem.category;

            if (category && listing_coffee_indexOf.call(new_categories, category) < 0) {
              new_categories.push(category); // XXX unfortunately any sortKey sorting of the category get lost here

              new_categories.sort();
            }
          }
        } // write back new categories


        data.categories = new_categories; // write back new folderitems

        data.folderitems = Object.values(new_folderitems); // -------------------------------->8-------------------------------------

        return me.setState(data, function () {
          // calculate the new expanded categories and the internal folderitems mapping
          me.setState({
            expanded_categories: me.get_expanded_categories()
          }, function () {
            return console.debug("ListingController::fetch_folderitems: NEW STATE=", me.state);
          }); // turn loader off

          return me.toggle_loader(false);
        });
      });
      return promise;
    }
    /*
     * Fetch child-folderitems from the server
     *
     * @param {parent_uid} UID of the parent, e.g. the primary partition
     * @param {child_uids} UIDs of the children (partitions) to load
     * @returns {Promise} for the API fetch folderitems call
     */

  }, {
    key: "fetch_children",
    value: function fetch_children() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          parent_uid = _ref.parent_uid,
          child_uids = _ref.child_uids;

      var by_uid, folderitem, me, promise; // turn loader on

      this.toggle_loader(true); // lookup child_uids from the folderitem

      if (!child_uids) {
        by_uid = this.group_by_uid();
        child_uids = [];

        if (parent_uid in by_uid) {
          folderitem = by_uid[parent_uid];
          child_uids = folderitem.children || [];
        }
      } // fetch the children from the server


      promise = this.api.fetch_children({
        parent_uid: parent_uid,
        child_uids: child_uids
      });
      me = this;
      promise.then(function (data) {
        console.debug("ListingController::fetch_children: GOT RESPONSE=", data); // turn loader off

        return me.toggle_loader(false);
      });
      return promise;
    }
    /*
     * Checks if the top toolbar should be loaded or not.
     *
     * @returns {bool} true to render the top toolbar, false otherwise
     */

  }, {
    key: "render_toolbar_top",
    value: function render_toolbar_top() {
      if (this.state.show_more) {
        return true;
      }

      if (this.state.show_search) {
        return true;
      }

      if (this.state.review_states.length > 1) {
        return true;
      }

      return false;
    }
    /*
     * Send the `ajax_save_queue` to the server
     *
     * @returns {Promise} of the API set_fields call
     */

  }, {
    key: "ajax_save",
    value: function ajax_save() {
      var me, promise;
      console.debug("ListingController::ajax_save:ajax_save_queue=", this.state.ajax_save_queue); // turn loader on

      this.toggle_loader(true);
      promise = this.api.set_fields({
        save_queue: this.state.ajax_save_queue
      });
      me = this;
      promise.then(function (data) {
        var folderitems, uids;
        console.debug("ListingController::ajax_save: GOT DATA=", data); // uids of the updated objects

        uids = data.uids || []; // ensure that all updated UIDs are also selected

        uids.map(function (uid, index) {
          return me.selectUID(uid, true);
        }); // folderitems of the updated objects and their dependencies

        folderitems = data.folderitems || []; // update the existing folderitems

        me.update_existing_folderitems_with(folderitems); // fetch all possible transitions

        if (me.state.fetch_transitions_on_select) {
          me.fetch_transitions();
        } // empty the ajax save queue and hide the save button


        me.setState({
          show_ajax_save: false,
          ajax_save_queue: {}
        }); // toggle loader off

        return me.toggle_loader(false);
      });
      return promise;
    }
    /**
     * Update existing folderitems
     *
     * This is done for performance increase to avoid a complete re-rendering
     *
     * @param folderitems {array} Array of folderitems records from the view
     */

  }, {
    key: "update_existing_folderitems_with",
    value: function update_existing_folderitems_with(folderitems) {
      var existing_folderitems, folderitem, key, new_folderitems, new_item, old_item, uid, updated_folderitems, value;
      console.log("ListingController::update_existing_folderitems_with: ", folderitems); // These folderitems get set to the state

      new_folderitems = []; // The updated items from the server

      updated_folderitems = this.group_by_uid(folderitems); // The current folderitems in our @state

      existing_folderitems = this.group_by_uid(this.state.folderitems); // We iterate through the existing folderitems and check if the items was updated.

      for (uid in existing_folderitems) {
        folderitem = existing_folderitems[uid]; // shallow copy of the existing folderitem in @state.folderitems

        old_item = Object.assign({}, folderitem);

        if (!(uid in updated_folderitems)) {
          // nothing changed -> keep the old folderitem
          new_folderitems.push(old_item);
        } else {
          // shallow copy of the updated folderitem from the server
          new_item = Object.assign({}, updated_folderitems[uid]); // keep non-updated properties

          for (key in old_item) {
            value = old_item[key]; // XXX Workaround for Worksheet classic/transposed views
            // -> Always keep those values from the original folderitem

            if (key === "rowspan" || key === "colspan" || key === "skip") {
              new_item[key] = old_item[key];
            }

            if (!new_item.hasOwnProperty(key)) {
              new_item[key] = old_item[key];
            }
          } // add the new folderitem


          new_folderitems.push(new_item);
        }
      } // updated the state with the new folderitems


      return this.setState({
        folderitems: new_folderitems
      });
    }
    /**
     * Update the location hash with the given object
     *
     */

  }, {
    key: "update_location_hash",
    value: function update_location_hash(options) {
      var allowed, hash, key, name, params, value;

      if (options == null) {
        options = {};
      }

      params = [];
      allowed = ["filter", "pagesize", "review_state", "sort_on", "sort_order"];

      for (key in options) {
        value = options[key];

        if (allowed.indexOf(key) === -1) {
          continue;
        }

        name = this.api.to_form_name(key);
        params = params.concat("".concat(name, "=").concat(value));
      }

      hash = params.join("&");
      return location.hash = "#?".concat(hash);
    }
    /**
     * EVENT HANDLERS
     *
     * N.B. All `event` objects are ReactJS events
     *      https://reactjs.org/docs/handling-events.html
     */

  }, {
    key: "on_column_config_click",
    value: function on_column_config_click(event) {
      var toggle;
      event.preventDefault();

      if (!this.state.show_column_toggles) {
        return;
      }

      toggle = !this.state.show_column_config;
      return this.setState({
        show_column_config: toggle
      });
    }
  }, {
    key: "on_select_checkbox_checked",
    value: function on_select_checkbox_checked(event) {
      var checked, el, me, uid;
      console.debug("°°° ListingController::on_select_checkbox_checked");
      me = this;
      el = event.currentTarget;
      uid = el.value;
      checked = el.checked;
      return this.selectUID(uid, checked).then(function () {
        if (me.state.fetch_transitions_on_select) {
          // fetch all possible transitions
          return me.fetch_transitions();
        }
      });
    }
  }, {
    key: "on_api_error",
    value: function on_api_error(response) {
      var _this3 = this;

      this.toggle_loader(false);
      console.debug("°°° ListingController::on_api_error: GOT AN ERROR RESPONSE: ", response);
      response.text().then(function (data) {
        var level, message, title;
        title = _t("Oops, an error occured! 🙈");
        message = _t("The server responded with the status ".concat(response.status, ": ").concat(response.statusText));
        return _this3.addMessage(title, message, null, level = "danger");
      });
      return response;
    }
  }, {
    key: "on_reload",
    value: function on_reload(event) {
      console.debug("°°° ListingController::on_reload:event=", event);
      return this.fetch_folderitems();
    }
  }, {
    key: "on_popstate",
    value: function on_popstate(event) {
      var idx, key, name, param, params, reload, value;
      console.debug("°°° ListingController::on_popstate:event=", event);
      params = this.api.parse_hash(location.hash);

      for (idx in params) {
        param = params[idx];

        var _param$split = param.split("=");

        var _param$split2 = _slicedToArray(_param$split, 2);

        key = _param$split2[0];
        value = _param$split2[1];

        // skip parameters that does not belong to our listing
        if (!key.startsWith(this.form_id)) {
          continue;
        }

        name = key.replace("".concat(this.form_id, "_"), "");

        if (!(name in this.state)) {
          continue;
        } // workaround for string/number comparison


        if (name === "pagesize") {
          value = parseInt(value);
        }

        if (value !== this.state[name]) {
          this.state[name] = value;
          reload = true;
        }
      }

      if (reload) {
        console.debug("+++ RELOAD after popstate +++");
        return this.fetch_folderitems();
      }
    }
    /**
     * Renders the listing table
     * @returns {JSX}
     */

  }, {
    key: "render",
    value: function render() {
      var columns, columns_count, columns_order, item_count, render_toolbar_top, visible_columns;
      console.debug("*** RENDER ***"); // computed properties at render time

      columns = this.get_columns();
      columns_order = this.get_columns_order();
      columns_count = this.get_columns_count();
      visible_columns = this.get_visible_columns();
      item_count = this.get_item_count();
      render_toolbar_top = this.render_toolbar_top();
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "listing-container"
      }, /*#__PURE__*/external_React_default().createElement(Messages_coffee, {
        on_dismiss_message: this.dismissMessage,
        id: "messages",
        className: "messages",
        messages: this.state.messages
      }), this.state.loading && /*#__PURE__*/external_React_default().createElement("div", {
        id: "table-overlay"
      }), !render_toolbar_top && this.state.loading && /*#__PURE__*/external_React_default().createElement(Loader_coffee, {
        loading: this.state.loading
      }), render_toolbar_top && /*#__PURE__*/external_React_default().createElement("div", {
        className: "row top-toolbar"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-8"
      }, /*#__PURE__*/external_React_default().createElement(FilterBar_coffee, {
        className: "filterbar nav nav-pills",
        on_filter_button_clicked: this.filterByState,
        review_state: this.state.review_state,
        review_states: this.state.review_states
      })), /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-1 text-right"
      }, /*#__PURE__*/external_React_default().createElement(Loader_coffee, {
        loading: this.state.loading
      })), /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-3 text-right"
      }, /*#__PURE__*/external_React_default().createElement(SearchBox_coffee, {
        show_search: this.state.show_search,
        on_search: this.filterBySearchterm,
        filter: this.state.filter,
        placeholder: _t("Search")
      }))), /*#__PURE__*/external_React_default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-12 table-responsive"
      }, this.state.show_column_toggles && /*#__PURE__*/external_React_default().createElement("a", {
        href: "#",
        onClick: this.on_column_config_click,
        className: "pull-right"
      }, /*#__PURE__*/external_React_default().createElement("i", {
        className: "fas fa-ellipsis-h"
      })), this.state.show_column_config && /*#__PURE__*/external_React_default().createElement(TableColumnConfig_coffee, {
        title: _t("Configure Table Columns"),
        description: _t("Click to toggle the visibility or drag&drop to change the order"),
        columns: columns,
        columns_order: columns_order,
        on_column_toggle_click: this.toggleColumn,
        on_columns_order_change: this.setColumnsOrder
      }), /*#__PURE__*/external_React_default().createElement(Table_coffee, {
        className: "contentstable table table-condensed table-hover small",
        allow_edit: this.state.allow_edit,
        on_header_column_click: this.sortBy,
        on_select_checkbox_checked: this.on_select_checkbox_checked,
        on_context_menu: this.on_column_config_click,
        sort_on: this.state.sort_on,
        sort_order: this.state.sort_order,
        catalog_indexes: this.state.catalog_indexes,
        catalog_columns: this.state.catalog_columns,
        sortable_columns: this.state.sortable_columns,
        columns: columns,
        columns_count: columns_count,
        review_state: this.state.review_state,
        visible_columns: visible_columns,
        review_states: this.state.review_states,
        folderitems: this.state.folderitems,
        children: this.state.children,
        selected_uids: this.state.selected_uids,
        select_checkbox_name: this.state.select_checkbox_name,
        show_select_column: this.state.show_select_column,
        show_select_all_checkbox: this.state.show_select_all_checkbox,
        categories: this.state.categories,
        expanded_categories: this.state.expanded_categories,
        expanded_rows: this.state.expanded_rows,
        expanded_remarks: this.state.expanded_remarks,
        show_categories: this.state.show_categories,
        on_category_click: this.toggleCategory,
        on_row_expand_click: this.toggleRow,
        on_remarks_expand_click: this.toggleRemarks,
        filter: this.state.filter,
        update_editable_field: this.updateEditableField,
        save_editable_field: this.saveEditableField
      }))), this.state.show_table_footer && /*#__PURE__*/external_React_default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-8"
      }, /*#__PURE__*/external_React_default().createElement(ButtonBar_coffee, {
        className: "buttonbar nav nav-pills",
        show_ajax_save: this.state.show_ajax_save,
        ajax_save_button_title: _t("Save"),
        on_transition_button_click: this.doAction,
        on_ajax_save_button_click: this.saveAjaxQueue,
        selected_uids: this.state.selected_uids,
        show_select_column: this.state.show_select_column,
        transitions: this.state.transitions,
        review_state: this.get_review_state_by_id(this.state.review_state)
      })), /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-1 text-right"
      }, /*#__PURE__*/external_React_default().createElement(Loader_coffee, {
        loading: this.state.loading
      })), /*#__PURE__*/external_React_default().createElement("div", {
        className: "col-sm-3 text-right"
      }, /*#__PURE__*/external_React_default().createElement(Pagination_coffee, {
        id: "pagination",
        className: "pagination-controls",
        total: this.state.total,
        show_more_button_title: _t("Show more"),
        onShowMore: this.showMore,
        show_more: this.state.show_more,
        count: item_count,
        pagesize: this.state.pagesize,
        export_button_title: _t("Export"),
        show_export: this.state.show_export,
        onExport: this["export"]
      }))));
    }
  }]);

  return ListingController;
}((external_React_default()).Component);
})();

/******/ })()
;