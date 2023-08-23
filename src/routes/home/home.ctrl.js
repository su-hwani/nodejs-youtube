'use strict';

const home = (req, res) => {
    res.render("home/index")
}

const login =  (req, res) => {
    res.render("home/login")
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