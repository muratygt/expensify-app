import moment from 'moment';
//Get Visible Expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter((expense) => {
			//created an instance of the moment that is entered
			const createdAtMoment = moment(expense.createdAt);

			//we want to check the start date filter is same or before the created day of the expense
			const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;

			const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
			const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'amount') {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};
