'use strict'
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class StatusBar extends Component {
  render() {
    return (
      <View style={[styles.statusBar, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({

  statusBar: {
    height: 20,
    backgroundColor: 'white'
  }

})

module.exports = StatusBar
