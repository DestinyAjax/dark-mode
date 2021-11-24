export const storeTheme = (key, value) => {
	const theme = window.localStorage.setItem(key, value);
	return theme;
};

export const getTheme = (key) => {
	const theme = window.localStorage.getItem(key);
	return theme;
};
