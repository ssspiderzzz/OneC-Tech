const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const axios = require("axios");
require("dotenv").config();

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static("public"));

App.get("/api/submission", (req, res) => {
  const submission = `https://www.formstack.com/api/v2/submission/551042206.json?oauth_token=${process.env.TOKEN}`;
  axios
    .get(submission)
    .then(response => {
      // handle success
      res.json(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
});

App.get("/api/form", (req, res) => {
  const form = `https://www.formstack.com/api/v2/form/3634968.json?oauth_token=${process.env.TOKEN}`;
  console.log("here");
  axios
    .get(form)
    .then(response => {
      console.log("here222");
      // handle success
      console.log(response.data.fields);
      res.json(response.data.fields);
    })
    .catch(error => {
      console.log(error);
    });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
