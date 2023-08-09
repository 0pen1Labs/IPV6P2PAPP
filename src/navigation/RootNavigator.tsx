import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {useColorScheme} from 'nativewind';
import {setTheme} from '../redux/slices/AppSettingsSlice';
import {ColorSchemeSystem} from 'nativewind/dist/style-sheet/color-scheme';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
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
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
