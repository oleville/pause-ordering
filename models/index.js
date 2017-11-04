import Sequelize from 'sequelize'
import path from 'path'
import fs from 'fs'

let env = process.env.NODE_ENV || 'development'
let config = require(path.join(__dirname, '..', 'config', 'config.json'))
config = config[env]
// Make a database connection
const sequelize = new Sequelize(config.database, config.username, config.password, config)

// Test DB connection
sequelize.authenticate()
.then(() => {
		console.log('Connected to database')
	})
	.catch(err => {
		console.error('Error connecting to database: ', err)
	})


let db = {}
let modelNames = []

// Get all the database table files from the files in this directory
fs.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !=='index.js')
	})
	.forEach(file => {
		let model = sequelize.import(path.join(__dirname, file))
		db[model.name] = model
		modelNames.push(model.name)
	})


modelNames.forEach(modelName => {
	if (db[modelName].associate) { // if this function exists
		db[modelName].associate(db) // call it
	}
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
