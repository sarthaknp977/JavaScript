onmessage = function (event) {
    const numbers = event.data;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    postMessage(sum);
}
