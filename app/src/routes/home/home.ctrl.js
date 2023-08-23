'use strict';
const path = require('path')

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
        console.log(req.body)
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