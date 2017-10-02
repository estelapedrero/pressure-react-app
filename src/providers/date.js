import moment from 'moment';

export default {
  form: (date = new Date()) => moment(date).format('YYYY-MM-DD'),
  short: (date = new Date()) => moment(date).format('DD.MM.YYYY'),
};
