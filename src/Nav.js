import './Nav.css'
import Button from './Button'

export default function Navigation({ isActive, handleClick }) {
  return (
    <nav className="Navigation">
      <Button onClick={handleClick} isActive={isActive === 'characters'}>
        Characters
      </Button>
      <Button onClick={handleClick} isActive={isActive === 'locations'}>
        Locations
      </Button>
      <Button onClick={handleClick} isActive={isActive === 'episodes'}>
        Episodes
      </Button>
      <Button onClick={handleClick} isActive={isActive === 'bookmarks'}>
        Bookmarks
      </Button>
    </nav>
  )
}
