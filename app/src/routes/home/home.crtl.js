"use strict";

const users = {
    id: ["skeleton","admin", "guest"],
    pw: ["skeleton", "admin", "guest"],
};

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) {
                return res.json({
                    succees: true,
                });
            }
        }

        return res.json({
            succees: false,
            msg: "로그인에 실패하셨습니다"
        });
    },
};

module.exports = {
    output,
    process,
}