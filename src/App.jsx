//基础模块
import React, { Component } from 'react';

//路由模块
import { HashRouter as Router } from 'react-router-dom';

//路由配置
import routes, { RouterView } from '@/router';

//样式
import '@/styles/reset.css';
import '@/styles/common.css';

// const Home = () => (<h1>Home</h1>);
// const Todo = () => (<h1>Todo</h1>);


class App extends Component {
  render() {
    return (
      <Router>
        <RouterView routes={ routes } history={ this.props.history }></RouterView>
      </Router>
    );
  };
};

export default App;