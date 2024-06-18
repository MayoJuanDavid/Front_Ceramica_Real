import express from 'express';
import colecciones from './colecciones';
import vajillas from './vajillas';

const router = express.Router();

export default (): express.Router => {
  colecciones(router);
  vajillas(router);

  return router;
};
