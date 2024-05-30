import { Router } from 'express'

const router = Router()

// GET localhost:3000
router.get('/', function(req, res) {
  res.status(200).json({ msg: 'Land And Rituals' })
})

export { router }
