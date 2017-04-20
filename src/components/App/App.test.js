import React from 'react'
import App from './'
import renderer from 'react-test-renderer'

test('App snapshot', () => {
  const component = renderer.create(<App />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
