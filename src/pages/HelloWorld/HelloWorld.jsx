//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './style/HelloWorld.css';


class HelloWorld extends Component {
	constructor (props) {
		super(props);
		this.state = {
			title: '',
		};
	};

	componentWillMount () {
		this.setState({ title: 'Hello World!' });
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<h1 className="hello-world">{ this.state.title }</h1>
		);
	};
};

export default HelloWorld;