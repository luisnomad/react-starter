module.exports = function() {
  return require('./config/webpack.' + process.env.NODE_ENV + '.js')
}
