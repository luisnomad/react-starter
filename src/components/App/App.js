import React, { Component, PropTypes } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

const App = ({ message }) => (
  <div>
    {message}
  </div>
)

const { string } = PropTypes
App.propTypes = {
  message: string.isRequired
}

export default App
