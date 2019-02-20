import React from "react";
import PropTypes from 'prop-types'
import './Nav.scss'

export const NavContext = React.createContext({
  selectedNames: [],
  updateSelectedNames: () => {
  },
  selectedSubNavs: [],
  updateSelectedSubNavs: () => {
  }
})

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.updateSelectedNames = this.updateSelectedNames.bind(this)
    this.updateSelectedSubNavs = this.updateSelectedSubNavs.bind(this)

    this.state = {
      selectedNames: [],
      updateSelectedNames: this.updateSelectedNames,
      selectedSubNavs: [],
      updateSelectedSubNavs: this.updateSelectedSubNavs,
    };
  }

  componentDidMount() {
    const {children, selectedNames} = this.props;
    this.setState({
      selectedNames: selectedNames,
    })
  }

  updateSelectedNames(name) {
    if (this.state.selectedNames.includes(name)) {
      return
    } else {
      this.setState({
        selectedNames: [name]
      })
    }
    // console.log(this.state.selectedNames)
    this.props.onChange && this.props.onChange([name])
  }

  updateSelectedSubNavs(name) {
    if(name === null){
      this.setState({
        selectedSubNavs: []
      })
    } else {
      this.setState((state)=> {
        state.selectedSubNavs.push(name)
        return {
          selectedSubNavs: state.selectedSubNavs
        }
      })
    }
  }

  render() {
    const {children} = this.props;

    return (
      <div className='zw-nav'>
        <NavContext.Provider value={this.state}>{children}</NavContext.Provider>
      </div>
    )
  }
}

Nav.propTypes = {
  selectedNames: PropTypes.array.isRequired,
}

Nav.defaultProps = {
  selectedNames: [],
}
