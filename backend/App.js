import App from './server.js';
import db from './db/connect.js';

App.listen(App.get('port'),() => {
    console.log('server listen in port:', App.get('port'))
})