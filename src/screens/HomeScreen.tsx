import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {RootStackParamList} from '../navigation/RootNavigator';
import TopBar from '../components/TopBar';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const title = 'Home Screen';

const HomeScreen = ({navigation}: Props) => {
  useEffect(() => {}, []);

  return (
    <View className="h-full bg-slate-50 dark:bg-black">
      <TopBar />
    </View>
  );
};

export default HomeScreen;
