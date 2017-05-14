import React from 'react'
import PropTypes from 'prop-types'
import styles from './App.css'

const App = ({ message }) => (
  <div className="App">
    <span className="App--message">{message}</span>
  </div>
)

const { string } = PropTypes
App.propTypes = {
  message: string.isRequired
}

export default App
