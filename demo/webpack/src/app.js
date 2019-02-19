import React from 'react'
import {hot} from 'react-hot-loader'

import Nav from '../../../src/components/nav/Nav'
import SubNav from '../../../src/components/nav/SubNav'
import NavItem from '../../../src/components/nav/NavItem'

class App extends React.Component {
  constructor() {
    super();
    this.navChange = this.navChange.bind(this);
  }

  navChange(e){
    console.log(e)
  }

  render() {
    return (
      <Nav selectedNames={['8']} onChange={this.navChange}>
        <SubNav name={'g1'} title={'分组1'}>
          <NavItem name='1' disabled={true}>1</NavItem>
          <NavItem name='2'>2</NavItem>
          <NavItem name='3'>3</NavItem>
        </SubNav>
        <SubNav name={'g2'} title={'分组2'}>
          <NavItem name='4'>4</NavItem>
          <NavItem name='5'>5</NavItem>
          <NavItem name='6'>6</NavItem>
          <SubNav name={'g3'} title={'分组3'}>
            <NavItem name='aa' disabled={true}>aa</NavItem>
            <SubNav name={'g4'} title={'分组4'}>
              <NavItem name='dd'>dd</NavItem>
              <NavItem name='ee'>ee</NavItem>
              <NavItem name='ff'>ff</NavItem>
            </SubNav>
            <NavItem name='bb'>bb</NavItem>
            <NavItem name='cc'>cc</NavItem>
          </SubNav>
        </SubNav>
        <NavItem name='7'>7</NavItem>
        <NavItem name='8'>8</NavItem>
      </Nav>
    )
  }
}

export default hot(module)(App)
