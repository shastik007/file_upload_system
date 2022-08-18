import * as uuid from 'uuid';
import * as path from 'path';
import  FilesEntity  from '../models/Files.models.js';
import FileAdapter from '../../lib/adapters/file.adapter.js';


class FileService {
    constructor(){
        this.repository = FilesEntity
        this.fileAdapter = FileAdapter
    }
   async saveFile(filename,data,meta) {
        try {
            await this.repository.create({
                filename,
                ...meta,
            })
        
            return this.fileAdapter.post(filename,data)
        } catch (e) {
            console.log(e)
        }
    }

   async getAllFiles() {
        return await this.repository.findAll({
            attributes: ["id", "filename", "mimetype","size"],
          })
    }
   async getFileByName(filename) {
       const findedFile = await this.repository.findOne({ where: { filename }, raw: true })
       if (findedFile === null) {
          return 'File is not found'
       }
      return findedFile
    }
}

export default new FileService()