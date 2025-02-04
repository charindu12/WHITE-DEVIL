const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "TVg1jSKJ#wz9LgBhAJ7OunmwNie6AsgwoXBRHgHnca3N2mrOcMPY",
  MONGODB: process.env.MONGODB || "mongodb://mongo:JvoqRuNEZoWwDsfegGClbXmKGDdlMZje@autorack.proxy.rlwy.net:22229",
  OWNER_NUM: process.env.OWNER_NUM || "94762890901",
};
