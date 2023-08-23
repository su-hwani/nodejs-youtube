'use strict';
const path = require('path')

const home = (req, res) => {
    const viewPath = path.join(__dirname,'..', '..', 'views', 'home', 'index.ejs');
    res.render(viewPath)
}

const login =  (req, res) => {
    const viewPath = path.join(__dirname,'..', '..', 'views', 'home', 'login.ejs');
    res.render(viewPath)

}

module.exports = {
    home, 
    login,
}

// 이것과 동일하게 적용된다.
// {
//     home:home,
//     login:login,
// }