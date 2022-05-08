"use strict";

class UserStorge {
    static #users = {
        id: ["skeleton","admin", "guest"],
        email: ["skeleton", "admin", "guest"],
        pw: ["skeleton", "admin", "guest"],
    };

    static getUser(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userskey = Object.keys(users)
        const usersInfo = userskey.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return usersInfo;
    }

    static save(usersInfo) {
        const users = this.#users;
        users.id.push(usersInfo.id);
        users.pw.push(usersInfo.pw);
        users.email.push(usersInfo.email);
        return { success: true};
    }
}

module.exports = UserStorge;
