import React from 'react'
import PropTypes from 'prop-types'
import styles from './App.css'

const App = ({ message }) => (
  <div className={styles.container}>
    <span className={styles.message}>{message}</span>
  </div>
)

const { string } = PropTypes
App.propTypes = {
  message: string.isRequired
}

export default App
