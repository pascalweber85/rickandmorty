import './App.css'
import Card from './Card'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
  const url = 'https://rickandmortyapi.com/api/character'
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resBody => setCharacters(resBody.results))
      .catch(error => console.error(error))
  }, [url])

  return (
    <div className="App">
      <header className="App-header">
        <h2>Home</h2>
      </header>
      <main>
        {characters.map(rickandmorty => {
          const { name, species, gender, id, image } = rickandmorty

          return (
            <Card
              key={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
            />
          )
        })}
      </main>
    </div>
  )
}
