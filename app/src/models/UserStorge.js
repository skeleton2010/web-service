"use strict";

class UserStorge {
    static #users = {
        id: ["skeleton","admin", "guest"],
        pw: ["skeleton", "admin", "guest"],
        name: ["skeleton", "admin", "guest"],
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
}

module.exports = UserStorge;
