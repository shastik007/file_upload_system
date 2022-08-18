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
            const { stream, meta } = await this.service.getFileByName(req.params['fileName'])
			res.setHeader('content-type', meta.mimetype);
			res.setHeader('content-length', meta.size); 
            stream.pipe(res)
        }catch (e) {
            res.status(500).json(e)
        }
    }
    
    async dropDb(req,res){
        try {
            const response = await this.service.dropDb()
            res.send(response)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new FileController()