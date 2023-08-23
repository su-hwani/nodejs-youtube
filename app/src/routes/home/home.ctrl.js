'use strict';
const path = require('path')
const User = require("../../models/User")

const output = {
    home: (req, res) => {
        const viewPath = path.join(__dirname,'..', '..', 'views', 'home', 'index.ejs');
        res.render(viewPath)
    },
    login: (req, res) => {
        const viewPath = path.join(__dirname,'..', '..', 'views', 'home', 'login.ejs');
        res.render(viewPath)
    }
}


const process = {
    login: (req, res) => {
        const user = new User(req.body)
        const response = user.login()
        return res.json()
    }
}

module.exports = {
    output,
    process,
}

// 이것과 동일하게 적용된다.
// {
//     home:home,
//     login:login,
// }