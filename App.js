import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Product from './components/Product';
import { Provider } from 'react-redux';
import store from './components/redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header style={styles.header}/>
        <Product style={styles.product} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    color:'black',
    
  }
});
