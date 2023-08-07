import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {RootStackParamList} from '../navigation/RootNavigator';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {setTemp} from '../redux/slices/TempSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const title = 'Home Screen';

const HomeScreen = ({navigation}: Props) => {
  const screenName = useAppSelector(
    state => state.persistedReducer.temp.screenName,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTemp(title));
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View className="h-full items-center justify-center">
      <Text className="w-full text-center text-lg text-gray-800">
        {`Hello, Welcome to Home :)`}
      </Text>
      <Text className="w-full text-center text-lg text-gray-700">
        {`screen name: ${screenName}`}
      </Text>
      <Button onPress={handleGoBack} title="Go to Back" color={'indigo'} />
    </View>
  );
};

export default HomeScreen;
