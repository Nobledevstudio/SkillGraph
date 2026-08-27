import type { Request, Response } from 'express'
import { AppError } from '../../errors/AppError.ts'
import { getJob, getJobs, getJobsForPerson } from './job.services.ts'


export const getJobsForPersonController = async (
  req: Request,
  res: Response,
) => {
  const { personId } = req.params

  if (!personId || Array.isArray(personId)) {
    throw new AppError(400, 'Person ID is required')
  }

  const result = await getJobsForPerson(personId)

  return res.status(200).json({
    success: true,
    data: result,
  })
}

export const getJobsController = async (
  req: Request,
  res: Response
) => {
  const jobs = await getJobs()

  return res.status(200).json({
    success: true,
    data: jobs,
  })
}

export const getJobController = async (
  req: Request,
  res: Response
) => {
  const { jobId } = req.params

  if (!jobId || Array.isArray(jobId)) {
    throw new AppError(400, 'Job ID is required')
  }

  const job = await getJob(jobId)

  if (!job) {
    return res.status(404).json({
      success: false,
      message: 'Job not found',
    })
  }

  return res.status(200).json({
    success: true,
    data: job,
  })
}