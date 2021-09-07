import express from 'express';
const router = express.Router();
import userModel from '../models/User.model.js';

router.post('/api/newMessage', async (req, res) => {
    const newMessage = req.body;
    console.log(newMessage)
    res.status(200).send('Success')
})

export default router;