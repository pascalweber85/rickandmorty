import './Nav.css'

export default function Navigation({ isActive, handleClick }) {
  return (
    <nav className="Navigation">
      <button name="characters" onClick={handleClick} className="Nav__Button">
        Characters
      </button>
      <button name="episodes" onClick={handleClick} className="Nav__Button">
        Episodes
      </button>
      <button name="locations" onClick={handleClick} className="Nav__Button">
        Locations
      </button>
      <button onClick={handleClick} className="Nav__Button">
        Bookmarks
      </button>
    </nav>
  )
}
