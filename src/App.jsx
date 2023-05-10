import React from 'react'
import { Routes, Route } from 'react-router-dom'

import routes from './routes'
import './app.css'

const App = ({ initialData }) => (
  <Routes>
    {routes.map((route) => {
      const { path, component: Page, fetchInitialData } = route
      return (
        <Route
          key={path}
          path={path}
          element={(
            <Page
              initialData={initialData}
              fetchInitialData={fetchInitialData}
            />
          )}
        />
      )
    })}
  </Routes>
)

export default App
