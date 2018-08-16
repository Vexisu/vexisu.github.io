class Application {

    constructor(name){
        this.appname = name;
    }

    invoke(args) {
        if (args[0] == this.appname) {
            this.process(args);
            return true;
        }
        return false;
    }

    process(args) {
    }
}