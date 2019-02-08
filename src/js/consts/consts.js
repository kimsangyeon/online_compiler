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
		JAVASCRIPT: `// Your code here!\nfunction fn() { \n    return;\n}`,
		PYTHON: `# Your code here!\ndef fn():\n    return\n\nprint(fn())`,
		JAVA: `// Your code here!\nstatic class Prac\n{\n    public String run() {\n        return "Hello, World!";\n    }\n}`
	}
};

export default consts;