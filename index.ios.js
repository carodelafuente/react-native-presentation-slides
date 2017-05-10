import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView } from 'react-native';
import message from './temp'
import ViewContainer from './app/components/ViewContainer'
import StatusBar from './app/components/StatusBar'
import NavBar from './app/components/NavBar'

const words = [
  {firstWord: "This ", line: 1},
  {firstWord: "is ", line: 2},
  {firstWord: "my list view", line: 3}
]

class LiveDemo extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      wordsDataSource: ds.cloneWithRows(words)
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBar style={{backgroundColor: "rebeccapurple"}} />
        <NavBar style={{backgroundColor: "pink"}}>
          <Text> Hello </Text>
        </NavBar>
        <Text style={styles.welcome}> {message} </Text>
        <ListView
          style={styles.textlist}
          dataSource={this.state.wordsDataSource}
          renderRow={(content) => { return this._renderWordRow(content) }}
        />
      </ViewContainer>
    );
  }

  _renderWordRow(content) {
    return (
      <View style={styles.wordRow}>
        <Text style={styles.firstWord}> {content.firstWord} </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 50,
  },
  textlist: {
    marginTop: 100,
    textAlign: 'center',
    margin: 10,
  },
  wordRow: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LiveDemo', () => LiveDemo);
