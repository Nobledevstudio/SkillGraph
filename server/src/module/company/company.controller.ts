import type { Request, Response } from 'express'
import { AppError } from '../../errors/AppError.ts'
import { getCompanies, getCompanyJobsAndSkills } from './controller.services.ts'


export const getCompanyJobsAndSkillsController = async (
  req: Request,
  res: Response,
) => {
  const { companyId } = req.params

  if (typeof companyId !== 'string' || !companyId) {
    throw new AppError(400, 'Company ID is required')
  }

  const result = await getCompanyJobsAndSkills(companyId)

  return res.status(200).json({
    success: true,
    data: result,
  })
}



export const getCompaniesController = async (
  req: Request,
  res: Response,
) => {
  const companies = await getCompanies()

  res.status(200).json({
    success: true,
    data: companies,
  })
}