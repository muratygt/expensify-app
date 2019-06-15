import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import { start } from 'repl';

test('should setup default filters', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	};
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual(filters);
});

test('should set sortBy to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	};
	const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
	expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
	const text = 'Murat';
	const action = {
		type: 'SET_TEXT_FILTER',
		text
	};
	const state = filtersReducer(undefined, action);
	expect(state.text).toBe(text);
});

test('should set start date filter', () => {
	const startDate = moment(0);
	const action = {
		type: 'SET_START_DATE',
		startDate: startDate
	};
	const state = filtersReducer(undefined, action);
	expect(state.startDate).toBe(startDate);
});

test('should set end date filter', () => {
	const endDate = moment(0).add(2, 'days');
	const action = {
		type: 'SET_END_DATE',
		endDate: endDate
	};
	const state = filtersReducer(undefined, action);
	expect(state.endDate).toBe(endDate);
});
