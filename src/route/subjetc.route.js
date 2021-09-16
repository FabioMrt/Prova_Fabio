const express = require('express')
const router = express.Router()
const controller = require('../controller/subject.controller')

router.post('/', (req, res) => {
    controller.create
})
router.get('/', (req, res) => {
    controller.listAll
})
router.put('/:id', (req, res) => {
    controller.update
})
router.delete('/:id', (req, res) => {
    controller.remove
})

module.exports = router