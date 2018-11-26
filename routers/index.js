const autoload = require("../Autoload");

module.exports = autoload.load(__dirname, /\.router.js/g, "Router");