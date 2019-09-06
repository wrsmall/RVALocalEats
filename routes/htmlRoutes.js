var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/index.html"));
  });


  // Load example page and pass in an example by id
  app.get("/about", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/register.html"));
  });



  app.get("/find", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/find.html"));
  });

  app.get("/results", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/results.html"));
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
