import React, {Component, PropTypes} from 'react';
import {Form, Select} from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
import Btn from './Btn';
import StatusSelect from './StatusSelect';
import Title from './Title';
import FormItems from './FormItems';
export default ({
  submit, cancel, items, initialValueObj, isAdd, getFieldDecorator, getFieldValue,
  tips, title, btnContent, status = true
} = {}) => {
  title || (title = !isAdd ? '编辑账号' : '新增账号');
  btnContent || (btnContent = !isAdd ? '保存' : '确认');
  return (
    <div>
      <Title title={title} />
      <Form onSubmit={submit} style={{
        marginTop: 15
      }}>
        {
          FormItems({
            items,
            isAdd: isAdd,
            getFieldDecorator: getFieldDecorator,
            initialValueObj
          })
        }
        {
          status && (
            <StatusSelect
              getFieldValue={getFieldValue}
              getFieldDecorator={getFieldDecorator}
              initialValue={initialValueObj.status}
            />
          )
        }
        {Btn({
          tips,
          btnContent,
          cancelAdd: cancel
        })}
      </Form>
    </div>
  );
};
