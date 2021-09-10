function sendRes(res, error, errorMsg, data){
    const response = {
        error,
        errorMsg,
        data
    }
    res.send(response);
}
module.exports = {
    sendRes
}

