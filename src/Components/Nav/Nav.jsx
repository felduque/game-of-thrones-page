import React from 'react'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

export default function Nav (props) {
  return (
    <div className={style.container}>
      <nav>
        <ul>
          <li>
          <Link to='/home' >Home</Link>
          </li>
          <li>
            <Link to='/about' >About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}