import React from 'react';
import styled from 'styled-components';

interface ActionButtonProps {
  label: string;
  onClick: () => void | Promise<void>;
  disabled?: boolean;
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

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};
