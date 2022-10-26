const fibonacci = function(x) {

    const num = parseInt(x);
    const series = [];

    let prev = 0;
    let current = 1;
    let next;
    for (let i = 0; i <= num; i++) {
        series.push(prev);
        next = prev + current;
        prev = current;
        current = next;
    }

    if (x < 0) {
        return "OOPS";
    }

    return series[num];
};

// Do not edit below this line
module.exports = fibonacci;
