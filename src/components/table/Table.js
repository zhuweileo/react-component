import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const {columns,dataSource} = this.props;
    return (
      <div className={'zw-table'}>
        <table>
          <thead>
            <tr>
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
};

export default Table;
