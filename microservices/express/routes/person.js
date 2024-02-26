var express = require('express');
var router = express.Router();
var models = require("../db")

router.get('/', function(req, res, next) {
    models.PersonSchema.findAll({}).then(person => res.json({
        person
    }))
});

router.get('/:id', function(req, res, next) {
    models.PersonSchema.findByPk(req.params.id).then(person => res.json({
        person
    }))
});

router.post('/', function(req, res, next) {
    models.PersonSchema.create(req.body).then(person => res.json({
        person
    }))
});

router.put('/:id', function(req, res, next) {
    models.PersonSchema.findByPk(req.params.id).then(person => {
        person.update(req.body).then(person => res.json({
            person
        }));
    })
});

router.delete('/:id', function(req, res, next) {
    models.PersonSchema.destroy({
        where: {
            id: req.params.id
        }
    }).then(person => res.json({
        person
    }))
});

module.exports = router;