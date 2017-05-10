'use strict'
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class NavBar extends Component {
  render() {
    return (
      <View style={[styles.navBar, this.props.style]}>
        <Text style={styles.navText}> Home - Menu - Contact
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  navBar: {
    height: 50,
    backgroundColor: 'pink'
  },
  navText: {
    textAlign: 'center',
    color: 'white',
  }

})

module.exports = NavBar
