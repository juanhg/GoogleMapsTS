/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/// <reference path="../typings/google.maps.d.ts" />
	var GoogleMapsTS;
	(function (GoogleMapsTS) {
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
	    var Location = (function () {
	        function Location(name, lat, lng) {
	            this.name = name;
	            this.lat = lat;
	            this.lng = lng;
	        }
	        return Location;
	    }());
	    GoogleMapsTS.Location = Location;
	    ;
	    var Route = (function () {
	        function Route() {
	            this.locations = new Array(2);
	        }
	        Route.prototype.count = function () {
	            return this.locations.length;
	        };
	        Route.prototype.getFromLocation = function () {
	            return this.locations[0];
	        };
	        Route.prototype.getToLocation = function () {
	            var toIndex = this.count() - 1;
	            return this.locations[toIndex];
	        };
	        Route.prototype.getViaLocations = function () {
	            return [];
	        };
	        return Route;
	    }());
	    GoogleMapsTS.Route = Route;
	    ;
	    var Map = (function () {
	        function Map(mapDiv) {
	            this.callbackName = 'onGoogleMapReady';
	            this.mapDiv = mapDiv;
	            window[this.callbackName] = this.onGoogleMapReady.bind(this);
	            GoogleMapLoader.LoadAPI(this.callbackName);
	        }
	        Map.prototype.onGoogleMapReady = function () {
	            var map = new google.maps.Map(this.mapDiv, {
	                center: { lat: -34.397, lng: 150.644 },
	                zoom: 8
	            });
	        };
	        return Map;
	    }());
	    GoogleMapsTS.Map = Map;
	    window.onload = function () {
	        var mapDiv = document.getElementById('map');
	        var map = new Map(mapDiv);
	    };
	})(GoogleMapsTS || (GoogleMapsTS = {}));


/***/ }
/******/ ]);