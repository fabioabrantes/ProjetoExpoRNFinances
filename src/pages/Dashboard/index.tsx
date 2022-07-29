import React from 'react';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components'; 


import {HighlightCard} from '../../components/HighlightCard';
import {TransactionCard} from '../../components/TransactionCard';

import { 
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  IconPower,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';

export interface DataProps{
  id:string;
  type:'positive' | 'negative';
  title: string;
  amount: string;
  category: {
    name: string;
    icon: string;
  };
  date: string;
}

const data:DataProps[] = [
  {
    id:'1',
    type:'positive',
    title: 'Desenvolvimento de site',
    amount:'R$ 12.000,00',
    category:{
      name: 'Vendas',
      icon:'dollar-sign'
    },
    date:'13/04/2020'
  },
  {
    id:'2',
    type:'negative',
    title: 'Hamburgueria Pizzy',
    amount:'R$ 59,00',
    category:{
      name: 'Alimentação',
      icon:'coffee'
    },
    date:'10/04/2020'
  },
  {
    id:'3',
    type:'negative',
    title: 'Aluguel de Apartamento',
    amount:'R$ 1.200,00',
    category:{
      name: 'Casa',
      icon:'shopping-bag'
    },
    date:'10/04/2020'
  },
]

export function Dashboard(){
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <UserContainer index={1}>
          <UserInfo>
            <Photo source={{uri:'https://avatars.githubusercontent.com/u/62598805?v=4'}}/>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Fábio</UserName>
            </User>
          </UserInfo>
        
          <IconPower name="power" color={theme.colors.secondary}/>
        </UserContainer>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas" 
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          nameIcon='arrow-up-circle'
        />
        <HighlightCard 
          type="down"
          title="Saídas" 
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 13 de abril"
          nameIcon ="arrow-down-circle"
        />
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
          nameIcon ="dollar-sign"
        />
      </HighlightCards>
      
      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:getBottomSpace()}}
          data={data}
          keyExtractor={(item ) =>item.id}
          renderItem={({item})=>  <TransactionCard data={item}/>}
        />
         
      </Transactions>
      
    </Container>
  );
}
