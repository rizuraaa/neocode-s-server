module.exports = {
  index: (req, res) => {
    res.render("index", {
      title: "Welcome to neocode-s server!",
    });
  },
};
