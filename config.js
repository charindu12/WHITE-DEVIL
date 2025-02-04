const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "jUJ3mA4K#4fkABPihZjslWW4b1sHDkrIJ6Ww1GMm2up559y6xD6k",
  MONGODB: process.env.MONGODB || "mongodb://mongo:JvoqRuNEZoWwDsfegGClbXmKGDdlMZje@autorack.proxy.rlwy.net:22229",
  OWNER_NUM: process.env.OWNER_NUM || "94762890901",
};
