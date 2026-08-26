import { runQuery } from '../../db/query.ts'
import { getCompaniesForSkillQuery } from '../../queries/companies.queries.ts'
import { getSkillNetworkQuery } from '../../queries/skills.queries.ts'

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