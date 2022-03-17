export default (body, data) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React SSR</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/main.css" rel="stylesheet">
    <script>window.__INITIAL_DATA__ = ${JSON.stringify(data)}</script>
  </head>
  <body>
    <div id="root">${body}</div>
    <script src="/bundle.js"></script>
  </body>
</html>
`
