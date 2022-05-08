"use strict"

const UserStorge = require("./UserStorge");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const {id, pw} = UserStorge.getUserInfo(this.body.id);
        if (id) {
            if (id === this.body.id && pw === this.body.pw) {
                return { success: true};
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."}
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."}
    }
    register() {
        UserStorge.save(this.body);
    }
}

module.exports = User;