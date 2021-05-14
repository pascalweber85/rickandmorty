import './Nav.css'
import './Button'

export default function Navigation() {
  return (
    <nav className="Navigation">
      <button className="Nav__Button">Characters</button>
      <button className="Nav__Button">Episodes</button>
      <button className="Nav__Button">Locations</button>
      <button className="Nav__Button">Bookmarks</button>
    </nav>
  )
}
