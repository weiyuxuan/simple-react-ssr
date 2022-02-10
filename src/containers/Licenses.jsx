import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Nav from '../components/Nav'

const Licenses = () => {
  return (
    <div>
      <Nav />
      <h1>Licenses Page</h1>
      <Link to="/license/test">Test License</Link>
    </div>
  )
}

export default Licenses
