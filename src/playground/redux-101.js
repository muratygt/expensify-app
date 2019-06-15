import { createStore } from 'redux';

//Action Generators - A function that returns action objects.

// We used object destructuring inside of the arrow function argument and set up some default values for our custom parameters. We always need to assign it to empty object in case nothing is provided.

// const add = (data) => {
// 	return data.a + data.b;
// }

//Instead of the above, we can pass in the object and destructure it
const add = ({ a, b }) => {
	return a + b;
};
console.log(add({ a: 1, b: 2 }));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const resetCount = () => ({
	type: 'RESET'
});

const setCount = ({ count } = {}) => ({
	type: 'SET',
	count
});

const store = createStore((state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'SET':
			return {
				count: action.count
			};
		case 'RESET':
			return {
				count: (state.count = 0)
			};
		default:
			return state;
	}
});

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
// 	type: 'INCREMENT'
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));
// store.dispatch({
// 	type: 'DECREMENT',
// 	decrementBy: 10
// });

store.dispatch(resetCount());
// store.dispatch({
// 	type: 'RESET'
// });

store.dispatch(setCount({ count: 101 }));
// store.dispatch({
// 	type: 'SET',
// 	count: 101
// });
