const moment = require("moment");
const semver = require("semver");

const day = moment().format("dddd");

console.log(day + "\n\n");

const s1 = semver.valid("1.2.6");
const s2 = semver.valid("1.2.b");

console.log("Is Valid 1: " + s1 + " and what of 2: " + s2);
