import React from 'react'
import { render } from 'react-dom'

class Welcome extends React.Component {
  render() {
    return <div>It Works!</div>
  }
}

render(<Welcome />, document.getElementById('app'))
