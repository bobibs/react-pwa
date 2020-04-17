import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

const NavBar = () => {
	return (
		<div className='navbar'>
			<h3>Task Manager</h3>
			<Link to='/'>Current Tasks</Link>
			<Link to='/completed'>Completed Tasks</Link>
		</div>
	);
};

const Template = props => {
	return (
		<div>
			<NavBar />
			<p className='page-info'>{props.title}</p>
			<ul className={props.status}>
				<li>Task 1</li>
				<li>Task 2</li>
				<li>Task 3</li>
			</ul>
		</div>
	);
};

const CurrentTasks = () => {
	return <Template title='Current Tasks' status='Current' />;
};

const CompletedTasks = () => {
	return <Template title='Completed Tasks' status='Completed' />;
};

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Route exact path='/' component={CurrentTasks} />
				<Route exact path='/completed' component={CompletedTasks} />
			</div>
		</BrowserRouter>
	);
};

export default App;
