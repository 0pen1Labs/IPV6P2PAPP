import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {RootStackParamList} from '../navigation/RootNavigator';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {setTemp} from '../redux/slices/TempSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;
const title = 'Splash Screen';

const SplashScreen = ({navigation}: Props) => {
  const screenName = useAppSelector(
    state => state.persistedReducer.temp.screenName,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTemp(title));
  }, []);

  const handleOnPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View className="h-full items-center justify-center">
      <Text className="w-full text-center text-lg text-gray-700">
        {`Hello, Welcome to new world :)`}
      </Text>
      <Text className="w-full text-center text-lg text-gray-700">
        {`screen name: ${screenName}`}
      </Text>
      <Button onPress={handleOnPress} title="Go to home" color={'indigo'} />
    </View>
  );
};

export default SplashScreen;
