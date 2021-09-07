import express from 'express';
const router = express.Router();
import userModel from '../models/User.model.js';

router.get('/api/data', async (req, res) => {
    const data = await userModel.find();
    res.send(data);
})

export default router;