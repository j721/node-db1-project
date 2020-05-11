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

//GET - get account by id
router.get('/:id', (req,res)=>{
    db('accounts')
    .where({id: req.params.id})
    .first() // pick the first record from array
    .then(account=>{
        if(account){
            res.status(200).json({data: account})
        } else{
            res.status(404).json({message: "No accounts by that Id"})
        }          
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({message: error.message})
    })
})

//Post -add a new account into array
router.post("/", (req,res)=>{
    const accountData = req.body
    db('accounts')
    .insert(accountData, 'id')
    .then((account)=>{
        res.status(201).json({data: account})
    })
    .catch((err)=>{
        res.status(500).json({message: error.message})
    })
})






module.exports = router; 