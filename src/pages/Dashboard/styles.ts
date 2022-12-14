import styled from 'styled-components/native';


import {FlatList, FlatListProps} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {RFPercentage,RFValue} from 'react-native-responsive-fontsize';

import {DataProps} from './';

type props = {
  index:number;
}

/* const theme = useTheme(); */

export const Container = styled.View`
  flex:1;
  background-color:${({theme})=>theme.colors.background};
`;

export const Header = styled.View`
  width:100%;
  height: ${RFPercentage(42)}px;
  justify-content:center;
  align-items:flex-start;
  flex-direction:row;
  background-color:${(props)=> props.theme.colors.primary};
`;

export const UserContainer = styled.View<props>`
  width: 100%;
  padding:0 24px;
  margin-top: 57px;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;

`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items:center;
`;

export const Photo = styled.Image`
  width:${RFValue(50)}px;
  height:${RFValue(50)}px;
  border-radius: 10px;
  
`;
export const User = styled.View`
  margin-left: 18px;

`;

export const UserGreeting = styled.Text`
  color:${(props)=> props.theme.colors.shape};
  font-family:${(props)=> props.theme.fonts.regular}; 
  font-size:${RFValue(18)}px;
`;
export const UserName = styled.Text`
  color:white;
  font-size:${RFValue(18)}px;
  font-family:${(props)=> props.theme.fonts.bold};
`;

export const IconPower = styled(Feather)`
  color:${(props)=> props.theme.colors.secondary};
  font-size:${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal:true,
  showsHorizontalScrollIndicator:false,
  contentContainerStyle: {paddingHorizontal:24},
})`
  width: 100%;
  position: absolute;

   margin-top: 130px;
`;

export const Transactions = styled.View`
  flex:1;
  padding:0 24px;

  margin-top: 14px;
`;

export const Title = styled.Text`
  font-size:${RFValue(18)}px;
  font-family: ${({theme})=>theme.fonts.regular};

`;

export const TransactionList = styled(
  FlatList as new (props:FlatListProps<DataProps>) => FlatList<DataProps>)``;
