const server = require('./server.js');

const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
// Replace the uri string with your MongoDB deployment's connection string.
mongoose.connect("mongodb+srv://keshawn09:jav@Script101@cluster0.huozn.mongodb.net/first?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("hurray! We connected");
});
server.listen(PORT, () => {
    
  console.log(`Listening on port ${PORT}...`);
});
