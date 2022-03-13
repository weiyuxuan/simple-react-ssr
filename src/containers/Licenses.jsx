import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import Nav from '../components/Nav'

const Licenses = ({ fetchInitialData, staticContext }) => {
  const { pathname } = useLocation()

  const [licenses, setLicenses] = useState(() => {
    return __IS_BROWSER__
      ? window.__INITIAL_DATA__?.[pathname]
      : staticContext?.data?.[pathname]
  })

  const fetchedData = useRef(licenses ? true : false)

  useEffect(() => {
    if (!fetchedData.current) {
      fetchInitialData().then((resp) => {
        setLicenses(resp?.data)
        fetchedData.current = true
      })
    }
  }, [fetchedData])

  return (
    <div>
      <Nav />
      <h1>Licenses Page</h1>
      <ul>
        {licenses?.map((license) => (
          <li key={license.key}>
            <Link to={`/license/${license.key}`}>{license.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Licenses
