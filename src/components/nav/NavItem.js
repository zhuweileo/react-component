import React from "react";
import PropTypes from 'prop-types'

export default class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateSelected = this.updateSelected.bind(this);
    this.state = {
      isSelected: false,
    };
  }
  updateSelected(){
    console.log(this.props.name)
    this.setState({
      isSelected: !this.state.isSelected
    })
    this.props.updateSelectedNames()
  }
  render() {
    const {children} = this.props
    return <div className='zw-nav-item' onClick={this.updateSelected}>{ children }{this.state.isSelected + ''}</div>
  }
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  updateSelectedNames: PropTypes.func
}

