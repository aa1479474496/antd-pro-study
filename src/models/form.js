import { message } from 'antd';
import { fakeSubmitForm } from '../services/api';

export default {
  namespace: 'form',

  state: [],

  effects: {
    *submitRegularForm({ payload }, { call }) {
      console.log(payload);
      const response = yield call(fakeSubmitForm, payload);
      const { data } = response;
      if(data.code === 200) {
        message.success(data.message);
      }
    }
  },

  reducers: {
    
  }
}