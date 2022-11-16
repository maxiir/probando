import { Router } from "express";
import controller from '../controllers/controller.js'

const router = Router()

router.post('/api/newpeople', controller.createPeople)


export default router;