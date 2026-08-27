import { Router } from 'express'
import { asyncHandler } from '../../middleware/asyncHandler.ts'
import { getCompaniesController, getCompanyJobsAndSkillsController } from './company.controller.ts'


const companyRouter = Router()

companyRouter.get('/:companyId/jobs', asyncHandler(getCompanyJobsAndSkillsController))
companyRouter.get('/', asyncHandler(getCompaniesController))

export default companyRouter