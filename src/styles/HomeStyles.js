import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ItemContainer = styled.div`
  padding-bottom:20px;
  position: relative;
  border-bottom: 1px solid #ddd; 
  padding-bottom: 10px;
  
  @media (min-width: 769px) {
   width: 50vw;
   }
`;
export const ItemCard = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  
  .profile-info {
    display: flex;
    align-items: center;
    padding: 10px;
  }
  
`;

export const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ProfileName = styled.p`
color: #4E5DCC;
  font-weight: bold;
  margin: 0;
`;

export const ItemImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column; 
  align-items: flex-start; 
  
  p{
  opacity: 0.8;
  }
  
`;

export const FavoriteButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ isFavorite }) => (isFavorite ? 'red' : 'black')};

  &:hover {
    color: red;
  }
`;

export const LikeCommentHashTags = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
`;

export const Likes = styled.div`
 color: #4E5DCC;
 display: flex;
  align-items: center; 
   margin: 3px; 

`;

export const LikeIcon = styled(FontAwesomeIcon)`
  margin-right: 4px; 
`;

export const Comments = styled.div`
    margin: 3px; 
color: gray;

`;

export const HashTags = styled.div`
    margin-left: 3px; 
 color: #4E5DCC;

`;

export const Captions = styled.div`
color: gray;
    margin-left: 3px; 

`;
