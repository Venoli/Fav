export async function fetchItems() {
    try {
        const response = await fetch('api/items');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }

}

export async function toggleFavorite(itemId) {
    try {
        const response = await fetch('/api/items/'+itemId+'/toggle-favorite', {
            method: 'PUT',
        });

        if (!response.ok) {
            throw new Error('Failed to toggle favorite');
        }

        const updatedItem = await response.json();
        return updatedItem;
    } catch (error) {
        console.error('Error toggling favorite:', error);
        throw error;
    }
}


