import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {RootStackParamList} from '../navigation/RootNavigator';
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
    opacity: withSequence(withTiming(0), withDelay(500, withTiming(1))),
  }));

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomStack', {
        screen: 'HomeStack',
        params: {screen: 'Home'},
      });
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
      <View className="absolute z-0 h-full w-full bg-transparent">
        <View className="flex-grow items-center justify-center">
          <Animated.Image
            source={require('../assets/logo.png')}
            style={[
              {
                backgroundColor: 'transparent',
                width: 400,
                height: 400,
              },
              animatedStyle,
            ]}
          />
        </View>

        <View className="mb-10 items-center justify-center bg-transparent">
          <Animated.Image
            style={[animatedStyle]}
            source={require('../assets/main_logo.png')}
            className="h-9 w-40"
          />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
