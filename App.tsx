import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {Text,View} from'react-native';
import {Component} from 'react';
import Person from './components/person';
import {Button} from 'react-native';
import Phongcach from './components/phongcach';
import stylebutton from './components/stylebutton';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import styleimage from './components/styleimage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
/*function Hehe ()
{
        return(
          <View>
            <Text>
              tha thu ma son tung ve len thoi


            </Text>

          </View>

          );
      }
//export default Hehe;
function MAD(props){
  return(
    <Text> MAD TEAM THAN DONG   {props.name} tuoi : {props.age}
    {props.children} </Text>



    );


}

class CHO extends Component{
      render(){
        return(
   <Text>
     tao ten la : {this.props.name}
     {this.props.children}

   </Text>

);
      }



}

class human  {
  constructor(){
  this.gender = 'trai';
  
    
  }
  sayGender(){
    return(
    
   <Text> {this.gender} </Text> );
  
  }
  
}




*/

/*
const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return(
    <Button
    title = "GO TO PROFILE"
    onPress = {()=>
        navigation.navigate('Profile')

    }/>


      
    
    

    );
}
const ProfileScreen = ({navigation}) => {
  return(
    <Text>PROFILhgdddfjfgELELLELELE</Text>);

};

const Mystack = ()=> {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "1213123"
          component ={HomeScreen}/>

        <Stack.Screen
          name = "hhaha"
          component = {ProfileScreen}/>



      </Stack.Navigator>

    </NavigationContainer>

);


};
  export default Mystack; */

const Stack  = createStackNavigator();

const MyStack = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "Profile" component ={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    )
}

const HomeScreen = ({navigation}) => {
  return(
    <Button title = "Go Profile" 
    onPress = { () => navigation.navigate('Profile')}/>
    );
};

const ProfileScreen = ({navigation}) => {
  return (<Text>Profile nè</Text>);
};
export default MyStack ;





/*

class Meo extends Component{
  constructor (props){
    super(props);
    this.state ={
      index : 1
    };


  }
  render(){

    return(
      <View style = {stylebutton.container}>


          <Text > 
          </Text>
          <Button
          onPress= {()=> 
            {
              alert('fuckyou');
              this.setState({index : this.state.index +1 })
            }


          }
     >
          </Button>
          <TouchableOpacity 
          onPress ={ () =>{
            this.setState({index : this.state.index -1})
          }
           }

           
          >
      

              <Text style = {stylebutton.buttonText}>GG</Text>
   
          </TouchableOpacity>

          <Image 
          style = {styleimage.tinylogo}
          source = {require('./assets/images/ronaldo.jpg')}></Image>

          <Image style ={styleimage.tinylogo}
          source = {{uri  : 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/41/static/media/react-native-logo.79778b9e.png'}}

          ></Image>



      </View>

    );
  }

}







/*
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}*/
