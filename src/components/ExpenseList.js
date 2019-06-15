import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

//This allows only show the filtered expenses on UI
import selectedExpenses from '../selectors/expenses';

//We define the component that is the connected version.
export const ExpenseList = (props) => (
	<div>
		{props.expenses.length === 0 ? (
			<p>No Expenses</p>
		) : (
			props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)
		)}
	</div>
);

//We define the things that we want to get from the store with mapStateToProps
const mapStateToProps = (state) => {
	return {
		//These are the props we want to pass in. mapStateToProps is HOC
		expenses: selectedExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpenseList);
