const express = require('express');
const { Microservice } = require('@mtti/microservice');

new Microservice('express-example')
  .config(async (config) => {
    return {
      ...config,
      expressPort: process.env.PORT || 8080,
    };
  })
  .init(async (context) => {
    const app = express();
    app.get('/', (req, res) => {
      res.send('Hello world');
    });
    app.listen(context.config.expressPort);
  })
  .start()
    .then((context) => {
      context.log.info(`Listening on ${context.config.expressPort}`);
    });
