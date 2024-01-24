function writeCards(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = `Thank you, ${arr[i]}, for the wonderful surprise gift!`;
    }
    return result;
};


function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
};
