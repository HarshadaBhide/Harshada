import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  AsyncStorage,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  TextInput,
  View,
  Alert,
  YellowBox
} from 'react-native';

import {Actions, ActionConst} from 'react-native-router-flux';


import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';

export default class ICSLogin extends Component {

  state ={ isLoading:true, user1: {}, uId:'', pwd:'',  myKey: '123'}
  constructor(){
    super();
    
    this.state = {
      uId: "",
      pwd: "",
      myKey: '123',
    }
    this.handleUid = this.handleUid.bind(this);
    this.handlePwd = this.handlePwd.bind(this)
    this.login = this.login.bind(this);
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: isMounted(...) is deprecated',
      'Warning: isMounted is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: Each child in an array or iterator should have a unique "key" prop.',
    ]); 
  }

  handleUid = (text) => {
      this.setState({ uId: text })
  }
  handlePwd = (text) => {
      this.setState({ pwd: text })
  }

  register(){
    Actions.registerScene();

  }

  saveData(key, value){
    try{
            AsyncStorage.setItem(key, value);
          }
          catch(error)
          {
            console.error('AsyncStorage error : ' + error.message);
          }
  }



  login(uid, pass){
   // debugger;
    return fetch('http://10.0.2.2:5000/users1/authenticate', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: uid,
          userPassword: pass,
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if(!responseJson.error)
        {
          this.saveData('userObj', JSON.stringify(responseJson));

          this.saveData('currentZip', responseJson['user1'].userAddress);
          Actions.homeScene();
        }
        else
        {
          Alert.alert(
              'Invalid Login',
              'User id or password are incorrect.',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              ],
              { cancelable: false }
            )
        }
      })
      .catch((error) =>{
        console.error(error);
        
      });
  }



  render() {
    return (
      <ICSPage>
        <Text></Text>
          <Text></Text>
          <Text style={ICSStyles.titleText}>Intelligent Collection Shopping </Text>
          <Text></Text>
          <Text></Text>
          <Text style={ICSStyles.subtitleText}>Login to proceed </Text>
          
        <View style={ICSStyles.inputWrapper}>
          <TextInput
            style={ICSStyles.input}
            placeholder="username"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handleUid}
          />
          <Text></Text>
          <Text></Text>
          <TextInput
            style={ICSStyles.input}
            placeholder="password"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handlePwd}
          />
          <Text></Text>
          <Text></Text>
          <Button
            style={ICSStyles.loginButton}
            onPress={() => this.login(this.state.uId, this.state.pwd)}
            title="Login"
          />
          <Text></Text>
          <Text></Text>
          <Button
            style={ICSStyles.registerButton}
            onPress={() => this.register()}
            title="Register"
          />
        
        </View>
      
      </ICSPage>
    );
  }
}