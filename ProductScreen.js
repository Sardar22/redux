import React from "react";
import { Text, View,Image, Button, ScrollView } from 'react-native';

    const Products = [
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
      <View style={styles.prod}>

        <ScrollView>
        {
          Products.map((item)=> <View>
            <Text style={{fontSize:25}}> {item.name} </Text>
            <Text style={{fontSize:25}}> {item.price} </Text>
            <Text style={{fontSize:25}}> {item.color} </Text>
            <Image style={{width:200,height:200}} source={{uri:item.image}}/>
            <Button title='Add to cart'/>
          </View> )
        }
        </ScrollView>
      </View>
    );
  export default Products;