import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test('should load the Loading Page', () => {
	const wrapper = shallow(<LoadingPage />);
	expect(wrapper).toMatchSnapshot();
});
