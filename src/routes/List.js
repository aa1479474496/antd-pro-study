import React, { Component } from 'react';
import { connect } from 'dva';

// const List = ({ list }) => {

//   let { citys } = list;
//   let item = citys.map((i, index) => {
//     return (
//       <h3 key={index}>{i}</h3>
//     );
//   });

//   return (
//     <div>{item}</div>
//   );
// }

// export default connect(({ list }) => ({
//   list
// }))(List);


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
    // console.log(list);
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

