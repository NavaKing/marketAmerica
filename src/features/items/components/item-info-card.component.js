import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const ItemCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ItemCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled.Text`
font-family: ${(props) => props.theme.fonts.body};
font-size: ${(props) => props.theme.fontSizes.caption};
background-color: ${(props) => props.theme.colors.bg.primary};
`

const Info = styled.View `
padding: ${(props) => props.theme.space[3]};
`

export const ItemInfoCard = ({ item = {} }) => {
  const {
    name = "Some item",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = " 100 some radom street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = item;

  return (
    <ItemCard elevation={5}>
      <ItemCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
      <Title>{name}</Title>
      <Address>{address}</Address>
      </Info>
    </ItemCard>
  );
};
