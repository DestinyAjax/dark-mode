import React from 'react';
import { storeTheme, getTheme } from '../utils';
import { THEME_MODE } from '../constants';

export const useDarkMode = () => {
	const [theme, setTheme] = React.useState(THEME_MODE.LIGHT);

	const toggleTheme = React.useCallback(() => {
		switch (theme) {
			case THEME_MODE.DARK:
				storeTheme('theme', THEME_MODE.LIGHT);
				setTheme(THEME_MODE.LIGHT);
				break;
			default:
				storeTheme('theme', THEME_MODE.DARK);
				setTheme(THEME_MODE.DARK);
				break;
		}
	}, [theme]);

	React.useEffect(() => {
		const localStorageTheme = getTheme('theme');
		const matchMedia =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (matchMedia && !localStorageTheme) {
			setTheme(THEME_MODE.DARK);
		} else {
			if (localStorageTheme) {
				setTheme(localStorageTheme);
			} else {
				setTheme(THEME_MODE.LIGHT);
			}
		}
	}, []);

	return { theme, toggleTheme };
};
