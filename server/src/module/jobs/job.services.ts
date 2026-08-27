import type { Node } from 'neo4j-driver'
import { getJobsForPersonQuery, getJobsQuery, getJobQuery } from '../../queries/jobs.queries.ts'
import { runQuery } from '../../db/query.ts'

export const getJobsForPerson = async (personId: string) => {
  const records = await runQuery(getJobsForPersonQuery, {
    personId,
  })

  return records.map((record) => {
    const job = record.get('job')
    const skills = record.get('matchingSkills') as Node[]
    const matchCount = record.get('matchCount').toNumber()

    return {
      job: job.properties,
      matchingSkills: skills.map((skill) => skill.properties),
      matchCount,
    }
  })
}


type Job = {
  id: string
  title: string
  company: string
  location: string
  employmentType: string
  salary?: string
  description?: string
}

export const getJobs = async () => {
  const records = await runQuery(getJobsQuery)

  return records.map((record) => {
    const job = record.get("job") as Node
    const skills = record.get("skills") as Node[]

    return {
      ...job.properties,
      skills: skills.map((skill) => skill.properties),
    }
  })
}

export const getJob = async (jobId: string) => {
  const records = await runQuery(getJobQuery, {
    jobId,
  })

  if (records.length === 0) {
    return null
  }

  const job = records[0].get('job') as Node
  const skills = records[0].get('skills') as Node[]

  return {
    ...job.properties,
    skills: skills.map((skill) => skill.properties),
  }
}