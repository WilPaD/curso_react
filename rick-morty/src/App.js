import imageRickMorty from './img/rick-morty.png'
import axios from 'axios'
import './App.css';
import { useState } from 'react';
import { Characters } from './components/Characters';


function App() {

  const [characters, setCharacter] = useState(null)

  const reqApi = async () => {
    await axios.get('https://rickandmortyapi.com/api/character')
      .then(resul => {
        const { results } = resul.data
        setCharacter(results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick & Morty </h1>

        {characters ? (
          <Characters characters={characters} setCharacter={setCharacter}/>
        ) : (
          <>
            <img src={imageRickMorty} alt='Rick & Morty' className='img-home' />
            <button onClick={reqApi} className='btn-search'>Buscar Personaje</button>
          </>
        )}



      </header>
    </div>
  );
}

export default App;
