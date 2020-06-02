import * as bodyParser from 'body-parser';


export const middleware = {
 
  bodyParser: app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  },

  
};
