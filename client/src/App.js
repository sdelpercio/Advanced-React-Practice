import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/footballers')
			.then(res => {
				console.log(res);
				this.setState({ players: res.data });
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return <div className='App'></div>;
	}
}

export default App;
