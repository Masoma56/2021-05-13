import './App.css';
import Navbar from './components/Navbar'
import UpperMain from './components/UpperMain'
import Main from './components/Main'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <UpperMain />
        <Main />
      </main>

    </>
  );
}

export default App;
