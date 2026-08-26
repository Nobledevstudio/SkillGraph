import type { Request, Response } from 'express'
import { AppError } from '../../errors/AppError.ts'
import { getCompaniesForSkill, getSkillNetwork } from './skill.services.ts'


export const getSkillNetworkController = async (
  req: Request,
  res: Response,
) => {
  const { skillId } = req.params

  if (typeof skillId !== 'string') {
    throw new AppError(400, 'Skill ID is required')
  }

  const result = await getSkillNetwork(skillId)

  return res.status(200).json({
    success: true,
    data: result,
  })
}


export const getCompaniesForSkillController = async (
  req: Request,
  res: Response,
) => {
  const { skillId } = req.params

  if (typeof skillId !== 'string') {
    throw new AppError(400, 'Skill ID is required')
  }

  const result = await getCompaniesForSkill(skillId)

  return res.status(200).json({
    success: true,
    data: result,
  })
}