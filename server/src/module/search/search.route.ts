import { Router } from 'express'
import { asyncHandler } from '../../middleware/asyncHandler.ts'
import { globalSearchController } from './search.controller.ts'



const searchRouter = Router()

searchRouter.get('/',asyncHandler(globalSearchController))

export default searchRouter