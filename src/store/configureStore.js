//CREATING THE STORE//

//We created the store with combineReducers to combine multiple reducer function. We pass in an object inside of the combineReducers func. We are going to put key value pairs inside of that object.

//The key inside of the object is going to be the root state name and the value is going to be the reducer that's supposed to manage that. In our case we have expenses and filters at the root. Expenses root is managed by the expensesReducer function.

import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
};
