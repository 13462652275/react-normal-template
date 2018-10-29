//基础模块
import React from 'react';

//第三方模块
import Loadable from 'react-loadable';

//公共组件
import Loading from '@/components/Loading';

//路由视图
import RouterView from './RouterView';

//Loading
const loading = props => {
	if (props.error) {
		return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
	} else if (props.pastDelay) {
		return (<Loading fix loading></Loading>);
	} else {
		return null;
	}
};

//异步加载
const AsyncLoad = loader => Loadable({ loader, loading });

const Home = (props) => {

	return (<h1>Home</h1>);
};
const Todo = () => (<h1>Todo</h1>);


const routes = [
	{
		path: '/hello-world',
		title: 'HelloWorld',
		exact: true,
		component: AsyncLoad(() => import('@/pages/HelloWorld')),
	},

	{
		path: '/',
		title: '首页',
		strict: true,
		component: AsyncLoad(() => import('@/layout/Main')),
		children: [
			{
				path: '/home',
				title: 'home',
				component: Home,
				exact: true,
			},
			{
				path: '/home/todo',
				title: 'todo',
				component: Todo,
				exact: true,
			},
		],
	},

	
];

export default routes;

//路由视图
export { RouterView };