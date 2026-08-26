export const getCareerPathsQuery = `
  MATCH (person:Person {id: $personId})
        -[:HAS_SKILL]->(current:Skill)
        -[:RELATED_TO]->(related:Skill)
        <-[:REQUIRES]-(job:Job)

  MATCH (person)-[:HAS_SKILL]->(personSkill:Skill)

  WITH current, related, job,
       collect(DISTINCT personSkill.id) AS personSkillIds

  WHERE NOT related.id IN personSkillIds

  RETURN
    current.name AS currentSkill,
    related.name AS relatedSkill,
    job.title AS job

  ORDER BY job.title
`