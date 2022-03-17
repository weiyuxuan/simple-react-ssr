import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

const Nav = () => {
  return (
    <ul className={styles.nav}>
      <li className={styles.navItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/licenses">Licenses</Link>
      </li>
    </ul>
  )
}

export default Nav
