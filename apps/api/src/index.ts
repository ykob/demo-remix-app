import express from 'express';
import auth from './api/auth/auth.routes.js';
import users from './api/users/users.routes.js';

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/auth', auth);
app.use('/users', users);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export const viteNodeApp = app;
