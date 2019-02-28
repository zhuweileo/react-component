import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../../../src/components/table/Table'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '爱好',
    dataIndex: 'hobby',
    key: 'hobby',
  },
];
const dataSource = [
  {key: '1',name: '敌法师',age: '100',hobby: '偷蓝'},
  {key: '2',name: '小鹿',age: '20',hobby: '加血'},
  {key: '3',name: '剧毒术士',age: '1000',hobby: '召唤小虫子'},
  {key: '4',name: '剑圣',age: '未知',hobby: '转圈圈'},
];

class TableDemo extends Component {
  constructor(props) {
    super(props);
    this.onSelectedChange = this.onSelectedChange.bind(this);
    this.state = {
      selectedItems: ['1','4']
    }

  }

  onSelectedChange(e){
    console.log(e,1111)
    this.setState({
      selectedItems: e
    })
  }

  render() {
    return (
      <div>
        <Table columns={columns} dataSource={dataSource} selectedItems={this.state.selectedItems} onSelectedChange={this.onSelectedChange}/>
      </div>
    );
  }
}

TableDemo.propTypes = {};

export default TableDemo;
