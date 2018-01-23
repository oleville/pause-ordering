import models from '../models'
import express from 'express'

const router = express.Router()


router.get('/:category_id?', async (req, res) => {
  if (req.params && req.params.category_id) {
    let category = await models.category.findAll({
      where: {
        id: req.params.category_id
      }
    })
    res.send(category)
  } else {
    let category = await models.category.findAll()
    res.send(category)
  }
})


router.post('/', async (req, res) => {
  let category = await models.category.create({
    name: req.query.name,
  })
  .error(() => {
    res.sendStatus(500)
  })

  res.send( { id: category.get('id') } )
})


router.patch('/:category_id', async (req, res) => {
  let category = await models.category.find({
    where: {
      id: req.params.category_id
    }
  })
  .error((err) => {
    res.sendStatus(500)
  })

  if (!category) {
    res.sendStatus(404)
    return
  }
  category.name: req.query.name || category.name
  await category.save()
  res.sendStatus(202)
})

router.delete('/:category_id', async (req, res) => {
  await models.category.destroy({
    where: {
      id: req.params.category_id
    }
  })
  .error(() => {
    res.sendStatus(500)
  })

  res.sendStatus(202)
})

module.exports = router
