module myFirstModule {
    export class Startup {
        public static hello(): string {
            return "Hello World!!!!";
        }
    };

    document.body.innerHTML = Startup.hello();
}