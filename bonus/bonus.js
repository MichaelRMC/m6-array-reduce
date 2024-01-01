const bigOrder = require("../data/order.js");

const firstOrder = [0.2, "♇♇7", 3, "4", "♇♇1.8"];

// const hackedOrder = [20, -10, 3, -46, 7];

// required previous functions

const convertToNums = (order) => {
	return order.map((currentValue) => {
		if (isNaN(currentValue)) {
			currentValue = currentValue.substring(2);
		}
		return parseFloat(currentValue);
	});
};

const convertToDollars = (prices, conversionRate = 20) => {
	return prices.map((price) => price * conversionRate);
};

const getPrices = (items) => {
	return items.map((item) => item.price);
};

/**
 * Takes in an array of objects with property `price` which need to be
 * converted to numbers and then finds the max value
 */

const mostPricy = (arr) => {
	arr = convertToNums(arr);
	arr = convertToDollars(arr);

	return arr.reduce((priciest, currentValue) => {
		return priciest > currentValue ? priciest : currentValue;
	}, 0);
};

console.log(mostPricy(bigOrder));
// console.log(mostPricy(firstOrder));

module.exports = { mostPricy };
