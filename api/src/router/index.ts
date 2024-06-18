import express from 'express';
import colecciones from './colecciones';
import vajillas from './vajillas';
import moldes from './moldes';
import piezas from './piezas';

const router = express.Router();

export default (): express.Router => {
  colecciones(router);
  vajillas(router);
  moldes(router);
  piezas(router);

  return router;
};
