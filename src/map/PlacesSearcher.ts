import {Map} from './Map.ts';

interface onPlacesChangedCallbackInterface {
    (places: google.maps.places.PlaceResult[],
    searchBox: PlacesSearcher,
    searchBoxElement: HTMLInputElement): void
}

export class PlacesSearcher {

    searchBox: google.maps.places.SearchBox;
    searchBoxElement: HTMLInputElement;
    callback: Function;

    constructor(input: HTMLInputElement, callback: Function) {
        this.searchBoxElement = input;
        this.searchBox = new google.maps.places.SearchBox(input);
        this.callback = callback;
        this.searchBox.addListener('places_changed', this.onPlacesChanged.bind(this));
    }

    onPlacesChanged() {
        var places = this.searchBox.getPlaces();
        if (places.length == 0) {
            return;
        }

        this.callback(places, this.searchBox, this.searchBoxElement);
    }
}