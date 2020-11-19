import React from 'react';
import {Text , View, StyleSheet, StatusBar} from 'react-native';

const Home = () => {
  return (
      <View style={styles.container}>
          <Text> Home </Text>
      </View>
  )
}


//container
const styles = StyleSheet.create({
    container : {
        flex:1,
        marginTop: StatusBar.currentHeight || 0
    }
})
export default Home;