import { runQuery } from "../../db/query.ts"
import { globalSearchQuery } from "../../queries/search.queries.ts"

export const globalSearch = async (searchTerm: string) => {
  const records = await runQuery(globalSearchQuery, {
    searchTerm,
  })

  return records.map((record) => {
    const node = record.get('node')

    return {
      types: record.get('types'),
      ...node.properties,
    }
  })
}