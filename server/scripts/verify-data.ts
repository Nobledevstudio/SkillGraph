import { driver } from '../src/db/driver.ts'

const verifyData = async () => {
  const session = driver.session()

  try {
    console.log('🔍 Verifying SkillGraph data...\n')

    const result = await session.run(`
      MATCH (n)
      RETURN labels(n) AS labels, count(n) AS count
      ORDER BY labels
    `)

    console.table(
      result.records.map((record) => ({
        labels: record.get('labels'),
        count: record.get('count').toNumber(),
      })),
    )
  } catch (error) {
    console.error('❌ Verification failed:', error)
    process.exitCode = 1
  } finally {
    await session.close()
    await driver.close()
  }
}

verifyData()