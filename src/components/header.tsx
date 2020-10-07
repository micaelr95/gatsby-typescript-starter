import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  siteTitle: string;
}

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Div = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const H1 = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => (
  <StyledHeader>
    <Div>
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
    </Div>
  </StyledHeader>
);

export default Header;
