import styled from 'styled-components/native';
import normalize from 'react-native-normalize';
import colors from '../../constants/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.default};
  padding-left:  ${normalize(20)};
  padding-right:  ${normalize(20)};
`;

export const Box = styled.View`
  flex: 1;
  margin-top:  ${normalize(20)};
`;
export const BoxImage = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
 margin-top:  ${normalize(200)};
`;
