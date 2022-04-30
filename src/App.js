
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPosters from './components/row-post/RowPosters';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPosters/>
    </div>
  );
}

export default App;
