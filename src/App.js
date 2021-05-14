import './App.css'
import Card from './Card'
import Header from './Header'
import Navigation from './Nav'
import Location from './Location'
import Episodes from './Episodes'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
  const url = 'https://rickandmortyapi.com/api/character'
  const url1 = 'https://rickandmortyapi.com/api/location'
  const url2 = 'https://rickandmortyapi.com/api/episode'
  const [characters, setCharacters] = useState([])
  const [locations, setLocation] = useState([])
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resBody => setCharacters(resBody.results))
      .catch(error => console.error(error))
  }, [url])

  useEffect(() => {
    fetch(url1)
      .then(res => res.json())
      .then(resBody => setLocation(resBody.results))
      .catch(error => console.error(error))
  }, [url1])

  useEffect(() => {
    fetch(url2)
      .then(res => res.json())
      .then(resBody => setEpisodes(resBody.results))
      .catch(error => console.error(error))
  }, [url2])

  return (
    <div className="App">
      <Header />

      <section>
        <Navigation />
      </section>

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

        {locations.map(location => {
          const { name, type, dimension, created, id } = location

          return (
            <Location
              key={id}
              name={name}
              type={type}
              dimension={dimension}
              created={created}
            />
          )
        })}

        {episodes.map(episode => {
          const { name, air_date, episod, id } = episode

          return (
            <Episodes
              key={id}
              name={name}
              air_date={air_date}
              episod={episod}
            />
          )
        })}
      </div>
    </div>
  )
}
