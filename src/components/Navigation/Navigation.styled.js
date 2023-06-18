import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  &.active {
    font-weight: 700;
    font-size: 20px;
  }
`;
