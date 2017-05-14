import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message'
import styles from './App.css'

const App = ({ message }) => (
  <div className={styles.container}>
    <Message text="It Works!" />
  </div>
)

const { string } = PropTypes
App.propTypes = {
  message: string.isRequired
}

export default App
