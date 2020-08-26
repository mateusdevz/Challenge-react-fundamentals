import moment from 'moment';

const formatDate = (value: Date): string => moment(value).format('L');

export default formatDate;
