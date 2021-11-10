import {Request, Response} from "express";
import {QueryResult} from "pg";
import {IInfoRows} from "../types";
const pool = require("../db/query")
const {v4: uuidv4} = require('uuid');


class InfoController {
    constructor() {
        this.getHomePageInfo = this.getHomePageInfo.bind(this)
        this.createNewInfo = this.createNewInfo.bind(this)
    }

    async getHomePageInfo(req: Request, res: Response) {
        try {
            await pool.query(`SELECT *
                              FROM Info`, (err: Error, result: QueryResult) => {
                if (err) {
                    return res.status(400).json({message: "No data found"})
                }
                return res.status(200).json(result.rows)
            })
        } catch (e) {
            console.log(e)
            res.status(400).json(e)
        }
    }

    async createNewInfo(req: Request, res: Response) {
        try {
            const {title, description} = req.body
            const id = uuidv4();
            const info:IInfoRows = await pool.query(`INSERT INTO Info ("id", "title", "description") VALUES ('${id}', '${title}', '${description}') RETURNING *`)
            console.log(info)
            res.status(200).json(info.rows)
        } catch (e) {
            console.log(e)
            res.status(400).json(e)
        }
    }
}

module.exports = new InfoController();