import React, {useState} from 'react';
import {
    ItemCard,
    ItemImage,
    FavoriteButton,
    Overlay,
    LikeCommentHashTags,
    Likes,
    HashTags,
    Comments, ItemContainer, LikeIcon, Captions, ProfileIcon, ProfileName
} from '../styles/HomeStyles';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Item = ({ item, onFavorite }) => {
    return (
        <ItemContainer className="Item">
        <ItemCard>
            <div className="profile-info">
                <ProfileIcon src={item.image} alt="Profile Icon" />
                <ProfileName>{item.profileName}</ProfileName>
            </div>
            <ItemImage src={item.image} alt={item.name} />
            <Overlay>
                <p>{item.name}</p>
                <b>AED 230</b>
            </Overlay>
            <FavoriteButton onClick={() => onFavorite(item.id)}>
                <FontAwesomeIcon icon={faHeart} color={item.isFavorite ? 'red' : 'black'} />
            </FavoriteButton>
        </ItemCard>
            <LikeCommentHashTags>
                <Likes><LikeIcon icon={faHeart} />
                    {item.likes} Likes
                </Likes>
                <Captions>Lorem ipsum dolor sit amet, consectetur adipiscing.</Captions>
                <HashTags>#viverra #accumsan #nisl #vitae</HashTags>
                <Comments> View 12 comments</Comments>
            </LikeCommentHashTags>
        </ItemContainer>
    );
};

export default Item;
