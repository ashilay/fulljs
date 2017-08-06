import config, {nodeEnv} from './config';
import express from 'express';
import path from 'path';
import apiRouter from './api/index'
import sassMiddleware from 'node-sass-middleware';

const server = express();


server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: 'escaped <em>content</em>',
        unescapedContent: 'unescaped <em>content</em>'
    });
});

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.use('/api', apiRouter);

server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port', config.port);
});
