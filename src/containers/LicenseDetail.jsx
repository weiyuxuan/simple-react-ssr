import React from 'react'
import { useParams } from 'react-router-dom'

import withPage from '../hoc/withPage'
import Nav from '../components/Nav'

const LicenseDetail = ({ initialData }) => {
  const { id } = useParams()

  return (
    <div>
      <Nav />
      <h1>{id?.toUpperCase()}</h1>
      <div>
        {initialData?.body?.split('\n').map((text) => (
          <span key={text}>
            {text}
            <br />
          </span>
        ))}
      </div>
    </div>
  )
}

export default withPage(LicenseDetail)
