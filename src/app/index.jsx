import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

// Rebass components
import { Flex } from "rebass";

// Theme components
import Footer from "theme/components/Footer";

// Feature Components
import AlbumList from "app/AlbumList";
import ActionModal from "app/ActionModal";

// Styles
const MainContainer = styled(Flex)`
  height: 100vh;
  flex-direction: column;
`;

const LogikcullRecords = memo(() => (
  <MainContainer >
    <Flex flex="1" >
      <Switch>
        <Route component={AlbumList} />
      </Switch>
    </Flex>
    <Flex >
      <Footer/>
    </Flex>
    <ActionModal />
  </MainContainer>
));

export default LogikcullRecords;
