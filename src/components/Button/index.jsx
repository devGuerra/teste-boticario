import React from 'react';
import { ActivityIndicator } from 'react-native';

import { TouchableOpacity, Text } from './styles';

export default function Button({
  mb,
  mt,
  onPress,
  background,
  loading,
  title,
  color,
}) {
  return (
    <TouchableOpacity mb={mb} mt={mt} background={background} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text color={color}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
