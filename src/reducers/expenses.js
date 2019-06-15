//EXPENSES REDUCER//

//We simply create a const to reference the default value of the state
const expensesReducerDefaultState = [];

//We created a function for the expenses reducer. We pass in 2 arguments which are state and action.
export default (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [ ...state, action.expense ]; //combining 2 arrays with spread operator
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};
