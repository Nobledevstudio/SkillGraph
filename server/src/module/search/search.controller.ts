import { globalSearch } from "./search.sevices.ts"
import type { Request, Response } from "express"

export const globalSearchController = async (
  req: Request,
  res: Response
) => {
  const { searchTerm } = req.query

  if (typeof searchTerm !== 'string' || !searchTerm.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Search term is required',
    })
  }

  const results = await globalSearch(searchTerm)

  return res.status(200).json({
    success: true,
    data: results,
  })
}