import express from 'express';
import{ deleteUser, test, updateUser, getUSerListings }from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
 
const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyToken, updateUser); 
router.delete('/deleteUser/:id', verifyToken, deleteUser);
router.get('/listings/:id', verifyToken, getUSerListings);

export default router;