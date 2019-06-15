// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };
// const { name: publisherName = 'Self Published' } = book.publisher;
// if (publisherName) {
// 	console.log(`Publisher name is ${publisherName}`); //Self published
// }

// const person = {
// 	name: 'Murat',
// 	age: 30,
// 	location: {
// 		city: 'Cle',
// 		temp: 94
// 	}
// };

// const { name = 'Anonymous', age } = person;
// const { city, temp: temperature = 'unknown' } = person.location;
// if (name && temperature) {
// 	console.log(
// 		`My name is ${name} and I am ${age} years old. I am from ${city} and the temperature is ${temperature}`
// 	);
// }

/*
Array Destructuring
*/

const address = [ '24801 Lake Shore', 'Cleveland', 'OH', '44123' ];

const [ , city, state = 'Ohio' ] = address;

console.log(`I am living in ${city}, ${state}`);

const item = [ 'Coffe (hot)', '$2.00', '$2.50', '$2.75' ];

const [ coffee, , medium ] = item;

console.log(`A medium ${coffee} costs ${medium}  `);
