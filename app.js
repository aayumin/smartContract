// 서버 실행시키는 코드
// 콘솔창에 node app 입력 후
// 주소창에 http://lynx.snu.ac.kr:8080/  입력한다

var express = require('express');  
var app = express();  

var server = app.listen(8080);	
var io = require('socket.io').listen(server);
server.listen(8080, function() { console.log('Server is running..');});


//var server = require("http").createServer(app);	
//var io = require("socket.io")(server);
//server.listen(8080, function() { console.log('Server is running..');});


app.use(express.static("public"));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/html/index.html");
})

io.on('connection', function (err, socket) {
if(!err) {
    console.log('ping-pong started');
}
else console.log('connect ERROR bbb : '+err);
});

//////////////////////




/////////////////////////

/*
var Web3 = require("web3");
web3 = new Web3(new Web3.providers.HttpProvider("http://lynx.snu.ac.kr:8080")); 
//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 



var testContractABI = web3.eth.contract([
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "people",
      "outputs": [
        {
          "name": "age",
          "type": "uint256"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "id",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "sayHello",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "setAddress",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_a",
          "type": "uint256"
        },
        {
          "name": "_b",
          "type": "uint256"
        }
      ],
      "name": "setIntegerSum",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getInteger",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_age",
          "type": "uint256"
        },
        {
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addPerson",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCurr",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_curr",
          "type": "uint256"
        }
      ],
      "name": "getName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getSuccess",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
);

var testContract = testContractABI.at("0x2fe861f78ce98f8dde4214d8faf02220499d6240");
*/



//////////////////////////




//////////////////////////




app.get("/submit_1", function(req, res){
    var a = req.query.a;
    var b = req.query.b;
    console.log(web3.eth.accounts[0]);
    testContract.setIntegerSum.sendTransaction(a, b, {
        from: web3.eth.accounts[0],
    }, function(error, transactionHash){
        if (!error)
        {
            res.send(transactionHash);
        }
        else
        {
            res.send("Error");
        }
    })
})


app.get("/getInfo_1", function(req, res){
    //var fileHash = req.query.hash;
    var result = testContract.getInteger.call();
    res.send(result);
})

/*
testContract.logFileAddedStatus().watch(function(error, result){
    if(!error)
    {
        if(result.args.status == true)
        {
            io.send(result);
        }
    }
})
*/

