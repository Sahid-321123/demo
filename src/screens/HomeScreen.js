import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import HeaderSearch from '../components/HeaderSearch';
import CityCircle from '../components/CityCircle';
import CategoryCard from '../components/CategoryCard';
import { cities, categories } from '../constants/data';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeaderSearch />

      <Text style={styles.sectionTitle}>Everywhere, you have a home</Text>
      <FlatList
        horizontal
        data={cities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <CityCircle city={item} />}
        contentContainerStyle={styles.horizontalList}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>For Every Moment</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <CategoryCard category={item} />}
        contentContainerStyle={styles.horizontalList}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Top Picks For You 🏡</Text>
      {/* You can include cards here similarly */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
  horizontalList: {
    paddingLeft: 16,
  },
});

export default HomeScreen;
