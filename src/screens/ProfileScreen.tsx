import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomNavParam} from '../navigation/BottomNavigator';

type Props = NativeStackScreenProps<BottomNavParam, 'Profile'>;

const ProfileScreen = (props: Props) => {
  return (
    <View className="h-full bg-slate-50 dark:bg-black">
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
