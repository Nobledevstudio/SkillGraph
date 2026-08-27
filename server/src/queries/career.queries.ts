export const getCandidateCareerQuery = `
  MATCH (person:Person {id: $personId})

  OPTIONAL MATCH (person)-[:HAS_SKILL]->(skill:Skill)

  RETURN
    person.id AS id,
    person.name AS name,
    person.title AS title,
    person.experienceLevel AS experienceLevel,
    person.location AS location,
    collect(DISTINCT skill.name) AS skills
`;

export const getCareerRecommendationsQuery = `
  MATCH (person:Person {id: $personId})-[:HAS_SKILL]->(currentSkill:Skill)

MATCH (job:Job)-[:REQUIRES]->(requiredSkill:Skill)

OPTIONAL MATCH (company:Company)-[:OFFERS]->(job)

WITH
  person,
  job,
  company,
  collect(DISTINCT currentSkill.name) AS candidateSkills,
  collect(DISTINCT requiredSkill.name) AS requiredSkills

WITH
  job,
  company,
  candidateSkills,
  requiredSkills,
  [skill IN requiredSkills
    WHERE skill IN candidateSkills
  ] AS matchedSkills

WITH
  job,
  company,
  requiredSkills,
  matchedSkills,
  [skill IN requiredSkills
    WHERE NOT skill IN matchedSkills
  ] AS missingSkills

RETURN
  job.id AS jobId,
  job.title AS job,
  company.name AS company,
  matchedSkills,
  missingSkills,
  CASE
    WHEN size(requiredSkills) = 0 THEN 0
    ELSE round(
      100.0 * size(matchedSkills) / size(requiredSkills)
    )
  END AS matchPercentage

ORDER BY matchPercentage DESC
LIMIT 10
`;
export const getSkillsToLearnQuery = `
  MATCH (person:Person {id: $personId})
  OPTIONAL MATCH (person)-[:HAS_SKILL]->(currentSkill:Skill)

  WITH
    person,
    collect(DISTINCT currentSkill.id) AS currentSkillIds

  MATCH (job:Job)-[:REQUIRES]->(skill:Skill)

  WHERE NOT skill.id IN currentSkillIds

  WITH
    skill,
    count(DISTINCT job) AS jobCount

  RETURN
    skill.id AS skillId,
    skill.name AS skill,
    jobCount

  ORDER BY jobCount DESC
  LIMIT 10
`;