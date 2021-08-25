import styled, {css} from 'styled-components';
import {Link, NavLink} from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.header`
  background-color: white;
  position: sticky;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`;

 export const OptionsContainer = styled.nav`
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
 `;
 export const OptionLink = styled(NavLink)`
   ${OptionContainerStyles}
 `;
 export const OptionDiv = styled.div`
   ${OptionContainerStyles}
 `;