import React, { useState, useEffect, useRef } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Nav from '../components/Nav'

const LicenseDetail = ({ fetchInitialData, staticContext }) => {
  const { pathname } = useLocation()
  const { id } = useParams()

  const [license, setLicense] = useState(() => {
    return __IS_BROWSER__
      ? window.__INITIAL_DATA__?.[pathname]
      : staticContext?.data?.[pathname]
  })

  const fetchedData = useRef(license ? true : false)

  useEffect(() => {
    if (!fetchedData.current) {
      fetchInitialData(pathname).then((resp) => {
        setLicense(resp?.data)
        fetchedData.current = true
      })
    }
  }, [id, fetchedData])

  return (
    <div>
      <Nav />
      <h1>{id?.toUpperCase()}</h1>
      <div>
        {license?.body?.split('\n').map((text) => (
          <span key={text}>
            {text}
            <br />
          </span>
        ))}
      </div>
    </div>
  )
}

export default LicenseDetail
