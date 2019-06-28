import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

/*
database.ref('expenses').on('child_added', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').push({
	description: 'Laptop',
	amount: '21000',
	note: '',
	createdAt: 'June 24, 2019'
});


//child_changed event runs when a child changes
database.ref('expenses').on('child_changed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

//child_removed event runs when a child removed
database.ref('expenses').on('child_removed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

//To subcribe the value change on the array of items
database.ref('expenses').on('value', (snapshot) => {
	const expenses = [];

	snapshot.forEach((childSnapshot) => {
		expenses.push({
			id: childSnapshot.key,
			...childSnapshot.val()
		});
	});
	console.log(expenses);
});

//To convert database list to an array of objects
database.ref('expenses').once('value').then((snapshot) => {
	const expenses = [];

	snapshot.forEach((childSnapshot) => {
		expenses.push({
			id: childSnapshot.key,
			...childSnapshot.val()
		});
	});
	console.log(expenses);
});



//Pushing data to database as a list of items
database.ref('expenses').push({
	description: 'Rent',
	amount: '1000',
	note: 'June Rent payment',
	createdAt: 'June 21, 2019'
});
database.ref('expenses').push({
	description: 'Phone bill',
	amount: '90',
	note: 'June phone bill payment',
	createdAt: 'June 22, 2019'
});
database.ref('expenses').push({
	description: 'Gas Bill',
	amount: '150',
	note: 'June Gas payment',
	createdAt: 'June 23, 2019'
});


//Database data
database.ref().set({
	name: 'Murat Yigit',
	age: 30,
	stressLevel: 6,
	job: {
		title: 'Software Developer',
		company: 'Google'
	},
	location: {
		city: 'Cleveland',
		country: 'USA'
	}
});


//Subscription to fetch up to date data from server
database.ref().on('value', (snapshot) => {
	const value = snapshot.val();
	console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
});


//Unsubscription when needed with off()
const onValueChange = database.ref().on('value', (snapshot) => {
	console.log(snapshot.val());
});
setTimeout(() => {
	database.ref('age').set(29);
}, 3500);
setTimeout(() => {
	database.ref().off(onValueChange);
}, 7000);
setTimeout(() => {
	database.ref('age').set(31);
}, 10500);


//Subscription to Watch Changes with on() without a promise
database.ref().on('value', (snapshot) => {
	console.log(snapshot.val());
});
setTimeout(() => {
	database.ref('age').set(32);
}, 3500);

//Getting all database values with once()
database
	.ref()
	.once('value')
	.then((snapshot) => {
		console.log(snapshot.val());
	})
	.catch((e) => {
		console.log('Could not get database values', e);
	});

//Getting location.city database value with once()
database
	.ref('location/city')
	.once('value')
	.then((snapshot) => {
		console.log(snapshot.val());
	})
	.catch((e) => {
		console.log('Could not get database values', e);
	});

//Update Specific Data with update()
database.ref().update({
	stressLevel: 9,
	'job/company': 'Amazon',
	'location/city': 'Seattle'
});

//Set method to remove data
database.ref('isSingle').set(null);

//REMOVE() method
database
	.ref('isSingle')
	.remove()
	.then(() => {
		console.log('Data is removed');
	})
	.catch((e) => {
		console.log('Data is NOT removed', e);
	});

*/
