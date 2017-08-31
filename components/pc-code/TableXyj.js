/**
 * <TableXyj
     columns={columns}
     total={count}
     dataSource={data}
     fetchList={fetchSystemAccountList}
     rest={{
       name,
       accountId,
     }}
   />
 * pagination： 分页，传false不显示分页
 * columns：表格列表信息
 * total: 总数
 * dataSource： 表格数据源
 * fetchList：分页变化时候发的请求
 * rest：发请求带过去的额外数据（除了page，perPage外的数据）
 *
 */
import React, {Component, PropTypes} from 'react';
import {Table} from 'antd';
import config from 'constants/config';

export default ({
  pagination = true,
  columns = [],
  total = 0,
  dataSource = [],
  fetchList = ()=>{},
  rest = {},
}) => {
  let filters = {};
  pagination && (pagination = {
    pageSizeOptions: ['2', '5', '10', ],
    // current: page,
    total,
    showTotal: num=>`共 ${num} 条`,
    // 是否可以快速跳转至某页
    showQuickJumper: true,
    // 是否可以改变 pageSize
    showSizeChanger: true,
    // 页码改变的回调
    onChange: (page, perPage) => {
      const obj = {perPage, page};
      const data = Object.assign({}, obj, rest);
      fetchList(data);
    },
    // pageSize 变化的回调
    onShowSizeChange: (page, perPage) => {
      const obj = {perPage, page};
      const data = Object.assign({}, obj, rest);
      fetchList(data);
    }
  });
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
      rowKey={(item, index)=>(item['_id'] || index)}
    />
  );
};
