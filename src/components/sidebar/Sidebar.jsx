import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChartPie,
	faUserSecret,
	faCoins,
	faBriefcase,
	faAnglesRight,
	faAnglesLeft,
} from '@fortawesome/free-solid-svg-icons';
import SidebarLink from './SidebarLink';
import './Sidebar.css'; // Stylesheet for the sidebar

const Sidebar = () => {
	const [isExpanded, setIsExpanded] = useState(true);

	const toggleSidebar = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
			<ul className='sidebar-links'>
				<SidebarLink
					to='/'
					icon={faChartPie}
					label='Dashboard'
					isExpanded={isExpanded}
				/>
				<SidebarLink
					to='/coins'
					icon={faCoins}
					label='Cryptocurrency'
					isExpanded={isExpanded}
				/>
				<SidebarLink
					// to='/nfts'
					icon={faUserSecret}
					label='NFTs'
					isExpanded={isExpanded}
					subLinks={['Market', 'Owned', 'Watchlist']}
				/>
				<SidebarLink
					// to='/credentials'
					icon={faBriefcase}
					label='Credentials'
					isExpanded={isExpanded}
					subLinks={['Education', 'Identities', 'Professional', 'Property']}
				/>
			</ul>
			<div
				className={`sidebar-toggle ${isExpanded ? 'expanded' : 'collapsed'}`}
				onClick={toggleSidebar}
			>
				{isExpanded ? (
					<FontAwesomeIcon icon={faAnglesLeft} />
				) : (
					<FontAwesomeIcon icon={faAnglesRight} />
				)}
			</div>
		</div>
	);
};

export default Sidebar;
