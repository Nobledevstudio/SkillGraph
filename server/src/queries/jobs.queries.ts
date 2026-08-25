export const getJobsForPersonQuery = `
  MATCH (person:Person {id: $personId})
        -[:HAS_SKILL]->(skill:Skill)

  MATCH (job:Job)
        -[:REQUIRES]->(skill)

  WITH job, collect(DISTINCT skill) AS matchingSkills

  RETURN
    job,
    matchingSkills,
    size(matchingSkills) AS matchCount

  ORDER BY matchCount DESC
`