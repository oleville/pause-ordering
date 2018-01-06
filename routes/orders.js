import models from '../models'
import express from 'express'

const router = express.Router()

/**
 * @api {get} /action/:actionId Request action information
 * @apiName GetAction
 * @apiGroup Action
 *
 * @apiParam {Number} actionId Action's unique ID
 *
 * @apiSuccess {String} address The address of the action
 * @apiSuccess {String} name The name of the action
 * @apiSuccess {String} description A description of the action
 * @apiSuccess {Number} duration Duration, in seconds, of the action
 * @apiSuccess {Number} assetId The asset that this action is associated with, if any
 * @apiSuccess {Number} redValue If this is a background color changing action, the value of red that should be used. Should be between 0-255.
 * @apiSuccess {Number} greenValue If this is a background color changing action, the value of greenthat should be used. Should be between 0-255.
 * @apiSuccess {Number} blueValue If this is a background color changing action, the value of blue that should be used. Should be between 0-255.
 *
 * @apiError 404 The id of the action was not found
 */
router.get('/:actionId?', async (req, res) => {
  if (req.params && req.params.actionId) {
    let actions = await models.Actions.findAll({
      where: {
        id: req.params.actionId
      }
    })
    res.send(actions)
  } else {
    let actions = await models.Actions.findAll()
    res.send(actions)
  }
})

/**
 * @api {post} /action/ Create new action record
 * @apiName PostAction
 * @apiGroup Action
 *
 * @apiParam {String} address The address of the action
 * @apiParam {String} name The name of the action
 * @apiParam {String} description A description of the action
 * @apiParam {Number} duration The duration that the action should last for
 *
 * @apiParam {Number} assetId The asset that this action is associated with, if any
 * @apiParam {Number} actionTypeId The type of this action
 * @apiParam {Number} redValue (optional) If this is a background color changing action, the value of red that should be used. Should be between 0-255.
 * @apiParam {Number} greenValue (optional) If this is a background color changing action, the value of greenthat should be used. Should be between 0-255.
 * @apiParam {Number} blueValue (optional) If this is a background color changing action, the value of blue that should be used. Should be between 0-255.
 *
 * @apiError 500 Failed to create record in database
 *
 * @apiSuccess 201 The record was created, body contains JSON with id of created record
 */
router.post('/', async (req, res) => {
  let actions = await models.Actions.create({
    address: req.query.address,
    duration: req.query.duration,
    name: req.query.name,
    description: req.query.description,
    cueId: req.query.cueId,
    actionTypeId: req.query.actionTypeId,
    deviceId: req.query.deviceId,
    assetid: req.query.assetId,
    redValue: req.query.redValue,
    blueValue: req.query.blueValue,
    greenValue: req.query.greenValue
  })
  .error(() => {
    res.sendStatus(500)
  })

  res.send( { id: actions.get('id') } )
})


/**
 * @api {patch} /action/:actionId Modify action information
 * @apiName PatchAction
 * @apiGroup Action
 *
 * @apiParam {Number} actionId Action's unique ID
 * @apiParam {Number} actionTypeId (optional) The ID of the type of this action
 * @apiParam {String} address (optional) The address of the action
 * @apiParam {String} name (optional) The name of the action
 * @apiParam {String} description (optional) A description of the action
 * @apiParam {Number} duration (optional) Duration, in seconds, of the action
 * @apiParam {Number} assetId (optional) The asset that this action is associated with, if any
 * @apiParam {Number} redValue (optional) If this is a background color changing action, the value of red that should be used. Should be between 0-255.
 * @apiParam {Number} greenValue (optional) If this is a background color changing action, the value of greenthat should be used. Should be between 0-255.
 * @apiParam {Number} blueValue (optional) If this is a background color changing action, the value of blue that should be used. Should be between 0-255.
 *
 * @apiSuccess 202 The record was updated
 *
 * @apiError 404 The id of the action was not found
 * @apiError 500 Internal server error while updating record
 */
router.patch('/:actionId', async (req, res) => {
  let action = await models.Actions.find({
    where: {
      id: req.params.actionId
    }
  })
  .error((err) => {
    res.sendStatus(500)
  })

  if (!action) {
    res.sendStatus(404)
    return
  }
  action.address = req.query.address || action.address
  action.duration = req.query.duration || action.duration
  action.name = req.query.name || action.name
  action.description = req.query.description || action.description
  action.cueId = req.query.cueId || action.cueId
  action.actionTypeId = req.query.actionTypeId || action.actionTypeId
  action.deviceId = req.query.deviceId || action.deviceId
  action.actionId = req.query.assetid || action.assetId
  action.redValue = req.query.redValue || action.redValue
  action.greenValue = req.query.greenValue || action.greenValue
  action.blueValue = req.query.blueValue || action.blueValue
  await action.save()
  res.sendStatus(202)
})

/**
 * @api {delete} /action/:actionId Delete action information
 * @apiName DeleteAction
 * @apiGroup Action
 *
 * @apiParam {Number} actionId Action's unique ID
 *
 * @apiSuccess 202 The record was deleted
 *
 * @apiError 500 Internal server error while updating record
 */
router.delete('/:actionId', async (req, res) => {
  await models.Actions.destroy({
    where: {
      id: req.params.actionId
    }
  })
  .error(() => {
    res.sendStatus(500)
  })

  res.sendStatus(202)
})

module.exports = router