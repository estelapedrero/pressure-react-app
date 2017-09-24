import moment from 'moment';

export default {
  short: (date = new Date()) => moment(date).format('DD.MM.YYYY'),
};
