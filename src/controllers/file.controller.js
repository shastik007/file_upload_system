import FileService from "../services/file.service.js";

const MB = 1e+6;

class  FileController {
    constructor() {
        this.service = FileService
    }
    async addNewFile(req,res) {
        try{
            const name = req.params.fileName;
            const { data, ...meta } = req.file
            const file = await this.service.saveFile(name,data,meta)
            res.send(file);
        }catch (e) {
            res.status(500).json(e)
        }
    }


    async getAllFiles(req,res) {
        try{
            const allFiles = await this.service.getAllFiles()
            res.send(allFiles)
        }catch (e) {
            res.status(500).json(e)
        }
    }


    async findFileByName (req,res) {
        try{
            const findedFile = await this.service.getFileByName(req.params['fileName'])
            req.send(findedFile)
        }catch (e) {
            res.status(500).json(e)
        }
    }


}

export default new FileController()