import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const cardData = useSelector(state => state.reducer);
  const [cartItem, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cardData.length);
  }, [cardData]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'orange',
        }}>
        {cartItem}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Header;
