import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Item from '../components/Item';
import ScrollContainer from "../components/ScrollContainer";
import {fetchItems, toggleFavorite} from "../services/itemServices";

const Home = () => {

  const [items, setItems] = useState({});
    const handleToggleFavorite = async (key) => {
        try {
            const updatedItem = await toggleFavorite(key);
            setItems((prevItems) => {
                const updatedItems = { ...prevItems };
                updatedItems[key] = updatedItem;
                return updatedItems;
            });
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

  useEffect(() => {
    fetchItems()
        .then((data) => setItems(data));
  }, []);

  return (
      <Layout>
        <ScrollContainer>
            {Object.keys(items).map((key) => (
                <Item key={key} item={items[key]} onFavorite={() => handleToggleFavorite(key)} />
            ))}
        </ScrollContainer>
      </Layout>
  );
};


export default Home;
