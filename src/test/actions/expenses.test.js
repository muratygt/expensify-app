import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should edit expense action object', () => {
	const action = editExpense('12345', { note: 'Murat yigit' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '12345',
		updates: { note: 'Murat yigit' }
	});
});

test('should setup add expense action object for provided values', () => {
	const expenseData = {
		description: 'Rent',
		amount: 109500,
		createdAt: 1000,
		note: "This was last month's rent"
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String) //This allows us to get any string value passed the test.
		}
	});
});

test('should setup add expense action object for default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			description: '',
			note: '',
			amount: 0,
			createdAt: 0,
			id: expect.any(String)
		}
	});
});
