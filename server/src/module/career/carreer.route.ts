import { Router } from 'express'
import { asyncHandler } from '../../middleware/asyncHandler.ts'
import { getCareerPathsController } from './career.controller.ts'

const careerRouter = Router()

careerRouter.get('/:personId/paths',asyncHandler(getCareerPathsController))

export default careerRouter