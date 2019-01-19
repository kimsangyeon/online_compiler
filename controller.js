const fs = require('fs');
const exec = require('child_process').exec;

const controller = {
    
    /**
      * index.html rendering
      **/
    index: (req, res) => {
        res.render('index.html');
    },

    /**
      * code compile
      **/
    compile: (req, res) => {
        const code = req.body.code;

        if (!code) {
            console.log('Nothing code!');
        }

        writeFileJS(code);
        execJS().then((data) => {
            res.json(data);
        });
    }
};

/**
  * Javascript write file
  **/
function writeFileJS(code) {
    try {
        fs.writeFileSync("./tmp/code.js", `console.log((${code})());`); 
        console.log("The javascript file was saved!");
    } catch(err) {
        console.log(err);
    }
}

/**
  * execute Javascript file
  * ex) node .js
  **/
function execJS() {
    const compileStartTime = new Date().getTime();

    return new Promise((resolve, reject) => {
        exec(`node ./tmp/code.js`, function (error, stdout, stderr) {
            if(error != null) {
                console.log('error : %s', error);
                reject();
            }

            const compileEndTime = new Date().getTime();
            const compileTime = compileEndTime - compileStartTime;

            console.log('stdout : %s', stdout);
            console.log('stderr : %s', stderr);
            console.log('compile time: ' + compileTime);

            resolve({stdout: stdout, stderr: stderr, time: compileTime});
        });
    });
}


module.exports = controller;