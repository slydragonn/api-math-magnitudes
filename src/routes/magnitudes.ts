import express from 'express'
import { getMagnitudes } from '../services/magnitudes-service'

const magtRoutes = express.Router()

magtRoutes.get('/', (_, res) => {
  const data = getMagnitudes()
  res.json(data)
})

export default magtRoutes
