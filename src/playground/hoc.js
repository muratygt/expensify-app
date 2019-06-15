//Higher Order Component (HOC) is a component that renders another component
//Bir bilgiyi birkac component icinde ayni anda kullanabilmek icin HOC kullaniliyor.

//Reuse the code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info: {props.info}</p>
	</div>
);

//We create a generic function to pass in the component. We will call the function as a Higher Order Component to reuse the code inside of different components. Naming Convention for the passed in component is WrappedComponent

//We can pass in the props inside of the HOC with spread operator. It takes every key value pair and passing them down as props.
const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info. Please do not share.</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
	return (props) => <div>{props.isAuth ? <WrappedComponent {...props} /> : <p>Please login to see the info</p>}</div>;
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuth={false} info="There are the details" />, document.getElementById('app'));
