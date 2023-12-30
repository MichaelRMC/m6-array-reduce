const shoppingCart = [1, "2.02", "$3", "4", 5, "6.0", "7", "$8", "9", "$10.10"];

const isNum = (num) => {
	return typeof num === "number";
};

// console.log( isNum( "5" ) );

const isAllNums = shoppingCart.every( isNum );

// console.log( isAllNums );

let convertToNums = shoppingCart.map( ( currentValue ) => {
	if (isNaN(currentValue)) {
		currentValue = currentValue.substring(1)
	}
	return parseFloat( currentValue );
} );

// console.log( convertToNums.every( isNum ) );

const total = convertToNums.reduce( ( sum, currentValue ) =>
{
	return sum + currentValue;
}, 5 );

// console.log( total );

const objectCart = [
	{
		itemName: "Chewed Plastic Bag",
		designedBy: "Mittens",
		price: 1,
	},
	{
		itemName: "Tangled yarn",
		designedBy: "Patches",
		price: 2.02,
	},
	{
		itemName: "Fur-Lined Track Pants",
		designedBy: "Fluffy",
		price: 5,
	},
];

const ObjTotal = objectCart.reduce( ( sum, currentValue ) =>
{
	return sum + currentValue.price;
}, 5 );

console.log(ObjTotal);