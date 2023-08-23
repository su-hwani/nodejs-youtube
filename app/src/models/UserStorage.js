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
}

module.exports = UserStorage