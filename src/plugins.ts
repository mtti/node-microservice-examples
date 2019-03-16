import { Microservice, IConfig, IContext } from '@mtti/microservice';

class ClassPlugin implements IConfig {
  public async config(config:IConfig):Promise<IConfig> {
    console.log('ClassPlugin configurator called');
    return config;
  }

  public async init():Promise<void> {
    console.log('ClassPlugin initializer called');
  }
}

const SimplePlugin = {
  config: async (config:IConfig):Promise<IConfig> => {
    console.log('SimplePlugin configurator called');
    return config;
  },
  init: async (context:IContext):Promise<void> => {
    console.log('SimplePlugin configurator called');
  },
};

new Microservice('example-service')
  .use(new ClassPlugin())
  .use(SimplePlugin)
  .config(async (config:IConfig):Promise<IConfig> => {
    console.log('Configurator called');
    return config;
  })
  .init(async (context:IContext):Promise<void> => {
    console.log('Initializer called');
  })
  .start();
