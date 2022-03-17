import React from 'react'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <div>
      <Nav />
      <h1>Home</h1>
      <p>
        A simple React SSR demo with github open api to view the open-source
        license list and details.
      </p>
    </div>
  )
}

export default Home
