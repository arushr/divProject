import React from 'react';
import styled from 'styled-components';

import Graph from './Graph';

const GraphWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10%;
  padding-right: 10%;
`;

const Container = styled.div`
  height: 100vh;
  background-color: dimgray;
`;

const LandingPage = () => (
  <Container>
    <GraphWrapper>
      <Graph />
    </GraphWrapper>
  </Container>
);

export default LandingPage;
