import React from 'react'
import {hot} from 'react-hot-loader'

import NavDemo from './nav/NavDemo'
import RippleDemo from './ripple/RippleDemo'
import PaginationDemo from './pagination/PaginationDemo'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavDemo/>
        <RippleDemo/>
        <PaginationDemo/>
      </div>

    )
  }
}

export default hot(module)(App)
