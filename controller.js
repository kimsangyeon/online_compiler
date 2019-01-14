const fs = require('fs');

const controller = {
    
    index: (req, res) => {
        res.render('index.html');
    },

    compile: (req, res) => {
        const code = req.body.code;

        if (!code) {
            console.log('Nothing code!');
        }

        writeFileJS(code);
        console.log(code);
    }
};

function writeFileJS(code) {
    fs.writeFileSync("./tmp/code.js", code, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The javascript file was saved!");
    }); 
}


module.exports = controller;