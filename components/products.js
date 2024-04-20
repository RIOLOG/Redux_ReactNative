import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {addToCart, removeFromCart} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';

const Products = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveCart = item => {
    dispatch(removeFromCart(item.name));
  };

  console.warn(cartItems);
  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems, item.name]);

  return (
    <View key={item.name}>
      <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text style={{fontSize: 24}}>{item.price}</Text>
      <Text style={{fontSize: 24}}>{item.color}</Text>
      {isAdded ? (
        <Button
          title="Remove from Cart"
          onPress={() => handleAddToCart(item)}
        />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Products;
