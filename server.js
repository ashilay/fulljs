import config, {nodeEnv} from './config';
import express from 'express';
import apiRouter from './api/index'

const server = express();


server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: 'escaped <em>content</em>',
        unescapedContent: 'unescaped <em>content</em>'
    });
});

server.use('/api', apiRouter);

server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port', config.port);
});
