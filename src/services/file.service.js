import * as uuid from 'uuid';
import * as path from 'path';
import  FilesEntity  from '../models/Files.models.js';


class FileService {
   async saveFile(file) {
        try {
            await FilesEntity.create(file)
            return 'Files is succes created'
        } catch (e) {
            console.log(e)
        }
    }

   async getAllFiles() {
        return await FilesEntity.findAll({
            attributes: ["id", "filename", "mimetype","size"],
          })
    }
   async getFileByName(filename) {
       const findedFile = await FilesEntity.findOne({ where: { filename }, raw: true })
       if (findedFile === null) {
          return 'File is not found'
       }
      return findedFile
    }
}

export default new FileService()