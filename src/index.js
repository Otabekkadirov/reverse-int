module.exports = function reverse(number) {
    if (number < 0) {
        number = number * -1;
    }
    let reversed = 0;
    while (number > 0) {
        reversed = reversed * 10 + (number % 10);
        number = Math.floor(number / 10);
    }
    return reversed;
};
