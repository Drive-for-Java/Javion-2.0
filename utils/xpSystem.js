const fs = require("fs");
const config = require("../config.json");

const xpFile = "./data/xp.json";

function load() {
  if (!fs.existsSync(xpFile)) fs.writeFileSync(xpFile, "{}");
  return JSON.parse(fs.readFileSync(xpFile));
}

function save(data) {
  fs.writeFileSync(xpFile, JSON.stringify(data, null, 2));
}

function addXP(userId) {
  const data = load();
  if (!data[userId]) data[userId] = { xp: 0 };
  data[userId].xp += config.xpPerReward;
  save(data);
}

function getXP(userId) {
  const data = load();
  return data[userId]?.xp || 0;
}

module.exports = { addXP, getXP };