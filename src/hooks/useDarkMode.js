import React from 'react';

export const useDarkMode = () => {
	const [theme, setTheme] = React.useState('light');

	const toggleTheme = React.useCallback(() => {
		switch (theme) {
			case 'dark':
				setTheme('light');
				break;
			default:
				setTheme('dark');
				break;
		}
	}, [theme]);

	return { theme, toggleTheme };
};
