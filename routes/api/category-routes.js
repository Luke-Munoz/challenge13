const router = require('express').Router();
const { Category, Product } = require('../../models');
const { update } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
        const findCat = Category.findAll({
            include: [{ model: Product }]
        })
        res.json(findCat)
    } catch (error) {
        res.status(400).json(error)
    }
});

router.get('/:id', async(req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
        const findOneCat = await Category.fineOne({
            where: {
                id: req.params.id
            },
            include: [{ model: Product }]
        })
        res.json(findOneCat)
    } catch (error) {
        res.status(400).json(error)
    }
});

router.post('/', async(req, res) => {
    // create a new category
    try {
        const newCat = await Category.create(req.body)
        res.json(newCat)
    } catch (error) {
        res.status(400).json(error)
    }

});

router.put('/:id', async(req, res) => {
    // update a category by its `id` value
    try {
        const updateCat = await Category.update(req.body, { where: { id: req.params.id } })
        res.json(updateCat)
    } catch (error) {
        res.status(400).json(error)
    }
});

router.delete('/:id', async(req, res) => {
    // delete a category by its `id` value
    try {
        const deleteCat = await Category.destroy({ where: { id: req.params.id } })
        res.json(deleteCat)
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router;