import React from 'react'
import { Link } from 'react-router-dom'

import withPage from '../hoc/withPage'
import Nav from '../components/Nav'

const Licenses = ({ initialData }) => {
  return (
    <div>
      <Nav />
      <h1>Licenses List</h1>
      <ul>
        {initialData?.map((license) => (
          <li key={license.key}>
            <Link to={`/license/${license.key}`}>{license.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default withPage(Licenses)
