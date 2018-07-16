import numeral from 'numeral';
import ChartCard from './ChartCard';
import MiniArea from './MiniArea';
import Field from './Field';

const yuan = val => `¥ ${numeral(val).format('0,0')}`;
const Charts = {
  yuan,
  ChartCard,
  MiniArea,
  Field
}
export {
  Charts as default,
  yuan,
  ChartCard,
  MiniArea,
  Field
}