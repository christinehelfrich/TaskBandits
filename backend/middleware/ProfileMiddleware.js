const express = require("express");

module.exports.isPasswordValid = (req, res, next) => {
    const validateLength = req.body.profile.password.length >= 20;

    if(validateLength) {
        next()
    }else {
        res.status(400).send({error: 'error', msg: "Password wasn't long enough!"});
    }
}