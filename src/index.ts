import {config} from './config/config';
import {ExpressApp} from './server/app'

const app = new ExpressApp();

app.useCookieParser(config.cookieParser.secret, config.cookieParser.options)
    .useMorgan(config.morgan.format)
    .useJsonBodyParser()
    .useCors();


app.useRoutes();

app.listen(config.app.port);

// (async () => {
//      await app.initMongoService(config.mongo);
// })();
