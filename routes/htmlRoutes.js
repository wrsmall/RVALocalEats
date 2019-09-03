var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/index.html"));
  });


  // Load example page and pass in an example by id
  app.get("/survey/enter", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/register.html"));
  });



  app.get("/survey/retrive", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/find.html"));
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
