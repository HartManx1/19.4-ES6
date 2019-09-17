'use strict';

//1

var string1 = 'Hello';
var string2 = 'World!';

var sayHello = string1 + ' ' + string2;
console.log('' + sayHello);

//2

var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};
console.log(multiply(2));

//3

var average = function average() {
  for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }

  return data.reduce(function (a, b) {
    return a + b;
  }) / data.length;
};
console.log(average(1, 5, 12, 18));

//4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

//5

var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = data[2],
    lastname = data[4];


console.log(firstname + ' ' + lastname);
