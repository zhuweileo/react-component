import React from 'react'
import {hot} from 'react-hot-loader'

import Nav from '../../../src/components/nav/Nav'
import SubNav from '../../../src/components/nav/SubNav'
import NavItem from '../../../src/components/nav/NavItem'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Nav>
        <SubNav><NavItem>1</NavItem><NavItem>2</NavItem><NavItem>3</NavItem></SubNav>
      </Nav>
    )
  }
}

export default hot(module)(App)
