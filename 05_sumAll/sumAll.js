const sumAll = function(startNum, endNum) {
    
    let sum = 0;
    if (startNum < 0 || endNum < 0) {
        sum = "ERROR";
    } else if (typeof endNum === 'string' || typeof startNum === 'string') {
        sum = "ERROR";
    } else if (startNum <= endNum) {

        for (let i = startNum; i <= endNum; i++) {
            sum += i;
        }
    } else if (endNum < startNum) {
        for (let i = endNum; i <= startNum; i++) {
            sum += i;
        }
    } else if (isNaN(startNum) || isNaN(endNum)) {
        sum = "ERROR";
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
