import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Card } from './controls/card.js'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {title: "Home"};
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "rgb(255,255,255)",
    padding: 8
  }
});

export { Home };