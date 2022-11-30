require('dotenv').config({ path: './config/.env' });

const app = require('./app');

const port = process.env.PORT;
app.listen('3000', () => console.log(`http://localhost:${port}`));
