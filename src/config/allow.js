
const allowOrigin = ["http://localhost:3001","http://127.0.0.1:3001","http://0.0.0.0:3001"];

function allowCrossDomain(req,res,next) {
    var origin = req.headers.origin;
    if (allowOrigin.indexOf(origin) > -1 ) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials',true);
    next();
}
module.exports = {
    allowCrossDomain
}
