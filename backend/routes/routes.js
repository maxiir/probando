import { Router } from "express";
import controller from '../controllers/controller.js'

const router = Router()

router.post('/api/newpeople', controller.createPeople)
router.get('/api/getpeople/:id', controller.getPeople)

export default router;