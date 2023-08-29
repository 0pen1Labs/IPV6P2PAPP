import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HIDDEN_IPV6, IPV6} from '../constants/AppConstants';
import Clipboard from '@react-native-community/clipboard';
import RTNDeviceinfo from 'rtn-deviceinfo/js/NativeDeviceInfo';

type Props = {
  appTheme: string;
};

const IPCard = ({appTheme}: Props) => {
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  const [IpAddress, setIpAddress] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getInfo = async () => {
      const res = await RTNDeviceinfo?.getDeviceInfo();
      console.log('Rtn Info ==========>', res);
      setIpAddress(res);
    };

    getInfo();
  }, []);

  const handleEyeClick = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  const handleLongPress = () => {
    // set here real ip
    if (isEyeOpen && IpAddress) {
      Clipboard.setString(IpAddress);
    }
  };

  return (
    <View className="border border-gray-700 p-2 drop-shadow-md dark:border-gray-500">
      <View className="h-6 flex-row items-center justify-between">
        <Text className="text-lg font-light tracking-wide text-gray-600 dark:text-gray-400">
          Your Address is
        </Text>
        <Pressable onPress={handleEyeClick}>
          <Ionicons
            name={isEyeOpen ? 'eye-outline' : 'eye-off-outline'}
            color={appTheme == 'dark' ? 'gray' : 'black'}
            size={20}
          />
        </Pressable>
      </View>

      {IpAddress ? (
        <View>
          <Pressable onLongPress={handleLongPress}>
            <Text className="mt-2 text-center text-xl font-normal tracking-wider text-gray-800 dark:text-gray-200">
              {isEyeOpen ? IpAddress : HIDDEN_IPV6}
            </Text>
          </Pressable>
          <Text className="mt-2 text-center text-sm font-light tracking-wider text-gray-400">
            {`( Long press to copy )`}
          </Text>
        </View>
      ) : (
        <View>
          <Text className="mt-2 text-center text-xl font-normal tracking-wider text-gray-800 dark:text-gray-200">
            No Ipv6 Found
          </Text>
        </View>
      )}
    </View>
  );
};

export default IPCard;
