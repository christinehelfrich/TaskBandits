const express = require("express");

module.exports.validatePassword = (password) => {
    let pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return pattern.test(password);
}

module.exports.isPasswordValid = (req, res, next) => {
    validateLength = validatePassword(req.body.profile.password)

    if(validateLength) {
        next()
    }else {
        res.status(400).send({error: 'error', msg: "Password wasn't long enough!"});
    }
}