import config from './config';
import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

const serverRender = () =>
    axios.get(`${config.serverUrl}/api/contests`)
        .then(({data}) => {
            return {
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialContests={data.contests} />
                ),
                initialData: data
            };
        });

export default serverRender;
