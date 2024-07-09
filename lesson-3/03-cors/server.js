import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  }),
);

app.get('/movies', (req, res) => {
  res.send([
    {
      id: 1,
      title: 'Title 1',
    },
    {
      id: 2,
      title: 'Title 2',
    },
    {
      id: 3,
      title: 'Title 3',
    },
  ]);
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
