import React, { PureComponent, Fragment } from 'react';
import { Table, Alert } from 'antd';
import styles from './index.less';

export default class StandardTable extends PureComponent {
  render() {
    const {
      data: { list, pagination },
      columns,
      loading
    } = this.props;

    return (
      <Table 
        dataSource={list}
        columns={columns}
        pagination={pagination}
        loading={loading}
      />
    )
  }
}