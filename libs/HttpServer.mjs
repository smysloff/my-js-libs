import http from 'node:http'

const PORT = 3000

function router(req, res) {
  switch (req.url) {
    case '/': homeController(req, res); break
    default: error404(req, res)
  }
}

function homeController(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(`<h1>Hello World</h1>`)
}

function error404(req, res) {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/plain')
  res.end('Error 404: Page Not Found')
}

const server = http.createServer(router)
server.listen(PORT, () => {
  console.log(`Server started on port ${ PORT }`)
})
