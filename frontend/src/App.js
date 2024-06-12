import './App.css';
import Menu from './components/Menu';
import Content from './components/Content';
import TopHeader from './components/TopHeader';


function App() {
  return (
    <div className="App">
      <TopHeader />
      <Menu />
      <Content />
    </div>
  );
}

export default App;
