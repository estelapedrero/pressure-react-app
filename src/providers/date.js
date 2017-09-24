import moment from 'moment';

export default {
  ago: (date = new Date()) => moment(date).fromNow(),
  html: (date = new Date()) => moment(date).format('YYYY-MM-DD'),
  time: (date = new Date()) => moment(date).format('LT'),
  short: (date = new Date()) => moment(date).format('DD.MM.YYYY'),
  verbose: (date = new Date()) => moment(date).format('ll'),
};
