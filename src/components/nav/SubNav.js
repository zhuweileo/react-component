import React from "react";
import PropTypes from 'prop-types'

export default class SubNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
  }
  render() {
    const {children} = this.props
    return <div className='zw-sub-nav'>{children}</div>
  }
}

SubNav.propTypes = {
  selectedKeys: PropTypes.array.isRequired,
}

SubNav.defaultProps = {
  selectedKeys: [],
}
