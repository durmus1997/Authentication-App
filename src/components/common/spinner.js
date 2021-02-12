import React from 'react';
import {ActivityIndicator, View , StyleSheet} from 'react-native';


const Spinner = () => {
  return (
    <View style = {styles.spinner}>
    <ActivityIndicator color="#E87B79" />
    </View>
  )
}

const styles = StyleSheet.create({
  spinner:{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export {Spinner}
