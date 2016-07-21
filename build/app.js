/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/google.maps.d.ts" />
	/// <reference path="./map/Map.ts" />
	"use strict";
	var Map_ts_1 = __webpack_require__(1);
	window.onload = function () {
	    var mapDiv = document.getElementById('map');
	    var map = new Map_ts_1.Map(mapDiv);
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="Route.ts" />
	/// <reference path="GoogleMapLoader.ts" />
	/// <reference path="../../typings/google.maps.d.ts" />
	"use strict";
	var GoogleMapLoader_ts_1 = __webpack_require__(2);
	var Map = (function () {
	    function Map(mapDiv) {
	        this.callbackName = 'onGoogleMapReady';
	        this.mapDiv = mapDiv;
	        window[this.callbackName] = this.onGoogleMapReady.bind(this);
	        GoogleMapLoader_ts_1.GoogleMapLoader.LoadAPI(this.callbackName);
	    }
	    Map.prototype.onGoogleMapReady = function () {
	        var map = new google.maps.Map(this.mapDiv, {
	            center: { lat: -34.397, lng: 150.644 },
	            zoom: 8
	        });
	    };
	    return Map;
	}());
	exports.Map = Map;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var GoogleMapLoader = (function () {
	    function GoogleMapLoader() {
	    }
	    GoogleMapLoader.LoadAPI = function (callback) {
	        var script = document.createElement("script");
	        script.type = "text/javascript";
	        document.getElementsByTagName("head")[0].appendChild(script);
	        script.src = 'http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=' + callback;
	    };
	    return GoogleMapLoader;
	}());
	exports.GoogleMapLoader = GoogleMapLoader;


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map