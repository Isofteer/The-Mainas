import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Dashboard from './app/dashboard'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Dashboard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  backgroundColor: '#fff',
  
  },
});
