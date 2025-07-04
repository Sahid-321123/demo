import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryCard = ({ category }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={category.image} style={styles.image} />
    <Text style={styles.label}>{category.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100,
  },
  label: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CategoryCard;
