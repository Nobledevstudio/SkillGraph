export const getCompaniesForSkillQuery = `
  MATCH (skill:Skill {id: $skillId})
        <-[:REQUIRES]-(job:Job)
        <-[:OFFERS]-(company:Company)

  RETURN
    company,
    collect(DISTINCT job) AS jobs

  ORDER BY company.name
`

export const getCompanyJobsAndSkillsQuery = `
  MATCH (company:Company {id: $companyId})
        -[:OFFERS]->(job:Job)
        -[:REQUIRES]->(skill:Skill)

  RETURN
    job,
    collect(DISTINCT skill) AS skills

  ORDER BY job.title
`