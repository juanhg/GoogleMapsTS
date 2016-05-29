var myFirstModule;
(function (myFirstModule) {
    var Startup = (function () {
        function Startup() {
        }
        Startup.hello = function () {
            return "Hello World!!";
        };
        return Startup;
    }());
    myFirstModule.Startup = Startup;
    ;
    document.body.innerHTML = Startup.hello();
})(myFirstModule || (myFirstModule = {}));
