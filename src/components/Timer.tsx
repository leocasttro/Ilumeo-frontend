import { useEffect, useState } from "react";
import styled from "styled-components";
import { formatTime } from "../util/timeUtil";

interface TimeProps {
  isrunning: boolean;
  onStop?: (duration: number) => void;
}

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-bottom: 2rem;
  width: 100%;
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
      setElapsedSeconds(0);
    }

    return () => clearInterval(interval!);
  }, [isrunning]);

  return (
    <TimerWrapper>
      <TimeDisplay>{formatTime(elapsedSeconds)}</TimeDisplay>
      <Label>Horas de hoje</Label>
    </TimerWrapper>
  );
};

export default Timer;
