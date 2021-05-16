import './Card.css'
import { useState } from 'react'

export default function Card({ name, species, gender, image }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <section className={species === 'Alien' ? 'Card Card--alien' : 'Card'}>
      <h2>{name}</h2>

      <div className="Card__Picture">
        <img src={image} alt="" />
      </div>

      <button className="Card__Button" onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Verstecke Infos' : 'Zeige Infos'}
      </button>

      {isActive && (
        <ul>
          <li>{species}</li>
          <li>{gender}</li>
        </ul>
      )}
    </section>
  )
}
