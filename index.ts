
import Server from './common/server';
import routes from './common/routes';
import * as mongoose from 'mongoose';

mongoose.connect('mongodb+srv://esteban:Estsolba@cluster0-y7xkj.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

export default new Server().router(routes).listen(8080);