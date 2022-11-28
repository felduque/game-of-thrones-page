import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav (props) {
  return (
    <div>
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