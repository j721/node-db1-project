const express = require('express');

// database access using knex
const db = require('../data/dbConfig.js');

const router = express.Router();

//GET
  // get a list of accounts from the database
  // select * from accounts;
router.get("/", (req,res)=>{
    db.select("*")
    .from("accounts")
    .then(accounts=>{
        res.status(200).json({data: accounts})
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({message: error.message })
    })
})

module.exports = router; 