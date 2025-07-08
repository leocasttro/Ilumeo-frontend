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

  @media (max-width: 600px) {
    padding: 1rem;
    height: 80vh;
  }
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

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
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
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 65px;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    height: 50px;
  }
`;

const StyledInputContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #1E2733;
  border-radius: 4px;
  border: none;

  @media (max-width: 600px) {
    padding: 1.2rem 0.8rem 0.4rem 0.8rem;
  }
`;

const StyledInnerInput = styled.input<{ hasContent: boolean }>`
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  font-weight: bold;
  background: transparent; /* Fundo transparente */
  color: #FFFFFF;
  border: none;
  outline: none;

  &::placeholder {
    color: transparent;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
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

  ${StyledInnerInput}:focus + & {
    top: 0.5rem;
    font-size: 0.8rem;
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    font-size: ${({ hasContent }) => (hasContent ? '0.7rem' : '0.9rem')};
    left: 0.8rem;
    top: ${({ hasContent }) => (hasContent ? '0.4rem' : '50%')};
  }
`;

const Access: React.FC = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <ChildrenContainer>
        <StyledTitle>
          <LightText>Ponto </LightText>
          <BoldText>Ilumeo</BoldText>
        </StyledTitle>

        <InputWrapper>
          <StyledInputContainer>
            <StyledInnerInput
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              hasContent={!!code}
              placeholder="Código do usuário"
              id="floatingInput"
            />
            <FloatingLabel hasContent={!!code} htmlFor="floatingInput">
              Código do usuário
            </FloatingLabel>
          </StyledInputContainer>
        </InputWrapper>

        <ActionButton
          label="Confirmar"
          onClick={() => {
            if (code.trim()) {
              navigate('/registro', { state: { code: code.trim() } });
            }
          }}
        />
      </ChildrenContainer>
    </Container>
  );
};

export default Access;

