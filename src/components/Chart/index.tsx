import React, {useState} from 'react';

import BackgroundChart from '../BackgroundChart';
import {ChartList} from './styles';
import ChartItem from '../ChartItem';

const Chart: React.FC = () => {
  const [data] = useState([
    {value: 1600},
    {value: 1400},
    {value: 350},
    {value: 100},
  ]);

  const max = data.reduce((prev, current) =>
    prev.value > current.value ? prev : current,
  );

  return (
    <>
      <BackgroundChart />
      <ChartList
        renderItem={(item) => <ChartItem transfer={item.item} max={max} />}
        keyExtractor={(_, index) => index.toString()}
        data={data}
      />
    </>
  );
};

export default React.memo(Chart);
