const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    const newItems = req.body;
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
    VALUES ($1, $2, $3, $4);`

    const queryArgs = [
        newItems.feeling,
        newItems.understanding,
        newItems.support,
        newItems.comments,
      ];

    pool.query(queryText, queryArgs)
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
