class Help extends Application {
    process(args) {
        printToOutput("Help list:");
        for (i = 0; i < apps.length; i++){
            printToOutput(" - " + apps[i].appname);
        }
    }
}