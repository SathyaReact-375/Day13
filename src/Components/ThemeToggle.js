import React from 'react';
import useLocalStorage from './useLocalStorage';

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#121212' : '#FFF';
    document.body.style.color = theme === 'dark' ? '#FFF' : '#121212';
  }, [theme]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Task3</h1>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;