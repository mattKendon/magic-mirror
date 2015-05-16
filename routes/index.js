var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', Index);

function Index(req, res, next) {
    var options = {
        title: "Housemate",

    };

    res.render('index', options);
}

module.exports = router;
