'use strict';

function fibonacciSeries (n) {
	var result = [];
	for (var i = 0; i <= n; i++) {
		result.push(Fib(i));
	}
	return result;
}
function Fib (i) {
	if (i < 2) {
		return (i === 0) ? 0 : 1;
	}
	else {
		return Fib(i-1)+Fib(i-2);
	}
}
module.exports = fibonacciSeries;
