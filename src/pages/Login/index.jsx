import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Box, Logo, BoxImage,
} from './styles';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import colors from '../../constants/colors';

const Login = ({ navigation }) => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  return (
    <Container>
      <BoxImage>
        <Logo source={require('../../assets/images/logo-white.png')} resizeMode="center" />
      </BoxImage>
      <Box>
        <InputField
          error={false}
          value={email}
          onChangeText={(value) => SetEmail(value)}
          bg={colors.white}
          color="#fff"
          title="Email"
          type="Email"
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
          title="Login"
          background={colors.blackGreen}
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Criar conta"
          background={colors.default}
          onPress={() => navigation.navigate('Register')}
        />
      </Box>
    </Container>
  );
};

export default Login;

Login.propTypes = {
  navigation: PropTypes.func.isRequired,
};
