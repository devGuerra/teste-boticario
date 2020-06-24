import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Box, Logo, BoxImage,
} from './styles';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import colors from '../../constants/colors';

const Register = ({ navigation }) => {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  return (
    <Container>
      <BoxImage>
        <Logo source={require('../../assets/images/logo-white.png')} resizeMode="center" />
      </BoxImage>
      <InputField
        error={false}
        value={name}
        onChangeText={(value) => SetName(value)}
        bg={colors.white}
        color="#fff"
        title="Nome"
      />
      <InputField
        error={false}
        value={email}
        onChangeText={(value) => SetEmail(value)}
        bg={colors.white}
        color="#fff"
        title="Email"
      />
      <InputField
        error={false}
        value={password}
        type="Password"
        onChangeText={(value) => SetPassword(value)}
        bg={colors.white}
        color="#fff"
        title="Senha"
      />
      <Button
        title="Continuar"
        background={colors.blackGreen}
        onPress={() => navigation.navigate('Home')}
      />
    </Container>
  );
};

export default Register;

Register.propTypes = {
  navigation: PropTypes.func.isRequired,
};
