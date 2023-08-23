'use strict';
const path = require('path')
const UserStorage = require("../../models/UserStorage")

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
        const id = req.body.id
        const pw = req.body.pw

        const users = UserStorage.getUsers("id", "pw")
        const response = {}

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id)
            if (users.pw[idx] === pw){
                response.success = true
                return res.json(response)
            }
        }
        response.success = false 
        response.msg = "로그인에 실패하셨습니다"
        return res.json(response)
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