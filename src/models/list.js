import { query } from '../services/api'


export default {
  namespace: 'list',
  state: {
    citys: ['上海', '北京', '广州']
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(query);
      console.log(response);
    }
  }
}