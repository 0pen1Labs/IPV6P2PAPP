import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';

export type HomeStackParmList = {
  Home: undefined;
  Message: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParmList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Message" component={MessageScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
