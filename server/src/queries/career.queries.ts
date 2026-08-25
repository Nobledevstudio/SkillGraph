export const getCareerPathsQuery = `
  MATCH (person:Person {id: $personId})
        -[:HAS_SKILL]->(current:Skill)
        -[:RELATED_TO]->(related:Skill)
        <-[:REQUIRES]-(job:Job)

  WHERE NOT (person)-[:HAS_SKILL]->(related)

  RETURN
    current,
    related,
    job

  ORDER BY job.title
`