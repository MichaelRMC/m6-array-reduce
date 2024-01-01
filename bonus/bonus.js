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

// console.log(mostPricy(firstOrder));
// console.log( mostPricy( getPrices( bigOrder ) ) );

/**
 * Takes in an array of objects with property `price` which need to be
 * converted to numbers and then find the sum when items that are under 50 are mulitiplied by 1.5, simulating buying a second item for 50% off.
 */

const bogoUnder50 = ( prices ) => {
	prices = convertToNums( prices )
	prices = convertToDollars( prices )
	
	return prices.reduce( ( acc, currentValue ) =>
	{
		if (currentValue < 50) {
			return acc + currentValue * 1.5
		} 
		return acc + currentValue
	})
}

// console.log(bogoUnder50(firstOrder));

/**
 * Takes in an array of objects with property `price` which need to be
 * converted to numbers and then find the sum when every third cheapest item
 * is free
 */

const bogo3rdFree = ( prices ) =>
{
	prices = getPrices( prices )
	prices = convertToNums( prices )
	prices = convertToDollars( prices )
	
	prices.sort( ( a, b ) => b - a )
	
	let free = Math.floor( prices.length / 3 )
	
	return prices.reduce( ( acc, currentValue, index ) =>
	{
		if (index > prices.length - free - 1) {
			return acc
		}
		return acc + currentValue
	}, 0)
}

// console.log(bogo3rdFree(bigOrder));

/**
 * Takes in an array of objects
 * and then find the number of each item
 */

const itemCount = bigOrder.reduce( ( allItems, item ) => 
{
	if ( item.itemName in allItems )
	{
		allItems[ item.itemName ]++;
	} else
	{
		allItems[item.itemName] = 1
	}
	return allItems
}, {});

// console.log( itemCount );

/**
 * Takes in an array of objects with property `designedBy`
 * Shapes a new array that groups each item by designer
 */

const designedBy = bigOrder.reduce( ( acc, item ) =>
{
	let key = item.designedBy
	if ( !acc[key] )
	{
		acc[ key ] = [];
		acc[key].push(item)
	}
	return acc
})

// console.log( designedBy );


//Bonus Bonus Bonus Bonus
const avgOrderPrice = ( prices ) =>
{
	prices = getPrices( prices )
	prices = convertToNums( prices )
	prices = convertToDollars( prices )

	return prices.reduce( ( acc, currentValue ) =>
{
	return Number((acc + currentValue / prices.length).toFixed(2))
})
};

console.log( avgOrderPrice( bigOrder ) );
