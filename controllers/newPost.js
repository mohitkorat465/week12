module.exports = (req, res) => {
  if (req.session.userId) {
    return res.render("create", { createPost: true });  // Week 11
  }
  res.redirect("/auth/login");
};
