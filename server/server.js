const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'occlaptop1',
    port: 5432
});

//getting all inquiries
app.get("/contact", function(req, res) {
    pool.query('SELECT * FROM contacts', (error, result) => {
        res.json(result.rows);
    });
});

//getting a specific inquiry
app.get("/contact/:id", function(req, res) {
    const contactId = req.params.id;
    pool.query(`SELECT * FROM contacts where id = $1`, [contactId], (error, result) => {
        res.json(result.rows);
    });
});

//sending an inquiry
app.post("/contact", (req, res) => {
    const userName = req.body.name;
    const userLastName = req.body.last_name;
    const userEmail = req.body.email;
    const userAge = req.body.age;
    const userIssue = req.body.issue;

    //conditions
    if (!req.body.name || req.body.name.trim() === '' ){
        return res.status(400).send("You have to fill in your first name!")
    };

    if (!req.body.last_name || req.body.last_name.trim() === ''){
        return res.status(400).send("You have to fill in your last name!")
    };

    if (!req.body.email || req.body.email.trim() === ''){
        return res.status(400).send("You have to fill in your email!")
    };
    
    if (!req.body.age){
        return res.status(400).send("You have to fill in your age!")
    };
        
    if (!req.body.issue || req.body.issue.trim() === ''){
        return res.status(400).send("You have to pick a proper issue!")
    };

    //query    
    const query = `INSERT INTO contacts (name, last_name, email, age, issue) VALUES($1, $2, $3, $4, $5)`

    pool
    .query(query, [userName, userLastName, userEmail, userAge, userIssue], (error) => {
        if (error){
            console.log(error);
            res.status(500);
        } else {
            res.status(200).send("Your inquiry has been sent successfully!");
        };
    });
});

app.listen(3001, function() {
    console.log("Server is listening on port 3001. Ready to accept requests!");
});