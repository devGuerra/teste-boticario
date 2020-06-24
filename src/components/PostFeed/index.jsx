import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Avatar, UserName, Row, DatePost, ContentPost, Box,
} from './styles';

const PostFeed = ({
  name, message, date, avatar,
}) => {
  useEffect(() => {
    console.log(name);
  }, []);
  return (
    <Container>
      <Row>
        <Avatar
          source={{ uri: avatar }}
          resizeMode="contain"
        />
        <Box>
          <Row>
            <UserName>{name}</UserName>
            <DatePost>7d</DatePost>
          </Row>
          <ContentPost>
            {message}
          </ContentPost>
        </Box>
      </Row>
    </Container>
  );
};

export default PostFeed;

PostFeed.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
