const express = require('express');
const User = require('../models/user');

class RegisterController {
    index(req, res) {
        res.render('register');
    }
    register(req, res, next) {
        try {
            const formData = req.body;
            const newUser = new User(formData);
            newUser.save().then(() => {
                res.redirect('/');
            })
        }
        catch (err) {
            next(err);
        }
    }
}

module.exports = new RegisterController();