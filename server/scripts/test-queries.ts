import { getCareerPathsQuery } from '../src/queries/career.queries.ts'
import { runQuery } from '../src/db/query.ts'

const records = await runQuery(getCareerPathsQuery, {
  personId: 'person-alex',
})

console.table(
  records.map((record) => ({
    currentSkill: record.get('currentSkill'),
    relatedSkill: record.get('relatedSkill'),
    job: record.get('job'),
  })),
)