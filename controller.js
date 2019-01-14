const controller = {
	
	index: (req, res) => {
        res.render('index.html');
    },

	compile: (req, res) => {
		const body = req.body;
	}
};

module.exports = controller;