import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParmList} from '../navigation/HomeNavigator';

type Props = NativeStackScreenProps<HomeStackParmList, 'Message'>;

const MessageScreen = ({navigation}: Props) => {
  return (
    <View className="h-full bg-slate-50 dark:bg-black">
      <Text>Message Screen</Text>
    </View>
  );
};

export default MessageScreen;
