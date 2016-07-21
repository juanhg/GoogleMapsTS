/// <reference path="../typings/google.maps.d.ts" />
/// <reference path="./map/Map.ts" />

import {Map} from './map/Map.ts';
import {PlacesSearcher} from './map/PlacesSearcher';
import {GoogleMapLoader} from './map/GoogleMapLoader';

namespace GoogleMapsTS {

    var map: Map;
    var fromSearcher: PlacesSearcher;
    var toSearcher: PlacesSearcher;
    
    var onPlacesChanged = function (places: google.maps.places.PlaceResult[],
        searchBox: PlacesSearcher,
        searchBoxElement: HTMLInputElement) {
        map.updateRoute();
    };


    window.onload = function () {
        var callbackName = 'onGoogleMapAPIReady';

        window[callbackName] = function () {
            var mapDiv = document.getElementById('map');
            var fromInput = <HTMLInputElement>document.getElementById('fromInput');
            var toInput = <HTMLInputElement>document.getElementById('toInput');

            map = new Map(mapDiv);
            this.fromSearcher = new PlacesSearcher(fromInput, onPlacesChanged.bind(this));
            this.toSearcher = new PlacesSearcher(toInput, onPlacesChanged.bind(this));
        };

        GoogleMapLoader.LoadAPI(callbackName);
    }
}


