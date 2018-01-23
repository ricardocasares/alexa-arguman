const app = require("./app");
const server = require("express")();

app.express({ expressApp: server, checkCert: false });

server.listen(3000, () => console.log("Started!"));
