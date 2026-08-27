export const getSkillsQuery = `
  MATCH (skill:Skill)
  RETURN skill
  ORDER BY skill.name
`

export const getSkillQuery = `
    MATCH (skill:Skill {id: $skillId})
    RETURN skill
`;


export const getRelatedSkillsQuery = `
  MATCH (person:Person {id: $personId})
        -[:HAS_SKILL]->(skill:Skill)
        -[:RELATED_TO]->(related:Skill)

  WHERE NOT (person)-[:HAS_SKILL]->(related)

  RETURN
    related,
    count(DISTINCT skill) AS connectionCount

  ORDER BY connectionCount DESC

  LIMIT 10
`

export const getSkillNetworkQuery = `
  MATCH (skill:Skill {id: $skillId})
        -[:RELATED_TO*1..2]-(related:Skill)

  WHERE related <> skill

  RETURN DISTINCT related

  LIMIT 30
`