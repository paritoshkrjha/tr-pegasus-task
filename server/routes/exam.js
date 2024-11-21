import { Router } from 'express'
import MOCK_EXAMS from '../data/mockExams.js'

const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({ exams: MOCK_EXAMS })
})

router.get('/:userId', (req, res) => {
  const { userId } = req.params
  console.log(userId)
  const userExams = MOCK_EXAMS.filter((exam) => exam.userId === userId)
  console.log(userExams)
  res.status(200).json({ exams: userExams })
})

export default router
