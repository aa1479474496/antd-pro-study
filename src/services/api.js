import request from '../utils/request';

export async function query() {
  return request('/api/react');
}
export async function fakeChartData() {
  return request('/mock/fake_chart_data');
}