import models from '../models'
import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  let orders
  try {
    orders = await models.orders.findAll()
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
    return
  }
  if (orders) {
    res.send(orders)
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
