import fs from 'fs'
import logger from '../loggers/file.logger.js'
import { ReadDirSize } from '../utils/utils.js'

class FileAdapter {
    constructor() {
        this.dir = (name) => '../../data/' + name;
        this.logger = logger
    }
    
    post(name,data){
        return new Promise((resolve,reject) => {
            const stream = fs.createWriteStream(this.dir(name))
            stream.write(data)
            stream.on('error',(error) => {
                  this.logger.error(error)
                  reject(error)
            })
            ReadDirSize().then(size => {
                this.logger.success(`End writing the file (data directory size ${size+data.length} bytes)`)
            });
            resolve({ name }); 
        })
    }


    get(name){
          return fs.createReadStream(this.dir(name))
    }


}

export default new FileAdapter()


