import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import {useAppSelector} from '../hooks/useReduxHooks';
import {useColorScheme} from 'nativewind';
import {ColorSchemeSystem} from 'nativewind/dist/style-sheet/color-scheme';
import BottomNavigator, {BottomNavParam} from './BottomNavigator';

export type RootStackParamList = {
  Splash: undefined;
  BottomStack: NavigatorScreenParams<BottomNavParam>;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  // setting Global App theme
  const {setColorScheme} = useColorScheme();
  const appTheme = useAppSelector(
    state => state.persistedReducer.appSetting.theme,
  );

  setColorScheme(appTheme as ColorSchemeSystem);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}
      >
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="BottomStack" component={BottomNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
