import React, { useState } from 'react';
import styled from 'styled-components';
import { ActionButton } from '../components/ActionButton';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  padding: 2rem;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  max-width: 420px;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: left;
  width: 100%;
`;

const LightText = styled.span`
  font-weight: 300;
  color: #CFCFCF;
`;

const BoldText = styled.span`
  font-weight: 700;
  color: #CFCFCF;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 65px;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input<{ hasContent: boolean }>`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem 0.5rem 1rem; /* Adjusted padding to align text with label */
  font-size: 2rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  background-color: #1E2733;
  color: #FFFFFF;
  outline: none;

  &::placeholder {
    color: transparent;
  }
`;

const FloatingLabel = styled.label<{ hasContent: boolean }>`
  position: absolute;
  left: 1rem;
  top: ${({ hasContent }) => (hasContent ? '0.5rem' : '50%')};
  transform: translateY(${({ hasContent }) => (hasContent ? '0' : '-50%')});
  font-size: ${({ hasContent }) => (hasContent ? '0.8rem' : '1rem')};
  color: #CFCFCF;
  pointer-events: none;
  transition: all 0.2s ease;
  
  ${StyledInput}:focus + & {
    top: 0.5rem;
    font-size: 0.8rem;
    transform: translateY(0);
  }
`;

const Access: React.FC = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <ChildrenContainer>
        <StyledTitle>
          <LightText>Ponto </LightText>
          <BoldText>Ilumeo</BoldText>
        </StyledTitle>

        <InputWrapper>
          <StyledInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            hasContent={!!name}
            placeholder="Digite seu nome"
            id="floatingInput"
          />
          <FloatingLabel hasContent={!!name} htmlFor="floatingInput">
            Código do usuário
          </FloatingLabel>
        </InputWrapper>

        <ActionButton
          label="Acessar"
          onClick={() => {
            if (name.trim()) {
              navigate('/registro');
            }
          }}
        />
      </ChildrenContainer>
    </Container>
  );
};

export default Access;