import React from 'react';
import styled from 'styled-components';

interface TimeButtonProps {
  onClick: (type: 'entry' | 'exit') => Promise<void>;
  isTimerRunning: boolean;
  setIsTimerRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button = styled.button`
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

export const TimeButton: React.FC<TimeButtonProps> = ({ onClick, isTimerRunning, setIsTimerRunning }) => {
  const handleClick = async () => {
    const type = isTimerRunning ? 'exit' : 'entry';
    try {
      await onClick(type);
      setIsTimerRunning(!isTimerRunning);
    } catch (error) {
      console.error('Erro ao salvar registro:', error);
    }
  };

  return (
    <Button onClick={handleClick}>
      {isTimerRunning ? 'Registrar Saída' : 'Registrar Entrada'}
    </Button>
  );
};