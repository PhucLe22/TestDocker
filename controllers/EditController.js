const express = require('express');
const { multipleMongooseToObject } = require('../config/db');
const User = require('../models/user');
const user = require('../models/user');

class EditController {
    async show(req, res, next) {
        try {
            const id = req.params.id;
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).send('User is not found');
            }
            res.render('edit', { user: user.toObject() });
        } catch (err) {
            next(err);
        }
    }
    edit(req, res, next) {
        const id = req.params.id;
        const formData = req.body;
        User.updateOne({ _id: id }, formData, { runValidators: true })
            .then(result => {
                res.redirect('/');
            })
    }
}

module.exports = new EditController();