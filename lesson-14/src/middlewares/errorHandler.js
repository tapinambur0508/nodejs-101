import { isHttpError } from 'http-errors';

function errorHandler(error, _req, res, _next) {
  console.error(error);

  if (isHttpError(error) === true) {
    return res.status(error.status).send({
      status: error.status,
      message: error.message,
    });
  }

  res.status(500).send({
    status: 500,
    message: 'Internal server error',
  });
}

export { errorHandler };
