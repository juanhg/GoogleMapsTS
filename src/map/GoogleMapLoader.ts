export class GoogleMapLoader {
    static LoadAPI(callback): void {
        var script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = 'http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=' + callback;
    }
}
