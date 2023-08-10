import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import Item from '../components/Item';
import ScrollContainer from "../components/ScrollContainer";
import {fetchItems, toggleFavorite} from "../services/itemServices";
import {Message} from "../styles/FavoritesStyles";


const Favorites = () => {
    const [items, setItems] = useState({});
    const [renderedFavoritesCount, setRenderedFavoritesCount] = useState(0);

    useEffect(() => {
        fetchItems().then((data) => {
            setItems(data);

        });
    }, []);

    useEffect(() => { // for no favourite message
        const count = document.querySelectorAll('.Item').length;
        setRenderedFavoritesCount(count);
    }, [items]);


    const handleToggleFavorite = async (key) => {
        try {
            const updatedItem = await toggleFavorite(key);
            setItems((prevItems) => {
                const updatedItems = { ...prevItems };
                if (!updatedItem.isFavorite) {
                    delete updatedItems[key];
                } else {
                    updatedItems[key] = updatedItem;
                }
                return updatedItems;
            });
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };


    return (
        <Layout>
            <ScrollContainer>
                {Object.keys(items).map((key) => {
                    if (items[key].isFavorite) {
                        return <Item key={key} item={items[key]} onFavorite={() => handleToggleFavorite(key)} />;
                    }
                    return null;
                })}
            </ScrollContainer>
            {items && renderedFavoritesCount === 0 && (
                <Message><p>No favorites</p></Message>
            )}
        </Layout>
    );
};


export default Favorites;
