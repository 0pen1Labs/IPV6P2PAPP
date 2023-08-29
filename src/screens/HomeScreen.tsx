import {FlatList, View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import TopBar from '../components/TopBar';
import {useAppSelector} from '../hooks/useReduxHooks';
import IPCard from '../components/IPCard';
import {HomeStackParmList} from '../navigation/HomeNavigator';
import {FAB} from 'react-native-paper';
import {DummyList} from '../Utils/DummyList';
import ActivePointCard from '../components/ActivePointCard';

type Props = NativeStackScreenProps<HomeStackParmList, 'Home'>;
const title = 'Home Screen';

const HomeScreen = ({navigation}: Props) => {
  const appTheme = useAppSelector(
    state => state.persistedReducer.appSetting.theme,
  );

  useEffect(() => {}, []);

  const handleFABClick = () => {};

  const handleOnPointClick = (item: any) => {
    console.log(item);
    navigation.navigate('Message');
  };

  return (
    <View className="h-full bg-slate-50 dark:bg-black">
      <TopBar appTheme={appTheme} />
      <View className="mt-3 p-2">
        <IPCard appTheme={appTheme} />
      </View>

      <FlatList
        data={DummyList}
        renderItem={({item}) => (
          <ActivePointCard
            name={item.name}
            message={item.currentMessage}
            onPress={() => handleOnPointClick(item)}
          />
        )}
        keyExtractor={item => item.key}
      />

      <View>
        <FAB
          icon={'plus'}
          label="Add"
          color={`${appTheme == 'dark' ? 'black' : 'gray'}`}
          uppercase={true}
          theme={{
            dark: true,
            version: 3,
            colors: {
              primaryContainer: `${appTheme == 'dark' ? '#D3D3D3' : '#424242'}`,
            },
          }}
          className="right- absolute bottom-0 right-0 m-4"
          onPress={handleFABClick}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
