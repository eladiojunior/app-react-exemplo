import React from 'react';
import { Text } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Configuração',
  };

  render() {
    return (<Text>Config.</Text>);
  }
}
