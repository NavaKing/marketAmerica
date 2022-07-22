import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ItemInfoCard } from "../components/item-info-card.component";

import { ItemContext } from "../../../services/items/items.context";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;


export const ItemScreen = () => {
  const itemContext = useContext(ItemContext);
  console.log(itemContext)
  return (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
      data={ itemContext.restaurants}
      renderItem={() => <ItemInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
