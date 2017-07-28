import express from 'express';
import userData from './user';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        data: []
    });
});

router.get('/user', (req, res) => {
    res.send({
        data: userData
    });
});

export default router;
