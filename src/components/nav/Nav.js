import React from "react";
import PropTypes from 'prop-types'
import {isPlainObject} from "../../shared/util";
import './Nav.scss'

export const NavContext = React.createContext({
  selectedNames: [],
  updateSelectedNames: () =>{},
})

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.updateSelectedNames = this.updateSelectedNames.bind(this)

    this.state = {
      selectedNames: [],
      updateSelectedNames: this.updateSelectedNames
    };
  }

  componentDidMount() {
    const {children} = this.props;
  }

  updateSelectedNames(name){
    if(this.state.selectedNames.includes(name)){
      return
    } else {
      this.setState({
        selectedNames: [name]
      })
    }
    console.log(this.state.selectedNames)
  }

  render() {
    const {children} = this.props;
    const hasChildren = !!children
    const oneChild = isPlainObject(children)
    const multiChild = Array.isArray(children);
    // console.log(children);
    // console.log(children[0].type.displayName)
    // console.log(this.state.selectedNames);

    return (
        <NavContext.Provider value={this.state}>
          <div className='zw-nav'>{children}</div>
        </NavContext.Provider>
    )
  }
}

Nav.propTypes = {
  selectedKeys: PropTypes.array.isRequired,
}

Nav.defaultProps = {
  selectedKeys: [],
}
