const fs = require('fs');
const notePath = "./FE_Notes";

const readDir = (path) => {
    return new Promise((resolve, reject) => {
        const childResult = [];
        fs.readdir(path, {withFileTypes: true}, async (err, files) => {
            if (err) {
                reject(err);
            }
            if (files && files.length > 0) {
                for (let file of files) {
                    if (file.name) {
                        const ext = file.name.match(/\.(\w+)$/);
                        if (ext) {
                            //is a file
                            childResult.push(file.name);
                        } else {
                            //is a folder
                            const folder = {};
                            folder[file.name] = await readDir(path + "/" + file.name)
                            childResult.push(folder);
                        }
                    }
                }
            }
            resolve(childResult);
        })
    })
}

const readFile = (path)=>{
    const buffer= fs.readFileSync(path);
    return String(buffer);
}

async function getNoteList() {
    const result = await readDir(notePath) || [];
    return result;
}

module.exports = {
    getNoteList,
    readFile
}
