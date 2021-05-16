import './Location.css'

export default function Location({ name, type, dimension, created, id }) {
  return (
    <section key={id} className="Location">
      <h2>{name}</h2>
      <p>{type}</p>
      <p>{dimension}</p>
      <p>{created}</p>
    </section>
  )
}
