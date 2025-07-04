import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ListingDetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>SAR {item.price} / night</Text>
      <Button title="Book Now (Dummy)" onPress={() => alert('Booking...')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  location: {
    fontSize: 16,
    color: '#555',
  },
  description: {
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: '#2E8B57',
    marginBottom: 10,
  },
});

export default ListingDetailScreen;
