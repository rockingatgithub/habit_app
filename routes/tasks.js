const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasks_controller');
router.post('/create', tasksController.create);
router.get('/weekview', tasksController.weekview)
// router.get('/updateTrue', tasksController)
// router.get('/updateFalse', tasksController)
module.exports =router;