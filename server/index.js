import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.js'
import examRouter from './routes/exam.js'

const app = express()
const PORT = 8000

app.use(express.json())
app.use(cors())
app.use('/api/user/', userRouter)
app.use('/api/exams/', examRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
