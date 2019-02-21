import React from 'react'
import {hot} from 'react-hot-loader'

import NavDemo from './nav/NavDemo'
import RippleDemo from './ripple/RippleDemo'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavDemo key={'a'}/>
        <RippleDemo key={'b'}/>
        <div style={{
          position: 'relative',
          background: '#f0f'
        }}>
          <div></div>
        </div>
      </div>

    )
  }
}

export default hot(module)(App)
