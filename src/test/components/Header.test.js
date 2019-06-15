import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', () => {
	//Enzyme
	const wrapper = shallow(<Header />);
	expect(wrapper).toMatchSnapshot();

	//expect(wrapper.find('h1').text()).toBe('Expensify');

	//React-Test-Renderer
	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Header />);
	// expect(renderer.getRenderOutput()).toMatchSnapshot();
});
