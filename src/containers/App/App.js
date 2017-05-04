import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Message from 'components/Message'
import { getMessage } from 'selectors'
import styles from './App.css'

export const App = ({ message }) => (
  <div className={styles.container}>
    <Message text={message} />
  </div>
)

const { string } = PropTypes
App.propTypes = {
  message: string.isRequired
}

const mapStateToProps = state => ({
  message: getMessage(state)
})

export default connect(mapStateToProps)(App)
