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
	CODE_DEFAULT: {
		JAVASCRIPT: `// Your code here!\nfunction fn(n) { \n    return n;\n}`,
		PYTHON: `# Your code here!\ndef fn(n):\n    return n\n`,
		JAVA: `// Your code here!\nstatic class Prac\n{\n    public String fn(n) {\n        return "Hello, World!";\n    }\n}`
	},
	ALGORITHM: {
		FACTORIAL: 'factorial'
	}
};

export default consts;