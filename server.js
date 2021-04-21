const express = require('express')

const Cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')


// App Config
const app = express();





const port = process.env.PORT || 8001





//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Cors());






if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}





app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


//Listener
app.listen(port, () => {
  console.log(`Server active, listening on port: ${port}`);
})
