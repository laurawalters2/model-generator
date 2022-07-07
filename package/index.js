const argv = require("minimist")(process.argv.slice(2));
const { npm_config_name: name } = process.env;

console.log(name);
