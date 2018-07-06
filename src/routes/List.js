import React from 'react';
import { connect } from 'dva';

const List = ({ list }) => {

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

export default connect(({ list }) => ({
  list
}))(List);

