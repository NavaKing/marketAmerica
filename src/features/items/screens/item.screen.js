import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ItemInfoCard } from "../components/item-info-card.component";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;


export const ItemScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
      data={[
        { name: 1 }, 
        { name: 2 },
        { name: 3 },
        { name: 4 }
      ]}
      renderItem={() => <ItemInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);

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
