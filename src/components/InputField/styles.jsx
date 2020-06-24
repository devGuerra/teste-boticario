import styled from 'styled-components/native';
import normalize from 'react-native-normalize';
import colors from '../../constants/colors';

export const Container = styled.View`
  position: relative;
  border-radius: ${normalize(10)};
  margin-top: ${normalize(10)};
  margin-bottom: ${normalize(10)};
  background-color: ${(props) => (props.bg ? props.bg : 'transparent')};
  border-color: ${(props) => (props.error ? colors.red : '#000')};
  border-width: ${(props) => (props.border ? normalize(1) : 0)};
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Input = styled.TextInput`
  padding-top: ${normalize(15)};
  padding-bottom: ${normalize(15)};
  padding-left: ${normalize(15)};
  padding-right: ${normalize(15)};
  font-size: ${normalize(16)};
  color: ${(props) => (props.error ? colors.red : colors.black)};
  background-color: transparent;
  border-color: transparent;
`;
export const TextInput = styled.TextInput`
  height: ${normalize(200)};
  padding-top: ${normalize(5)};
  padding-bottom: ${normalize(5)};
  padding-left: ${normalize(5)};
  padding-right: ${normalize(5)};
  color: ${(props) => (props.error ? colors.red : colors.black)};
  border-color: #ccc;
  border-width: 1;
  border-radius: 5;
`;

export const Text = styled.Text`
  font-size: ${normalize(18)};
  color: ${(props) => (props.error ? colors.red : props.color ? props.color : colors.black)};
  padding: 0 5px;
  font-size: ${normalize(14)};
  z-index: 10;
`;

export const Error = styled.Text`
  font-size: ${normalize(18)};
  color: red;
  position: absolute;
  top: -10px;
  left: 10px;
  padding: 0 5px;
  font-size: ${normalize(14)};
  background-color: ${(props) => (props.bg ? colors.chatBackground : '#fff')};
  z-index: 10;
`;
