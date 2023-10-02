import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize:15,
        padding:20,
        textAlign:'right'
      }}>
    <View >
      <Text style={styles.text}>{cartItems.length}</Text>
    </View>
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    paddingTop: 10,
    textAlign: 'right',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'yellow',
    height:40,
    width:40,
    borderRadius:10,
  },
});

export default Header;
