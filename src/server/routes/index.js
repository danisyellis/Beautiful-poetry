import React from 'react';
import { renderToString } from 'react-dom/server';
const router = require('express').Router();
import { StaticRouter } from 'react-router-dom';
import renderFullPage from './renderFullPage';
import App from '../../client/components/app';

router.use('*', (req, res) => {

  const context = {};

  const html = renderToString(
      <StaticRouter context={context} location={req.originalUrl}>
        <App />
      </StaticRouter>
  );

  res.send(renderFullPage(html));
});

module.exports = router;
