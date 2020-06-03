import * as bodyParser from 'body-parser';


export const middleware = {
  //Helps parse the request body for validation and easier handling
  bodyParser: app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  },


};
