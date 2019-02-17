/**
 * consts
 */
const consts = {
	LANGUAGE: {
		JAVASCRIPT: 'JAVASCRIPT',
		PYTHON: 'PYTHON',
		JAVA: 'JAVA'
	},
	MODE: {
		JAVASCRIPT: 'javascript',
		PYTHON: 'python',
		JAVA: 'text/x-java'
	},
	CODE: {
		JAVASCRIPT: {
			NONE: `// Your code here!\nfunction fn(n) { \n    return n;\n}`
		},
		PYTHON: {
			NONE: `# Your code here!\ndef fn(n):\n    return n\n`
		},
		JAVA: {
			NONE: `// Your code here!\nstatic class Prac\n{\n    public String fn(n) {\n        return "Hello, World!";\n    }\n}`
		}
	},
	ALGORITHM: {
		NONE: 'NONE',
		FACTORIAL: 'FACTORIAL'
	}
};

export default consts;