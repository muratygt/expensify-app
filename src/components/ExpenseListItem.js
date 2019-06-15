import React, { Component } from 'react';

import { Link } from 'react-router-dom';

const ExpenseItemList = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>
			{amount} - {createdAt}
		</p>
	</div>
);
//If you do not want anything from state and just want to connect and get access to dispatch we do not need to write mapStateToProps inside of the connect func.
export default ExpenseItemList;
