
import express, { type Application } from 'express'
import skillRouter from './module/skills/skills.route.ts'
import { errorMiddleware } from './middleware/error.middleware.ts'
import companyRouter from './module/company/company.routes.ts'
import jobRouter from './module/jobs/jobs.routes.ts'
import careerRouter from './module/career/carreer.route.ts'
import searchRouter from './module/search/search.route.ts'

const app: Application = express()

app.use(express.json())

app.use('/api/skills', skillRouter)
app.use('/api/companies', companyRouter)
app.use('/api/jobs', jobRouter)
app.use('/api/career', careerRouter)
app.use('/api/search', searchRouter)

app.use(errorMiddleware)

export default app

