import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import MyStyle from './MyStyle';
import { useState } from 'react';

export default function Toggle(props) {

  const [toggleOn, setToggleOn] = useState(false);

  function handleClick(){
    setToggleOn(prevvalue => !prevvalue);
    if(toggleOn){
        props.stop();
    }
    else{
        props.start();
    }
  }

  return (
    <TouchableHighlight onPress={handleClick} style={MyStyle.button}>
        <Text style={MyStyle.label} >{toggleOn?'Stop':'Start'}</Text>
     </TouchableHighlight>
    // <Button
    //     onPress={handleClick} 
    //     title=title={toggleOn?'Stop':'Start'}
    // />
  );
}

