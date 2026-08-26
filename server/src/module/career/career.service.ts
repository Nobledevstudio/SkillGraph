import type { Node } from 'neo4j-driver'
import { runQuery } from '../../db/query.ts'
import { getCareerPathsQuery } from '../../queries/career.queries.ts'

export const getCareerPaths = async (personId: string) => {
  const records = await runQuery(getCareerPathsQuery, { personId })

  return records.map((record) => ({
    currentSkill: record.get('currentSkill'),
    relatedSkill: record.get('relatedSkill'),
    job: record.get('job'),
  }))
}