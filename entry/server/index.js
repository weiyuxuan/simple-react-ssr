import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath, StaticRouter } from 'react-router-dom'

import App from '../../src/App'
import routes from '../../src/routes'
import template from './template'

const app = express()

app.use(express.static('dist/public'))

app.get('*', (req, res) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.url)
    : Promise.resolve()

  promise
    .then((resp) => {
      const data = { [req.url]: resp?.data || null }
      const body = renderToString(
        <StaticRouter location={req.url} context={{ data }}>
          <App />
        </StaticRouter>,
      )
      const html = template(body, data)
      res.send(html)
    })
    .catch((err) => {
      res.status(500).send({ error: err?.message })
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
