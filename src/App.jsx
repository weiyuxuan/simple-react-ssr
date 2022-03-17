import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from './routes'
import './app.css'

const App = () => (
  <Switch>
    {routes.map((route) => {
      const { path, component: C, exact, fetchInitialData } = route
      return (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => (
            <C fetchInitialData={fetchInitialData} {...props} />
          )}
        />
      )
    })}
  </Switch>
)

export default App
