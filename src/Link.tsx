import { Link as ReactRouterLink } from "react-router-dom";

import styled, { css } from "./styled-components";

const linkCSS = css`
  color: ${props => props.theme.linkColor};
  text-decoration: underline;

  &:hover,
  &:focus {
    color: ${props => props.theme.linkColor};
    text-decoration: none;
  }
`;

const Link = styled(ReactRouterLink)`
  ${linkCSS}
`;

export default Link;
