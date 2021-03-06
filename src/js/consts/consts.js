/**
 * consts
 */
const consts = {
    LANGUAGE: {
        JAVASCRIPT: 'javascript',
        PYTHON: 'python',
        JAVA: 'java'
    },
    MODE: {
        JAVASCRIPT: 'javascript',
        PYTHON: 'python',
        JAVA: 'text/x-java'
    },
    CODE: {
        javascript: {
            canvas: `var ctx = document.getElementById('canvas').getContext('2d');\n`,
            none: `// Your code here!\nfunction fn(n) { \n    return n;\n}`,
            factorial: `// Your factorial code here!\nfunction fn(n) { \n    return n;\n}`,
            gcd: `// Your gcd code here!\nfunction fn(a, b) { \n    return;\n}`,
            fibonacci: `// Your fibonacci code here!\nfunction fn(n) { \n    let result = 0;\n    return result;\n}`
        },
        python: {
            none: `# Your code here!\ndef fn(n):\n    return n\n`
        },
        java: {
            none: `// Your code here!\nstatic class Prac\n{\n    public String fn(n) {\n        return "Hello, World!";\n    }\n}`
        }
    },
    ALGORITHM: {
        CANVAS: 'canvas',
        NONE: 'none',
        FACTORIAL: 'factorial',
        GCD: 'gcd',
        FIBONACCIL: 'fibonacci'
    },
    QUESTIONS: {
        FILLRECT: 'fillRect',
        TRIANGLE: 'triangle',
        SMILE: 'smile'
    }
};

export default consts;