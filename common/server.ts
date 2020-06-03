import * as express from 'express';
import { Application } from 'express';
import { middleware } from '../middleware/middleware';

const app = express();

export default class ExpressServer {
  constructor() {
    middleware.bodyParser(app);
  }

  router(routes: (app: Application) => void): ExpressServer {
    app.enable('case sensitive routing');
    routes(app);
    return this;
  }

  listen(port: number = 8080): Application {
    const welcome = wport => {
      return () => {
        return console.log(
          `up and running in on port: ${wport}}`
        );
      };
    };
    app.listen(port, welcome(port));
    return app;
  }


}
