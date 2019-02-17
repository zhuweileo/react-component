import React from "react";
import PropTypes from 'prop-types'
import {isPlainObject} from "../../shared/util";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.updateSelectedNames = this.updateSelectedNames.bind(this)

    this.state = {
      selectedNames: []
    };
  }

  componentDidMount() {
    const {children} = this.props;
    children.forEach((c) => {
      if(c.type && c.type.displayName === 'NavItem'){
      }
    })
  }

  updateSelectedNames(){
    console.log(this.state.selectedNames)
  }

  render() {
    console.log(this.props.children);
    const {children} = this.props;
    const hasChildren = !!children
    const oneChild = isPlainObject(children)
    const multiChild = Array.isArray(children);
    console.log(children);
    // console.log(children[0].type.displayName)
    console.log(this.state.selectedNames);

    return <div className='zw-nav'>{children}</div>
  }
}

Nav.propTypes = {
  selectedKeys: PropTypes.array.isRequired,
}

Nav.defaultProps = {
  selectedKeys: [],
}
