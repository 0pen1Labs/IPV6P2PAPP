import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {RootStackParamList} from '../navigation/RootNavigator';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {setTemp} from '../redux/slices/TempSlice';
import LottieView from 'lottie-react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
} from 'react-native-reanimated';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen = ({navigation}: Props) => {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withSequence(withTiming(0), withTiming(1)),
  }));

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View className="relative flex-grow">
      <LottieView
        style={{flex: 1}}
        source={require('../assets/splash1.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
      />
      <View className="absolute z-10 h-full w-full items-center justify-center bg-transparent">
        <Animated.Text
          style={[
            {
              fontStyle: 'normal',
              fontWeight: '600',
              color: 'white',
              fontSize: 40,
              letterSpacing: 0.5,
            },
            animatedStyle,
          ]}
        >
          IPV6
        </Animated.Text>
      </View>
    </View>
  );
};

export default SplashScreen;
