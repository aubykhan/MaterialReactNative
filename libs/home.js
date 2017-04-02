import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert
} from 'react-native';
import { Card } from './controls/card.js';
import { StackNavigator } from 'react-navigation';

class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props) {
    super(props);
    this.state = {title: "Home"};
  }
  
  _onButtonPress() {
    Alert.alert('Button was pressed', 'A button was pressed');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Button title="Navigate" onPress={() => navigate('Second', { name: 'Home'})}></Button>
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

const App = new StackNavigator({
  Main: {screen: Home},
  Second: {screen: Home}
});

export { Home, App };