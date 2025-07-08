import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  color: white;
  padding: 1.5rem 0rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 100%;
`;

const UserName = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #F5F5F5;
`;

const UserLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 300;
  color: #aaa;
  margin-top: 0.25rem;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;


const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Title>Relógio de ponto</Title>
      
      <UserInfoContainer>
        <UserName>Leonardo</UserName>
        <UserLabel>Usuário</UserLabel>
      </UserInfoContainer>
    </StyledHeader>
  );
};

export default Header;