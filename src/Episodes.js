import './Episodes.css'

export default function Episodes({ name, air_date, episode, id }) {
  return (
    <section
      key={id}
      className={
        episode.includes('S01') ? 'Episodes--2014 Episodes' : 'Episodes'
      }
    >
      <h2>{name}</h2>
      <p>{air_date}</p>
      <p>{episode}</p>
    </section>
  )
}
