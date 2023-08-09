import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {APP_NAME} from '../constants/AppConstants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  title?: string;
};

const handleMainlogoClick = () => {
  console.log('Main logo clicked');
};

const handleMenuClick = () => {
  console.log('Menu clicked');
};

const TopBar = ({title}: Props) => {
  return (
    <View className="w-full flex-row items-start border-b border-gray-700 p-4  drop-shadow-md">
      <Pressable
        className="h-7 w-7 items-center justify-center p-1"
        onPress={handleMainlogoClick}
      >
        <Image
          source={require('../assets/logo_icon.png')}
          className="h-6 w-6"
        />
      </Pressable>
      <Text className="h-full flex-grow text-center text-lg text-gray-200">
        {APP_NAME}
      </Text>

      <Pressable
        className="h-7 w-7 items-center justify-center p-1"
        onPress={handleMenuClick}
      >
        <MaterialIcons name="sort" color={'white'} size={24} />
      </Pressable>
    </View>
  );
};

export default TopBar;
