import { Router } from 'express'
import { asyncHandler } from '../../middleware/asyncHandler.ts'
import {
  getJobController,
  getJobsController,
  getJobsForPersonController,
} from './jobs.controller.ts'

const jobRouter = Router()

jobRouter.get("/", asyncHandler(getJobsController)
)
jobRouter.get( "/:jobId" , asyncHandler(getJobController))

jobRouter.get('/person/:personId',asyncHandler(getJobsForPersonController))

export default jobRouter