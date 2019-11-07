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

const Link = styled.a`
  ${linkCSS}
`;

export default Link;
