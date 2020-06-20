"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const tryPredicitons_1 = require("./tryPredicitons");
const scrapePlayer = async (merchPredictions) => {
    const { url, name } = merchPredictions;
    console.log('trying to open page: ', url);
    console.log('player: ', merchPredictions.name);
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer_1.default.launch();
            const page = await browser.newPage();
            await page.setRequestInterception(true);
            page.on('request', (req) => {
                if (req.resourceType() === 'image' || req.resourceType() === 'stylesheet' || req.resourceType() === 'font') {
                    req.abort();
                }
                else {
                    req.continue();
                }
            });
            await page.goto(url, {
                waitUntil: 'load',
                // Remove the timeout
                timeout: 0
            });
            let statsData = await page.evaluate(() => {
                console.log('evaluating data');
                let triesScored = [...document.querySelectorAll('div.o-shadowed-box')].map(x => x.innerText);
                let triesDiv = triesScored.filter(x => x.includes("Scoring") && x.includes('Tries'));
                let tries = triesDiv[0].split('\n')[2];
                return Promise.resolve({
                    player: name,
                    tries
                });
            });
            browser.close();
            if (statsData) {
                statsData.player = name;
                console.log(statsData);
                return resolve(statsData);
            }
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.scrape = async () => {
    const results = [];
    for (const player of tryPredicitons_1.merch) {
        for (const prediction of player.players)
            results.push(await scrapePlayer(prediction));
    }
    return Promise.all(results);
};
