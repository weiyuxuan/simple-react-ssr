import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../src/App'
import template from './template'

const app = express()

app.use(express.static('dist/public'))

app.get('*', (req, res) => {
  const body = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
  )
  const html = template(body)
  res.send(html)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
