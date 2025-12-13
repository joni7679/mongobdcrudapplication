const express = require('express');
const taskModel = require('../models/task.model');
const { featchAllTaks, getSingleByIdTask, deleteTask, markascompleteTask, createTask } = require('../controllers/taskController');
const router = express.Router()
router.post('/task', createTask);
router.get('/task', featchAllTaks)
//  fetch only id stu
router.get('/task/:id', getSingleByIdTask)
// delete.
router.delete('/task/:id', deleteTask)
// update logic here...
router.patch('/task/:id', async (req, res) => {
    const noteId = req.params.id;
    console.log("update data", noteId);
    const { title } = req.body;
    try {
        await taskModel.findOneAndUpdate(
            { _id: noteId },
            { title: title }
        );
        res.send({
            message: "note updated successfully!"
        });

    } catch (error) {
        res.status(500).send({
            error: "failed",
            details: error.message
        });
    }
});
router.put('/task/:id', updateTask);
router.put('/task/:id',markascompleteTask)
module.exports = router