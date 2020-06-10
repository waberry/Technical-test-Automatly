const request = require('request')
var myArgs = process.argv.slice(2);

request.post('http://localhost:8080/notify/' + myArgs[0], {
  json: {
    message : myArgs[1],
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(body)
})
