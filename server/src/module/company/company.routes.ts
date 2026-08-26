import { Router } from 'express'
import { asyncHandler } from '../../middleware/asyncHandler.ts'
import { getCompanyJobsAndSkillsController } from './company.controller.ts'


const companyRouter = Router()

companyRouter.get('/:companyId/jobs',asyncHandler(getCompanyJobsAndSkillsController),
)

export default companyRouter