// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
app.use(express.json());
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/:date", (req, res) => {
  try {
    const {date} = req.params;
    console.log(date);
    var dateObject = new Date(date);
    console.log(dateObject);
    const defaultTimes = {
      "unix": Date.now() / 1000,
      "utc": Date.now().utcTime
    }
    if (date === "" || date === null) {
      res.send(defaultTimes)
    }
    else if(/^\d+$/.test(date)) {
      dateObject = new Date(parseInt(date));
    }
    var utcTime = dateObject.toUTCString();
    var unixTime = dateObject.getTime()/1000;
    const times = {
      "unix": `${unixTime}`,
      "utc": `${utcTime}`
    }
    console.log(times);
    res.send(times);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
