import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

//If we are keep repeating the same code shown above, we can simply use beforeEach lifecycle methods to keep all of them in one place.

let addExpense, history, wrapper;

beforeEach(() => {
	addExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render add expense page correctly', () => {
	//We have 2 (onSubmit, history) props inside of the component so we need to use spies
	expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
