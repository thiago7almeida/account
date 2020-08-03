import React from 'react';
import {useSelector} from 'react-redux';

import BackgroundChart from '../BackgroundChart';
import {ChartList} from './styles';
import ChartItem from '../ChartItem';
import {AppState} from '../../store';

const Chart: React.FC = () => {
  const transfers = useSelector((state: AppState) => state.transfers);
  const max = transfers.transferByContact.reduce((prev, current) =>
    prev.Valor > current.Valor ? prev : current,
  );
  return (
    <>
      <BackgroundChart />
      <ChartList
        renderItem={(item) => (
          <ChartItem transfer={item.item} max={max.Valor} />
        )}
        keyExtractor={(_, index) => index.toString()}
        data={transfers.transferByContact}
      />
    </>
  );
};

export default React.memo(Chart);
