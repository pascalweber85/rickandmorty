import './Card.css'

export default function Card({ name, species, gender, image }) {
  return (
    // const colorCard = species === 'Alien' ? 'Card--alien'
    //   const [isActive, setIsActive] = useState(true)

    <section className="Card">
      <h2>{name}</h2>

      <div className="Card__Picture">
        <img src={image} alt="" />
      </div>
      <ul>
        <li>{species}</li>
        <li>{gender}</li>
      </ul>
    </section>
  )
}
