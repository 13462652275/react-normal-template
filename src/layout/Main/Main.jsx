//基础模块
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//路由模块
import { Link } from 'react-router-dom';

//路由配置
import { RouterView } from '@/router';

//样式
import './style/Main.css';

//logo
import logo from './style/logo.svg';


class Main extends PureComponent {
	static propTypes = {
		routes: PropTypes.array,
	};

	render() {
		const { routes } = this.props;

		return (
			<article className="main">
        <header className="main-header">
          <img src={ logo } className="main-logo" alt="logo" />
        </header>

        <section>
        	<ul className="main-nav">
						{
							routes.map(item => (
								<li key={ item.path }>
									<Link to={ item.path } className="main-link">{ item.title }</Link>
								</li>
							))
						}
					</ul>
        </section>

        <RouterView routes={ routes } />
      </article>
		);
	};
};

export default Main;