import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {TextInput} from 'react-native';
function Ham1(props){
  const a = 6;
  return (
    <View>
    <Text> cau chao dau tien : {a}</Text>
    <Text>{props.thuoctinh1}</Text>
    <Text>{props.thuoctinh2}</Text>
    </View>
  );


}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <TextInput placeholder = " nhap vao "/>
      <Ham1 thuoctinh1={"pr11ops1"}
      thuoctinh2={"prop2"}/>
 
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 150,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
