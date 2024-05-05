import express from 'express';
import TodoController from '../../controllers/todoList/index.ts'; 

const router = express.Router();

router.post('/create-new-item', TodoController.createNewItem); 
router.post('/get-all-item-list', TodoController.getAllItems); 
export default router;
