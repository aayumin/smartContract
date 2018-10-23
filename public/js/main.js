
//var Web3 = require('web3');
	 	var web3 = new Web3(new Web3.providers.HttpProvider("http://lynx.snu.ac.kr:8000"));
//var web3 = new Web3("http://lynx.snu.ac.kr:8000"); 
						//origin http://lynx.snu.ac.kr:8000

console.log('main.js 6-th line');	
//var temp2 = web3.eth.accounts[0];
//console.log(temp2);

//console.log(web3.eth.accounts[0]);
//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 
/* 
var testContractABI = web3.eth.contract([{"constant":false,"inputs":[{"name":"fileHash","type":"string"}],"name":"get","outputs":[{"name":"timestamp","type":"uint256"},{"name":"owner","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"string"},{"name":"fileHash","type":"string"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"status","type":"bool"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"owner","type":"string"},{"indexed":false,"name":"fileHash","type":"string"}],"name":"logFileAddedStatus","type":"event"}]);
*/



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


/////////////////////



function test_getAddr() 
{
	//web3.eth.getBalance("0x2c3b71c497190f8f549fbe3d7d28223c38c3657e", console.log);	
	web3.eth.getAccounts(function(error, accounts) {

	  if (!error) {

	    web3.eth.getBalance(accounts[0], function(error, balance) {

	      if (!error) {

		console.log("Your account: " +	accounts[0] + " has a balance of: " + balance.toNumber() / 1000000000000000000 + "Ether");

	      } else {

		console.error(error);

	      }

	    });

	  } else {

	    console.error(error);

	  }

	});
}


/////

var sum_outer;

function submit()
{
	
	var a = document.getElementById("inputInteger1").value;
	var b = document.getElementById("inputInteger2").value;
	
	
	
	if((a == "")||(b == ""))
	{
		alert("Please enter two numbers");
	}
	else
	{
		var sum = a*1+b*1;
		sum_outer = sum;
		//console.log(web3.eth.accounts[0]);
		console.log('the sum is '+ sum);
		/*
  		//var hash = sha1(event.target.result);

  		$.get("/submit?hash=" + hash + "&owner=" + owner, function(data){
  			if(data == "Error")
  			{
  				$("#message").text("An error occured.");
  			}
  			else
  			{
  				$("#message").html("Transaction hash: " + data);
  			}
    		});
    		*/
		
	}
	
}



function getInfo()
{
	alert('hello');
	$('#message').html('<h2> result is '+ sum_outer +'</h2>');
	/*
	var hash = sha1(event.target.result);

	$.get("/getInfo?hash=" + hash, function(data){
		if(data[0] == 0 && data[1] == "")
		{
			$("#message").html("File not found");
		}
		else
		{
			$("#message").html("Timestamp: " + data[0] + " Owner: " + data[1]);
		}
	});
	*/	
	
}
	
var socket = io.connect('http://lynx.snu.ac.kr:8080'); // originally 8080 // io("http")

socket.on("connect", function () {
	console.log("0");
	socket.emit("msg2", "hello msg2");
	socket.on("msg1", function (data) {
	
	console.log("2");
	console.log(data);
	//$("#message").html("<li>Txn Hash: " + msg.transactionHash + "\nOwner: " + msg.args.owner + "\nFile Hash: " + msg.args.fileHash + "</li>");
		
		
    });
});

