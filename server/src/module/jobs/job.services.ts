import type { Node } from 'neo4j-driver'
import { getJobsForPersonQuery } from '../../queries/jobs.queries.ts'
import { runQuery } from '../../db/query.ts'

export const getJobsForPerson = async (personId: string) => {
  const records = await runQuery(getJobsForPersonQuery, {
    personId,
  })

  return records.map((record) => {
    const job = record.get('job')
    const skills = record.get('matchingSkills') as Node[]
    const matchCount = record.get('matchCount').toNumber()

    return {
      job: job.properties,
      matchingSkills: skills.map((skill) => skill.properties),
      matchCount,
    }
  })
}