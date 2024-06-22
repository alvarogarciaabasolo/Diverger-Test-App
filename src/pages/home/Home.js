import { ConteinerApp } from './style/Home.styled.js';
import { SearchBar } from '../../components/SearchBar/SearchBar.js';
function Home() {

  return (
    <ConteinerApp>
      <h1>Star wars app</h1>
      <SearchBar />
    </ConteinerApp>
  );
}

export default Home;
