//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//路由模块
import { Switch, Route, withRouter } from 'react-router-dom';


class RouterView extends Component {
	static propTypes = {
		routes: PropTypes.array,
	};

  componentWillReceiveProps (nextProps) {
    console.log(nextProps, 15);
    // const [ to, from ] = [ nextProps.location, this.props.location ];
    // if (to.pathname === '/' && from.pathname !== '/') {
    //   console.log(to, from);
    //   this.props.history.push('/hello-world');
    // };
  };

	render () {
		return (
			<Switch>
        {
          this.props.routes.map(item => (
            <Route 
              exact={ item.exact } 
              strict={ item.strict }
              path={ item.path } 
              render={ 
              	props => <item.component { ...props } routes={ item.children } /> 
              } 
              children={ data => { console.log(data); return (<h2>123456789</h2>) } }
              key={ item.path }
            />
          ))
        }
      </Switch>
		);
	};
};

export default withRouter(RouterView);