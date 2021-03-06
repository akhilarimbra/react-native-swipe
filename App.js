import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Ball from './src/Ball'

export default class App extends React.Component {
  render = () => (
    <View style={styles.container}>
      <Ball />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  }
})
