// Note: fs.readdir() will read all the directory through path
//Note: fs.rename() will rename path
//Note: fs.mkdir() will create files/folders
//Note: fs.existsSync() method is used to synchronously check if a file/folder already exists in the given path or not.

import fs from "fs/promises"
import fss from "fs"
import path from "path"

const mainpath = "P:\\Complete Web Development\\Projects\\Project\\Sigma Web Development Project\\Using Node js\\Extension Manager\\self"

let files = await fs.readdir(mainpath)

for (const item of files) {
    console.log("Scanning... " + item);
    let ext = item.split('.')[item.split('.').length - 1]
    if (ext != "json" && ext != "js" && item.split('.').length > 1) {

        if (fss.existsSync(path.join(mainpath, ext))) {
            console.log(fss.existsSync(path.join(mainpath, ext)));

            //If folder exist then move file 
            fs.rename(path.join(mainpath, item), path.join(mainpath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(mainpath, item), path.join(mainpath, ext, item))

        }
    }
}



