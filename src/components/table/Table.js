import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Table.scss'

class Table extends Component {
  constructor(props) {
    super(props);
    this.onSelectedChange = this.onSelectedChange.bind(this);
    this.onSelectedAllChange = this.onSelectedAllChange.bind(this);
    this.selectAllRef = React.createRef();
    const {dataSource,selectedItems} = this.props
    this.state = {
      isAll: dataSource.length === selectedItems.length && dataSource.length
    }
  }
  componentDidMount() {
    const {selectedItems,dataSource} = this.props

    if(selectedItems.length !== dataSource.length && selectedItems.length){
      this.selectAllRef.current.indeterminate = true
    } else {
      this.selectAllRef.current.indeterminate = false
    }
  }

  onSelectedChange(e,key){
    e.persist()
    // console.log(e);
    const {selectedItems} = this.props
    let copy = [...selectedItems];
    if(copy.indexOf(key) !== -1){
      copy  = copy.filter(c => c !== key)
    } else {
      copy.push(key)
    }

    if(copy.length !== this.props.dataSource.length && copy.length){
      this.selectAllRef.current.indeterminate = true
    } else {
      this.selectAllRef.current.indeterminate = false
    }

    if(copy.length === this.props.dataSource.length){
      this.setState({isAll: true})
    } else {
      this.setState({isAll: false})
    }

    this.props.onSelectedChange(copy)
  }

  onSelectedAllChange(e){
    e.persist()

    this.setState({
      isAll: !this.state.isAll,
    })

    if(e.target.checked){
      const res = this.props.dataSource.map(d => d.key)
      this.props.onSelectedChange(res)
    } else {
      this.props.onSelectedChange([])
    }
  }

  render() {
    const {columns,dataSource,selectedItems} = this.props;
    return (
      <div className={'zw-table'}>
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" checked={this.state.isAll} ref={this.selectAllRef} onChange={this.onSelectedAllChange}/></th>
              {columns.map(column => {
                return <th key={column.key}>{column.title}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {
              dataSource.map(row => {
                return (
                  <tr key={row.key}>
                    <td><input type="checkbox"
                               checked={selectedItems.indexOf(row.key) !== -1}
                               onChange={(e) => this.onSelectedChange(e,row.key)}/></td>
                    {
                      columns.map(column => {
                        return <td key={column.key}>{row[column.dataIndex]}</td>
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired,
  selectedItems: PropTypes.array,
  onSelectedChange: PropTypes.func,
};

Table.defaultProps = {
  onSelectedChange: () => {},
}

export default Table;
