import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='left-links'>
				<ul>
					<li>
						<Link to='/'>Left Link 1</Link>
					</li>
					<li>
						<Link to='/'>Left Link 2</Link>
					</li>
				</ul>
			</div>
			<div className='logo'>
				<FontAwesomeIcon icon={faCoins} size='xl' />
			</div>
			<div className='right-links'>
				<ul>
					<li>
						<Link to='/'>Right Link 1</Link>
					</li>
					<li>
						<Link to='/'>Right Link 2</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
