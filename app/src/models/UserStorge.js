"use strict";

const fs = require('fs').promises;


class UserStorge {
    static #getUserInfo(data, id) {
        const users = (JSON.parse(data));
        const idx = users.id.indexOf(id);
        const userskey = Object.keys(users)
        const usersInfo = userskey.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return usersInfo;
    }

    static getUser(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        return fs.readFile("./src/database/user.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
            })
        .catch(console.error);
    }

    static save(usersInfo) {
        // const users = this.#users;
        users.id.push(usersInfo.id);
        users.pw.push(usersInfo.pw);
        users.email.push(usersInfo.email);
        return { success: true};
    }
}

module.exports = UserStorge;
