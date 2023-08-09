import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {RootStackParamList} from '../navigation/RootNavigator';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {setTemp} from '../redux/slices/TempSlice';
import TopBar from '../components/TopBar';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const title = 'Home Screen';

const HomeScreen = ({navigation}: Props) => {
  useEffect(() => {}, []);

  return (
    <View className="h-full bg-black">
      <TopBar />
    </View>
  );
};

export default HomeScreen;
