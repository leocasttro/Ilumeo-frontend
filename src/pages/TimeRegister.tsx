import React, { useEffect, useState } from 'react';
import { getRecords, saveRecord } from '../services/timeService';
import { PointRecord } from '../types/PointRecord';
import Timer from '../components/Timer';
import Header from '../components/Header';
import HistoryList from '../components/HistoryList';
import styled from 'styled-components';
import { TimeButton } from '../components/TimeButton';

const FullButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #FE8A00;
  color: #151F2B;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

`;

export const TimeRegister: React.FC = () => {
  const [records, setRecords] = useState<PointRecord[]>([]);
  const [code, setCode] = useState('123'); // fixo por enquanto
  const [error, setError] = useState<string | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false); // começa como falso
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialRecords = async () => {
      setLoading(true);
      try {
        const data = await getRecords(code);
        setRecords(data);
      } catch (error) {
        setError('Erro ao carregar registros iniciais');
        console.error('Erro ao carregar registros:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialRecords();
  }, [code]);

  const handleClick = async () => {
    const type = isTimerRunning ? 'exit' : 'entry';

    try {
      const savedRecord = await saveRecord(code, type);
      setRecords((prev) => [...prev, savedRecord]);
      setIsTimerRunning(!isTimerRunning); // alterna estado
    } catch (error) {
      console.error('Erro ao salvar registro:', error);
    }
  };

  if (loading && records.length === 0) return <div>Carregando...</div>;
  if (error && records.length === 0) return <div>Erro: {error}</div>;

  return (
    <div>
      <Header />
      <Timer isrunning={isTimerRunning} />
      
      <TimeButton
        onClick={handleClick}
        isTimerRunning={isTimerRunning}
        setIsTimerRunning={setIsTimerRunning}
      />

    <HistoryList records={records} />    
  </div>
  );
};
