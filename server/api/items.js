const express = require('express');
const router = express.Router();
const items = require('../data/items');

var itemsMap = {};
for (const item of items) {
    itemsMap[item.id] = item;
}
router.get('/items', (req, res) => {
    res.json(itemsMap);
});

router.put('/items/:id/toggle-favorite', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = itemsMap[itemId];

    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }

    item.isFavorite = !item.isFavorite;

    return res.json(item);
});


module.exports = router;
