/// <reference path="Route.ts" />
/// <reference path="GoogleMapLoader.ts" />
/// <reference path="../../typings/google.maps.d.ts" />

import {Route} from './Route.ts';

export class Map {
    private route: Route;
    private mapDiv: Element;

    constructor(mapDiv: Element) {
        this.mapDiv = mapDiv;
        this.route = new Route();
            var map = new google.maps.Map(this.mapDiv, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });        
    }
}
