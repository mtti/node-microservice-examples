const { Microservice } = require('@mtti/microservice');

const plugin = {
  config: async (config) => {
    console.log('Plugin configurator called');
    return config;
  },

  init: async (context) => {
    console.log('Plugin initializer called');
  },
};

new Microservice('example-service')
  .use(plugin)
  .config(async (config) => {
    console.log('Configurator called');
    return config;
  })
  .init(async (context) => {
    console.log('Initializer called');
  })
  .start()
    .then((service) => {
      console.log('Service started');
    });
