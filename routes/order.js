import models from '../models'
import express from 'express'

const router = express.Router()


router.get('/:order_id?', async (req, res) => {
  if (req.params && req.params.order_id) {
    let order = await models.order.findAll({
      where: {
        id: req.params.order_id
      }
    })
    res.send(order)
  } else {
    let order = await models.order.findAll()
    res.send(order)
  }
})


router.post('/', async (req, res) => {
  let order = await models.order.create({
    name: req.query.name,
    location: req.query.location,
    phone: req.query.phone,
    email: req.query.description,
    total_cost: req.query.total_cost
  })
  .error(() => {
    res.sendStatus(500)
  })

  res.send( { id: order.get('id') } )
})


router.patch('/:order_id', async (req, res) => {
  let order = await models.order.find({
    where: {
      id: req.params.order_id
    }
  })
  .error((err) => {
    res.sendStatus(500)
  })

  if (!order) {
    res.sendStatus(404)
    return
  }
  order.name: req.query.name || order.name
  order.location: req.query.location || order.location
  order.phone: req.query.phone || order.phone
  order.email: req.query.description || order.email
  order.total_cost: req.query.total_cost || order.total_cost
  await order.save()
  res.sendStatus(202)
})

router.delete('/:order_id', async (req, res) => {
  await models.order.destroy({
    where: {
      id: req.params.order_id
    }
  })
  .error(() => {
    res.sendStatus(500)
  })

  res.sendStatus(202)
})

module.exports = router
