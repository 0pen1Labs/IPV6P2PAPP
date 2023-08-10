import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import HomeNavigator, {HomeStackParmList} from './HomeNavigator';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';
import {useAppSelector} from '../hooks/useReduxHooks';

export type BottomNavParam = {
  HomeStack: NavigatorScreenParams<HomeStackParmList>;
  Profile: undefined;
};

const BottomNavStack = createMaterialBottomTabNavigator<BottomNavParam>();

const BottomNavigator = () => {
  const appTheme = useAppSelector(
    state => state.persistedReducer.appSetting.theme,
  );

  return (
    <BottomNavStack.Navigator
      initialRouteName="HomeStack"
      activeColor={appTheme == 'dark' ? 'white' : 'black'}
      labeled={true}
      inactiveColor={'gray'}
      barStyle={{
        backgroundColor: 'black',
        height: 70,
        borderTopWidth: 0.5,
        borderTopColor: 'gray',
      }}
    >
      <BottomNavStack.Screen
        name="HomeStack"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" color={color} size={20} />
          ),
        }}
      />

      <BottomNavStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" color={color} size={20} />
          ),
        }}
      />
    </BottomNavStack.Navigator>
  );
};

export default BottomNavigator;
