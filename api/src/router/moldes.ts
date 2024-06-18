import express from 'express';
import pool from '../data/database';

export default (router: express.Router): void => {
  router.get('/moldes', (req, res) => {
    try {
      pool.query('SELECT * FROM molde', (error, result) => {
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
};
