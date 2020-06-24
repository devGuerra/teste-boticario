import React, { useState } from 'react';
import { View } from 'react-native';

import { Container, Title } from './styles';
import colors from '../../constants/colors';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

const CreatePost = ({ navigation }) => {
  const [post, setPost] = useState('');
  return (
    <Container>
      <View>
        <Title>Nova postagem</Title>

        <InputField
          type="TextInput"
        // error={descError}
          value={post}
          autoCapitalize="none"
          bg={colors.white}
          border="#ccc"
          placeholder="Faça uma nova postagem"
          onChangeText={(text) => setPost(text)}
          numberOfLines={6}
          multiline
          maxLength={280}
        />
      </View>
      <Button
        title="Enviar"
        background={colors.default}
        onPress={() => navigation.navigate('Feed')}
      />
    </Container>
  );
};

export default CreatePost;
