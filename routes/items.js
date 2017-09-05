import models from '../lib/models'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  models.Items.findAll()
  .then((items) => {
    console.log(items)
    res.send(items)
  })
})

module.exports = router
