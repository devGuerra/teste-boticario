import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

import colors from '../../constants/colors';

export const TouchableOpacity = styled.TouchableOpacity`
  background: #000;
  height: ${normalize(50)};
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: ${normalize(10)};
  margin-top: ${(props) => (props.mt ? normalize(props.mt) : normalize(10))};
  margin-bottom: ${(props) => (props.mb ? normalize(props.mb) : 0)};
  background-color: ${(props) => (props.background ? props.background : colors.default)};
`;

export const Text = styled.Text`
  color: ${(props) => (props.color ? props.color : '#fff')};
  font-size: ${normalize(16)};
  font-weight: bold;
`;
