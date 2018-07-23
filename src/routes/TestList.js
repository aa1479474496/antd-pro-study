import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ testlist }) => ({
  testlist
}))
export default class List extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/fetch',
    });
  }

  render() {
    const { testlist } = this.props;
    let { citys } = testlist;
    let item = citys.map((i, index) => {
      return (
        <h3 key={index}>{i}</h3>
      );
    });

    return (
      <div>{item}</div>
    );
  }
}

