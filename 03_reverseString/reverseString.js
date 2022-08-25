const reverseString = function(string) {
    let words = string;
    const stringArray = words.split("");
    let length = stringArray.length;
    const reverseStringArray = [];

    for (let i = 0; i <= length; i++) {

        reverseStringArray.push(stringArray[length - i]);
    }
    return reverseStringArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
