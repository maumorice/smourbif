const express = require('express')
const app = express()

app.get('/',[example], function (req, res) {
  res.send('Hello World!')
})

function example(req,res,next){
	req.test= '15 DAYS'
	next();
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
