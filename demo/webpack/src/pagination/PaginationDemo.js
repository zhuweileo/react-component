import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../../../src/components/pagination/Pagination'

class PaginationDemo extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      current: 8
    }
  }

  onChange(page){
    console.log(page)
    this.setState({
      current: page
    })
  }

  render() {
    return (
      <Pagination current={this.state.current} total={9} onChange={this.onChange}/>
    );
  }
}

PaginationDemo.propTypes = {};

export default PaginationDemo;
