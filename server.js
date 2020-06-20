"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var bodyParser = require('body-parser');
var cors = require('cors');
const node_cron_1 = __importDefault(require("node-cron"));
const scraper_1 = require("./scraper");
const tryPredicitons_1 = require("./tryPredicitons");
const PORT = process.env.PORT || 5000;
const app = express_1.default();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());
let tryScorers = [];
node_cron_1.default.schedule("* * * * *", async () => {
    console.log(`one minute passed`);
    tryScorers = await scraper_1.scrape();
});
app.get('/', (req, res, next) => {
    console.log("get");
    res.send(buildTable());
});
app.listen(PORT, () => console.log('I am running on Heroku @ ', PORT));
const buildTable = () => {
    const players = tryPredicitons_1.merch.map(player => player.name);
    let tableHtml = `
                  <!DOCTYPE html><html lang="en"><head><style>table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; } td, th { border: 1px solid #dddddd; text-align: left; padding: 8px; } tr:nth-child(even) { background-color: #dddddd; } </style><meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Merch Bet</title> </head> <body> <table><thead><tr><th colspan="1" >Member</th><th colspan="1" >Player</th><th colspan="1" >Tries</th><th colspan="1" >Player</th><th colspan="1" >Tries</th> <th colspan="1" >Total</th> </tr> </thead> <tbody >`;
    let index = 1;
    for (const player of players) {
        const player1 = tryScorers[index];
        const player2 = tryScorers[index - 1];
        tableHtml +=
            `<tr></tr><td>${player}</td><td >${player1.player}</td><td >${player1.tries}</td><td >${player2.player}</td><td >${player2.tries}</td><td >${Number(player1.tries) + Number(player2.tries)}</td></tr>`;
        index += 2;
    }
    tableHtml += `    </tbody> </table> </body> </html>`;
    return tableHtml;
};
