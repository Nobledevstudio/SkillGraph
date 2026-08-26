import { Router } from 'express'
import { getCompaniesForSkillController, getSkillNetworkController } from './skills.controller.ts'
import { asyncHandler } from '../../middleware/asyncHandler.ts'


const skillRouter = Router()

skillRouter.get('/:skillId/network', asyncHandler(getSkillNetworkController))
skillRouter.get('/:skillId/companies', asyncHandler(getCompaniesForSkillController))


export default skillRouter