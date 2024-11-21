import { Router } from 'express'
import users from '../data/mockUsers.js'

const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({ users })
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required' })
    return
  }

  const user = users.find(
    (user) => user.email === email && user.password === password
  )

  console.log(user)
  if (user) {
    res.status(200).json({ user })
  } else {
    res.status(401).json({ message: 'Invalid email or password' })
  }
})

export default router
