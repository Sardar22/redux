import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from './redux/actions';


const Product = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer)
  const[isAdded,setIsAdded ] =useState(false)


  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }
  const handelRemoveFromCart = (item) => {
    console.log('Removing from cart:', item);
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    console.log('Cart items:', cartItems);
    if (cartItems && cartItems.length) {
      cartItems.forEach((element) => {
        if (element.name === item.name) {
          setIsAdded(true);
        }
      });
    }
  }, [cartItems]);

  console.log('isAdded:', isAdded);
  const products = [
    {
      name: 'Samsung mobile',
      color: 'black',
      price: 50000,
      image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      name: 'Apple iPhone',
      color: 'white',
      price: 150000,
      image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      name: 'Nokia mobile',
      color: 'blue',
      price: 55000,
      image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((item, index) => (
        <View key={index} style={styles.product} >
          <Text style={{ fontSize: 25 }}>{item.name}</Text>
          <Text style={{ fontSize: 25 }}>{item.price}</Text>
          <Text style={{ fontSize: 25 }}>{item.color}</Text>
          <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
          {
            isAdded?
            <Button title='Remove to cart' onPress={() => handelRemoveFromCart(item)} />
            
             :

            <Button title='Add to cart' onPress={() => handleAddToCart(item)} />
          }


        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Added background color
  },
  product: {
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderBottomWidth: 10,
    borderWidth: 5,
    borderBottomColor: 'light brown',
  },

}
);

export default Product;
 