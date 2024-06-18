import express from 'express';
import colecciones from './colecciones';

const router = express.Router();

export default (): express.Router => {
  colecciones(router);

  return router;
};
