/// <reference path="Location.ts" />

import {Location} from './Location.ts';

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
