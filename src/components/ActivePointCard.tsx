import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';

type Props = {
  name: string;
  message: string | null;
  onPress: Function;
};

const ActivePointCard = ({name, message, onPress}: Props) => {
  return (
    <Pressable
      className="flex-row items-center p-4"
      onPress={() => onPress()}
      android_ripple={{
        color: '#e7e7e71c',
      }}
    >
      <Avatar.Text size={45} label={name.slice(0, 2)} />
      <View className="flex-grow flex-col px-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-normal text-gray-800 dark:text-gray-100">
            {name}
          </Text>
          <Text className="text-mb font-normal text-gray-800 dark:text-gray-100">
            {'12 Jun'}
          </Text>
        </View>
        <Text className="text-lg font-light text-gray-500">
          {message ? message : 'No new message !'}
        </Text>
      </View>
    </Pressable>
  );
};

export default ActivePointCard;
