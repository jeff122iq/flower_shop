import {NextFunction, Request, Response} from "express";
const pool = require("../db/query");

class AuthMiddleware {
    constructor() {
        this.register = this.register.bind(this)
    }
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { username, email, password } = req.body;
            const isEmail = await pool.query(`SELECT "email" FROM users WHERE "email" = '${email}'`);
            console.log(isEmail)
            if (isEmail.rows.length) {
                res.status(400).json({ msg: "Пользователь уже создан!" });
                return;
            }
            if (!Object.keys(req.body).length) {
                res.status(400).json({ msg: "Не валидные данные" });
                return;
            }
            if (password.length < 4) {
                res.status(400).json({ msg: "Длинна пароля должна быть больше 4 символов" });
                return;
            }
            if (password.length > 16) {
                res.status(400).json({ msg: "Длинна пароля должна быть меньше 16 символов" });
                return;
            }
            next()
        } catch (e) {
            console.log(e)
            return e;
        }
    }
}

module.exports = new AuthMiddleware();