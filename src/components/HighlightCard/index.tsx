import React from 'react';

import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
 } from './styles';

interface IProps{
  type:"up" | "down" | "total";
  title:string;
  amount:string;
  lastTransaction:string;
  nameIcon: "arrow-up-circle" | "arrow-down-circle" | 'dollar-sign'
}

export function HighlightCard({
  type,
  title,
  amount,
  lastTransaction,
  nameIcon
}:IProps){
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={nameIcon} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}

