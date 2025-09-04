export const isDarkPreferred = () =>
  localStorage.getItem('theme')
    ? localStorage.getItem('theme') === 'dark'
    : window.matchMedia?.('(prefers-color-scheme: dark)').matches;

export const applyTheme = (dark) => {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
};
