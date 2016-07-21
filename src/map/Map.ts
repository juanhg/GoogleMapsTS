/// <reference path="Route.ts" />
/// <reference path="GoogleMapLoader.ts" />
/// <reference path="../../typings/google.maps.d.ts" />

import {GoogleMapLoader} from './GoogleMapLoader.ts';
import {Route} from './Route.ts';

export class Map {
    private route: Route;
    private callbackName = 'onGoogleMapReady';
    private mapDiv: Element;

    constructor(mapDiv: Element) {
        this.mapDiv = mapDiv;
        window[this.callbackName] = this.onGoogleMapReady.bind(this);
        GoogleMapLoader.LoadAPI(this.callbackName);
    }

    onGoogleMapReady() {
        var map = new google.maps.Map(this.mapDiv, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
}
