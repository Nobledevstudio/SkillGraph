import type { Record as Neo4jRecord } from 'neo4j-driver'
import { driver } from './driver.ts'

export const runQuery = async (query: string,parameters: Record<string, unknown> = {},
): Promise<Neo4jRecord[]> => {


    
  const session = driver.session()

  try {
    const result = await session.run(query, parameters)

    return result.records
  } finally {
    await session.close()
  }
}