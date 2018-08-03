import React, { Component } from 'react';
import { connect } from 'dva';


@connect()
export default class childrenRoute extends Component {
  render() {
    return (
      <h1>childrenRoute</h1>
    )
  }
} 