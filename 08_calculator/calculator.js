const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
  const eachNums = [...nums];
  if (!eachNums || !eachNums.length) {
    return 0;
  } else {
    return eachNums.reduce((x, y) => x + y);
  }
  // const eachNum = eachNums.reduce(function(obj, num) {

  // });
	
};

const multiply = function(nums) {

  const eachNums = [...nums];
  if (!eachNums || !eachNums.length) {
    return 0;
  } else {
    return eachNums.reduce((x, y) => x * y);
  }

};

const power = function(x, y) {
  return x ** y;
	
};

const factorial = function(x) {

  if (x == 0) {
    return 1;
  } else {

    let count = 1;
    for (let i = 1; i<= x; i++) {
      count *= i;
    }
    
    return count;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
