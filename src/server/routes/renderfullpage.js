export default function renderFullPage(html) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="/style.css">
      <title>Poetion</title>
    </head>
    <body>
      <div class="container">${html}</div>
      <script type="text/javascript" src="/poetion.js"></script>
    </body>
  </html>
  `
}