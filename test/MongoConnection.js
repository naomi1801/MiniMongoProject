const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set("useUnifiedTopology", true);

before(function (done) {
  mongoose.connect("mongodb://localhost/MongoDBAssignment", {
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  mongoose.connection
    .once("open", function () {
      console.log("Connection has been established...");
      done();
    })
    .on("error", function () {
      console.log("Connection Error: ", error);
    });
});
