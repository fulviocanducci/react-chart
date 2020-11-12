import { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import series from './services/series';

function App() {
  const [data, setData] = useState([]);
  const [start, setStart] = useState('2020-01-01');
  const [end, setEnd] = useState('2020-01-02');

  useEffect(() => {
    handleLoadData(start, end);
  }, []);

  const handleLoadData = (start, end) => {
    series(start, end).then(({ data }) => {
      const quarter = Object.keys(data.rates);
      let result = [];
      quarter.forEach((item) => {
        result = [...result, { quarter: item, earnings: data.rates[item]['EUR'] }];
      });
      setData(result);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoadData(start, end);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
        <button>Carregar</button>
      </form>
      <h1>Gráfico</h1>
      <VictoryChart domainPadding={20} theme={VictoryTheme.grayscale}>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </div>
  );
}

export default App;
