import React , {Component} from 'react';
import {Text , View , StyleSheet} from 'react-native';
import Firebase from 'firebase';
import {Input, MyButton} from './common';
class LoginForm extends Component{
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }
  onButtonClicked(){
    const {email, password} = this.state;
    this.setState({
      error: '',
      loading : true
    })
      Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        Firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this));
    });
  }

  onLoginSuccess(){
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }
  onLoginFailed(){
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    })
  }
  render(){
    const {error , loading} = this.state;
    const errorMsg = error ? (
      <Text style = {styles.errorStyle}>
      {error}
      </Text>
    ):
    null;

    return(
      <View style={{padding:30}}>
        <View>
        <Input text='Email' inputPlaceHolder='Enter Email'
               onChangeText={(text)=>{
                  this.setState({
                    email: text
                  })
        }}
        value={this.state.email}/>

        </View>
        <View>
          <Input text='Password' inputPlaceHolder='Enter Password'
                 onChangeText={(text)=>{
                    this.setState({
                      password: text
                    })
          }}
          value={this.state.password}
          secureTextEntry/>
          </View>
          {errorMsg}
        <MyButton  spinner={loading}
                   title = 'Login'
                   onPress= {this.onButtonClicked.bind(this)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  errorStyle:{
    fontSize: 20,
    color: 'red',
    paddingTop: 5,
    alignSelf: 'center'
  }
})
export default LoginForm;
