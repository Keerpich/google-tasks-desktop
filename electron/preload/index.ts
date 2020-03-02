import { handleOSTheme } from './theme';

process.once('loaded', () => {
  handleOSTheme();
  console.log('loaded', document);
});

window.__setAccentColor = newColor => {
  const color = newColor || localStorage.ACCENT_COLOR || 'blue';

  document.documentElement.setAttribute('data-accent-color', color);

  if (newColor) {
    localStorage.ACCENT_COLOR = color;
  }
};
