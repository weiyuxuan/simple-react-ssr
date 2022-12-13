import React from 'react'
import { Routes, Route } from 'react-router-dom'

import routes from './routes'
import './app.css'

const App = () => (
  <Routes>
    {routes.map((route) => {
      const { path, component: C, fetchInitialData } = route
      return (
        <Route
          key={path}
          path={path}
          element={<C fetchInitialData={fetchInitialData} />}
        />
      )
    })}
  </Routes>
)

export default App
