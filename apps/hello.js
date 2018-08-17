class Hello extends Application {

    process(args) {
        let welcome = ["Cześć", "Dzień dobry!", "Witam", "Hi there!", "What's up?", "Good morning", "おはよう"];
        printToOutput(welcome[Math.floor(Math.random() * welcome.length)]);
    }
}