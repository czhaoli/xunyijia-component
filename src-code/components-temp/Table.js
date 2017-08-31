import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {Table, Input, Button} from 'antd';
// title, searchList=[{key,value,onchange}] onAdd
// columns, page, total, perPage, data, fetchList,
export default class Account extends Component {
  fetchList(obj) {
    const {searchList, perPage} = this.props;
    let data = {};
    if (obj) {
      data = obj;
    } else {
      data = {perPage: perPage};
      searchList.forEach(item => {
        item.key && (data[item.key] = item.value);
      });
    }
    this.props.fetchList(data);
  }
  renderSearch(searchList) {
    const search = [];
    searchList.forEach((item, index) => {
      search.push(
        <div key={String(index)} className="search-account col-md-4 col-xs-6">
          <label>{item.label}</label>
          <Input
            className="search-input"
            value={item.value}
            onChange={item.onChange}
            onPressEnter={this.fetchList.bind(this, null)}/>
        </div>
      );
    });
    search.push(
      <Button
        key={String(searchList.length)}
        type="primary"
        className="search-submit btn-margin-top"
        onClick={this.fetchList.bind(this, null)}
      >
        查询
      </Button>
    );

    return search;
  }
  render() {
    const {title, searchList, columns, page, total, perPage, onAdd, data, rowSelection} = this.props;
    const pagination = {
      current: page,
      total: total,
      // 是否可以快速跳转至某页
      showQuickJumper: true,
      // 是否可以改变 pageSize
      showSizeChanger: true,
      // 页码改变的回调
      onChange: (current) => {
        const obj = {perPage: perPage, page: current};
        searchList && searchList.forEach(item => {
          item.key && (obj[item.key] = item.value);
        });
        this.fetchList.call(this, obj);
      },
      // pageSize 变化的回调
      onShowSizeChange: (current, pageSize) => {
        const obj = {perPage: pageSize, page: current};
        searchList && searchList.forEach(item => {
          item.key && (obj[item.key] = item.value);
        });
        this.fetchList.call(this, obj);
      }
    };
    return (
      <div>
        <Helmet title={title}/>
        <div className="search-box clearfix">
          {searchList && this.renderSearch.call(this, searchList)}
          {onAdd && <Button type="primary" className="fr btn-margin-top" onClick={onAdd}>新增账号</Button>}
        </div>
        <Table columns={columns} dataSource={data} pagination={pagination} rowKey={(item)=>item['_id']} rowSelection={rowSelection}/>
      </div>
    );
  }
}
