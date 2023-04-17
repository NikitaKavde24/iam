import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router";
import { Header, MainMenu } from "../../Molecules";
import styled from "styled-components";

const InternalTemplate = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 98vh;
  background: #F2F2F2;
  scrollbar-width: none;
`;

const InternalTemplateBody = styled.div`
  display: flex;
  background: #F2F2F2;
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  background: #F2F2F2;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: hidden;
  padding-bottom: 16px;
`;

const Content = styled.div`
  flex: 1;
  margin: 0;
  -ms-overflow-style: none; /* Edge, Internet Explorer */
  scrollbar-width: none; /* Firefox */
`;
const Base = (props) => {
  return (
    <InternalTemplate>
      <InternalTemplateBody>
        <MainMenu />
        <ContentWrapper>
          <Content>
            <Header />
            <Outlet />
          </Content>
        </ContentWrapper>
      </InternalTemplateBody>
    </InternalTemplate>
  );
};

Base.propTypes = {
  animate: PropTypes.bool,
};

Base.defaultProps = {
  animate: true,
};

export default Base;
