import { runQuery } from '../../db/query.ts'
import { getCompaniesForSkillQuery } from '../../queries/companies.queries.ts'
import { getSkillNetworkQuery, getSkillQuery, getSkillsQuery } from '../../queries/skills.queries.ts'


export const getSkills = async () => {
  const records = await runQuery(getSkillsQuery, {})

  return records.map((record) => {
    const skill = record.get('skill')

    return skill.properties
  })
}

export const getSkill = async (skillId: string) => {
    const records = await runQuery(getSkillQuery, {
        skillId,
    })

    if (records.length === 0) {
        return null
    }

    const skill = records[0].get('skill')

    return skill.properties
}

export const getSkillNetwork = async (skillId: string) => {
    const records = await runQuery(getSkillNetworkQuery, {
        skillId,
    })

    return records.map((record) => {
        const skill = record.get('related')

        return skill.properties
    })
}

export const getCompaniesForSkill = async (skillId: string) => {
  const records = await runQuery(getCompaniesForSkillQuery, {
    skillId,
  })

  return records.map((record) => {
    const company = record.get('company')
    const jobs = record.get('jobs')

    return {
      company: company.properties,
      jobs: jobs.map((job: any) => job.properties),
    }
  })
}