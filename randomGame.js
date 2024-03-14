function randomGame() {
    let counter = 0;
    let intervalId = setInterval(() => {
        var num = Math.random();
        counter++;
        if (num <= 0.75) {
            clearInterval(intervalId);
            console.log(counter + " attempts.");
        }
    }, 1000);
}

randomGame();
