/// <reference path="Route.ts" />
/// <reference path="GoogleMapLoader.ts" />
/// <reference path="../../typings/google.maps.d.ts" />

import {Route} from './Route.ts';

export class Map {
    private map: google.maps.Map;
    private route: Route;
    private mapDiv: Element;
    private directionRenderer: google.maps.DirectionsRenderer;
    private directionsService: google.maps.DirectionsService;
    private directionRendererOptions: google.maps.DirectionsRendererOptions ={
        draggable: true
    }

    private fromSearchElement: HTMLInputElement;
    private toSearchElement: HTMLInputElement;

    constructor(mapDiv: Element, fromSearchElement?: HTMLInputElement, toSearchElement?: HTMLInputElement) {
        this.mapDiv = mapDiv;
        this.fromSearchElement = fromSearchElement ? fromSearchElement : <HTMLInputElement>document.getElementById('fromInput');
        this.toSearchElement = toSearchElement ? toSearchElement : <HTMLInputElement>document.getElementById('toInput');

        this.route = new Route();

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

    private updateDirectionRenderer(){
        this.directionRenderer.setMap(null);
        this.directionRenderer = new google.maps.DirectionsRenderer(this.directionRendererOptions);
    }

    public updateRoute(){
        var me = this;

        this.directionsService.route({
          origin: me.fromSearchElement.value,
          destination: me.toSearchElement.value,
          travelMode: google.maps.TravelMode.DRIVING
        }, function(response, status) {
          if (status === google.maps.DirectionsStatus.OK) 
            me.directionRenderer.setDirections(response);
        });
    } 
}
