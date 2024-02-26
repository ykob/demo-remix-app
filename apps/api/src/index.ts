import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
if (process.env.NODE_ENV === 'production') {
  app.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}/`);
  });
}

export const viteNodeApp = app;
