import { driver } from '../src/db/driver.ts'

const industries = [
  {
    id: 'industry-technology',
    name: 'Technology',
  },
  {
    id: 'industry-fintech',
    name: 'Fintech',
  },
  {
    id: 'industry-cloud',
    name: 'Cloud Computing',
  },
  {
    id: 'industry-healthcare',
    name: 'Healthcare',
  },
  {
    id: 'industry-ai',
    name: 'Artificial Intelligence',
  },
]

const companies = [
  {
    id: 'company-technova',
    name: 'TechNova',
    description:
      'A fictional technology company building modern digital products.',
    industryId: 'industry-technology',
  },
  {
    id: 'company-paywave',
    name: 'PayWave',
    description:
      'A fictional fintech company building digital payment solutions.',
    industryId: 'industry-fintech',
  },
  {
    id: 'company-cloudbase',
    name: 'CloudBase',
    description:
      'A fictional cloud technology company building scalable infrastructure.',
    industryId: 'industry-cloud',
  },
  {
    id: 'company-dataflow',
    name: 'DataFlow',
    description:
      'A fictional data technology company building data-driven platforms.',
    industryId: 'industry-technology',
  },
  {
    id: 'company-ailabs',
    name: 'AI Labs',
    description:
      'A fictional artificial intelligence company building intelligent systems.',
    industryId: 'industry-ai',
  },
  {
    id: 'company-healthtech',
    name: 'HealthTech',
    description:
      'A fictional healthcare technology company building digital health products.',
    industryId: 'industry-healthcare',
  },
  {
    id: 'company-fincore',
    name: 'FinCore',
    description:
      'A fictional financial technology company building enterprise platforms.',
    industryId: 'industry-fintech',
  },
  {
    id: 'company-logix',
    name: 'Logix Systems',
    description:
      'A fictional logistics technology company building transportation software.',
    industryId: 'industry-technology',
  },
]

const skills = [
  // Frontend
  {
    id: 'skill-javascript',
    name: 'JavaScript',
    category: 'Frontend',
  },
  {
    id: 'skill-typescript',
    name: 'TypeScript',
    category: 'Frontend',
  },
  {
    id: 'skill-html',
    name: 'HTML',
    category: 'Frontend',
  },
  {
    id: 'skill-css',
    name: 'CSS',
    category: 'Frontend',
  },
  {
    id: 'skill-react',
    name: 'React',
    category: 'Frontend',
  },
  {
    id: 'skill-nextjs',
    name: 'Next.js',
    category: 'Frontend',
  },
  {
    id: 'skill-vue',
    name: 'Vue.js',
    category: 'Frontend',
  },
  {
    id: 'skill-redux',
    name: 'Redux',
    category: 'Frontend',
  },

  // Backend
  {
    id: 'skill-nodejs',
    name: 'Node.js',
    category: 'Backend',
  },
  {
    id: 'skill-express',
    name: 'Express.js',
    category: 'Backend',
  },
  {
    id: 'skill-nestjs',
    name: 'NestJS',
    category: 'Backend',
  },
  {
    id: 'skill-python',
    name: 'Python',
    category: 'Backend',
  },
  {
    id: 'skill-fastapi',
    name: 'FastAPI',
    category: 'Backend',
  },
  {
    id: 'skill-django',
    name: 'Django',
    category: 'Backend',
  },
  {
    id: 'skill-java',
    name: 'Java',
    category: 'Backend',
  },
  {
    id: 'skill-springboot',
    name: 'Spring Boot',
    category: 'Backend',
  },

  // Database
  {
    id: 'skill-postgresql',
    name: 'PostgreSQL',
    category: 'Database',
  },
  {
    id: 'skill-mongodb',
    name: 'MongoDB',
    category: 'Database',
  },
  {
    id: 'skill-redis',
    name: 'Redis',
    category: 'Database',
  },
  {
    id: 'skill-graphql',
    name: 'GraphQL',
    category: 'Database',
  },

  // DevOps
  {
    id: 'skill-docker',
    name: 'Docker',
    category: 'DevOps',
  },
  {
    id: 'skill-kubernetes',
    name: 'Kubernetes',
    category: 'DevOps',
  },
  {
    id: 'skill-aws',
    name: 'AWS',
    category: 'DevOps',
  },
  {
    id: 'skill-cicd',
    name: 'CI/CD',
    category: 'DevOps',
  },
  {
    id: 'skill-linux',
    name: 'Linux',
    category: 'DevOps',
  },

  // General
  {
    id: 'skill-git',
    name: 'Git',
    category: 'General',
  },
  {
    id: 'skill-rest-api',
    name: 'REST API',
    category: 'General',
  },
  {
    id: 'skill-testing',
    name: 'Testing',
    category: 'General',
  },
  {
    id: 'skill-system-design',
    name: 'System Design',
    category: 'General',
  },
  {
    id: 'skill-data-structures',
    name: 'Data Structures',
    category: 'General',
  },
]


const jobs = [
  {
    id: 'job-frontend-developer',
    title: 'Frontend Developer',
    location: 'Lagos',
    employmentType: 'Full-time',
    salaryRange: '₦300k - ₦500k',
    companyId: 'company-technova',
  },
  {
    id: 'job-react-developer',
    title: 'React Developer',
    location: 'Lagos',
    employmentType: 'Full-time',
    salaryRange: '₦350k - ₦550k',
    companyId: 'company-paywave',
  },
  {
    id: 'job-nextjs-developer',
    title: 'Next.js Developer',
    location: 'Remote',
    employmentType: 'Full-time',
    salaryRange: '₦400k - ₦650k',
    companyId: 'company-cloudbase',
  },
  {
    id: 'job-backend-developer',
    title: 'Backend Developer',
    location: 'Lagos',
    employmentType: 'Full-time',
    salaryRange: '₦400k - ₦650k',
    companyId: 'company-technova',
  },
  {
    id: 'job-nodejs-developer',
    title: 'Node.js Developer',
    location: 'Remote',
    employmentType: 'Full-time',
    salaryRange: '₦350k - ₦600k',
    companyId: 'company-dataflow',
  },
  {
    id: 'job-nestjs-developer',
    title: 'NestJS Developer',
    location: 'Lagos',
    employmentType: 'Full-time',
    salaryRange: '₦450k - ₦700k',
    companyId: 'company-cloudbase',
  },
  {
    id: 'job-python-developer',
    title: 'Python Developer',
    location: 'Remote',
    employmentType: 'Full-time',
    salaryRange: '₦400k - ₦650k',
    companyId: 'company-ailabs',
  },
  {
    id: 'job-django-developer',
    title: 'Django Developer',
    location: 'Lagos',
    employmentType: 'Full-time',
    salaryRange: '₦350k - ₦550k',
    companyId: 'company-healthtech',
  },
  {
    id: 'job-fastapi-developer',
    title: 'FastAPI Developer',
    location: 'Remote',
    employmentType: 'Full-time',
    salaryRange: '₦450k - ₦700k',
    companyId: 'company-ailabs',
  },
  {
    id: 'job-java-backend',
    title: 'Java Backend Engineer',
    location: 'Lagos',
    employmentType: 'Full-time',
    salaryRange: '₦500k - ₦800k',
    companyId: 'company-fincore',
  },
  {
    id: 'job-devops-engineer',
    title: 'DevOps Engineer',
    location: 'Remote',
    employmentType: 'Full-time',
    salaryRange: '₦500k - ₦800k',
    companyId: 'company-cloudbase',
  },
  {
    id: 'job-cloud-engineer',
    title: 'Cloud Engineer',
    location: 'Lagos',
    employmentType: 'Full-time',
    salaryRange: '₦500k - ₦850k',
    companyId: 'company-dataflow',
  },
  {
    id: 'job-fullstack-developer',
    title: 'Full Stack Developer',
    location: 'Lagos',
    employmentType: 'Full-time',
    salaryRange: '₦450k - ₦700k',
    companyId: 'company-technova',
  },
  {
    id: 'job-software-engineer',
    title: 'Software Engineer',
    location: 'Lagos',
    employmentType: 'Full-time',
    salaryRange: '₦500k - ₦850k',
    companyId: 'company-fincore',
  },
  {
    id: 'job-platform-engineer',
    title: 'Platform Engineer',
    location: 'Remote',
    employmentType: 'Full-time',
    salaryRange: '₦550k - ₦900k',
    companyId: 'company-ailabs',
  },
  {
    id: 'job-logistics-developer',
    title: 'Logistics Software Developer',
    location: 'Lagos',
    employmentType: 'Full-time',
    salaryRange: '₦350k - ₦600k',
    companyId: 'company-logix',
  },
]


const people = [
  {
    id: 'person-alex',
    name: 'Alex Johnson',
    experienceLevel: 'Junior',
    location: 'Lagos',
  },
  {
    id: 'person-sarah',
    name: 'Sarah Williams',
    experienceLevel: 'Mid-level',
    location: 'Abuja',
  },
  {
    id: 'person-daniel',
    name: 'Daniel Okafor',
    experienceLevel: 'Junior',
    location: 'Lagos',
  },
  {
    id: 'person-emma',
    name: 'Emma Brown',
    experienceLevel: 'Mid-level',
    location: 'Lagos',
  },
  {
    id: 'person-michael',
    name: 'Michael Adeyemi',
    experienceLevel: 'Senior',
    location: 'Port Harcourt',
  },
]


const personSkills = [
  {
    personId: 'person-alex',
    skillIds: [
      'skill-javascript',
      'skill-react',
      'skill-typescript',
      'skill-html',
      'skill-css',
    ],
  },
  {
    personId: 'person-sarah',
    skillIds: [
      'skill-python',
      'skill-django',
      'skill-postgresql',
      'skill-docker',
      'skill-git',
    ],
  },
  {
    personId: 'person-daniel',
    skillIds: [
      'skill-javascript',
      'skill-nodejs',
      'skill-express',
      'skill-mongodb',
      'skill-git',
    ],
  },
  {
    personId: 'person-emma',
    skillIds: [
      'skill-python',
      'skill-fastapi',
      'skill-postgresql',
      'skill-docker',
      'skill-aws',
    ],
  },
  {
    personId: 'person-michael',
    skillIds: [
      'skill-java',
      'skill-springboot',
      'skill-postgresql',
      'skill-docker',
      'skill-kubernetes',
    ],
  },
]


const skillRelationships = [
  ['skill-javascript', 'skill-typescript', 0.95],
  ['skill-javascript', 'skill-react', 0.9],
  ['skill-javascript', 'skill-vue', 0.8],
  ['skill-react', 'skill-nextjs', 0.95],
  ['skill-react', 'skill-redux', 0.9],
  ['skill-typescript', 'skill-react', 0.9],
  ['skill-typescript', 'skill-nextjs', 0.9],
  ['skill-html', 'skill-css', 0.95],
  ['skill-css', 'skill-react', 0.7],

  ['skill-javascript', 'skill-nodejs', 0.9],
  ['skill-nodejs', 'skill-express', 0.95],
  ['skill-nodejs', 'skill-nestjs', 0.85],
  ['skill-python', 'skill-django', 0.95],
  ['skill-python', 'skill-fastapi', 0.95],
  ['skill-java', 'skill-springboot', 0.95],

  ['skill-nodejs', 'skill-mongodb', 0.85],
  ['skill-nodejs', 'skill-postgresql', 0.8],
  ['skill-express', 'skill-mongodb', 0.8],
  ['skill-django', 'skill-postgresql', 0.9],
  ['skill-fastapi', 'skill-postgresql', 0.9],
  ['skill-springboot', 'skill-postgresql', 0.9],

  ['skill-docker', 'skill-kubernetes', 0.95],
  ['skill-docker', 'skill-aws', 0.85],
  ['skill-linux', 'skill-docker', 0.9],
  ['skill-cicd', 'skill-docker', 0.9],
  ['skill-aws', 'skill-kubernetes', 0.8],

  ['skill-git', 'skill-rest-api', 0.6],
  ['skill-rest-api', 'skill-express', 0.9],
  ['skill-rest-api', 'skill-fastapi', 0.9],
  ['skill-testing', 'skill-react', 0.7],
  ['skill-testing', 'skill-nodejs', 0.7],
  ['skill-system-design', 'skill-docker', 0.8],
  ['skill-system-design', 'skill-kubernetes', 0.9],
]

const jobSkills = [
  [
    'job-frontend-developer',
    ['skill-react', 'skill-typescript', 'skill-css'],
  ],
  [
    'job-react-developer',
    ['skill-react', 'skill-javascript', 'skill-redux'],
  ],
  [
    'job-nextjs-developer',
    ['skill-nextjs', 'skill-react', 'skill-typescript'],
  ],
  [
    'job-backend-developer',
    ['skill-nodejs', 'skill-express', 'skill-postgresql'],
  ],
  [
    'job-nodejs-developer',
    ['skill-nodejs', 'skill-mongodb', 'skill-rest-api'],
  ],
  [
    'job-nestjs-developer',
    ['skill-nestjs', 'skill-typescript', 'skill-postgresql'],
  ],
  [
    'job-python-developer',
    ['skill-python', 'skill-git', 'skill-rest-api'],
  ],
  [
    'job-django-developer',
    ['skill-python', 'skill-django', 'skill-postgresql'],
  ],
  [
    'job-fastapi-developer',
    ['skill-python', 'skill-fastapi', 'skill-postgresql'],
  ],
  [
    'job-java-backend',
    ['skill-java', 'skill-springboot', 'skill-postgresql'],
  ],
  [
    'job-devops-engineer',
    ['skill-docker', 'skill-kubernetes', 'skill-aws'],
  ],
  [
    'job-cloud-engineer',
    ['skill-aws', 'skill-linux', 'skill-docker'],
  ],
  [
    'job-fullstack-developer',
    ['skill-react', 'skill-nodejs', 'skill-postgresql'],
  ],
  [
    'job-software-engineer',
    ['skill-java', 'skill-docker', 'skill-postgresql'],
  ],
  [
    'job-platform-engineer',
    ['skill-kubernetes', 'skill-docker', 'skill-aws'],
  ],
  [
    'job-logistics-developer',
    ['skill-nodejs', 'skill-react', 'skill-postgresql', 'skill-rest-api'],
  ],
]


const run = async () => {
  const session = driver.session()

  try {
    console.log('🌱 Starting database seed...')

    await session.run(`
      MATCH (n)
      DETACH DELETE n
    `)

    console.log('🧹 Existing data cleared')

    // Industries
    await session.run(
      `
        UNWIND $industries AS industry
        MERGE (i:Industry {id: industry.id})
        SET i.name = industry.name
      `,
      { industries },
    )

    console.log(`✅ Created ${industries.length} industries`)

    // Companies
    await session.run(
      `
        UNWIND $companies AS company

        MERGE (c:Company {id: company.id})

        SET c.name = company.name,
            c.description = company.description

        WITH c, company

        MATCH (industry:Industry {id: company.industryId})

        MERGE (c)-[:IN_INDUSTRY]->(industry)
      `,
      { companies },
    )

    console.log(`✅ Created ${companies.length} companies`)

    // Skills
    await session.run(
      `
        UNWIND $skills AS skill

        MERGE (s:Skill {id: skill.id})

        SET s.name = skill.name,
            s.category = skill.category
      `,
      { skills },
    )

    console.log(`✅ Created ${skills.length} skills`)

    // Jobs
    await session.run(
      `
        UNWIND $jobs AS job

        MERGE (j:Job {id: job.id})

        SET j.title = job.title,
            j.location = job.location,
            j.employmentType = job.employmentType,
            j.salaryRange = job.salaryRange

        WITH j, job

        MATCH (company:Company {id: job.companyId})

        MERGE (company)-[:OFFERS]->(j)
      `,
      { jobs },
    )

    console.log(`✅ Created ${jobs.length} jobs`)

    // People
    await session.run(
      `
        UNWIND $people AS person

        MERGE (p:Person {id: person.id})

        SET p.name = person.name,
            p.experienceLevel = person.experienceLevel,
            p.location = person.location
      `,
      { people },
    )

    console.log(`✅ Created ${people.length} people`)

    // Person → Skill
    for (const person of personSkills) {
      await session.run(
        `
          MATCH (person:Person {id: $personId})

          UNWIND $skillIds AS skillId

          MATCH (skill:Skill {id: skillId})

          MERGE (person)-[:HAS_SKILL]->(skill)
        `,
        {
          personId: person.personId,
          skillIds: person.skillIds,
        },
      )
    }

    console.log('✅ Created person-skill relationships')

    // Skill → Skill
    await session.run(
      `
        UNWIND $relationships AS relationship

        MATCH (source:Skill {id: relationship[0]})
        MATCH (target:Skill {id: relationship[1]})

        MERGE (source)-[r:RELATED_TO]->(target)

        SET r.strength = relationship[2]
      `,
      {
        relationships: skillRelationships,
      },
    )

    console.log('✅ Created skill relationships')

    // Job → Skill
    for (const [jobId, skillIds] of jobSkills) {
      await session.run(
        `
          MATCH (job:Job {id: $jobId})

          UNWIND $skillIds AS skillId

          MATCH (skill:Skill {id: skillId})

          MERGE (job)-[:REQUIRES]->(skill)
        `,
        {
          jobId,
          skillIds,
        },
      )
    }

    console.log('✅ Created job-skill relationships')

    console.log('🎉 Database seed completed successfully')
  } catch (error) {
    console.error('❌ Database seed failed')
    console.error(error)
    process.exitCode = 1
  } finally {
    await session.close()
    await driver.close()
  }
}

run()