import { Link } from 'react-router-dom'
import s from './NotFound.module.css'
const NotFound = 
() => {
  return (
    <div className={s.not_found}>
      <Link className={s.link} to='/'>Home</Link>
    </div>
  )
}

export default NotFound