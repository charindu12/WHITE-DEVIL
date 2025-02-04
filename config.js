const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "GVhQhDyT#nxSoBEyDmOL3bYveyAfnDAfrZKlpcb4YIy5Bu0GZ4u0",
  MONGODB: process.env.MONGODB || "mongodb://mongo:JvoqRuNEZoWwDsfegGClbXmKGDdlMZje@autorack.proxy.rlwy.net:22229",
  OWNER_NUM: process.env.OWNER_NUM || "94762890901",
};
