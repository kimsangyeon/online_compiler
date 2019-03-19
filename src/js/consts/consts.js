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
            canvas: `var ctx = document.getElementById('canvas').getContext('2d');`,
            none: `// Your code here!\nfunction fn(n) { \n    return n;\n}`,
            factorial: `// Your code here!\nfunction fn(n) { \n    return n;\n}`,
            gcd: `// Your code here!\nfunction fn(a, b) { \n    return;\n}`
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
        GCD: 'gcd'
    }
};

export default consts;