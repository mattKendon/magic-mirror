var express = require('express');
var router = express.Router();
var revision = require('git-rev');

/* GET home page. */
router.get('/', Index);
router.get('/githash', GitHash);

function GitHash(req, res, next) {
    revision.short(function(str) {
        res.send(str);
    });
}

function Index(req, res, next) {
    var options = {
        title: "Housemate"
    };

    revision.short(function(str) {
        options.hash = str;
        res.render('index', options);
    });

}

module.exports = router;
