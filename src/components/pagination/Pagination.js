import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {noRepeat} from "../../shared/util";
import './Pagination.scss'

class Pagination extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(page){
    this.props.onChange(page)
  }
  render() {
    const {current,total} = this.props
    console.log(current);
    let pages = [1,current,current-1,current-2,current+1,current+2,total];
    pages = noRepeat(pages);
    pages = pages.sort((a,b) => a - b)
      .filter((p) => p>=1 && p <= total)
      .reduce((acc,cur,index,arr)=>{
        const next = arr[index+1];
        acc.push(cur)
        if(next && (next - cur > 1)){
          acc.push('...')
        }
        return acc
      },[])


    return (
      <div className={'zw-pagination'}>
        {
          pages.map((page,index) => {
            const className = page === this.props.current?'zw-pagination-item active': 'zw-pagination-item';
            if(page === '...'){
              return <span key={index} className={'zw-pagination-sepration'}>{page}</span>
            } else {
              return <span key={index}
                           onClick={()=>this.onClick(page)}
                           className={className}>{page}</span>
            }
          })
        }
      </div>
    );
  }
}

Pagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  current: 1,
  onChange: () => {},
}

export default Pagination;






