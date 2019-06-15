import React from 'react';
import ReactDOM from 'react-dom';
import { addExpense } from './actions/expenses';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const waterBill = store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
const gasBill = store.dispatch(addExpense({ description: 'Gas Bill', amount: 0, createdAt: 1000 }));
const rentBill = store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
