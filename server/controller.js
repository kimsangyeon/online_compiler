const fs = require('fs');
const exec = require('child_process').exec;
const algorithmData = require('./consts/algorithm');

const controller = {
    /**
     * index.html rendering
     */
    index: (req, res) => {
        res.render('compiler.html');
    },

    /**
     * canvas.html rendering
     */
    canvas: (req, res) => {
        res.render('canvas.html');
    },

    /**
     * code compile
     */
    compile: (req, res) => {
        const {language, algorithm, code} = req.body;
        const data = algorithmData[algorithm];
        const resData = [];

        if (!code) {
            console.log('Nothing code!');
        }

        switch(language) {
            case 'javascript':
                writeFileJS(code);
                const end = data.length;
                data.forEach(({args, result}) => new Promise((resolve, reject) => {
                    execFile(`node ./tmp/code.js ${args}`.replace(/"/, ''), result).then((data) => {
                        resData.push(data);
                        resolve(resData);
                    });
                }).then((resData) => {
                    if (data.length === resData.length) {
                        res.json(JSON.stringify(resData));
                    }
                }));
                break;
            case 'python':
                writeFilePY(code);
                execFile(`python ./tmp/code.py`).then((data) => {
                    res.json(data);
                });
                break;
            case 'java':
                writeFileJava(code);
                execFile(`javac ./tmp/code.java`);
                execFile(`java -cp ./tmp code`).then((data) => {
                    res.json(data);
                });
                break;
        }
    }
};

/**
 * Javascript write file
 * @param {String} code
 */
function writeFileJS(code) {
    try {
        const writeCode = `const argNum = process.argv.slice(2).map((arg => parseInt(arg)));
                            ${code}
                            console.log(fn(...argNum));`;

        fs.writeFileSync("./tmp/code.js", writeCode); 
        console.log("The javascript file was saved!");
    } catch(err) {
        console.log(err);
    }
}

/**
 * python write file
 * @param {String} code
 */
function writeFilePY(code) {
    try {
        fs.writeFileSync("./tmp/code.py", `${code}`); 
        console.log("The python file was saved!");
    } catch(err) {
        console.log(err);
    }
}

/**
 * java write file
 * @param {String} code
 */
function writeFileJava(code) {
    let body = "public class code\n{\n    public static void main(String[] args) {\n        Prac prac = new Prac();\n        System.out.println(prac.run());\n    }\n";
    let footer = "\n}";

    body += code;
    body += footer;

    try {
        fs.writeFileSync("./tmp/code.java", `${body}`);
        console.log("The java file was saved!");
    } catch(err) {
        console.log(err);
    }
}

/**
 * execute code file
 * ex) node .js, python .py
 * @param {command}
 */
function execFile(command, result) {
    const compileStartTime = new Date().getTime();

    return new Promise((resolve, reject) => {
        exec(command, function (error, stdout, stderr) {
            if(error != null) {
                console.log('error : %s', error);
                reject();
            }

            const compileEndTime = new Date().getTime();
            const compileTime = compileEndTime - compileStartTime;
            const compileResult = parseFloat(stdout) === parseFloat(result);

            console.log('result:', result);
            console.log('stdout : %s', stdout);
            console.log('stderr : %s', stderr);
            console.log('compile time: ' + compileTime);

            resolve({stdout: stdout, stderr: stderr, time: compileTime, result: compileResult});
        });
    });
}

module.exports = controller;