import React from "react";
import PropTypes from 'prop-types'

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
  }
  render() {
    return <div>nav</div>
  }
}

Nav.PropTypes = {
  selectedKeys: PropTypes.array.isRequired,
}

Nav.DefaultProps = {
  selectedKeys: [],
}
