import React from 'react';
import {View , StyleSheet,TouchableOpacity,Text} from 'react-native';
import {Spinner} from './spinner';

const MyButton = ({spinner , onPress , title}) => {
  const content = spinner ?(
    <Spinner/>
  ):(
    <TouchableOpacity
      onPress={onPress}>
      <Text style={styles.buttonStyle}>{title}</Text>
    </TouchableOpacity>
  )
return(
  <View style = {styles.buttonWrapper} >
  {content}
  </View>
)
}
const styles = StyleSheet.create({
  buttonWrapper:{
    marginTop: 20,
    height: 49,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  buttonStyle:{
    color: '#E87B79',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18
  },
inputStyle:{
  fontSize:17,
  flexGrow: 2
}
})
export {MyButton}
