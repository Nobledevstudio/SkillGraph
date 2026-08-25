import { driver } from './driver.ts'
import { runQuery } from './query.ts'
import {
  createSkillQuery,
  getSkillByIdQuery,
} from '../queries/skills.queries.ts'

const testSkill = async () => {
  try {
    const createResult = await runQuery(createSkillQuery, {
      id: 'skill-javascript',
      name: 'JavaScript',
      category: 'Programming Language',
    })

    console.log('Created:', createResult[0]?.get('skill').properties)

    const getResult = await runQuery(getSkillByIdQuery, {
      id: 'skill-javascript',
    })

    console.log('Retrieved:', getResult[0]?.get('skill').properties)
  } catch (error) {
    console.error('❌ Skill query failed')
    console.error(error)
  } finally {
    await driver.close()
  }
}

testSkill()