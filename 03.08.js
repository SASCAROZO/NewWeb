// mo thu vien fs, express
// de cai thu vien dung npm init --y
// npm init -- save express
//const fs = require("fs");
const express = require("express");
xport = process.env.PORT || 3000;

const app = express();
const router = express.Router()

router.get('/', 
(req, res) => {
    res.sendFile("./View/home.html");
});

router.get('/', 
(req, res) => {
    res.sendFile("./View/profile.html");
});

//--- Logout
router.get('/',
    (req, res) => {
        res.sendFile("./View/logout.html");
    }
);

//--- Login
router.get('/',
    (req, res) => {
        res.sendFile("./View/login.html");
    }
);

app.use("/",router);
app.listen(xport, 
    (err) =>{
        console.log("\n Tao WEB tai", xport, "voi", err);
    }
);