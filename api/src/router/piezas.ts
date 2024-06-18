import express from 'express';
import pool from '../data/database';

export default (router: express.Router): void => {
  router.get('/piezas', (req, res) => {
    try {
      pool.query(
        "select p.id_coleccion, c.nombre coleccion, p.nro_p, p.id_molde, concat(m.tipo, ' ', m.volumen) molde, p.descripcion, p.precio from pieza p inner join coleccion c on p.id_coleccion = c.id_coleccion inner join molde m on p.id_molde = m.id_molde",
        (error, result) => {
          if (error) {
            console.log(error);
            res.status(500).send('Internal server error');
          } else {
            res.send(result.rows);
          }
        }
      );
    } catch (e) {
      console.log(e);
      res.status(500).send('Internal server error');
    }
  });

  router.post('/piezas/add', (req: express.Request, res) => {
    const { id_coleccion, id_molde, descripcion, precio } = req.body;
    pool.query(
      'INSERT INTO pieza (id_coleccion, id_molde, descripcion, precio) VALUES ($1, $2, $3, $4)',
      [id_coleccion, id_molde, descripcion, precio],
      (error) => {
        if (error) {
          console.log(error);
          res.status(500).send('Internal server error');
        } else {
          pool.query(
            "select p.id_coleccion, c.nombre coleccion, p.nro_p, p.id_molde, concat(m.tipo, ' ', m.volumen) molde, p.descripcion, p.precio from pieza p inner join coleccion c on p.id_coleccion = c.id_coleccion inner join molde m on p.id_molde = m.id_molde order by nro_p desc limit 1",
            (error, result) => {
              if (error) {
                console.log(error);
                res.status(500).send('Internal server error');
              } else {
                res.send(result.rows[0]);
              }
            }
          );
        }
      }
    );
  });
};
