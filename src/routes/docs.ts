import express from 'express'

const docRouter = express.Router()

docRouter.get('/', (_, res) => {
  res.send('Documentation')
})

export default docRouter
