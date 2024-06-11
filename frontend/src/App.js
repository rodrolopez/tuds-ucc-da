import './App.css';
import Menu from './components/Menu';
import Body from './components/Body';
import TopHeader from './components/TopHeader';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Menu />
      <Body />
    </div>
  );
}

export default App;
