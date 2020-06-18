var express = require('express');
var router = express.Router();
var fs = require('fs');

/* Show the Form */
router.get('/', function (req, res) {
    //
});

/* Process the Form */
router.post('/', function (req, res) {
    let weight = req.body.weight || 0;
    let mailtype = req.body.mailtype || null;

    let data = JSON.parse(fs.readFileSync('./data/post-cost.json'));

    let price = (data[mailtype].find(a => a.weight >= weight) || {}).price || 0;

    // Validation Here

    res.render('postcalc/results', {
        title: 'Postal Rate Calculator',
        mailtype: data['options'][mailtype],
        weight: weight,
        price: price
    });
});

module.exports = router;