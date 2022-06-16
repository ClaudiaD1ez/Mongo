const app = require("./app")
require("./codenotch")

app.listen(app.get("port"),function ()
   {
    console.log("server listen on port" + app.get("port"))
   })