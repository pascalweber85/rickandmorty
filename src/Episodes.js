import './Episodes.css'

export default function Episodes({ name, air_date, episod, id }) {
  return (
    <section key={id} className="Episodes">
      <h2>{name}</h2>
      <p>{air_date}</p>
      <p>{episod}</p>
    </section>
  )
}
