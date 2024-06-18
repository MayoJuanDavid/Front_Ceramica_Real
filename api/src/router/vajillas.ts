import express from 'express';
import pool from '../data/database';

export default (router: express.Router): void => {
  router.get('/vajillas', (req, res) => {
    try {
      pool.query('SELECT * FROM vajilla', (error, result) => {
        if (error) {
          console.log(error);
          res.status(500).send('Internal server error');
        } else {
          res.send(result.rows);
        }
      });
    } catch (e) {
      console.log(e);
      res.status(500).send('Internal server error');
    }
  });

  router.post('/vajillas/add', (req: express.Request, res) => {
    const { nombre, cant_p, descripcion } = req.body;
    pool.query(
      'INSERT INTO vajilla (nombre, cant_p, descripcion) VALUES ($1, $2, $3)',
      [nombre, cant_p, descripcion],
      (error) => {
        if (error) {
          console.log(error);
          res.status(500).send('Internal server error');
        } else {
          pool.query(
            'SELECT * FROM vajilla order by nro_v desc limit 1',
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

  router.put('/vajillas/update/:nro_v', (req: express.Request, res) => {
    const { nombre, cant_p, descripcion } = req.body;
    const { nro_v } = req.params;
    pool.query(
      'UPDATE vajilla SET nombre = $1, cant_p = $2, descripcion = $3 WHERE nro_v = $4',
      [nombre, cant_p, descripcion, Number(nro_v)],
      (error) => {
        if (error) {
          console.log(error);
          res.status(500).send('Internal server error');
        } else {
          res.send('Vajilla actualizada');
        }
      }
    );
  });

  router.delete('/vajillas/delete/:nro_v', (req, res) => {
    const { nro_v } = req.params;
    pool.query('DELETE FROM vajilla WHERE nro_v = $1', [nro_v], (error) => {
      if (error) {
        console.log(error);
        res.status(500).send('Internal server error');
      } else {
        res.send('Vajilla eliminada');
      }
    });
  });
};
