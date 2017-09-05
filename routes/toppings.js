import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  models.Toppings.findAll()
  .then((toppings) => {
    console.log(toppings)
    res.send(toppings)
  })
})

module.exports = router
