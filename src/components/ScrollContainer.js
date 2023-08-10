import React from 'react';
import styled from 'styled-components';

const StyledScrollContainer = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 60px); /* Subtract navbar height */
`;

const ScrollContainer = ({ children }) => {
    return <StyledScrollContainer>{children}</StyledScrollContainer>;
};

export default ScrollContainer;
