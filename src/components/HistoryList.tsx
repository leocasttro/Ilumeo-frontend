import React from 'react';
import { PointRecord } from '../types/PointRecord';
import { calculateDuration, formatDateTime } from '../util/timeUtil';
import styled from 'styled-components';

interface HistoryListProps {
  records: PointRecord[];
}

const ListItem = styled.li`
  width: 365px;
  height: 41px;
  border-radius: 4px;
  background-color: #D9D9D90D;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #CFCFCF;
  list-style: none;
  font-size: 0.95rem;
  width: 100%;
  padding: 1rem 0;
  
  span {
    margin: 0 1rem;`;

const HistoryListWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;

  h2 {
    color: #F5F5F5;
  }
`;

const HistoryList: React.FC<HistoryListProps> = ({ records }) => {

  const exitRecords = records
    .filter(entry => entry.type === 'exit')
    .sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime());

  if (!exitRecords || exitRecords.length === 0) {
    return (
      <HistoryListWrapper>
        <h2>Dias anteriores</h2>
        <p>Nenhuma saída encontrada</p>
      </HistoryListWrapper>
    );
  }

  return (
    <HistoryListWrapper>
      <h2>Dias anteriores</h2>
      <ul style={{ padding: 0 }}>
        {exitRecords.map(entry => (
          <ListItem key={entry.id}>
            <span>{formatDateTime(entry.startTime)}</span>
            <span>{calculateDuration(entry.startTime, entry.endTime)}</span>
          </ListItem>
        ))}
      </ul>
    </HistoryListWrapper>
  );
};

export default HistoryList;