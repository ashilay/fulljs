import config, {nodeEnv} from './config';
import express from 'express';
import path from 'path';
import apiRouter from './api/index'
import sassMiddleware from 'node-sass-middleware';

const server = express();

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get('/', (req, res) => {
    serverRender()
        .then(({initialData, initialMarkup}) => {
            res.render('index', {
                initialData,
                initialMarkup
            })
        })
        .catch(console.error);
});

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.use('/api', apiRouter);

server.use(express.static('public'));

server.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port);
});
