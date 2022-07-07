import express from 'express'
import docRouter from './routes/docs'
import magtRoutes from './routes/magnitudes'

const app = express()
app.use(express.json())

const PORT = 3001

app.use('/docs', docRouter)
app.use('/api/magnitudes', magtRoutes)

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`)
})
