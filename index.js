const app = require('./utils/app');
const db = require('./utils/db');
const articleRouter = require('./routes/articles');

app.use('/', articleRouter);

app.listen(3013, () => {
    console.log('Server RUNNING on localhost:3012');
});