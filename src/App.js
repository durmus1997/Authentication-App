import React , {Component} from 'react';
import {Text , View,StyleSheet} from 'react-native';
import Firebase from 'firebase';
import Banner from './components/banner'
import LoginForm from './components/loginform'
import {Spinner , MyButton} from './components/common'
class App extends Component{
state={
  loggedIn: null
}

    componentDidMount(){
    Firebase.initializeApp({
    apiKey: 'AIzaSyBHKjAFf2IK9JjKhUBCHRVPuepraPZBJ6g',
    authDomain: 'authentication-b089f.firebaseapp.com',
    projectId: 'authentication-b089f',
    storageBucket: 'authentication-b089f.appspot.com',
    messagingSenderId: '520535836822',
    appId: '1:520535836822:web:90eec83415cf7229319ab7',
    measurementId: 'G-P9KSE50MHE'
  });

  Firebase.auth().onAuthStateChanged((user) => {
    const loggedIn = user ? true : false;

    this.setState({
      loggedIn
    })
  })
}


renderContent(){
  const {loggedIn} = this.state;
  switch (loggedIn) {
    case true:
       return(
         <MyButton onPress={() => Firebase.auth().signOut()}
                   title = 'Logout'
                   spinner = {false}/>
      )
    case false:
      return(
        <LoginForm/>
      )
    default:
      return(
        <Spinner />
      )
  }
}
  render(){
    return(
      <View style = {styles.appContainer}>
      <Banner text='Authentication' />
      {this.renderContent()}
      </View>
    )
  }
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
  appContainer:{
  backgroundColor: '#F3F3F3',
  flex:1,
}
})

export default App;
