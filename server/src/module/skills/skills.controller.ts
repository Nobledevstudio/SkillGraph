import type { Request, Response } from 'express'
import { AppError } from '../../errors/AppError.ts'
import { getCompaniesForSkill, getSkill, getSkillNetwork, getSkills } from './skill.services.ts'



export const getSkillsController = async (
  _req: Request,
  res: Response,
) => {
  const result = await getSkills()

  return res.status(200).json({
    success: true,
    data: result,
  })
}

export const getSkillController = async (
    req: Request,
    res: Response,
) => {
    const { skillId } = req.params

    if (typeof skillId !== 'string') {
        throw new AppError(400, 'Skill ID is required')
    }

    const result = await getSkill(skillId)

    if (!result) {
        throw new AppError(404, 'Skill not found')
    }

    return res.status(200).json({
        success: true,
        data: result,
    })
}

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