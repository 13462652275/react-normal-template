//基础模块
import React from 'react';
import ReactDOM from 'react-dom';

//入口组件
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();