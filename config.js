const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "TIYFyR4b#jGOc1dQ1eSsD4_2kP34IY3k3JcUmYc59qf2yiG1e-YA",
  MONGODB: process.env.MONGODB || "mongodb://mongo:JvoqRuNEZoWwDsfegGClbXmKGDdlMZje@autorack.proxy.rlwy.net:22229",
  OWNER_NUM: process.env.OWNER_NUM || "94762890901",
};
