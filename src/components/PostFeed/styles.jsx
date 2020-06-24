import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 20;
  padding-left: 20;
  border-bottom-width: 1;
  border-color: #ccc;
`;

export const Box = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.Image`
  height: 50;
  width: 50;
  border-radius: 25;
  border-width: 1;
  border-color: #ccc;
  margin-right: 10;
`;

export const UserName = styled.Text`
  font-weight: bold;
  margin-bottom: 5;
`;

export const DatePost = styled.Text`
  color: #ccc;
  margin-left: 10;
`;

export const ContentPost = styled.Text`
  color: #000;

`;
