var terminalin = "";
var inputavailable = true;
var apps = [new Startup("startup"), new Help("help")];

window.addEventListener("keydown", function (event) {
    if (inputavailable) {
        if (event.key.length == 1) {
            terminalin = terminalin + event.key;
        }

        if (event.key === "Backspace") {
            terminalin = terminalin.slice(0, terminalin.length - 1);
        }

        if (event.key === "Enter") {
            printToOutput("> " + terminalin);
            interprete(terminalin);
            terminalin = "";
        }

        $('#inputfield').html("> " + terminalin);
    }
    event.preventDefault();
}, true);

function printToOutput(output) {
    $('#outputfield').html($('#outputfield').html() + "<pre>" + output + "</pre>");
    $('#output').scrollTop = $('#output').scrollHeight;
}

function interprete(input) {
    let done = false;
    for (i = 0; i < apps.length; i++) {
        done = apps[i].invoke(input.split(" "));
        if (done){
            break;
        }
    }
    if (!done) {
        printToOutput("Unknown command.")
    }
}

$( window ).on( "load", function() {
    apps[0].invoke(["startup"]);
});