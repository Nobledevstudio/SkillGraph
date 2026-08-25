import { driver } from './driver.ts'

const testQuery = async () => {
  const session = driver.session()

  try {
    const result = await session.run(
      'RETURN "SkillGraph connected to CognoDB" AS message',
    )

    console.log(result.records[0].get('message'))
  } catch (error) {
    console.error('❌ Cypher query failed')
    console.error(error)
  } finally {
    await session.close()
    await driver.close()
  }
}

testQuery()