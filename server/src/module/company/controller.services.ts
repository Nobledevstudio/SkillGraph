import { runQuery } from '../../db/query.ts'
import { getCompanyJobsAndSkillsQuery } from '../../queries/companies.queries.ts'

export const getCompanyJobsAndSkills = async (
  companyId: string,
) => {
  const records = await runQuery(
    getCompanyJobsAndSkillsQuery,
    { companyId },
  )

  return records.map((record) => {
    const job = record.get('job')
    const skills = record.get('skills')

    return {
      job: job.properties,
      skills: skills.map((skill: any) => skill.properties),
    }
  })
}