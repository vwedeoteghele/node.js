const bodyParser = require("body-parser")



module.exports = (app) => {
    
    // TODO add a rate limiter to this application 

    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
}