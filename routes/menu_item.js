import models from '../models'
import express from 'express'

const router = express.Router()


router.get('/:menu_item_id?', async (req, res) => {
  if (req.params && req.params.menu_item_id) {
    let menu_item = await models.menu_item.findAll({
      where: {
        id: req.params.menu_item_id
      }
    })
    res.send(menu_item)
  } else {
    let menu_item = await models.menu_item.findAll()
    res.send(menu_item)
  }
})


router.post('/', async (req, res) => {
  let menu_item = await models.menu_item.create({
    latenight: req.query.latenight,
    active: req.query.active,
    name: req.query.name,
    deliverable: req.query.deliverable,
    size: req.query.size,
    price: req.query.price
  })
  .error(() => {
    res.sendStatus(500)
  })

  res.send( { id: menu_item.get('id') } )
})


router.patch('/:menu_item_id', async (req, res) => {
  let menu_item = await models.menu_item.find({
    where: {
      id: req.params.menu_item_id
    }
  })
  .error((err) => {
    res.sendStatus(500)
  })

  if (!menu_item) {
    res.sendStatus(404)
    return
  }
  menu_item.latenight: req.query.latenight || menu_item.latenight
  menu_item.active: req.query.active || menu_item.active
  menu_item.name: req.query.name || menu_item.name
  menu_item.deliverable: req.query.deliverable || menu_item.deliverable
  menu_item.size: req.query.size || menu_item.size
  menu_item.price: req.query.price || menu_item.price
  await menu_item.save()
  res.sendStatus(202)
})

router.delete('/:menu_item_id', async (req, res) => {
  await models.menu_item.destroy({
    where: {
      id: req.params.menu_item_id
    }
  })
  .error(() => {
    res.sendStatus(500)
  })

  res.sendStatus(202)
})

module.exports = router
