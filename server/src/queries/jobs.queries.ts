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

export const getJobsQuery = `
MATCH (job:Job)-[:REQUIRES]->(skill:Skill)
RETURN job, collect(skill) AS skills
ORDER BY job.title
`;

export const getJobQuery = `
    MATCH (job:Job {id: $jobId})
    OPTIONAL MATCH (job)-[:REQUIRES]->(skill:Skill)
    RETURN job, collect(skill) AS skills
`;