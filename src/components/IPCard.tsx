import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HIDDEN_IPV6, IPV6} from '../constants/AppConstants';
import Clipboard from '@react-native-community/clipboard';

type Props = {
  appTheme: string;
};

const IPCard = ({appTheme}: Props) => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const hendleEyeClick = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  const handleLongPress = () => {
    // set here real ip
    if (isEyeOpen) {
      Clipboard.setString(IPV6);
    }
  };

  return (
    <View className="border border-gray-700 p-2 drop-shadow-md dark:border-gray-500">
      <View className="h-6 flex-row items-center justify-between">
        <Text className="text-lg font-light tracking-wide text-gray-600 dark:text-gray-400">
          Your Address is
        </Text>
        <Pressable onPress={hendleEyeClick}>
          <Ionicons
            name={isEyeOpen ? 'eye-outline' : 'eye-off-outline'}
            color={appTheme == 'dark' ? 'gray' : 'black'}
            size={20}
          />
        </Pressable>
      </View>

      <Pressable onLongPress={handleLongPress}>
        <Text className="mt-2 text-center text-xl font-normal tracking-wider text-gray-800 dark:text-gray-200">
          {isEyeOpen ? IPV6 : HIDDEN_IPV6}
        </Text>
      </Pressable>
      <Text className="mt-2 text-center text-sm font-light tracking-wider">
        ( Long press to copy )
      </Text>
    </View>
  );
};

export default IPCard;
