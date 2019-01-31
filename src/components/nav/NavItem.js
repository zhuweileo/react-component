import React from "react";
import PropTypes from 'prop-types'

export default class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
  }
  render() {
    const {children} = this.props
    return <div>{ children }</div>
  }
}

NavItem.propTypes = {
  selectedKeys: PropTypes.array.isRequired,
}

NavItem.defaultProps = {
  selectedKeys: [],
}
