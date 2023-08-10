import {ScrollView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import TopBar from '../components/TopBar';
import {useAppSelector} from '../hooks/useReduxHooks';
import IPCard from '../components/IPCard';
import {HomeStackParmList} from '../navigation/HomeNavigator';

type Props = NativeStackScreenProps<HomeStackParmList, 'Home'>;
const title = 'Home Screen';

const HomeScreen = ({navigation}: Props) => {
  const appTheme = useAppSelector(
    state => state.persistedReducer.appSetting.theme,
  );

  useEffect(() => {}, []);

  return (
    <View className="h-full bg-slate-50 dark:bg-black">
      <TopBar appTheme={appTheme} />
      <View className="mt-3 p-2">
        <IPCard appTheme={appTheme} />
      </View>
      <ScrollView></ScrollView>
    </View>
  );
};

export default HomeScreen;
