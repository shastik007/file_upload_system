import { Router } from "express";
// import FileAdapter from "../../lib/adapters/file.adapter.js";
import FileController from '../controllers/file.controller.js'
import fileMiddlware from "../middlwares/files.middlware.js";
// import FileService from "../services/file.service.js";
// import filesMiddlware from '../middlwares/files.middlware.js'

const router = new Router()




router.get('/files',fileMiddlware,(req,res) => {
    FileController.getAllFiles(req,res)
})

router.get('/files/:fileName',fileMiddlware,(req,res) => {
    FileController.findFileByName(req,res)
})

router.post('/files',fileMiddlware,async (req,res) => {
    await FileController.addNewFile(req,res)
})


export default  router