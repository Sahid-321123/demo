import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CityCircle = ({ city }) => (
  <TouchableOpacity style={styles.container}>
    <Image source={city.image} style={styles.image} />
    <Text style={styles.label}>{city.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  label: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default CityCircle;
