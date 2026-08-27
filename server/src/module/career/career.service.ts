import { driver } from "../../db/driver.ts";
import { getCandidateCareerQuery, getCareerRecommendationsQuery, getSkillsToLearnQuery } from "../../queries/career.queries.ts";


export const getCareerPaths = async (personId: string) => {
  const session = driver.session();

  try {
    // 1. Candidate
    const candidateResult = await session.run(
      getCandidateCareerQuery,
      { personId }
    );

    const candidateRecord = candidateResult.records[0];

    const candidate = candidateRecord
      ? {
        id: candidateRecord.get("id"),
        name: candidateRecord.get("name"),
        title: candidateRecord.get("title"),
        experienceLevel: candidateRecord.get("experienceLevel"),
        location: candidateRecord.get("location"),
        skills: candidateRecord.get("skills"),
      }
      : null;

    // 2. Recommendations
    const recommendationsResult = await session.run(
      getCareerRecommendationsQuery,
      { personId }
    );

    const recommendations = recommendationsResult.records.map((record) => ({
      jobId: record.get("jobId"),
      job: record.get("job"),
      company: record.get("company"),
      matchPercentage: record.get("matchPercentage"),
      matchedSkills: record.get("matchedSkills"),
      missingSkills: record.get("missingSkills"),
    }));

    // 3. Skills to learn
    const skillsToLearnResult = await session.run(
      getSkillsToLearnQuery,
      { personId }
    );

    const skillsToLearn = skillsToLearnResult.records.map((record) => ({
      skillId: record.get("skillId"),
      skill: record.get("skill"),
      jobCount: record.get("jobCount").toNumber(),
    }));

    return {
      candidate,
      recommendations,
      skillsToLearn,
    };
  } finally {
    await session.close();
  }
};