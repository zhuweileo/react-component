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
      <Nav selectedKeys={[]}>
        <SubNav>
          <NavItem name='1'>1</NavItem>
          <NavItem name='2'>2</NavItem>
          <NavItem name='3'>3</NavItem>
        </SubNav>
        <SubNav>
          <NavItem name='4'>4</NavItem>
          <NavItem name='5'>5</NavItem>
          <NavItem name='6'>6</NavItem>
        </SubNav>
        <NavItem name='7'>7</NavItem>
        <NavItem name='8'>7</NavItem>
      </Nav>
    )
  }
}

export default hot(module)(App)
