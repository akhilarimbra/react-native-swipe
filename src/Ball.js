import React from 'react'
import { View, Animated, Text } from 'react-native'

export default class Ball extends React.Component {
  componentWillMount = () => {
    this.position = new Animated.ValueXY({ x: 0, y: 0 })

    Animated.spring(this.position, {
      toValue: { x: 190, y: 190 }
    }).start()
  }

  render = () => (
    <Animated.View style={this.position.getLayout()}>
      <View style={styles.ball} />
      <Text>Hello World</Text>
    </Animated.View>
  )
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
}
