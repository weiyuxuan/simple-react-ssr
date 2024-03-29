import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import favicon from 'serve-favicon'
import path from 'path'

import App from '../../src/App'
import routes from '../../src/routes'
import template from './template'

const app = express()

app.use(express.static('dist/public'))

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('*', (req, res) => {
  const activeRoute = routes.find((route) => matchPath(route, req.url))

  if (!activeRoute) {
    return res.status(404).send('404 Not found')
  }

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.url)
    : Promise.resolve()

  promise
    .then((resp) => {
      const data = { [req.url]: resp?.data || null }
      const body = renderToString(
        <StaticRouter location={req.url}>
          <App initialData={data} />
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
