import { Router } from "express";
import controller from '../../controllers/admin/auth.controller'
const router = Router()
import catchAsync from "../../middlewares/catchAsync.middleware";


router.get('/test')

export default router