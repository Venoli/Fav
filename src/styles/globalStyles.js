import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Navbar = styled.nav`
  display: none;
 @media (min-width: 769px) {
    display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FC5F9B;
  color: white;
   height: 60px; 
  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
    }
  } 
`;

export const BottomNavbar = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FC5F9B;
    color: white;
    height: 60px; 

    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 4px; 
`;
