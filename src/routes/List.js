import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ list }) => ({
  list
}))
export default class List extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/fetch',
    });
  }

  render() {
    const { list } = this.props;
    let { citys } = list;
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

