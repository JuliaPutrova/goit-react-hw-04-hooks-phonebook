import React from 'react';
import PropTypes from 'prop-types';
import { AiFillPhone } from 'react-icons/ai';

import { Title, MainContainer } from './Container.styled';

function Container({ title, children }) {
  return (
    <MainContainer>
      <AiFillPhone size={30} />
      <Title>{title}</Title>
      {children}
    </MainContainer>
  );
}

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Container;
