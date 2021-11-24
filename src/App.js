import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './globalStyles';
import { useDarkMode } from './hooks';

function App() {
	const { theme, toggleTheme } = useDarkMode();

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<button onClick={toggleTheme}>
				Toggle {theme === 'light' ? '🌙' : '☀️'}
			</button>
			<h1>Its a {theme} theme.</h1>
		</ThemeProvider>
	);
}

export default App;
