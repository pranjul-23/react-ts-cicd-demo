import { useTheme } from '../hooks/useTheme';
export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <h1
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
          background: theme === 'dark' ? '#000' : '#fff',
        }}
      >
        My dashboard
      </h1>
      <button onClick={toggleTheme}>{theme === 'light' ? 'dark' : 'light'}</button>
    </header>
  );
}
