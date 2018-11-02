//基础模块
import React, { PureComponent } from 'react';

//路由模块
import { HashRouter as Router } from 'react-router-dom';

//路由配置
import routes, { RouterView } from '@/router';

//样式
import '@/styles/reset.css';
import '@/styles/common.css';

//方法
import uuid from '@/utils/uuid';

console.log(uuid());

class App extends PureComponent {
	onBeforeEach = (to, from, history) => {
		//全局路由监听
	};

  render() {
    return (
      <Router>
        <RouterView 
        	routes={ routes } 
        	onBeforeEach={ this.onBeforeEach } 
        />
      </Router>
    );
  };
};

export default App;