const palindromes = function (string) {

    const lowString = string.toLowerCase(); //Make everything lower case
    let alpha = lowString.replace(/\W/g, "");   //Check for non-alphanumeric values

    const symbols = alpha.split("");    //Create an array with each item

    const reversed = symbols.reverse();

    const joint = reversed.join("");

    if (alpha == joint) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
