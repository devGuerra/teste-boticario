import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Icon } from './styles';

const PostButton = ({ onPress }) => (
  <Container onPress={() => onPress()}>
    <Icon source={require('../../assets/images/postCreate.png')} resizeMode="contain" />
  </Container>
);

export default PostButton;
