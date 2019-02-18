import React from "react";
import PropTypes from 'prop-types'
import {NavContext} from "./Nav";

export default class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateSelected = this.updateSelected.bind(this);
  }
  updateSelected(){
    const {selectedNames,updateSelectedNames} = this.context
    updateSelectedNames(this.props.name)
  }
  render() {
    const {children,name} = this.props
    const {selectedNames} = this.context
    const className = selectedNames.includes(name)? 'zw-nav-item active' : 'zw-nav-item';

    return <div className={className} onClick={this.updateSelected}>{ children }</div>
  }
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
}

NavItem.contextType = NavContext
