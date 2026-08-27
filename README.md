# SkillGraph

SkillGraph is a career recommendation platform that connects a person's current skills and experience level to relevant career opportunities.

The platform uses a graph-based approach to identify matching skills, missing skills, recommended career opportunities, and additional skills a candidate can learn to unlock more opportunities.

## Features

* **People Directory**

  * View available candidates.
  * See each person's experience level and location.
  * Select a candidate to view their career path.

* **Career Path**

  * Displays the candidate's profile information.
  * Shows current skills.
  * Provides recommended career opportunities.
  * Calculates a match percentage for each opportunity.
  * Displays skills that match the opportunity.
  * Identifies missing skills.
  * Recommends additional skills to learn based on available opportunities.

* **Career Recommendations**

  * Ranks opportunities based on skill compatibility.
  * Shows matched and missing skills for each recommendation.

* **Skills to Learn**

  * Identifies skills that can unlock additional opportunities.
  * Shows the number of jobs associated with each skill.

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* React Query
* Axios
* Lucide React

### Backend

* Node.js
* Express.js
* TypeScript
* Neo4j / Cypher

### Development Tools

* pnpm
* Git
* GitHub
* Postman

## Application Flow

```text
People
  │
  ├── Select Candidate
  │
  ▼
Career Path
  │
  ├── Candidate Profile
  │
  ├── Current Skills
  │
  ├── Career Recommendations
  │      ├── Match Percentage
  │      ├── Matched Skills
  │      └── Missing Skills
  │
  └── Skills To Learn
         └── Additional Job Opportunities
```

## API

### Get All People

```http
GET /api/people
```

Returns the available candidates.

Example response:

```json
{
  "success": true,
  "data": [
    {
      "id": "person-alex",
      "name": "Alex Johnson",
      "experienceLevel": "Junior",
      "location": "Lagos"
    }
  ]
}
```

### Get Candidate Career Path

```http
GET /api/career/:personId/paths
```

Example:

```http
GET /api/career/person-daniel/paths
```

The endpoint returns:

* Candidate information
* Current skills
* Recommended career opportunities
* Match percentages
* Matched skills
* Missing skills
* Skills to learn

## Project Structure

```text
.
├── client/
│   └── src/
│       ├── app/
│       ├── components/
│       └── features/
│
├── server/
│   └── src/
│       ├── db/
│       ├── middleware/
│       ├── queries/
│       └── modules/
│           ├── career/
│           └── person/
│
├── docs/
│   └── screenshots/
│
└── README.md
```

## Screenshots

Project screenshots are available in:

```text
docs/screenshots/
```

The screenshots demonstrate the People directory and Career Path experience.

## Running Locally

### Prerequisites

Make sure you have installed:

* Node.js
* pnpm
* Neo4j

### Install Dependencies

From the project root:

```bash
pnpm install
```

If the frontend and backend have separate package files, install dependencies in each directory:

```bash
cd client
pnpm install
```

```bash
cd ../server
pnpm install
```

## Environment Variables

Create a `.env` file in the server directory:

COGNODB_URI=your_cognodb_uri
COGNODB_USERNAME=cognodb
COGNODB_PASSWORD=your_cognodb_password

Do not commit your `.env` file or expose your credentials.



Configure the frontend API base URL according to your local backend:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Start the Backend

```bash
cd server
pnpm dev
```

### Start the Frontend

In another terminal:

```bash
cd client
pnpm dev
```

The frontend should then be available at:

```text
http://localhost:3000
```

The backend runs on:

```text
http://localhost:5000
```

## Example Career Recommendation

For a candidate with:

```text
JavaScript
Node.js
Express.js
MongoDB
Git
```

SkillGraph can identify opportunities such as:

```text
Backend Developer
67% Match

Matched:
✓ Node.js
✓ Express.js

Missing:
PostgreSQL
```

It can also identify additional skills that may open up more opportunities, such as:

```text
PostgreSQL
React
Docker
TypeScript
REST API
```

## Design Goals

The application was designed around three main principles:

1. **Skill-based recommendations** — connect candidate skills to relevant opportunities.
2. **Actionable gaps** — clearly show which skills are missing for a potential career path.
3. **Career discovery** — help candidates understand which skills could unlock additional opportunities.

## Status

The core SkillGraph career recommendation experience is complete, including the People directory, candidate career paths, skill matching, recommendations, and skills-to-learn functionality.
