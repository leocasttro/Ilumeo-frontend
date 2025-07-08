import React, { use, useEffect, useState } from 'react';
import { getRecords, saveRecord } from '../services/timeService';
import { PointRecord } from '../types/PointRecord';
import Timer from '../components/Timer';
import Header from '../components/Header';
import HistoryList from '../components/HistoryList';
import { ActionButton } from '../components/ActionButton';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* alinha do topo */
  padding-top: 5rem; 
  width: 35%;
  margin: 0 auto; 
`;


export const TimeRegister: React.FC = () => {
  const location = useLocation();
  const initialCode = (location.state as { code?: string } | null)?.code || '';
  const [records, setRecords] = useState<PointRecord[]>([]);
  const [code, setCode] = useState(initialCode);
  const [error, setError] = useState<string | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
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
      setIsTimerRunning(!isTimerRunning);
    } catch (error) {
      console.error('Erro ao salvar registro:', error);
    }
  };

  if (loading && records.length === 0) return <div>Carregando...</div>;
  if (error && records.length === 0) return <div>Erro: {error}</div>;

  return (
    <CenteredContainer>
      <Header code={code} />
      <Timer isrunning={isTimerRunning} />
      
      <ActionButton
        label={isTimerRunning ? 'Registrar Saída' : 'Registrar Entrada'}
        onClick={handleClick}
      />

      <HistoryList records={records} />    
    </CenteredContainer>
  );
};
