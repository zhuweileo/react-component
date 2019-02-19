import React from "react";
import PropTypes from 'prop-types'
import {NavContext} from "./Nav";
import {SubNavContext} from "./SubNav";

export default class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateSelected = this.updateSelected.bind(this);
  }
  updateSelected(){
    const {disabled} = this.props
    if(disabled) return
    const {updateSelectedNames,updateSelectedSubNavs} = this.context
    updateSelectedNames(this.props.name)
    updateSelectedSubNavs(null)
  }
  render() {
    const {children,name,disabled} = this.props
    const {selectedNames} = this.context
    // const className = selectedNames.includes(name)? 'zw-nav-item active' : 'zw-nav-item';
    const className = ['zw-nav-item']
    if(disabled){
      className.push('disabled')
    } else if(selectedNames.includes(name)){
      className.push('active')
    }

    return <div className={className.join(' ')} onClick={this.updateSelected} >{ children }</div>
  }
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

NavItem.defaultProps = {
  disabled: false,
}

NavItem.contextType = NavContext
