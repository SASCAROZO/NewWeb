// mo thu vien fs, express
// de cai thu vien dung npm init --y
// npm init -- save express
//const fs = require("fs");
const express = require("express");
xport = process.env.PORT || 3000;

const app = express();
const router = express.Router()

router.get('/home', 
(req, res) => {
    res.setHeader('Content-Type','text/html; charset = utf-8');
    res.send("HomePage");
});

router.get('/Profile', 
(req, res) => {
    res.setHeader('Content-Type','text/html; charset = utf-8');
    res.send("ProfilePage");
});

//--- Logout
router.get('/logout',
    (req, res) => {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send("LogoutPage");
    }
);

//--- Login
router.get('/login',
    (req, res) => {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send("LoginPage");
    }
);

app.use("/",router);
app.listen(xport, 
    (err) =>{
        console.log("\n Tao WEB tai", xport, "voi", err);
    }
);