const path = require('path')

module.exports = function(app) {
  app.get('/*', function(req, res) {
    const indexPath = path.join(__dirname, '../../public/index.html')
    res.sendFile(indexPath)
  })
}
