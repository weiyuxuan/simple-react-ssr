import React from 'react'
import Nav from '../components/Nav'

const LicenseDetail = (props) => {
  const { id } = props.match.params
  return (
    <div>
      <Nav />
      <h1>{`License Detail Page ${id}`}</h1>
    </div>
  )
}

export default LicenseDetail
