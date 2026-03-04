function getLevel(xp) {
  return Math.floor(0.1 * Math.sqrt(xp));
}

module.exports = { getLevel };