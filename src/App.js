import './App.css'
import Card from './Card'
import Header from './Header'
import Navigation from './Nav'
import Location from './Location'
import Episodes from './Episodes'
import Filter from './Filter'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
  const url = 'https://rickandmortyapi.com/api/character'
  const url1 = 'https://rickandmortyapi.com/api/location'
  const url2 = 'https://rickandmortyapi.com/api/episode'
  const [characters, setCharacters] = useState([])
  const [locations, setLocation] = useState([])
  const [episodes, setEpisodes] = useState([])

  const [isActive, setIsActive] = useState({
    characters: true,
    locations: false,
    episodes: false,
  })

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
        <Navigation isActive={isActive} handleClick={handleClick} />
      </section>

      <Filter />

      <div className="App__main">
        {isActive.characters &&
          characters.map(rickandmorty => {
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

        {isActive.locations &&
          locations.map(location => {
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

        {isActive.episodes &&
          episodes.map(episodes => {
            const { name, air_date, episode, id } = episodes

            return (
              <Episodes
                key={id}
                name={name}
                air_date={air_date}
                episode={episode}
              />
            )
          })}
      </div>
    </div>
  )

  function handleClick(event) {
    const value = event.target.name
    const obj = { characters: false, episodes: false, locations: false }
    obj[value] = true
    setIsActive(obj)
  }
}
