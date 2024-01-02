import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faCoins } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // Stylesheet for the header

const Header = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 50) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`header ${isSticky ? 'sticky' : ''}`}>
			<div className='brand'>
				<Link to='/' className='header-links'>
					<FontAwesomeIcon className='brand-icon' icon={faCoins} />
					<span className='brand-icon'>Firefolios</span>
				</Link>
			</div>
			<div className='header-icons'>
				<ThemeToggle />
				<FontAwesomeIcon icon={faUser} />
				<FontAwesomeIcon icon={faCog} />
				{/* Add more icons or links here */}
			</div>
		</div>
	);
};

export default Header;
