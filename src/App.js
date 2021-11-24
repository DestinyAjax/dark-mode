import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './globalStyles';

function App() {
	const [theme, setTheme] = React.useState('light');

	const toggleTheme = React.useCallback(() => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}, [theme]);

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<button onClick={toggleTheme}>
				Toggle {theme === 'light' ? '🌙' : '☀️'}
			</button>
			<h1>Its light</h1>
		</ThemeProvider>
	);
}

export default App;
