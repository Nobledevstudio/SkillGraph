import { Router } from 'express'
import { asyncHandler } from '../../middleware/asyncHandler.ts'
import {
  getJobsForPersonController,
} from './jobs.controller.ts'

const jobRouter = Router()

jobRouter.get('/person/:personId',asyncHandler(getJobsForPersonController))

export default jobRouter