import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Image} from 'react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (

      <Image
      source={require('../assets/tree-37.svg')}
      style={{width:"60%"}}
       />
    )
  }
}
