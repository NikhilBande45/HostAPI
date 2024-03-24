const express = require("express")
const router = express.Router();

const {getAllProduct , getAllProductTesting } = require('../Controllers/product')

router.route('/').get(getAllProduct);
router.route('/testing').get(getAllProductTesting);

module.exports = router;

