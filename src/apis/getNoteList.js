
const fsUtils = require('../utils/fsUtils');
const {sendRes} = require('../utils/network');

function getNoteList(req,res){
    fsUtils.getNoteList().then(data=>{
        const resData = {
            noteList:data
        }
        sendRes(res,0,'ok',resData);
    }).catch(e=>{
        sendRes(res,1,e,{})
    });
}

module.exports = {
    getNoteList
}
