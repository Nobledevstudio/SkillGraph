import type { Request, Response } from 'express'
import { AppError } from '../../errors/AppError.ts'
import { getJobsForPerson } from './job.services.ts'


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