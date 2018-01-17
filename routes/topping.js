import models from '../models'
import express from 'express'

const router = express.Router()


router.get('/:topping_id?', async (req, res) => {
  if (req.params && req.params.topping_id) {
    let topping = await models.topping.findAll({
      where: {
        id: req.params.topping_id
      }
    })
    res.send(topping)
  } else {
    let topping = await models.topping.findAll()
    res.send(topping)
  }
})


router.post('/', async (req, res) => {
  let topping = await models.topping.create({
    name: req.query.name,
    price_extra: req.query.price_extra
  })
  .error(() => {
    res.sendStatus(500)
  })

  res.send( { id: topping.get('id') } )
})


router.patch('/:topping_id', async (req, res) => {
  let topping = await models.topping.find({
    where: {
      id: req.params.topping_id
    }
  })
  .error((err) => {
    res.sendStatus(500)
  })

  if (!topping) {
    res.sendStatus(404)
    return
  }
  topping.name: req.query.name || topping.name
  topping.price_extra: req.query.price_extra || topping.price_extra
  await topping.save()
  res.sendStatus(202)
})

router.delete('/:topping_id', async (req, res) => {
  await models.topping.destroy({
    where: {
      id: req.params.topping_id
    }
  })
  .error(() => {
    res.sendStatus(500)
  })

  res.sendStatus(202)
})

module.exports = router
