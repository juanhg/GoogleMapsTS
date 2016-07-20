/// <reference path="../typings/google.maps.d.ts" />
module GoogleMapsTS {

    class GoogleMapLoader {
        static LoadAPI(callback): void {
            var script = document.createElement("script");
            script.type = "text/javascript";
            document.getElementsByTagName("head")[0].appendChild(script);
            script.src = 'http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=' + callback;
        }
    }

    export class Location {
        name: string;
        lat: number;
        lng: number;

        constructor(name: string, lat: number, lng: number) {
            this.name = name;
            this.lat = lat;
            this.lng = lng;
        }
    };

    export class Route {

        private locations: Array<Location>;

        constructor() {
            this.locations = new Array<Location>(2);
        }

        count(): number {
            return this.locations.length;
        }

        getFromLocation(): Location {
            return this.locations[0];
        }

        getToLocation(): Location {
            var toIndex = this.count() - 1;
            return this.locations[toIndex];
        }

        getViaLocations(): Array<Location> {
            return [];
        }
    };

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


    window.onload = function () {
        var mapDiv = document.getElementById('map');
        var map = new Map(mapDiv);
    }
}