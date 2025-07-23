const express = require('express');
const { multipleMongooseToObject } = require('../utils/mongoose');
const { mongooseToObject } = require('../utils/mongoose');
const User = require('../models/user');

class HomeController {
    async index(req, res, next) {
        User.find({})
            .then(users => {
                res.render('index', { users: multipleMongooseToObject(users) })
            })
            .catch(next);
    }
    //haha
}

module.exports = new HomeController();