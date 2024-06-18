import express from 'express';
import pool from '../data/database';

export default (router: express.Router): void => {
  router.get('/colecciones', (req, res) => {
    try {
      pool.query('SELECT * FROM coleccion order by id_coleccion', (error, result) => {
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

  router.post('/colecciones/add', (req: express.Request, res) => {
    const { nombre, categoria, desc_mot_col } = req.body;
    pool.query(
      'INSERT INTO coleccion (nombre, desc_mot_col, categoria) VALUES ($1, $2, $3)',
      [nombre, desc_mot_col, categoria],
      (error) => {
        if (error) {
          console.log(error);
          res.status(500).send('Internal server error');
        } else {
          pool.query(
            'SELECT * FROM coleccion order by id_coleccion desc limit 1',
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

  router.put('/colecciones/update/:id', (req: express.Request, res) => {
    const { nombre, categoria, desc_mot_col } = req.body;
    const { id } = req.params;
    pool.query(
      'UPDATE coleccion SET nombre = $1, desc_mot_col = $2, categoria = $3 WHERE id_coleccion = $4',
      [nombre, desc_mot_col, categoria, id],
      (error) => {
        if (error) {
          console.log(error);
          res.status(500).send('Internal server error');
        } else {
          pool.query(
            'SELECT * FROM coleccion WHERE id_coleccion = $1',
            [id],
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

  router.delete('/colecciones/delete/:id', (req: express.Request, res) => {
    const { id } = req.params;
    pool.query(
      'DELETE FROM coleccion WHERE id_coleccion = $1',
      [id],
      (error) => {
        if (error) {
          console.log(error);
          res.status(500).send('Internal server error');
        } else {
          res.send('Coleccion eliminada');
        }
      }
    );
  });
};
