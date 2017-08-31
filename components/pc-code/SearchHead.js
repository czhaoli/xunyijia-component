/**
 * 参数：
 * fetchList：表单提交调用
 * rest： 表单提交的额外参数
 * items： 数组，用于显示表单条目，里面是数据继续包含对象，也可以直接包含对象
    对象:
      label = ''： 表单条目的label,
      key = ''： 表单条目的key,
      type = 'input' | 'submit' | 'reset' | 'select' | 'extra' 默认是input， submit是查询，reset是重置，extra是右浮动
      options = [{}]： 下拉框数据,
      jsx： 如果有，用这个jsx，如果有options，用select，也没有jsx，则用input,
      style = {}： 表单条目的style,
 className： 表单条目的class,
 *     const items = [
       [
         {key: 'name', label: '联系人', type: 'select', options: [{key: 'a1', value: 'a2'}]},
         {key: 'tel', label: '联系人电话'},
         {type: 'submit'},
         {type: 'reset', style: {width: 'auto'}},
       ],
       [
         {key: 'name', label: '联系人'},
         {key: 'tel', label: '联系人电话'},
         {type: 'submit'},
         {type: 'reset'},
         {type: 'extra', jsx: <Button>13</Button>},
       ],
       [
         {key: 'name', label: '联系人'},
         {key: 'tel', label: '联系人电话'},
         {type: 'submit'},
         {type: 'reset'},
         {type: 'extra', jsx: <Button>13</Button>},
       ],
     ];
     const items1 = [
       {key: 'name', label: '联系人', type: 'select', options: [{key: 'a1', value: 'a2'}]},
       {key: 'tel', label: '联系人电话'},
       {type: 'submit'},
       {type: 'reset'},
       {type: 'extra', jsx: <Button>13</Button>, style: {textAlign: 'right'}},
     ];
     <SearchHead
       items={items}
       fetchList={fetchSystemAccountList}
       rest={{
         perPage,
       }}
     />
 *
 * const items = [
     {label: '类型', options: typeList.map(item=>({...item, value: item.name})), key: 'type', width: 200},
     { extra: true, jsx: extra, style: {textAlign: 'right'} },
    ];
   <SearchHead
       items={items}
     />
 */
import React, {Component, PropTypes} from 'react';
import { Form, Select, Input, message, Row, Col, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const SearchHead = Form.create({})(React.createClass({
  PropTypes: {
    fetchList: PropTypes.func,
    rest: PropTypes.object,
    items: PropTypes.array,
  },
  defaultProps: {
    fetchList: ()=>{},
    rest: {},
    items: []
  },
  handleSubmit(event) {
    event.preventDefault();
    const {getFieldsValue} = this.props.form;
    const {rest = {}} = this.props;
    const data = Object.assign({}, getFieldsValue(), rest);
    this.props.fetchList(data);
  },
  handleReset() {
    this.props.form.resetFields();
    const {fetchList, rest = {}} = this.props;
    fetchList(rest);
  },
  inputRender({key, label, jsx, style = {}, className}) {
    const {getFieldDecorator} = this.props.form;
    return (
      <div
        key={key}
        style={Object.assign({verticalAlign: 'middle', display: 'table-cell', width: 230 }, style)}
        className={className}
      >
        <FormItem
          label={label}
        >
        {getFieldDecorator(key)(
          jsx || (
            <Input
              size='default'
              placeholder='请输入'
              onPressEnter={this.handleSubmit}
            />
          )
        )}
        </FormItem>
      </div>
    );
  },
  selectRender({key, label, jsx, style = {}, className, options = []}) {
    const {getFieldDecorator} = this.props.form;
    return (
      <div
        key={key}
        style={Object.assign({verticalAlign: 'middle', display: 'table-cell', width: 230 }, style)}
        className={className}
      >
        <FormItem
          label={label}
        >
        {getFieldDecorator(key)(
          jsx || (
            <Select
              placeholder="请选择"
              notFoundContent='暂无数据'
              size='default'
              style={{width: 150}}
            >
              {
                options.map((item, index) =>
                <Option key={item.value || item._id || index} value={item.value || item._id}> {item.key || item.name} </Option>)
              }
            </Select>
          )
        )}
        </FormItem>
      </div>
    );
  },
  submitRender({key = 'submit', label, jsx, style = {}, className}) {
    return (
      <div
        key={key}
        style={Object.assign({verticalAlign: 'middle', display: 'table-cell', width: 80, paddingTop: 2.5 }, style)}
        className={className}
      >
        {jsx || (
          <Button
            type="primary"
            className="search-submit"
            onClick={this.handleSubmit}
          >
            {label || '查询'}
          </Button>
        )}
      </div>
    );
  },
  resetRender({key = 'reset', label, jsx, style = {}, className}) {
    return (
      <div
        key={key}
        style={Object.assign({verticalAlign: 'middle', display: 'table-cell', width: 80, paddingTop: 3 }, style)}
        className={className}
      >
        {
          jsx || (
            <Button
              className="antd-btn"
              onClick={this.handleReset}
            >
              {label || '重置'}
            </Button>
          )
        }
      </div>
    );
  },
  extraRender({key = 'extra', jsx, style = {}, className}) {
    return (
      <div
        key={key}
        style={Object.assign({verticalAlign: 'middle', display: 'table-cell', paddingTop: 3}, style)}
        className={className}
      >
        {
          jsx
        }
      </div>
    );
  },
  formItemRender({ type = 'input', ...rest }) {
    let item;
    switch (type) {
      case 'input':
        item = this.inputRender(rest);
        break;
      case 'select':
        item = this.selectRender(rest);
        break;
      case 'submit':
        item = this.submitRender(rest);
        break;
      case 'reset':
        item = this.resetRender(rest);
        break;
      case 'extra':
        item = this.extraRender(rest);
        break;
      default:

    }
    return item;
  },
  checkExtra(items) {
    let isGroup = false;
    const hasExtra = items.find(item => {
      if (item instanceof Array) {
        isGroup = true;
        const hasChildrenExtra = item.find(obj => obj.type === 'extra');
        if (!hasChildrenExtra) {
          const {style = {}} = item[item.length - 1];
          style.width = 'auto';
          item[item.length - 1].style = style;
        }
      }
      return item.type === 'extra';
    });
    if (!isGroup && !hasExtra) {
      const {style = {}} = items[items.length - 1];
      style.width = 'auto';
      items[items.length - 1].style = style;
    }
  },
  render() {
    const { form, items } = this.props;
    const {getFieldDecorator} = form;
    this.checkExtra(items);
    return (
      <Form
        style={{borderWidth: 0}}
        hideRequiredMark
        layout="inline"
        onSubmit={this.handleSubmit}
      >
        <div style={{display: 'table', width: '100%'}}>
          {
            items.map((item, index) => {
              if (item instanceof Array) {
                return (
                  <div style={{display: 'table', width: '100%'}} key={index}>
                    {
                      item.map(obj => this.formItemRender(obj))
                    }
                  </div>
                );
              } else {
                return this.formItemRender(item);
              }
            })
          }
        </div>
      </Form>
    );
  }
}));

export default SearchHead;
