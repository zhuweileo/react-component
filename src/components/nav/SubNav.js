import React from "react";
import PropTypes from 'prop-types';
import {NavContext} from "./Nav";

export default class SubNav extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
    this.state = {
      isActive: false,
      //name不会跟着props.name动态更新
      name: props.name
    }
  }

  // updateActive(children) {
  //   const {selectedNames, selectedSubNavs, updateSelectedSubNavs} = this.context
  //   console.log(selectedSubNavs,11111);
  //   children.forEach((c) => {
  //     if (c.props.name && selectedNames.includes(c.props.name)) {
  //       this.setState({
  //         isActive: true
  //       })
  //     }
  //     if (c.props.name && selectedSubNavs.includes(c.props.name)) {
  //       this.setState({
  //         isActive: true
  //       })
  //     }
  //     if (c.props.children) {
  //       this.updateActive(c.props.children)
  //     }
  //   })
  // }

  onClick(e){
    // console.log(e.nativeEvent)
    const {updateSelectedSubNavs} = this.context
    e.persist()
    // console.log(e);
    if(e.target.classList.contains('zw-nav-item')){
      // console.log('yes');
      updateSelectedSubNavs(this.props.name);
    }
  }

  render() {
    const {children, title } = this.props
    const {selectedNames, selectedSubNavs} = this.context
    // console.log(selectedSubNavs,1111)
    let isActive = false;
    children.forEach((c) => {
      if (c.props.name && selectedNames.includes(c.props.name)) {
        isActive = true;
      }
      if (c.props.name && selectedSubNavs.includes(c.props.name)) {
        isActive = true;
      }
    })
    const className = isActive ? 'zw-sub-nav active' : 'zw-sub-nav';


    return (
      <div className={className} onClick={this.onClick}>
        <div className="zw-sub-nav-title">
          {title}
        </div>
        <div className="zw-sub-nav-content">
          <div className="zw-sub-nav-content-inner">
            {children}
          </div>
        </div>
      </div>
    )

  }
}

SubNav.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

SubNav.contextType = NavContext;

