import { ConteinerApp, Title } from './style/Home.styled.js';
import { CharacterList } from '../../components/CharacterList/CharacterList.jsx';

function Home() {
  return (
    <ConteinerApp>
      <Title>Star Wars</Title>
      <CharacterList />
    </ConteinerApp>
  );
}

export default Home;
