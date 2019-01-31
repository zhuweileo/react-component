import React from "react";
import PropTypes from 'prop-types'
import {isPlainObject} from "../../shared/util";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
  }
  render() {
    console.log(this.props.children);
    const {children} = this.props;
    const hasChildren = !!children
    const oneChild = isPlainObject(children)
    const multiChild = Array.isArray(children);
    // console.log(oneChild,multiChild)


    return <div>{children}</div>
  }
}

Nav.propTypes = {
  selectedKeys: PropTypes.array.isRequired,
}

Nav.defaultProps = {
  selectedKeys: [],
}
