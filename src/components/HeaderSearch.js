import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderSearch = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.welcome}>Welcome back sahid</Text>
      <Text style={styles.subtext}>Where are you travelling to?</Text>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#666" />
        <TextInput placeholder="Search in over 200 cities and towns" style={styles.input} />
      </View>
      <Text style={styles.location}>Al Khobar Water Tower - Al Khobar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#eee',
    padding: 16,
    paddingTop: 50,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 14,
    color: '#666',
  },
  searchBar: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  location: {
    marginTop: 10,
    fontSize: 12,
    color: '#666',
  },
});

export default HeaderSearch;
