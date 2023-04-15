import express from 'express'
import {registerController} from '../controllers/RegisterController.js'
//router object
const router = express.Router()

//routing
//REGISTER
router.post('/register',registerController)

export default router