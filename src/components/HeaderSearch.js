import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Update with your actual image path or import
const bgImage = require('../assets/header.jpg'); // rename and move image here

const HeaderSearch = () => {
  return (
    <ImageBackground source={bgImage} style={styles.header} resizeMode="cover">
      <View style={styles.overlay}>
        <View style={styles.row}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg' }} style={styles.profileIcon} />
          <Icon name="notifications-outline" size={24} color="#fff" />
        </View>
        <Text style={styles.welcome}>Welcome back sahid</Text>
        <Text style={styles.subtext}>Where are you travelling to?</Text>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#666" />
          <TextInput
            placeholder="Search in over 200 cities and towns"
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>
        <Text style={styles.location}>Al Khobar Water Tower - Al Khobar</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    // height: 300,
    width: '100%',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 16,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtext: {
    fontSize: 14,
    color: '#eee',
  },
  searchBar: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#000',
  },
  location: {
    marginTop: 10,
    fontSize: 12,
    color: '#fff',
  },
});

export default HeaderSearch;
