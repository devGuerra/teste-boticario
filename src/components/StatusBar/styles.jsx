import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Bar = styled.StatusBar`
  flex: 1;
`;

export const Container = styled.View`
  height: ${Platform.OS === 'ios' ? 38 : 0};
`;
