import { useEffect, useState } from "react";
import styled from "styled-components";

interface TimeProps {
  isrunning: boolean;
  onStop?: (duration: number) => void;
}

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
    margin-bottom: 2rem;
`;

const TimeDisplay = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #F5F5F5;
`;

const Label = styled.span`
  font-size: 1rem;
  color: #F5F5F5;
  font-weight: bold;
`;

const Timer: React.FC<TimeProps> = ({ isrunning, onStop }) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isrunning) {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isrunning && elapsedSeconds > 0) {
      if (onStop) onStop(elapsedSeconds);
      clearInterval(interval!);
    }

    return () => clearInterval(interval!);
  }, [isrunning]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    // Sem segundos, como você pediu
    return `${hrs}h ${mins}m`;
  };

  return (
    <TimerWrapper>
      <TimeDisplay>{formatTime(elapsedSeconds)}</TimeDisplay>
      <Label>Horas de hoje</Label>
    </TimerWrapper>
  );
};

export default Timer;
