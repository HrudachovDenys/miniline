const path = require("path");
const bodyParser = require('body-parser');

class GlobalMiddleware {
    static async handle(app) { 
        app.engine("ejs", require("ejs-locals"));
        app.set("view engine", "ejs");
        app.set("views", path.resolve(__dirname, "..", "views"));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    }
}

module.exports = GlobalMiddleware;