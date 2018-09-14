"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
//import { Podcast } from './interfaces'
const parse_1 = require("./parse");
function fetchPodcast(url) {
    return node_fetch_1.default(url)
        .then((res) => res.text())
        .then(parse_1.parsePodcast);
}
exports.fetchPodcast = fetchPodcast;
exports.default = fetchPodcast;
