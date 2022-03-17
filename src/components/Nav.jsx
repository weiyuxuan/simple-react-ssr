import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/licenses">Licenses</Link>
      </li>
    </ul>
  )
}

export default Nav
