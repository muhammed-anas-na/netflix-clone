
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPosters from './components/row-post/RowPosters';
import {netflix_originals,action_movies} from './urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPosters url = {netflix_originals} title="Netflix Originals"/>
      <RowPosters url = {action_movies} title="Action" isSmall />
      {/* <RowPosters url = {romance_movie} title = "Romance" isSmall/> */}
    </div>
  );
}

export default App;
