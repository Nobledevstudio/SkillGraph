import {
  getCandidateCareerQuery,
  getCareerRecommendationsQuery,
  getSkillsToLearnQuery,
} from "../src/queries/career.queries.ts";

import { runQuery } from "../src/db/query.ts";

const personId = "person-sarah";

// 1. Candidate
const candidateRecords = await runQuery(getCandidateCareerQuery, {
  personId,
});

console.log("\n=== CANDIDATE ===");

console.table(
  candidateRecords.map((record) => ({
    id: record.get("id"),
    name: record.get("name"),
    title: record.get("title"),
    experienceLevel: record.get("experienceLevel"),
    location: record.get("location"),
    skills: record.get("skills"),
  })),
);

// 2. Career recommendations
const recommendationRecords = await runQuery(
  getCareerRecommendationsQuery,
  {
    personId,
  }
);

console.log("\n=== CAREER RECOMMENDATIONS ===");

console.table(
  recommendationRecords.map((record) => ({
    jobId: record.get("jobId"),
    job: record.get("job"),
    company: record.get("company"),
    matchPercentage: record.get("matchPercentage"),
    matchedSkills: record.get("matchedSkills"),
    missingSkills: record.get("missingSkills"),
  }))
);

// 3. Skills to learn
const skillsToLearnRecords = await runQuery(getSkillsToLearnQuery, {
  personId,
});

console.log("\n=== SKILLS TO LEARN ===");

console.table(
  skillsToLearnRecords.map((record) => ({
    skillId: record.get("skillId"),
    skill: record.get("skill"),
    jobCount: record.get("jobCount")?.toNumber(),
  }))
);

const skillRecords = await runQuery(
  `
    MATCH (person:Person {id: $personId})
          -[:HAS_SKILL]->(skill:Skill)

    RETURN
      person.name AS person,
      skill.id AS skillId,
      skill.name AS skill

    ORDER BY skill.name
  `,
  {
    personId: "person-sarah",
  }
);

console.log("\n=== SARAH'S ACTUAL SKILL RELATIONSHIPS ===");

console.table(
  skillRecords.map((record) => ({
    person: record.get("person"),
    skillId: record.get("skillId"),
    skill: record.get("skill"),
  }))
);