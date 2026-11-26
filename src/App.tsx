import Test from './components/Test';
import { ThemeProvider } from './context/ThemeProvider';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Test />
    </ThemeProvider>
  );
}

export default App;
