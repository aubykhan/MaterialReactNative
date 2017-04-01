import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {title: "Home"};
  }
  
  render() {
    return (
      <View style={styles.card}></View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { height: 1, width: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2
  }
});

export { Card };