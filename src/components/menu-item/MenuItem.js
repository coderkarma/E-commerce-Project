import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItemStyles.scss';

const MenuItem = ({ title, imageUrl, size, history }) => {
	return (
		<div className={`${size} menu-item`} oncClick={() => history.push()}>
			<div
				className='background-image'
				style={{ background: `url(${imageUrl})` }}
			/>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
