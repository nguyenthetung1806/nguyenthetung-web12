const authorize = (req, res, next) => {
  if (!req.session || !req.session.userInfo) {
    // res.status(401).send("Unauthorized!");
    next();
  } else next();
};

module.exports = { authorize };
