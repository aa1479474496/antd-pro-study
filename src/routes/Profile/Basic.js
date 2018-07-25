import React, { Component } from 'react';
import { connect } from 'dva';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';

@connect()
export default class Basic extends Component {
  render() {
    return (
      <PageHeaderLayout title="基础详情页"></PageHeaderLayout>
    )
  }
}