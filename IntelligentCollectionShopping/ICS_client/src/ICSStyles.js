import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
const BUTTON_HEIGHT = 35;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  normalText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    //resizeMode: 'cover',
  },
  input: {
    backgroundColor: 'rgba(211, 211, 211, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#000000',
  },
  inputWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginInputContainer: {
    flex: 1,
    alignItems: 'center',
  },
  loginButton: {
    alignItems: 'center',
    width: DEVICE_WIDTH - 40,
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  registerButton: {
    alignItems: 'center',
    width: DEVICE_WIDTH - 100,
    justifyContent: 'center',
    backgroundColor: '#F03000',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  searchButton: {
    alignItems: 'center',
    width: 30,
    justifyContent: 'center',
    backgroundColor: '#F03000',
    height: 30,
    borderRadius: 20,
    zIndex: 100,
  },
  profileInfo: {
    fontSize: 20,
    textAlign: 'left',
    color: '#000000',
    width: DEVICE_WIDTH/2,
    margin: 10,
  },
  labelText: {
    fontSize: 20,
    textAlign: 'right',
    //backgroundColor: 'powderblue',
    color: '#0000FF',
    width: DEVICE_WIDTH/2,
    margin: 10,
  },
  titleText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#0000FF',
  },
  subtitleText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
  profileContainer: {
    flex: 1,
  },
  flatview: {
    flex: 1,
    flexDirection: 'row',
    
  },
  listItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: 100,
    color: '#000000',
  },
  imageView: {
 
    width: '50%',
    height: 100 ,
    margin: 7,
    borderRadius : 7
 
},
  leftButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
    borderRadius: 20,
    zIndex: 100,
    margin: 10,
    height: BUTTON_HEIGHT,
  },
  listSubtitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});