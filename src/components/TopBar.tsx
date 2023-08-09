import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {APP_NAME} from '../constants/AppConstants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useAppSelector} from '../hooks/useReduxHooks';

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
  const appTheme = useAppSelector(
    state => state.persistedReducer.appSetting.theme,
  );

  return (
    <View className="w-full flex-row items-start justify-center border-b border-gray-200 p-4 drop-shadow-md dark:border-gray-700">
      <Pressable
        className="h-7 w-7 items-center justify-center"
        onPress={handleMainlogoClick}
      >
        <Image
          source={
            appTheme == 'dark'
              ? require('../assets/logo_icon.png')
              : require('../assets/logo_icon_light.png')
          }
          className="h-6 w-6 mix-blend-multiply contrast-100"
        />
      </Pressable>
      <Text className="h-7 flex-grow text-center text-lg font-semibold tracking-wider text-gray-900 dark:text-gray-200">
        {APP_NAME}
      </Text>

      <Pressable
        className="h-7 w-7 items-center justify-center"
        onPress={handleMenuClick}
      >
        <MaterialIcons
          name="sort"
          color={appTheme == 'dark' ? 'white' : 'black'}
          size={24}
        />
      </Pressable>
    </View>
  );
};

export default TopBar;
