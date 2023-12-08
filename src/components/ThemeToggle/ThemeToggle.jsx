// ThemeToggle.js
import React, { useState, useEffect } from 'react';
import './ThemeToggle.css'; // Import the CSS file

const ThemeToggle = () => {
	const [darkTheme, setDarkTheme] = useState(() => {
		// Check localStorage for user's preference or default to light theme
		const storedTheme = localStorage.getItem('theme');
		return storedTheme ? storedTheme === 'dark' : false;
	});

	useEffect(() => {
		// Update the class and save the theme preference to localStorage
		if (darkTheme) {
			document.documentElement.classList.add('dark-theme');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark-theme');
			localStorage.setItem('theme', 'light');
		}
	}, [darkTheme]);

	const toggleTheme = () => {
		setDarkTheme((prevTheme) => !prevTheme);
	};

	return (
		<label className='switch'>
			<input type='checkbox' checked={darkTheme} onChange={toggleTheme} />
			<span className='slider'></span>
		</label>
	);
};

export default ThemeToggle;
