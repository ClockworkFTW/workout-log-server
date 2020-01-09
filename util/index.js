const jwt = require("jsonwebtoken");

// Token verification middleware
const verifyToken = (req, res, next) => {
	const authorization = req.get("authorization");

	if (!authorization) {
		return res.status(400).json({ error: "token missing" });
	}

	const token = authorization.split(" ")[1];

	try {
		req.user = jwt.verify(token, "secret");
		next();
	} catch (error) {
		return res.status(400).json({ error: "token invalid" });
	}
};

module.exports = verifyToken;
