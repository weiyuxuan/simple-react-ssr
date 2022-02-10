import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from '../routes'

const App = () => {
  return (
    <>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </>
  )
}

export default App
