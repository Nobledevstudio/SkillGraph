import { Router } from 'express'
import { getCompaniesForSkillController, getSkillController, getSkillNetworkController, getSkillsController } from './skills.controller.ts'
import { asyncHandler } from '../../middleware/asyncHandler.ts'


const skillRouter = Router()

skillRouter.get('/', asyncHandler(getSkillsController))
skillRouter.get('/:skillId/network', asyncHandler(getSkillNetworkController))
skillRouter.get('/:skillId/companies', asyncHandler(getCompaniesForSkillController))
skillRouter.get('/:skillId', asyncHandler(getSkillController))


export default skillRouter