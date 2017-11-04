import models from '../models'
import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  let toppings
  try {
    toppings = await models.toppings.findAll()
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
    return
  }
  if (toppings) {
    res.send(toppings)
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
