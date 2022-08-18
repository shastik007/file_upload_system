import fs from 'fs'
import logger from '../loggers/file.logger.js'



class FileAdapter {
    constructor() {
        this.dir = (name) => 'data/' + name;
        this.logger = logger
    }
    
    post(name,data){
        return new Promise((resolve,reject) => {
            const stream = fs.createWriteStream(this.dir(name))
            stream.write(data)
            logger.info('successs')
            stream.on('error',(error) => {
                  this.logger.error(error)
                  reject(error)
            })
            resolve({ name }); 
        })
    }
    

    get(name){
          return fs.createReadStream(this.dir(name))
    }


}

export default new FileAdapter()


