import { ConteinerApp } from './style/Home.styled.js';
import { CharacterList } from '../../components/CharacterList/CharacterList.js';

function Home() {
  return (
    <ConteinerApp>
      <h1>Star wars app</h1>
      <CharacterList />
    </ConteinerApp>
  );
}

export default Home;
