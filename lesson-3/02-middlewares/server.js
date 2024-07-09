import express from 'express';
import pino from 'pino-http';

const app = express();

app.use(pino());

// app.use((req, res, next) => {
//   console.log("Method:", req.method);
//   console.log("URL:", req.url);

//   next();
// });

app.get('/', (req, res) => {
  console.log(undefined.unknown());
  res.send('Hello, World!');
});

app.use((req, res, next) => {
  res.status(404).send('Not Found:-(');
});

app.use((error, req, res, next) => {
  res.status(500).send('Internal Server Error:-(');
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
