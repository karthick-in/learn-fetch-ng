	var http = require("http");
	var express = require('express');
	var app = express();
	var mysql = require('mysql');
	var bodyParser = require('body-parser');

	var connection = mysql.createConnection({
	  host: 'db4free.net',
	  user: 'karthickr',
	  password: '11221122',
	  database: 'rtest_employees'
	});

	connection.connect(function (err) {
	  if (err) throw err
	  console.log('You are now connected...')
	})

	app.use(bodyParser.json()); // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	  extended: true
	}));

	//CORS Middleware
	app.use(function (req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
	  next();
	});

	var server = app.listen(3000, "127.0.0.1", function () {
	  console.log("Example app listening at http://%s:%s", server.address().address, server.address().port)
	});

	app.get('/', function (req, res) {
		res.end("Try this URL : http://localhost:3000/employees ");
	  });

	app.get('/employees', function (req, res) {
	  connection.query('select * from test', function (error, results, fields) {
	    if (error) throw error;
	    res.end(JSON.stringify(results));
	  });
	});

	app.post('/register', (req, res) =>{
		let emp = req.body
		console.log("Got the req : "+emp.name, emp.age)
		let sql = "insert into test(name,age) values('"+emp.name+"',"+emp.age+")"
		connection.query(sql, function(error, results, fields){
			if(error) throw error			
			res.status(200).send(JSON.stringify(results))
		})
	})

	app.post('/change', (req, res) =>{
		let user = req.body
		console.log("Change req gotten")
		let sql = "update test set age="+user.age+" where name='"+user.name+"'"
		connection.query(sql, function(error, results, fields){
			if(error) throw error;			
			res.status(200).send(JSON.stringify(results));			
		})
	})