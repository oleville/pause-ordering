import models from '../models'
import express from 'express'

const router = express.Router()


router.get('/:item_id?', async (req, res) => {
  if (req.params && req.params.item_id) {
    let item = await models.item.findAll({
      where: {
        id: req.params.item_id
      }
    })
    res.send(item)
  } else {
    let item = await models.item.findAll()
    res.send(item)
  }
})


router.post('/', async (req, res) => {
  let item = await models.item.create({
    name: req.query.name,
  })
  .error(() => {
    res.sendStatus(500)
  })

  res.send( { id: item.get('id') } )
})


router.patch('/:item_id', async (req, res) => {
  let item = await models.item.find({
    where: {
      id: req.params.item_id
    }
  })
  .error((err) => {
    res.sendStatus(500)
  })

  if (!item) {
    res.sendStatus(404)
    return
  }
  item.name: req.query.name || item.name
  await item.save()
  res.sendStatus(202)
})

router.delete('/:item_id', async (req, res) => {
  await models.item.destroy({
    where: {
      id: req.params.item_id
    }
  })
  .error(() => {
    res.sendStatus(500)
  })

  res.sendStatus(202)
})

module.exports = router
