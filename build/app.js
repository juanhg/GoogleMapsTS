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
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/google.maps.d.ts" />
	/// <reference path="./map/Map.ts" />
	"use strict";
	var Map_ts_1 = __webpack_require__(1);
	var PlacesSearcher_1 = __webpack_require__(3);
	var GoogleMapLoader_1 = __webpack_require__(4);
	var GoogleMapsTS;
	(function (GoogleMapsTS) {
	    var map;
	    var fromSearcher;
	    var toSearcher;
	    var onPlacesChanged = function (places, searchBox, searchBoxElement) {
	        map.updateRoute();
	    };
	    window.onload = function () {
	        var callbackName = 'onGoogleMapAPIReady';
	        window[callbackName] = function () {
	            var mapDiv = document.getElementById('map');
	            var fromInput = document.getElementById('fromInput');
	            var toInput = document.getElementById('toInput');
	            map = new Map_ts_1.Map(mapDiv);
	            this.fromSearcher = new PlacesSearcher_1.PlacesSearcher(fromInput, onPlacesChanged.bind(this));
	            this.toSearcher = new PlacesSearcher_1.PlacesSearcher(toInput, onPlacesChanged.bind(this));
	        };
	        GoogleMapLoader_1.GoogleMapLoader.LoadAPI(callbackName);
	    };
	})(GoogleMapsTS || (GoogleMapsTS = {}));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="Route.ts" />
	/// <reference path="GoogleMapLoader.ts" />
	/// <reference path="../../typings/google.maps.d.ts" />
	"use strict";
	var Route_ts_1 = __webpack_require__(2);
	var Map = (function () {
	    function Map(mapDiv, fromSearchElement, toSearchElement) {
	        this.directionRendererOptions = {
	            draggable: true
	        };
	        this.mapDiv = mapDiv;
	        this.fromSearchElement = fromSearchElement ? fromSearchElement : document.getElementById('fromInput');
	        this.toSearchElement = toSearchElement ? toSearchElement : document.getElementById('toInput');
	        this.route = new Route_ts_1.Route();
	        this.directionRendererOptions = {
	            draggable: true
	        };
	        this.map = new google.maps.Map(this.mapDiv, {
	            center: { lat: -34.397, lng: 150.644 },
	            zoom: 8
	        });
	        this.directionRendererOptions.map = this.map;
	        this.directionRenderer = new google.maps.DirectionsRenderer(this.directionRendererOptions);
	        this.directionsService = new google.maps.DirectionsService();
	    }
	    Map.prototype.updateDirectionRenderer = function () {
	        this.directionRenderer.setMap(null);
	        this.directionRenderer = new google.maps.DirectionsRenderer(this.directionRendererOptions);
	    };
	    Map.prototype.updateRoute = function () {
	        var me = this;
	        this.directionsService.route({
	            origin: me.fromSearchElement.value,
	            destination: me.toSearchElement.value,
	            travelMode: google.maps.TravelMode.DRIVING
	        }, function (response, status) {
	            if (status === google.maps.DirectionsStatus.OK)
	                me.directionRenderer.setDirections(response);
	        });
	    };
	    return Map;
	}());
	exports.Map = Map;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/// <reference path="Location.ts" />
	"use strict";
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
	exports.Route = Route;
	;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var PlacesSearcher = (function () {
	    function PlacesSearcher(input, callback) {
	        this.searchBoxElement = input;
	        this.searchBox = new google.maps.places.SearchBox(input);
	        this.callback = callback;
	        this.searchBox.addListener('places_changed', this.onPlacesChanged.bind(this));
	    }
	    PlacesSearcher.prototype.onPlacesChanged = function () {
	        var places = this.searchBox.getPlaces();
	        if (places.length == 0) {
	            return;
	        }
	        this.callback(places, this.searchBox, this.searchBoxElement);
	    };
	    return PlacesSearcher;
	}());
	exports.PlacesSearcher = PlacesSearcher;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var GoogleMapLoader = (function () {
	    function GoogleMapLoader() {
	    }
	    GoogleMapLoader.LoadAPI = function (callback) {
	        var script = document.createElement("script");
	        script.type = "text/javascript";
	        document.getElementsByTagName("head")[0].appendChild(script);
	        script.src = 'http://maps.googleapis.com/maps/api/js?v=3&sensor=false&libraries=places&callback=' + callback;
	    };
	    return GoogleMapLoader;
	}());
	exports.GoogleMapLoader = GoogleMapLoader;


/***/ }
/******/ ]);