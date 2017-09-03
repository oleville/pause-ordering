import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  models.Orders.findAll()
  .then((orders) => {
    console.log(orders)
    res.send(orders)
  })
})

module.exports = router
