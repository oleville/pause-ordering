import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  let toppings
  try {
    toppings = await models.Toppings.findAll()
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
  if (toppings) {
    res.send(toppings)
  } else {
    res.sendStatus(404)
  }
  return toppings
})

module.exports = router
