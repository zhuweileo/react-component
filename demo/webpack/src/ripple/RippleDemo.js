import React from 'react'
import Ripple from '../../../../src/components/ripple/Ripple'
import Nav from '../../../../src/components/nav/Nav'
export default function RippleDemo() {
  return (
    <Ripple isCenter={true}>
      <button style={{
        backgroung: '#ccc',
        lineHeight: '2em',
        borderRadius: '4px',
        border: 'none',
        fontSize: '18px',
        padding: '0 2em',
      }}>click</button>
    </Ripple>
  )
}
