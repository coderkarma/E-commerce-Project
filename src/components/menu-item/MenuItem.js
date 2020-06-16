import React from 'react';
import './MenuItemStyles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div
			className={`${size} menu-item`}
			style={{ background: `url(${imageUrl})` }}>
			<div className='content'>
				<h1 className='title'>{title}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
