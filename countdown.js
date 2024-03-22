function countDown(num) {
    let i = num;
    const countdownInterval = setInterval(() => {
        console.log(i);
        i--;
        if (i === 0) {
            console.log("Done!");
            clearInterval(countdownInterval);
        }
    }, 1000);
}
