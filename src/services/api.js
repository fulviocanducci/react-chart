import axios from 'axios';

//https://api.exchangerate.host/timeseries?start_date=2020-01-01&end_date=2020-01-04
const api = axios.create({
  baseURL: 'https://api.exchangerate.host',
});

export default api;
