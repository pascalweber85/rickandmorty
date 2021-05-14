import './App.css'
import Card from './Card'
import Header from './Header'
import Nav from './Nav'
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
      <Header />

      <div className="App__main">
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
      </div>
    </div>
  )
}
