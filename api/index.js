import express from 'express';
import userData from './user';
import data from '../src/testData';

const router = express.Router();

router.get('/contests', (req, res) => {
    res.send({
        contests: data.contests
    });
});

router.get('/contests/:contestId', (req, res) => {
    const contest = data.contests.find(requestedContest);

    function requestedContest({id}) {
        return id === +req.params.contestId;
    }

    contest.description = 'contest description';
    res.send(contest);
});

router.get('/user', (req, res) => {
    res.send({
        data: userData
    });
});

export default router;
