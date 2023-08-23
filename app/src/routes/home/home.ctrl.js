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

const users = {
    id: ["A", "B", "C"],
    pw: ["1", "2", "3"],
}

const process = {
    login: (req, res) => {
        const id = req.body.id
        const pw = req.body.pw
        
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id)
            if (users.pw[idx] === pw){
                return res.json({
                    success: true,
                })
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다"
        })
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