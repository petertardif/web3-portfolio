import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const SidebarLink = ({ to, icon, label, isExpanded, subLinks }) => {
	const [isSubLinksVisible, setIsSubLinksVisible] = useState(false);

	useEffect(() => {
		setIsSubLinksVisible(false);
	}, [isExpanded]);
	const toggleSubLinks = () => {
		setIsSubLinksVisible(!isSubLinksVisible);
	};

	return (
		<li>
			<Link to={to} className='sidebar-link'>
				<FontAwesomeIcon icon={icon} className='sidebar-icons' size='lg' />
				{isExpanded && <span>{label}</span>}
				{subLinks && subLinks.length > 0 && isExpanded && (
					<FontAwesomeIcon
						icon={isSubLinksVisible ? faAngleDown : faAngleRight}
						className='sidebar-arrow'
						size='xs'
						onClick={toggleSubLinks}
					/>
				)}
			</Link>
			{isSubLinksVisible && subLinks && subLinks.length > 0 && (
				<ul className='sub-links'>
					{subLinks.map((subLink, index) => (
						<li key={index}>
							<Link to={`/${subLink}`}>{subLink}</Link>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

export default SidebarLink;
