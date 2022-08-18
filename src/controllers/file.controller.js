import FileService from "../services/file.service.js";

class  FileController {
    async addNewFile(req,res) {
        try{
            const file = await FileService.saveFile(req.file)
            res.send(file)
        }catch (e) {
            res.status(500).json(e)
        }
    }


    async getAllFiles(req,res) {
        try{
            const allFiles = await FileService.getAllFiles()
            res.send(allFiles)
        }catch (e) {
            res.status(500).json(e)
        }
    }


    async findFileByName (req,res) {
        try{
            const findedFile = await FileService.getFileByName(req.params['fileName'])
            req.send(findedFile)
        }catch (e) {
            res.status(500).json(e)
        }
    }


}

export default new FileController()