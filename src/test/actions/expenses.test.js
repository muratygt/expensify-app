import {
	startAddExpense,
	addExpense,
	editExpense,
	removeExpense,
	setExpenses,
	startSetExpenses,
	startRemoveExpense,
	startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([ thunk ]);
const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };

beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({ id, description, amount, note, createdAt }) => {
		expensesData[id] = { description, amount, note, createdAt };
	});
	database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should remove expense from firebase', (done) => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[2].id;
	store
		.dispatch(startRemoveExpense({ id }))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'REMOVE_EXPENSE',
				id
			});
			return database.ref(`users/${uid}/expenses/${id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val()).toBeFalsy();
			done();
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

test('should edit the expenses on firebase', (done) => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[0].id;
	const updates = { amount: 12332 };
	store
		.dispatch(startEditExpense(id, updates))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'EDIT_EXPENSE',
				id,
				updates
			});
			return database.ref(`users/${uid}/expenses/${id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val().amount).toBe(updates.amount);
			done();
		});
});

test('should setup add expense action object for provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('should add expenses to database and store', (done) => {
	const store = createMockStore(defaultAuthState);

	const expenseData = {
		description: 'Mouse',
		amount: 3000,
		note: 'This is better',
		createdAt: 1000
	};

	store
		.dispatch(startAddExpense(expenseData))
		.then(() => {
			const actions = store.getActions();

			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseData
				}
			});

			return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseData);
			done();
		});
});

test('should add expense with defaults to database and store', (done) => {
	const store = createMockStore(defaultAuthState);

	const expenseDefaultData = {
		description: '',
		amount: 0,
		note: '',
		createdAt: 0
	};
	store
		.dispatch(startAddExpense({}))
		.then(() => {
			const actions = store.getActions();

			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseDefaultData
				}
			});

			return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseDefaultData);
			done();
		});
});

test('should setup set expense action object with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses
	});
});

test('should fetch expenses from firebase', (done) => {
	const store = createMockStore(defaultAuthState);

	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});
		done();
	});
});
