import React from 'react';
import { View, TextInput } from 'react-native';

import {
  Input, Text, Container,
} from './styles';

export default function InputField({
  bg,
  title,
  type,
  error,
  placeholder,
  numberOfLines,
  multiline,
  maxLength,
  autoFocus,
  color,
  capitalize,
  ...props
}) {
  return (
    <>
      {title && (
      <Text bg={bg} error={error} color={color}>
        {title}
      </Text>
      )}
      <Container bg={bg} error={error}>

        {type === 'TextInput' ? (
          <TextInput
            {...props}
            textAlignVertical="top"
            numberOfLines={numberOfLines}
            placeholder={placeholder}
            error={error}
            multiline={multiline}
            maxLength={maxLength}
          />
        ) : (
          <Input
            {...props}
            bg={bg}
            placeholder={placeholder}
            error={error}
            autoFocus={autoFocus}
            autoCapitalize={capitalize || 'none'}
            secureTextEntry={type === 'Password'}
          />
        )}
      </Container>
    </>
  );
}
