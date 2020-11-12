import api from './api';
const series = (startDate, endDate, base = 'BRL', symbols = 'EUR') => {
  return api.get(
    `/timeseries?start_date=${startDate}&end_date=${endDate}&base=${base}&symbols=${symbols}`
  );
};

export default series;
