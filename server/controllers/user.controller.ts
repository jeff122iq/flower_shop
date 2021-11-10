import { IUserRows } from "../types";
import {Request, Response} from "express";
const pool = require("../db/query");
const {v4: uuidv4} = require('uuid');
const bcrypt = require("bcrypt")

class UserController {
    constructor() {
        this.register = this.register.bind(this)
    }

    async register(req: Request, res: Response) {
        try {
            const id = uuidv4();
            const { username, email, password } = req.body;
            const hashPassword = await bcrypt.hash(password, 12)
            const user:IUserRows = await pool.query(`INSERT INTO Users ("id", "username", "email", "password") VALUES ('${id}', '${username}', '${email}', '${hashPassword}') RETURNING *`)
            res.status(200).json(user.rows)
        } catch (e) {
            res.status(400).json({ message: e })
        }
    }
}

module.exports = new UserController();