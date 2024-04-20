import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import Products from './components/products';
import Header from './components/header';

const App = () => {
  const products = [
    {name: 'Product 1', price: '$10', color: 'Red'},
    {name: 'Product 2', price: '$20', color: 'Blue'},
    {name: 'Product 3', price: '$30', color: 'Green'},
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {products.map(item => (
          <Products item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
