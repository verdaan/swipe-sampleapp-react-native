import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements'

import Deck from './src/Deck'
import { DATA } from './src/Data'

export default class App extends React.Component {

  // function that takes in array/object and returns presentable JSX
  renderCard = (item) => {
    return (
      <Card
        title={item.text}
        image={{ uri: item.uri }}

      >
        <Text style={{ marginBottom: 10 }}>
          I can customize the card further
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03a9f4"
          title="View Now!"
        />
      </Card>
    )
  }

  renderNoMoreCards = () => {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>
          There is no more content here
        </Text>
        <Button
          title="Get More"
          backgroundColor="#03A9F4"
        />
      </Card>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
