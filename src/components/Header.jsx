import { Filters } from './Filters.jsx'
import '../css/Header.css';

export function Header () {
  return (
    <header>
      <h1 className='title' >React Shop 🛒</h1>
      <Filters />
    </header>
  )
}
