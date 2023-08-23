"use strict"

class UserStorage {
    static #users = {
        id: ["1", "2", "3"],
        pw: ["1", "2", "3"],
        name: ["ㄱ", "ㄴ", "ㄷ"],
    }

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
               newUsers[field] = users[field]
            }
            return newUsers
            }, {})
        return newUsers
    }

    static getUserInfo(id) {
        const users = this.#users
        const idx = users.id.indexOf(id)
        const usersKeys = Object.keys(users)
        const userInfo = usersKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx]
            return newUser
        }, {})
        return userInfo
    }
}

module.exports = UserStorage