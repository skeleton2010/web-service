"use strict";

const fs = require('fs').promises;


class UserStorge {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userskey = Object.keys(users)
        const usersInfo = userskey.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return usersInfo;
    }

    static #getUser(data, fields) {
        const users = JSON.parse(data);
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUser(...fields) {
        return fs.readFile("./src/database/user.json")
        .then((data) => {
            return this.#getUser(data, fields);
            })
        .catch(console.error);
    }

    static getUserInfo(id) {
        return fs.readFile("./src/database/user.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
            })
        .catch(console.error);
    }

    static async save(usersInfo) {
        const users = await this.getUser("id", "email", "pw");
        if (users.id.includes(usersInfo.id)) {
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(usersInfo.id);
        users.email.push(usersInfo.email);
        users.pw.push(usersInfo.pw);
        fs.writeFile("./src/database/user.json", JSON.stringify(users));
        return { success: true};
    }
}

module.exports = UserStorge;
