/// <reference path="../typings/google.maps.d.ts" />
/// <reference path="./map/Map.ts" />

import {Map} from './map/Map.ts';

window.onload = function () {
    var mapDiv = document.getElementById('map');
    var map = new Map(mapDiv);
}