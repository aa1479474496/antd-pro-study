import { stringify } from 'qs';
import request from '../utils/request';

export async function query() {
  return request('/api/react');
}

export async function fakeChartData() {
  return request('/mock/fake_chart_data');
}

export async function queryProjectNotice() {
  return request('/mock/project/notice');
}

export async function queryActivities() {
  return request('/mock/activities');
}

export async function fakeSubmitForm(params) {
  return request('/mock/forms', {
    method: 'POST',
    body: params,
  });
}

export async function queryRule(params) {
  return request(`/mock/rule?${stringify(params)}`);
}
